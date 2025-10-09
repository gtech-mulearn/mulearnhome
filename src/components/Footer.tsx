"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { footer, socials, contactInfo } from "@/data/data";

export default function Footer() {
  return (
    <motion.footer
      className="bg-[var(--mulearn-whitish)] text-[var(--mulearn-blackish)] px-5 py-10 border-t border-border text-center"
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: "easeOut" },
        },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-5 max-w-[1200px] mx-auto justify-items-center">
        {footer.map((section) => (
          <div key={section.title}>
            <h3 className="text-base mb-2.5 font-semibold">{section.title}</h3>
            <ul className="list-none p-0">
              {section.links.map((link) => (
                <li key={link.title} className="mb-2">
                  <Link
                    href={link.url}
                    className="text-[var(--mulearn-blackish)] no-underline transition-colors duration-300 hover:text-[var(--mulearn-trusty-blue)]"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h3 className="text-base mb-2.5 font-semibold">Follow Us</h3>
          <div className="flex flex-row items-center justify-center gap-2.5 mt-2">
            {socials.map((social) => {
              const Icon = social.icon;
              return (
                <Link
                  key={social.label}
                  href={social.url}
                  aria-label={social.label}
                  className="text-2xl text-[var(--mulearn-blackish)] transition-colors duration-300 hover:text-[var(--mulearn-trusty-blue)] max-[480px]:text-xl"
                >
                  <Icon />
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      <div className="mt-4">
        <div className="font-semibold text-[1.1rem]">
          {contactInfo.copyright}
        </div>
        <div className="my-2">{contactInfo.address}</div>
        <div className="max-[480px]:text-sm">
          <Link
            href={`mailto:${contactInfo.email}`}
            className="text-[#1976d2] no-underline"
          >
            {contactInfo.email}
          </Link>
          {" | "}
          <Link
            href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
            className="text-[#1976d2] no-underline"
          >
            {contactInfo.phone}
          </Link>
          {" | "}
          <Link
            href={`https://${contactInfo.website}`}
            className="text-[#1976d2] no-underline"
          >
            {contactInfo.website}
          </Link>
        </div>
      </div>
    </motion.footer>
  );
};