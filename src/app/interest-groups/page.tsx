"use client";
// Removed cdnUrl usage
import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Search,
  ArrowRight,
  Users,
  Target,
  BookOpen,
  Lightbulb,
  TrendingUp,
} from "lucide-react";
import MuImage from "@/components/MuImage";
import { Button } from "@/components/ui/button";
import { interestGroups } from "@/data/data";
import Link from "next/link";

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
      group.tagline.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-gradient-to-b from-mulearn-greyish/10 to-mulearn-whitish min-h-screen">
      {/* Hero Section */}
      <motion.section
        style={{ y: heroY, opacity: heroOpacity }}
        className="relative overflow-hidden bg-linear-to-r from-mulearn-trusty-blue to-mulearn-duke-purple pt-20 pb-32 md:pt-32 md:pb-40"
      >
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-6 px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30"
            >
              <span className="text-mulearn-whitish text-sm font-medium tracking-wide uppercase">
                Interest Groups
              </span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-mulearn-whitish mb-6 leading-tight ">
              Find Your Tribe,
              <br />
              <span className="text-mulearn-whitish">Grow Together</span>
            </h1>

            <p className="text-lg md:text-xl text-mulearn-whitish/80 max-w-3xl mx-auto leading-relaxed">
              Join communities where learners explore specific domains,
              collaborate on projects, and grow together through shared
              curiosity and hands-on learning.
            </p>
          </motion.div>
        </div>

        {/* Decorative wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto"
          >
            <path
              d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
              className="fill-current text-mulearn-whitish/95"
            />
          </svg>
        </div>
      </motion.section>

      {/* Core Values Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-mulearn-blackish mb-4 ">
            Built on Community Values
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            At µLearn, we believe in the power of learning together
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {coreValues.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="text-center p-8 rounded-2xl bg-mulearn-whitish shadow-sm hover:shadow-xl transition-all duration-300 border border-mulearn-greyish/20"
            >
              <div className="text-5xl mb-4">{value.icon}</div>
              <h3 className="text-xl font-bold text-mulearn-blackish mb-2 ">
                {value.title}
              </h3>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How It Works Timeline */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-mulearn-greyish/10 to-mulearn-whitish">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-mulearn-blackish mb-4 ">
              Your Learning Journey
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From curiosity to career readiness in five simple steps
            </p>
          </motion.div>

          {/* Desktop Timeline */}
          <div className="hidden md:block relative">
            {/* Vertical center line */}
            <div
              className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-linear-to-r from-mulearn-trusty-blue to-mulearn-duke-purple/40 rounded-full"
              style={{ top: 0, height: "calc(100% - 96px)" }}
            />

            {workflowSteps.map((step, index) => {
              const Icon = step.icon;
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative mb-24 last:mb-0 z-10"
                >
                  <div
                    className={`flex items-center ${
                      isLeft ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`w-5/12 ${
                        isLeft ? "pr-12 text-right" : "pl-12 text-left"
                      }`}
                    >
                      <div className="bg-mulearn-whitish p-6 rounded-2xl shadow-lg border border-mulearn-greyish/20 hover:shadow-xl transition-shadow duration-300">
                        <div
                          className={`flex items-center gap-3 mb-3 ${
                            isLeft ? "justify-end" : "justify-start"
                          }`}
                        >
                          <Icon className="w-6 h-6 bg-linear-to-r from-mulearn-trusty-blue to-mulearn-duke-purple bg-clip-text text-transparent" />
                          <h3 className="text-xl font-bold text-mulearn-blackish ">
                            {step.title}
                          </h3>
                        </div>
                        <p className="text-gray-600 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                      className="w-12 h-12 bg-linear-to-r from-mulearn-trusty-blue to-mulearn-duke-purple rounded-full flex items-center justify-center shadow-lg"
                    >
                      <div className="w-6 h-6 bg-mulearn-whitish rounded-full" />
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Mobile Timeline */}
          <div className="md:hidden space-y-8">
            {workflowSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative pl-12"
                >
                  {/* Vertical line */}
                  {index < workflowSteps.length - 1 && (
                    <div className="absolute left-5 top-12 bottom-0 w-0.5 bg-linear-to-r from-mulearn-trusty-blue to-mulearn-duke-purple/30 transform -translate-x-1/2" />
                  )}

                  {/* Dot */}
                  <div className="absolute left-0 top-0">
                    <div className="w-10 h-10 bg-linear-to-r from-mulearn-trusty-blue to-mulearn-duke-purple rounded-full flex items-center justify-center shadow-md">
                      <Icon className="w-5 h-5 text-mulearn-whitish" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="bg-mulearn-whitish p-6 rounded-xl shadow-md border border-mulearn-greyish/20">
                    <h3 className="text-lg font-bold text-mulearn-blackish mb-2 ">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interest Groups Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-mulearn-blackish mb-4 ">
            Explore Interest Groups
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Choose a domain that excites you and start your learning journey
            today
          </p>

          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search interest groups..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-full border-2 border-mulearn-greyish/40 focus:border-mulearn-trusty-blue focus:outline-none transition-colors duration-300 text-mulearn-blackish placeholder-gray-400"
              aria-label="Search interest groups"
            />
          </div>
        </motion.div>

        {/* Groups Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredGroups.map((group, index) => (
            <motion.a
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
              <div className="relative h-full bg-mulearn-whitish rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-mulearn-greyish/20">
                {/* Image Header */}
                <div className="relative h-48 overflow-hidden rounded-t-2xl">
                  <MuImage
                    src={group.image}
                    alt={group.name}
                    width={400}
                    height={192}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Card Content */}
                <div className="relative z-10 flex flex-col p-6">
                  <h3 className="text-xl font-bold text-mulearn-blackish mb-2 group-hover:bg-linear-to-r from-mulearn-trusty-blue to-mulearn-duke-purple bg-clip-text text-transparent transition-colors duration-300 ">
                    {group.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 flex-grow">
                    {group.tagline}
                  </p>

                  <div className="flex items-center gap-2 bg-linear-to-r from-mulearn-trusty-blue to-mulearn-duke-purple bg-clip-text text-transparent font-medium text-sm group-hover:gap-3 transition-all duration-300">
                    Explore <ArrowRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Hover Overlay */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6 z-20 rounded-2xl"
                  style={{ background: "var(--mulearn-trusty)" }}
                >
                  <p className="text-mulearn-whitish text-sm leading-relaxed text-center">
                    {group.description}
                  </p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {filteredGroups.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-gray-500 text-lg">
              No interest groups found matching your search.
            </p>
          </motion.div>
        )}
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-linear-to-r from-mulearn-trusty-blue to-mulearn-duke-purple">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-mulearn-whitish mb-6 ">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg text-mulearn-whitish/90 mb-8 max-w-2xl mx-auto">
            Join thousands of learners who are building skills, making
            connections, and preparing for the careers of tomorrow.
          </p>
          <Link
            href="https://app.mulearn.org/dashboard/profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant={"mulearn"}
              className="inline-flex items-center gap-2 px-8 py-4  bg-mulearn-whitish text-mulearn-duke-purple font-semibold text-lg shadow-xl hover:shadow-2xl hover:bg-mulearn-duke-purple hover:text-mulearn-whitish transition-all duration-300"
            >
              Join an Interest Group <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
