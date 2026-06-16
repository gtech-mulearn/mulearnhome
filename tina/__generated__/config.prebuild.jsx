// tina/config.ts
import { defineConfig } from "tinacms";
var branch = process.env.GITHUB_BRANCH || process.env.VERCEL_GIT_COMMIT_REF || process.env.HEAD || "production";
var config_default = defineConfig({
  branch,
  // TinaCloud credentials (only include if available)
  ...process.env.NEXT_PUBLIC_TINA_CLIENT_ID && {
    clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID
  },
  ...process.env.TINA_TOKEN && {
    token: process.env.TINA_TOKEN
  },
  build: {
    outputFolder: "admin",
    publicFolder: "public"
  },
  media: {
    tina: {
      mediaRoot: "assets/events",
      publicFolder: "public"
    }
  },
  schema: {
    collections: [
      // Events (individual files for main events like Top 100, Permute, etc.)
      {
        name: "event",
        label: "Events",
        path: "content/events",
        format: "json",
        ui: {
          filename: {
            readonly: false,
            slugify: (values) => {
              return `${values?.title?.toLowerCase().replace(/\s+/g, "-") || "new-event"}`;
            }
          }
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true
          },
          {
            type: "string",
            name: "date",
            label: "Date",
            description: "e.g., 'Oct 1-31, 2025' or 'Every Tuesday'"
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            ui: { component: "textarea" }
          },
          {
            type: "string",
            name: "link",
            label: "Link URL"
          },
          {
            type: "image",
            name: "image",
            label: "Event Image"
          },
          {
            type: "boolean",
            name: "isLive",
            label: "Is Live?"
          },
          {
            type: "string",
            name: "category",
            label: "Category",
            required: true,
            options: [
              { label: "Latest Events", value: "latest" },
              { label: "Past Events", value: "past" },
              { label: "Flagship Events", value: "flagship" },
              { label: "Weekly Events", value: "weekly" },
              { label: "Biweekly Events", value: "biweekly" },
              { label: "Monthly Events", value: "monthly" }
            ]
          },
          {
            type: "number",
            name: "order",
            label: "Display Order"
          }
        ]
      },
      // Office Hours - Single file with array of sessions
      {
        name: "officeHours",
        label: "Office Hours",
        path: "content",
        format: "json",
        match: { include: "office-hours" },
        fields: [
          {
            type: "object",
            name: "sessions",
            label: "Sessions",
            list: true,
            ui: {
              itemProps: (item) => ({
                label: item?.title || "New Session"
              })
            },
            fields: [
              { type: "string", name: "title", label: "Title", required: true },
              { type: "string", name: "performer", label: "Speaker/Host" },
              {
                type: "string",
                name: "designation",
                label: "Speaker Designation",
                description: "e.g., Senior Developer, Tech Lead, Product Manager"
              },
              {
                type: "string",
                name: "description",
                label: "Description",
                ui: { component: "textarea" }
              },
              {
                type: "string",
                name: "date",
                label: "Date",
                description: "Format: DD/MM/YYYY - Events are automatically marked as upcoming/past based on this date",
                required: true
              },
              {
                type: "string",
                name: "link",
                label: "Event Link",
                description: "Optional link for the session (shown only for upcoming events)"
              },
              {
                type: "string",
                name: "interestGroups",
                label: "Interest Groups",
                description: "Select one or more Interest Groups related to this session",
                list: true,
                options: [
                  { label: "UI/UX", value: "ui-ux" },
                  { label: "Web Development", value: "web-development" },
                  { label: "Product Management", value: "product-management" },
                  { label: "DevOps", value: "devops" },
                  { label: "Game Dev", value: "game-dev" },
                  { label: "No Or Low Code", value: "no-low-code" },
                  { label: "Entrepreneurship", value: "entrepreneurship" },
                  { label: "AR/VR/MR", value: "ar-vr-mr" },
                  { label: "Cyber Security", value: "cyber-security" },
                  { label: "Mobile Development", value: "mobile-development" },
                  { label: "Data Analytics", value: "data-analytics" },
                  { label: "Space", value: "space" },
                  { label: "AI", value: "ai" },
                  { label: "Comics", value: "comics" },
                  { label: "Digital Marketing", value: "digital-marketing" },
                  { label: "MuV", value: "muv" },
                  { label: "Generative AI", value: "generative-ai" },
                  { label: "Data Structures and Algorithm", value: "dsa" },
                  { label: "Blockchain", value: "blockchain" },
                  { label: "Data Science", value: "data-science" },
                  { label: "Project Management", value: "project-management" },
                  { label: "Quantum Computing", value: "quantum-computing" },
                  { label: "Strategic Leadership", value: "strategic-leadership" },
                  { label: "Civil", value: "civil" },
                  { label: "Internet Of Things (IOT) And Robotics", value: "iot-robotics" },
                  { label: "Creative Design", value: "creative-design" },
                  { label: "Beckn", value: "beckn" },
                  { label: "Quality Assurance", value: "quality-assurance" },
                  { label: "Human Resources", value: "human-resources" },
                  { label: "Cloud", value: "cloud" }
                ]
              },
              {
                type: "image",
                name: "poster_thumbnail",
                label: "Poster Thumbnail",
                description: "Image to display on the event card instead of the default icon"
              }
            ]
          }
        ]
      },
      // Salt Mango Tree - Single file with array of episodes
      {
        name: "saltMangoTree",
        label: "Salt Mango Tree",
        path: "content",
        format: "json",
        match: { include: "salt-mango-tree" },
        fields: [
          {
            type: "object",
            name: "episodes",
            label: "Episodes",
            list: true,
            ui: {
              itemProps: (item) => ({
                label: item?.topic || "New Episode"
              })
            },
            fields: [
              { type: "string", name: "topic", label: "Topic", required: true },
              { type: "string", name: "campus", label: "Campus", required: true },
              {
                type: "string",
                name: "zone",
                label: "Zone",
                options: ["North", "Central", "South"]
              },
              {
                type: "string",
                name: "date",
                label: "Date",
                description: "Format: YYYY-MM-DD - Episodes are automatically marked as upcoming/past based on this date",
                required: true
              },
              {
                type: "string",
                name: "description",
                label: "Description",
                ui: { component: "textarea" }
              },
              {
                type: "string",
                name: "link",
                label: "Event Link",
                description: "Optional link for the episode (shown only for upcoming events)"
              }
            ]
          }
        ]
      },
      // Inspiration Station Radio - Single file with array of episodes
      {
        name: "inspirationStation",
        label: "Inspiration Station Radio",
        path: "content",
        format: "json",
        match: { include: "inspiration-station" },
        fields: [
          {
            type: "object",
            name: "episodes",
            label: "Episodes",
            list: true,
            ui: {
              itemProps: (item) => ({
                label: `${item?.campus || "New Episode"}`
              })
            },
            fields: [
              { type: "string", name: "topic", label: "Topic", required: true },
              { type: "string", name: "campus", label: "Campus", required: true },
              {
                type: "string",
                name: "zone",
                label: "Zone",
                options: ["North", "Central", "South"]
              },
              {
                type: "string",
                name: "date",
                label: "Date",
                description: "Format: YYYY-MM-DD - Episodes are automatically marked as upcoming/past based on this date",
                required: true
              },
              {
                type: "string",
                name: "description",
                label: "Description",
                ui: { component: "textarea" }
              },
              {
                type: "string",
                name: "link",
                label: "Event Link",
                description: "Optional link for the episode (shown only for upcoming events)"
              }
            ]
          }
        ]
      },
      // Special Events (Home Page) - Individual files
      {
        name: "specialEvent",
        label: "Special Events (Home)",
        path: "content/special-events",
        format: "json",
        fields: [
          { type: "string", name: "title", label: "Title", isTitle: true, required: true },
          {
            type: "string",
            name: "description",
            label: "Description",
            ui: { component: "textarea" }
          },
          { type: "string", name: "link", label: "Link URL" },
          { type: "image", name: "image", label: "Event Image" },
          { type: "boolean", name: "isLive", label: "Is Live?" },
          { type: "number", name: "order", label: "Display Order" }
        ]
      }
    ]
  }
});
export {
  config_default as default
};
