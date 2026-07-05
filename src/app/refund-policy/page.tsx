import type { Metadata } from "next";
import { refundPolicy } from "@/data/legal";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Refund Policy | Mulearn",
  description: "Mulearn Foundation refund policy and donation guidelines.",
};

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
    className="text-[15px] sm:text-base leading-7 text-mulearn-blackish"
    dangerouslySetInnerHTML={{
      __html: formatText(text),
    }}
  />
);

export default function RefundPolicy() {
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
                      <span
                        dangerouslySetInnerHTML={{
                          __html: formatText(subsection),
                        }}
                      />
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
