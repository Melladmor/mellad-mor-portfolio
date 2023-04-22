import React from 'react'
import {motion} from 'framer-motion'
import { expInfoData } from '@/data/expData'
import Image from 'next/image'
type Props = {
    el:{
        id:number,
        compImage:string,
        jobTitle:string,
        compName:string,
        tecno:any,
        startDate:string,
        endData:string,
        isCurrentJob:boolean,
        points:any
    }
}

export default function ExperienceCard({el}: Props) {


    
  return (
    <article className='cardExperince'>
        <div>
            <motion.img
            initial={{
                y:-200,
                opacity:0
            }}
            transition={{
                duration:1.2
            }}
            animate={{
                opacity:1,
                y:0
            }}
            viewport={{
                once:true
            }}
            className='w-28 h-28 rounded-full xl:w-[125px] xl:h-[125px] object-cover'
            src={el.compImage}
            alt='...'
            />
        </div>

        <div className='px-0 md:px-10'>
            <h4 className='text-2xl md:text-3xl font-light'>{el.jobTitle}</h4>
            <p className='uppercase font-bold md:text-1xl text-md mt-1'>{el?.compName}</p>
            <div className='flex space-x-2 my-2'>

                {el?.tecno?.map((el:any)=>{
                    return(
                        <Image 
                        className='md:h-8 md:w-8 h-6 w-6 rounded-full'
                        width={32}
                        height={32}
                        src={el?.image} alt='...'
                        key={el?.id}
                        />
                    )
                })}
            </div>

            <p className='uppercase py-3 text-gray-300'>{el?.startDate} - {el?.isCurrentJob===true ?'Until Now':el?.endData}</p>

            <ul className='list-disc space-y-4 ml-4 md:text-lg text-sm w-[310px]'>
                {el?.points?.map((el:any)=>{
                    return(
                        <li key={el?.id}>{el.title}</li>
                    )
                })}

            </ul>
        </div>
    </article>
  )
}
