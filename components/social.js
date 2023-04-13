import { FaFacebookF, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Social = () => {
  return (
    <>
      <div className="text-white">
        <div className="flex-col space-y-4 justify-center md:justify-start">
          <div
            onClick={() => window.open("https://www.facebook.com", "_blank")}
            className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer"
          >
            <FaFacebookF size={20} />
          </div>
          <div
            onClick={() =>
              window.open("https://www.linkedin.com/feed", "_blank")
            }
            className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer"
          >
            <FaLinkedin size={20} />
          </div>
          <div
            onClick={() =>
              window.open("https://github.com/Bodrul-Huda", "_blank")
            }
            className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer"
          >
            <FaGithub size={20} />
          </div>
          <div
            onClick={() => window.open("https://facebook.com", "_blank")}
            className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer"
          >
            <FaInstagram size={20} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Social;
