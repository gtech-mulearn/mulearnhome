"use client";

import type { Variants } from "framer-motion";
import { Calendar, ChevronRight, Download, FileText } from "lucide-react";
import { MotionDiv, MuImage } from "@/components/layouts";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import type { AnnualReport } from "../types";

interface ReportCardProps {
  report: AnnualReport;
  onDownload: () => void;
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.42, 0, 0.58, 1],
      delay: 0.1,
    },
  },
};

export function ReportCard({ report, onDownload }: ReportCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <MotionDiv variants={cardVariants} whileHover="hover" className="w-full">
      <Card className="overflow-hidden bg-mulearn-whitish border-2 border-mulearn-whitish/50 hover:border-mulearn-trusty-blue/30 transition-all duration-300 group">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/3 relative overflow-hidden">
            <div className="aspect-[4/3] lg:aspect-square bg-linear-to-br from-mulearn-trusty-blue/10 to-mulearn-duke-purple/10 flex items-center justify-center">
              {report.imageUrl ? (
                <MuImage
                  src={report.imageUrl}
                  alt={`${report.title} cover`}
                  width={400}
                  height={300}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
              ) : (
                <div className="text-center p-8">
                  <FileText className="w-16 h-16 text-mulearn mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-mulearn-blackish mb-2">{report.year}</h3>
                  <p className="text-mulearn-gray-600">Annual Report</p>
                </div>
              )}
            </div>

            <div className="absolute top-4 left-4 bg-mulearn text-mulearn-whitish px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
              {report.year}
            </div>

            <div className="absolute inset-0 bg-linear-to-t from-mulearn-blackish/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          <CardContent className="lg:w-2/3 p-6 lg:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-mulearn-gray-600 text-sm mb-3">
                <Calendar className="w-4 h-4" />
                <span>Published {formatDate(report.publishedDate)}</span>
              </div>

              <h3 className="text-2xl lg:text-3xl font-bold mb-4 group-hover:text-mulearn transition-colors duration-300">
                {report.title}
              </h3>

              <p className="text-mulearn-gray-600 text-base lg:text-lg leading-relaxed mb-6">
                {report.summary}
              </p>

              {report.highlights && report.highlights.length > 0 && (
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-mulearn-blackish mb-3">
                    Key Highlights
                  </h4>
                  <ul className="space-y-2">
                    {report.highlights.slice(0, 3).map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-mulearn-gray-600">
                        <ChevronRight className="w-4 h-4 text-mulearn mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{highlight}</span>
                      </li>
                    ))}
                    {report.highlights.length > 3 && (
                      <li className="text-mulearn text-sm font-medium">
                        +{report.highlights.length - 3} more highlights
                      </li>
                    )}
                  </ul>
                </div>
              )}
            </div>

            <CardFooter className="p-0">
              <div className="flex justify-start">
                <Button
                  onClick={onDownload}
                  variant={"default"}
                  className="group/btn px-6 py-3 text-base font-semibold hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300"
                >
                  <Download className="w-5 h-5 mr-2 group-hover/btn:animate-bounce" />
                  Download PDF
                </Button>
              </div>
            </CardFooter>
          </CardContent>
        </div>
      </Card>
    </MotionDiv>
  );
}
