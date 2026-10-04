import { MotionDiv, MuImage } from "@/components/layouts";
import { Card } from "@/components/ui/card";

type CarouselItem = {
  id: number;
  img: string;
  text: string;
};

export const Carousel = () => {
  const data: CarouselItem[] = [
    { id: 1, img: "/img1.png", text: "Description" },
    { id: 2, img: "/img2.png", text: "Description" },
    { id: 3, img: "/img2.png", text: "Description" },
    { id: 4, img: "/img2.png", text: "Description" },
  ];

  const items = [...data, ...data];

  return (
    <div className="w-full relative overflow-hidden mt-6">
      <MotionDiv
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex">
          <MotionDiv
            animate={{ x: ["0%", "-30%"] }}
            transition={{
              ease: "linear",
              duration: 12,
              repeat: Infinity,
            }}
            className="flex flex-nowrap gap-6"
          >
            {items.map((item, index) => (
              <Card
                key={`${item.id}-${index}`}
                className="
                  bg-mulearn
                  shrink-0
                  w-[220px]
                  sm:w-[260px]
                  md:w-[300px]
                  lg:w-[340px]
                "
              >
                <div className="flex flex-col items-center justify-center text-center gap-2">
                  <MuImage
                    src={item.img}
                    alt={`carousel-item-${item.id}`}
                    width={400}
                    height={300}
                  />
                  <p className="text-sm sm:text-base max-w-[160px] pb-2">{item.text}</p>
                </div>
              </Card>
            ))}
          </MotionDiv>
        </div>
      </MotionDiv>
    </div>
  );
};
