import React from 'react'
import {motion} from 'framer-motion'
import ExperienceCard from './ExperienceCard'
import SwiperComponent from './SwiperComponent'
import { SwiperSlide } from 'swiper/react'
import { expInfoData } from '@/data/expData'

type Props = {
}

export default function WorkExperience({}: Props) {
  const data = expInfoData?.experience
  

  return (
    <motion.div
    initial={{
    opacity:0
    }}
    whileInView={{
    opacity:1
    }}
    transition={{
    duration:2
    }}
    
    className='h-screen flex flex-col justify-center items-center space-y-3'>
        <h3 className='headers_sections'>Experience</h3>
        <h3 className='headers_sections2 md:hidden'>Swip The Card To Show More.</h3>
        <div className='cardLarge'>
          <SwiperComponent>
          {data?.map((el:any)=>{
            return(
              <SwiperSlide key={el?.id}>
                <ExperienceCard el={el}/>
              </SwiperSlide>
            )
          })}
          </SwiperComponent>
        </div>

        <div className='w-full flex space-x-5   overflow-x-scroll px-5 snap-x snap-mandatory md:hidden'>
        {data?.map((el:any)=>{
          return(
              <ExperienceCard el={el} key={el?.id}/>
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
duration:2
}}

className='h-screen relative flex overflow-hidden flex-col text-left max-w-full px-10 justify-evenly mx-auto items-center'>
    <h3 className='headers_sections'>Experience</h3>

    <div className='w-full flex space-x-5  overflow-x-scroll p-5 snap-x snap-mandatory'>
      <ExperienceCard />
      <ExperienceCard />
      <ExperienceCard />

    </div>
</motion.div> */}