"use client";

import { motion } from "framer-motion";
import { BookOpen, Users } from "lucide-react";
import { BiSolidRightArrow } from "react-icons/bi";

export default function WhyChapter() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="mb-16 text-center text-4xl font-bold text-mulearn-blackish lg:text-5xl">
          Why Start a{" "}
          <span className="bg-linear-to-r from-mulearn-trusty-blue to-mulearn-duke-purple bg-clip-text text-transparent">
            Chapter
          </span>
          ?
        </h2>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="group rounded-3xl border p-8 shadow-sm transition-all hover:scale-[1.02] hover:shadow-lg lg:p-10">
            <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-r from-mulearn-trusty-blue to-mulearn-duke-purple">
              <Users className="h-7 w-7 text-mulearn-whitish" />
            </div>

            <h3 className="mb-4 text-2xl font-bold text-mulearn-blackish">
              For Students
            </h3>

            <ul className="space-y-3 text-mulearn-gray-600">
              <li className="flex gap-3">
                <div className="rounded-lg flex items-center justify-center">
                  <BiSolidRightArrow className="w-5 h-5 bg-linear-to-r from-mulearn-trusty-blue to-mulearn-duke-purple bg-clip-text text-transparent" />
                </div>
                <span>
                  Earn{" "}
                  <strong className="bg-linear-to-r from-mulearn-trusty-blue to-mulearn-duke-purple bg-clip-text text-transparent">
                    Karma Points
                  </strong>{" "}
                  as proof-of-work
                </span>
              </li>
              <li className="flex gap-3">
                <div className="rounded-lg flex items-center justify-center">
                  <BiSolidRightArrow className="w-5 h-5 bg-linear-to-r from-mulearn-trusty-blue to-mulearn-duke-purple bg-clip-text text-transparent" />
                </div>
                <span>Build peer-to-peer learning circles across domains</span>
              </li>
              <li className="flex gap-3">
                <div className="rounded-lg flex items-center justify-center">
                  <BiSolidRightArrow className="w-5 h-5 bg-linear-to-r from-mulearn-trusty-blue to-mulearn-duke-purple bg-clip-text text-transparent" />
                </div>
                <span>
                  Access internships via{" "}
                  <strong className="bg-linear-to-r from-mulearn-trusty-blue to-mulearn-duke-purple bg-clip-text text-transparent">
                    Launchpad
                  </strong>{" "}
                  &{" "}
                  <strong className="bg-linear-to-r from-mulearn-trusty-blue to-mulearn-duke-purple bg-clip-text text-transparent">
                    Top 100 Series
                  </strong>
                </span>
              </li>
              <li className="flex gap-3">
                <div className="rounded-lg flex items-center justify-center">
                  <BiSolidRightArrow className="w-5 h-5 bg-linear-to-r from-mulearn-trusty-blue to-mulearn-duke-purple bg-clip-text text-transparent" />
                </div>
                <span>Join 55,000+ community with 400+ partner companies</span>
              </li>
            </ul>
          </div>

          <div className="group rounded-3xl border p-8 shadow-sm transition-all hover:scale-[1.02] hover:shadow-lg lg:p-10">
            <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-r from-mulearn-trusty-blue to-mulearn-duke-purple">
              <BookOpen className="h-7 w-7 text-mulearn-whitish" />
            </div>

            <h3 className="mb-4 text-2xl font-bold text-mulearn-blackish">
              For Colleges
            </h3>

            <ul className="space-y-3 text-mulearn-gray-600">
              <li className="flex gap-3">
                <div className="rounded-lg flex items-center justify-center">
                  <BiSolidRightArrow className="w-5 h-5 bg-linear-to-r from-mulearn-trusty-blue to-mulearn-duke-purple bg-clip-text text-transparent" />
                </div>
                <span>
                  Align with{" "}
                  <strong className="bg-linear-to-r from-mulearn-trusty-blue to-mulearn-duke-purple bg-clip-text text-transparent">
                    Education 4.0
                  </strong>{" "}
                  standards
                </span>
              </li>
              <li className="flex gap-3">
                <div className="rounded-lg flex items-center justify-center">
                  <BiSolidRightArrow className="w-5 h-5 bg-linear-to-r from-mulearn-trusty-blue to-mulearn-duke-purple bg-clip-text text-transparent" />
                </div>
                <span>Proof of student skilling for NAAC/CSR metrics</span>
              </li>
              <li className="flex gap-3">
                <div className="rounded-lg flex items-center justify-center">
                  <BiSolidRightArrow className="w-5 h-5 bg-linear-to-r from-mulearn-trusty-blue to-mulearn-duke-purple bg-clip-text text-transparent" />
                </div>
                <span>Connect to Kerala&apos;s largest skilling ecosystem</span>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
