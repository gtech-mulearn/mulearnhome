import { MotionDiv, MotionH2, MotionP } from "@/components/MuFramer";
import { TextTestimonial } from "@/lib/types";
import TextTestimonialCard from "./TextTestimonialCard";

interface TextTestimonialsGridProps {
  testimonials: TextTestimonial[];
}

export default function TextTestimonialsGrid({
  testimonials,
}: TextTestimonialsGridProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const containerTransition = {
    staggerChildren: 0.1,
  };

  const itemTransition = {
    duration: 0.5,
    ease: "easeOut" as const,
  };

  return (
    <MotionDiv
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      transition={containerTransition}
      viewport={{ once: true, amount: 0.1 }}
      className="w-full"
    >
      {}
      <div className="text-center mb-12">
        <MotionH2
          className=" text-4xl md:text-5xl font-bold text-mulearn-blackish mb-4"
          variants={itemVariants}
          transition={itemTransition}
        >
          Community Voices
        </MotionH2>
        <MotionP
          className="text-xl text-mulearn-gray-600  max-w-3xl mx-auto"
          variants={itemVariants}
          transition={itemTransition}
        >
          Read what our community members are saying about their µLearn
          experience
        </MotionP>
      </div>

      {}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <MotionDiv
            key={testimonial.id}
            variants={itemVariants}
            transition={itemTransition}
            custom={index}
          >
            <TextTestimonialCard testimonial={testimonial} />
          </MotionDiv>
        ))}
      </div>
    </MotionDiv>
  );
}
