"use client";

import { Mail, MapPin } from "lucide-react";
import { Suspense } from "react";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import MuImage from "@/components/MuImage";
import { contactInfo, contactPage } from "@/data/common";
import { clientEnv } from "@/lib/env/env.client";
import ContactForm from "./_components/ContactForm";
import ContactStats from "./_components/ContactStats";

export default function ContactPage() {
  const recaptchaKey: string | undefined = clientEnv.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 pt-20 md:pt-28 lg:pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-6 flex flex-col justify-center">
              <h1 className="whitespace-nowrap">
                {contactPage.hero.title.line1}{" "}
                <span className="text-mulearn">{contactPage.hero.title.line2}</span>
              </h1>

              <p className="text-lg md:text-xl text-mulearn-gray-600 leading-relaxed">
                {contactPage.hero.description}
              </p>

              <ContactStats />
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md">
                <MuImage
                  src="/assets/contact/contact-us.svg"
                  alt="Contact Us"
                  width={500}
                  height={500}
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="get-in-touch" className="relative mt-14 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8 flex flex-col justify-center">
              <div className="space-y-6">
                <h2>{contactPage.getInTouch.title}</h2>
                <p className="text-lg md:text-xl text-mulearn-gray-600 leading-relaxed">
                  {contactPage.getInTouch.description}
                </p>
              </div>

              <div className="space-y-6 hidden lg:block">
                <h3>Other Ways to Connect</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 rounded-lg bg-mulearn-gray-50 hover:bg-mulearn-gray-100 transition-colors">
                    <div className="w-12 h-12 bg-mulearn rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-mulearn-whitish" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-mulearn-blackish mb-1">Email</h4>
                      <p className="text-mulearn-gray-600">{contactInfo.email}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-lg bg-mulearn-gray-50 hover:bg-mulearn-gray-100 transition-colors">
                    <div className="w-12 h-12 bg-mulearn rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-mulearn-whitish" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-mulearn-blackish mb-1">Location</h4>
                      <p className="text-mulearn-gray-600">{contactInfo.address}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="w-full">
                <GoogleReCaptchaProvider
                  reCaptchaKey={recaptchaKey ?? "NOT DEFINED"}
                  scriptProps={{
                    async: false,
                    defer: false,
                    appendTo: "head",
                    nonce: undefined,
                  }}
                >
                  <Suspense fallback={<div>Loading form...</div>}>
                    <ContactForm />
                  </Suspense>
                </GoogleReCaptchaProvider>
              </div>
            </div>

            <div className="space-y-6 lg:hidden">
              <h3>Other Ways to Connect</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-lg bg-mulearn-gray-50 hover:bg-mulearn-gray-100 transition-colors">
                  <div className="w-12 h-12 bg-mulearn rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-mulearn-whitish" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-mulearn-blackish mb-1">Email</h4>
                    <p className="text-mulearn-gray-600">{contactInfo.email}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-lg bg-mulearn-gray-50 hover:bg-mulearn-gray-100 transition-colors">
                  <div className="w-12 h-12 bg-mulearn rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-mulearn-whitish" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-mulearn-blackish mb-1">Location</h4>
                    <p className="text-mulearn-gray-600">{contactInfo.address}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
