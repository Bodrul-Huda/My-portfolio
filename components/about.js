import Image from "next/image";

const About = () => {
  const bg = {
    background: "url('/graph.png') no-repeat",
    // backgroundPosition: "0% 100%",
    backgroundPosition: "left",
    backgroundSize: "850px",
    // opacity: 0.5,
  };

  return (
    <>
      <div id="about" className="bg-slate-500 w-full h-auto py-8 px-4">
        <div className="md:flex justify-between gap-4">
          <div className="relative h-[500px] w-[350px] flex-shrink-0">
            <Image
              src="/IMG_20210321_135500.jpg"
              layout="fill"
              alt="about"
              objectFit="contain"
            />
          </div>

          <div className="p-4 space-y-3" style={bg}>
            <h1 className="text-3xl font-bold uppercase text-slate-200">
              About Me
            </h1>
            <div className="border-[1px] border-slate-200 w-10 my-4" />
            <h1 className="text-xl text-slate-200 font-bold">
              I am a Creative Website and Mobile Application Developer
            </h1>
            <p className="text-slate-200">
              One challenge for solo professionals is how to promote a variety
              of services without overwhelming site visitors. Grant handles this
              well on his homepage, promoting his current offer for experienced
              professional speakers while also giving a link for people who are
              interested in learning how to get started speaking for the first
              time.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
