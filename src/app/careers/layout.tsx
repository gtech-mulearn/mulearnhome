import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Career Labs | µLearn",
  description:
    "In search of a job or internship? µLearn Career Labs connects you with hiring calls and opportunities from the industry. Explore new and previous hiring calls.",
  openGraph: {
    title: "Career Labs | µLearn",
    description:
      "µLearn Career Labs connects you with jobs and internships from the industry — explore new and previous hiring calls.",
    url: "https://mulearn.org/careers",
    type: "website",
  },
};

export default function CareersLayout({ children }: { children: ReactNode }) {
  return children;
}
