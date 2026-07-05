import type { Variants } from "framer-motion";
import { MotionDiv, MotionP } from "@/components/MuFramer";
import MuImage from "@/components/MuImage";
import { cdnUrl } from "@/services/cdn";

const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.42, 0, 0.58, 1] } },
};

const slideInRight: Variants = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.42, 0, 0.58, 1] } },
};

const curators = [
  { src: cdnUrl("src/modules/Public/KKEM/assets/im7.webp"), alt: "Curator" },
  { src: cdnUrl("src/modules/Public/KKEM/assets/im9.webp"), alt: "Curator" },
  { src: cdnUrl("src/modules/Public/KKEM/assets/im10.webp"), alt: "Curator" },
];

export default function IGAbout() {
  return (
    <section
      id="about"
      className="flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-12"
    >
      <MotionDiv
        className="flex-1"
        variants={slideInLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h1 className="text-4xl md:text-5xl">
          <span className="text-mulearn">μLearn</span> Interest Groups
        </h1>

        <MotionP
          className="mt-6 max-w-md text-base leading-relaxed text-mulearn-gray-600 md:text-lg"
          variants={slideInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Discover your passion, collaborate with like-minded individuals, and embark on a
          transformative learning journey.
        </MotionP>
        <MotionP
          className="mt-4 max-w-md text-base leading-relaxed text-mulearn-gray-600 md:text-lg"
          variants={slideInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Join our vibrant community of students and explore a wide range of interest areas, from
          coding to design, entrepreneurship to data science.
        </MotionP>

        <p className="mt-10 text-xs font-bold uppercase tracking-widest text-mulearn-blackish">
          Curated by
        </p>
        <div className="mt-4 flex items-center gap-3">
          <div className="flex items-center -space-x-2">
            {curators.map((curator, index) => (
              <MuImage
                // biome-ignore lint/suspicious/noArrayIndexKey: static curator avatars
                key={index}
                src={curator.src}
                alt={curator.alt}
                width={40}
                height={40}
                className="size-10 rounded-full object-cover ring-2 ring-background"
              />
            ))}
          </div>
          <span className="text-sm text-mulearn-gray-600">and more…</span>
        </div>
      </MotionDiv>

      <MotionDiv
        className="flex w-full flex-1 items-center justify-center lg:justify-end"
        variants={slideInRight}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <MuImage
          src="/assets/kkem/kkem-hero.svg"
          alt="Illustration of a team collaborating"
          width={560}
          height={440}
          priority
          className="h-auto w-full max-w-xl"
        />
      </MotionDiv>
    </section>
  );
}
