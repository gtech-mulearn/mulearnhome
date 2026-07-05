import { Plus } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function GetInTouch() {
  return (
    <section id="get-in-touch">
      <div className="relative overflow-hidden rounded-3xl bg-mulearn px-6 py-16 text-center">
        <Plus aria-hidden className="absolute left-6 top-6 size-5 text-mulearn-whitish/50" />
        <Plus aria-hidden className="absolute right-8 top-8 size-4 text-mulearn-whitish/40" />
        <Plus aria-hidden className="absolute bottom-8 left-10 size-4 text-mulearn-whitish/40" />

        <div className="mx-auto max-w-2xl">
          <h2 className="text-mulearn-whitish">Be part of the change with µLearn</h2>
          <p className="mt-4 text-base text-mulearn-whitish/90 md:text-lg">
            Join µLearn as an Enabler and empower your campus community.
          </p>
          <div className="mt-8 flex justify-center">
            <Button asChild variant="inverted" size="lg">
              <Link href="/contact">Get in touch</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
