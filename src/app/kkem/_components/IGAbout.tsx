"use client";

import Image from "next/image";
import { motion, Variants, easeInOut } from "framer-motion";
import { cdnUrl } from "@/services/cdn";

const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: easeInOut } },
};

const slideInRight: Variants = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: easeInOut } },
};

export default function IGAbout() {
  return (
    <section
      id="about"
      className="px-12 py-12 flex flex-col lg:flex-row items-center justify-between lg:gap-8"
    >
      <motion.div
        className="flex-1"
        variants={slideInLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h1 className="text-mulearn-blackish font-semibold leading-[111.5%] mb-12 text-4xl lg:text-[4.25rem]">
          <span className="bg-linear-to-r from-mulearn-trusty-blue to-mulearn-duke-purple text-transparent bg-clip-text">
            μLearn{" "}
          </span>
          Interest Groups
        </h1>
        <motion.p
          className="text-mulearn-blackish text-lg lg:text-xl leading-[127.5%] max-w-200 mt-8"
          variants={slideInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Discover your passion, collaborate with like-minded individuals, and
          embark on a transformative learning journey.
        </motion.p>
        <motion.p
          className="text-mulearn-blackish text-lg lg:text-xl leading-[127.5%] max-w-200 mt-4"
          variants={slideInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Join our vibrant community of students and explore a wide range of
          interest areas, from coding to design, entrepreneurship to data
          science
        </motion.p>
      </motion.div>

      <motion.div
        className="flex-1 flex flex-col items-center justify-center mt-12 lg:mt-0"
        variants={slideInRight}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div
          variants={slideInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Image
            src="assets/kkem/kkem-hero.svg"
            alt="Interest Group"
            width={400}
            height={400}
            className="mb-6"
          />
        </motion.div>
        <motion.p
          className="text-lg lg:text-[1.35rem] font-medium leading-[127.5%] max-w-[60vmax] mb-4"
          variants={slideInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Curated by
        </motion.p>
        <motion.div
          className="flex items-center justify-between gap-8"
          variants={slideInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Image
            src={cdnUrl("src/modules/Public/KKEM/assets/im7.webp")}
            alt="Curator 1"
            width={56}
            height={56}
            className="rounded-full object-cover shadow-md p-2"
          />
          <Image
            src={cdnUrl("src/modules/Public/KKEM/assets/im9.webp")}
            alt="Curator 2"
            width={56}
            height={56}
            className="rounded-full object-cover shadow-md p-2"
          />
          <Image
            src={cdnUrl("src/modules/Public/KKEM/assets/im10.webp")}
            alt="Curator 3"
            width={56}
            height={56}
            className="rounded-full object-cover shadow-md p-2"
          />
          <p>and more...</p>
        </motion.div>
      </motion.div>
    </section>
  );
}
