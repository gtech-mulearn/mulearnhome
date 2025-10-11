"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { enablers } from "@/data/data";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants, easeOut } from "framer-motion";

export default function Programs() {
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
  };

  return (
    <section
      id="Program"
      className="py-16 md:py-24 bg-mulearn-whitish text-mulearn-blackish"
    >
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Enabler{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-mulearn-trusty-blue">
                Programs
              </span>
            </span>{" "}
            & <span>Projects</span>
          </h2>
          <p className="text-mulearn-gray-600 text-lg max-w-2xl mx-auto">
            Participate in exclusive programs designed to elevate your teaching
            skills
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 max-w-6xl mx-auto">
          {enablers.programs.map((program, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
            >
              <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="relative w-auto overflow-hidden">
                  <Image
                    src={program.image}
                    alt={program.title}
                    width={200}
                    height={100}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <CardHeader className="pt-6 pb-2">
                  <CardTitle className="text-2xl">{program.title}</CardTitle>
                </CardHeader>

                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {program.description}
                  </CardDescription>
                </CardContent>

                <CardFooter className="pt-4">
                  <Link
                    href={program.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <Button
                      variant={"mulearn-blue"}
                      className="w-full flex items-center justify-center gap-3 text-mulearn-whitish rounded-xl
                      px-5 py-3 font-semibold text-sm shadow-sm
                      hover:shadow-md transition-all duration-300 cursor-pointer"
                    >
                      <span>{program.cta}</span>
                      <ArrowRight className="h-4 w-4 items-center justify-center gap-2 transition-transform duration-300 group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
