import Head from "next/head";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WorkExperience from "@/components/WorkExperience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Link from "next/link";
import {
  InboxArrowDownIcon,
  PhoneIcon,
  ArrowUpIcon,
  UserIcon,
  HomeIcon,
  BookmarkIcon,
  TableCellsIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";
import CvModal from "@/components/CvModal";
export default function Home() {
  const [showCvModal, setShowCvModal] = useState<boolean>(false);
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen sanp-y snap-mandatory overflow-scroll z-0 main_container overflow-x-hidden">
      {showCvModal && <CvModal setShowCvModal={setShowCvModal} />}

      <Head>
        <title>Mellad Morshed</title>
        <meta
          name="description"
          content="Hello, my name is Mellad Morshed. I am a front-end developer. This is my portfolio. I hope you like it❤️😊"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="main_sections">
        {/* hero */}
        <section id="hero" className="snap-start">
          <Hero />
        </section>

        {/* about */}
        <section id="about" className="snap-center">
          <About />
        </section>

        {/* experince */}

        <section id="experince" className="snap-center">
          <WorkExperience />
        </section>

        {/* skills */}

        <section id="skills" className="snap-start">
          <Skills />
        </section>

        {/* projects */}

        <section id="projects" className="snap-start">
          <Projects />
        </section>

        {/* contact */}

        <section id="contact" className="snap-start">
          <Contact />
        </section>
      </main>

      <footer className="sticky bottom-5 w-full flex justify-center items-center z-50">
        <div className="flex flex-row gap-3">
          <Link href="#hero">
            <HomeIcon className="h-7 w-7 hover:bg-[#F7AB0A] rounded-full p-1 bg-[#F7AB0A]/60 xl:hidden" />
          </Link>

          <Link href="#about">
            <UserIcon className="h-7 w-7 hover:bg-[#F7AB0A] rounded-full p-1 bg-[#F7AB0A]/60 xl:hidden" />
          </Link>

          <Link href="#experince">
            <BookmarkIcon className="h-7 w-7 hover:bg-[#F7AB0A] rounded-full p-1 bg-[#F7AB0A]/60 xl:hidden" />
          </Link>

          <Link href="#projects">
            <TableCellsIcon className="h-7 w-7 hover:bg-[#F7AB0A] rounded-full p-1 bg-[#F7AB0A]/60 xl:hidden" />
          </Link>

          <Link href="#contact">
            <PhoneIcon className="h-7 w-7 hover:bg-[#F7AB0A] rounded-full p-1 bg-[#F7AB0A]/60" />
          </Link>

          {/* <Link href='image/MelladMorshed.pdf' download> */}
          <button onClick={() => setShowCvModal(!showCvModal)}>
            <InboxArrowDownIcon className="h-7 w-7 hover:bg-[#F7AB0A] rounded-full p-1 bg-[#F7AB0A]/60" />
          </button>
          {/* </Link> */}

          <Link href="#hero">
            <ArrowUpIcon className="h-7 w-7 hover:bg-[#F7AB0A] rounded-full p-1 bg-[#F7AB0A]/60 " />
          </Link>
        </div>
      </footer>
    </div>
  );
}
