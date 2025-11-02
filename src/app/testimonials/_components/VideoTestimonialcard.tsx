import { YouTubeEmbed } from "@next/third-parties/google";
import { VideoTestimonial } from "@/lib/types";

interface VideoTestimonialCardProps {
  testimonial: VideoTestimonial;
}

export default function VideoTestimonialCard({
  testimonial,
}: VideoTestimonialCardProps) {

  return (
    <div className="rounded-2xl">
      <div className="p-15 w-full h-full aspect-video">
        <YouTubeEmbed
          videoid={testimonial.videoUrl}
          style="border-none"
          playlabel="true"
          params="disablekb=1&enablejsapi=1&playsinline=1"
        />
      </div>
    </div>
  );
}