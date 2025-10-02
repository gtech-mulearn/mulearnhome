import React from "react";
import { termsAndConditionsData } from "src/data/data";

export default function TermsAndConditionsPage() {
    return (
        <div className="min-h-screen">
            <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 py-12 sm:py-16 lg:py-20">
                <h1 className="text-2xl sm:text-3xl lg:text-[32px] font-bold text-[#1A1A1A] mb-8">
                    {termsAndConditionsData?.title}
                </h1>

                <p className="text-base sm:text-lg font-bold text-[#1A1A1A] leading-relaxed mb-8">
                    {termsAndConditionsData?.introduction}
                </p>

                <ul className="space-y-8 ml-6 sm:ml-8">
                    {termsAndConditionsData?.sections?.map((section: {
                        heading: string;
                        subSections?: {
                            term?: string;
                            definition?: string;
                            content?: string;
                            nestedList?: string[];
                        }[];
                        content?: string[];
                        contactDetails?: {
                            email: string;
                            address: string;
                            phone: string;
                        };
                    }, index: number) => (
                        <li key={index} className="text-[#1A1A1A]">
                            <strong className="text-lg sm:text-xl">{section?.heading}:</strong>

                            {section?.subSections && section?.subSections?.[0]?.term && (
                                <ol className="mt-4 space-y-3 list-[lower-roman] sm:ml-6">
                                    {section?.subSections?.map((subSection, subIndex: number) => (
                                        <li key={subIndex} className="text-sm sm:text-base leading-relaxed">
                                            <strong>{subSection?.term}</strong> {subSection?.definition}
                                        </li>
                                    ))}
                                </ol>
                            )}

                            {section.content && section.content.length > 0 && (
                                <div className="mt-4 space-y-4">
                                    {section.content.map((paragraph: string, pIndex: number) => (
                                        <p
                                            key={pIndex}
                                            className="text-sm sm:text-base leading-relaxed ml-4 sm:ml-6"
                                        >
                                            {paragraph}
                                        </p>
                                    ))}
                                </div>
                            )}

                            {section.subSections && !section.subSections[0]?.term && (
                                <ol className="mt-4 space-y-3 list-[lower-roman] ml-4 sm:ml-6">
                                    {section.subSections.map((subSection, subIndex: number) => (
                                        <li key={subIndex} className="text-sm sm:text-base leading-relaxed">
                                            {subSection.content}

                                            {subSection.nestedList && subSection.nestedList.length > 0 && (
                                                <ul className="mt-2 space-y-2 list-disc ml-4 sm:ml-6">
                                                    {subSection.nestedList.map((item: string, itemIndex: number) => (
                                                        <li key={itemIndex}>{item}</li>
                                                    ))}
                                                </ul>
                                            )}
                                        </li>
                                    ))}
                                </ol>
                            )}

                            {section?.contactDetails && (
                                <div className="mt-4 text-sm sm:text-base leading-relaxed ml-4 sm:ml-6 space-y-1">
                                    <p>Email: {section.contactDetails.email}</p>
                                    <p>Postal Address: {section.contactDetails.address}</p>
                                    <p>Telephone: {section.contactDetails.phone}</p>
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}