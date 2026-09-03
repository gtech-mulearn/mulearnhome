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
import { clientEnv } from "@/lib/env/env.client";

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

export const interestGroups = [
  {
    name: "UI/UX",
    link: `${clientEnv.NEXT_PUBLIC_APP_URL}dashboard/interest-groups/46fe1fb7-7b04-4ebe-837d-120bc16d0e0a`,
    tagline: "Design beautiful, user-friendly experiences",
    image: "/assets/interestgroups/design.svg",
    description:
      "Master the art of user interface and user experience design. Share portfolios, get feedback, and learn the latest design trends.",
  },
  {
    name: "Web Development",
    link: `${clientEnv.NEXT_PUBLIC_APP_URL}dashboard/interest-groups/9b8aaf7f-16a0-4a66-ae53-79b8c25e5faa`,
    tagline: "Build the web, shape the world",
    image: "/assets/interestgroups/webdev.svg",
    description:
      "Explore frontend, backend, and full-stack development. Collaborate on real-world web projects and learn modern frameworks.",
  },
  {
    name: "Cybersecurity",
    link: `${clientEnv.NEXT_PUBLIC_APP_URL}dashboard/interest-groups/3a74725e-a05a-418b-a275-39d68ad9a416`,
    tagline: "Secure the digital frontier",
    image: "/assets/interestgroups/cyber.svg",
    description:
      "Learn how to protect systems and data. Participate in CTFs, workshops, and security challenges.",
  },
  {
    name: "Game Development",
    link: `${clientEnv.NEXT_PUBLIC_APP_URL}dashboard/interest-groups/1be43a3a-bcfb-4ef1-b77a-959b01bcb782`,
    tagline: "Create immersive gaming experiences",
    image: "/assets/interestgroups/game.svg",
    description:
      "Dive into game design, development, and storytelling. Collaborate on projects and learn from industry experts.",
  },
  {
    name: "Internet Of Things (IOT) And Robotics",
    link: `${clientEnv.NEXT_PUBLIC_APP_URL}dashboard/interest-groups/d379d82b-e116-4b67-8128-670916e6bb42`,
    tagline: "Connect the world, automate the future",
    image: "/assets/interestgroups/iot.svg",
    description:
      "Explore IoT devices, robotics, and automation. Build smart systems and learn about hardware integration.",
  },
  {
    name: "Digital Marketing",
    link: `${clientEnv.NEXT_PUBLIC_APP_URL}dashboard/interest-groups/5bf2bdfe-5c22-48ab-9572-9e9836c70e79`,
    tagline: "Grow brands in the digital age",
    image: "/assets/interestgroups/marketing.svg",
    description:
      "Master SEO, social media, and online campaigns. Learn strategies to boost engagement and reach.",
  },
  {
    name: "Cloud and DevOps",
    link: `${clientEnv.NEXT_PUBLIC_APP_URL}dashboard/interest-groups/1719d19a-0206-4161-9c6f-0a7dba44d4e5`,
    tagline: "Deploy, scale, and automate",
    image: "/assets/interestgroups/cloud.svg",
    description:
      "Learn cloud platforms, CI/CD, and infrastructure automation. Collaborate on scalable solutions.",
  },
  {
    name: "Product Management",
    link: `${clientEnv.NEXT_PUBLIC_APP_URL}dashboard/interest-groups/04d29c15-4de4-4b43-ad63-0f4760c62919`,
    tagline: "Build products people love",
    image: "/assets/interestgroups/product.svg",
    description:
      "Discover the art of product strategy, development, and launch. Work with teams to deliver impactful solutions.",
  },
  {
    name: "Entrepreneurship",
    link: `${clientEnv.NEXT_PUBLIC_APP_URL}dashboard/interest-groups/243a1bda-893c-4de3-b457-51e7cb517d83`,
    tagline: "Turn ideas into reality",
    image: "/assets/interestgroups/entrepreneurship.svg",
    description:
      "Learn how to start, grow, and scale ventures. Connect with founders and innovators.",
  },
  {
    name: "AR/VR",
    link: `${clientEnv.NEXT_PUBLIC_APP_URL}dashboard/interest-groups/2de0ee0c-ddc3-4f02-bf93-b6bd2d0625c3`,
    tagline: "Experience the future in 3D",
    image: "/assets/interestgroups/arvr.svg",
    description:
      "Explore augmented and virtual reality. Build immersive applications and learn cutting-edge tech.",
  },
  {
    name: "Quantum Computing",
    link: `${clientEnv.NEXT_PUBLIC_APP_URL}dashboard/interest-groups/b83146a5-1b36-42f1-b560-76b682482e10`,
    tagline: "Compute beyond classical limits",
    image: "/assets/interestgroups/quantum.svg",
    description:
      "Explore quantum algorithms, qubits, and quantum computing frameworks. Learn the fundamentals shaping the next era of computation.",
  },
];
