"use server";

import { termsAndConditions } from "@/data/data";

const Paragraph = ({ text }: { text: string }) => (
  <p className="text-[15px] sm:text-base leading-7 text-[var(--mulearn-blackish)] font-sans text-justify mb-4">
    {text}
  </p>
);

const SubsectionList = ({ subsections }: { subsections: string[] }) => (
  <ol
    className="ml-6 space-y-3 text-[15px] sm:text-base text-[var(--mulearn-blackish)] font-sans text-justify"
    style={{ listStyleType: "lower-roman" }}
  >
    {subsections.map((subsection, index) => (
      <li key={index} className="pl-2 leading-relaxed">
        {subsection}
      </li>
    ))}
  </ol>
);

export default async function TermsAndConditions() {
  return (
    <main className="min-h-screen bg-[var(--mulearn-whitish)]">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 xl:px-12">
        <header className="mb-10 text-center">
          <h1 className="mb-3 text-3xl sm:text-4xl font-extrabold font-display text-[var(--mulearn-blackish)] tracking-tight uppercase">
            {termsAndConditions.title}
          </h1>
          <p className="text-sm text-[var(--mulearn-gray-600)] font-sans">
            Last Updated: {termsAndConditions.lastUpdated}
          </p>
        </header>

        <div className="mb-12 space-y-6 text-justify">
          {termsAndConditions.introduction
            .split("\n\n")
            .map((paragraph, index) => (
              <Paragraph key={index} text={paragraph} />
            ))}
        </div>

        <div className="space-y-12">
          {termsAndConditions.sections.map((section, index) => (
            <section key={index} className="scroll-mt-20">
              <h2 className="mb-3 text-lg font-semibold font-display text-[var(--mulearn-blackish)] text-justify">
                {index + 1}. {section.heading}
              </h2>

              <div className="mb-4 space-y-4">
                {section.content &&
                  section.content
                    .split("\n\n")
                    .map((paragraph, pIndex) => (
                      <Paragraph key={pIndex} text={paragraph} />
                    ))}
              </div>

              {section.subsections.length > 0 && (
                <SubsectionList subsections={section.subsections} />
              )}
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
