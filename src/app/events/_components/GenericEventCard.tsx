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
import MuImage from "@/components/MuImage";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
    thumbnail?: string;
    interestGroups?: string[];
    tags?: string[];
    link?: string;
  };
  variant?: "episode" | "office-hour" | "open-mic";
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
  actionButton,
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
    <Card variant="hoverable" className="h-full flex flex-col">
      {/* Thumbnail Section */}
      <div
        className={`${variant === "office-hour" ? "aspect-[3/4] h-auto" : "h-48"} bg-linear-to-br from-mulearn-trusty-blue/20 to-mulearn-duke-purple/20 flex items-center justify-center relative shrink-0`}
      >
        {event.thumbnail ? (
          <MuImage
            src={event.thumbnail}
            alt={title}
            width={400}
            height={192}
            className="object-cover w-full h-full"
          />
        ) : (
          <IconComponent className="w-16 h-16 text-mulearn-trusty-blue" />
        )}
        <div className="absolute top-4 right-4">
          <Badge
            className={`flex items-center ${
              event.isUpcoming
                ? "bg-mulearn-whitish text-mulearn-trusty-blue border border-mulearn-trusty-blue"
                : "bg-gray-100 text-mulearn-blackish"
            }`}
          >
            <Clock className="w-3 h-3 mr-1" />
            {event.isUpcoming ? "Upcoming" : variant === "episode" ? "Past Episode" : "Past Event"}
          </Badge>
        </div>
      </div>

      <CardHeader className="pb-4 grow">
        {/* Tags/Interest Groups */}
        {(event.interestGroups || event.tags || event.zone) && (
          <div className="flex flex-wrap gap-2 mb-3">
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

        <CardTitle className="text-xl mb-2 line-clamp-2">{title}</CardTitle>

        {/* Performer/Campus info */}
        {event.performer && variant === "office-hour" && (
          <div className="text-sm text-mulearn-gray-400">
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
          <p className="text-mulearn-gray-700 font-medium mb-3 flex items-center">
            <Users className="w-4 h-4 mr-2 text-mulearn-gray-500" />
            Featuring: {event.performer}
          </p>
        )}
        {event.campus && variant === "episode" && (
          <p className="text-mulearn-gray-700 font-medium mb-3 flex items-start leading-5">
            <MapPin className="w-4 h-4 mr-2 mt-0.5 shrink-0 text-mulearn-gray-500" />
            {event.campus}
          </p>
        )}
      </CardHeader>

      <CardContent className="pt-0 flex flex-col grow">
        {/* Description for open-mic variant */}
        {event.description && variant === "open-mic" && (
          <div className="mb-4 grow">
            <p className="text-mulearn-gray-600 leading-relaxed">{displayText}</p>
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

        {/* Footer */}
        <div
          className={`flex ${actionButton || (event.link && event.isUpcoming) ? "justify-between" : "justify-start"} items-center pt-4 border-t border-gray-100 mt-auto`}
        >
          <span className="text-sm text-mulearn-gray-500 font-medium flex items-center">
            <Calendar className="w-4 h-4 mr-1" />
            {event.date} {event.time ? `• ${event.time}` : ""}
          </span>
          {eventLink && event.isUpcoming && (
            <Button variant="default" className="gap-1 px-4 py-2 text-sm rounded-full" asChild>
              <a href={eventLink} target="_blank" rel="noopener noreferrer">
                Join <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </Button>
          )}
          {actionButton && (
            <Button
              variant={event.isUpcoming ? "default" : "outline"}
              className="gap-1 px-4 py-2 text-sm rounded-full"
              onClick={actionButton.onClick}
            >
              {actionButton.label}
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
