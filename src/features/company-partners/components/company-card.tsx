import { MotionA, MuImage } from "@/components/layouts";
import { Card, CardContent } from "@/components/ui/card";
import { cdnUrl } from "@/shared";
import type { CompanyPartnerCard } from "../types";

interface CompanyCardProps {
  company: CompanyPartnerCard;
  index: number;
}

export function CompanyCard({ company, index }: CompanyCardProps) {
  return (
    <MotionA
      href={company.website}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.05, delay: index * 0.05 }}
      whileHover={{
        scale: 1.05,
        boxShadow: "0 10px 30px rgba(46, 133, 254, 0.2)",
      }}
      className="group transition-all duration-300"
    >
      <Card className="flex items-center justify-between hover:border-color-mulearn-trusty-blue rounded-lg p-3 sm:p-4 bg-mulearn-whitish">
        <CardContent className="p-0">
          <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
            <div className="relative w-12 h-12 sm:w-16 sm:h-16 flex-shrink-0 rounded-md overflow-hidden">
              <MuImage
                src={cdnUrl(company.logo)}
                alt={`${company.name} logo`}
                fill
                className="object-contain p-2"
                sizes="(max-width: 640px) 48px, 64px"
              />
            </div>
            <p className="font-medium text-sm sm:text-base text-mulearn-blackish group-hover:text-mulearn-trusty-blue transition-colors">
              {company.name}
            </p>
          </div>
        </CardContent>
      </Card>
    </MotionA>
  );
}
