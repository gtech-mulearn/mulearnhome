import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "YIP | µLearn",
  description:
    "Young Innovators Programme (YIP 5.0) by Kerala Government, K-DISC and µLearn.",
};

export default function YipPage() {
  const events = [
    {
      type: "type1",
      icon: "https://s3.ap-south-1.amazonaws.com/cdn.mulearn/src/modules/Public/yip/assets/procedure/prereg.webp",
      phaseLabel: "Pre\nRegistration",
      title: "Step One",
      description: (
        <>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://yip.kerala.gov.in/yipapp/index.php/Idea2022"
          >
            <span className="hover:text-[#fa8322]">
              <strong>Click Here</strong>
            </span>
          </a>{" "}
          to go to the Pre-Registration page. Enter all your details in the
          Pre-Registration Form and complete OTP Verification. You&apos;ll receive an
          email with login credentials.
        </>
      ),
    },
    {
      type: "type2",
      icon: "https://s3.ap-south-1.amazonaws.com/cdn.mulearn/src/modules/Public/yip/assets/procedure/studentreg.webp",
      phaseLabel: "Ideator\nRegistration",
      title: "Step Two",
      description: (
        <>
          <a
            href="https://yip.kerala.gov.in/yipapp/index.php/Init/"
            target="_blank"
            rel="noreferrer"
          >
            <span className="hover:text-[#fa8322]">
              <strong>Click Here to Login</strong>
            </span>
          </a>
          , then complete your profile under the Profile Completion section and
          submit.
        </>
      ),
    },
    {
      type: "type3",
      icon: "https://s3.ap-south-1.amazonaws.com/cdn.mulearn/src/modules/Public/yip/assets/procedure/yip-voc.webp",
      phaseLabel: "Voice of\nStakeholder",
      title: "Step Three",
      description: (
        <>
          Complete the VOS Module from your dashboard and post with the hashtag{" "}
          <strong>#yip5.0-vos</strong> to gain <strong>400 Karma Points</strong>.
        </>
      ),
    },
    {
      type: "type1",
      icon: "https://s3.ap-south-1.amazonaws.com/cdn.mulearn/src/modules/Public/yip/assets/procedure/team.webp",
      phaseLabel: "Team\nFormation",
      title: "Step Four",
      description: (
        <>
          Form a team of 2–5 members using the Group Formation option. One member
          creates the group; others join with the team name and password.
        </>
      ),
    },
    {
      type: "type1",
      icon: "https://s3.ap-south-1.amazonaws.com/cdn.mulearn/src/modules/Public/yip/assets/procedure/ideafind.webp",
      phaseLabel: "Idea\nSubmission",
      title: "Step Five",
      description: (
        <>
          Submit your idea under Idea Submission. Post your certificate with{" "}
          <strong>#yip5.0-idea</strong> to gain <strong>800 Karma Points</strong>.
        </>
      ),
    },
    {
      type: "type2",
      icon: "https://s3.ap-south-1.amazonaws.com/cdn.mulearn/src/modules/Public/yip/assets/procedure/approved.webp",
      phaseLabel: "Institutional\nApproval",
      title: "Step Six",
      description: (
        <>
          After submission, get your idea approved by your institution&apos;s
          authority.
        </>
      ),
    },
    {
      type: "type3",
      icon: "https://s3.ap-south-1.amazonaws.com/cdn.mulearn/src/modules/Public/yip/assets/procedure/evaluation.webp",
      phaseLabel: "Preliminary\nEvaluation",
      title: "Step Seven",
      description: (
        <>
          Approved ideas undergo evaluation at district and state levels. Winning
          teams receive prizes.
        </>
      ),
    },
    {
      type: "type1",
      icon: "https://s3.ap-south-1.amazonaws.com/cdn.mulearn/src/modules/Public/yip/assets/procedure/winner%20annoucement.webp",
      phaseLabel: "Winner\nAnnouncement",
      title: "Step Eight",
      description: (
        <>
          Final winners receive financial and mentoring support to implement
          their ideas.
        </>
      ),
    },
  ];

  return (
    <main role="main" className="min-h-screen w-full font-poppins">
      <section className="max-w-[1600px] mx-auto">
        <div className="flex flex-row justify-center items-stretch mt-8 mx-4 flex-wrap relative">
          <div className="max-w-[855px] shadow-[0px_0px_23px_rgba(130,177,255,0.22)] rounded-[25px] m-4 relative">
            <div className="bg-[#c0defb] flex flex-row z-0 rounded-[25px] relative">
              <div className="p-8">
                <p className="font-light text-[2.25rem] leading-[47px] max-w-[28rem] tracking-[0.02em] capitalize text-[#674063]">
                  Kerala&apos;s Biggest{" "}
                  <strong className="font-bold">
                    Innovation Celebration is here!
                  </strong>
                </p>
                <Image
                  src="https://s3.ap-south-1.amazonaws.com/cdn.mulearn/src/modules/Public/yip/assets/lines.png"
                  alt="Decorative lines"
                  width={240}
                  height={30}
                  className="mt-[-3rem] max-w-[15rem] h-auto"
                />
                <p className="mt-[-2rem] mb-8 font-medium text-[1.5rem] max-w-[20rem] leading-[33px] capitalize text-[#674063]">
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
              className="absolute mt-[-2rem] mr-12 right-0 z-10 bg-white shadow-[0px_17px_31px_rgba(0,0,0,0.12)] rounded-xl font-semibold text-[1.25rem] px-[4.5rem] py-3 leading-[33px] capitalize text-[#674063] hover:bg-[#704a6c] hover:text-white transition-all duration-300"
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
              <p className="font-medium text-[2.25rem] leading-[36px] capitalize text-[#030a1a] max-[768px]:text-[1.75rem]">
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

          <div className="flex flex-row justify-between items-center flex-wrap bg-[#db4569] p-8 m-4 w-full rounded-[25px]">
            <div className="font-light text-[1.75rem] leading-[36px] max-w-[38rem] text-white max-[768px]:text-[1.35rem] max-[768px]:leading-[24px]">
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
          <p className="text-center text-[#404040] text-[2.1rem] font-semibold">
            YIP Idea Registration Procedure
          </p>
          <div className="flex flex-col mx-auto my-10 relative z-[5]">
            {events.map((event, index) => (
              <div
                key={index}
                className={`timeline-event mb-5 relative flex my-5 rounded-md self-center w-[50vw] max-[786px]:w-full max-[786px]:flex-col ${
                  index % 2 === 0 ? "flex-row-reverse" : ""
                }`}
              >
                <div className="hidden lg:block w-full">
                  <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div
                      className={`flex items-center ${
                        index % 2 === 0 ? "flex-row-reverse" : ""
                      }`}
                    >
                      <div
                        className={`flex-shrink-0 w-32 h-32 flex items-center justify-center ${
                          event.type === "type1"
                            ? "bg-[#ffc773]"
                            : event.type === "type2"
                            ? "bg-[#87bbfe]"
                            : "bg-[#aff1b6]"
                        }`}
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
                        className={`flex-shrink-0 px-8 py-6 text-white font-bold text-lg min-w-[200px] flex items-center justify-center ${
                          event.type === "type1"
                            ? "bg-[#fa8322]"
                            : event.type === "type2"
                            ? "bg-[#555ac0]"
                            : "bg-[#24b47e]"
                        }`}
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
                          className={`text-[1.2rem] uppercase font-semibold tracking-[1.5px] mb-3 ${
                            event.type === "type1"
                              ? "text-[#fa8322]"
                              : event.type === "type2"
                              ? "text-[#555ac0]"
                              : "text-[#24b47e]"
                          }`}
                        >
                          {event.title}
                        </div>
                        <div className="text-gray-700">{event.description}</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:hidden w-full">
                  <div
                    className={`h-32 flex items-center justify-center ${
                      event.type === "type1"
                        ? "bg-[#ffc773]"
                        : event.type === "type2"
                        ? "bg-[#87bbfe]"
                        : "bg-[#aff1b6]"
                    }`}
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
                    className={`flex items-center justify-center py-4 text-white font-bold text-lg ${
                      event.type === "type1"
                        ? "bg-[#fa8322]"
                        : event.type === "type2"
                        ? "bg-[#555ac0]"
                        : "bg-[#24b47e]"
                    }`}
                  >
                    <div className="text-center">
                      {event.phaseLabel.split("\n").map((line, i) => (
                        <span key={i} className="block">
                          {line}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="bg-white p-6 shadow-md">
                    <div
                      className={`text-[1.2rem] uppercase font-semibold tracking-[1.5px] mb-3 ${
                        event.type === "type1"
                          ? "text-[#fa8322]"
                          : event.type === "type2"
                          ? "text-[#555ac0]"
                          : "text-[#24b47e]"
                      }`}
                    >
                      {event.title}
                    </div>
                    <div className="text-gray-700">{event.description}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
