import Image from "next/image";

const MuLoader = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <Image
        src="/assets/loader/MuLoader.gif"
        alt="Loader"
        height={300}
        width={300}
        unoptimized={true}
      />
    </div>
  );
};

export default MuLoader;
