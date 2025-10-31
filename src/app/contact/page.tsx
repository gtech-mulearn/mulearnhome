import ContactForm from "./_components/ContactForm";
import { contactPage, contactInfo } from "@/data/data";
import MuImage from "@/components/MuImage";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-mulearn-gray-50 to-mulearn-whitish">
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 pt-20 md:pt-28 lg:pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Text Content Card */}
            <div className="space-y-6 flex flex-col justify-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-mulearn-blackish leading-tight whitespace-nowrap">
                {contactPage.hero.title.line1}{" "}
                <span className="text-mulearn-trusty-blue">
                  {contactPage.hero.title.line2}
                </span>
              </h1>

              <p className="text-lg md:text-xl text-mulearn-gray-600 leading-relaxed">
                {contactPage.hero.description}
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6 pt-6">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-mulearn-trusty-blue">
                    {contactPage.hero.stats[0].value}
                  </div>
                  <div className="text-sm text-mulearn-gray-600">
                    {contactPage.hero.stats[0].label}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-mulearn-duke-purple">
                    {contactPage.hero.stats[1].value}
                  </div>
                  <div className="text-sm text-mulearn-gray-600">
                    {contactPage.hero.stats[1].label}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-mulearn-trusty-blue">
                    {contactPage.hero.stats[2].value}
                  </div>
                  <div className="text-sm text-mulearn-gray-600">
                    {contactPage.hero.stats[2].label}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Image */}
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
         
      <section className="relative mt-14 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Content */}
            <div className="space-y-8 flex flex-col justify-center">
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl lg:text-5xl font-black text-mulearn-blackish leading-tight">
                  {contactPage.getInTouch.title}
                </h2>
                <p className="text-lg md:text-xl text-mulearn-gray-600 leading-relaxed">
                  {contactPage.getInTouch.description}
                </p>
              </div>

              {/* Contact Details - Desktop Only */}
              <div className="space-y-6 hidden lg:block">
                <h3 className="text-xl md:text-2xl font-semibold text-mulearn-blackish">
                  Other Ways to Connect
                </h3>
                <div className="space-y-4">
                  {/* Email */}
                  <div className="flex items-start gap-4 p-4 rounded-lg bg-mulearn-gray-50 hover:bg-mulearn-gray-100 transition-colors">
                    <div className="w-12 h-12 bg-mulearn-trusty-blue rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-mulearn-blackish mb-1">Email</h4>
                      <p className="text-mulearn-gray-600">{contactInfo.email}</p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4 p-4 rounded-lg bg-mulearn-gray-50 hover:bg-mulearn-gray-100 transition-colors">
                    <div className="w-12 h-12 bg-mulearn-trusty-blue rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-mulearn-blackish mb-1">Phone</h4>
                      <p className="text-mulearn-gray-600">{contactInfo.phone}</p>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start gap-4 p-4 rounded-lg bg-mulearn-gray-50 hover:bg-mulearn-gray-100 transition-colors">
                    <div className="w-12 h-12 bg-mulearn-trusty-blue rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-mulearn-blackish mb-1">Location</h4>
                      <p className="text-mulearn-gray-600">{contactInfo.address}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-full">
                <ContactForm />
              </div>
            </div>

            {/* Contact Details - Mobile Only (Below Form) */}
            <div className="space-y-6 lg:hidden">
              <h3 className="text-xl md:text-2xl font-semibold text-mulearn-blackish">
                Other Ways to Connect
              </h3>
              <div className="space-y-4">
                {/* Email */}
                <div className="flex items-start gap-4 p-4 rounded-lg bg-mulearn-gray-50 hover:bg-mulearn-gray-100 transition-colors">
                  <div className="w-12 h-12 bg-mulearn-trusty-blue rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-mulearn-blackish mb-1">Email</h4>
                    <p className="text-mulearn-gray-600">{contactInfo.email}</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4 p-4 rounded-lg bg-mulearn-gray-50 hover:bg-mulearn-gray-100 transition-colors">
                  <div className="w-12 h-12 bg-mulearn-trusty-blue rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-mulearn-blackish mb-1">Phone</h4>
                    <p className="text-mulearn-gray-600">{contactInfo.phone}</p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4 p-4 rounded-lg bg-mulearn-gray-50 hover:bg-mulearn-gray-100 transition-colors">
                  <div className="w-12 h-12 bg-mulearn-trusty-blue rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-white" />
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
