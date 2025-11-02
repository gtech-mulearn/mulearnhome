import Link from "next/link";
import { Variants } from "framer-motion";
import { MotionSection, MotionDiv } from "@/components/MuFramer";
import SpecialEventCard from "@/app/(home)/_components/SpecialEventCard";
import { Button } from "@/components/ui/button";
import { specialevents } from "@/data/data";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.42, 0, 0.58, 1] },
  },
};

export default function SpecialEvents() {
  return (
    <div className="max-w-7xl mx-auto px-5 mt-20">
      <MotionSection
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <MotionDiv variants={fadeInUp} className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-mulearn-blackish">
            Special Events
          </h1>
          <h6 className="text-lg text-mulearn-gray-600 max-w-3xl mx-auto">
            Discover exclusive events designed to inspire innovation, enhance
            skills, and foster meaningful connections across technology,
            management, and creativity.
          </h6>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 justify-items-center">
            {specialevents.map((specialevent) => (
              <SpecialEventCard
                key={specialevent.id}
                specialevent={specialevent}
              />
            ))}
          </div>
          <div className="mt-12">
            <Link href="/events">
              <Button variant={"mulearn"} className="px-8 py-3 text-lg">
                View All Events
              </Button>
            </Link>
          </div>
        </MotionDiv>
      </MotionSection>
    </div>
  );
}
