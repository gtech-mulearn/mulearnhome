export const navItems = [
  {
    label: "About",
    submenu: {
      "KEY PAGES": [
        { label: "MANIFESTO", href: "/manifesto" },
        { label: "Team", href: "/team" },
        { label: "Enablers", href: "/enablers" },
      ],
      Partners: [
        { label: "COMMUNITY PARTNERS", href: "/community-partners" },
        { label: "COMPANY PARTNERS", href: "/company-partners" },
      ],
      EVENTS: [
        { label: "GLOBAL CALENDAR", href: "/events/calendar" },
        { label: "ANNOUNCEMENTS", href: "/events/announcements" },
        { label: "WEEKLY EVENTS", href: "/events/weekly" },
      ],
      Programs: [
        { label: "LAUNCHPAD", href: "/launchpad" },
        { label: "PERMUTE", href: "https://permute.mulearn.org/" },
        { label: "TOP100SERIES", href: "https://top100coders.com/" },
        { label: "Art of Teaching", href: "/artofteaching" },
        { label: "IN50HOURS", href: "/in50hours" },
      ],
      OTHERS: [
        {
          label: "NEWSLETTER",
          href: "https://online.fliphtml5.com/slydm/yljq/",
        },
      ],
    },
  },
  {
    label: "Why μLearn?",
    href: "https://youtu.be/ehdSEL_s050",
    submenu: null,
  },
  {
    label: "Be A Part of Us",
    submenu: {
      "Join Us": [
        { label: "Company", href: "/be-a-part/company" },
        { label: "Campus", href: "/be-a-part/campus" },
        {
          label: "Campus Logo Generator",
          href: "/campus-logo-generator",
        },
      ],
    },
  },
  {
    label: "Mentorship",
    href: "/dashboard/search?activetab=mentors",
    submenu: null,
  },
  {
    label: "Learning",
    href: "/dashboard/learningcircle",
    submenu: {
      Explore: [
        { label: "Interest Groups", href: "/dashboard/interestgroups" },
        { label: "Learning Circle", href: "/dashboard/learningcircle" },
        { label: "Learning Paths", href: "/dashboard/mujourney" },
      ],
    },
  },
  {
    label: "Donate",
    href: "/donation",
    submenu: null,
  },
];
