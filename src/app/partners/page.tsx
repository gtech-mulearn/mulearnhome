import { MotionDiv } from "@/components/MuFramer";
import Link from "next/link";
import { ArrowRight, Users, Building2, Target, Rocket } from "lucide-react";
import MuImage from "@/components/MuImage";

export default function PartnersPage() {
  return (
    <div className="min-h-screen bg-mulearn-whitish relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-linear-to-r from-mulearn-trusty-blue/5 to-mulearn-duke-purple/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-linear-to-r from-mulearn-trusty-blue/5 to-mulearn-duke-purple/5 rounded-full blur-3xl -z-10" />

      <section className="px-4 sm:px-8 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <MotionDiv
              className="space-y-6 text-center lg:text-left"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#212121] leading-tight">
                Our{" "}
                <span className="text-mulearn-trusty-blue relative">
                  Partners
                  <svg
                    className="absolute -bottom-2 left-0 w-full"
                    viewBox="0 0 200 12"
                    fill="none"
                  >
                    <defs>
                      <linearGradient
                        id="trustyGradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                      >
                        <stop offset="0%" stopColor="#2E85FE" />
                        <stop offset="100%" stopColor="#AF2EE6" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M2 10C50 5 150 5 198 10"
                      stroke="url(#trustyGradient)"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-mulearn-blackish max-w-2xl mx-auto lg:mx-0">
                Collaborating with incredible organizations and communities to
                empower learners and drive innovation across the ecosystem.
              </p>
            </MotionDiv>

            <MotionDiv
              className="relative w-full h-64 sm:h-80 lg:h-96"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative w-full h-full rounded-2xl overflow-hidden ">
                <MuImage
                  src="/assets/partners/illus.png"
                  alt="Partnership collaboration"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                  priority
                />
              </div>
            </MotionDiv>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-8 py-12 sm:py-16 bg-[#F5F5F5] relative">
        <div className="max-w-7xl mx-auto">
          <MotionDiv
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#212121] mb-4">
              Explore Our{" "}
              <span className="text-mulearn-trusty-blue">
                Partnership Network
              </span>
            </h2>
            <p className="text-mulearn-blackish text-lg max-w-2xl mx-auto">
              Discover the communities and companies that make our ecosystem
              thrive
            </p>
          </MotionDiv>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            <MotionDiv
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Link href="/partners/community-partners" className="block group">
                <div className="bg-mulearn-whitish rounded-2xl shadow-[1px_1px_45px_-5px_rgba(0,0,0,0.08)] overflow-hidden h-full hover:shadow-[1px_1px_60px_-5px_rgba(69,111,246,0.15)] transition-all duration-300 hover:-translate-y-2">
                  <div className="relative w-full h-48 sm:h-56 overflow-hidden">
                    <MuImage
                      src="/assets/partners/community.svg"
                      alt="Community Partners"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
                  </div>

                  <div className="p-6 sm:p-8 space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-linear-to-r from-mulearn-trusty-blue/10 to-mulearn-duke-purple/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                        <Users className="w-7 h-7 sm:w-8 sm:h-8 text-mulearn-trusty-blue" />
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-[#212121]">
                        Community Partners
                      </h2>
                    </div>

                    <p className="text-mulearn-blackish leading-relaxed text-sm sm:text-base">
                      Educational institutions, student communities, and
                      learning groups that share our vision of accessible,
                      peer-driven education and collaborative growth.
                    </p>

                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-linear-to-r from-mulearn-trusty-blue to-mulearn-duke-purple" />
                        Student communities & clubs
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-linear-to-r from-mulearn-trusty-blue to-mulearn-duke-purple" />
                        Educational institutions
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-linear-to-r from-mulearn-trusty-blue to-mulearn-duke-purple" />
                        Learning communities
                      </li>
                    </ul>

                    <div className="flex items-center gap-2 text-mulearn-trusty-blue font-semibold pt-4 group-hover:gap-3 transition-all duration-300">
                      <span>Explore Community Partners</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </MotionDiv>

            <MotionDiv
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Link href="/partners/company-partners" className="block group">
                <div className="bg-mulearn-whitish rounded-2xl shadow-[1px_1px_45px_-5px_rgba(0,0,0,0.08)] overflow-hidden h-full hover:shadow-[1px_1px_60px_-5px_rgba(69,111,246,0.15)] transition-all duration-300 hover:-translate-y-2">
                  <div className="relative w-full h-48 sm:h-56 overflow-hidden">
                    <MuImage
                      src="/assets/partners/company2.png"
                      alt="Company Partners"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
                  </div>

                  <div className="p-6 sm:p-8 space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-linear-to-r from-mulearn-trusty-blue/10 to-mulearn-duke-purple/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                        <Building2 className="w-7 h-7 sm:w-8 sm:h-8 text-mulearn-trusty-blue" />
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-[#212121]">
                        Company Partners
                      </h2>
                    </div>

                    <p className="text-mulearn-blackish leading-relaxed text-sm sm:text-base">
                      Industry leaders, startups, and organizations providing
                      real-world opportunities, mentorship, and resources to
                      help learners succeed in their careers.
                    </p>

                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-linear-to-r from-mulearn-trusty-blue to-mulearn-duke-purple" />
                        Technology companies
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-linear-to-r from-mulearn-trusty-blue to-mulearn-duke-purple" />
                        Industry sponsors
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-linear-to-r from-mulearn-trusty-blue to-mulearn-duke-purple" />
                        Corporate collaborators
                      </li>
                    </ul>

                    <div className="flex items-center gap-2 text-mulearn-trusty-blue font-semibold pt-4 group-hover:gap-3 transition-all duration-300">
                      <span>Explore Company Partners</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </MotionDiv>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-8 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto">
          <MotionDiv
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#212121] mb-4">
              Why <span className="text-mulearn-trusty-blue">Partner</span> With
              Us?
            </h2>
          </MotionDiv>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Users,
                title: "Engaged Community",
                description:
                  "Access to thousands of motivated learners eager to grow",
              },
              {
                icon: Target,
                title: "Real Impact",
                description:
                  "Create meaningful change in the education ecosystem",
              },
              {
                icon: Rocket,
                title: "Growth Together",
                description: "Collaborative opportunities for mutual success",
              },
            ].map((benefit, index) => (
              <MotionDiv
                key={benefit.title}
                className="bg-mulearn-whitish rounded-xl shadow-[1px_1px_45px_-5px_rgba(0,0,0,0.08)] p-6 hover:shadow-[1px_1px_60px_-5px_rgba(69,111,246,0.15)] transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-12 h-12 rounded-lg bg-linear-to-r from-mulearn-trusty-blue/10 to-mulearn-duke-purple/10 flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-mulearn-trusty-blue" />
                </div>
                <h3 className="text-xl font-bold text-[#212121] mb-2">
                  {benefit.title}
                </h3>
                <p className="text-mulearn-blackish text-sm">
                  {benefit.description}
                </p>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-8 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <MotionDiv
            className="bg-linear-to-br from-mulearn-trusty-blue to-mulearn-duke-purple rounded-2xl shadow-[1px_1px_45px_-5px_rgba(0,0,0,0.15)] p-8 sm:p-10 lg:p-12 relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-mulearn-whitish/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-mulearn-whitish/10 rounded-full blur-3xl" />

            <div className="relative text-center space-y-6 max-w-3xl mx-auto">
              <MotionDiv
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: "spring" }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-mulearn-whitish/20 backdrop-blur-sm mb-4">
                  <Rocket className="w-8 h-8 text-mulearn-whitish" />
                </div>
              </MotionDiv>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-mulearn-whitish">
                Interested in Partnering?
              </h2>
              <p className="text-mulearn-whitish/90 text-base sm:text-lg">
                Join our growing network of partners and help us create
                impactful learning experiences for thousands of learners
                worldwide.
              </p>
              <div className="flex flex-col items-center sm:flex-row gap-4 justify-center pt-4">
                <Link href="/be-a-part/company">
                  <button className="px-8 py-4 cursor-pointer bg-mulearn-whitish text-mulearn-trusty-blue font-semibold rounded-lg hover:bg-gray-50 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:scale-105">
                    Join as Company
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </Link>
                <Link href="/be-a-part/campus">
                  <button className="px-8 py-4 bg-mulearn-whitish cursor-pointer text-mulearn-trusty-blue font-semibold rounded-lg hover:bg-gray-50 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:scale-105">
                    Join as Community
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </Link>
              </div>
            </div>
          </MotionDiv>
        </div>
      </section>
    </div>
  );
}
