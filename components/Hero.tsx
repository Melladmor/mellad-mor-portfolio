import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackGroundCircle from "./BackGroundCircle";
import Image from "next/image";
import Link from "next/link";
import { heroInfoData } from "@/data/heroData";

export default function Hero() {
  const data = heroInfoData;
  const typingText = heroInfoData.typingText;
  const role = heroInfoData.role;
  const image = heroInfoData.image;

  const [text, count] = useTypewriter({
    words: typingText,
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackGroundCircle />
      <Image
        src={image}
        alt="..."
        width={144}
        height={144}
        className="relative rounded-full shadow-2xl shadow-orange-500 w-36 h-36  mx-auto object-cover"
      />
      <div className="z-20">
        <h2 className="md:text-sm text-[11px] uppercase text-gray-500 pb-2 tracking-[2px]">
          {role}
        </h2>
        <h1 className="text-1xl md:text-5xl  font-semibold p-5">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>

        <div className="md:pt-5 pt-2">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>

          <Link href="#experince">
            <button className="heroButton">Experince</button>
          </Link>

          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>

          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
