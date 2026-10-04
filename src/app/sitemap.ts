import type { MetadataRoute } from "next";
import { galleryEvents } from "@/features/gallery";

const staticRoutes = [
  "",
  "artofteaching",
  "be-a-part/campus",
  "be-a-part/company",
  "be-a-part/enablers",
  "be-a-part/learners",
  "campus-logo-generator",
  "careers",
  "contact",
  "donate",
  "events",
  "events/grab-your-superpowers",
  "events/inspiration-station",
  "events/office-hour",
  "events/salt-mango-tree",
  "founders-message",
  "gallery",
  "impact-gallery",
  "in50hours",
  "interest-groups",
  "kkem",
  "kkem/events/beyondus",
  "learning-circle",
  "levelstructure",
  "manifesto",
  "partners/community-partners",
  "partners/company-partners",
  "privacy-policy",
  "refund-policy",
  "self-determination-theory",
  "socials",
  "team",
  "terms-and-conditions",
  "testimonials",
  "trivial-ideas",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://mulearn.org";
  const staticEntries = staticRoutes.map((path) => ({
    url: path ? `${base}/${path}` : base,
    lastModified: new Date(),
  }));
  const galleryEntries = galleryEvents.map((event) => ({
    url: `${base}/gallery/${event.slug}`,
    lastModified: new Date(),
  }));
  return [...staticEntries, ...galleryEntries];
}
