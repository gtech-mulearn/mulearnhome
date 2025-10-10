"use client";

import { motion, Variants, easeOut } from "framer-motion";
import { cdnUrl } from "@/services/cdn";
import Image from "next/image";
import Link from "next/link";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
};

const community = cdnUrl("/public/assets/home/join.webp");

export default function Community() {
  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-32 xl:px-48 w-full">
      <motion.section
        className="grid grid-cols-1 lg:grid-cols-2 gap-5 py-12"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div
          className="flex flex-col items-start sm:items-center justify-center max-w-[40rem]"
          variants={fadeInUp}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-center max-w-[40rem] mb-5 leading-normal">
            Learn and Grow{" "}
            <span className="text-mulearn-trusty-blue">Together</span> as a{" "}
            <span className="text-mulearn-trusty-blue">Community</span>
          </h1>
          <h6 className="font-normal mb-8 max-w-[800px] text-left text-lg sm:text-xl text-mulearn-gray-600 mt-2.5">
            Are you ready to learn, grow, and upskill yourself to the next
            level? Come, be a part of the community, and let&apos;s start
            learning in a new, better way. Call your friends as well because
            things are going to change once you experience it, and it is more
            effective when done in a group.
          </h6>

          <Link
            href="https://discord.com/invite/gtech-mulearn-771670169691881483"
            target="_blank"
            rel="noopener noreferrer"
            className="self-center sm:self-auto bg-mulearn-trusty-blue px-6 py-4 text-mulearn-whitish rounded-[10px] hover:opacity-90 hover:bg-mulearn-duke-purple transition-all duration-300 text-center"
          >
            Join The Community
          </Link>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="flex justify-center items-center"
        >
          <Image
            src={community}
            alt="Join community"
            height={640}
            width={640}
            className="h-[40rem] w-auto max-w-full object-contain"
            loading="lazy"
          />
        </motion.div>
      </motion.section>
    </div>
  );
}
