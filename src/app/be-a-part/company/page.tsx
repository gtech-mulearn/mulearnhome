"use client";

import { motion } from "framer-motion";
import Hero from "@/app/be-a-part/company/_components/Hero";
import FeatureCard from "@/app/be-a-part/company/_components/FeatureCard";
import CollaborationTrack from "@/app/be-a-part/company/_components/CollaborationTrack";
import QuickWinsCard from "@/app/be-a-part/company/_components/QuickWinsCard";
import ContactSection from "@/app/be-a-part/company/_components/ContactSection";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function BeACompany() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-500 to-blue-700">
      <Hero />

      <main className="flex-1 bg-gradient-to-b from-gray-50 to-gray-200">
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-16 px-4 sm:px-8 max-w-7xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent mb-4">
              Why Partner with μLearn?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <FeatureCard title="🌟 59,000+ Strong Ecosystem" variants={itemVariants}>
              <p className="mb-4">
                We&apos;re not just a student community—we&apos;re a{" "}
                <strong className="text-blue-600">59,000+ strong ecosystem</strong> across
                1,900+ institutions, building the future workforce, innovation pipelines, and
                social impact solutions.
              </p>
            </FeatureCard>

            <FeatureCard title="🎯 What You Gain" variants={itemVariants}>
              <ul className="space-y-3">
                <li>
                  ✅ <strong className="text-blue-600">Impact at Scale</strong> – execute CSR
                  programs with transparent outcomes
                </li>
                <li>
                  ✅ <strong className="text-blue-600">Hire Smarter</strong> – access
                  pre-validated, project-ready talent
                </li>
                <li>
                  ✅ <strong className="text-blue-600">Innovate Faster</strong> – test products
                  and crowdsource solutions
                </li>
                <li>
                  ✅ <strong className="text-blue-600">Shape the Future</strong> – co-create
                  GovTech and Education 4.0
                </li>
              </ul>
            </FeatureCard>
          </div>
        </motion.section>
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-gradient-to-br from-blue-500 to-blue-700 py-16 px-4 sm:px-8 text-white"
        >
          <motion.div variants={itemVariants} className="text-center mb-12 max-w-7xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">Collaboration Tracks</h2>
            <div className="w-24 h-1 bg-white mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <CollaborationTrack
              badge="1️⃣ CSR & Skilling"
              badgeStyle="bg-blue-500 text-white"
              title="Transformational Skilling Programs"
              variants={itemVariants}
            >
              <ul className="space-y-2 leading-relaxed">
                <li>
                  Fund <strong className="text-blue-600">Learning Circles</strong> in tech,
                  creative arts, or leadership
                </li>
                <li>
                  Drive <strong className="text-blue-600">Rural Skilling</strong> → AI, ML &
                  digital literacy to villages
                </li>
                <li>
                  Champion <strong className="text-blue-600">Women in Tech</strong> with
                  mentorship + bootcamps
                </li>
                <li>
                  Build{" "}
                  <strong className="text-blue-600">
                    Makerspaces, IoT labs, digital classrooms
                  </strong>
                </li>
              </ul>
            </CollaborationTrack>

            <CollaborationTrack
              badge="2️⃣ Talent & Workforce"
              badgeStyle="bg-gradient-to-r from-blue-500 to-blue-700 text-white"
              title="Pre-Validated Talent Pipeline"
              variants={itemVariants}
            >
              <ul className="space-y-2 leading-relaxed">
                <li>
                  <strong className="text-blue-600">Launchpad</strong> → year-round hiring from
                  validated pool
                </li>
                <li>
                  <strong className="text-blue-600">Top 100 Series</strong> → access
                  best-of-the-best
                </li>
                <li>
                  <strong className="text-blue-600">In50Hours</strong> → rapid prototyping
                  sprints
                </li>
                <li>
                  <strong className="text-blue-600">Learning Circles-as-a-Service</strong> →
                  corporate upskilling
                </li>
              </ul>
            </CollaborationTrack>

            <CollaborationTrack
              badge="3️⃣ Innovation CaaS"
              badgeStyle="bg-blue-50 text-blue-600 border border-blue-600"
              title="Living Lab of Innovation"
              variants={itemVariants}
            >
              <ul className="space-y-2 leading-relaxed">
                <li>
                  <strong className="text-blue-600">Product Testing & UX Labs</strong> →
                  insights from thousands
                </li>
                <li>
                  <strong className="text-blue-600">Community-driven Research</strong> →
                  surveys, pilots, reports
                </li>
                <li>
                  <strong className="text-blue-600">Student Media Studio</strong> → authentic
                  youth storytelling
                </li>
                <li>
                  <strong className="text-blue-600">Global Challenge Hosting</strong> →
                  crowdsource solutions
                </li>
              </ul>
            </CollaborationTrack>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mt-8">
            <div className="lg:col-start-2">
              <CollaborationTrack
                badge="4️⃣ Research & GovTech"
                badgeStyle="bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                title="Decentralized Research Network"
                variants={itemVariants}
              >
                <ul className="space-y-2 leading-relaxed">
                  <li>
                    <strong className="text-blue-600">Research-as-a-Service</strong> → policy
                    papers, market studies
                  </li>
                  <li>
                    <strong className="text-blue-600">Proof-of-Work IP Licensing</strong> →
                    student-built solutions
                  </li>
                  <li>
                    <strong className="text-blue-600">Academic Collaboration</strong> across
                    1,900+ institutions
                  </li>
                  <li>
                    <strong className="text-blue-600">GovTech Sandbox</strong> → civic
                    innovation pilots
                  </li>
                </ul>
              </CollaborationTrack>
            </div>
          </div>
        </motion.section>

        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-16 px-4 sm:px-8 max-w-7xl mx-auto text-center"
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent mb-4">
              🌟 Quick Wins for Companies
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto mb-12 rounded-full" />
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-white rounded-2xl p-8 sm:p-12 shadow-xl mb-12 border border-blue-100"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <QuickWinsCard
                icon="💼"
                title="Execute CSR compliance with 0% overhead"
                description="Transparent, auditable outcomes across thousands of learners"
              />
              <QuickWinsCard
                icon="🎯"
                title="Run talent branding campaigns in 500+ campuses"
                description="Direct access to Kerala's brightest minds"
              />
              <QuickWinsCard
                icon="🧪"
                title="Test products with 10,000+ students pre-launch"
                description="Real user feedback before market entry"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <div className="md:col-start-2">
                <QuickWinsCard
                  icon="🚀"
                  title="Build GovTech pilots with Kerala ecosystem"
                  description="Government-backed innovation opportunities"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex gap-4 justify-center flex-wrap"
          >
            <a
              href="https://airtable.com/app0v220Yc0G3CPMr/shrpiEQrpuIFTMNh1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 15px 40px rgba(69,111,246,0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-br from-blue-500 to-blue-700 text-white px-8 sm:px-10 py-4 text-lg font-bold rounded-full shadow-xl hover:shadow-2xl transition-shadow"
              >
                📋 Partnership Form
              </motion.button>
            </a>
          </motion.div>
        </motion.section>

        <ContactSection />
      </main>

    </div>
  );
}