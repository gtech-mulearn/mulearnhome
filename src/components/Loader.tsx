import MuImage from "@/components/MuImage";

export default function MuLoader() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <MuImage
        src="/assets/loader/MuLoader.gif"
        alt="Loader"
        height={400}
        width={400}
        unoptimized={true}
      />
    </div>
  );
};
