"use server";

import { privacyPolicy } from "@/data/data";

const formatText = (text: string) =>
  text
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.*?)\*/g, "<em>$1</em>")
    .replace(
      /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g,
      '<a href="mailto:$1" class="font-medium text-mulearn-trusty-blue underline underline-offset-4 hover:text-mulearn-duke-purple">$1</a>'
    );

const Paragraph = ({ text }: { text: string }) => (
  <p
    className="text-[15px] sm:text-base leading-7 text-mulearn-blackish text-justify"
    dangerouslySetInnerHTML={{ __html: formatText(text) }}
  />
);

const SubsectionList = ({ subsections }: { subsections: string[] }) => (
  <ol className="ml-6 space-y-3 text-[15px] sm:text-base text-mulearn-blackish text-justify" style={{ listStyleType: "lower-roman" }}>
    {subsections.map((subsection, index) => (
      <li key={index} className="pl-2 leading-relaxed">{subsection}</li>
    ))}
  </ol>
);

export default async function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg[var(--mulearn-whitish)]">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 xl:px-12">
        <header className="mb-10 text-center">
          <h1 className="mb-3 text-3xl sm:text-4xl font-extrabold text-mulearn-blackish tracking-tight uppercase">
            {privacyPolicy.title}
          </h1>
          <p className="text-sm text-mulearn-gray-600">
            Last Updated: {privacyPolicy.lastUpdated}
          </p>
        </header>

        <div className="mb-12 space-y-6 text-justify">
          {privacyPolicy.introduction.split("\n\n").map((paragraph, index) => (
            <Paragraph key={index} text={paragraph} />
          ))}
        </div>

        <div className="space-y-12">
          {privacyPolicy.sections.map((section, index) => (
            <section key={index} className="scroll-mt-20">
              <h2 className="mb-3 text-lg font-semibold text-mulearn-blackish text-justify">
                {index + 1}. {section.heading}
              </h2>

              <div className="mb-4 space-y-4">
                {section.content.split("\n\n").map((paragraph, pIndex) => (
                  <Paragraph key={pIndex} text={paragraph} />
                ))}
              </div>

              {section.subsections.length > 0 && <SubsectionList subsections={section.subsections} />}
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
