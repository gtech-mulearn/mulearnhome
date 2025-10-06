import { privacyPolicy } from "@/data/data";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function PrivacyPolicy() {
  const formatText = (text: string) =>
    text
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
      .replace(/\*(.*?)\*/g, "<em>$1</em>")
      .replace(
        /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g,
        '<a href="mailto:$1" class="font-medium text-[var(--mulearn-trusty-blue)] underline underline-offset-4 hover:text-[var(--mulearn-duke-purple)]">$1</a>'
      );
  return (
    <main className="min-h-screen bg[var(--mulearn-whitish)]">
      <Navbar />
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 xl:px-12">
        <header className="mb-10 text-center">
          <h1 className="mb-3 text-3xl sm:text-4xl font-extrabold text-[var(--mulearn-blackish)] tracking-tight uppercase">
            {privacyPolicy.title}
          </h1>
          <p className="text-sm text-[var(--mulearn-gray-600)]">
            Last Updated: {privacyPolicy.lastUpdated}
          </p>
        </header>

        <div className="mb-12 space-y-6">
          {privacyPolicy.introduction.split("\n\n").map((paragraph, index) => (
            <p
              key={index}
              className="text-[15px] sm:text-base leading-7 text-[var(--mulearn-blackish)]"
              dangerouslySetInnerHTML={{ __html: formatText(paragraph) }}
            />
          ))}
        </div>

        <div className="space-y-12">
          {privacyPolicy.sections.map((section, index) => (
            <section key={index} className="scroll-mt-20">
              <h2 className="mb-3 text-lg font-semibold text-[var(--mulearn-blackish)]">
                {index + 1}. {section.heading}
              </h2>

              <div className="mb-4 space-y-4">
                {section.content.split("\n\n").map((paragraph, pIndex) => (
                  <p
                    key={pIndex}
                    className="text-[15px] sm:text-base leading-7 text-[var(--mulearn-blackish)]"
                    dangerouslySetInnerHTML={{ __html: formatText(paragraph) }}
                  />
                ))}
              </div>

              {section.subsections.length > 0 && (
                <ol
                  className="ml-6 space-y-3 text-[15px] sm:text-base text-[var(--mulearn-blackish)]"
                  style={{ listStyleType: "lower-roman" }}
                >
                  {section.subsections.map((subsection, subIndex) => (
                    <li key={subIndex} className="pl-2 leading-relaxed">
                      {subsection}
                    </li>
                  ))}
                </ol>
              )}
            </section>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}
