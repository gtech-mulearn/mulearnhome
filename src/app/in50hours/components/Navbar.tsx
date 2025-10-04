'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const navLinks = [
    { name: "About", href: "#" },
    { name: "Why µLearn?", href: "https://www.youtube.com/watch?v=ehdSEL_s050" },
    { name: "Be A Part of Us", href: "#" },
    { name: "Mentorship", href: "https://app.mulearn.org/dashboard/search?activetab=mentors" },
    { name: "Learning", href: "#" },
    { name: "Donate", href: "https://mulearn.org/donation" }
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white shadow-sm border-b border-gray-200"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="https://mulearn.org/" className="flex items-center space-x-2">
            <Image
              src="/assets/in50hours/mulearn-logo.png"
              alt="µLearn Logo"
              width={150}
              height={50}
              className="h-10 w-auto"
            />
            <div className="text-xs text-gray-600">
              a GTech Initiative
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-[#5570F1] transition-colors duration-300 font-medium"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Dashboard Button */}
          <motion.a
            href="https://app.mulearn.org/dashboard/home"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#5570F1] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#4a5fd4] transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#5570F1]/25"
          >
            Dashboard
          </motion.a>

          {/* Mobile Menu Button */}
          <button className="lg:hidden text-gray-700 hover:text-[#5570F1]">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
