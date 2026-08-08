import Link from "next/link";
import MuImage from "@/components/MuImage";
import { Button } from "@/components/ui/button";
import { galleryEvents } from "@/data/gallery";

const sneakPeekImages = galleryEvents.slice(0, 6).map((event) => ({
  src: event.coverImage,
  alt: event.name,
}));

export default function GallerySneakPeek() {
  return (
    <section className="w-full px-4 py-20 sm:px-6 md:px-12 lg:px-24 xl:px-40">
      <div className="mx-auto max-w-7xl text-center">
        <h2 className="text-2xl font-bold text-mulearn-blackish sm:text-3xl">
          A glimpse into our <span className="text-mulearn">community</span>
        </h2>
        <p className="mt-2 text-mulearn-gray-600">See the moments your support makes possible.</p>
      </div>

      <div className="mx-auto mt-10 grid max-w-7xl grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {sneakPeekImages.map((image) => (
          <Link
            key={image.src}
            href="/gallery"
            className="group relative aspect-square overflow-hidden rounded-2xl"
          >
            <MuImage
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </Link>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Link href="/gallery">
          <Button variant="outline" className="font-semibold">
            View full gallery
          </Button>
        </Link>
      </div>
    </section>
  );
}
