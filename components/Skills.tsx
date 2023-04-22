import React from 'react'
import {motion} from 'framer-motion'
import SkillCardComponent from './SkillCardComponent'
import { skillsInfoData } from '@/data/skillData'
type Props = {
}

export default function Skills({}: Props) {
    const data = skillsInfoData.skills

  return (
    <motion.div
    initial={{
        opacity:0
    }}
    whileInView={{
        opacity:1
    }}
    transition={{
        duration:1.5
    }}
    className='h-screen flex flex-col justify-center items-center space-y-3 relatvie'>
        
        <div className='mb-10'>
        <h3 className='headers_sections'>Skills</h3>
        <h3 className='headers_sections2'>Hover over a skill for currency proficiency</h3>
        </div>
        <div className='grid grid-cols-4 xl:grid-cols-4 md:grid-cols-3 gap-5 '>
            {data?.map((el:any)=>{
                return(
                    <SkillCardComponent singleSkill={el} key={el?.id}/>
                )
            })}



        </div>
    </motion.div>
  )
}

{/* <motion.div
initial={{
    opacity:0
}}
whileInView={{
    opacity:1
}}
transition={{
    duration:1.5
}}
className='flex relative items-center justify-center flex-col text-center md:text-left  max-w[200px] xl:p-10 min-h-screen xl:space-y-0 mx-auto'>
    
    <div className='mb-10'>
    <h3 className='headers_sections'>Skills</h3>
    <h3 className='headers_sections2'>Hover over a skill for currency proficiency</h3>
    </div>
    <div className='grid grid-cols-3 xl:grid-cols-4 md:grid-cols-4 gap-5 '>
        <SkillCardComponent/>
        <SkillCardComponent/>
        <SkillCardComponent/>
        <SkillCardComponent/>
        <SkillCardComponent/>
        <SkillCardComponent/>
        <SkillCardComponent/>
        <SkillCardComponent/>
        <SkillCardComponent/>
        <SkillCardComponent/>
        <SkillCardComponent/>
        <SkillCardComponent/>


    </div>
</motion.div> */}