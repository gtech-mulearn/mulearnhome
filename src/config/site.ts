export const siteConfig = {
  name: "µLearn",
  shortName: "µLearn",
  description:
    "µLearn is a synergic philosophy of education, with a culture of mutual learning through micro groups of peers. µLearn is here to assist you in breaking through the echo chambers and free you from the shackles that have you grounded.",
  url: "https://mulearn.org/",
  ogImage: "/assets/logo.webp",
  creator: "µLearn",
  keywords: [
    "mulearn",
    "peer learning",
    "interest groups",
    "student community",
    "karma",
    "peer-to-peer learning",
    "proof-of-work learning",
    "self-directed learning",
    "campus community",
    "college chapter",
    "student led community",
    "skill development",
    "micro groups",
    "kerala knowledge economy mission",
    "kkem",
    "open source community",
    "student innovation",
    "mentorship program",
    "hackathon community",
    "gamified learning",
  ],
} as const;

export type SiteConfig = typeof siteConfig;
