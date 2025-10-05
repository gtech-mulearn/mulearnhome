import Image from "next/image";

export default function MuLoader() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <Image
        src="/assets/loader/MuLoader.gif"
        alt="Loader"
        height={400}
        width={400}
        unoptimized={true}
      />
    </div>
  );
};
