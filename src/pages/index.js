import Link from "next/link";
import Header from "../../components/header";
import Banner from "../../components/banner";
import Footer from "../../components/footer";
import Social from "../../components/social";
import About from "../../components/about";
import Experience from "../../components/experience";
import Project from "../../components/project";
import Education from "../../components/education";
import Contact from "../../components/contact";

export default function Home() {
  // console.log(data);
  return (
    <>
      <main className="relative">
        <Header />
        <div className="bg-[#000133]  w-full h-[500px] sm:h-[550px] md:h[600px] lg:h-[650px]">
          <section>
            <div className="max-w-7xl mx-auto px-8 py-16 sm:px-16 flex justify-between items-center">
              <Banner />
              <Social />
            </div>
          </section>
        </div>
        <section>
          <About />
        </section>
        <section>
          <Education />
        </section>
        <section>
          <Experience />
        </section>

        <section>
          <Project />
        </section>
        <section>
          <Contact />
        </section>
      </main>
    </>
  );
}
