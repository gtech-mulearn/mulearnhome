"use client";

import { useScroll, useTransform } from "framer-motion";
import { ArrowRight, BookOpen, Lightbulb, Search, Target, TrendingUp, Users } from "lucide-react";
import { useState } from "react";
import { MotionA, MotionDiv, MotionSection } from "@/components/MuFramer";
import MuImage from "@/components/MuImage";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { interestGroups } from "@/data/lc-ig";
import { clientEnv } from "@/lib/env/env.client";

const workflowSteps = [
  {
    icon: Target,
    title: "Reach Level 4",
    description:
      "Start your µLearn journey and progress to Level 4 to unlock Interest Group related tasks and opportunities.",
  },
  {
    icon: Users,
    title: "Choose Your Interest Group",
    description:
      "Explore and join an Interest Group that aligns with your passion and career goals from the available domains.",
  },
  {
    icon: BookOpen,
    title: "Learn Through Real-World Problems",
    description:
      "Engage in hands-on learning by working on real-world problems and industry-relevant projects within your group.",
  },
  {
    icon: Lightbulb,
    title: "Build Practical Skills",
    description:
      "Develop job-ready skills through collaborative learning, mentorship from peers and industry experts, and curated resources.",
  },
  {
    icon: TrendingUp,
    title: "Advance Your Career",
    description:
      "Apply your skills to meaningful projects, build your portfolio, and prepare for career opportunities in your chosen field.",
  },
];

const coreValues = [
  {
    title: "Collaboration",
    description: "Learn together, grow together",
    icon: "🤝",
  },
  {
    title: "Curiosity",
    description: "Question everything, explore endlessly",
    icon: "🔍",
  },
  {
    title: "Community",
    description: "Build connections that last",
    icon: "💙",
  },
];

export default function InterestGroups() {
  const [searchTerm, setSearchTerm] = useState("");
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, 150]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);

  const filteredGroups = interestGroups.filter(
    (group) =>
      group.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      group.tagline.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="bg-linear-to-b from-mulearn-greyish/10 to-mulearn-whitish min-h-screen">
      <MotionSection
        style={{ y: heroY, opacity: heroOpacity }}
        className="relative overflow-hidden bg-mulearn pt-20 pb-32 md:pt-32 md:pb-40"
      >
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <MotionDiv
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-6 px-6 py-2 bg-mulearn-whitish/20 backdrop-blur-sm rounded-full border border-mulearn-whitish/30"
            >
              <span className="text-mulearn-whitish text-sm font-medium tracking-wide uppercase">
                Interest Groups
              </span>
            </MotionDiv>

            <h1 className="text-mulearn-whitish mb-6">
              Find Your Tribe,
              <br />
              <span className="text-mulearn-whitish">Grow Together</span>
            </h1>

            <p className="text-lg md:text-xl text-mulearn-whitish/80 max-w-3xl mx-auto leading-relaxed">
              Join communities where learners explore specific domains, collaborate on projects, and
              grow together through shared curiosity and hands-on learning.
            </p>
          </MotionDiv>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <path
              d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
              className="fill-current text-mulearn-whitish/95"
            />
          </svg>
        </div>
      </MotionSection>

      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">Built on Community Values</h2>
          <p className="text-lg text-mulearn-gray-600 max-w-2xl mx-auto">
            At µLearn, we believe in the power of learning together
          </p>
        </MotionDiv>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {coreValues.map((value, index) => (
            <MotionDiv
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="text-center p-8 rounded-2xl bg-mulearn-whitish shadow-sm hover:shadow-xl transition-all duration-300 border border-mulearn-greyish/20"
            >
              <div className="text-5xl mb-4">{value.icon}</div>
              <h3 className="mb-2">{value.title}</h3>
              <p className="text-mulearn-gray-600">{value.description}</p>
            </MotionDiv>
          ))}
        </div>
      </section>

      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="mb-4">Your Learning Journey</h2>
            <p className="text-lg text-mulearn-gray-600 max-w-2xl mx-auto">
              From curiosity to career readiness in five simple steps
            </p>
          </MotionDiv>

          <div className="hidden md:block relative">
            <div className="absolute left-1/2 top-18 bottom-20 -translate-x-1/2 w-1 bg-mulearn rounded-full" />
            {workflowSteps.map((step, index) => {
              const Icon = step.icon;
              const isLeft = index % 2 === 0;

              return (
                <MotionDiv
                  key={step.title}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative mb-24 last:mb-0 z-10"
                >
                  <div className={`flex items-center ${isLeft ? "justify-end" : "justify-start"}`}>
                    <div className={`w-5/12 ${isLeft ? "pr-12 text-right" : "pl-12 text-left"}`}>
                      <div className="bg-mulearn-whitish p-6 rounded-2xl shadow-lg border border-mulearn-greyish/20 hover:shadow-xl transition-shadow duration-300">
                        <div
                          className={`flex items-center gap-3 mb-3 ${
                            isLeft ? "justify-end" : "justify-start"
                          }`}
                        >
                          <Icon className="w-6 h-6 text-mulearn" />
                          <h3>{step.title}</h3>
                        </div>
                        <p className="text-mulearn-gray-600 leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  </div>

                  <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                    <MotionDiv
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                      className="w-12 h-12 bg-mulearn rounded-full flex items-center justify-center shadow-lg"
                    >
                      <div className="w-6 h-6 bg-mulearn-whitish rounded-full" />
                    </MotionDiv>
                  </div>
                </MotionDiv>
              );
            })}
          </div>

          <div className="md:hidden space-y-8">
            {workflowSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <MotionDiv
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative pl-12"
                >
                  {index < workflowSteps.length - 1 && (
                    <div className="absolute left-5 top-12 bottom-0 w-0.5 bg-mulearn transform -translate-x-1/2" />
                  )}

                  <div className="absolute left-0 top-0">
                    <div className="w-10 h-10 bg-mulearn rounded-full flex items-center justify-center shadow-md">
                      <Icon className="w-5 h-5 text-mulearn-whitish" />
                    </div>
                  </div>

                  <div className="bg-mulearn-whitish p-6 rounded-xl shadow-md border border-mulearn-greyish/20">
                    <h3 className="mb-2">{step.title}</h3>
                    <p className="text-mulearn-gray-600 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </MotionDiv>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="mb-4">Explore Interest Groups</h2>
          <p className="text-lg text-mulearn-gray-600 max-w-2xl mx-auto mb-8">
            Choose a domain that excites you and start your learning journey today
          </p>

          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-mulearn-gray-600 w-5 h-5" />
            <Input
              type="text"
              placeholder="Search interest groups..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-full border-2 border-mulearn-greyish/40 focus:border-mulearn-trusty-blue focus:outline-none transition-colors duration-300 text-mulearn-blackish placeholder-gray-400"
              aria-label="Search interest groups"
            />
          </div>
        </MotionDiv>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredGroups.map((group, index) => (
            <MotionA
              key={group.name}
              href={group.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group block"
            >
              <Card
                variant="hoverable"
                className="relative h-full bg-mulearn-whitish border-mulearn-greyish/20"
              >
                <div className="relative h-48 overflow-hidden">
                  <MuImage
                    src={group.image}
                    alt={group.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <CardContent className="p-6">
                  <CardTitle className="mb-2 text-mulearn">{group.name}</CardTitle>
                  <CardDescription className="text-mulearn-gray-600 mb-4">
                    {group.tagline}
                  </CardDescription>

                  <div className="flex items-center gap-2 text-mulearn font-medium text-sm group-hover:gap-3 transition-all duration-300">
                    Explore <ArrowRight className="w-4 h-4" />
                  </div>
                </CardContent>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-mulearn opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 rounded-2xl">
                  <p className="text-mulearn-whitish text-sm leading-relaxed text-center mb-4">
                    {group.description}
                  </p>
                  <div className="flex items-center gap-2 text-mulearn-whitish font-medium text-sm">
                    Explore <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Card>
            </MotionA>
          ))}
        </div>

        {filteredGroups.length === 0 && (
          <MotionDiv
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-mulearn-gray-600 text-lg">
              No interest groups found matching your search.
            </p>
          </MotionDiv>
        )}
      </section>

      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-mulearn">
        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-mulearn-whitish mb-6">Ready to Start Your Journey?</h2>
          <p className="text-lg text-mulearn-whitish/90 mb-8 max-w-2xl mx-auto">
            Join thousands of learners who are building skills, making connections, and preparing
            for the careers of tomorrow.
          </p>
          <div>
            <Button asChild variant="inverted" className="px-8 py-4 text-lg">
              <a
                href={`${clientEnv.NEXT_PUBLIC_APP_URL}dashboard/profile`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Join an Interest Group <ArrowRight className="w-5 h-5 !text-mulearn-trusty-blue" />
              </a>
            </Button>
          </div>
        </MotionDiv>
      </section>
    </div>
  );
}
