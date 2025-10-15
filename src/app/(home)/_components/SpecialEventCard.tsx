"use client";

import React from "react";
import MuImage from "@/components/MuImage";
import { Button } from "@/components/ui/button";
import { FiCalendar, FiClock, FiX } from "react-icons/fi";
import { FaMapMarkerAlt } from "react-icons/fa";
import { SpecialEvent } from "@/lib/types";

const SpecialEventCard: React.FC<{ specialevent: SpecialEvent }> = ({
  specialevent,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <div className="relative w-full max-w-[400px] h-[400px] rounded-[20px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.1)] transition-all duration-300 ease-[cubic-bezier(0.25,0.8,0.25,1)] hover:-translate-y-[5px] hover:shadow-[0_15px_40px_rgba(0,0,0,0.2)]">
        <MuImage
          src={specialevent.image}
          alt={specialevent.title}
          width={400}
          height={180}
          className="object-cover w-full h-full"
        />
        <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-0 transition-transform duration-300 ease-in-out">
          <Button
            variant={"mulearn-blue"}
            className="border-none py-3 px-8 text-base font-medium ease-in-out flex items-center justify-center w-full hover:shadow-[0_6px_20px_rgba(0,123,255,0.4)]"
            onClick={() => setIsOpen(true)}
          >
            Read More
          </Button>
        </div>
      </div>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-mulearn-blackish/50 z-50"
            onClick={() => setIsOpen(false)}
          />
          <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
            <div className="rounded-lg overflow-hidden max-w-[400px] w-[90%] max-h-[600px] bg-mulearn-whitish">
              <div className="relative h-[180px] overflow-hidden">
                <div
                  className="bg-cover bg-center absolute top-0 left-0 right-0 bottom-0 w-full h-full"
                  style={{
                    backgroundImage: `url(${specialevent.image})`,
                  }}
                />
                <div
                  className="absolute top-3 right-3 w-5 h-5 text-mulearn-whitish cursor-pointer p-1 rounded-full transition-colors duration-200 hover:bg-mulearn-whitish/20"
                  onClick={() => setIsOpen(false)}
                >
                  <FiX className="w-5 h-5 text-mulearn-trusty-blue" />
                </div>
              </div>

              <div className="pt-6 pb-4 px-6">
                <div className="flex flex-col items-start gap-5">
                  <p className="text-mulearn-gray-600 text-base">
                    {specialevent.description}
                  </p>
                  <div className="flex flex-col items-start gap-4 w-full">
                    {specialevent.date && (
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-mulearn-greyish/50 text-mulearn-blackish">
                          <FiCalendar className="w-5 h-5" />
                        </div>
                        <p className="font-medium text-base">
                          {specialevent.date}
                        </p>
                      </div>
                    )}
                    {specialevent.time && (
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-mulearn-whitish text-mulearn-trusty-blue]">
                          <FiClock className="w-5 h-5" />
                        </div>
                        <p className="text-base">{specialevent.time}</p>
                      </div>
                    )}
                    {specialevent.location && (
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-mulearn-whitish text-mulearn-duke-purple">
                          <FaMapMarkerAlt className="w-5 h-5" />
                        </div>
                        <p className="text-base">{specialevent.location}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="bg-mulearn-whitish pt-2 pb-6 px-6">
                <Button
                  variant={"mulearn-blue"}
                  className="font-semibold rounded-md py-3 px-6 h-[50px] w-full border-none cursor-pointer"
                  onClick={() => window.open(specialevent.link, "_blank")}
                >
                  Explore More
                </Button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default SpecialEventCard;
