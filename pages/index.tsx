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
import Image from "next/image";
import { motion } from "framer-motion";
export const InstanceNextLink = Link as any;
export const InstancNextHead = Head as any;
export const InstanceNextImage = Image as any;
export const InstanceMotion = motion as any
const InstanceHeader = Header as any
const InstanceCvModal = CvModal as any;
const InstancHeroSection = Hero as any;
const InstanceAboutSection = About as any;
const InstanceWorkExperience = WorkExperience as any;
const InstanceSkills = Skills as any;
const InstanceProjects = Projects as any;
const InstanceContact = Contact as any;
const InstanceHomeIcon = HomeIcon as any
const InstanceUserIcon = UserIcon as any
const InstanceBookmarkIcon = BookmarkIcon as any
const InstanceTableCellsIcon = TableCellsIcon as any
const InstancePhoneIcon = PhoneIcon as any
const InstanceInboxArrowDownIcon = InboxArrowDownIcon as any
const InstanceArrowUpIcon = ArrowUpIcon as any

export default function Home() {
  const [showCvModal, setShowCvModal] = useState<boolean>(false);

  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen sanp-y snap-mandatory overflow-scroll z-0 main_container overflow-x-hidden">
      
      {showCvModal && <InstanceCvModal setShowCvModal={setShowCvModal} />}

      <Head>
        <title>Mellad Morshed</title>
        <meta
          name="description"
          content="Hello, my name is Mellad Morshed. I am a front-end developer. This is my portfolio. I hope you like it❤️😊"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <InstanceHeader />

      <main className="main_sections">
        <section id="hero" className="snap-start">
          <InstancHeroSection />
        </section>

        <section id="about" className="snap-center">
          <InstanceAboutSection />
        </section>

        <section id="experince" className="snap-center">
          <InstanceWorkExperience />
        </section>

        <section id="skills" className="snap-start">
          <InstanceSkills />
        </section>

        <section id="projects" className="snap-start">
          <InstanceProjects />
        </section>

        <section id="contact" className="snap-start">
          <InstanceContact />
        </section>
      </main>

      <footer className="sticky bottom-5 w-full flex justify-center items-center z-50">
        <div className="flex flex-row gap-3">
          <InstanceNextLink href="#hero">
            <InstanceHomeIcon className="h-7 w-7 hover:bg-[#F7AB0A] rounded-full p-1 bg-[#F7AB0A]/60 xl:hidden" />
          </InstanceNextLink>

          <InstanceNextLink href="#about">
            <InstanceUserIcon className="h-7 w-7 hover:bg-[#F7AB0A] rounded-full p-1 bg-[#F7AB0A]/60 xl:hidden" />
          </InstanceNextLink>

          <InstanceNextLink href="#experince">
            <InstanceBookmarkIcon className="h-7 w-7 hover:bg-[#F7AB0A] rounded-full p-1 bg-[#F7AB0A]/60 xl:hidden" />
          </InstanceNextLink>

          <InstanceNextLink href="#projects">
            <InstanceTableCellsIcon className="h-7 w-7 hover:bg-[#F7AB0A] rounded-full p-1 bg-[#F7AB0A]/60 xl:hidden" />
          </InstanceNextLink>

          <InstanceNextLink href="#contact">
            <InstancePhoneIcon className="h-7 w-7 hover:bg-[#F7AB0A] rounded-full p-1 bg-[#F7AB0A]/60" />
          </InstanceNextLink>

          <button onClick={() => setShowCvModal(!showCvModal)}>
            <InstanceInboxArrowDownIcon className="h-7 w-7 hover:bg-[#F7AB0A] rounded-full p-1 bg-[#F7AB0A]/60" />
          </button>

          <InstanceNextLink href="#hero">
            <InstanceArrowUpIcon className="h-7 w-7 hover:bg-[#F7AB0A] rounded-full p-1 bg-[#F7AB0A]/60 " />
          </InstanceNextLink>
        </div>
      </footer>
    </div>
  );
}
