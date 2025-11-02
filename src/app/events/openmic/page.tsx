"use client";

import { openMicData } from "@/data/data";
import { OMEvent } from "@/lib/types";
import { useState } from "react";
import { Mic, Calendar, Users, PlayCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import MuImage from "@/components/MuImage";

export default function OpenMicPage() {
  const upcomingEvents = openMicData.events.filter((event) => event.isUpcoming);
  const pastEvents = openMicData.events.filter((event) => !event.isUpcoming);

  return (
    <div className="min-h-screen bg-linear-to-br from-mulearn-gray-50 to-mulearn-whitish">
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge
              variant="outline"
              className="mb-6 border-2 border-mulearn-trusty-blue text-mulearn-trusty-blue font-bold text-sm py-2 px-4 hover:bg-mulearn-trusty-blue/10 hover:border-mulearn-duke-purple hover:text-mulearn-duke-purple transition-all duration-300 shadow-sm"
            >
              <Mic className="w-4 h-4 mr-2" />
              Community Platform
            </Badge>

            <h1 className="text-4xl md:text-6xl font-black text-mulearn-blackish mb-6 leading-tight">
              µLearn{" "}
              <span className="bg-linear-to-r from-mulearn-trusty-blue to-mulearn-duke-purple bg-clip-text text-transparent">
                Open Mic
              </span>
            </h1>

            <p className="text-lg md:text-xl text-mulearn-gray-600 leading-relaxed mb-8">
              A platform where µLearn members perform, speak, express
              creativity, and share unique stories or talents. Join our
              community-driven stage for music, poetry, storytelling, and
              innovative performances that celebrate youth expression and
              creative voices.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button className="px-8 py-3 gap-2 text-base rounded-full hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5">
                <PlayCircle className="w-5 h-5" />
                Join Next Session
              </Button>
              <Button
                variant="outline"
                className="px-8 py-3 gap-2 text-base rounded-full border-2 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
              >
                <Users className="w-5 h-5" />
                Watch Previous Events
              </Button>
            </div>
          </div>
        </div>
      </section>

      {upcomingEvents.length > 0 && (
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-mulearn-blackish mb-4 flex items-center justify-center">
                <Clock className="w-8 h-8 mr-3 text-mulearn-trusty-blue" />
                Upcoming Sessions
              </h2>
              <p className="text-mulearn-gray-600 max-w-2xl mx-auto">
                Don&apos;t miss these exciting upcoming Open Mic performances
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-12 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-mulearn-blackish mb-4 flex items-center justify-center">
              <Calendar className="w-8 h-8 mr-3 text-mulearn-duke-purple" />
              Performance Highlights
            </h2>
            <p className="text-mulearn-gray-600 max-w-2xl mx-auto">
              Amazing performances and creative expressions from our community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

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

function EventCard({ event }: { event: OMEvent }) {
  const { displayText, isExpanded, shouldTruncate, toggleExpand } = useReadMore(
    event.description,
    120
  );

  return (
    <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden h-full flex flex-col">
      <div className="h-48 bg-linear-to-br from-mulearn-trusty-blue/20 to-mulearn-duke-purple/20 flex items-center justify-center relative flex-shrink-0">
        {event.thumbnail ? (
          <MuImage
            src={event.thumbnail}
            alt={`Open Mic performance: ${event.title}`}
            width={400}
            height={192}
            className="object-cover w-full h-full"
          />
        ) : (
          <Mic className="w-16 h-16 text-mulearn-trusty-blue" />
        )}
        <div className="absolute top-4 right-4">
          <Badge
            variant={event.isUpcoming ? "default" : "secondary"}
            className="flex items-center"
          >
            <Clock className="w-3 h-3 mr-1" />
            {event.isUpcoming ? "Upcoming" : "Past Event"}
          </Badge>
        </div>
      </div>

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

        {event.performer && (
          <p className="text-mulearn-gray-700 font-medium mb-3 flex items-center">
            <Users className="w-4 h-4 mr-2 text-mulearn-gray-500" />
            Featuring: {event.performer}
          </p>
        )}
      </CardHeader>

      <CardContent className="pt-0 flex flex-col flex-grow">
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

        <div className="flex justify-between items-center pt-4 border-t border-gray-100 mt-auto">
          <span className="text-sm text-mulearn-gray-500 font-medium flex items-center">
            <Calendar className="w-4 h-4 mr-1" />
            {event.date}
          </span>
          <Button
            variant={event.isUpcoming ? "default" : "outline"}
            className="gap-1 px-4 py-2 text-sm rounded-full"
          >
            <PlayCircle className="w-4 h-4" />
            {event.isUpcoming ? "Register" : "Watch"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
