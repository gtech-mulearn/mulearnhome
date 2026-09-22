"use client";

import { MessageCircle, Star, Users } from "lucide-react";
import { useEffect, useState } from "react";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MuImage } from "@/components/layouts";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { cdnUrl, fetchPublicProfileImage } from "@/shared";
import type { TextTestimonial } from "../types";

interface TextTestimonialCardProps {
  testimonial: TextTestimonial;
}

export function TextTestimonialCard({ testimonial }: TextTestimonialCardProps) {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const fallbackImage = cdnUrl("public/assets/team/default.webp");

  useEffect(() => {
    if (testimonial.muid) {
      fetchPublicProfileImage(testimonial.muid)
        .then(setProfileImage)
        .catch(() => setProfileImage(null));
    }
  }, [testimonial.muid]);

  const getCategoryStyles = (type: TextTestimonial["type"]) => {
    switch (type) {
      case "academia":
        return {
          bg: "bg-mulearn-trusty-blue/10",
          dot: "bg-mulearn-trusty-blue",
        };
      case "industry":
        return {
          bg: "bg-chart-5/10",
          dot: "bg-chart-5",
        };
      case "government":
      case "civic-society":
        return {
          bg: "bg-mulearn-duke-purple/10",
          dot: "bg-mulearn-duke-purple",
        };
      default:
        return {
          bg: "bg-mulearn-gray-600/5",
          dot: "bg-mulearn-gray-600",
        };
    }
  };

  const styles = getCategoryStyles(testimonial.type);

  const getSocialIcon = (socialProof?: string) => {
    if (!socialProof) return <MessageCircle className="w-4 h-4" />;
    if (socialProof.includes("LinkedIn")) return <FaLinkedin className="w-4 h-4" />;
    if (socialProof.includes("Instgram")) return <FaInstagram className="w-4 h-4" />;
    if (socialProof.includes("Twitter")) return <FaTwitter className="w-4 h-4" />;
    if (socialProof.includes("Community")) return <Users className="w-4 h-4" />;
    return <MessageCircle className="w-4 h-4" />;
  };

  const getTypeLabel = (type: TextTestimonial["type"]) => {
    switch (type) {
      case "academia":
        return "Academia";
      case "industry":
        return "Industry";
      case "government":
        return "Government";
      case "civic-society":
        return "Civic Society";
      default:
        return type;
    }
  };

  const getTypeColor = (type: TextTestimonial["type"]) => {
    switch (type) {
      case "academia":
        return "bg-mulearn-trusty-blue text-mulearn-whitish";
      case "industry":
        return "bg-chart-2 text-mulearn-whitish";
      case "government":
      case "civic-society":
        return "bg-mulearn-duke-purple text-mulearn-whitish";
      default:
        return "bg-mulearn-gray-600 text-mulearn-whitish";
    }
  };

  const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex items-center gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={cn(
            "w-3.5 h-3.5",
            i < rating
              ? "fill-chart-5 text-chart-5"
              : "fill-mulearn-gray-600 text-mulearn-gray-600",
          )}
        />
      ))}
    </div>
  );

  return (
    <div
      className={cn(
        "flex flex-col rounded-[2rem] p-8 transition-all duration-300 h-full",
        styles.bg,
      )}
    >
      <div className="flex-none mb-6">
        <div className="flex items-center justify-between mb-4">
          <div
            className={cn(
              "text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest",
              getTypeColor(testimonial.type),
            )}
          >
            {getTypeLabel(testimonial.type)}
          </div>
          <div className="text-mulearn-gray-600">{getSocialIcon(testimonial.socialProof)}</div>
        </div>
        <StarRating rating={testimonial.rating} />
      </div>

      <div className="flex-grow">
        <p
          className={cn(
            "text-mulearn-blackish/80 leading-relaxed font-medium italic transition-all duration-300",
            !isExpanded && "line-clamp-3",
          )}
        >
          &quot;{testimonial.quote}&quot;
        </p>
        {testimonial.quote.length > 100 && (
          <Button
            variant={"link"}
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-mulearn font-bold text-xs mt-2 p-0 h-auto"
          >
            {isExpanded ? "View less" : "View more"}
          </Button>
        )}
      </div>

      <div className="flex-none mt-8 flex items-center gap-4">
        <div className="w-12 h-12 rounded-full overflow-hidden bg-mulearn/10 flex items-center justify-center">
          {profileImage || testimonial.profileImage ? (
            <MuImage
              src={profileImage ?? testimonial.profileImage ?? fallbackImage}
              alt={testimonial.name}
              width={48}
              height={48}
              className="w-full h-full object-cover"
              unoptimized
            />
          ) : (
            <div className="text-mulearn font-bold text-lg">
              {testimonial.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>
          )}
        </div>
        <div>
          <h4 className="font-bold text-mulearn-blackish text-sm">{testimonial.name}</h4>
          <p className="text-xs text-mulearn-gray-600 font-medium">
            {testimonial.role}
            {testimonial.company && ` • ${testimonial.company}`}
          </p>
        </div>
      </div>
    </div>
  );
}
