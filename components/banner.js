import Image from "next/image";

const Banner = () => {
  return (
    <>
      <div
        id="banner"
        className="text-white md:flex items-center justify-between gap-6"
      >
        <div className="relative h-40 w-40 md:h-80 md:w-80 flex-shrink-0 rounded-full">
          <Image
            src="/hero.png"
            layout="fill"
            objectFit="cover"
            alt="hero"
            className="rounded-full"
          />
        </div>

        <div className="inline-flex absolute top-[10rem] left-[1rem] h-20 w-20 md:h-40 md:w-40  bg-gray-200 rounded-full opacity-50 hover:animate-ping"></div>
        <div>
          <p className="text-lg text-slate-300 md:text2xl ">Hi I Am</p>
          <h1 className=" text-slate-100 text-4xl md:text-6xl font-semibold">
            Bodrul Huda Attasham
          </h1>
          <h3 className="text-2xl md:text-3xl py-2 text-slate-300">
            Software Engineer
          </h3>
          <p className="text-lg text-slate-300 md:text2xl ">
            Web and Mobile Application Developer
          </p>
        </div>
      </div>
    </>
  );
};

export default Banner;
