import Hero from "@/app/enablers/_components/HeroEnablers";
import WhoIsEnabler from "@/app/enablers/_components/WhoisEnabler";
import Benefits from "@/app/enablers/_components/Benefits";
import Programs from "@/app/enablers/_components/Programs";
import Onboarding from "@/app/enablers/_components/Onboarding";

export default function Enablers() {
  return (
    <main className="min-h-screen">
      <Hero />
      <WhoIsEnabler />
      <Benefits />
      <Programs />
      <Onboarding />
    </main>
  );
}
