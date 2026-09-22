import { serverEnv } from "@/config/env.server";
import type { EmailData } from "../schemas/contact.schema";

function createEmbed(data: EmailData) {
  const fields = [
    { name: "Email", value: data.email, inline: true },
    { name: "Phone", value: data.phone || "Not provided", inline: true },
    { name: "Region", value: data.region || "Not provided", inline: true },
  ];

  if (data.intent === "student") {
    if (data.institution)
      fields.push({ name: "Institution", value: data.institution, inline: false });
    if (data.courseYear)
      fields.push({ name: "Course & Year", value: data.courseYear, inline: true });
    if (data.campusChapter)
      fields.push({ name: "Chapter Status", value: data.campusChapter, inline: true });
    if (data.interestGroups)
      fields.push({ name: "Interest Groups", value: data.interestGroups, inline: false });
  } else if (data.intent === "partner") {
    if (data.organization)
      fields.push({ name: "Organization", value: data.organization, inline: true });
    if (data.organizationType)
      fields.push({ name: "Type", value: data.organizationType, inline: true });
    if (data.focusArea) fields.push({ name: "Focus Area", value: data.focusArea, inline: true });
    if (data.timeline) fields.push({ name: "Timeline", value: data.timeline, inline: true });
  } else if (data.intent === "program") {
    if (data.programType)
      fields.push({ name: "Program Type", value: data.programType, inline: true });
    if (data.targetCohort)
      fields.push({ name: "Target Cohort", value: data.targetCohort, inline: true });
    if (data.timeline) fields.push({ name: "Timeline", value: data.timeline, inline: true });
    if (data.budget) fields.push({ name: "Budget", value: data.budget, inline: true });
  } else if (data.intent === "hiring") {
    if (data.role) fields.push({ name: "Role", value: data.role, inline: true });
    if (data.numberOfHires) fields.push({ name: "Count", value: data.numberOfHires, inline: true });
    if (data.budget) fields.push({ name: "Compensation", value: data.budget, inline: true });
    if (data.skills) fields.push({ name: "Skills", value: data.skills, inline: false });
  } else if (data.intent === "events") {
    if (data.eventName) fields.push({ name: "Event Name", value: data.eventName, inline: true });
    if (data.eventDate) fields.push({ name: "Event Date", value: data.eventDate, inline: true });
  } else if (data.intent === "media") {
    if (data.outlet) fields.push({ name: "Outlet", value: data.outlet, inline: true });
    if (data.deadline) fields.push({ name: "Deadline", value: data.deadline, inline: true });
  } else if (data.intent === "support") {
    if (data.issueCategory)
      fields.push({ name: "Category", value: data.issueCategory, inline: true });
  }

  if (data.ticketId) {
    fields.unshift({ name: "Ticket ID", value: data.ticketId, inline: false });
  }

  fields.push({ name: "Message", value: data.message, inline: false });

  const colors: Record<string, number> = {
    student: 0x3498db,
    partner: 0x9b59b6,
    program: 0xe67e22,
    hiring: 0x2ecc71,
    events: 0xf1c40f,
    media: 0xe74c3c,
    support: 0x95a5a6,
    other: 0x34495e,
  };

  return {
    title: `New Contact Form Submission: ${data.intent.toUpperCase()}`,
    description: `From **${data.name}**`,
    color: colors[data.intent] || 0x34495e,
    fields: fields,
    timestamp: new Date().toISOString(),
    footer: {
      text: "μLearn Contact Form",
    },
  };
}

export async function sendContactNotification(
  data: EmailData,
): Promise<{ success: boolean; message: string }> {
  try {
    const embed = createEmbed(data);

    const response = await fetch(serverEnv.DISCORD_CONTACT_WEBHOOK, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        embeds: [embed],
      }),
    });

    if (!response.ok) {
      throw new Error(`Discord API responded with ${response.status}`);
    }

    return {
      success: true,
      message: "Notification sent successfully",
    };
  } catch (error) {
    console.error("Discord webhook error:", error);
    return {
      success: false,
      message: "Failed to send notification",
    };
  }
}
