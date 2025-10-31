"use client";

import { inspirationStationData } from "@/data/data";
import { Radio, Calendar, Mic, PlayCircle, Users, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { EpisodeCard } from "./_components/EpisodeCard";
import { useState } from "react";

export default function InspirationStationPage() {
  const upcomingEvents = inspirationStationData.events.filter(event => event.isUpcoming);
  const pastEvents = inspirationStationData.events.filter(event => !event.isUpcoming);
  
  const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('upcoming');

  return (
    <div className="min-h-screen bg-gradient-to-br from-mulearn-gray-50 to-mulearn-whitish">
      {/* Hero Section with Radio Illustration */}
      <section className="relative overflow-hidden py-12 md:py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-4 md:space-y-6 text-center lg:text-left">
              <div className="flex justify-center lg:justify-start">
                <Badge 
                  variant="outline" 
                  className="border-2 border-mulearn-trusty-blue text-mulearn-trusty-blue font-bold text-sm py-1 md:py-2 px-3 md:px-4 hover:bg-mulearn-trusty-blue/10 hover:border-mulearn-duke-purple hover:text-mulearn-duke-purple transition-all duration-300 shadow-sm"
                >
                  <Radio className="w-3 h-3 md:w-4 md:h-4 mr-2" />
                  Storytelling Platform
                </Badge>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-mulearn-blackish leading-tight">
                µLearn{" "}
                <span className="block bg-gradient-to-r from-mulearn-trusty-blue to-mulearn-duke-purple bg-clip-text text-transparent mt-2">
                  Inspiration Station Radio
                </span>
              </h1>
              
              <p className="text-base md:text-lg lg:text-xl text-mulearn-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                µLearn's storytelling-driven radio experience featuring real journeys, insights, and life-changing moments from the community.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-2 md:pt-4 justify-center lg:justify-start">
                <Button className="px-6 py-2.5 md:px-8 md:py-3 gap-2 text-sm md:text-base rounded-full hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 bg-[linear-gradient(135deg,#2E85FE_0%,#AF2EE6_100%)] text-white hover:brightness-110">
                  <PlayCircle className="w-4 h-4 md:w-5 md:h-5" />
                  Listen Live
                </Button>
                <Button variant="outline" className="px-6 py-2.5 md:px-8 md:py-3 gap-2 text-sm md:text-base rounded-full border-2 border-mulearn-trusty-blue text-mulearn-trusty-blue hover:bg-mulearn-trusty-blue/10 transition-all duration-300 hover:-translate-y-0.5">
                  <Mic className="w-4 h-4 md:w-5 md:h-5" />
                  Become a Speaker
                </Button>
              </div>
            </div>

            {/* Radio Illustration */}
            <div className="flex justify-center lg:justify-end order-first lg:order-last">
              <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl">
                <img 
                  src="/assets/radio/radio.png" 
                  alt="Inspiration Station Radio Illustration"
                  className="w-full h-auto rounded-2xl"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Episodes Section with Tabs */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-mulearn-blackish mb-3 md:mb-4">
              Inspiration Station Episodes
            </h2>
            <p className="text-mulearn-gray-600 max-w-2xl mx-auto text-base md:text-lg mb-6 md:mb-8">
              Discover inspiring stories from our community
            </p>

            {/* Improved Responsive Tab Navigation */}
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 md:space-x-8 max-w-md mx-auto">
              <button
                onClick={() => setActiveTab('upcoming')}
                className={`flex items-center justify-center gap-2 md:gap-3 px-6 py-3 md:px-8 md:py-4 rounded-2xl font-bold text-base md:text-lg transition-all duration-300 border-2 ${
                  activeTab === 'upcoming'
                    ? 'bg-white text-mulearn-trusty-blue border-mulearn-trusty-blue shadow-lg sm:shadow-xl scale-105'
                    : 'text-gray-500 border-transparent hover:text-mulearn-trusty-blue hover:border-mulearn-trusty-blue/30 hover:bg-white/50'
                }`}
              >
                <Clock className="w-4 h-4 md:w-5 md:h-5" />
                Upcoming
              </button>
              
              <button
                onClick={() => setActiveTab('past')}
                className={`flex items-center justify-center gap-2 md:gap-3 px-6 py-3 md:px-8 md:py-4 rounded-2xl font-bold text-base md:text-lg transition-all duration-300 border-2 ${
                  activeTab === 'past'
                    ? 'bg-white text-mulearn-trusty-blue border-mulearn-trusty-blue shadow-lg sm:shadow-xl scale-105'
                    : 'text-gray-500 border-transparent hover:text-mulearn-trusty-blue hover:border-mulearn-trusty-blue/30 hover:bg-white/50'
                }`}
              >
                <Calendar className="w-4 h-4 md:w-5 md:h-5" />
                Previous
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <div className="transition-all duration-300">
            {activeTab === 'upcoming' && (
              <div>
                {upcomingEvents.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {upcomingEvents.map((event) => (
                      <EpisodeCard key={event.id} event={event} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8 md:py-12">
                    <Calendar className="w-12 h-12 md:w-16 md:h-16 text-gray-300 mx-auto mb-3 md:mb-4" />
                    <h3 className="text-lg md:text-xl font-semibold text-gray-600 mb-2">No Upcoming Episodes</h3>
                    <p className="text-gray-500 text-sm md:text-base">Check back later for new inspiring stories!</p>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'past' && (
              <div>
                <div className="text-center mb-6 md:mb-8">
                  <p className="text-mulearn-gray-600 max-w-2xl mx-auto text-sm md:text-base">
                    Listed below are the speakers who came to the inspiration stations and inspired our listeners with their stories and experiences.
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                  {pastEvents.map((event) => (
                    <EpisodeCard key={event.id} event={event} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Become Speaker CTA Section */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-mulearn-trusty-blue/5 to-mulearn-duke-purple/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-mulearn-blackish mb-3 md:mb-4">
              Become Inspiration Station Radio Speaker
            </h2>
            <p className="text-base md:text-lg text-mulearn-gray-600 mb-6 md:mb-8">
              If you have a story to tell, or you know someone who has a story to tell, then you can request them to come to the Inspiration Station Radio and share their story with our listeners.
            </p>
            <Button 
              className="px-6 py-2.5 md:px-8 md:py-3 gap-2 text-sm md:text-base rounded-full hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 bg-[linear-gradient(135deg,#2E85FE_0%,#AF2EE6_100%)] text-white hover:brightness-110"
            >
              <Users className="w-4 h-4 md:w-5 md:h-5" />
              Apply Now
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}