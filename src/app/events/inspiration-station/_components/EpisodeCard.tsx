"use client";

import { useState } from "react";
import { Calendar, User, PlayCircle, Clock, Radio } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

function useReadMore(initialText: string, maxLength: number = 100) {
  const [isExpanded, setIsExpanded] = useState(false);

  const shouldTruncate = initialText.length > maxLength;
  const displayText = isExpanded
    ? initialText
    : shouldTruncate
    ? initialText.slice(0, maxLength) + "..."
    : initialText;

  const toggleExpand = () => setIsExpanded(!isExpanded);

  return {
    displayText,
    isExpanded,
    shouldTruncate,
    toggleExpand,
  };
}

interface EpisodeCardProps {
  event: {
    id: number;
    title: string;
    speaker?: string;
    description: string;
    date: string;
    tags: string[];
    thumbnail?: string;
    isUpcoming: boolean;
  };
}

export function EpisodeCard({ event }: EpisodeCardProps) {
  const { displayText, isExpanded, shouldTruncate, toggleExpand } = useReadMore(
    event.description,
    120
  );

  return (
    <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden h-full flex flex-col">
      {}
      <div className="h-48 bg-linear-to-br from-mulearn-trusty-blue/20 to-mulearn-duke-purple/20 flex items-center justify-center relative flex-shrink-0">
        {event.thumbnail ? (
          <img
            src={event.thumbnail}
            alt={`Inspiration Station episode: ${event.title}`}
            className="w-full h-full object-cover"
          />
        ) : (
          <Radio className="w-16 h-16 text-mulearn-trusty-blue" />
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
            {event.isUpcoming ? "Upcoming" : "Past Episode"}
          </Badge>
        </div>
      </div>

      {}
      <CardHeader className="pb-4 flex-grow">
        <div className="flex flex-wrap gap-2 mb-3">
          {event.tags.map((tag: string) => (
            <Badge
              key={tag}
              variant="outline"
              className="text-mulearn-trusty-blue bg-mulearn-trusty-blue/10"
            >
              {tag}
            </Badge>
          ))}
        </div>

        <CardTitle className="text-xl mb-2 line-clamp-2">
          {event.title}
        </CardTitle>

        {event.speaker && (
          <p className="text-mulearn-gray-700 font-medium mb-3 flex items-center">
            <User className="w-4 h-4 mr-2 text-mulearn-gray-500" />
            Speaker: {event.speaker}
          </p>
        )}
      </CardHeader>

      <CardContent className="pt-0 flex flex-col flex-grow">
        {}
        <div className="mb-4 flex-grow">
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

        {}
        <div className="flex justify-between items-center pt-4 border-t border-gray-100 mt-auto">
          <span className="text-sm text-mulearn-gray-500 font-medium flex items-center">
            <Calendar className="w-4 h-4 mr-1" />
            {event.date}
          </span>
          <Button
            variant={event.isUpcoming ? "outline" : "outline"}
            className={`gap-1 px-4 py-2 text-sm rounded-full ${
              event.isUpcoming
                ? "bg-mulearn-whitish text-mulearn-trusty-blue border-mulearn-trusty-blue hover:bg-mulearn-trusty-blue hover:text-mulearn-whitish"
                : "bg-gray-100 text-mulearn-blackish hover:bg-gray-200"
            }`}
          >
            <PlayCircle className="w-4 h-4" />
            {event.isUpcoming ? "Notify Me" : "Listen"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
