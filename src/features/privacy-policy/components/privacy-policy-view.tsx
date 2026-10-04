import { SanitizedHtml } from "@/components/ui/sanitized-html";
import { privacyPolicy } from "../data/privacy-policy.data";

const Paragraph = ({ text }: { text: string }) => (
  <SanitizedHtml
    as="p"
    className="text-[15px] sm:text-base leading-7 text-mulearn-blackish text-justify"
    text={text}
  />
);

const SubsectionList = ({ subsections }: { subsections: string[] }) => (
  <ol className="ml-6 space-y-3 text-[15px] sm:text-base text-mulearn-blackish text-justify list-[lower-roman]">
    {subsections.map((subsection) => (
      <SanitizedHtml
        key={subsection.slice(0, 50)}
        as="li"
        className="pl-2 leading-relaxed"
        text={subsection}
      />
    ))}
  </ol>
);

export async function PrivacyPolicyView() {
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
