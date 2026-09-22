import { MotionDiv } from "@/components/layouts";
import { Card, CardContent, CardDescription } from "@/components/ui/card";

export const About = () => {
  return (
    <section className="relative overflow-hidden pt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-12">
          <div className="max-w-3xl text-center">
            <MotionDiv
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-2xl md:text-3xl lg:text-4xl font-bold"
            >
              <h3 className="text-2xl md:text-3xl lg:text-5xl font-bold">
                Work On Ideas That <span className="text-mulearn">Excite</span> You
              </h3>
            </MotionDiv>
            <MotionDiv
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-2xl md:text-3xl lg:text-4xl font-bold "
            >
              <p className="text-lg text-mulearn-gray-600 max-w-xl mx-auto md:mx-0 flex justify-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit
                amet,consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing
                elit{" "}
              </p>
            </MotionDiv>
          </div>

          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-9">
              <Card variant="interactive" className="bg-mulearn text-mulearn-whitish">
                <CardContent>Title</CardContent>
                <CardDescription className=" text-mulearn-whitish">
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit
                  amet,consectetur adipiscing elit consectetur adipiscing elit Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit
                </CardDescription>
              </Card>

              <Card
                variant="interactive"
                className="bg-mulearn text-mulearn-whitish flex flex-center justify-center flex-col"
              >
                <CardContent className=" text-mulearn-whitish">Title</CardContent>
                <CardDescription className=" text-mulearn-whitish">
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit
                  amet,consectetur adipiscing elit consectetur adipiscing elit Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit
                </CardDescription>
              </Card>

              <Card variant="interactive" className="bg-mulearn text-mulearn-whitish">
                <CardContent className=" text-mulearn-whitish">Title</CardContent>
                <CardDescription className=" text-mulearn-whitish">
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit
                  amet,consectetur adipiscing elit consectetur adipiscing elit Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit
                </CardDescription>
              </Card>

              <Card variant="interactive" className="bg-mulearn text-mulearn-whitish">
                <CardContent className=" text-mulearn-whitish">Title</CardContent>
                <CardDescription className=" text-mulearn-whitish">
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit
                  amet,consectetur adipiscing elit consectetur adipiscing elit Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit
                </CardDescription>
              </Card>
            </div>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
};
