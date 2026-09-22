import {
  Award,
  BookOpen,
  Calendar,
  CheckCircle,
  Clock,
  Code,
  Database,
  Globe,
  MessageCircle,
  Palette,
  Smartphone,
  Sparkle,
  Target,
  TrendingUp,
  Trophy,
  Users,
  Zap,
} from "lucide-react";
import { clientEnv } from "@/config/env.client";

export const learningCircleData = {
  subtitle: "Learn, Collaborate & Grow Together",
  description:
    "Learning Circles are µLearn’s peer-learning communities where people grow through shared interests, discussions, and projects. It’s a space to explore, collaborate, and improve together.",
  image: "/assets/learning-circle/learning-circle-illustration.svg",
  ctaText: "Join a Learning Circle",
  ctaLink: `${clientEnv.NEXT_PUBLIC_APP_URL}dashboard/learning-circle`,
  introduction: {
    title: "What are Learning Circles?",
    description:
      "Learning Circles are community-driven, peer-learning groups within µLearn. They are designed to help you learn in a collaborative and supportive environment. It's all about growing together!.\n\nJoin collaborative learning groups focused on specific topics. Learn together, share knowledge, and track your progress in a supportive community.",
    features: [
      {
        icon: Users,
        title: "Collaborate on Projects",
        description:
          "Work with peers on real-world projects, build your portfolio, and gain hands-on experience.",
      },
      {
        icon: Sparkle,
        title: "Learn from Peers",
        description:
          "Share knowledge, ask questions, and learn from the collective experience of the community.",
      },
      {
        icon: Trophy,
        title: "Achieve Your Goals",
        description:
          "Whether you're learning a new skill or building a new product, your circle is there to support you.",
      },
    ],
  },
  ctaSection: {
    title: "Ready to Start Your Learning Journey?",
    description:
      "Join a Learning Circle today and experience the power of peer learning at µLearn. Dive into a supportive community where you can collaborate on exciting projects, share your knowledge, and accelerate your growth.",
    buttonText: "Join a Learning Circle",
    buttonLink: `${clientEnv.NEXT_PUBLIC_APP_URL}dashboard/learning-circle`,
  },

  learningDomains: {
    title: "Explore Learning Domains",
    subtitle: "Choose from a wide range of specialized learning areas and find your perfect circle",
    domains: [
      {
        icon: Code,
        title: "Web Development",
        description: "Frontend, Backend, Full-stack development with modern technologies",
      },
      {
        icon: Smartphone,
        title: "Mobile Development",
        description: "iOS, Android, and cross-platform mobile app development",
      },
      {
        icon: Palette,
        title: "UI/UX Design",
        description: "User interface design, user experience, and design thinking",
      },
      {
        icon: Database,
        title: "Data Science",
        description: "Machine learning, AI, data analysis, and visualization",
      },
      {
        icon: Globe,
        title: "DevOps & Cloud",
        description: "Cloud platforms, CI/CD, infrastructure, and deployment",
      },
      {
        icon: Zap,
        title: "Emerging Tech",
        description: "Blockchain, IoT, AR/VR, and cutting-edge technologies",
      },
    ],
  },
  howItWorks: {
    title: "How to Create a Learning Circle",
    subtitle: "A quick 6-step flow to launch your circle",
    steps: [
      {
        step: "01",
        icon: BookOpen,
        title: "Add Title",
        description: "Name your circle clearly (e.g., AI for Beginners).",
      },
      {
        step: "02",
        icon: MessageCircle,
        title: "Write Description",
        description: "Explain what members will learn in brief.",
      },
      {
        step: "03",
        icon: Target,
        title: "Select Interest Group",
        description: "Choose the closest category to your topic.",
      },
      {
        step: "04",
        icon: Calendar,
        title: "Choose Meeting Type",
        description: "Pick Online or Offline.",
      },
      {
        step: "05",
        icon: Clock,
        title: "Set Time & Place",
        description: "Add date/time and venue or meeting link.",
      },
      {
        step: "06",
        icon: CheckCircle,
        title: "Create Learning Circle",
        description: "Publish and share the join code.",
      },
    ],
  },

  benefits: {
    title: "The Benefits?",
    subtitle: "Discover the unique advantages of collaborative learning at µLearn",
    benefits: [
      {
        icon: MessageCircle,
        title: "Peer Learning",
        description: "Learn from diverse perspectives and experiences of your fellow learners",
      },
      {
        icon: CheckCircle,
        title: "Structured Learning",
        description: "Follow curated learning paths with clear milestones and progress tracking",
      },
      {
        icon: Calendar,
        title: "Flexible Schedule",
        description:
          "Learn at your own pace with flexible meeting times and asynchronous activities",
      },
      {
        icon: Award,
        title: "Portfolio Building",
        description: "Work on real-world projects that enhance your professional portfolio",
      },
      {
        icon: Users,
        title: "Networking",
        description:
          "Build meaningful connections with industry professionals and like-minded peers",
      },
      {
        icon: TrendingUp,
        title: "Career Growth",
        description:
          "Accelerate your career with industry-relevant skills and practical experience",
      },
    ],
  },
};
