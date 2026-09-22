import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cdnUrl } from "@/shared";
import { artOfTeachingUrls } from "../data/artofteaching.data";

export const Guidelines = () => {
  const artOfTeachingGuidelines = cdnUrl("/assets/Guidlines1-BgJl08J_.pdf");

  const timelineStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "flex-start" as const,
    marginLeft: "20px",
  };

  const timelineItemStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "flex-start" as const,
    position: "relative",
    marginBottom: "20px",
  };

  const circleStyle: React.CSSProperties = {
    width: "20px",
    height: "20px",
    backgroundColor: "var(--mulearn-gray-600)",
    borderRadius: "50%",
    position: "relative",
    zIndex: 2,
    minWidth: "20px",
    minHeight: "20px",
    flexShrink: 0,
  };

  const lineStyle: React.CSSProperties = {
    width: "2px",
    height: "40px",
    backgroundColor: "var(--mulearn-gray-600)",
    position: "absolute",
    top: "20px",
    left: "9px",
    zIndex: 1,
  };

  const contentStyle = {
    marginLeft: "20px",
    flex: 1,
  };

  return (
    <div className="px-8 py-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2">
            <p className="text-lg lg:text-2xl text-mulearn-gray-600 font-normal mb-2">
              Theme: Lessons of The Future.
            </p>
            <h2 className="text-4xl lg:text-7xl font-semibold text-mulearn-blackish leading-tight">
              What is <span className="text-mulearn">Art of Teaching???</span>
            </h2>
            <p className="mt-2 text-base lg:text-lg text-mulearn-gray-600 lg:w-4/5">
              The &apos;Art of Teaching&apos; is a contest that celebrates educators who creatively
              simplify complex topics for better student understanding and retention.
              <br />
              <br />
              To participate in the &quot;Art of Teaching&quot; contest, submit a 5-minute video for
              Level 1 showcasing your innovative approach to a selected topic. After which for Level
              2, provide a detailed course design document based on your video presentation to
              further develop your ideas.
            </p>
          </div>

          <div className=" lg:block lg:w-1/2">
            <Card className="max-w-2xl border-none shadow-none">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-mulearn-blackish">
                  <span className="text-mulearn">Guidelines</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div style={timelineStyle}>
                  <div className="mb-4">
                    <Badge
                      variant="default"
                      className="bg-mulearn text-mulearn-whitish text-base px-3 py-1"
                    >
                      Level 1
                    </Badge>
                  </div>
                  <div style={timelineItemStyle}>
                    <div style={circleStyle}></div>
                    <div style={lineStyle}></div>
                    <div style={contentStyle}>
                      <p className="text-lg">
                        Task 1 - Video submission explaining a selected topic.
                      </p>
                    </div>
                  </div>

                  <div className="mb-4 mt-6">
                    <Badge
                      variant="default"
                      className="bg-mulearn text-mulearn-whitish text-base px-3 py-1"
                    >
                      Level 2
                    </Badge>
                  </div>
                  <div style={timelineItemStyle}>
                    <div style={circleStyle}></div>
                    <div style={lineStyle}></div>
                    <div style={contentStyle}>
                      <p className="text-lg">
                        Task 2 - Detailed document submission of the designed course curriculum.
                      </p>
                    </div>
                  </div>
                  <div className="mt-6">
                    <Link href={artOfTeachingGuidelines} download="Art of Teaching Guidelines.pdf">
                      <Button
                        variant={"default"}
                        className="border-none px-4 py-2 text-base font-bold w-[180px] transition-colors"
                      >
                        Download PDF
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-24 mb-8 flex items-center justify-center">
          <Card
            variant="hoverable"
            className="w-full max-w-md lg:max-w-3xl xl:max-w-4xl 2xl:max-w-5xl overflow-hidden border-mulearn/10 shadow-lg"
          >
            <CardContent className="p-0">
              <div className="relative w-full aspect-video">
                <iframe
                  className="w-full h-full"
                  src={artOfTeachingUrls.mainVideo}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
