
"use client";
import { communityPartners } from "../../data/data";
import CommunityCard from "./CommunityCard/CommunityCard";
import HomeNav from "@components//HomeNav/navbar";
import Footer from "@components/Footer/Footer";
import { cdnUrl } from "@services/cdn";
import Image from "next/image";
import { motion } from "motion/react"

type Partner = {
  name: string;
  image: string;
  link: string;
  customlink?: string;
};

const page = () => {
  return (
    <>
      <HomeNav />
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col-reverse md:flex-row  items-center justify-around w-full">
          <motion.div

            initial={{ opacity: 0,}}

            animate={{ opacity: 1, }}

            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}

            viewport={{ once: true, amount: 0.5 }}
 className="text-center md:text-left md:w-1/3 mx-4 md:mx-0">
            <p className="font-sans text-5xl font-semibold text-[#303030] md:text-7xl inline-block xl:inline-block lg:inline-block md:hidden md:w-[50%]  md:leading-tight">
              <span className="font-semibold text-[#5570f1]">µLearn Community</span> Partners
            </p>
            <p className="font-sans text-5xl font-semibold text-[#303030] md:text-7xl hidden md:inline-block xl:hidden lg:hidden md:leading-tight">
              <span className="font-semibold text-[#5570f1]">µLearn Comm<br></br>unity</span> Partner<br></br>s
            </p>
            <p className="mt-6 md:mt-8 text-lg md:text-2xl w-full font-[Poppins] mx-2 md:mx-0">
              When a group of like-minded people come together interesting
              things take place. What if multiple Communities join their hands
              together for a common aim things get much more interesting!
            </p>
          </motion.div>

          <div className="w-full flex justify-center md:w-auto md:flex md:items-center md:justify-center">
            <Image
              src={cdnUrl("/assets/community-partners/Coding workshop.gif")}
              width={0}
              height={0}
              alt="Coding Workshop Animation"
              className="block mt-6 md:mt-0 w-[90vw] max-w-[36rem] md:w-full md:max-w-[38rem] h-auto md:h-[26rem] object-cover rounded-2xl "
              style={{ objectFit: 'cover', width: '100%', maxWidth: '38rem', height: 'auto', borderRadius: '1.5rem' }}
            />
          </div>
        </div>

        <div className="bg-white max-w-7xl xl:w-7xl" style={{ paddingBottom: "5rem", marginTop: "8rem" }}>
          <div className="lg:w-2/3 flex flex-col text-center md:text-left mx-4 md:mx-0 
              pt-20 lg:pt-32 lg:pl-16 ">
            <p className="text-3xl md:text-5xl font-semibold font-sans">
              <span className="text-[#5570f1]">Community</span> Partners
            </p>
            <p className="mt-6 md:mt-8 text-lg md:text-2xl mx-2 md:mx-0 font-[Poppins] xl:w-[44rem]">
              µLearn has partnered with multiple communities to provide the
              peers the best resources and events to learn and up-skill
              themselves.
            </p>
          </div>
          <motion.div

            initial={{ opacity: 0, y: 0 }}

            animate={{ opacity: 1, y: 10 }}

            transition={{ duration: 0.8, ease: "easeOut" }}

            viewport={{ once: true, amount: 0.5 }}

            className="grid grid-cols-1 place-items-center 
              sm:grid-cols-2 md:grid-cols-3 mt-[3rem] w-[100%] lg:max-w-[117rem] mx-auto" style={{ marginTop: "1rem" }}>
            {(communityPartners as Partner[]).map((partner) => (
              <CommunityCard
                key={partner.name}
                cname={partner.name}
                cimage={partner.image}
                clink={partner.link}
                customlink={partner.customlink}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default page;
