"use client";
import { Star, MessageCircle, Twitter, Linkedin, Users } from "lucide-react";
import { TextTestimonial } from "@/lib/types";
import { cn } from "@/lib/utils";

interface TextTestimonialCardProps {
  testimonial: TextTestimonial;
}

export default function TextTestimonialCard({
  testimonial,
}: TextTestimonialCardProps) {
  const getSocialIcon = (socialProof?: string) => {
    if (!socialProof) return <MessageCircle className="w-4 h-4" />;

    if (socialProof.includes("LinkedIn"))
      return <Linkedin className="w-4 h-4" />;
    if (socialProof.includes("Twitter")) return <Twitter className="w-4 h-4" />;
    if (socialProof.includes("Community")) return <Users className="w-4 h-4" />;

    return <MessageCircle className="w-4 h-4" />;
  };

  const getTypeColor = (type: TextTestimonial["type"]) => {
    switch (type) {
      case "learner":
        return "bg-mulearn-trusty-blue text-mulearn-whitish";
      case "mentor":
        return "bg-mulearn-electric-purple text-mulearn-whitish";
      case "partner":
        return "bg-mulearn-gray-600 text-mulearn-whitish";
      case "community-leader":
        return "bg-mulearn-trusty-blue text-mulearn-whitish";
      default:
        return "bg-mulearn-gray-500 text-mulearn-whitish";
    }
  };

  const getTypeLabel = (type: TextTestimonial["type"]) => {
    switch (type) {
      case "learner":
        return "Learner";
      case "mentor":
        return "Mentor";
      case "partner":
        return "Partner";
      case "community-leader":
        return "Community Leader";
      default:
        return type;
    }
  };

  const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={cn(
            "w-4 h-4",
            i < rating
              ? "fill-yellow-400 text-yellow-400"
              : "fill-gray-300 text-gray-300"
          )}
        />
      ))}
    </div>
  );

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className="bg-mulearn-whitish rounded-2xl border border-mulearn-gray-200 p-6 shadow-sm hover:shadow-md transition-all duration-300 h-full">
      {}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full overflow-hidden bg-mulearn-gray-200">
            <img
              src={testimonial.profileImage}
              alt={testimonial.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className=" font-semibold text-mulearn-blackish">
              {testimonial.name}
            </h3>
            <p className="text-sm text-mulearn-gray-600 ">
              {testimonial.role}
              {testimonial.company && ` • ${testimonial.company}`}
            </p>
          </div>
        </div>

        {}
        <div
          className={cn(
            "px-2 py-1 rounded-full text-xs font-semibold uppercase tracking-wide",
            getTypeColor(testimonial.type)
          )}
        >
          {getTypeLabel(testimonial.type)}
        </div>
      </div>

      {}
      <blockquote className="mb-4">
        <p className="text-mulearn-gray-700  leading-relaxed">
          "{testimonial.quote}"
        </p>
      </blockquote>

      {}
      <div className="flex items-center justify-between pt-4 border-t border-mulearn-gray-100">
        <StarRating rating={testimonial.rating} />

        <div className="flex items-center gap-2 text-sm text-mulearn-gray-500">
          {testimonial.socialProof && (
            <>
              {getSocialIcon(testimonial.socialProof)}
              <span className="">{testimonial.socialProof}</span>
            </>
          )}
          <span className="">{formatDate(testimonial.date)}</span>
        </div>
      </div>
    </div>
  );
}
