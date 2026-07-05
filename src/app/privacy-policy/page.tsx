"use server";

import { privacyPolicy } from "@/data/legal";

const formatText = (text: string) =>
  text
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.*?)\*/g, "<em>$1</em>")
    .replace(
      /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g,
      '<a href="mailto:$1" class="font-medium text-mulearn underline underline-offset-4 hover:text-mulearn-duke-purple">$1</a>',
    );

const Paragraph = ({ text }: { text: string }) => (
  <p
    className="text-[15px] sm:text-base leading-7 text-mulearn-blackish text-justify"
    dangerouslySetInnerHTML={{ __html: formatText(text) }}
  />
);

const SubsectionList = ({ subsections }: { subsections: string[] }) => (
  <ol className="ml-6 space-y-3 text-[15px] sm:text-base text-mulearn-blackish text-justify list-[lower-roman]">
    {subsections.map((subsection) => (
      <li
        key={subsection.slice(0, 50)}
        className="pl-2 leading-relaxed"
        dangerouslySetInnerHTML={{ __html: formatText(subsection) }}
      />
    ))}
  </ol>
);

export default async function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-mulearn-whitish">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 xl:px-12">
        <header className="mb-10 text-center">
          <h1 className="mb-3 tracking-tight uppercase">{privacyPolicy.title}</h1>
          <p className="text-sm text-mulearn-gray-600">Last Updated: {privacyPolicy.lastUpdated}</p>
        </header>

        <div className="mb-12 space-y-6 text-justify">
          {privacyPolicy.introduction.split("\n\n").map((paragraph) => (
            <Paragraph key={paragraph.slice(0, 50)} text={paragraph} />
          ))}
        </div>

        <div className="space-y-12">
          {privacyPolicy.sections.map((section) => (
            <section key={section.heading} className="scroll-mt-20">
              <h2 className="mb-3 text-lg font-semibold text-mulearn-blackish text-justify">
                {privacyPolicy.sections.indexOf(section) + 1}. {section.heading}
              </h2>

              <div className="mb-4 space-y-4">
                {section.content.split("\n\n").map((paragraph) => (
                  <Paragraph key={paragraph.slice(0, 50)} text={paragraph} />
                ))}
              </div>

              {section.subsections?.length > 0 && (
                <SubsectionList subsections={section.subsections} />
              )}
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
