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
          {careers.map((job, index) => (
            <Card key={index} className="shadow-lg rounded-2xl border border-gray-200">
              <CardContent className="p-6 flex flex-col items-start text-left">
                {job.image && (
                  <div className="w-full h-40 relative mb-4 rounded-xl overflow-hidden">
                    <Image
                      src={job.image}
                      alt={job.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <h2 className="font-display text-xl mb-2 text-mulearn-trusty-blue">
                  {job.title}
                </h2>
                <p className="text-mulearn-gray-600 mb-3">{job.department}</p>
                <p className="text-sm mb-4">{job.description}</p>
                <Button
                  variant="mulearn"
                  className="self-start mt-auto px-4 py-2"
                >
                  Apply Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}
