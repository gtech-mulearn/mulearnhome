import { Asterisk } from "lucide-react";

const Quote = () => {
  return (
    <section className="relative py-8 text-center">
      <div className="mx-auto flex max-w-3xl items-start justify-center gap-3">
        <Asterisk aria-hidden className="mt-1 size-7 shrink-0 text-mulearn-trusty-blue" />
        <p className="text-2xl font-bold leading-snug text-mulearn-blackish md:text-3xl">
          Great teachers don&apos;t just teach — they <span className="text-mulearn">inspire</span>{" "}
          the future.
        </p>
      </div>

      <p className="mt-6 text-sm font-bold text-mulearn-blackish">Art of Teaching</p>
      <p className="text-xs text-mulearn-gray-600">by µLearn Foundation</p>

      <Asterisk aria-hidden className="absolute bottom-0 right-4 size-8 text-category-purple" />
    </section>
  );
};

export default Quote;
