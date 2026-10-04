import { Globe, Mail, Phone } from "lucide-react";
import Link from "next/link";
import { MotionFooter, MuImage } from "@/components/layouts";
import { CookieSettingsLink, contactInfo, footer, socials } from "@/shared";

export function Footer() {
  return (
    <MotionFooter
      className="bg-mulearn-whitish text-mulearn-blackish px-4 sm:px-6 py-8 sm:py-6 border-t border-mulearn-gray-200"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: "easeOut" },
        },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="max-w-full mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-4 lg:gap-6 mb-6 md:mb-4">
          <div className="lg:col-span-2">
            <div className="flex flex-col md:items-start items-center justify-center space-y-4 md:space-y-3">
              <div className="flex items-center space-x-3">
                <div className="flex items-center justify-center">
                  <div className=" rounded-xl overflow-hidden flex items-center justify-center">
                    <MuImage
                      src="/assets/logo.webp"
                      alt="µLearn Logo"
                      width={180}
                      height={48}
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
              <p className="text-mulearn-gray-600 text-sm text-justify leading-relaxed max-w-md">
                Empowering learners through community-driven education and innovative learning
                pathways. Join us in shaping the future of education.
              </p>
              <div className="flex flex-col space-y-2">
                <h3 className="text-sm font-semibold text-mulearn-blackish uppercase tracking-wide text-center md:text-left">
                  Connect With Us
                </h3>
                <div className="flex space-x-3">
                  {socials.map((social) => {
                    const Icon = social.icon;
                    return (
                      <Link
                        key={social.label}
                        href={social.url}
                        aria-label={social.label}
                        className="w-10 h-10 rounded-lg bg-mulearn-whitish border border-mulearn-gray-200 flex items-center justify-center text-mulearn-gray-600 transition-all duration-300 hover:bg-mulearn hover:text-mulearn-whitish hover:shadow-lg hover:scale-105"
                      >
                        <Icon size={18} />
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {footer.map((section) => (
            <div
              key={section.title}
              className={`space-y-4 text-center lg:text-left ${
                ["Quick Links", "Legal", "Be Part of Us"].includes(section.title)
                  ? "mt-8 lg:mt-12"
                  : ""
              }`}
            >
              <h3 className="text-sm font-semibold text-mulearn-gray-900 uppercase">
                {section.title}
              </h3>
              <ul className="space-y-3 md:space-y-2">
                {section.links.map((link) => (
                  <li key={link.title}>
                    {link.url === "#cookie-settings" ? (
                      <CookieSettingsLink className="text-mulearn-gray-600 hover:text-mulearn-trusty-blue transition-all duration-300 hover:translate-x-1 inline-block text-sm cursor-pointer">
                        {link.title}
                      </CookieSettingsLink>
                    ) : (
                      <Link
                        href={link.url}
                        className="text-mulearn-gray-600 hover:text-mulearn-trusty-blue transition-all duration-300 hover:translate-x-1 inline-block text-sm"
                      >
                        {link.title}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-mulearn-gray-200 my-6 md:my-4"></div>
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 md:space-y-4 lg:space-y-0">
          <div className="text-center lg:text-left">
            <div className="text-sm text-mulearn-blakish-600 font-medium">
              {contactInfo.copyright}
            </div>
            <div className="text-xs text-mulearn-gray-500 mt-1">{contactInfo.address}</div>
          </div>

          <div className="flex flex-wrap justify-center lg:justify-end items-center gap-4 text-sm">
            <Link
              href={`mailto:${contactInfo.email}`}
              className="flex items-center space-x-2 text-mulearn-gray-600 hover:text-mulearn-trusty-blue transition-colors duration-300 group"
            >
              <Mail className="w-4 h-4 text-mulearn-trusty-blue group-hover:scale-110 transition-transform duration-300" />
              <span>{contactInfo.email}</span>
            </Link>

            <Link
              href={`https://${contactInfo.website}`}
              className="flex items-center space-x-2 text-mulearn-gray-600 hover:text-mulearn-trusty-blue transition-colors duration-300 group"
            >
              <Globe className="w-4 h-4 text-mulearn-trusty-blue group-hover:scale-110 transition-transform duration-300" />
              <span>{contactInfo.website}</span>
            </Link>
          </div>
        </div>
      </div>
    </MotionFooter>
  );
}
