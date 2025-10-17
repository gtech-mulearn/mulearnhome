import Hero from "@/app/be-a-part/campus/_components/Hero"
import WhyChapter from "@/app/be-a-part/campus/_components/Why"
import Structure from "@/app/be-a-part/campus/_components/Structure"
import Activities from "@/app/be-a-part/campus/_components/Activities"
import Journey from "@/app/be-a-part/campus/_components/Journey"
import BestPractice from "@/app/be-a-part/campus/_components/BestPractices"
import Quote from "@/app/be-a-part/campus/_components/Quote"
import Apply from "@/app/be-a-part/campus/_components/Apply"

export default function CampusChapter() {
  return (
    <div className="min-h-screen">
      <Hero />
      <WhyChapter />
      <Structure />
      <Activities />
      <Journey />
      <BestPractice />
      <Quote />
      <Apply />
    </div>
  )
}
