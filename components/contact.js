import { MdOutlineMarkEmailUnread, MdOutlineWhatsapp } from "react-icons/md";
import { FaFacebookF, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <div
        id="contact"
        className="max-w-containers mx-auto py-[10rem]  px-[4rem] bg-[#000133]"
      >
        <div className="flex flex-col items-center">
          <h1 className=" text-center text-3xl text-slate-200  font-bold uppercase">
            Contact me
          </h1>
          <div className="border-[1px] border-slate-200 w-10 my-4" />
        </div>
        <div className=" md:flex items-center justify-between mt-6">
          <div className="flex-col flex-grow">
            <div className="text-slate-200 font-semibold my-2">
              <span
                onClick={() =>
                  window.open(
                    "https://mail.google.com/mail/u/1/?view=cm&to=bodul.huda009@gmail.com&su",
                    "_blank"
                  )
                }
                className="flex items-center gap-1 cursor-pointer"
              >
                <MdOutlineMarkEmailUnread className="h-6 w-6" />
                bodul.huda009@gmail.com
              </span>
            </div>
            <div className="text-slate-200 font-semibold my-2">
              <span
                onClick={() =>
                  window.open(
                    "//api.whatsapp.com/send?phone=+601126029793&text=Hi",
                    "_blank"
                  )
                }
                className="flex cursor-pointer items-center gap-1"
              >
                <MdOutlineWhatsapp className="h-6 w-6" />
                +601126029793
              </span>
            </div>
          </div>

          <div className="text-white mt-[8rem] md:mt-0">
            <div className="flex  gap-5 items-center justify-center ">
              <div
                onClick={() =>
                  window.open("https://www.facebook.com", "_blank")
                }
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
        </div>
      </div>
    </>
  );
};

export default Contact;
