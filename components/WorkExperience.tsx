import React from "react";
import ExperienceCard from "./ExperienceCard";
import SwiperComponent from "./SwiperComponent";
import { SwiperSlide } from "swiper/react";
import { expInfoData } from "@/data/expData";
import { InstanceMotion } from "@/pages";

const InstanceSwiperComponent = SwiperComponent as any;
const InstanceSwiperSlide = SwiperSlide as any;
const InstanceExperienceCard = ExperienceCard as any;
export default function WorkExperience() {
  const data = expInfoData?.experience;

  return (
    <InstanceMotion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 2,
      }}
      className="h-screen flex flex-col justify-center items-center space-y-3">
      <h3 className="headers_sections">Experience</h3>
      <h3 className="headers_sections2 md:hidden">
        Swip The Card To Show More.
      </h3>
      <div className="cardLarge">
        <InstanceSwiperComponent>
          {data?.map((el: any) => {
            return (
              <InstanceSwiperSlide key={el?.id}>
                <InstanceExperienceCard el={el} />
              </InstanceSwiperSlide>
            );
          })}
        </InstanceSwiperComponent>
      </div>

      <div className="w-full flex space-x-5   overflow-x-scroll px-5 snap-x snap-mandatory md:hidden">
        {data?.map((el: any) => {
          return <InstanceExperienceCard el={el} key={el?.id} />;
        })}
      </div>
    </InstanceMotion.div>
  );
}
