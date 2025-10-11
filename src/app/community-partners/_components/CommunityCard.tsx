import React from "react";
import { cdnUrl } from "@/services/cdn";
import Link from "next/link";
import MuImage from "@/components/MuImage";
import { CommunityCardProps } from "@/lib/types";

const CommunityCard: React.FC<CommunityCardProps> = ({
  name,
  image,
  link,
  customlink,
}) => {
  return (
    <div className="my-4 max-w-xs shadow-[1px_1px_45px_-5px_rgba(0,0,0,0.08)] p-4 rounded-xl h-24 flex items-center justify-evenly bg-mulearn-whitish">
      <div>
        {link && link.length > 0 && (
          <a href={link} target="_blank" rel="noopener noreferrer">
            <div className="flex justify-between items-center">
              <MuImage
                src={cdnUrl(image)}
                alt={name}
                className="w-16 rounded-md object-contain mr-8"
                width={200}
                height={100}
              />

              {name && (
                <span className="text-mulearn-gray-600 text-[0.9rem] text-right font-semibold w-[150px]">
                  {name}
                </span>
              )}
            </div>
          </a>
        )}
        {customlink && customlink.length > 0 && (
          <Link href={customlink}>
            <div className="flex justify-between items-center">
              <MuImage
                src={cdnUrl(image)}
                alt={name}
                className="w-16 rounded-md object-contain mr-8"
                width={200}
                height={100}
              />

              {name && (
                <span className="text-mulearn-gray-600 text-sm text-right font-semibold w-[150px]">
                  {name}
                </span>
              )}
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default CommunityCard;