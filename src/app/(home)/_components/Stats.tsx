"use client";

import { motion, Variants, easeOut } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import CountUp from "react-countup";
import { Counts } from "@/lib/types";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
};

export default function Stats() {
  const [counts, setCounts] = useState<Counts | null>(null);
  const socketRef = useRef<WebSocket | null>(null);

  useEffect(() => {
    if (!socketRef.current) {
      const socket = new WebSocket(
        "wss://mulearn.org/ws/v1/public/landing-stats/"
      );
      socketRef.current = socket;
      const handleMessage = (event: MessageEvent) => {
        setCounts(JSON.parse(event.data) as Counts);
      };
      const handleError = (event: Event) => {
        void event;
      };
      socket.addEventListener("message", handleMessage);
      socket.addEventListener("error", handleError);
      return () => {
        socket.removeEventListener("message", handleMessage);
        socket.removeEventListener("error", handleError);
        socket.close();
        socketRef.current = null;
      };
    }
  }, []);

  if (!counts) {
    return (
      <div className="px-4 sm:px-8 md:px-16 lg:px-32 xl:px-48 w-full py-24">
        <div className="text-center">Loading statistics...</div>
      </div>
    );
  }

  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-32 xl:px-48 w-full">
      <motion.section
        className="flex flex-col justify-center py-24 items-center"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div
          className="flex flex-col sm:flex-row justify-between items-start gap-8 w-full"
          variants={fadeInUp}
        >
          <div className="flex-1">
            <h1 className="text-4xl sm:text-5xl lg:text-[3.2rem] text-center font-extrabold leading-normal min-w-0 sm:min-w-[400px]">
              The Impact of{" "}
              <span className="text-mulearn-trusty-blue">μLearn</span>
            </h1>
          </div>
          <div className="flex-1">
            <h6 className="font-normal mb-16 max-w-[800px] text-center text-lg sm:text-xl text-mulearn-gray-600 mt-2.5">
              Over the last year, we as a community have made an impact on a
              significant number of students, mentors, and facilitators,
              enabling them to gain more knowledge about the ecosystem of
              learning and upskill themselves.
            </h6>
          </div>
        </motion.div>

        <motion.div variants={fadeInUp} className="w-full">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-6 px-4 sm:px-8">
            <StatCard value={counts.members} label="Members" />
            <StatCard
              value={counts.learning_circle_count}
              label="Learning Circles"
            />
            {counts.org_type_counts.map((org) => (
              <StatCard
                key={org.org_type}
                value={org.org_count}
                label={
                  org.org_type.endsWith("y")
                    ? org.org_type.slice(0, -1) + "ies"
                    : org.org_type + "s"
                }
              />
            ))}
            <StatCard value={200} label="Events" />
            <StatCard value={counts.ig_count} label="Interest Groups" />
            <StatCard
              value={counts.karma_pow_count.karma_count}
              label="Total Karma Mined"
            />
            <StatCard
              value={counts.karma_pow_count.pow_count}
              label="Number of Proof of Works"
            />
            <StatCard value={2000} label="Number of Internships" />
            <StatCard value={1000} label="Jobs" />
            <StatCard value={100} label="Products" />
            <StatCard value="1Cr" label="Worth of Gig Works" isString />
            {counts.enablers_mentors_count.map((role) => (
              <StatCard
                key={role.role__title}
                value={role.role_count}
                label={role.role__title + "s"}
              />
            ))}
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
}

function StatCard({
  value,
  label,
  isString = false,
}: {
  value: number | string;
  label: string;
  isString?: boolean;
}) {
  return (
    <div className="flex flex-col justify-center items-center p-4">
      <p className="font-semibold text-mulearn-trusty-blue text-2xl sm:text-3xl lg:text-[2rem]">
        {isString ? (
          value
        ) : (
          <CountUp end={value as number} duration={5} separator="," />
        )}
      </p>
      <p className="text-sm sm:text-base font-medium mt-1 text-mulearn-blackish">
        {label}
      </p>
    </div>
  );
}
