import type { Variants } from "framer-motion";
import Link from "next/link";
import { MotionDiv, MotionSection, MuImage } from "@/components/layouts";
import { Button } from "@/components/ui/button";
import { cdnUrl } from "@/shared";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.42, 0, 0.58, 1] },
  },
};

const community = cdnUrl("/public/assets/home/join.webp");

export function Community() {
  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-32 xl:px-48 w-full">
      <MotionSection
        className="grid grid-cols-1 lg:grid-cols-2 gap-5 py-12"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <MotionDiv
          className="flex flex-col items-start sm:items-center justify-center max-w-[40rem]"
          variants={fadeInUp}
        >
          <h2 className="text-center max-w-[40rem] mb-5">
            Learn and Grow <span className="text-mulearn">Together</span> as a{" "}
            <span className="text-mulearn">Community</span>
          </h2>
          <p className="font-normal mb-8 max-w-[800px] text-jusify text-lg sm:text-xl text-mulearn-gray-600 mt-2.5">
            Are you ready to learn, grow, and upskill yourself to the next level? Come, be a part of
            the community, and let&apos;s start learning in a new, better way. Call your friends as
            well because things are going to change once you experience it, and it is more effective
            when done in a group.
          </p>

          <Link
            href="https://discord.com/invite/gtech-mulearn-771670169691881483"
            target="_blank"
            rel="noopener noreferrer"
            className="self-center sm:self-auto"
          >
            <Button variant={"default"} className="font-semibold px-6 py-3">
              Join The Community
            </Button>
          </Link>
        </MotionDiv>

        <MotionDiv variants={fadeInUp} className="flex justify-center items-center">
          <MuImage
            src={community}
            alt="Join community"
            height={640}
            width={640}
            className="object-contain max-w-full max-h-full"
            style={{ width: "auto" }}
            loading="lazy"
            quality={75}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </MotionDiv>
      </MotionSection>
    </div>
  );
}
