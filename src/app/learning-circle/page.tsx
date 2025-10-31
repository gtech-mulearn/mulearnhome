"use client";

import MuImage from "@/components/MuImage";
import Link from "next/link";
import { motion } from "framer-motion";
import { learningCircleData } from "@/data/data";
import { Button } from "@/components/ui/button";

export default function LearningCirclePage() {
  const {
    subtitle,
    description,
    image,
    ctaText,
    ctaLink,
    introduction,
    ctaSection,
    learningDomains,
    howItWorks,
    benefits,
  } = learningCircleData;

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-16 bg-mulearn-whitish text-mulearn-blackish gap-16 md:gap-24">
      <section className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex-1 text-center md:text-left"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-mulearn-blackish mb-4 ">
            Join a{" "}
            <span className="bg-linear-to-r from-mulearn-trusty-blue to-mulearn-duke-purple bg-clip-text text-transparent">
              Learning Circle
            </span>
          </h1>
          {subtitle && (
            <h2 className="text-xl md:text-2xl text-mulearn-blackish font-medium mb-4 ">
              {subtitle}
            </h2>
          )}
          <p className="leading-relaxed mb-8 ">{description}</p>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <Link
              href={ctaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-linear-to-r from-mulearn-trusty-blue to-mulearn-duke-purple text-mulearn-whitish px-8 py-3 rounded-xl font-semibold shadow-md hover:bg-mulearn-duke-purple transition-colors"
            >
              {ctaText}
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 flex justify-center"
        >
          <MuImage
            src={image}
            alt="Learning Circle illustration"
            width={500}
            height={400}
            priority
            className="rounded-2xl"
          />
        </motion.div>
      </section>

      <section className="max-w-6xl w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.2 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-mulearn-blackish mb-4 ">
            {introduction.title}
          </h2>
          <p className="max-w-3xl mx-auto leading-relaxed mb-12  whitespace-pre-line">
            {introduction.description}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {introduction.features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.2, delay: index * 0.1 }}
              whileHover={{
                y: -8,
                boxShadow:
                  "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
              }}
              className="bg-mulearn-whitish text-mulearn-blackish p-8 rounded-2xl shadow-lg border border-mulearn-greyish/20 flex flex-col items-center"
            >
              <feature.icon className="w-12 h-12 bg-linear-to-r from-mulearn-trusty-blue to-mulearn-duke-purple bg-clip-text text-transparent mb-4" />
              <h3 className="text-xl font-bold text-mulearn-blackish mb-3  h-14 flex items-center">
                {feature.title}
              </h3>
              <p className="">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Learning Domains Section */}
      <section className="max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-mulearn-blackish mb-4 ">
            {learningDomains.title}
          </h2>
          <p className="text-lg text-mulearn-blackish/70  max-w-2xl mx-auto">
            {learningDomains.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {learningDomains.domains.map((domain, index) => (
            <motion.div
              key={domain.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                y: -8,
                boxShadow:
                  "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
              }}
              className="bg-mulearn-whitish p-6 rounded-2xl shadow-lg border border-mulearn-greyish/20 hover:border-mulearn-trusty-blue/30 transition-all duration-300"
            >
              <domain.icon className={`w-10 h-10 ${domain.color} mb-4`} />
              <h3 className="text-xl font-bold text-mulearn-blackish mb-3 ">
                {domain.title}
              </h3>
              <p className="text-mulearn-blackish/70  text-sm">
                {domain.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-mulearn-blackish mb-4 ">
            {howItWorks.title}
          </h2>
          <p className="text-lg text-mulearn-blackish/70  max-w-2xl mx-auto">
            {howItWorks.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8">
          {howItWorks.steps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative text-center ${
                index === 4 ? "md:col-start-2" : ""
              } ${index === 5 ? "md:col-start-3" : ""}`} // centering steps 5 and 6
            >
              <div className="bg-linear-to-r from-mulearn-trusty-blue to-mulearn-duke-purple text-mulearn-whitish w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 ">
                {step.step}
              </div>
              <step.icon className="w-8 h-8 bg-linear-to-r from-mulearn-trusty-blue to-mulearn-duke-purple bg-clip-text text-transparent mx-auto mb-4" />
              <h3 className="text-lg font-bold text-mulearn-blackish mb-3 ">
                {step.title}
              </h3>
              <p className="text-mulearn-blackish/70  text-sm">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-mulearn-blackish mb-4 ">
            {benefits.title}
          </h2>
          <p className="text-lg text-mulearn-blackish/70  max-w-2xl mx-auto">
            {benefits.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                y: -5,
                boxShadow:
                  "0 15px 20px -5px rgb(0 0 0 / 0.1), 0 6px 8px -6px rgb(0 0 0 / 0.1)",
              }}
              className="bg-mulearn-whitish p-6 rounded-2xl shadow-lg border border-mulearn-greyish/20 flex items-start gap-4"
            >
              <div className="bg-linear-to-r from-mulearn-trusty-blue to-mulearn-duke-purple/10 p-3 rounded-xl">
                <benefit.icon className="w-6 h-6 bg-linear-to-r from-mulearn-trusty-blue to-mulearn-duke-purple bg-clip-text text-transparent" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-mulearn-blackish mb-2 ">
                  {benefit.title}
                </h3>
                <p className="text-mulearn-blackish/70  text-sm">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="w-full mt-16 bg-linear-to-r from-mulearn-trusty-blue to-mulearn-duke-purple text-mulearn-whitish p-10 text-center rounded-3xl max-w-6xl mx-auto shadow-lg border border-mulearn-greyish/20"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 ">
          {ctaSection.title}
        </h2>
        <p className="text-lg mb-8 text-mulearn-whitish  max-w-2xl mx-auto">
          {ctaSection.description}
        </p>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block"
        >
          <Link
            href={ctaSection.buttonLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant={"mulearn"}
              className="inline-block bg-mulearn-whitish text-mulearn-duke-purple rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl hover:bg-mulearn-duke-purple hover:text-mulearn-whitish px-8 py-3 font-semiboldhover:bg-mulearn-whitish/90"
            >
              {ctaSection.buttonText}
            </Button>
          </Link>
        </motion.div>
      </motion.section>
    </main>
  );
}
