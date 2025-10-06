import { privacyPolicy } from "../../data/data"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: `${privacyPolicy.title} | µLearn`,
  description:
    "Privacy Policy for µLearn platform - Learn how we collect, use, and protect your personal information.",
}

export default function PrivacyPolicyPage() {
  const formatText = (text: string) =>
    text
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") 
      .replace(/\*(.*?)\*/g, "<em>$1</em>")
      .replace(
      /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g,
      '<a href="mailto:$1" class="font-medium text-blue-600 underline underline-offset-4 hover:text-purple-700">$1</a>'
    )
  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 xl:px-12">
        <header className="mb-10 text-center">
          <h1 className="mb-3 text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight uppercase">
            {privacyPolicy.title}
          </h1>
          <p className="text-sm text-gray-500">
            Last Updated: {privacyPolicy.lastUpdated}
          </p>
        </header>

        <div className="mb-12 space-y-6">
          {privacyPolicy.introduction.split("\n\n").map((paragraph, index) => (
            <p
              key={index}
              className="text-[15px] sm:text-base leading-7 text-gray-800"
              dangerouslySetInnerHTML={{ __html: formatText(paragraph) }}
            />
          ))}
        </div>

        <div className="space-y-12">
          {privacyPolicy.sections.map((section, index) => (
            <section key={index} className="scroll-mt-20">
              <h2 className="mb-3 text-lg font-semibold text-gray-900">
                {index + 1}. {section.heading}
              </h2>

              <div className="mb-4 space-y-4">
                {section.content.split("\n\n").map((paragraph, pIndex) => (
                  <p
                    key={pIndex}
                    className="text-[15px] sm:text-base leading-7 text-gray-800"
                    dangerouslySetInnerHTML={{ __html: formatText(paragraph) }}
                  />
                ))}
              </div>

              {section.subsections.length > 0 && (
                <ol
                  className="ml-6 space-y-3 text-[15px] sm:text-base text-gray-800"
                  style={{ listStyleType: "lower-roman" }}
                >
                  {section.subsections.map((subsection, subIndex) => (
                    <li key={subIndex} className="pl-2 leading-relaxed" >
                      {subsection}
                    </li>
                  ))}
                </ol>
              )}
            </section>
          ))}
        </div>

        <footer className="mt-16 border-t border-brandGray pt-8">
          <p className="text-center text-sm text-brandGray">
            For questions about this Privacy Policy, please contact us at{" "}
            <a
              href="mailto:mulearnadmin@gtechindia.org"
              className="font-semibold text-trustyBlue underline underline-offset-4 hover:text-dukePurple"
            >
              info@mulearn.org
            </a>
          </p>
        </footer>
      </div>
    </main>
  )
}