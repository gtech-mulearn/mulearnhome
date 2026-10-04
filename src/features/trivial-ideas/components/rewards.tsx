import { MotionDiv } from "@/components/layouts";
import { Card, CardContent } from "@/components/ui/card";

export const Rewards = () => {
  return (
    <section className="relative overflow-hidden pt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-12">
          <div className="max-w-3xl text-center">
            <MotionDiv
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-2xl md:text-3xl lg:text-4xl font-bold "
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
                What <span className="text-mulearn">we’ve got for you</span>
              </h2>
            </MotionDiv>
          </div>

          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <Card variant="interactive">
                <CardContent className="flex justify-center items-center gap-6 flex-col ">
                  <div className="h-14 w-24 bg-mulearn rounded-full shadow-mulearn text-mulearn-whitish flex justify-center items-center ">
                    1st prize
                  </div>
                  <p className="font-bold text-2xl">50,000 INR</p>
                </CardContent>
              </Card>

              <Card variant="interactive">
                <CardContent className="flex justify-center items-center gap-6 flex-col ">
                  <div className="h-14 w-24 bg-mulearn-trusty-blue rounded-full shadow-mulearn-trusty-blue text-mulearn-whitish flex  justify-center items-center ">
                    2nd prize
                  </div>
                  <p className="font-bold text-2xl">50,000 INR</p>
                </CardContent>
              </Card>

              <Card variant="interactive">
                <CardContent className="flex justify-center items-center gap-6 flex-col ">
                  <div className="h-14 w-24 bg-mulearn-trusty-blue rounded-full shadow-mulearn-trusty-blue text-mulearn-whitish flex  justify-center items-center ">
                    3rd prize
                  </div>
                  <p className="font-bold text-2xl">50,000 INR</p>
                </CardContent>
              </Card>

              <Card variant="interactive">
                <CardContent className="flex justify-center items-center gap-6 flex-col ">
                  <div className="h-14 w-24 bg-mulearn-trusty-blue rounded-full shadow-mulearn-trusty-blue text-mulearn-whitish flex justify-center items-center ">
                    4th prize
                  </div>
                  <p className="font-bold text-2xl">50,000 INR</p>
                </CardContent>
              </Card>

              <Card variant="interactive">
                <CardContent className="flex justify-center items-center gap-6 flex-col ">
                  <div className="h-14 w-24 bg-mulearn-trusty-blue rounded-full shadow-mulearn-trusty-blue text-mulearn-whitish flex  justify-center items-center ">
                    5th prize
                  </div>
                  <p className="font-bold text-2xl">50,000 INR</p>
                </CardContent>
              </Card>

              <Card variant="interactive">
                <CardContent className="flex justify-center items-center gap-6 flex-col ">
                  <div className="h-14 w-24 bg-mulearn-trusty-blue rounded-full shadow-mulearn-trusty-blue text-mulearn-whitish flex  justify-center items-center ">
                    6th prize
                  </div>
                  <p className="font-bold text-2xl">50,000 INR</p>
                </CardContent>
              </Card>
            </div>
            <div className="flex justify-center items-center mt-7 font-bold text-2xl text-mulearn-trusty-blue">
              +400 karma points
            </div>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
};
