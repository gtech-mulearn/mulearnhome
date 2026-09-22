import { SparklesIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function GetInTouch() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 lg:px-8 lg:py-16">
      {/* Banner card */}
      <div className="relative w-full rounded-[20px] shadow-lg overflow-hidden bg-mulearn min-h-[24rem] flex items-center justify-center">
        {/* ── Desktop sparkles ── */}
        <div className="hidden md:block absolute" style={{ left: "18%", top: "35%" }}>
          <SparklesIcon size={44} className="fill-mulearn-whitish text-mulearn-whitish" />
        </div>
        <div className="hidden md:block absolute" style={{ left: "62%", top: "18%" }}>
          <SparklesIcon size={18} className="fill-mulearn-whitish text-mulearn-whitish" />
        </div>
        <div className="hidden md:block absolute" style={{ left: "53%", bottom: "18%" }}>
          <SparklesIcon size={40} className="fill-mulearn-whitish text-mulearn-whitish" />
        </div>
        <div className="hidden md:block absolute" style={{ right: "12%", top: "42%" }}>
          <SparklesIcon size={22} className="fill-mulearn-whitish text-mulearn-whitish" />
        </div>

        {/* ── Mobile corner sparkles ── */}
        {/* Top-left small */}
        <div className="md:hidden absolute top-4 left-5">
          <SparklesIcon size={14} className="fill-mulearn-whitish text-mulearn-whitish" />
        </div>
        {/* Top-left large */}
        <div className="md:hidden absolute top-10 left-4">
          <SparklesIcon size={44} className="fill-mulearn-whitish text-mulearn-whitish" />
        </div>
        {/* Top-right small */}
        <div className="md:hidden absolute top-5 right-6">
          <SparklesIcon size={16} className="fill-mulearn-whitish text-mulearn-whitish" />
        </div>
        {/* Bottom-left */}
        <div className="md:hidden absolute bottom-6 left-5">
          <SparklesIcon size={26} className="fill-mulearn-whitish text-mulearn-whitish" />
        </div>
        {/* Bottom-right small */}
        <div className="md:hidden absolute bottom-8 right-5">
          <SparklesIcon size={40} className="fill-mulearn-whitish text-mulearn-whitish" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center gap-8 px-6 py-16 max-w-4xl w-full text-center">
          {/* Heading + subtitle */}
          <div className="flex flex-col items-center gap-4">
            <h2 className="md:whitespace-nowrap text-4xl lg:text-5xl font-bold leading-[62.40px]">
              <span>Be part of the change with </span>
              <span className="text-mulearn-whitish">µLearn</span>
            </h2>
            <p className="text-mulearn-whitish text-lg font-normal leading-8">
              Join µLearn as an Enabler and empower your campus community.
            </p>
          </div>

          {/* CTA Button */}
          <Link href="/contact">
            <Button variant={"inverted"} className="w-72">
              Get in touch
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
