import type { Variants } from "framer-motion";
import { MotionDiv, MotionSection } from "@/components/layouts";
import { comparisons } from "../data/home.data";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.42, 0, 0.58, 1] },
  },
};

export function Comparison() {
  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-32 xl:px-48 w-full">
      <MotionSection
        className="flex flex-col justify-center py-24 pb-0 items-center"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <MotionDiv className="flex flex-col justify-center items-center" variants={fadeInUp}>
          <h2 className="mb-16 text-center">
            <span className="text-mulearn">μLearn</span> is here to solve all your learning problems
          </h2>

          <table className="border-collapse w-full max-w-[800px] mx-auto">
            <thead>
              <tr>
                <th className="pb-4 border-b border-mulearn-greyish text-mulearn-blackish text-lg text-right pr-4">
                  Problems with Existing Systems
                </th>
                <th className="pb-4 border-b border-mulearn-greyish text-mulearn-blackish text-lg text-left pl-4 border-l">
                  How μLearn Works
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisons.map(({ problem, solution, highlight }, _index) => {
                if (highlight) {
                  const [before, after] = solution.split(highlight);
                  return (
                    <tr key={problem}>
                      <td className="py-8 px-4 text-right pr-8">{problem}</td>
                      <td className="py-8 px-4 text-left pl-8 border-l border-mulearn-greyish">
                        {before}
                        <span className="text-mulearn font-bold">{highlight}</span>
                        {after}
                      </td>
                    </tr>
                  );
                }

                return (
                  <tr key={problem}>
                    <td className="py-8 px-4 text-right pr-8">{problem}</td>
                    <td className="py-8 px-4 text-left pl-8 border-l border-mulearn-greyish">
                      {solution}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </MotionDiv>
      </MotionSection>
    </div>
  );
}
