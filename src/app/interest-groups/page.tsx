"use client";

import { useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Compass,
  ExternalLink,
  Info,
  Lightbulb,
  Search,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MotionDiv, MotionSection } from "@/components/MuFramer";
import MuImage from "@/components/MuImage";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { interestGroups } from "@/data/lc-ig";
import { clientEnv } from "@/lib/env/env.client";
import { cn } from "@/lib/utils";
import {
  type ApiImpactProject,
  type ApiMember,
  fetchPublicInterestGroups,
} from "@/services/interestGroups";

export interface InterestGroupDisplayItem {
  id?: string;
  name: string;
  tagline: string;
  image: string;
  description: string;
  link: string;
  leads?: ApiMember[];
  mentors?: ApiMember[];
  thinktank?: ApiMember[];
  impact_projects?: ApiImpactProject[];
}

const workflowSteps = [
  {
    icon: Target,
    stepNumber: "01",
    title: "Reach Level 4",
    description:
      "Start your µLearn journey and progress to Level 4 to unlock Interest Group related tasks and opportunities.",
  },
  {
    icon: Users,
    stepNumber: "02",
    title: "Choose Your Interest Group",
    description:
      "Explore and join an Interest Group that aligns with your passion and career goals from the available domains.",
  },
  {
    icon: BookOpen,
    stepNumber: "03",
    title: "Learn Through Real-World Problems",
    description:
      "Engage in hands-on learning by working on real-world problems and industry-relevant projects within your group.",
  },
  {
    icon: Lightbulb,
    stepNumber: "04",
    title: "Build Practical Skills",
    description:
      "Develop job-ready skills through collaborative learning, mentorship from peers and industry experts, and curated resources.",
  },
  {
    icon: TrendingUp,
    stepNumber: "05",
    title: "Advance Your Career",
    description:
      "Apply your skills to meaningful projects, build your portfolio, and prepare for career opportunities in your chosen field.",
  },
];

const coreValues = [
  {
    title: "Collaboration",
    description: "Learn together, grow together",
    icon: "🤝",
  },
  {
    title: "Curiosity",
    description: "Question everything, explore endlessly",
    icon: "🔍",
  },
  {
    title: "Community",
    description: "Build connections that last",
    icon: "💙",
  },
];

const domainPills = [
  "Web Dev",
  "UI/UX",
  "Cybersecurity",
  "Game Dev",
  "IoT & Robotics",
  "Cloud & DevOps",
  "Product",
  "AR/VR",
];

function MemberCard({ member, isLead = false }: { member: ApiMember; isLead?: boolean }) {
  const [imgError, setImgError] = useState(false);

  const initial = member.full_name?.trim()?.charAt(0)?.toUpperCase() || "?";
  const profilePicUrl = member.profile_pic || "";
  const hasValidPic = Boolean(profilePicUrl && profilePicUrl.trim() !== "" && !imgError);

  const roleOrContext =
    member.role || member.company || member.org || (member.muid ? `@${member.muid}` : "");

  const hasSocials =
    member.socials &&
    Boolean(
      (member.socials.linkedin && member.socials.linkedin.trim() !== "") ||
        (member.socials.github && member.socials.github.trim() !== "") ||
        (member.socials.twitter && member.socials.twitter.trim() !== "") ||
        (member.socials.facebook && member.socials.facebook.trim() !== "") ||
        (member.socials.instagram && member.socials.instagram.trim() !== ""),
    );

  return (
    <div
      className={cn(
        "group relative flex items-center gap-3 p-3.5 rounded-2xl transition-all duration-200 shadow-2xs hover:shadow-md hover:-translate-y-0.5 border",
        isLead
          ? "bg-gradient-to-br from-amber-50/80 via-white to-blue-50/50 dark:from-slate-900 dark:via-slate-900/90 dark:to-blue-950/30 border-amber-200/90 dark:border-amber-900/40 hover:border-amber-300 dark:hover:border-amber-700"
          : "bg-white dark:bg-slate-900/90 border-slate-200/80 dark:border-slate-800/80 hover:border-blue-300 dark:hover:border-blue-800",
      )}
    >
      <div
        className={cn(
          "relative shrink-0 rounded-full flex items-center justify-center font-bold select-none overflow-hidden",
          isLead
            ? "w-11 h-11 bg-amber-100 dark:bg-amber-950/80 text-amber-700 dark:text-amber-300 ring-2 ring-amber-400/50 dark:ring-amber-500/40"
            : "w-10 h-10 bg-blue-50 dark:bg-slate-800 text-mulearn-trusty-blue dark:text-blue-400 border border-slate-200/80 dark:border-slate-700",
        )}
      >
        {hasValidPic ? (
          <MuImage
            src={profilePicUrl}
            alt={member.full_name}
            fill
            className="object-cover"
            onError={() => setImgError(true)}
          />
        ) : (
          <span className={isLead ? "text-base" : "text-sm"}>{initial}</span>
        )}
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-1.5 flex-wrap">
          <h4 className="text-xs font-bold text-slate-900 dark:text-slate-100 truncate group-hover:text-mulearn-trusty-blue dark:group-hover:text-blue-400 transition-colors">
            {member.full_name}
          </h4>
          {isLead && (
            <span className="text-[9px] font-bold px-1.5 py-0.2 rounded-full bg-amber-100 dark:bg-amber-950/80 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800 shrink-0">
              Lead
            </span>
          )}
        </div>
        {roleOrContext && (
          <p className="text-[11px] font-medium text-slate-600 dark:text-slate-400 truncate mt-0.5">
            {roleOrContext}
          </p>
        )}
        {member.muid && (
          <p className="text-[9px] font-mono text-slate-400 dark:text-slate-500 truncate">
            µID: {member.muid}
          </p>
        )}
      </div>

      {hasSocials && (
        <div className="flex items-center gap-0.5 shrink-0 opacity-80 group-hover:opacity-100 transition-opacity">
          {member.socials?.linkedin && member.socials.linkedin.trim() !== "" && (
            <a
              href={member.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 p-1.5 rounded-lg hover:bg-blue-50 dark:hover:bg-slate-800 transition-colors"
              aria-label={`${member.full_name}'s LinkedIn`}
            >
              <FaLinkedin className="w-3.5 h-3.5" />
            </a>
          )}
          {member.socials?.github && member.socials.github.trim() !== "" && (
            <a
              href={member.socials.github}
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-slate-900 dark:hover:text-white p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label={`${member.full_name}'s GitHub`}
            >
              <FaGithub className="w-3.5 h-3.5" />
            </a>
          )}
          {member.socials?.twitter && member.socials.twitter.trim() !== "" && (
            <a
              href={member.socials.twitter}
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-sky-500 dark:hover:text-sky-400 p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label={`${member.full_name}'s Twitter`}
            >
              <FaTwitter className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      )}
    </div>
  );
}

const DEFAULT_NEUTRAL_IMAGE = "/assets/interestgroups/webdev.svg";

function normalizeName(str: string): string {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "")
    .replace(/interestgroup|ig$/g, "");
}

function getPresentationMetadata(apiName: string) {
  const normApi = normalizeName(apiName);

  const match = interestGroups.find((local) => {
    const normLocal = normalizeName(local.name);
    return normLocal === normApi;
  });

  if (match) return match;

  if (normApi.includes("uiux") || normApi.includes("uxui")) {
    return interestGroups.find((g) => g.name === "UI/UX");
  }
  if (normApi.includes("creativedesign")) {
    return interestGroups.find((g) => g.name === "Creative Design");
  }
  if (normApi.includes("arvr") || normApi.includes("vrar") || normApi.includes("arvrmr")) {
    return interestGroups.find((g) => g.name === "AR/VR");
  }
  if (normApi.includes("cyber")) {
    return interestGroups.find((g) => g.name === "Cybersecurity");
  }
  if (normApi.includes("blockchain")) {
    return interestGroups.find((g) => g.name === "Blockchain");
  }
  if (
    normApi.includes("gamedevelopment") ||
    normApi.includes("gamedev") ||
    normApi.includes("3danimationandgamedevelopment")
  ) {
    return interestGroups.find((g) => g.name === "Game Development");
  }
  if (normApi.includes("cloud") || normApi.includes("devops")) {
    return interestGroups.find((g) => g.name === "Cloud and DevOps");
  }
  if (
    normApi.includes("testing") ||
    normApi.includes("qualityassurance") ||
    normApi.includes("sample")
  ) {
    return interestGroups.find((g) => g.name === "Quality Assurance");
  }
  if (normApi.includes("marketing")) {
    return interestGroups.find((g) => g.name === "Digital Marketing");
  }
  if (
    normApi.includes("webdev") ||
    normApi.includes("webdevelopment") ||
    normApi.includes("igreq01edited")
  ) {
    return interestGroups.find((g) => g.name === "Web Development");
  }
  if (
    normApi.includes("lowcode") ||
    normApi.includes("nocode") ||
    normApi.includes("noorlowcode") ||
    normApi.includes("igreq05edited")
  ) {
    return interestGroups.find((g) => g.name === "No Or Low Code");
  }
  if (normApi.includes("mobile")) {
    return interestGroups.find((g) => g.name === "Mobile Development");
  }
  if (normApi.includes("competitivecoding") || normApi.includes("cp")) {
    return interestGroups.find((g) => g.name === "Competitive Coding");
  }
  if (
    normApi.includes("aiml") ||
    normApi.includes("machinelearning") ||
    normApi.includes("artificialintelligence") ||
    normApi.includes("deeplearning")
  ) {
    return interestGroups.find((g) => g.name === "AI & Machine Learning");
  }
  if (normApi.includes("quantum")) {
    return interestGroups.find((g) => g.name === "Quantum Computing");
  }
  if (normApi.includes("dataanalytics") || normApi.includes("analytics")) {
    return interestGroups.find((g) => g.name === "Data Analytics");
  }
  if (normApi.includes("entrepreneur")) {
    return interestGroups.find((g) => g.name === "Entrepreneurship");
  }
  if (normApi.includes("iot") || normApi.includes("robotics")) {
    return interestGroups.find((g) => g.name === "Internet Of Things (IOT) And Robotics");
  }
  if (normApi.includes("civil")) {
    return interestGroups.find((g) => g.name === "Civil Engineering");
  }
  if (normApi.includes("leadership") || normApi.includes("ellamgoodinu")) {
    return interestGroups.find((g) => g.name === "Strategic Leadership");
  }
  if (normApi.includes("socialgood")) {
    return interestGroups.find((g) => g.name === "AI for Social Good");
  }
  if (normApi.includes("beckn")) {
    return interestGroups.find((g) => g.name === "Beckn Protocol");
  }

  return interestGroups.find((g) => g.name === "Creative Design");
}

export default function InterestGroups() {
  const [searchTerm, setSearchTerm] = useState("");
  const [groups, setGroups] = useState<InterestGroupDisplayItem[]>(interestGroups);
  const [selectedGroup, setSelectedGroup] = useState<InterestGroupDisplayItem | null>(null);
  const [activeTab, setActiveTab] = useState<"overview" | "team" | "projects">("overview");
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, 100]);
  const heroOpacity = useTransform(scrollY, [0, 350], [1, 0]);

  useEffect(() => {
    async function loadApiData() {
      try {
        const apiData = await fetchPublicInterestGroups();
        if (apiData && apiData.length > 0) {
          const merged = apiData.map((apiGroup) => {
            const localMatch = getPresentationMetadata(apiGroup.name);

            const leadsArr = Array.isArray(apiGroup.leads) ? apiGroup.leads : [];
            const mentorsArr = Array.isArray(apiGroup.mentors) ? apiGroup.mentors : [];
            const thinktankArr = Array.isArray(apiGroup.thinktank)
              ? (apiGroup.thinktank as ApiMember[])
              : [];
            const projectsArr = Array.isArray(apiGroup.impact_projects)
              ? apiGroup.impact_projects
              : [];

            const appBaseUrl = clientEnv.NEXT_PUBLIC_APP_URL.replace(/\/+$/, "");
            const groupLink = apiGroup.id
              ? `${appBaseUrl}/dashboard/interest-group/${apiGroup.id}`
              : `${appBaseUrl}/dashboard/interest-group`;

            return {
              id: apiGroup.id,
              name: apiGroup.name,
              tagline: localMatch?.tagline || "",
              image:
                apiGroup.name.toLowerCase() === "machine learning"
                  ? "/assets/interestgroups/machine-learning.svg"
                  : apiGroup.name.toLowerCase() === "deep learning"
                    ? "/assets/interestgroups/deep-learning.svg"
                    : apiGroup.image || apiGroup.icon || localMatch?.image || DEFAULT_NEUTRAL_IMAGE,
              description: localMatch?.description || "",
              link: groupLink,
              leads: leadsArr,
              mentors: mentorsArr,
              thinktank: thinktankArr,
              impact_projects: projectsArr,
            };
          });
          setGroups(merged);
        }
      } catch (err) {
        console.error("Error fetching interest groups:", err);
      }
    }
    loadApiData();
  }, []);

  const filteredGroups = groups.filter(
    (group) =>
      group.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      group.tagline.toLowerCase().includes(searchTerm.toLowerCase()) ||
      group.description.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="bg-slate-50/50 dark:bg-slate-950 min-h-screen text-slate-900 dark:text-slate-100">
      {/* 1. HERO SECTION */}
      <MotionSection
        style={{ y: heroY, opacity: heroOpacity }}
        className="relative overflow-hidden bg-mulearn pt-24 pb-36 md:pt-36 md:pb-44"
      >
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl" />
          <div className="absolute top-1/2 -right-24 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto space-y-6"
          >
            <MotionDiv
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-5 py-2 bg-mulearn-whitish/15 backdrop-blur-md rounded-full border border-mulearn-whitish/30 shadow-xs"
            >
              <Sparkles className="w-4 h-4 text-white animate-pulse" />
              <span className="text-mulearn-whitish text-xs sm:text-sm font-semibold tracking-wider uppercase">
                Interest Groups
              </span>
            </MotionDiv>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-mulearn-whitish tracking-tight leading-[1.15]">
              Find Your Tribe,
              <br />
              <span className="bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent">
                Grow Together
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-mulearn-whitish/90 max-w-3xl mx-auto leading-relaxed font-normal">
              Join communities where learners explore specific domains, collaborate on projects, and
              grow together through shared curiosity and hands-on learning.
            </p>

            {/* Supporting Domain Pills */}
            <div className="pt-4 flex flex-wrap justify-center gap-2 max-w-2xl mx-auto">
              {domainPills.map((domain) => (
                <span
                  key={domain}
                  className="px-3 py-1 bg-white/10 hover:bg-white/20 text-white/90 border border-white/15 text-xs font-medium rounded-full backdrop-blur-xs transition-colors"
                >
                  ✦ {domain}
                </span>
              ))}
            </div>
          </MotionDiv>
        </div>

        {/* Bottom Curved Wave Transition */}
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
          <svg
            viewBox="0 0 1440 120"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto text-slate-50/50 dark:text-slate-950 fill-current"
            aria-hidden="true"
          >
            <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" />
          </svg>
        </div>
      </MotionSection>

      {/* 2. COMMUNITY VALUES SECTION */}
      <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 space-y-3"
        >
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 text-mulearn-trusty-blue border border-blue-200/60 dark:border-blue-800/60 text-xs font-semibold uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5" /> Core Ethos
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Built on Community Values
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-normal">
            At µLearn, we believe in the power of learning together
          </p>
        </MotionDiv>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {coreValues.map((value, index) => (
            <MotionDiv
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 text-center flex flex-col items-center justify-between"
            >
              <div className="w-20 h-20 rounded-2xl bg-blue-50 dark:bg-blue-950/50 flex items-center justify-center text-4xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-inner">
                {value.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-mulearn-trusty-blue transition-colors">
                {value.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed">
                {value.description}
              </p>
            </MotionDiv>
          ))}
        </div>
      </section>

      {/* 3. LEARNING JOURNEY SECTION */}
      <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-slate-100/60 dark:bg-slate-900/40 border-y border-slate-200/60 dark:border-slate-800/80">
        <div className="max-w-6xl mx-auto">
          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20 space-y-3"
          >
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 text-mulearn-trusty-blue border border-blue-200/60 dark:border-blue-800/60 text-xs font-semibold uppercase tracking-wider">
              Step by Step
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Your Learning Journey
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-normal">
              From curiosity to career readiness in five simple steps
            </p>
          </MotionDiv>

          {/* Desktop Timeline */}
          <div className="hidden md:block relative">
            <div className="absolute left-1/2 top-10 bottom-10 -translate-x-1/2 w-1 bg-gradient-to-b from-mulearn-trusty-blue via-indigo-500 to-mulearn-duke-purple rounded-full" />

            {workflowSteps.map((step, index) => {
              const Icon = step.icon;
              const isLeft = index % 2 === 0;

              return (
                <MotionDiv
                  key={step.title}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative mb-20 last:mb-0 z-10"
                >
                  <div className={`flex items-center ${isLeft ? "justify-end" : "justify-start"}`}>
                    <div className={`w-5/12 ${isLeft ? "pr-12 text-right" : "pl-12 text-left"}`}>
                      <div className="group bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-sm hover:shadow-xl border border-slate-200/80 dark:border-slate-800 hover:border-mulearn-trusty-blue/50 transition-all duration-300 space-y-3">
                        <div
                          className={`flex items-center gap-3 ${
                            isLeft ? "justify-end" : "justify-start"
                          }`}
                        >
                          <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-mulearn-trusty-blue group-hover:bg-mulearn-trusty-blue group-hover:text-white transition-colors">
                            <Icon className="w-6 h-6" />
                          </div>
                          <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-mulearn-trusty-blue transition-colors">
                            {step.title}
                          </h3>
                        </div>
                        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Central Node */}
                  <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                    <MotionDiv
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                      className="w-12 h-12 bg-gradient-to-r from-mulearn-trusty-blue to-mulearn-duke-purple rounded-full flex items-center justify-center shadow-lg ring-4 ring-white dark:ring-slate-950"
                    >
                      <span className="text-xs font-extrabold text-white font-mono">
                        {step.stepNumber}
                      </span>
                    </MotionDiv>
                  </div>
                </MotionDiv>
              );
            })}
          </div>

          {/* Mobile Timeline */}
          <div className="md:hidden space-y-8">
            {workflowSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <MotionDiv
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative pl-14"
                >
                  {index < workflowSteps.length - 1 && (
                    <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-gradient-to-b from-mulearn-trusty-blue to-mulearn-duke-purple transform -translate-x-1/2" />
                  )}

                  <div className="absolute left-0 top-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-mulearn-trusty-blue to-mulearn-duke-purple rounded-2xl flex items-center justify-center shadow-md">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-200/80 dark:border-slate-800 space-y-2">
                    <span className="text-xs font-mono font-bold text-mulearn-trusty-blue uppercase tracking-wider">
                      Step {step.stepNumber}
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      {step.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </MotionDiv>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. INTEREST GROUPS EXPLORATION SECTION */}
      <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto space-y-6"
        >
          <div className="space-y-3">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Explore Interest Groups
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 font-normal">
              Choose a domain that excites you and start your learning journey today
            </p>
          </div>

          {/* Search Experience */}
          <div className="space-y-3">
            <div className="max-w-lg mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search interest groups..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-10 py-3.5 rounded-full border-2 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 focus:border-mulearn-trusty-blue focus:ring-4 focus:ring-mulearn-trusty-blue/15 transition-all text-slate-900 dark:text-white placeholder-slate-400 shadow-sm"
                aria-label="Search interest groups"
              />
              {searchTerm && (
                <button
                  type="button"
                  onClick={() => setSearchTerm("")}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-1 rounded-full"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 tracking-wide">
              {filteredGroups.length}{" "}
              {filteredGroups.length === 1 ? "Interest Group" : "Interest Groups"} Available
            </p>
          </div>
        </MotionDiv>

        {/* Interest Group Cards Grid */}
        {filteredGroups.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredGroups.map((group, index) => {
              const hasApiDetails =
                Boolean(group.leads?.length) ||
                Boolean(group.mentors?.length) ||
                Boolean(group.thinktank?.length) ||
                Boolean(group.impact_projects?.length);

              return (
                <MotionDiv
                  key={group.name}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.04 }}
                  className="group block h-full"
                >
                  <Card
                    variant="hoverable"
                    className="relative h-full bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-2xl shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 overflow-hidden flex flex-col justify-between"
                  >
                    {/* Card Image Area */}
                    <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-100 dark:bg-slate-800">
                      <MuImage
                        src={group.image}
                        alt={group.name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover group-hover:scale-108 transition-transform duration-500 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
                    </div>

                    {/* Card Content Area */}
                    <CardContent className="p-5 flex flex-col justify-between flex-1 gap-3">
                      <div className="space-y-1.5">
                        <CardTitle className="text-lg font-bold text-slate-900 dark:text-slate-100 line-clamp-2 leading-snug">
                          {group.name}
                        </CardTitle>

                        {group.tagline ? (
                          <CardDescription className="text-xs font-semibold text-mulearn-trusty-blue line-clamp-1">
                            {group.tagline}
                          </CardDescription>
                        ) : null}

                        {group.description ? (
                          <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-3 leading-relaxed pt-1">
                            {group.description}
                          </p>
                        ) : null}
                      </div>

                      {/* Card Action Buttons */}
                      <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 flex flex-wrap items-center justify-between gap-2 mt-auto">
                        <a
                          href={group.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-bold text-mulearn-trusty-blue flex items-center gap-1 group-hover:gap-1.5 transition-all duration-300 shrink-0"
                        >
                          Explore group{" "}
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-300" />
                        </a>

                        {hasApiDetails && (
                          <button
                            type="button"
                            onClick={() => {
                              setSelectedGroup(group);
                              setActiveTab("overview");
                            }}
                            className="px-2.5 py-1 text-[11px] font-semibold bg-blue-50 dark:bg-blue-950/60 text-mulearn-trusty-blue hover:bg-mulearn-trusty-blue hover:text-white rounded-lg transition-colors flex items-center gap-1 cursor-pointer shrink-0"
                          >
                            <Info className="w-3 h-3" /> Team & Details
                          </button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </MotionDiv>
              );
            })}
          </div>
        ) : (
          /* Empty Search State */
          <MotionDiv
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-20 px-4 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 max-w-md mx-auto space-y-4 shadow-sm"
          >
            <div className="w-16 h-16 bg-blue-50 dark:bg-slate-800 rounded-2xl flex items-center justify-center mx-auto text-mulearn-trusty-blue">
              <Search className="w-8 h-8 opacity-70" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200">
              No Interest Groups Found
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              We couldn&apos;t find any group matching &quot;{searchTerm}&quot;. Try checking for
              typos or searching for a broader term.
            </p>
            <button
              type="button"
              onClick={() => setSearchTerm("")}
              className="mt-2 inline-flex items-center gap-2 px-5 py-2.5 bg-mulearn-trusty-blue text-white rounded-xl font-semibold text-xs hover:bg-blue-600 transition-colors shadow-sm cursor-pointer"
            >
              Clear Search
            </button>
          </MotionDiv>
        )}
      </section>

      {/* Detail Modal for API-Provided Data */}
      <Dialog open={!!selectedGroup} onOpenChange={(open) => !open && setSelectedGroup(null)}>
        <DialogContent className="sm:max-w-4xl max-h-[88vh] overflow-y-auto p-0 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-2xl bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col">
          {selectedGroup &&
            (() => {
              const hasLeads = Boolean(selectedGroup.leads && selectedGroup.leads.length > 0);
              const hasMentors = Boolean(selectedGroup.mentors && selectedGroup.mentors.length > 0);
              const hasThinktank = Boolean(
                selectedGroup.thinktank && selectedGroup.thinktank.length > 0,
              );
              const hasProjects = Boolean(
                selectedGroup.impact_projects && selectedGroup.impact_projects.length > 0,
              );
              const hasTeam = hasLeads || hasMentors || hasThinktank;
              const totalTeamCount =
                (selectedGroup.leads?.length || 0) +
                (selectedGroup.mentors?.length || 0) +
                (selectedGroup.thinktank?.length || 0);

              return (
                <div className="flex flex-col min-h-0">
                  {/* Editorial Header Banner */}
                  <div className="bg-gradient-to-br from-blue-50/90 via-slate-50 to-indigo-50/60 dark:from-slate-900 dark:via-slate-900/95 dark:to-blue-950/40 p-6 md:p-8 border-b border-slate-200/80 dark:border-slate-800/80 relative">
                    <DialogHeader className="space-y-4 text-left">
                      <div className="flex items-start gap-4">
                        <div className="relative w-16 h-16 rounded-2xl overflow-hidden shrink-0 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-md">
                          <MuImage
                            src={selectedGroup.image}
                            alt={selectedGroup.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <DialogTitle className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                            {selectedGroup.name}
                          </DialogTitle>
                          {selectedGroup.tagline ? (
                            <DialogDescription className="text-xs md:text-sm font-bold text-mulearn-trusty-blue dark:text-blue-400 mt-1">
                              {selectedGroup.tagline}
                            </DialogDescription>
                          ) : null}

                          {/* Header Count Badges */}
                          <div className="flex flex-wrap items-center gap-2 mt-3">
                            {hasLeads && (
                              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-100 dark:bg-amber-950/80 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800">
                                {selectedGroup.leads?.length} Leads
                              </span>
                            )}
                            {hasMentors && (
                              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-100 dark:bg-blue-950/80 text-mulearn-trusty-blue dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                                {selectedGroup.mentors?.length} Mentors
                              </span>
                            )}
                            {hasThinktank && (
                              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-purple-100 dark:bg-purple-950/80 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800">
                                {selectedGroup.thinktank?.length} Thinktank
                              </span>
                            )}
                            {hasProjects && (
                              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                                {selectedGroup.impact_projects?.length} Projects
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </DialogHeader>
                  </div>

                  {/* Segmented Navigation Bar */}
                  <div className="flex items-center gap-2 px-6 md:px-8 py-3 border-b border-slate-200/80 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-900/60 overflow-x-auto no-scrollbar">
                    <button
                      type="button"
                      onClick={() => setActiveTab("overview")}
                      className={cn(
                        "px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap",
                        activeTab === "overview"
                          ? "bg-white dark:bg-slate-800 text-mulearn-trusty-blue dark:text-white shadow-xs border border-slate-200 dark:border-slate-700"
                          : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200",
                      )}
                    >
                      Overview
                    </button>
                    {hasTeam && (
                      <button
                        type="button"
                        onClick={() => setActiveTab("team")}
                        className={cn(
                          "px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5",
                          activeTab === "team"
                            ? "bg-white dark:bg-slate-800 text-mulearn-trusty-blue dark:text-white shadow-xs border border-slate-200 dark:border-slate-700"
                            : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200",
                        )}
                      >
                        <span>Team</span>
                        <span className="px-1.5 py-0.2 rounded-full text-[10px] bg-blue-100 dark:bg-blue-950/80 text-blue-700 dark:text-blue-300 font-bold">
                          {totalTeamCount}
                        </span>
                      </button>
                    )}
                    {hasProjects && (
                      <button
                        type="button"
                        onClick={() => setActiveTab("projects")}
                        className={cn(
                          "px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5",
                          activeTab === "projects"
                            ? "bg-white dark:bg-slate-800 text-mulearn-trusty-blue dark:text-white shadow-xs border border-slate-200 dark:border-slate-700"
                            : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200",
                        )}
                      >
                        <span>Impact Projects</span>
                        <span className="px-1.5 py-0.2 rounded-full text-[10px] bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 font-bold">
                          {selectedGroup.impact_projects?.length}
                        </span>
                      </button>
                    )}
                  </div>

                  {/* Modal Content Body */}
                  <div className="p-6 md:p-8 space-y-7">
                    {/* OVERVIEW TAB */}
                    {activeTab === "overview" && (
                      <div className="space-y-6">
                        {selectedGroup.description ? (
                          <div className="space-y-2">
                            <h4 className="text-xs font-black uppercase tracking-wider text-slate-400">
                              About {selectedGroup.name}
                            </h4>
                            <p className="text-sm md:text-base text-slate-700 dark:text-slate-300 leading-relaxed bg-slate-50/80 dark:bg-slate-900/60 p-4 md:p-5 rounded-2xl border border-slate-200/60 dark:border-slate-800">
                              {selectedGroup.description}
                            </p>
                          </div>
                        ) : null}

                        {/* Quick Summary Grid */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                          <div className="p-3.5 bg-amber-50/60 dark:bg-amber-950/20 rounded-2xl border border-amber-200/60 dark:border-amber-900/40 text-center">
                            <p className="text-xl font-extrabold text-amber-700 dark:text-amber-400">
                              {selectedGroup.leads?.length || 0}
                            </p>
                            <p className="text-[11px] font-semibold text-amber-800/80 dark:text-amber-300/80">
                              Leads
                            </p>
                          </div>
                          <div className="p-3.5 bg-blue-50/60 dark:bg-blue-950/20 rounded-2xl border border-blue-200/60 dark:border-blue-900/40 text-center">
                            <p className="text-xl font-extrabold text-mulearn-trusty-blue dark:text-blue-400">
                              {selectedGroup.mentors?.length || 0}
                            </p>
                            <p className="text-[11px] font-semibold text-blue-800/80 dark:text-blue-300/80">
                              Mentors
                            </p>
                          </div>
                          <div className="p-3.5 bg-purple-50/60 dark:bg-purple-950/20 rounded-2xl border border-purple-200/60 dark:border-purple-900/40 text-center">
                            <p className="text-xl font-extrabold text-purple-700 dark:text-purple-400">
                              {selectedGroup.thinktank?.length || 0}
                            </p>
                            <p className="text-[11px] font-semibold text-purple-800/80 dark:text-purple-300/80">
                              Thinktank
                            </p>
                          </div>
                          <div className="p-3.5 bg-emerald-50/60 dark:bg-emerald-950/20 rounded-2xl border border-emerald-200/60 dark:border-emerald-900/40 text-center">
                            <p className="text-xl font-extrabold text-emerald-700 dark:text-emerald-400">
                              {selectedGroup.impact_projects?.length || 0}
                            </p>
                            <p className="text-[11px] font-semibold text-emerald-800/80 dark:text-emerald-300/80">
                              Projects
                            </p>
                          </div>
                        </div>

                        {/* CTA Action */}
                        <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
                          <div className="flex gap-2">
                            {hasTeam && (
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => setActiveTab("team")}
                              >
                                View Team Directory
                              </Button>
                            )}
                            {hasProjects && (
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => setActiveTab("projects")}
                              >
                                View Impact Projects
                              </Button>
                            )}
                          </div>
                          <Button asChild variant="blue">
                            <a href={selectedGroup.link} target="_blank" rel="noopener noreferrer">
                              Join &amp; Explore Group <ExternalLink className="w-4 h-4 ml-1" />
                            </a>
                          </Button>
                        </div>
                      </div>
                    )}

                    {/* TEAM TAB */}
                    {activeTab === "team" && (
                      <div className="space-y-7">
                        {/* API Leads Section */}
                        {hasLeads && (
                          <div className="space-y-3">
                            <div className="flex items-center justify-between">
                              <div>
                                <h4 className="text-xs font-black uppercase tracking-wider text-amber-600 dark:text-amber-400">
                                  LEADS
                                </h4>
                                <p className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                                  Interest Group Leadership
                                </p>
                              </div>
                              <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-amber-100 dark:bg-amber-950/80 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800">
                                {selectedGroup.leads?.length}
                              </span>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                              {selectedGroup.leads?.map((member) => (
                                <MemberCard
                                  key={member.muid || member.full_name}
                                  member={member}
                                  isLead={true}
                                />
                              ))}
                            </div>
                          </div>
                        )}

                        {/* API Mentors Section */}
                        {hasMentors && (
                          <div className="space-y-3">
                            <div className="flex items-center justify-between">
                              <div>
                                <h4 className="text-xs font-black uppercase tracking-wider text-mulearn-trusty-blue dark:text-blue-400">
                                  MENTORS
                                </h4>
                                <p className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                                  Guidance &amp; Expertise
                                </p>
                              </div>
                              <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-blue-100 dark:bg-blue-950/80 text-mulearn-trusty-blue dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                                {selectedGroup.mentors?.length}
                              </span>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                              {selectedGroup.mentors?.map((member) => (
                                <MemberCard
                                  key={member.muid || member.full_name}
                                  member={member}
                                  isLead={false}
                                />
                              ))}
                            </div>
                          </div>
                        )}

                        {/* API Thinktank Section */}
                        {hasThinktank && (
                          <div className="space-y-3">
                            <div className="flex items-center justify-between">
                              <div>
                                <h4 className="text-xs font-black uppercase tracking-wider text-purple-600 dark:text-purple-400">
                                  THINKTANK
                                </h4>
                                <p className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                                  Community Advisors
                                </p>
                              </div>
                              <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-purple-100 dark:bg-purple-950/80 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800">
                                {selectedGroup.thinktank?.length}
                              </span>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                              {selectedGroup.thinktank?.map((member) => (
                                <MemberCard
                                  key={member.muid || member.full_name}
                                  member={member}
                                  isLead={false}
                                />
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    )}

                    {/* PROJECTS TAB */}
                    {activeTab === "projects" && hasProjects && (
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="text-xs font-black uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                              IMPACT PROJECTS
                            </h4>
                            <p className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                              Featured Community Projects
                            </p>
                          </div>
                          <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                            {selectedGroup.impact_projects?.length}
                          </span>
                        </div>
                        <div className="space-y-4">
                          {selectedGroup.impact_projects?.map((proj, pIdx) => (
                            <div
                              key={proj.id || pIdx}
                              className="flex flex-col md:flex-row gap-5 p-5 bg-slate-50/70 dark:bg-slate-900/80 rounded-2xl border border-slate-200/80 dark:border-slate-800 hover:border-blue-300 dark:hover:border-blue-800 transition-all duration-200 shadow-xs"
                            >
                              {proj.image && (
                                <div className="relative w-full md:w-36 h-36 rounded-xl overflow-hidden shrink-0 border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-800">
                                  <MuImage
                                    src={proj.image}
                                    alt={proj.title || "Project"}
                                    fill
                                    className="object-cover"
                                  />
                                </div>
                              )}
                              <div className="flex-1 space-y-3 min-w-0">
                                <div>
                                  <h5 className="text-base font-bold text-slate-900 dark:text-slate-100">
                                    {proj.title || "Impact Project"}
                                  </h5>
                                  {proj.description && (
                                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mt-1">
                                      {proj.description}
                                    </p>
                                  )}
                                </div>

                                {/* Links */}
                                {proj.links && proj.links.length > 0 && (
                                  <div className="flex flex-wrap gap-2 pt-1">
                                    {proj.links.map((linkItem, lIdx) =>
                                      linkItem.url ? (
                                        <a
                                          key={linkItem.url || lIdx}
                                          href={linkItem.url}
                                          target="_blank"
                                          rel="noreferrer"
                                          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-white dark:bg-slate-800 text-mulearn-trusty-blue hover:bg-mulearn-trusty-blue hover:text-white rounded-xl border border-slate-200 dark:border-slate-700 transition-colors shadow-2xs"
                                        >
                                          <span>{linkItem.label || "Link"}</span>
                                          <ExternalLink className="w-3.5 h-3.5" />
                                        </a>
                                      ) : null,
                                    )}
                                  </div>
                                )}

                                {/* Project Team */}
                                {proj.team && proj.team.length > 0 && (
                                  <div className="pt-2.5 border-t border-slate-200/60 dark:border-slate-800 space-y-1.5">
                                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                                      Project Contributors
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                      {proj.team.map((member) => (
                                        <div
                                          key={member.muid || member.name}
                                          className="flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 text-xs shadow-2xs"
                                        >
                                          <span className="font-semibold text-slate-900 dark:text-slate-100">
                                            {member.name}
                                          </span>
                                          {member.is_lead && (
                                            <span className="text-[9px] font-bold px-1.5 py-0.2 rounded bg-amber-100 dark:bg-amber-950/80 text-amber-700 dark:text-amber-300">
                                              Lead
                                            </span>
                                          )}
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })()}
        </DialogContent>
      </Dialog>

      {/* 5. FINAL CTA SECTION */}
      <section className="relative overflow-hidden py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-mulearn text-center">
        {/* Glow Decor */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/10 rounded-full blur-3xl" />
        </div>

        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl mx-auto space-y-8"
        >
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-mulearn-whitish tracking-tight">
              Ready to Start Your Journey?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-mulearn-whitish/90 max-w-2xl mx-auto font-normal leading-relaxed">
              Join thousands of learners who are building skills, making connections, and preparing
              for the careers of tomorrow.
            </p>
          </div>

          <div>
            <Button
              asChild
              variant="inverted"
              className="px-8 py-6 text-base sm:text-lg shadow-2xl hover:scale-102 transition-transform"
            >
              <a
                href={`${clientEnv.NEXT_PUBLIC_APP_URL}dashboard/profile`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                Join an Interest Group <ArrowRight className="w-5 h-5 text-mulearn-trusty-blue" />
              </a>
            </Button>
          </div>
        </MotionDiv>
      </section>
    </div>
  );
}
