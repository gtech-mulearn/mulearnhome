import React from "react";
import { privacyPolicyData } from "src/data/data";

export default function PrivacyPolicyPage() {
    return (
        <div className="min-h-screen bg-white">
            <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 py-12 sm:py-16 lg:py-20">
                <div className="mb-12">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        {privacyPolicyData?.title}
                    </h1>
                    <p className="text-sm sm:text-base text-gray-600">
                        Last Updated: {privacyPolicyData?.lastUpdated}
                    </p>
                </div>

                <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none mb-12">
                    <p className="text-gray-700 leading-relaxed">
                        {privacyPolicyData?.introduction}
                    </p>
                </div>

                <div className="space-y-12">
                    {privacyPolicyData?.sections?.map((section: { heading: string; content: string[]; subSections?: string[] }, index: number) => (
                        <section key={index} className="scroll-mt-20">
                            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-900 mb-6">
                                {index + 1}. {section.heading}
                            </h2>

                            <div className="space-y-4">
                                {section.content.map((paragraph: string, pIndex: number) => (
                                    <p
                                        key={pIndex}
                                        className="text-gray-700 leading-relaxed text-sm sm:text-base"
                                    >
                                        {paragraph}
                                    </p>
                                ))}
                            </div>

                            {section?.subSections && section?.subSections?.length > 0 && (
                                <ol className="mt-6 space-y-4 list-roman ml-6 sm:ml-8">
                                    {section?.subSections?.map((subSection: string, subIndex: number) => (
                                        <li
                                            key={subIndex}
                                            className="text-gray-700 leading-relaxed text-sm sm:text-base pl-2"
                                        >
                                            {subSection}
                                        </li>
                                    ))}
                                </ol>
                            )}
                        </section>
                    ))}
                </div>

                {privacyPolicyData.contact && (
                    <div className="mt-16 pt-8 border-t border-gray-200">
                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
                            Contact Us
                        </h2>
                        <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                            {privacyPolicyData.contact.text}{" "}
                            <a
                                href={`mailto:${privacyPolicyData.contact.email}`}
                                className="text-blue-600 hover:text-blue-700 underline transition-colors"
                            >
                                {privacyPolicyData.contact.email}
                            </a>
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}