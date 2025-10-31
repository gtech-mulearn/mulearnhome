"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import MuImage from "@/components/MuImage";
import { footer, socials, contactInfo } from "@/data/data";
import { Mail, Phone, Globe } from "lucide-react";

export default function Footer() {
  return (
    <motion.footer
      className="bg-mulearn-whitish text-mulearn-blackish px-6 py-12 border-t border-mulearn-gray-200"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: "easeOut" },
        },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="max-w-full mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-12">
          <div className="lg:col-span-2">
            <div className="flex flex-col md:items-start items-center justify-center space-y-4">
              <div className="flex items-center space-x-4">
                <div className="flex items-center justify-center">
                  <div className="w-[200px] h-[200px] md:w-[200px] md:h-[200px] rounded-2xl overflow-hidden flex items-center justify-center">
                    <MuImage
                      src="/assets/loader/MuLoader.gif"
                      alt="µLearn Logo"
                      width={200}
                      height={200}
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
              <p className="text-mulearn-gray-600 text-sm text-justify leading-relaxed max-w-md">
                Empowering learners through community-driven education and
                innovative learning pathways. Join us in shaping the future of
                education.
              </p>
              <div className="flex flex-col space-y-3">
                <h3 className="text-sm font-semibold text-mulearn-blackish uppercase tracking-wide">
                  Connect With Us
                </h3>
                <div className="flex space-x-3">
                  {socials.map((social) => {
                    const Icon = social.icon;
                    return (
                      <Link
                        key={social.label}
                        href={social.url}
                        aria-label={social.label}
                        className="w-10 h-10 rounded-lg bg-white border border-mulearn-gray-200 flex items-center justify-center text-mulearn-gray-600 transition-all duration-300 hover:bg-linear-to-r from-mulearn-trusty-blue to-mulearn-duke-purple hover:text-white hover:shadow-lg hover:scale-105"
                      >
                        <Icon />
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {footer.map((section) => (
            <div
              key={section.title}
              className={`space-y-4 text-center lg:text-left ${
                ["Quick Links", "Legal", "Be Part of Us"].includes(
                  section.title
                )
                  ? "mt-8 lg:mt-12"
                  : ""
              }`}
            >
              <h3 className="text-sm font-semibold text-mulearn-gray-900 uppercase">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.title}>
                    <Link
                      href={link.url}
                      className="text-mulearn-gray-600 hover:text-mulearn-trusty-blue transition-all duration-300 hover:translate-x-1 inline-block text-sm"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-mulearn-gray-200 my-8"></div>
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
          <div className="text-center lg:text-left">
            <div className="text-sm text-mulearn-blakish-600 font-medium">
              {contactInfo.copyright}
            </div>
            <div className="text-xs text-mulearn-gray-500 mt-1">
              {contactInfo.address}
            </div>
          </div>

          <div className="flex flex-wrap justify-center lg:justify-end items-center gap-4 text-sm">
            <Link
              href={`mailto:${contactInfo.email}`}
              className="flex items-center space-x-2 text-mulearn-gray-600 hover:text-mulearn-trusty-blue transition-colors duration-300 group"
            >
              <Mail className="w-4 h-4 text-mulearn-trusty-blue group-hover:scale-110 transition-transform duration-300" />
              <span>{contactInfo.email}</span>
            </Link>

            <Link
              href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
              className="flex items-center space-x-2 text-mulearn-gray-600 hover:text-mulearn-trusty-blue transition-colors duration-300 group"
            >
              <Phone className="w-4 h-4 text-mulearn-trusty-blue group-hover:scale-110 transition-transform duration-300" />
              <span>{contactInfo.phone}</span>
            </Link>

            <Link
              href={`https://${contactInfo.website}`}
              className="flex items-center space-x-2 text-mulearn-gray-600 hover:text-mulearn-trusty-blue transition-colors duration-300 group"
            >
              <Globe className="w-4 h-4 text-mulearn-trusty-blue group-hover:scale-110 transition-transform duration-300" />
              <span>{contactInfo.website}</span>
            </Link>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
