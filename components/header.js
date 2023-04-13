import { Link } from "react-scroll";

import { useState } from "react";
import { useRouter } from "next/router";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const router = useRouter();

  const currentpath = router.pathname;

  return (
    <div className="w-full sticky top-0 z-50 bg-slate-800 py-4">
      <nav>
        <div className="container justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8 ">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <div className="md:hidden">
                <button
                  className="p-2 text-slate-100 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "block" : "hidden"
              }`}
            >
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                <li className="text-slate-100">
                  <Link
                    legacyBehavior
                    href="#banner"
                    to="banner"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                  >
                    <p className="nav activeNav">Home</p>
                  </Link>
                </li>
                <li className="text-white">
                  <Link
                    legacyBehavior
                    href="#about"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                  >
                    <p className=" nav">About</p>
                  </Link>
                </li>
                <li className="text-white">
                  <Link
                    legacyBehavior
                    href="#education"
                    to="education"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                  >
                    <p className="nav">Education</p>
                  </Link>
                </li>
                <li className="text-white">
                  <Link
                    legacyBehavior
                    href="#experience"
                    to="experience"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                  >
                    <p className="nav">Experience</p>
                  </Link>
                </li>
                <li className="text-white">
                  <Link
                    legacyBehavior
                    href="#project"
                    to="project"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                  >
                    <p className="nav ">Project</p>
                  </Link>
                </li>
                <li className="text-white">
                  <Link
                    legacyBehavior
                    href="#contact"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                  >
                    <p className="nav">Contact</p>
                  </Link>
                </li>

                <a
                  href="Bodrul_Huda_Resume.pdf"
                  download="Bodrul_Huda_Resume.pdf"
                >
                  <button className="text-slate-100 bg-slate-500 w-full mt-4 py-2 md:px-4 rounded-full hover:bg-slate-300 hover:text-slate-600 active:scale-95 transition-transform duration-150 ease-out">
                    Resume
                  </button>
                </a>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
