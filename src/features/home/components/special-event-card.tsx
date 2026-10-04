"use client";

import { Calendar, Clock, MapPin } from "lucide-react";
import { useState } from "react";
import { MuImage } from "@/components/layouts";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import type { SpecialEvent } from "../types/home.types";

export const SpecialEventCard: React.FC<{ specialevent: SpecialEvent }> = ({ specialevent }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Card
        variant="hoverable"
        className="relative w-full max-w-[400px] h-[400px] overflow-hidden cursor-pointer group"
        onClick={() => setIsOpen(true)}
      >
        <MuImage
          src={specialevent.image}
          alt={specialevent.title}
          fill
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 640px) 90vw, 400px"
        />
        <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-mulearn-blackish/60 to-transparent">
          <Button
            variant={"default"}
            className="py-3 px-8 flex items-center justify-center w-full font-semibold"
          >
            Read More
          </Button>
        </div>
      </Card>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-[400px] max-h-[90vh] overflow-y-auto p-0">
          <div className="relative h-[180px] overflow-hidden">
            <div
              className="bg-cover bg-center absolute inset-0 w-full h-full"
              style={{ backgroundImage: `url(${specialevent.image})` }}
            />
          </div>

          <DialogHeader className="px-6 pt-6">
            <DialogTitle className="text-2xl font-bold">{specialevent.title}</DialogTitle>
            <DialogDescription className="text-mulearn-gray-600 text-base pt-2">
              {specialevent.description}
            </DialogDescription>
          </DialogHeader>

          <CardContent className="px-6 pb-4">
            <div className="flex flex-col gap-4">
              {specialevent.date && (
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-mulearn-greyish/50 text-mulearn-blackish">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <p className="font-medium text-base">{specialevent.date}</p>
                </div>
              )}
              {specialevent.time && (
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-mulearn/10 text-mulearn">
                    <Clock className="w-5 h-5" />
                  </div>
                  <p>{specialevent.time}</p>
                </div>
              )}
              {specialevent.location && (
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-mulearn/10 text-mulearn">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <p>{specialevent.location}</p>
                </div>
              )}
            </div>
          </CardContent>

          <DialogFooter className="px-6 pb-6">
            <Button
              variant={"default"}
              className="font-semibold py-3 px-6 w-full"
              onClick={() => window.open(specialevent.link, "_blank")}
            >
              Explore More
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};
