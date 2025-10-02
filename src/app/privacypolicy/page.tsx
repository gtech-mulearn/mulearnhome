import { privacyPolicy } from "../../data/data"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: `${privacyPolicy.title} | µLearn`,
  description:
    "Privacy Policy for µLearn platform - Learn how we collect, use, and protect your personal information.",
}

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-brandWhite">
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <header className="mb-10 border-b border-brandGray pb-6">
          <h1 className="mb-3 text-4xl font-extrabold tracking-tight text-trustyBlue sm:text-5xl">
            {privacyPolicy.title}
          </h1>
          <p className="text-sm font-medium text-brandGray">
            Last Updated: {privacyPolicy.lastUpdated}
          </p>
        </header>

        <div className="mb-12 space-y-5">
          {privacyPolicy.introduction.split("\n\n").map((paragraph, index) => (
            <p
              key={index}
              className="text-base sm:text-lg leading-relaxed text-brandBlack"
            >
              {paragraph}
            </p>
          ))}
        </div>

        <div className="space-y-12">
          {privacyPolicy.sections.map((section, index) => (
            <section key={index} className="scroll-mt-20">
              <h2 className="mb-4 text-2xl sm:text-3xl font-bold text-dukePurple">
                {index + 1}. {section.heading}
              </h2>

              <div className="mb-4 space-y-4">
                {section.content.split("\n\n").map((paragraph, pIndex) => (
                  <p
                    key={pIndex}
                    className="text-base sm:text-lg leading-relaxed text-brandBlack"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {section.subsections.length > 0 && (
                <ol
                  className="ml-6 space-y-3 text-base text-brandBlack"
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

        <footer className="mt-16 border-t border-brandGray pt-8">
          <p className="text-center text-sm text-brandGray">
            For questions about this Privacy Policy, please contact us at{" "}
            <a
              href="mailto:mulearnadmin@gtechindia.org"
              className="font-semibold text-trustyBlue underline underline-offset-4 hover:text-dukePurple"
            >
              mulearnadmin@gtechindia.org
            </a>
          </p>
        </footer>
      </div>
    </main>
  )
}