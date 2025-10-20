"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { careers } from "@/data/data";
import Image from "next/image";

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-mulearn-whitish text-mulearn-blackish font-sans">
      <section className="py-20 px-6 md:px-16 text-center">
        <h1 className="font-display text-4xl md:text-5xl text-mulearn-trusty mb-4">
          Join the MuLearn Team
        </h1>
        <p className="text-mulearn-gray-600 max-w-2xl mx-auto mb-10">
          Be a part of a mission-driven community shaping the future of learning,
          collaboration, and innovation. Explore current openings below.
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {careers.map((job) => (
            <Card
              key={job.id}
              className="rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
            >
              {/* Image */}
              <img
                src={job.image || "/placeholder.svg"}
                alt={job.title}
                className="w-full h-40 object-cover"
              />

              {/* Text Content */}
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold text-[#0056D2]">{job.title}</h3>
                <p className="text-gray-500 text-sm mb-2">{job.department}</p>
                <p className="text-gray-700 text-sm flex-grow">{job.description}</p>

                {/* Button */}
                <a
                  href={job.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-center bg-gradient-to-r from-[#4C6EF5] to-[#228BE6] text-white py-2 px-4 rounded-lg font-medium hover:scale-105 transition-transform"
                >
                  Apply Now
                </a>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}
