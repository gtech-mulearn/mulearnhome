import ContactForm from "./_components/ContactForm";
import { contactPage } from "@/data/data";
import { MessageCircle, Users, Building } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-mulearn-gray-50 to-mulearn-whitish">
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 pt-20 md:pt-28 lg:pt-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content Card */}
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-mulearn-trusty-blue/10 border border-mulearn-trusty-blue/20 mb-4">
                <span className="text-sm font-medium text-mulearn-trusty-blue">
                  {contactPage.hero.badge}
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-mulearn-blackish leading-tight">
                {contactPage.hero.title.line1}
                <span className="block bg-gradient-to-r from-mulearn-trusty-blue to-mulearn-duke-purple bg-clip-text text-transparent">
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

            {/* Fixed Icons Section */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md">
                <div className="hidden lg:grid lg:grid-cols-2 gap-8 p-8">
                  <div className="w-32 h-32 bg-gradient-to-br from-mulearn-trusty-blue/20 to-mulearn-duke-purple/20 rounded-2xl flex items-center justify-center">
                    <MessageCircle className="w-12 h-12 text-mulearn-trusty-blue" />
                  </div>
                  <div className="w-32 h-32 bg-gradient-to-br from-mulearn-duke-purple/20 to-mulearn-trusty-blue/20 rounded-2xl flex items-center justify-center mt-16">
                    <Users className="w-12 h-12 text-mulearn-duke-purple" />
                  </div>
                  <div className="w-32 h-32 bg-gradient-to-br from-mulearn-trusty-blue/20 to-mulearn-duke-purple/20 rounded-2xl flex items-center justify-center -translate-y-8">
                    <Building className="w-12 h-12 text-mulearn-trusty-blue" />
                  </div>
                </div>

                <div className="lg:hidden flex justify-center items-center gap-6 py-8">
                  <div className="w-24 h-24 bg-gradient-to-br from-mulearn-trusty-blue/20 to-mulearn-duke-purple/20 rounded-2xl flex items-center justify-center">
                    <MessageCircle className="w-10 h-10 text-mulearn-trusty-blue" />
                  </div>
                  <div className="w-24 h-24 bg-gradient-to-br from-mulearn-duke-purple/20 to-mulearn-trusty-blue/20 rounded-2xl flex items-center justify-center">
                    <Users className="w-10 h-10 text-mulearn-duke-purple" />
                  </div>
                  <div className="w-24 h-24 bg-gradient-to-br from-mulearn-trusty-blue/20 to-mulearn-duke-purple/20 rounded-2xl flex items-center justify-center">
                    <Building className="w-10 h-10 text-mulearn-trusty-blue" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-20 pb-8 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-mulearn-blackish mb-4">
            {contactPage.getInTouch.title}
          </h1>
          <p className="text-lg text-mulearn-gray-600 max-w-2xl mx-auto mb-8">
            {contactPage.getInTouch.description}
          </p>
        </div>
      </section>

      <section className="py-4 px-6">
        <div className="max-w-2xl mx-auto">
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
