import Hero from "@/app/(home)/_components/Hero";
import Features from "@/app/(home)/_components/Features";
import Story from "@/app/(home)/_components/Story";
import SpecialEvents from "@/app/(home)/_components/SpecialEvents";
import Comparison from "@/app/(home)/_components/Comparison";
import Opportunities from "@/app/(home)/_components/Opportunities";
import Roles from "@/app/(home)/_components/Roles";
import Stats from "@/app/(home)/_components/Stats";
import Community from "@/app/(home)/_components/Community";
import Newsletter from "@/app/(home)/_components/Newsletter";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <Story />
      <SpecialEvents />
      <Comparison />
      <Opportunities />
      <Roles />
      <Stats />
      <Community />
      <Newsletter />
    </div>
  );
};

export default Home;
