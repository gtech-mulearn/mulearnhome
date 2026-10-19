import { interestGroups } from "../data/interest-groups.data";
import type {
  ApiInterestGroup,
  InterestGroupDisplayItem,
  InterestGroupLocalMeta,
  InterestGroupResource,
} from "../types/interest-groups.types";

function normalizeName(str: string): string {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "")
    .replace(/interestgroup|ig$/g, "");
}

function byName(name: string): InterestGroupLocalMeta | undefined {
  return interestGroups.find((g) => g.name === name);
}

/**
 * The backend's IG names drift from the marketing copy in `interest-groups.data.ts` (typos,
 * abbreviations, legacy request-form names). Match on a normalized name first, then fall back
 * to keyword heuristics collected from real API payloads before giving up.
 */
export function getPresentationMetadata(apiName: string): InterestGroupLocalMeta | undefined {
  const normApi = normalizeName(apiName);

  const exact = interestGroups.find((local) => normalizeName(local.name) === normApi);
  if (exact) return exact;

  if (normApi.includes("uiux") || normApi.includes("uxui")) return byName("UI/UX");
  if (normApi.includes("creativedesign")) return byName("Creative Design");
  if (normApi.includes("arvr") || normApi.includes("vrar") || normApi.includes("arvrmr"))
    return byName("AR/VR");
  if (normApi.includes("cyber")) return byName("Cybersecurity");
  if (normApi.includes("blockchain")) return byName("Blockchain");
  if (
    normApi.includes("gamedevelopment") ||
    normApi.includes("gamedev") ||
    normApi.includes("3danimationandgamedevelopment")
  )
    return byName("Game Development");
  if (normApi.includes("cloud") || normApi.includes("devops")) return byName("Cloud and DevOps");
  if (normApi === "ai" || normApi.includes("generativeai") || normApi === "genai")
    return byName("AI & Machine Learning");
  if (normApi.includes("datastructure") || normApi === "dsa") return byName("Competitive Coding");
  if (normApi.includes("datascience")) return byName("Data Analytics");
  if (
    normApi.includes("testing") ||
    normApi.includes("qualityassurance") ||
    normApi.includes("sample")
  )
    return byName("Quality Assurance");
  if (normApi.includes("marketing")) return byName("Digital Marketing");
  if (
    normApi.includes("webdev") ||
    normApi.includes("webdevelopment") ||
    normApi.includes("igreq01edited")
  )
    return byName("Web Development");
  if (
    normApi.includes("lowcode") ||
    normApi.includes("nocode") ||
    normApi.includes("noorlowcode") ||
    normApi.includes("igreq05edited")
  )
    return byName("No Or Low Code");
  if (normApi.includes("mobile")) return byName("Mobile Development");
  if (normApi.includes("competitivecoding") || normApi.includes("cp"))
    return byName("Competitive Coding");
  if (
    normApi.includes("aiml") ||
    normApi.includes("machinelearning") ||
    normApi.includes("artificialintelligence") ||
    normApi.includes("deeplearning")
  )
    return byName("AI & Machine Learning");
  if (normApi.includes("quantum")) return byName("Quantum Computing");
  if (normApi.includes("dataanalytics") || normApi.includes("analytics"))
    return byName("Data Analytics");
  if (normApi.includes("entrepreneur")) return byName("Entrepreneurship");
  if (normApi.includes("iot") || normApi.includes("robotics"))
    return byName("Internet Of Things (IOT) And Robotics");
  if (normApi.includes("civil")) return byName("Civil Engineering");
  if (normApi.includes("leadership") || normApi.includes("ellamgoodinu"))
    return byName("Strategic Leadership");
  if (normApi.includes("socialgood")) return byName("AI for Social Good");
  if (normApi.includes("beckn")) return byName("Beckn Protocol");

  // No match: better a tagline taken from the group's own about than another group's.
  return undefined;
}

/** Plain-text first sentence of a markdown `about`, for card taglines. */
export function aboutExcerpt(about?: string | null, maxLength = 140): string {
  const firstParagraph = (about ?? "")
    .split("\n")
    .map((line) => line.trim())
    .find(
      (line) =>
        line &&
        !/^(#|[*-]\s|---|\*\*\*|___)/.test(line) &&
        // skip bold-only label lines such as "**About the Comics Interest Group**"
        !/^\*+[^*]+\*+:?$/.test(line),
    );
  if (!firstParagraph) return "";

  const text = firstParagraph.replace(/\*+/g, "").replace(/\s+/g, " ").trim();
  const sentence = text.match(/^.+?[.!?](\s|$)/)?.[0].trim() ?? text;
  if (sentence.length <= maxLength) return sentence;
  return `${sentence.slice(0, sentence.lastIndexOf(" ", maxLength)).trim()}…`;
}

function parseResources(resource?: string | null, blogs?: ApiInterestGroup["top_blogs"]) {
  const resources: InterestGroupResource[] = [];
  const seen = new Set<string>();
  const add = (url: string, label: string) => {
    if (seen.has(url)) return;
    seen.add(url);
    resources.push({ url, label });
  };

  for (const url of (resource ?? "").split(/[\s,]+/)) {
    if (!/^https?:\/\//.test(url)) continue;
    try {
      const { hostname, pathname } = new URL(url);
      const path = pathname === "/" ? "" : pathname.replace(/\/$/, "");
      add(url, `${hostname.replace(/^www\./, "")}${path}`);
    } catch {
      // malformed entry in the comma-separated list; skip it
    }
  }
  for (const blog of blogs ?? []) {
    if (blog.url && /^https?:\/\//.test(blog.url)) add(blog.url, blog.title || blog.url);
  }
  return resources;
}

const DISPLAY_NAME_OVERRIDES: Record<string, string> = { Devops: "DevOps" };

const cleanList = (items?: string[] | null) =>
  (items ?? []).map((item) => item.trim()).filter(Boolean);

/** Some groups store every role in one "A · B · C" string instead of separate items. */
const splitCareers = (items?: string[] | null) =>
  cleanList(items).flatMap((item) => item.split(/\s*[·•|]\s*/).filter(Boolean));

/**
 * Prerequisites typed as one sentence sometimes arrive split mid-sentence
 * ("…An interest in people management", "and personal development…"); rejoin fragments
 * that start lowercase with the item before them.
 */
const joinSentenceFragments = (items?: string[] | null) =>
  cleanList(items).reduce<string[]>((joined, item) => {
    if (joined.length > 0 && /^[a-z]/.test(item)) {
      joined[joined.length - 1] = `${joined[joined.length - 1]} ${item}`;
    } else {
      joined.push(item);
    }
    return joined;
  }, []);

const capitalize = (text: string) => text.charAt(0).toUpperCase() + text.slice(1);

export function toDisplayItem(
  group: ApiInterestGroup,
  appBaseUrl: string,
): InterestGroupDisplayItem {
  const local = getPresentationMetadata(group.name);
  const isExactMatch = local && normalizeName(local.name) === normalizeName(group.name);

  return {
    id: group.id,
    name: isExactMatch ? local.name : (DISPLAY_NAME_OVERRIDES[group.name] ?? group.name),
    tagline: local?.tagline || aboutExcerpt(group.about),
    hasCuratedTagline: Boolean(local?.tagline),
    category: group.category ?? undefined,
    members: group.members ?? undefined,
    about: group.about?.trim() || local?.description || "",
    link: `${appBaseUrl}/dashboard/interest-groups/${group.id}`,
    prerequisites: joinSentenceFragments(group.prerequisites),
    careers: splitCareers(group.career_opportunities),
    officeHours: group.office_hours?.trim() ? capitalize(group.office_hours.trim()) : undefined,
    resources: parseResources(group.resource, group.top_blogs),
    leads: group.leads ?? [],
    mentors: group.mentors ?? [],
    thinktank: Array.isArray(group.thinktank) ? group.thinktank : [],
  };
}

/** Shown when the API is unreachable: the curated local list, without live counts or teams. */
export function localDisplayItems(): InterestGroupDisplayItem[] {
  return interestGroups.map((group) => ({
    name: group.name,
    tagline: group.tagline,
    hasCuratedTagline: true,
    about: group.description,
    link: group.link,
    prerequisites: [],
    careers: [],
    resources: [],
    leads: [],
    mentors: [],
    thinktank: [],
  }));
}
