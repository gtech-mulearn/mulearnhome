export interface GalleryMediaItem {
  type: "image" | "video";
  src: string;
  thumbnail?: string;
  alt?: string;
  caption?: string;
}

export interface GalleryEvent {
  slug: string;
  name: string;
  date?: string;
  month?: string;
  location: string;
  coverImage: string;
  description?: string;
  media: GalleryMediaItem[];
}

export const galleryEvents: GalleryEvent[] = (
  [
    {
      slug: "dod",
      name: "The Dawn of DPI",
      date: "March 14, 2024",
      location: "Concert Hall, Kerala Arts and Crafts Village, Trivandrum",
      coverImage: "/assets/gallery/dod/4.webp",
      description:
        "A high-impact event within the µLearn ecosystem that explores how India’s digital infrastructure is creating new frontiers for developers and entrepreneurs.",
      media: [
        {
          type: "image",
          src: "/assets/gallery/dod/1.webp",
          alt: "Keynote speaker presenting on the main stage at The Dawn of DPI conclave",
        },
        {
          type: "image",
          src: "/assets/gallery/dod/2.webp",
          alt: "Panel discussion with technology leaders and government officials on DPI adoption",
        },
        {
          type: "image",
          src: "/assets/gallery/dod/3.webp",
          alt: "Audience of developers and entrepreneurs listening to a session on India Stack",
        },
        {
          type: "image",
          src: "/assets/gallery/dod/4.webp",
          alt: "Main stage with event branding and speaker addressing the crowd about digital public infrastructure",
        },
        {
          type: "image",
          src: "/assets/gallery/dod/5.webp",
          alt: "Networking break with delegates discussing Aadhaar, UPI, and DigiLocker integrations",
        },
      ],
    },
    {
      slug: "huddleglobal",
      name: "Huddle Global Summit",
      date: "November 16-18, 2023",
      location: "Thiruvananthapuram, Kerala",
      coverImage: "/assets/gallery/huddleglobal/1.webp",
      description:
        "Huddle Global 2025 brought together startups, investors, and innovators for a dynamic and impactful experience.With inspiring sessions, meaningful collaborations, and successful matchmaking, it marked a major milestone in India’s startup ecosystem.",
      media: [
        {
          type: "image",
          src: "/assets/gallery/huddleglobal/1.webp",
          alt: "Keynote speaker addressing the audience at Huddle Global summit",
        },
        {
          type: "image",
          src: "/assets/gallery/huddleglobal/2.webp",
          alt: "Panel discussion with industry leaders and innovators",
        },
        {
          type: "image",
          src: "/assets/gallery/huddleglobal/3.webp",
          alt: "Audience engaged during a tech talk session",
        },
        {
          type: "image",
          src: "/assets/gallery/huddleglobal/4.webp",
          alt: "Networking break with delegates exchanging ideas",
        },
        {
          type: "image",
          src: "/assets/gallery/huddleglobal/5.webp",
          alt: "Group photo of speakers and organizers on stage",
        },
        {
          type: "image",
          src: "/assets/gallery/huddleglobal/6.webp",
          alt: "Interactive workshop session with hands-on learning",
        },
        {
          type: "image",
          src: "/assets/gallery/huddleglobal/7.webp",
          alt: "Exhibition hall showcasing innovative projects",
        },
        {
          type: "image",
          src: "/assets/gallery/huddleglobal/8.webp",
          alt: "Closing ceremony with prize distribution",
        },
      ],
    },
    {
      slug: "in50hr",
      name: "In50HRS",
      date: "July 5-7, 2024",
      location: "Integrated Start-up Complex, KSUM, Kochi",
      coverImage: "/assets/gallery/in50hr/1.webp",
      description:
        "A high-octane, 50-hour sprint where innovation meets execution, challenging creators to pitch, prototype, and power up their ideas.",
      media: [
        {
          type: "image",
          src: "/assets/gallery/in50hr/1.webp",
          alt: "Opening ceremony and team formation at In50Hrs hackathon",
        },
        {
          type: "image",
          src: "/assets/gallery/in50hr/2.webp",
          alt: "Participants brainstorming and sketching ideas on whiteboards",
        },
        {
          type: "image",
          src: "/assets/gallery/in50hr/3.webp",
          alt: "Teams coding intensively during the 50-hour development sprint",
        },
        {
          type: "image",
          src: "/assets/gallery/in50hr/4.webp",
          alt: "Mentor providing guidance to a team on their project",
        },
        {
          type: "image",
          src: "/assets/gallery/in50hr/5.webp",
          alt: "Team collaboration during late-night hacking session",
        },
        {
          type: "image",
          src: "/assets/gallery/in50hr/6.webp",
          alt: "Project demo setup and preparation for presentation",
        },
        {
          type: "image",
          src: "/assets/gallery/in50hr/7.webp",
          alt: "Final pitch presentation in front of judges and investors",
        },
        {
          type: "image",
          src: "/assets/gallery/in50hr/8.webp",
          alt: "Award ceremony celebrating winning teams and closing the event",
        },
        {
          type: "image",
          src: "/assets/gallery/in50hr/9.webp",
          alt: "Group photo of all participants and organizers",
        },
      ],
    },
    {
      slug: "launchpad2024",
      name: "Launchpad Kerala 2024",
      month: "July 15, 2024",
      location: "Clubhouse, Technopark, Thiruvananthapuram",
      coverImage: "/assets/gallery/launchpad2024/1.webp",
      description:
        "A skill-driven recruitment initiative by GTech MuLearn and IEEE Kerala Section to bridge the gap between fresh graduates and the IT industry.",
      media: [
        {
          type: "image",
          src: "/assets/gallery/launchpad2024/1.webp",
          alt: "Registration desk with attendees checking in at Launchpad Kerala",
        },
        {
          type: "image",
          src: "/assets/gallery/launchpad2024/2.webp",
          alt: "Company representatives at recruitment booths interacting with candidates",
        },
        {
          type: "image",
          src: "/assets/gallery/launchpad2024/3.webp",
          alt: "Technical interview session between recruiters and job seekers",
        },
        {
          type: "image",
          src: "/assets/gallery/launchpad2024/4.webp",
          alt: "Networking session with professionals sharing contacts and opportunities",
        },
        {
          type: "image",
          src: "/assets/gallery/launchpad2024/5.webp",
          alt: "Panel discussion on career opportunities in technology sector",
        },
      ],
    },
    {
      slug: "mutate2026",
      name: "Mutate 2026",
      date: "March 7-8, 2026",
      location: "Ospyn Technologies, Technopark, Phase 4, Thiruvananthapuram",
      coverImage: "/assets/gallery/mutate2026/1.webp",
      description:
        "Mutate’26 united passionate minds for a day of innovation, collaboration, and learning. Inspiring sessions and meaningful connections made it a truly impactful µLearn experience.",
      media: [
        {
          type: "image",
          src: "/assets/gallery/mutate2026/1.webp",
          alt: "Mutate hackathon main stage with participants ready to innovate",
        },
      ],
    },
    {
      slug: "permute2025",
      name: "Permute 2025",
      date: "March 29, 2025",
      location: "Tagore Theatre, Vazhuthacaud, Thiruvananthapuram, Kerala",
      coverImage: "/assets/gallery/permute2025/1.webp",
      description:
        "India’s largest skill festival brought together innovators, creators, and learners for an unforgettable experience. Filled with inspiring sessions, competitions, and connections, it celebrated talent and collaboration at its best.",
      media: [
        {
          type: "image",
          src: "/assets/gallery/permute2025/1.webp",
          alt: "Inaugural session with the Chief Minister of Kerala at Permute 2025",
        },
        {
          type: "image",
          src: "/assets/gallery/permute2025/2.webp",
          alt: "Keynote address by visionary leaders from the tech industry",
        },
        {
          type: "image",
          src: "/assets/gallery/permute2025/3.webp",
          alt: "Panel discussion on skill development and innovation in Kerala",
        },
        {
          type: "image",
          src: "/assets/gallery/permute2025/4.webp",
          alt: "Audience listening attentively during a thought-provoking session",
        },
        {
          type: "image",
          src: "/assets/gallery/permute2025/5.webp",
          alt: "MoU exchange ceremony between partner organizations",
        },
        {
          type: "image",
          src: "/assets/gallery/permute2025/6.webp",
          alt: "Student projects showcase in the exhibition area",
        },
        {
          type: "image",
          src: "/assets/gallery/permute2025/7.webp",
          alt: "Interactive learning zone with hands-on demonstrations",
        },
        {
          type: "image",
          src: "/assets/gallery/permute2025/8.webp",
          alt: "Networking session with delegates and speakers",
        },
        {
          type: "image",
          src: "/assets/gallery/permute2025/9.webp",
          alt: "Cultural program and talent show during the event",
        },
        {
          type: "image",
          src: "/assets/gallery/permute2025/10.webp",
          alt: "Student volunteers coordinating at the information desk",
        },
        {
          type: "image",
          src: "/assets/gallery/permute2025/11.webp",
          alt: "Workshop session on emerging technologies",
        },
        {
          type: "image",
          src: "/assets/gallery/permute2025/12.webp",
          alt: "Award ceremony recognizing outstanding contributions",
        },
        {
          type: "image",
          src: "/assets/gallery/permute2025/13.webp",
          alt: "Closing ceremony with reflections on the event's impact",
        },
        {
          type: "image",
          src: "/assets/gallery/permute2025/14.webp",
          alt: "Group photo of attendees at Tagore Theatre",
        },
        {
          type: "image",
          src: "/assets/gallery/permute2025/15.webp",
          alt: "Main stage with µLearn branding and lighting setup",
        },
        {
          type: "image",
          src: "/assets/gallery/permute2025/16.webp",
          alt: "Stalls for interest groups showcasing their activities",
        },
        {
          type: "image",
          alt: "Interactive q&a session with speakers",
          src: "/assets/gallery/permute2025/17.webp",
        },
        {
          type: "image",
          alt: "Press meet with media representatives interviewing guests",
          src: "/assets/gallery/permute2025/18.webp",
        },
        {
          type: "image",
          alt: "Exhibition of innovative products and prototypes",
          src: "/assets/gallery/permute2025/19.webp",
        },
        {
          type: "image",
          alt: "Delegates networking in the conference hall",
          src: "/assets/gallery/permute2025/20.webp",
        },
        {
          type: "image",
          alt: "Chief guest lighting the inaugural lamp",
          src: "/assets/gallery/permute2025/21.webp",
        },
        {
          type: "image",
          alt: "Youth audience engaged during the valedictory function",
          src: "/assets/gallery/permute2025/22.webp",
        },
      ],
    },
    {
      slug: "sandshore",
      name: "The Grand Tech Adventure: SandShore",
      date: "November 11-12, 2023",
      location: "Abideep's Paradise, Vadanapilly, Thrissur",
      coverImage: "/assets/gallery/sandshore/1.webp",
      description:
        "A 24-hour offline hackathon by KKEM and Mulearn KMEA featuring AI/ML, AR/VR, Web, and App Development tracks, aimed at fostering creativity and problem-solving beyond traditional boundaries.",
      media: [
        {
          type: "image",
          src: "/assets/gallery/sandshore/1.webp",
          alt: "Participants working at The Grand Tech Adventure: SandShore",
        },
        {
          type: "image",
          src: "/assets/gallery/sandshore/2.webp",
          alt: "Hackathon session in progress at Vadanapilly",
        },
        {
          type: "image",
          src: "/assets/gallery/sandshore/3.webp",
          alt: "Mentorship and collaboration during SandShore hackathon",
        },
        {
          type: "image",
          src: "/assets/gallery/sandshore/4.webp",
          alt: "Closing ceremony of The Grand Tech Adventure: SandShore",
        },
      ],
    },

    {
      slug: "codestorm",
      name: "Grand Tech Adventure: CodeStorm",
      date: "August 19-20, 2023",
      location: "Kerala Knowledge Economy Mission",
      coverImage: "/assets/gallery/codestorm/1.jpeg",
      description:
        "The Grand Tech Adventure: CodeStorm was a 24-hour offline hackathon organized by Kerala Knowledge Economy Mission in association with μLearn KMEA. The event brought together participants from diverse domains to showcase their creativity, technical skills, and problem-solving abilities through a gamified and collaborative competition format.",
      media: [
        {
          type: "image",
          src: "/assets/gallery/codestorm/1.jpeg",
          alt: "Participants coding during The Grand Tech Adventure: CodeStorm",
        },

        {
          type: "image",
          src: "/assets/gallery/codestorm/2.jpeg",
          alt: "Team presenting their prototype at CodeStorm",
        },
      ],
    },

    {
      slug: "olympus-hr-icon",
      name: "OLYMPUS: The HR Icon",
      date: "March 7, 2026",
      location: "Carestack, Technopark, Thiruvananthapuram",
      coverImage: "/assets/gallery/hrOlympus/2.jpeg",
      description:
        "OLYMPUS: The HR Icon is the inaugural flagship hybrid program that brings together students and HR professionals to bridge the gap between academic learning and industry practice. Hosted for management students and HR enthusiasts",
      media: [
        {
          type: "image",
          src: "/assets/gallery/hrOlympus/1.jpeg",
          alt: "Panel discussion at OLYMPUS: The HR Icon",
        },

        {
          type: "image",
          src: "/assets/gallery/hrOlympus/2.jpeg",
          alt: "Workshop session at OLYMPUS: The HR Icon",
        },

        {
          type: "image",
          src: "/assets/gallery/hrOlympus/3.jpeg",
          alt: "Attendees networking at OLYMPUS: The HR Icon",
        },

        {
          type: "image",
          src: "/assets/gallery/hrOlympus/4.jpeg",
          alt: "Group photo from OLYMPUS: The HR Icon",
        },
      ],
    },

    {
      slug: "mucomics",
      name: "Mucomics",
      date: "August 24, 2024",
      location: "MuShack",
      coverImage: "/assets/gallery/Mucomics/1.jpeg",
      description:
        "A community-driven event that brought together comic creators and artists from across Kerala to foster collaboration and strengthen the state's comic creation ecosystem",
      media: [
        {
          type: "image",
          src: "/assets/gallery/Mucomics/1.jpeg",
          alt: "Comic artists collaborating at Mucomics",
        },

        {
          type: "image",
          src: "/assets/gallery/Mucomics/2.jpeg",
          alt: "Sketching and discussions at Mucomics",
        },
      ],
    },

    {
      slug: "muplay",
      name: "μplay",
      date: "July 7, 2024",
      location: "Kerala Startup Mission (KSUM), Kalamassery",
      coverImage: "/assets/gallery/Muplay/1.jpeg",
      description:
        "A community-focused event that introduced a gaming platform built for game developers, gamers, and esports enthusiasts",
      media: [
        {
          type: "image",
          src: "/assets/gallery/Muplay/1.jpeg",
          alt: "Game showcase at μplay",
        },

        {
          type: "image",
          src: "/assets/gallery/Muplay/2.jpeg",
          alt: "Players testing games at μplay",
        },
      ],
    },

    {
      slug: "global-game-jam",
      name: "Global Game Jam 2025",
      date: "January 24-26, 2025",
      location: "Kerala Startup Mission, Kochi",
      coverImage: "/assets/gallery/globalgamejam/1.jpeg",
      description:
        "Global Game Jam 2025 is a 48-hour gaming hackathon that brings together students, professionals, game developers, and gaming enthusiasts to collaborate, innovate, and create games",
      media: [
        {
          type: "image",
          src: "/assets/gallery/globalgamejam/1.jpeg",
          alt: "Teams brainstorming at Global Game Jam 2025",
        },

        {
          type: "image",
          src: "/assets/gallery/globalgamejam/2.jpeg",
          alt: "Prototype testing during Global Game Jam 2025",
        },

        {
          type: "image",
          src: "/assets/gallery/globalgamejam/3.jpeg",
          alt: "Final presentations at Global Game Jam 2025",
        },
      ],
    },
  ] as GalleryEvent[]
).sort((a, b) => {
  const getSortableDate = (event: GalleryEvent) => {
    if (event.date) {
      const match = event.date.match(/([a-zA-Z]+)\s+(\d+).*?(\d{4})/);
      if (match) {
        return new Date(`${match[1]} ${match[2]}, ${match[3]}`).getTime() || 0;
      }
      return new Date(event.date).getTime() || 0;
    }
    if (event.month) {
      return new Date(event.month).getTime() || 0;
    }
    return 0;
  };
  return getSortableDate(b) - getSortableDate(a);
});

export function getGalleryEventBySlug(slug: string): GalleryEvent | undefined {
  return galleryEvents.find((e) => e.slug === slug);
}

export function getGalleryEventSlugs(): string[] {
  return galleryEvents.map((e) => e.slug);
}
