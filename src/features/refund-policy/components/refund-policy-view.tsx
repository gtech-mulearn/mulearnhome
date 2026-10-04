import { SanitizedHtml } from "@/components/ui/sanitized-html";
import { refundPolicy } from "../data/refund-policy.data";

const Paragraph = ({ text }: { text: string }) => (
  <SanitizedHtml
    as="p"
    className="text-[15px] sm:text-base leading-7 text-mulearn-blackish"
    text={text}
  />
);

export function RefundPolicyView() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 xl:px-12">
        <header className="mb-10 text-center">
          <h1 className="mb-3 tracking-tight uppercase">{refundPolicy.title}</h1>
          <p className="text-sm text-mulearn-gray-600">Last Updated: {refundPolicy.lastUpdated}</p>
        </header>

        <div className="mb-12 space-y-6">
          {refundPolicy.introduction.split("\n\n").map((paragraph) => (
            <Paragraph key={paragraph.slice(0, 50)} text={paragraph} />
          ))}
        </div>

        <div className="space-y-12">
          {refundPolicy.sections.map((section, index) => (
            <section key={section.heading} className="scroll-mt-20">
              <h2 className="mb-3 text-lg font-semibold text-mulearn-blackish">
                {index + 1}. {section.heading}
              </h2>

              {section.content && (
                <div className="mb-4 space-y-4">
                  {section.content.split("\n\n").map((paragraph) => (
                    <Paragraph key={paragraph.slice(0, 50)} text={paragraph} />
                  ))}
                </div>
              )}

              {section.subsections?.length > 0 && (
                <ol className="ml-6 space-y-3 text-[15px] sm:text-base text-mulearn-blackish list-[lower-roman]">
                  {section.subsections.map((subsection) => (
                    <li key={subsection.slice(0, 50)} className="pl-2 leading-relaxed">
                      <SanitizedHtml text={subsection} />
                    </li>
                  ))}
                </ol>
              )}
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
