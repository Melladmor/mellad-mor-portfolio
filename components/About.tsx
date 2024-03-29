import React from "react";
import { aboutInfoData } from "@/data/aboutData";
import { InstanceMotion } from "@/pages";

type Props = {};

export default function About({}: Props) {
  const informations = aboutInfoData.information;
  const image = aboutInfoData.image;

  return (
    <InstanceMotion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 2,
      }}
      className="h-screen flex flex-col justify-center items-center space-y-3">
      <h3 className="headers_sections">About</h3>
      <div className="flex flex-col justify-center items-center text-center md:flex-row md:gap-20 md:text-start space-y-3">
        <div>
          <InstanceMotion.img
            initial={{
              x: -200,
              opacity: 0.5,
            }}
            animate={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.8,
            }}
            src={image}
            alt="..."
            className="flex-shrink-0 w-56 h-62 rounded-xl object-cover md:rounded-lg md:w-52 md:h-64 xl:w-[300px] xl:h-[400px]"
          />
        </div>

        <InstanceMotion.div
          initial={{
            x: -300,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1,
          }}
          className="md:space-y-3">
          <h4 className="md:text-3xl text-lg font-semibold">
            Here is a{" "}
            <span className="underline decoration-[#F7AB0A]">little</span>{" "}
            background
          </h4>
          <p className="text-xs md:text-lg md:max-w-lg md:text-start w-96 md:w-full">
            {informations}
          </p>
        </InstanceMotion.div>
      </div>
    </InstanceMotion.div>
  );
}
