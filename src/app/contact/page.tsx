import React from "react";
import MuImage from "@/components/MuImage";
import ContactForm from "./_components/ContactForm";

const heroImg = "/assets/contact/contact-us.svg";

export default function ContactPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4 min-h-screen">
      <div className="flex flex-col md:justify-start lg:justify-center lg:-mt-15 items-center md:items-center md:col-span-1">
        <div className="p-4 text-center md:text-center md:max-w-md">
          <h1 className="text-3xl sm:text-4xl md:text-5xl  font-bold">
            Get in{" "}
            <span className="bg-linear-to-r from-mulearn-trusty-blue to-mulearn-duke-purple bg-clip-text text-transparent">
              Touch
            </span>
          </h1>
          <p className="mt-3 text-sm sm:text-base text-muted-foreground">
            Have questions or feedback? Reach out to us.
          </p>

          <div className="mt-6 w-full flex justify-center md:justify-start">
            <MuImage
              src={heroImg}
              alt="Contact Us"
              width={500}
              height={500}
              className="rounded-md w-full h-auto max-w-xs sm:max-w-sm md:max-w-md"
              priority
            />
          </div>
        </div>
      </div>

      <div className="col-span-1 md:col-span-2">
        <ContactForm />
      </div>
    </div>
  );
}
