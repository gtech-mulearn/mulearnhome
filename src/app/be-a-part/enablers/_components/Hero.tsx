"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { GraduationCap } from "lucide-react";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, var(--mulearn-whitish) 0%, rgba(46,133,254,0.04) 55%, rgba(175,46,230,0.05) 100%)",
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden
      >
        <div className="absolute left-16 top-[60%] text-mulearn-blackish/80">
          <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0 15 9 24 12 15 15 12 24 9 15 0 12 9 9Z" />
          </svg>
        </div>
        <div className="absolute right-45 top-[60%] transform -translate-x-1/2 text-mulearn-blackish/80">
          <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0 15 9 24 12 15 15 12 24 9 15 0 12 9 9Z" />
          </svg>
        </div>
        <div
          className="absolute left-28 top-[63%] text-mulearn-blackish/70"
          style={{ transform: "rotate(10deg)" }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0 15 9 24 12 15 15 12 24 9 15 0 12 9 9Z" />
          </svg>
        </div>
        <div className="absolute right-24 top-28 text-mulearn-blackish/40">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0 15 9 24 12 15 15 12 24 9 15 0 12 9 9Z" />
          </svg>
        </div>
      </div>

      <div className="relative mx-auto max-w-6xl px-6 pb-10 pt-16 md:pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className=" mx-auto max-w-4xl text-4xl font-extrabold leading-tight text-mulearn-blackish md:text-6xl">
            <span className="block">Polish your skills through</span>

            <span className="relative block">
              <span className="relative inline-block align-middle text-mulearn-trusty-blue">
                µLearn
                <span
                  className="absolute -left-6 -top-0.5 hidden md:block"
                  style={{
                    transform: "rotate(-10deg)",
                    transformOrigin: "center",
                  }}
                >
                  <GraduationCap className="h-10 w-10" />
                </span>
              </span>
              <span className="px-2">to make</span>
              <span className="relative inline-block">
                students
                <svg
                  className="absolute -bottom-6 left-[42%] h-10 w-36 -translate-x-1/2 text-mulearn-trusty-blue"
                  viewBox="0 0 160 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ transform: "rotate(180deg)" }}
                >
                  <path d="M2 30c40-18 92-20 156-16" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
                  <path
                    d="M140 8l18 8-14 12"
                    stroke="currentColor"
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </span>

            <span className="relative mt-2 inline-block">
              <span className="absolute -left-8 -bottom-1 hidden h-12 w-6 md:block" aria-hidden>
                <svg viewBox="0 0 24 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
                  <circle cx="12" cy="8" r="6" fill="var(--mulearn-blackish)" />
                  <path d="M12 14c6 0 7 10 7 16v12H5V30c0-6 1-16 7-16Z" fill="var(--mulearn-blackish)" />
                  <path d="M5 30h14" stroke="var(--mulearn-blackish)" strokeWidth="5" />
                  <path d="M16 16l6-4" stroke="var(--mulearn-blackish)" strokeWidth="4" />
                </svg>
              </span>
              <span>industry ready</span>
              <svg
                className="absolute -bottom-2 left-0 w-full"
                height="10"
                viewBox="0 0 300 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
              >
                <path d="M2 5C100 3 200 3 298 5" stroke="url(#u)" strokeWidth="6" strokeLinecap="round" />
                <defs>
                  <linearGradient id="u" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{ stopColor: "var(--mulearn-trusty-blue)" }} />
                    <stop offset="100%" style={{ stopColor: "var(--mulearn-duke-purple)" }} />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h1>

          <Link
            href="https://app.mulearn.org/"
            target="_blank"
            className="inline-block"
          >
            <Button
              variant="mulearn"
              className=" mt-8 rounded-full px-8 py-2 text-base font-semibold cursor-pointer"
            >
              Join µLearn
            </Button>
          </Link>
        </motion.div>
      </div>

      <div
        className="relative mx-auto mb-8 mt-10 h-24 w-full overflow-visible"
        aria-hidden="true"
      >
        <div className="absolute left-1/2 top-1/2 w-[170%] -translate-x-1/2 -translate-y-1/2">
          <div
            className="relative mx-auto w-full"
            style={{ transform: "rotate(-4deg)" }}
          >
            <div
              className="absolute left-0 right-0 -top-2 h-2 rounded-full"
              style={{
                backgroundColor: "var(--mulearn-trusty-blue)",
                boxShadow: "0 2px 8px rgba(46,133,254,0.25)",
              }}
            />
            <div
              className="absolute left-0 right-0 -bottom-3 h-4 rounded-full"
              style={{
                backgroundColor: "var(--mulearn-trusty-blue)",
                boxShadow: "0 6px 14px rgba(46,133,254,0.25)",
              }}
            />

            <div
              className="relative z-10 mx-auto flex w-full items-center justify-center gap-6 rounded-xl px-6 py-4"
              style={{
                background: "var(--mulearn-whitish)",
                border: "1px solid var(--mulearn-greyish)",
                boxShadow: "0 8px 30px rgba(46,133,254,0.15)",
              }}
            >
              <span className="font-sans text-sm font-semibold text-mulearn-trusty-blue md:text-base whitespace-nowrap">
                Build Brighter Futures
              </span>
              <svg
                className="h-3 w-3 text-mulearn-blackish/80 shrink-0"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden
              >
                <path d="M12 0 L15 9 L24 12 L15 15 L12 24 L9 15 L0 12 L9 9 Z" />
              </svg>
              <span className="font-sans text-sm font-semibold text-mulearn-trusty-blue md:text-base whitespace-nowrap">
                Make Learning Accessible
              </span>
              <svg
                className="h-3 w-3 text-mulearn-blackish/80 shrink-0"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden
              >
                <path d="M12 0 L15 9 L24 12 L15 15 L12 24 L9 15 L0 12 L9 9 Z" />
              </svg>
              <span className="font-sans text-sm font-semibold text-mulearn-trusty-blue md:text-base whitespace-nowrap">
                Transform Education Today
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
