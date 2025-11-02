import Link from "next/link";
import MuImage from "@/components/MuImage";
import { cdnUrl } from "@/services/cdn";

interface MentorCardProps {
  name: string;
  designation: string;
  image?: string;
  linkedIn?: string;
}

const MentorCard = ({
  name,
  designation,
  image,
  linkedIn,
}: MentorCardProps) => {
  const mentorImage = image ? cdnUrl(image) : undefined;

  return (
    <div className="mx-auto mt-4 max-w-sm w-full shadow-lg rounded-lg p-6 bg-white border border-gray-100">
      <div className="flex justify-between items-start mb-4">
        {mentorImage && (
          <MuImage
            src={mentorImage}
            alt={`${name} profile`}
            width={80}
            height={80}
            className="object-cover w-20 h-20 rounded-md"
            loading="lazy"
          />
        )}
        <div className="flex flex-col items-end">
          {linkedIn && linkedIn !== "" && (
            <Link
              href={linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 group"
            >
              <div className="w-7 h-7 rounded overflow-hidden hover:scale-110 transition-transform duration-300 hover:shadow-lg">
                <svg
                  className="w-full h-full"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                    fill="#0A66C2"
                  />
                </svg>
              </div>
            </Link>
          )}
        </div>
      </div>

      <h3 className="text-lg font-semibold text-mulearn-blackish mt-4 mb-2">
        {name}
      </h3>
      <p className="text-sm text-gray-600 leading-relaxed">{designation}</p>
    </div>
  );
};

export default MentorCard;
