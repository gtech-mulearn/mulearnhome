import { MotionH2 } from "@/components/MuFramer";

export default function Gateway() {
  return (
    <section className="bg-mulearn-whitish py-16 px-4 sm:px-8">
      <div className="max-w-4xl mx-auto">
        <MotionH2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-[44px] font-bold text-center leading-tight tracking-tight"
        >
          <span className="text-[#1A202C]">Your gateway to the </span>
          <span className="text-mulearn-trusty-blue">µLearn </span>
          <span className="text-[#1A202C]">talent pool</span>
        </MotionH2>
      </div>
    </section>
  );
}
