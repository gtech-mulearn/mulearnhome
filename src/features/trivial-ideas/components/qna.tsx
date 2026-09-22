"use client";

import { useState } from "react";
import { MotionH2 } from "@/components/layouts";
import { Card } from "@/components/ui/card";

export const Qna = () => {
  const faqs = [
    { id: 1, question: "What is Trivial Ideas?", answer: "demo." },
    { id: 2, question: "How does it work?", answer: "demo" },
    { id: 3, question: "Is it free?", answer: "demo" },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="relative overflow-hidden pt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-12">
          <div className="max-w-3xl text-center">
            <MotionH2
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-2xl md:text-3xl lg:text-5xl font-bold"
            >
              Got <span className="text-mulearn">Questions?</span>
            </MotionH2>

            <div className="mt-8 space-y-4">
              {faqs.map((faq) => (
                <Card
                  key={faq.id}
                  className="w-full max-w-4xl mx-auto p-4 sm:p-5 lg:w-3xl sm:w-2xl lg:p-6 cursor-pointer"
                  onClick={() => setActiveIndex(activeIndex === faq.id ? null : faq.id)}
                >
                  <div className="flex items-start justify-between gap-4">
                    <p className="text-base sm:text-lg lg:text-xl font-medium text-left flex-1">
                      {faq.question}
                    </p>

                    <span className="text-lg sm:text-xl lg:text-2xl font-bold shrink-0">
                      {activeIndex === faq.id ? "−" : "+"}
                    </span>
                  </div>

                  {activeIndex === faq.id && (
                    <p className="mt-3 text-sm sm:text-base lg:text-lg text-muted-foreground text-left">
                      {faq.answer}
                    </p>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
