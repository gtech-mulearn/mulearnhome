import type { Event } from "../types/events.types";

export const events: {
  recurringEvents: {
    weekly: Event[];
  };
} = {
  recurringEvents: {
    weekly: [
      {
        title: "Office Hour",
        description:
          "A space where µLearn members connect, learn, and grow together. Office Hour is our community-driven learning zone — a place to ask questions, share progress, explore ideas, and get guidance from peers and mentors. Whether you're building projects, seeking clarity, or sharing what you’ve learned, Office Hour brings everyone together to empower growth, collaboration, and continuous learning.",
        link: "/events/office-hour",
      },
      {
        title: "Inspiration Station Radio",
        description:
          "Everyone has a story to tell, the story about finding their passion, the story of learning new things and much more. Often times these stories are filled with fun and inspirations which fuel others to start their own journey.",
        link: "/events/inspiration-station",
      },
      {
        title: "Salt Mango Tree",
        description:
          "English! English! English! I avoid I don't like it, but English likes me, I can't avoid! Well since avoiding English isn't an option, let's try to work towards improving our knowledge of English, by practicing, together.",
        link: "/events/salt-mango-tree",
      },
      {
        title: "Grab Your Superpowers",
        description:
          "Weekly sessions to help you unlock new skills and superpowers, guided by mentors and practitioners from across campuses. Each session dives into a fresh topic — from technical deep-dives to career hacks — packed with hands-on activities, real-world examples, and interactive discussions so you walk away with something you can use right away.",
        link: "/events/grab-your-superpowers",
      },
    ],
  },
};
