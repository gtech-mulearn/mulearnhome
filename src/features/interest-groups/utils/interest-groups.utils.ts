import { interestGroups } from "../data/interest-groups.data";
import type { InterestGroupLocalMeta } from "../types/interest-groups.types";

const DEFAULT_NEUTRAL_IMAGE = "/assets/interestgroups/webdev.svg";

function normalizeName(str: string): string {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "")
    .replace(/interestgroup|ig$/g, "");
}

function byName(name: string): InterestGroupLocalMeta | undefined {
  return interestGroups.find((g) => g.name === name);
}

/**
 * The backend's IG names drift from the marketing copy in `interest-groups.data.ts` (typos,
 * abbreviations, legacy request-form names). Match on a normalized name first, then fall back
 * to keyword heuristics collected from real API payloads before giving up.
 */
export function getPresentationMetadata(apiName: string): InterestGroupLocalMeta | undefined {
  const normApi = normalizeName(apiName);

  const exact = interestGroups.find((local) => normalizeName(local.name) === normApi);
  if (exact) return exact;

  if (normApi.includes("uiux") || normApi.includes("uxui")) return byName("UI/UX");
  if (normApi.includes("creativedesign")) return byName("Creative Design");
  if (normApi.includes("arvr") || normApi.includes("vrar") || normApi.includes("arvrmr"))
    return byName("AR/VR");
  if (normApi.includes("cyber")) return byName("Cybersecurity");
  if (normApi.includes("blockchain")) return byName("Blockchain");
  if (
    normApi.includes("gamedevelopment") ||
    normApi.includes("gamedev") ||
    normApi.includes("3danimationandgamedevelopment")
  )
    return byName("Game Development");
  if (normApi.includes("cloud") || normApi.includes("devops")) return byName("Cloud and DevOps");
  if (
    normApi.includes("testing") ||
    normApi.includes("qualityassurance") ||
    normApi.includes("sample")
  )
    return byName("Quality Assurance");
  if (normApi.includes("marketing")) return byName("Digital Marketing");
  if (
    normApi.includes("webdev") ||
    normApi.includes("webdevelopment") ||
    normApi.includes("igreq01edited")
  )
    return byName("Web Development");
  if (
    normApi.includes("lowcode") ||
    normApi.includes("nocode") ||
    normApi.includes("noorlowcode") ||
    normApi.includes("igreq05edited")
  )
    return byName("No Or Low Code");
  if (normApi.includes("mobile")) return byName("Mobile Development");
  if (normApi.includes("competitivecoding") || normApi.includes("cp"))
    return byName("Competitive Coding");
  if (
    normApi.includes("aiml") ||
    normApi.includes("machinelearning") ||
    normApi.includes("artificialintelligence") ||
    normApi.includes("deeplearning")
  )
    return byName("AI & Machine Learning");
  if (normApi.includes("quantum")) return byName("Quantum Computing");
  if (normApi.includes("dataanalytics") || normApi.includes("analytics"))
    return byName("Data Analytics");
  if (normApi.includes("entrepreneur")) return byName("Entrepreneurship");
  if (normApi.includes("iot") || normApi.includes("robotics"))
    return byName("Internet Of Things (IOT) And Robotics");
  if (normApi.includes("civil")) return byName("Civil Engineering");
  if (normApi.includes("leadership") || normApi.includes("ellamgoodinu"))
    return byName("Strategic Leadership");
  if (normApi.includes("socialgood")) return byName("AI for Social Good");
  if (normApi.includes("beckn")) return byName("Beckn Protocol");

  return byName("Creative Design");
}

/** `machine learning` / `deep learning` are API-only names with no local marketing entry. */
export function resolveGroupImage(
  apiName: string,
  apiImage?: string | null,
  apiIcon?: string | null,
): string {
  const lower = apiName.toLowerCase();
  if (lower === "machine learning") return "/assets/interestgroups/machine-learning.svg";
  if (lower === "deep learning") return "/assets/interestgroups/deep-learning.svg";
  return apiImage || apiIcon || getPresentationMetadata(apiName)?.image || DEFAULT_NEUTRAL_IMAGE;
}
