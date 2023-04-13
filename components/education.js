import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
  return (
    <>
      <div
        id="education"
        className="max-w-containers mx-auto py-10 lg:py-24 px-4 bg-slate-400"
      >
        <div className="flex flex-col items-center">
          <h1 className=" text-center text-3xl text-[#000133]  font-bold uppercase">
            education
          </h1>
          <div className="border-[1px] border-black w-10 my-4" />
        </div>
        <div>
          <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
              <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
                <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                  <FaGraduationCap className="w-[4rem] h-[4rem]" />
                </div>
                <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                    Bachelor of Information & Communication Technology
                  </h2>
                  <p className=" text-slate-700 leading-relaxed text-base">
                    Asia e University (Sep 2021 - Present)
                  </p>
                  <p className="mt-3 text-slate-200 inline-flex items-center">
                    CGPA: 3.95
                  </p>
                </div>
              </div>
              <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col-reverse">
                <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                    Diploma in Information & Communication Technology
                  </h2>
                  <p className=" text-slate-700 leading-relaxed text-base">
                    Bayu College (Sep 2017 - 2019)
                  </p>
                  <p className="mt-3 text-slate-200 inline-flex items-center">
                    CGPA: 3.15
                  </p>
                </div>
                <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                  <FaGraduationCap className="w-[4rem] h-[4rem]" />
                </div>
              </div>
              <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
                <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                  <FaGraduationCap className="w-[4rem] h-[4rem]" />
                </div>
                <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                    Higher Secondary Certificate
                  </h2>
                  <p className=" text-slate-700 leading-relaxed text-base">
                    Government College Dinajpur (2008-2010)
                  </p>
                  <p className="mt-3 text-slate-200 inline-flex items-center">
                    CGPA: 3.65
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Education;
