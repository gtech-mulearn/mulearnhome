import Image from "next/image";
import Link from "next/link";
import { yip } from "@/data/data";

export const metadata = {
  title: "YIP | µLearn",
  description:
    "Young Innovators Programme (YIP 5.0) by Kerala Government, K-DISC and µLearn.",
};

export default function YipPage() {
  // function to make specific text bold
  const makeBold = (text: string, boldPhrases: string[]) => {
    let result: React.ReactNode[] = [text];
    
    boldPhrases.forEach((phrase) => {
      const newResult: React.ReactNode[] = [];
      result.forEach((part) => {
        if (typeof part === 'string') {
          const parts = part.split(phrase);
          parts.forEach((p, idx) => {
            newResult.push(p);
            if (idx < parts.length - 1) {
              newResult.push(<strong key={`${phrase}-${idx}`}>{phrase}</strong>);
            }
          });
        } else {
          newResult.push(part);
        }
      });
      result = newResult;
    });
    
    return result;
  };

  // function to render descriptions with clickable links and bold text
  const renderDescription = (description: string, link?: string, index?: number) => {
    // in step 1 - Make "Click Here" clickable
    if (index === 0 && link) {
      const parts = description.split("Click Here");
      return (
        <>
          {parts[0]}
          <Link href={link} target="_blank" rel="noopener noreferrer">
            <span className="hover:text-chart-5 transition-colors">
              <strong>Click Here</strong>
            </span>
          </Link>
          {parts[1]}
        </>
      );
    }

    // in step 2 - Make "Click Here to Login" clickable and "Profile Completion" bold
    if (index === 1 && link) {
      const parts = description.split("Click Here to Login");
      const boldPhrases = ["Profile Completion"];
      return (
        <>
          {parts[0]}
          <Link href={link} target="_blank" rel="noopener noreferrer">
            <span className="hover:text-mulearn-trusty-blue transition-colors">
              <strong>Click Here to Login</strong>
            </span>
          </Link>
          {makeBold(parts[1], boldPhrases)}
        </>
      );
    }

    // Step 3 - Voice of Stakeholder
    if (index === 2) {
      const boldPhrases = [
        "Voice of Stakeholder(VOS Module)",
        "#yip5.0-vos",
        "400 Karma Points"
      ];
      return <>{makeBold(description, boldPhrases)}</>;
    }

    // Step 4 - Team Formation
    if (index === 3) {
      const boldPhrases = [
        "You can form a team consisting of minimum 2 members and maximum 5 members by clicking the Group Formation Button from the left navbar. Only one person from a group is required to form the group"
      ];
      return <>{makeBold(description, boldPhrases)}</>;
    }

    // Step 5 - Idea Submission
    if (index === 4) {
      const boldPhrases = [
        "person who formed the team",
        "Idea Submission Option",
        "#yip5.0-idea",
        "800 Karma Points"
      ];
      return <>{makeBold(description, boldPhrases)}</>;
    }

    // Step 6 - Institutional Approval
    if (index === 5) {
      return <>{description}</>;
    }

    // Step 7 - Preliminary Evaluation
    if (index === 6) {
      const boldPhrases = ["teams"];
      return <>{makeBold(description, boldPhrases)}</>;
    }

    // Step 8 - Winner Announcement
    if (index === 7) {
      const boldPhrases = [
        "the best of those teams are provided financial and mentoring support to implement their ideas."
      ];
      return <>{makeBold(description, boldPhrases)}</>;
    }

    // Default case
    return description;
  };

  // function to get background colors based on type
  const getTypeColors = (type: string) => {
    switch (type) {
      case "type1":
        return {
          iconBg: "bg-chart-4",
          labelBg: "bg-chart-5", 
          textColor: "text-chart-4"
        };
      case "type2":
        return {
          iconBg: "bg-yip-icon-light-blue", 
          labelBg: "bg-mulearn-trusty-blue",
          textColor: "text-mulearn-trusty-blue"
        };
      case "type3":
        return {
          iconBg: "bg-yip-light-green", // Light green - keeping this as it's a lighter shade
          labelBg: "bg-yip-dark-green", // Green shade
          textColor: "text-yip-dark-green"
        };
      default:
        return {
          iconBg: "bg-mulearn-greyish",
          labelBg: "bg-mulearn-gray-600",
          textColor: "text-mulearn-gray-600"
        };
    }
  };

  return (
    <main role="main" className="min-h-screen w-full font-poppins">
      <section className="max-w-[1600px] mx-auto">
        <div className="flex flex-row justify-center items-stretch mt-8 mx-4 flex-wrap relative">
          <div className="max-w-[855px] shadow-[0px_0px_23px_rgba(130,177,255,0.22)] rounded-[25px] m-4 relative">
            <div className="bg-yip-light-blue flex flex-row z-0 rounded-[25px] relative">
              <div className="p-8">
                <p className="font-light text-[2.25rem] leading-[47px] max-w-[28rem] tracking-[0.02em] capitalize text-yip-hero-text">
                  Kerala&apos;s Biggest{" "}
                  <strong className="font-bold">
                    Innovation Celebration is here!
                  </strong>
                </p>
                <br />
                <Image
                  src="https://s3.ap-south-1.amazonaws.com/cdn.mulearn/src/modules/Public/yip/assets/lines.png"
                  alt="Decorative lines"
                  width={240}
                  height={30}
                  className="mt-[-3rem] max-w-[15rem] h-auto"
                />
                <p className="mt-[-2rem] mb-8 font-medium text-[1.5rem] max-w-[20rem] leading-[33px] capitalize text-yip-hero-text">
                  Young Innovators Programme 5.0
                </p>
              </div>
              <Image
                src="https://s3.ap-south-1.amazonaws.com/cdn.mulearn/src/modules/Public/yip/assets/boxoneimg.png"
                alt="YIP celebration graphic"
                width={380}
                height={288}
                className="absolute right-0 bottom-0 h-[18rem] rounded-[0_0_25px_0] w-auto max-[685px]:hidden"
              />
            </div>
            <Link
              href="https://yip.kerala.gov.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute mt-[-2rem] mr-12 right-0 z-10 bg-mulearn-whitish shadow-[0px_17px_31px_rgba(0,0,0,0.12)] rounded-xl font-semibold text-[1.25rem] px-[4.5rem] py-3 leading-[33px] capitalize text-yip-hero-text hover:bg-yip-hero-text-hover hover:text-mulearn-whitish transition-all duration-300"
            >
              Apply Now
            </Link>
            <div className="mt-8 p-8 font-light text-[1.35rem] leading-[30px]">
              <p>
                YIP 5.0 is here and{" "}
                <strong className="font-bold">
                  it&apos;s bigger and more impactful than ever before!
                </strong>{" "}
                Backed by the Kerala government.
                <br />
                <br />
                This year&apos;s initiative provides an incredible opportunity
                for{" "}
                <strong className="font-bold">
                  college and university students
                </strong>{" "}
                to showcase their innovation skills and create{" "}
                <strong className="font-bold">real-world impact</strong>.
              </p>
            </div>
          </div>

          <div className="max-[1460px]:flex max-[1460px]:flex-row max-[1460px]:justify-between max-[1460px]:flex-wrap max-[1048px]:flex-col max-[1048px]:items-center max-[1048px]:justify-center">
            <div className="max-w-[538px] min-w-[20rem] p-8 shadow-[0px_0px_23px_rgba(130,177,255,0.22)] rounded-[25px] m-4 flex flex-col justify-stretch transition-all duration-300">
              <p className="font-medium text-[2.25rem] leading-[47px] tracking-[0.02em] capitalize ml-4 text-right max-[490px]:text-center">
                Download the <br /> YIP App Now!
              </p>
              <div className="flex flex-row-reverse justify-between flex-wrap max-[490px]:flex-col max-[490px]:items-center">
                <Image
                  src="https://s3.ap-south-1.amazonaws.com/cdn.mulearn/src/modules/Public/yip/assets/qrcode.png"
                  alt="YIP App QR code"
                  width={192}
                  height={192}
                  className="h-[12rem] w-auto max-[490px]:mt-8"
                />
                <Image
                  src="https://s3.ap-south-1.amazonaws.com/cdn.mulearn/src/modules/Public/yip/assets/cat.png"
                  alt="Mascot"
                  width={192}
                  height={192}
                  className="h-[12rem] scale-x-[-1] w-auto max-[460px]:hidden"
                />
              </div>
            </div>

            <div className="max-w-[538px] p-8 shadow-[0px_0px_23px_rgba(130,177,255,0.22)] rounded-[25px] m-4 flex flex-col items-center transition-all duration-300">
              <p className="font-medium text-[2.25rem] leading-[36px] capitalize text-mulearn-blackish max-[768px]:text-[1.75rem]">
                Brainstorm, Collaborate, And Create
              </p>
              <Image
                src="https://s3.ap-south-1.amazonaws.com/cdn.mulearn/src/modules/Public/yip/assets/bllines.png"
                alt="Decorative blue lines"
                width={240}
                height={30}
                className="mt-[-20px] mb-[10px] h-auto"
              />
              <Image
                src="https://s3.ap-south-1.amazonaws.com/cdn.mulearn/src/modules/Public/yip/assets/Starting%20a%20business%20project-amico.png"
                alt="Students collaborating illustration"
                width={320}
                height={192}
                className="mt-[-3rem] h-[12rem] w-auto max-[460px]:h-[8rem]"
              />
            </div>
          </div>

          <div className="flex flex-row justify-between items-center flex-wrap bg-yip-pink-card p-8 m-4 w-full rounded-[25px]">
            <div className="font-light text-[1.75rem] leading-[36px] max-w-[38rem] text-mulearn-whitish max-[768px]:text-[1.35rem] max-[768px]:leading-[24px]">
              Pitch your{" "}
              <strong className="font-bold">
                ideas and work alongside industry experts
              </strong>{" "}
              to solve real-life problems.
              <br />
              <br />
              Get valuable{" "}
              <strong className="font-bold">
                feedback and mentorship to refine your solutions
              </strong>{" "}
              and make a meaningful impact.
            </div>
            <Image
              src="https://s3.ap-south-1.amazonaws.com/cdn.mulearn/src/modules/Public/yip/assets/box_fourimg.png"
              alt="Team pitching illustration"
              width={380}
              height={200}
              className="max-[768px]:h-[13rem] w-auto max-[768px]:mx-auto max-[768px]:mt-8"
            />
          </div>
        </div>
      </section>

      <section className="my-[7vh]">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-center text-mulearn-blackish text-[2.1rem] font-semibold">
            YIP Idea Registration Procedure
          </p>
          <div className="flex flex-col mx-auto my-10 relative z-[5]">
            {yip.map((event, index) => {
              const colors = getTypeColors(event.type);
              
              return (
                <div
                  key={index}
                  className={`timeline-event mb-5 relative flex my-5 rounded-md self-center w-[50vw] max-[786px]:w-full max-[786px]:flex-col ${
                    index % 2 === 0 ? "flex-row-reverse" : ""
                  }`}
                >
                  <div className="hidden lg:block w-full">
                    <div className="bg-mulearn-whitish rounded-lg shadow-md overflow-hidden">
                      <div
                        className={`flex items-center ${
                          index % 2 === 0 ? "flex-row-reverse" : ""
                        }`}
                      >
                        <div
                          className={`flex-shrink-0 w-32 h-32 flex items-center justify-center ${colors.iconBg}`}
                        >
                          <Image
                            src={event.icon}
                            alt={`${event.title} icon`}
                            width={80}
                            height={80}
                            className="w-20 h-20 object-contain"
                          />
                        </div>
                        <div
                          className={`flex-shrink-0 px-8 py-6 text-mulearn-whitish font-bold text-lg min-w-[200px] flex items-center justify-center ${colors.labelBg}`}
                        >
                          <div className="text-center">
                            {event.phaseLabel.split("\n").map((line, i) => (
                              <span key={i} className="block">
                                {line}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="flex-1 p-6">
                          <div
                            className={`text-[1.2rem] uppercase font-semibold tracking-[1.5px] mb-3 ${colors.textColor}`}
                          >
                            {event.title}
                          </div>
                          <div className="text-mulearn-blackish">
                            {renderDescription(event.description, event.link, index)}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="lg:hidden w-full">
                    <div
                      className={`h-32 flex items-center justify-center ${colors.iconBg}`}
                    >
                      <Image
                        src={event.icon}
                        alt={`${event.title} icon`}
                        width={80}
                        height={50}
                        className="w-20 h-20 object-contain"
                      />
                    </div>
                    <div
                      className={`flex items-center justify-center py-4 text-mulearn-whitish font-bold text-lg ${colors.labelBg}`}
                    >
                      <div className="text-center">
                        {event.phaseLabel.split("\n").map((line, i) => (
                          <span key={i} className="block">
                            {line}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="bg-mulearn-whitish p-6 shadow-md">
                      <div
                        className={`text-[1.2rem] uppercase font-semibold tracking-[1.5px] mb-3 ${colors.textColor}`}
                      >
                        {event.title}
                      </div>
                      <div className="text-mulearn-blackish">
                        {renderDescription(event.description, event.link, index)}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}