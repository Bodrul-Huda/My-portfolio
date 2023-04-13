import { useState } from "react";
import Apple from "./expList/apple";
import Google from "./expList/google";
import Micro from "./expList/micro";
import React from "./expList/react";

const Experience = () => {
  const [workReact, setWorkReact] = useState(true);
  const [workGoogle, setWorkGoogle] = useState(false);
  const [workApple, setWorkApple] = useState(false);
  const [workMicro, setWorkMicro] = useState(false);

  const bg = {
    background: "url('/bg.svg') no-repeat",
    // backgroundPosition: "0% 100%",
    backgroundPosition: "right",
    backgroundSize: "500px",
    // opacity: 0.5,
  };

  const handleApple = () => {
    setWorkApple(true);
    setWorkReact(false);
    setWorkMicro(false);
    setWorkGoogle(false);
  };
  const handleMicro = () => {
    setWorkApple(false);
    setWorkReact(false);
    setWorkMicro(true);
    setWorkGoogle(false);
  };
  const handleGoogle = () => {
    setWorkApple(false);
    setWorkReact(false);
    setWorkMicro(false);
    setWorkGoogle(true);
  };
  const handleReact = () => {
    setWorkApple(false);
    setWorkReact(true);
    setWorkMicro(false);
    setWorkGoogle(false);
  };

  return (
    <>
      <div
        id="experience"
        className="max-w-containers mx-auto py-10 lg:py-24 px-4 bg-slate-300"
      >
        <div className="flex flex-col items-center">
          <h1 className=" text-center text-3xl text-[#000133]  font-bold uppercase">
            My Experience
          </h1>
          <div className="border-[1px] border-black w-10 my-4" />
        </div>
        <div
          className="w-full mt-10 flex flex-col md:flex-row gap-16"
          style={bg}
        >
          <ul className="md:w-32 flex flex-col">
            <li
              onClick={handleReact}
              className={`${
                workReact
                  ? " border-l-black text-orange-500"
                  : " border-l-slate-300"
              } border-l-2 bg-transparent py-3 text-sm  cursor-pointer duration-300 px-8 font-medium hover:bg-slate-400`}
            >
              React
            </li>
            <li
              onClick={handleGoogle}
              className={`${
                workGoogle
                  ? " border-l-black text-orange-500"
                  : " border-l-slate-300"
              } border-l-2 bg-transparent py-3 text-sm  cursor-pointer duration-300 px-8 font-medium hover:bg-slate-400`}
            >
              Google
            </li>
            <li
              onClick={handleMicro}
              className={`${
                workMicro
                  ? " border-l-black text-orange-500"
                  : " border-l-slate-300"
              } border-l-2 bg-transparent py-3 text-sm  cursor-pointer duration-300 px-8 font-medium hover:bg-slate-400`}
            >
              Microsoft
            </li>
            <li
              onClick={handleApple}
              className={`${
                workApple
                  ? " border-l-black text-orange-500"
                  : "border-l-slate-300"
              } border-l-2 bg-transparent py-3 text-sm  cursor-pointer duration-300 px-8 font-medium hover:bg-slate-400`}
            >
              Apple
            </li>
          </ul>
          {workApple && <Apple />}
          {workGoogle && <Google />}
          {workMicro && <Micro />}
          {workReact && <React />}
        </div>
      </div>
    </>
  );
};

export default Experience;
