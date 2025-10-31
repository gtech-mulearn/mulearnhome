"use client";

import { motion, Variants, easeOut } from "framer-motion";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ArrowRight } from "lucide-react";
import leaderboardData from "@/data/leaderboard.json";
import { Score } from "@/lib/types";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
};

export default function LeaderBoard() {
  const { date, monthly, overall } = leaderboardData as typeof leaderboardData;

  const mapScores = (scores: Score[]) =>
    scores.map((c) => ({ ...c, displayname: c.displayname || c.username }));

  const renderTable = (title: string, scores: Score[]) => (
    <motion.div
      className="m-3 p-5 rounded-2xl shadow-md w-full max-w-5xl overflow-x-auto bg-mulearn-bg"
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
    >
      <h1 className="text-center text-2xl md:text-2xl font-bold mb-5 text-mulearn-primary">
        {title}
        {title === "Monthly Leaderboard" && ` — ${date}`}
      </h1>

      <Table className="min-w-[800px] w-full">
        <TableHeader>
          <TableRow>
            <TableHead className="text-center text-sm md:text-base text-mulearn-blackish">
              Rank
            </TableHead>
            <TableHead className="text-left text-sm md:text-base text-mulearn-blackish">
              Name
            </TableHead>
            <TableHead className="text-center text-sm md:text-base text-mulearn-blackish">
              Commits
            </TableHead>
            <TableHead className="text-center text-sm md:text-base text-mulearn-blackish">
              PRs
              <div className="text-xs font-normal text-mulearn-gray-600">
                (Open / Merged)
              </div>
            </TableHead>
            <TableHead className="text-center text-sm md:text-base text-mulearn-blackish">
              Issues
              <div className="text-xs font-normal text-mulearn-gray-600">
                (Open / Closed)
              </div>
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {scores.map((score, index) => (
            <TableRow
              key={score.username}
              className={
                index < 3
                  ? "bg-linear-to-r from-mulearn-trusty-blue to-mulearn-duke-purple text-white font-bold"
                  : ""
              }
            >
              <TableCell className="text-center text-sm md:text-base">
                {index + 1}
              </TableCell>
              <TableCell className="text-left text-sm md:text-base">
                <Link
                  href={`https://github.com/${score.username}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-mulearn-primary"
                >
                  {score.displayname}
                </Link>
              </TableCell>
              <TableCell className="text-center text-sm md:text-base">
                {score.commits}
              </TableCell>
              <TableCell className="text-center text-sm md:text-base">
                {score.prs_opened}/{score.prs_merged}
              </TableCell>
              <TableCell className="text-center text-sm md:text-base">
                {score.issues_opened}/{score.issues_closed}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </motion.div>
  );

  return (
    <div className="flex flex-col w-full px-3 md:px-5 py-10">
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center mb-10 text-mulearn-primary"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
      >
        <span className="bg-linear-to-r from-mulearn-trusty-blue to-mulearn-duke-purple bg-clip-text text-transparent">
          μLearn{" "}
        </span>
        Contribution Leaderboard
      </motion.h2>

      <div className="flex flex-col lg:flex-row justify-center items-start w-full gap-5 lg:gap-10">
        <div className="w-full lg:w-1/2 flex justify-center">
          {renderTable("Monthly Leaderboard", mapScores(monthly))}
        </div>

        <div className="w-full lg:w-1/2 flex justify-center">
          {renderTable("Overall Leaderboard", mapScores(overall))}
        </div>
      </div>
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        className="flex justify-center mt-6"
      >
        <Link href="https://contributors.mulearn.org">
          <Button
            variant={"mulearn"}
            className="inline-flex items-center gap-2 px-8 py-4 font-semibold text-lg"
          >
            View Full Leaderboard <ArrowRight className="w-5 h-5" />
          </Button>
        </Link>
      </motion.div>
    </div>
  );
}
