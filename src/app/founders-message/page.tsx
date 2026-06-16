"use client";

import type { Variants } from "framer-motion";
import Link from "next/link";
import { MotionDiv } from "@/components/MuFramer";
import MuImage from "@/components/MuImage";
import { Button } from "@/components/ui/button";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, when: "beforeChildren" },
  },
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};
export default function FoundersMessage() {
  return (
    <MotionDiv
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen bg-neutral-50/70 py-16 md:py-24 px-4 sm:px-6 lg:px-8 flex justify-center items-start"
    >
      <div className="w-full max-w-5xl bg-white border border-neutral-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.02)] rounded-2xl p-6 sm:p-10 md:p-16 text-[#1a1a1a] flex flex-col font-sans">
        {/* Hello Greeting */}
        <MotionDiv variants={fadeInUp}>
          <p className="text-neutral-800 text-lg md:text-xl font-medium mb-6">Hello 👋</p>
        </MotionDiv>

        {/* Header / Title */}
        <MotionDiv variants={fadeInUp} className="mb-12">
          <p className="text-neutral-500 font-bold uppercase tracking-widest text-xs md:text-sm mb-2">
            Founders Message
          </p>
          <h1 className="font-sans text-3xl md:text-5xl lg:text-6xl font-black text-mulearn leading-tight tracking-tight">
            A Message to the World
          </h1>
        </MotionDiv>

        {/* Main Content */}
        <MotionDiv
          variants={fadeInUp}
          className="text-neutral-600 leading-relaxed text-base md:text-lg flex flex-col"
        >
          {/* Main bold opening statement */}
          <p className="text-lg md:text-xl font-bold text-neutral-900 leading-relaxed mb-8">
            μLearn was not born out of policy, funding, or disruption theatre. It was born out of a
            simple discomfort: the quiet but persistent feeling that we are wasting human potential
            at scale.
          </p>

          <p className="mb-8">
            Across classrooms, offices, institutions, and communities, we prepare people for a world
            that no longer exists. We reward compliance over curiosity, credentials over competence,
            obedience over ownership. We ask young people to memorize answers while the world is
            screaming for problem solvers. We ask organizations to hire talent, then slowly drain
            the life out of it. We ask governments to future-proof nations using systems designed
            for the past.
          </p>

          {/* Standalone brand message */}
          <p className="text-lg md:text-xl font-bold text-mulearn leading-relaxed mb-8">
            μLearn exists to interrupt this pattern.
          </p>

          <p className="mb-8">
            At its core, μLearn is not a platform. It is a belief system made operational. A belief
            that learning is not something delivered; it is something activated. A belief that talent
            is universal, but opportunity, context, and confidence are not. A belief that motivation
            cannot be commanded; it must be designed for. And a belief that the future will not be
            built by institutions alone, but by empowered individuals connected through purpose.
          </p>

          {/* Stakeholder Messages List */}
          <ul className="space-y-6 mb-12 text-base md:text-lg text-neutral-600 leading-relaxed">
            <li className="relative pl-6">
              <span className="absolute left-0 text-mulearn font-black">•</span>
              <span className="font-bold text-mulearn">To students, </span>
              μLearn exists to return something that was taken away early: agency. You are not here
              to fit into predefined roles. You are here to explore, to build, to fail safely, to
              find your edge, and to contribute before you are &quot;ready&quot;. Your curiosity is
              not a distraction. It is your signal.
            </li>
            <li className="relative pl-6">
              <span className="absolute left-0 text-mulearn font-black">•</span>
              <span className="font-bold text-mulearn">To industry, </span>
              μLearn exists as a mirror and an invitation. The skills you seek cannot be
              manufactured through hiring alone. They must be cultivated through ecosystems that
              reward learning, collaboration, and real-world contribution. μLearn connects you not
              to resumes, but to capability in motion.
            </li>
            <li className="relative pl-6">
              <span className="absolute left-0 text-mulearn font-black">•</span>
              <span className="font-bold text-mulearn">To governments, </span>
              μLearn exists as a public good. A living infrastructure for skills, motivation, and
              civic capability. Not another program layered onto an overloaded system, but a
              protocol that allows learning to happen anywhere, anytime, driven by communities and
              aligned with national priorities.
            </li>
            <li className="relative pl-6">
              <span className="absolute left-0 text-mulearn font-black">•</span>
              <span className="font-bold text-mulearn">To NGOs and civil society, </span>
              μLearn exists as leverage. A way to scale impact by empowering people not just to
              receive help, but to develop agency, skills, and dignity through contribution.
            </li>
          </ul>

          <p className="mb-6">
            I serve μLearn not as its owner, but as its chief volunteer. Because movements like this
            do not belong to founders. They belong to the people who show up, learn out loud, build
            in public, and pull others forward with them.
          </p>

          <p className="mb-6">
            The future will not be shaped by those who wait for permission. It will be shaped by
            those who learn continuously, act responsibly, and collaborate generously.
          </p>

          <p className="text-lg md:text-xl font-bold text-mulearn leading-relaxed mb-12">
            μLearn exists to make that future inevitable.
          </p>

          {/* Muted Quote Block */}
          <p className="text-neutral-500 italic text-base md:text-lg mb-6 leading-relaxed">
            &quot;This is not an invitation to join a platform. It is a call to participate in a
            learning civilization.&quot;
          </p>

          {/* Welcome to μLearn */}
          <p className="text-neutral-800 text-lg md:text-xl mb-12">
            Welcome to <span className="font-bold text-neutral-900">μLearn</span>
          </p>
        </MotionDiv>

        {/* Signature / Founder Profile */}
        <MotionDiv
          variants={fadeInUp}
          className="flex items-center gap-4 pt-8 border-t border-neutral-100"
        >
          <div className="relative w-16 h-16 rounded-full overflow-hidden shrink-0 border border-neutral-100 shadow-sm">
            <MuImage
              src="/assets/founders-message/deepu-s-nath.jpg"
              alt="Deepu S Nath"
              width={100}
              height={100}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="font-sans text-neutral-900 font-bold text-lg leading-tight">
              Deepu S Nath
            </h3>
            <p className="text-mulearn font-semibold text-sm leading-tight mt-0.5">
              Chief Volunteer
            </p>
            <Link
              href="https://deepusnath.com"
              target="_blank"
              className="text-neutral-500 hover:text-mulearn transition-colors text-sm leading-tight mt-1 block"
            >
              deepusnath.com
            </Link>
            <p className="text-neutral-400 text-sm leading-tight mt-0.5">Mulearn Foundation</p>
          </div>
        </MotionDiv>

        {/* CTA - Join the Movement */}
        <MotionDiv variants={fadeInUp} className="mt-16 text-center">
          <Link href="https://app.mulearn.org" target="_blank" rel="noreferrer">
            <Button variant={"default"} className="px-7 py-7 font-semibold">
              Join the Movement
            </Button>
          </Link>
        </MotionDiv>
      </div>
    </MotionDiv>
  );
}
