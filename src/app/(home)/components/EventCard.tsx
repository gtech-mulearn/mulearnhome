"use client";

import React from "react";
import Image from "next/image";
import { FiCalendar, FiClock, FiX } from "react-icons/fi";
import { FaMapMarkerAlt } from "react-icons/fa";

interface SpecialEvent {
  id: number;
  title: string;
  description: string;
  date?: string;
  recurrence?: string;
  participants?: number;
  image: string;
  link: string;
  isLive: boolean;
  isExpired?: boolean | null;
  isComingSoon?: boolean | null;
  organization?: string;
  tags?: string[];
  location?: string;
  time?: string;
}

const SpecialEventCard: React.FC<{ specialevent: SpecialEvent }> = ({
  specialevent,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <div className="relative w-full max-w-[400px] h-[400px] rounded-[20px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.1)] transition-all duration-300 ease-[cubic-bezier(0.25,0.8,0.25,1)] font-sans hover:-translate-y-[5px] hover:shadow-[0_15px_40px_rgba(0,0,0,0.2)]">
        <Image
          src={specialevent.image}
          alt={specialevent.title}
          width={400}
          height={180}
          className="object-cover w-full h-full"
        />
        <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-0 transition-transform duration-300 ease-in-out">
          <button
            className="bg-[var(--mulearn-trusty-blue)] text-[var(--mulearn-whitish)] hover:bg-[var(--mulearn-duke-purple)] border-none rounded-[30px] py-3 px-8 text-base font-medium cursor-pointer transition-all duration-300 ease-in-out flex items-center justify-center w-full hover:shadow-[0_6px_20px_rgba(0,123,255,0.4)]"
            onClick={() => setIsOpen(true)}
          >
            Read More
          </button>
        </div>
      </div>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-[var(--mulearn-blackish)]/50 z-50"
            onClick={() => setIsOpen(false)}
          />
          <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
            <div className="rounded-lg overflow-hidden max-w-[400px] w-[90%] max-h-[600px] bg-[var(--mulearn-whitish)]">
              <div className="relative h-[180px] overflow-hidden">
                <div
                  className="bg-cover bg-center absolute top-0 left-0 right-0 bottom-0 w-full h-full"
                  style={{
                    backgroundImage: `url(${specialevent.image})`,
                  }}
                />
                <div
                  className="absolute top-3 right-3 w-5 h-5 text-[var(--mulearn-whitish)] cursor-pointer p-1 rounded-full transition-colors duration-200 hover:bg-[var(--mulearn-whitish)]/20"
                  onClick={() => setIsOpen(false)}
                >
                  <FiX className="w-5 h-5" />
                </div>
              </div>

              <div className="pt-6 pb-4 px-6">
                <div className="flex flex-col items-start gap-5">
                  <p className="text-[var(--mulearn-gray-600)] text-base">
                    {specialevent.description}
                  </p>
                  <div className="flex flex-col items-start gap-4 w-full">
                    {specialevent.date && (
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[var(--green)]/50 text-[var(--green)]">
                          <FiCalendar className="w-5 h-5" />
                        </div>
                        <p className="font-medium text-base">
                          {specialevent.date}
                        </p>
                      </div>
                    )}
                    {specialevent.time && (
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[var(--mulearn-whitish)] text-[var(--mulearn-trusty-blue)]]">
                          <FiClock className="w-5 h-5" />
                        </div>
                        <p className="text-base">{specialevent.time}</p>
                      </div>
                    )}
                    {specialevent.location && (
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[var(--mulearn-whitish)] text-[var(--Error)]">
                          <FaMapMarkerAlt className="w-5 h-5" />
                        </div>
                        <p className="text-base">{specialevent.location}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="bg-[var(--mulearn-whitish)] pt-2 pb-6 px-6">
                <button
                  className="bg-[var(--mulearn-trusty-blue)] text-[var(--mulearn-whitish)] font-semibold text-base rounded-md py-3 px-6 h-[50px] w-full transition-colors duration-200 border-none cursor-pointer hover:bg-[var(--mulearn-duke-purple)]"
                  onClick={() => window.open(specialevent.link, "_blank")}
                >
                  Explore More
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default SpecialEventCard;
