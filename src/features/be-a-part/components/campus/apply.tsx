import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { MotionDiv } from "@/components/layouts";
import { Button } from "@/components/ui/button";

export function Apply() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-32">
      <MotionDiv
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="rounded-3xl bg-mulearn p-12 text-center shadow-xl lg:p-16"
      >
        <h2 className="mb-4 text-3xl sm:text-4xl font-bold text-primary-foreground lg:text-5xl">
          Ready to Start?
        </h2>
        <p className="mb-8 text-lg sm:text-xl text-primary-foreground/90">
          Join the movement. Build your community. Create impact.
        </p>
        <Link
          href="https://airtable.com/appFdefxOwIVlTv1b/shrmtngt3zopg8eVh"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            variant="inverted"
            className="rounded-xl group inline-flex items-center text-center justify-center gap-2 px-4 py-3 text-base md:px-8 w-auto"
          >
            Apply to Start a Chapter
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </MotionDiv>
    </section>
  );
}
