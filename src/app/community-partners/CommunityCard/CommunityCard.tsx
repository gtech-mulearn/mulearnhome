import React from "react";
import styles from "./CommunityCard.module.css";
import Link from "next/link";
import Image from "next/image";
interface CommunityCardProps {
  cname: string;
  cimage: string;
  clink: string;
  customlink?: string;
}

const CommunityCard: React.FC<CommunityCardProps> = ({
  cname,
  cimage,
  clink,
  customlink,
}) => {
  return (
    <div className="my-4 max-w-xs shadow-[1px_1px_45px_-5px_rgba(0,0,0,0.08)] p-4 rounded-xl h-24 flex items-center justify-evenly">
      <div>
        {clink && clink.length > 0 && (
          <a href={clink} target="_blank" rel="noopener noreferrer">
            <div className="flex justify-between items-center">
              <Image src={cimage} alt={cname} className="w-16 rounded-md object-contain mr-8"  width={200}
  height={100}/>

              {cname && (
                <span className="text-gray-500 text-[0.9rem] text-right font-semibold w-[150px]">{cname}</span>
              )}
            </div>
          </a>
        )}
        {customlink && customlink.length > 0 && (
          <Link href={customlink}>
            <div className="flex justify-between items-center">
               <Image src={cimage} alt={cname} className="w-16 rounded-md object-contain mr-8"  width={200}
  height={100}/>

              {cname && (
                <span className="text-gray-500 text-sm text-right font-semibold w-[150px]">{cname}</span>
              )}
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default CommunityCard;
