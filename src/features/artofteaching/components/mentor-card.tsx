import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { MuImage } from "@/components/layouts";
import { Card, CardContent } from "@/components/ui/card";
import { cdnUrl } from "@/shared";

interface MentorCardProps {
  name: string;
  designation: string;
  image?: string;
  linkedIn?: string;
}

export const MentorCard = ({ name, designation, image, linkedIn }: MentorCardProps) => {
  const fallbackImage = cdnUrl("public/assets/team/default.webp");
  // const mentorImage = image ? image : fallbackImage;
  const mentorImage = image ? fallbackImage : undefined;

  return (
    <Card className="mx-auto mt-4 max-w-sm w-full h-full overflow-hidden border-mulearn/10 hover:border-mulearn/30 transition-all duration-300 hover:shadow-lg">
      <CardContent className="flex flex-col items-center text-center pt-6 pb-6">
        {mentorImage && (
          <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden bg-gradient-to-br from-mulearn/20 to-mulearn/5 ring-2 ring-mulearn/20 mb-4 transition-all">
            <MuImage
              src={mentorImage}
              alt={`${name} profile`}
              width={144}
              height={144}
              className="object-cover w-full h-full"
              loading="lazy"
            />
          </div>
        )}

        <h3 className="text-xl font-semibold text-mulearn-blackish mb-3">{name}</h3>

        {linkedIn && linkedIn !== "" && (
          <Link
            href={linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="mb-3 inline-block"
          >
            <FaLinkedin className="w-7 h-7 text-mulearn-trusty-blue hover:scale-110 transition-transform duration-300 hover:opacity-80" />
          </Link>
        )}

        <p className="text-sm text-mulearn-gray-600 leading-relaxed px-4">{designation}</p>
      </CardContent>
    </Card>
  );
};
