import { ChevronDown, Compass, Handshake, Info, Zap } from "lucide-react";
import type { ComponentType, ReactNode } from "react";

type NeedKey = "Autonomy" | "Competence" | "Relatedness";

const needStyles: Record<
  NeedKey,
  {
    text: string;
    panel: string;
    watermark: string;
    header: string;
    headerOpen: string;
    badge: string;
    chevron: string;
  }
> = {
  Autonomy: {
    text: "text-mulearn",
    panel: "bg-mulearn/8",
    watermark: "text-mulearn/15",
    header: "bg-mulearn/5",
    headerOpen: "group-open:bg-mulearn/12",
    badge: "bg-mulearn/15 text-mulearn",
    chevron: "text-mulearn",
  },
  Competence: {
    text: "text-mulearn-duke-purple",
    panel: "bg-mulearn-duke-purple/8",
    watermark: "text-mulearn-duke-purple/15",
    header: "bg-mulearn-duke-purple/5",
    headerOpen: "group-open:bg-mulearn-duke-purple/12",
    badge: "bg-mulearn-duke-purple/15 text-mulearn-duke-purple",
    chevron: "text-mulearn-duke-purple",
  },
  Relatedness: {
    text: "text-mulearn-trusty-blue",
    panel: "bg-mulearn-trusty-blue/8",
    watermark: "text-mulearn-trusty-blue/15",
    header: "bg-mulearn-trusty-blue/5",
    headerOpen: "group-open:bg-mulearn-trusty-blue/12",
    badge: "bg-mulearn-trusty-blue/15 text-mulearn-trusty-blue",
    chevron: "text-mulearn-trusty-blue",
  },
};

const needs: { key: NeedKey; icon: ComponentType<{ className?: string }>; description: string }[] =
  [
    {
      key: "Autonomy",
      icon: Compass,
      description:
        "The experience of volition — acting from one's own values and interests, not external pressure. People perform better and stay intrinsically motivated when they feel in control of their own journey.",
    },
    {
      key: "Competence",
      icon: Zap,
      description:
        "The need to feel effective and capable in one's activities. When people receive meaningful, progressive feedback, they internalise growth rather than chase external validation.",
    },
    {
      key: "Relatedness",
      icon: Handshake,
      description:
        "The need to feel connected, valued, and to matter to others. Belonging to a community transforms isolated learning into a shared identity and sustains long-term engagement.",
    },
  ];

const pillars: { key: NeedKey; title: string; description: ReactNode }[] = [
  {
    key: "Autonomy",
    title: "Interest Groups & Self-Directed Tracks",
    description:
      "Learners choose their own domains, set their own pace, and build a portfolio around what genuinely interests them — not a prescribed syllabus. The platform never forces a path.",
  },
  {
    key: "Autonomy",
    title: "Open Task System",
    description:
      "Members pick up tasks from the karma system based on what they want to build, reinforcing that every action taken is a voluntary, self-chosen proof of work.",
  },
  {
    key: "Competence",
    title: "Karma Points & Proof of Work",
    description: (
      <>
        Every verified contribution earns karma — a transparent, earned signal of real capability.
        Unlike grades, karma reflects what someone has <em>done</em>, not just what they know,
        making growth visible and concrete.
      </>
    ),
  },
  {
    key: "Competence",
    title: "Skill Ranks & Progressive Challenges",
    description:
      "The tiered level system ensures learners are consistently in the zone of proximal development — challenged enough to grow, supported enough to succeed.",
  },
  {
    key: "Relatedness",
    title: "Circles & Campus Communities",
    description:
      "µLearn's circle structure turns individual learners into co-creators with local peers. Real belonging happens at the campus level before scaling to the national network.",
  },
  {
    key: "Relatedness",
    title: "Peer-Led Mentorship",
    description:
      "The platform is explicitly peer-led: seniors guide juniors, and every cohort generates its own next layer of mentors — embedding relatedness into the very structure of growth.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Self-Determination Theory (SDT)",
  about: {
    "@type": "DefinedTerm",
    name: "Self-Determination Theory",
    description:
      "A macro theory of human motivation and personality proposing that people thrive when the needs for autonomy, competence, and relatedness are met.",
  },
  author: [
    { "@type": "Person", name: "Edward L. Deci" },
    { "@type": "Person", name: "Richard M. Ryan" },
  ],
  publisher: {
    "@type": "Organization",
    name: "µLearn",
    url: "https://mulearn.org/",
  },
  mainEntityOfPage: "https://mulearn.org/self-determination-theory",
};

export function SelfDeterminationTheoryView() {
  return (
    <main className="bg-background">
      {/* SEO: structured data for the theory */}
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: static, build-time JSON-LD
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mx-auto w-full max-w-6xl px-4 py-6 sm:px-6 sm:py-10 lg:py-14">
        {/* ── Hero ─────────────────────────────────────────────── */}
        <section className="relative flex min-h-[60vh] flex-col justify-between overflow-hidden rounded-4xl bg-linear-to-br from-mulearn/15 via-background to-mulearn-duke-purple/15 p-7 sm:p-12 lg:min-h-[66vh]">
          {/* faceted-glass shapes, top-right */}
          <div
            aria-hidden
            className="pointer-events-none absolute -right-6 -top-6 h-80 w-80 sm:right-0"
          >
            <div className="absolute right-4 top-6 h-52 w-52 rotate-12 rounded-[2.5rem] bg-linear-to-br from-mulearn/40 to-mulearn-trusty-blue/10 blur-[2px]" />
            <div className="absolute right-24 top-20 h-40 w-40 -rotate-6 rounded-4xl bg-linear-to-br from-mulearn-duke-purple/35 to-transparent" />
            <div className="absolute right-10 top-2 h-28 w-28 rotate-45 rounded-3xl border border-mulearn-whitish/50 bg-mulearn-whitish/30 backdrop-blur-sm" />
          </div>

          <span className="relative inline-flex w-fit items-center gap-2 rounded-full border border-mulearn/20 bg-mulearn-whitish/60 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-mulearn backdrop-blur">
            <Info className="h-3.5 w-3.5" />
            The Science Behind MuLearn
          </span>

          <div className="relative mt-16 flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
            <h1 className="max-w-3xl font-display text-5xl font-black leading-[0.95] tracking-tight text-mulearn-blackish sm:text-7xl">
              Self-Determination Theory <span className="text-mulearn">(SDT)</span>
            </h1>
            <p className="max-w-xs text-sm leading-relaxed text-mulearn-gray-600 sm:text-base">
              Developed by{" "}
              <strong className="font-semibold text-mulearn-blackish">
                Edward L. Deci &amp; Richard M. Ryan
              </strong>
              <br />
              University of Rochester, 1985
            </p>
          </div>
        </section>

        {/* ── Statement ────────────────────────────────────────── */}
        <section className="mx-auto max-w-4xl py-20 text-center sm:py-28">
          <p className="text-balance text-2xl font-medium leading-snug tracking-tight text-mulearn-blackish sm:text-4xl sm:leading-snug">
            <span className="text-mulearn">→ </span>
            Self-Determination Theory is a macro theory of human motivation and personality,
            proposing that people are most{" "}
            <span className="text-mulearn">creative, engaged, and psychologically healthy</span>{" "}
            when three fundamental psychological needs are met. µLearn is intentionally architected
            around these <span className="text-mulearn-duke-purple">three pillars</span> — not as a
            metaphor, but as a structural design principle.
          </p>
        </section>

        {/* ── Three basic psychological needs ──────────────────── */}
        <section>
          <div className="flex flex-wrap items-end justify-between gap-4 border-t border-mulearn-blackish/10 pt-8">
            <h2 className="font-display text-3xl font-bold tracking-tight text-mulearn-blackish sm:text-5xl">
              The Three Basic
              <br className="hidden sm:block" /> Psychological Needs
            </h2>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-mulearn-gray-600">
              The foundation of SDT
            </span>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
            {needs.map((need, i) => {
              const style = needStyles[need.key];
              const Icon = need.icon;
              return (
                <article
                  key={need.key}
                  className={`group relative overflow-hidden rounded-4xl p-8 transition-transform duration-300 hover:-translate-y-1.5 ${style.panel}`}
                >
                  <span
                    aria-hidden
                    className={`pointer-events-none absolute -right-2 -top-6 font-display text-9xl font-black leading-none ${style.watermark}`}
                  >
                    {i + 1}
                  </span>
                  <div className="relative">
                    <Icon className={`h-9 w-9 ${style.text}`} />
                    <h3 className={`mt-8 text-2xl font-bold tracking-tight ${style.text}`}>
                      {need.key}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-mulearn-gray-600">
                      {need.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* ── How µLearn is built around SDT (accordion) ───────── */}
        <section className="mt-24 sm:mt-32">
          <div className="flex flex-wrap items-end justify-between gap-4 border-t border-mulearn-blackish/10 pt-8">
            <h2 className="font-display text-3xl font-bold tracking-tight text-mulearn-blackish sm:text-5xl">
              How µLearn is built
              <br className="hidden sm:block" /> around SDT
            </h2>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-mulearn-gray-600">
              Theory, structurally applied
            </span>
          </div>

          <div className="mt-10 flex flex-col gap-3">
            {pillars.map((pillar, i) => {
              const style = needStyles[pillar.key];
              return (
                <details
                  key={pillar.title}
                  open={i === 0}
                  className={`group overflow-hidden rounded-3xl transition-colors ${style.header} ${style.headerOpen}`}
                >
                  <summary className="flex cursor-pointer list-none items-center gap-4 p-5 sm:gap-6 sm:p-7 [&::-webkit-details-marker]:hidden">
                    <span
                      className={`font-display text-lg font-black tabular-nums sm:text-2xl ${style.text}`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`hidden shrink-0 rounded-full px-3 py-1 text-xs font-semibold sm:inline-block ${style.badge}`}
                    >
                      {pillar.key}
                    </span>
                    <h3 className="flex-1 text-base font-bold tracking-tight text-mulearn-blackish sm:text-xl">
                      {pillar.title}
                    </h3>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 transition-transform duration-300 group-open:rotate-180 ${style.chevron}`}
                    />
                  </summary>
                  <div className="px-5 pb-6 sm:px-7 sm:pb-7 sm:pl-14">
                    <p className="max-w-3xl text-sm leading-relaxed text-mulearn-gray-600 sm:text-base sm:leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </details>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
}
