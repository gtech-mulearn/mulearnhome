import { Sparkle } from "lucide-react";
import { MotionDiv, MuImage } from "@/components/layouts";
import type { GalleryItem } from "../types/impact-gallery.types";

interface MediaCardProps {
  item: GalleryItem;
  index: number;
}

export function MediaCard({ item, index }: MediaCardProps) {
  const isEven = index % 2 === 0;

  return (
    <div
      className={`flex flex-col ${
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      } items-center gap-8 mb-20 group`}
    >
      <div className="w-full md:w-2/6 relative">
        <div
          className={`absolute -top-6 ${
            isEven ? "-right-6" : "-left-6"
          } opacity-40 group-hover:opacity-100 transition-opacity`}
        >
          <Sparkle size={32} className="text-mulearn fill-mulearn" />
        </div>

        <MotionDiv
          whileHover={{ scale: 1.02 }}
          className="relative aspect-square rounded-3xl overflow-hidden shadow-xl"
        >
          {item.image ? (
            <MuImage
              src={item.image}
              alt={item.title}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          ) : (
            <div className="w-full h-full bg-mulearn-gray-600 flex items-center justify-center">
              <span className="text-mulearn font-bold">{item.title}</span>
            </div>
          )}
        </MotionDiv>

        <div
          className={`absolute -bottom-6 ${
            isEven ? "-left-6" : "-right-6"
          } opacity-40 group-hover:opacity-100 transition-opacity`}
        >
          <Sparkle size={24} className="text-mulearn fill-mulearn" />
        </div>
      </div>

      <MotionDiv
        initial={{ opacity: 0, x: isEven ? 20 : -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="w-full md:w-2/3"
      >
        <h3 className="text-2xl lg:text-3xl font-bold text-mulearn mb-4 leading-tight">
          {item.title}
        </h3>
        <div className="bg-mulearn/5 p-8 rounded-[2rem] relative z-10">
          <p className="text-lg leading-relaxed">{item.description}</p>
        </div>
      </MotionDiv>
    </div>
  );
}
