"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
import {
  rolesTitle,
  rolesContent,
  type Role,
  type RoleItem,
} from "@/data/data";
import Image from "next/image";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function Roles() {
  const [activeRole, setActiveRole] = useState<string>("partner");

  return (
    <motion.section
      className="py-[30px] px-5 max-w-[1200px] mx-auto"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.div className="text-center mb-10" variants={fadeInUp}>
        <h1 className="text-[2.5rem] max-[540px]:text-[8vw] m-0 font-extrabold text-mulearn-blackish">
          Roles in μLearn Network
        </h1>
        <h6 className="text-[1.2rem] text-mulearn-gray-600 mt-2.5">
          A brief overview of the diverse roles that power our network.
        </h6>
      </motion.div>

      <motion.nav className="flex justify-center mb-10" variants={fadeInUp}>
        <ul className="list-none flex gap-5 p-0 m-0">
          {rolesTitle.map((role: Role) => (
            <li
              key={role.id}
              className={`text-base cursor-pointer px-[15px] py-2.5 transition-all duration-300 ease-in-out border-b-2 ${
                activeRole === role.id
                  ? "font-bold border-mulearn-blackish"
                  : "border-transparent hover:text-mulearn-trusty-blue"
              }`}
              onClick={() => setActiveRole(role.id)}
            >
              {role.label}
            </li>
          ))}
        </ul>
      </motion.nav>

      <motion.div
        className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-5 px-5"
        variants={fadeInUp}
      >
        {rolesContent[activeRole].map((item: RoleItem) => (
          <motion.div
            key={item.id}
            className="bg-mulearn-greyish/20 rounded-lg overflow-hidden text-center p-5 transition-transform duration-300 ease-in-out hover:-translate-y-[5px]"
            variants={fadeInUp}
          >
            <Image
              src={item.image}
              alt={item.name}
              width={300}
              height={200}
              className="w-full min-h-[220px] mb-2.5 object-cover"
              loading="lazy"
            />
            <h6 className="text-[1.1rem] font-bold text-mulearn-blackish m-0 mb-2">
              {item.name}
            </h6>
            <p className="text-[0.85rem] font-normal text-center text-[var(--mulearn-greyish]">
              {item.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
