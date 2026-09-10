"use client";

import {
  Briefcase,
  Calendar,
  Clock,
  ExternalLink,
  type LucideIcon,
  MapPin,
  Radio,
  User,
  Users,
} from "lucide-react";
import { useState } from "react";
import { MotionDiv } from "@/components/MuFramer";
import MuImage from "@/components/MuImage";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface GenericEventCardProps {
  event: {
    id: number;
    title?: string;
    topic?: string;
    performer?: string;
    designation?: string;
    campus?: string;
    zone?: string;
    date?: string;
    time?: string;
    description?: string;
    isUpcoming?: boolean;
    isLive?: boolean;
    thumbnail?: string;
    interestGroups?: string[];
    tags?: string[];
    link?: string;
  };
  variant?: "episode" | "office-hour" | "open-mic" | "superpower";
  icon?: LucideIcon;
  igLabels?: Record<string, string>;
  actionButton?: {
    label: string;
    onClick?: () => void;
  };
}

export const IG_LABELS: Record<string, string> = {
  "ui-ux": "UI/UX",
  "web-development": "Web Development",
  devops: "DevOps",
  "game-dev": "Game Dev",
  "no-low-code": "No/Low Code",
  entrepreneurship: "Entrepreneurship",
  "ar-vr-mr": "AR/VR/MR",
  "cyber-security": "Cyber Security",
  "mobile-development": "Mobile Dev",
  "data-analytics": "Data Analytics",
  space: "Space",
  ai: "AI",
  comics: "Comics",
  "digital-marketing": "Digital Marketing",
  muv: "MuV",
  "generative-ai": "Generative AI",
  dsa: "DSA",
  blockchain: "Blockchain",
  "data-science": "Data Science",
  "project-management": "Project Management",
  "quantum-computing": "Quantum Computing",
  "strategic-leadership": "Strategic Leadership",
  civil: "Civil",
  "iot-robotics": "IoT & Robotics",
  "internet-of-things-(iot)-and-robotics": "IoT & Robotics",
  "creative-design": "Creative Design",
  beckn: "Beckn",
  "quality-assurance": "QA",
  "human-resources": "HR",
  cloud: "Cloud",
};

function useReadMore(initialText: string, maxLength: number = 100) {
  const [isExpanded, setIsExpanded] = useState(false);

  const shouldTruncate = initialText.length > maxLength;
  const displayText = isExpanded
    ? initialText
    : shouldTruncate
      ? `${initialText.slice(0, maxLength)}...`
      : initialText;

  const toggleExpand = () => setIsExpanded(!isExpanded);

  return { displayText, isExpanded, shouldTruncate, toggleExpand };
}

export function GenericEventCard({
  event,
  variant = "episode",
  icon: IconComponent = Radio,
  igLabels = IG_LABELS,
}: GenericEventCardProps) {
  const { displayText, isExpanded, shouldTruncate, toggleExpand } = useReadMore(
    event.description || "",
    120,
  );

  const title = event.title || event.topic || "";
  const eventLink = event.link
    ? event.link.match(/^https?:\/\//)
      ? event.link
      : `https://${event.link}`
    : undefined;

  return (
    <MotionDiv
      whileHover={{ y: -8, scale: 1.01 }}
      transition={{ duration: 0.3, ease: [0.25, 0.8, 0.25, 1] }}
      className="group relative bg-mulearn-whitish rounded-tl-[32px] rounded-br-[32px] rounded-tr-xl rounded-bl-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-mulearn-greyish/30 hover:border-mulearn/40 w-full h-full flex flex-col before:absolute before:rounded-l-full"
    >
      {/* Thumbnail Section */}
      <div className="relative w-full h-48 overflow-hidden p-3 flex items-center justify-center shrink-0">
        <div className="w-full h-full rounded-[20px] overflow-hidden relative flex items-center justify-center bg-linear-to-br from-mulearn-trusty-blue/20 to-mulearn-duke-purple/20">
          {event.thumbnail ? (
            <MuImage
              src={event.thumbnail}
              alt={title}
              width={800}
              height={400}
              className="object-contain w-full h-full group-hover:scale-104 transition-transform duration-500"
            />
          ) : (
            <IconComponent className="w-16 h-16 text-mulearn-trusty-blue" />
          )}
        </div>

        {/* Status badge */}
        <div className="absolute top-5 right-5">
          {event.isLive ? (
            <Badge className="flex items-center bg-mulearn-whitish text-destructive border border-red-500 hover:bg-mulearn-whitish">
              <span className="relative flex h-2 w-2 mr-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-destructive  opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-destructive" />
              </span>
              Happening Today
            </Badge>
          ) : (
            <Badge
              className={`flex items-center ${
                event.isUpcoming
                  ? "bg-mulearn-whitish text-mulearn-trusty-blue border border-mulearn-trusty-blue"
                  : "bg-gray-100 text-mulearn-blackish"
              }`}
            >
              <Clock className="w-3 h-3 mr-1" />
              {event.isUpcoming
                ? "Upcoming"
                : variant === "episode"
                  ? "Past Episode"
                  : "Past Event"}
            </Badge>
          )}
        </div>
      </div>

      {/* Event Content Details */}
      <div className="px-6 pb-6 pt-2 flex-1 flex flex-col justify-between">
        <div className="space-y-3">
          {/* Tags/Interest Groups */}
          {(event.interestGroups || event.tags || event.zone) && (
            <div className="flex flex-wrap gap-2">
              {event.zone && (
                <Badge
                  variant="outline"
                  className="text-mulearn-trusty-blue bg-mulearn-trusty-blue/10"
                >
                  {event.zone}
                </Badge>
              )}
              {event.interestGroups?.map((ig: string) => (
                <Badge
                  key={ig}
                  variant="outline"
                  className="text-mulearn-trusty-blue bg-mulearn-trusty-blue/10"
                >
                  {igLabels[ig] || ig}
                </Badge>
              ))}
              {event.tags?.map((tag: string) => (
                <Badge
                  key={tag}
                  variant="outline"
                  className="text-mulearn-trusty-blue bg-mulearn-trusty-blue/10"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          )}

          <h3 className="text-mulearn-blackish font-extrabold text-lg leading-snug line-clamp-2 group-hover:text-mulearn transition-colors duration-200">
            {title}
          </h3>

          {/* Performer/Campus info */}
          {event.performer && (variant === "office-hour" || variant === "superpower") && (
            <div className="text-sm text-mulearn-gray-600">
              <p className="flex items-start gap-1 leading-5">
                <User className="w-4 h-4 shrink-0 mt-0.5" /> {event.performer}
              </p>
              {event.designation && (
                <p className="flex items-start gap-1 leading-5">
                  <Briefcase className="w-4 h-4 shrink-0 mt-0.5" /> {event.designation}
                </p>
              )}
            </div>
          )}
          {event.performer && variant === "open-mic" && (
            <p className="text-mulearn-gray-700 font-medium flex items-center text-sm">
              <Users className="w-4 h-4 mr-2 text-mulearn-gray-500" />
              Featuring: {event.performer}
            </p>
          )}
          {event.campus && (variant === "episode" || variant === "superpower") && (
            <p className="text-mulearn-gray-700 font-medium flex items-start leading-5 text-sm">
              <MapPin className="w-4 h-4 mr-2 mt-0.5 shrink-0 text-mulearn-gray-500" />
              {event.campus}
            </p>
          )}

          {/* Description for open-mic variant */}
          {event.description && variant === "open-mic" && (
            <div>
              <p className="text-mulearn-gray-600 text-sm leading-relaxed">{displayText}</p>
              {shouldTruncate && (
                <Button
                  variant="link"
                  onClick={toggleExpand}
                  className="p-0 h-auto text-mulearn-trusty-blue hover:text-mulearn-duke-purple font-medium text-sm mt-2"
                >
                  {isExpanded ? "Show Less" : "Read More"}
                </Button>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        <div
          className={`flex ${
            eventLink && (event.isUpcoming || event.isLive) ? "justify-between" : "justify-start"
          } items-center mt-4 pt-4 border-t border-mulearn-greyish/20`}
        >
          <span className="text-xs font-bold text-mulearn-gray-600/80 flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-mulearn" />
            {event.date} {event.time ? `• ${event.time}` : ""}
          </span>
          {eventLink && (event.isUpcoming || event.isLive) && (
            <Button variant="default" className="gap-1 px-4 py-2 text-sm rounded-full" asChild>
              <a href={eventLink} target="_blank" rel="noopener noreferrer">
                Join <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </Button>
          )}
        </div>
      </div>
    </MotionDiv>
  );
}
