import axios from "axios";
import { writeFileSync, existsSync } from "fs";
import path from "path";  

interface ContributorStats {
  username: string;
  displayname?: string;
  commits: number;
  prs_opened: number;
  prs_merged: number;
  issues_opened: number;
  issues_closed: number;
}

const TOKEN = process.env.GH_TOKEN;
if (!TOKEN) throw new Error("GITHUB_TOKEN is required to run");

const HEADERS: Record<string, string> = {
  Accept: "application/vnd.github+json",
  Authorization: `token ${TOKEN}`,
};

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function paginatedGet<T>(
  url: string,
  params: Record<string, string | number> = {}
): Promise<T[]> {
  let page = 1;
  const results: T[] = [];

  while (true) {
    const response = await axios.get<T[]>(url, {
      headers: HEADERS,
      params: { ...params, per_page: 100, page },
    });

    if (response.status === 202) {
      await sleep(3000);
      continue;
    }

    results.push(...response.data);

    if (response.data.length < 100) break;
    page++;
  }

  return results;
}

function getMonth(dateStr: string | null) {
  if (!dateStr) return null;
  const d = new Date(dateStr);
  return `${d.getUTCFullYear()}-${(d.getUTCMonth() + 1)
    .toString()
    .padStart(2, "0")}`;
}

export async function getLeaderboard() {
  const currentMonth = new Date();
  const currentMonthStr = `${currentMonth.getUTCFullYear()}-${(
    currentMonth.getUTCMonth() + 1
  )
    .toString()
    .padStart(2, "0")}`;

  const date = currentMonth.toLocaleString("en-US", {
    month: "long",
    year: "numeric",
  });

  const repos = await paginatedGet<{ name: string }>(
    `https://api.github.com/orgs/gtech-mulearn/repos`,
    { type: "all", sort: "updated" }
  );

  const contributorsMap: Record<
    string,
    { overall: ContributorStats; monthly: ContributorStats }
  > = {};

  const repoPromises = repos.map(async (repo) => {
    const [contributors, prs, issues] = await Promise.all([
      paginatedGet<{ login: string; contributions: number }>(
        `https://api.github.com/repos/gtech-mulearn/${repo.name}/contributors`
      ),
      paginatedGet<{
        user: { login: string } | null;
        created_at: string;
        merged_at: string | null;
      }>(`https://api.github.com/repos/gtech-mulearn/${repo.name}/pulls`, {
        state: "all",
      }),
      paginatedGet<{
        user: { login: string } | null;
        state: string;
        created_at: string;
        pull_request?: string;
      }>(`https://api.github.com/repos/gtech-mulearn/${repo.name}/issues`, {
        state: "all",
      }),
    ]);

    return { contributors, prs, issues };
  });

  const allRepoData = await Promise.all(repoPromises);

  for (const repoData of allRepoData) {
    const { contributors, prs, issues } = repoData;
    for (const c of contributors) {
      const login = c.login;
      if (!contributorsMap[login]) {
        contributorsMap[login] = {
          overall: {
            username: login,
            commits: 0,
            prs_opened: 0,
            prs_merged: 0,
            issues_opened: 0,
            issues_closed: 0,
          },
          monthly: {
            username: login,
            commits: 0,
            prs_opened: 0,
            prs_merged: 0,
            issues_opened: 0,
            issues_closed: 0,
          },
        };
      }
      contributorsMap[login].overall.commits += c.contributions;
    }

    for (const pr of prs) {
      if (!pr.user?.login) continue;
      const login = pr.user.login;
      if (!contributorsMap[login]) {
        contributorsMap[login] = {
          overall: {
            username: login,
            commits: 0,
            prs_opened: 0,
            prs_merged: 0,
            issues_opened: 0,
            issues_closed: 0,
          },
          monthly: {
            username: login,
            commits: 0,
            prs_opened: 0,
            prs_merged: 0,
            issues_opened: 0,
            issues_closed: 0,
          },
        };
      }
      contributorsMap[login].overall.prs_opened += 1;
      contributorsMap[login].overall.prs_merged += pr.merged_at ? 1 : 0;

      if (getMonth(pr.created_at) === currentMonthStr) {
        contributorsMap[login].monthly.prs_opened += 1;
        contributorsMap[login].monthly.prs_merged += pr.merged_at ? 1 : 0;
      }
    }

    for (const issue of issues) {
      if (issue.pull_request || !issue.user?.login) continue;
      const login = issue.user.login;
      if (!contributorsMap[login]) {
        contributorsMap[login] = {
          overall: {
            username: login,
            commits: 0,
            prs_opened: 0,
            prs_merged: 0,
            issues_opened: 0,
            issues_closed: 0,
          },
          monthly: {
              username: login,
            commits: 0,
            prs_opened: 0,
            prs_merged: 0,
            issues_opened: 0,
            issues_closed: 0,
          },
        };
      }
      contributorsMap[login].overall.issues_opened += 1;
      contributorsMap[login].overall.issues_closed +=
        issue.state === "closed" ? 1 : 0;

      if (getMonth(issue.created_at) === currentMonthStr) {
        contributorsMap[login].monthly.issues_opened += 1;
        contributorsMap[login].monthly.issues_closed +=
          issue.state === "closed" ? 1 : 0;
      }
    }
  }

  const top10Overall = Object.values(contributorsMap)
    .sort(
      (a, b) =>
        Object.values(b.overall).reduce(
          (sum, val) => sum + (typeof val === "number" ? val : 0),
          0
        ) -
        Object.values(a.overall).reduce(
          (sum, val) => sum + (typeof val === "number" ? val : 0),
          0
        )
    )
    .slice(0, 10)
    .map((c) => c.overall);

  const top10Monthly = Object.values(contributorsMap)
    .sort(
      (a, b) =>
        Object.values(b.monthly).reduce(
          (sum, val) => sum + (typeof val === "number" ? val : 0),
          0
        ) -
        Object.values(a.monthly).reduce(
          (sum, val) => sum + (typeof val === "number" ? val : 0),
          0
        )
    )
    .slice(0, 10)
    .map((c) => c.monthly);

  async function addDisplayNames(list: ContributorStats[]) {
    return Promise.all(
      list.map(async (contributor) => {
        try {
          const { data } = await axios.get(
            `https://api.github.com/users/${contributor.username}`,
            { headers: HEADERS }
          );
          contributor.displayname = data.name || contributor.username;
        } catch {
          contributor.displayname = contributor.username;
        }
        return contributor;
      })
    );
  }

  const Monthly = await addDisplayNames(top10Monthly);
  const Overall = await addDisplayNames(top10Overall);

  return {
    month: currentMonthStr,
    monthly: Monthly,
    overall: Overall,
    date,
  };
}

(async () => {
  try {
    const data = await getLeaderboard();

    const outputPath = path.join(
      process.cwd(),
      "src",
      "data",
      "leaderboard.json"
    );

    if (existsSync(outputPath)) {
      console.log(`✏️ Updating existing file: ${outputPath}`);
    } else {
      console.log(`📁 Creating new file: ${outputPath}`);
    }

    writeFileSync(outputPath, JSON.stringify(data, null, 2));
    console.log(`✅ Leaderboard saved to ${outputPath}`);
  } catch (err) {
    console.error("❌ Failed to generate leaderboard:", err);
    process.exit(1);
  }
})();