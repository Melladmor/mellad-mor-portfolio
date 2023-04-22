import React, { useState } from 'react'
import {motion} from 'framer-motion'
import { SwiperSlide } from 'swiper/react'
import SwiperComponentSlide from './SwiperComponentSlide'
import { projectsInfoData } from '@/data/projectData'
import Link from 'next/link'
import Fancybox from './FancyBox'
type Props = {}

function Projects({}: Props) {

    const data = projectsInfoData?.project
    const showProjectsList = data?.map((el:any)=>{
        return(
            <SwiperSlide key={el?.id} className='relative'>
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
                 className='imageContainerWithOutHover' >
                <Fancybox >
                <div className='flex justify-center items-center relative' id='myPanzoom'>
                <a data-fancybox="gallery" href={el?.projectImage} >
                <motion.img
                initial={{
                    y:-200,
                    opacity:0
                }}
                whileInView={{
                    y:0,
                    opacity:1
                }}
                transition={{
                    duration:1.5
                }}
                viewport={{once:true}}
                src={el?.projectImage} 
                alt='....'
                className='imageHover'
                />
                </a>

                </div>
                </Fancybox>
                <div className='space-y-3 flex justify-center flex-col items-center'>
                    <h4 className='text-2xl md:text-4xl font-semibold'>{el?.projectName}</h4>
                    <p className='text-sm md:text-md md:text-lg w-[400px] md:w-[700px]'>{el?.projectDesc}</p>
                </div>
                <div className='flex flex-col md:flex-row gap-2 justify-center items-center' >
                    {el?.url &&
                        <a href={el?.url} target='_blank'>
                            <button className='heroButton2'>Live Demo</button>
                        </a>
                    }
                    {el?.github &&
                        <a href={el?.github} target='_blank'>
                            <button className='heroButton2'>Git Hub</button>
                        </a>
                    }

                </div>
            </motion.div>
            </SwiperSlide>
            
        )
    })
  return (
    // <div className='h-screen relative flex overflow-hidden flex-col text-left  max-w-full justify-evenly mx-auto items-center z-0'>
    <div className='h-screen flex flex-col justify-center items-center space-y-3 relative'>

        <h3 className='headers_sections'>Projects</h3>
        <h3 className='headers_sections2'>Click On Image To Mega Zoom</h3>
        

        <SwiperComponentSlide>
            {showProjectsList}
        </SwiperComponentSlide>



        <div className='w-full absolute top-[30%] bg-[#F7AB0A]/60 left-0 h-[500px] -skew-y-12'>

        </div>
    </div>
  )
}

export default Projects