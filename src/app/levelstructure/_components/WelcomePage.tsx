import { MotionDiv } from "@/components/MuFramer";
import Level1Section from "./Level1Section";
import Level2Section from "./Level2Section";
import Level3Section from "./Level3Section";
import Level4Section from "./Level4Section";
import Level5Section from "./Level5Section";
import Level6Section from "./Level6Section";
import Level7Section from "./Level7Section";

export default function WelcomePage() {
  return (
    <MotionDiv
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen w-full bg-mulearn-whitish relative z-50 overflow-x-hidden"
      style={{ minHeight: "100vh" }}
    >
      <Level1Section />
      <Level2Section />
      <Level3Section />
      <Level4Section />
      <Level5Section />
      <Level6Section />
      <Level7Section />
    </MotionDiv>
  );
}
