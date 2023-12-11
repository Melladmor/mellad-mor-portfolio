import React from "react";
import SkillCardComponent from "./SkillCardComponent";
import { skillsInfoData } from "@/data/skillData";
import { InstanceMotion } from "@/pages";
const InstanceSkillCardComponent = SkillCardComponent as any;

export default function Skills() {
  const data = skillsInfoData.skills;

  return (
    <InstanceMotion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="h-screen flex flex-col justify-center items-center space-y-3 relatvie">
      <div className="mb-10">
        <h3 className="headers_sections">Skills</h3>
        <h3 className="headers_sections2">
          Hover over a skill for currency proficiency
        </h3>
      </div>
      <div className="grid grid-cols-4 xl:grid-cols-4 md:grid-cols-3 gap-5 ">
        {data?.map((el: any) => {
          return <InstanceSkillCardComponent singleSkill={el} key={el?.id} />;
        })}
      </div>
    </InstanceMotion.div>
  );
}
