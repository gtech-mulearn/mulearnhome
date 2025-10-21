import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface CareerCardProps {
  title: string;
  department: string;
  description: string;
  logo: string;
  applyLink: string;
}

export default function CareersCard({
  title,
  department,
  description,
  logo,
  applyLink,
}: CareerCardProps) {
  return (
    <Card className="rounded-2xl shadow-md border border-gray-200 bg-white hover:shadow-xl transition-all duration-200">
      <CardHeader className="flex items-center gap-3 pb-0">
        <div className="relative w-10 h-10">
          <Image
            src={logo}
            alt={`${title} logo`}
            fill
            className="object-contain rounded-md"
          />
        </div>
        <CardTitle className="text-lg font-semibold text-gray-800">
          {title}
        </CardTitle>
      </CardHeader>

      <CardContent className="pt-2">
        <p className="text-sm text-purple-600 font-medium">{department}</p>
        <p className="text-gray-600 text-sm mt-2 mb-4 leading-relaxed">
          {description}
        </p>

        <Button
          asChild
          className="bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full px-5 hover:opacity-90 transition-all"
        >
          <a href={applyLink} target="_blank" rel="noopener noreferrer">
            Apply Now
          </a>
        </Button>
      </CardContent>
    </Card>
  );
}
