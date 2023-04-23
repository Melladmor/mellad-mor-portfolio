import React from 'react'
import {motion} from 'framer-motion'
type Props = {
    directionLeft?:boolean,
    singleSkill:{
        id:number,
        image:string,
        prog:number
    }
}

export default function SkillCardComponent({directionLeft ,singleSkill}: Props) {
    return (
    <div className='group relative flex  cursor-pointer'>

        <motion.img
        initial={{
            y:100,
            opacity:0
        }}
        transition={{
            duration:1
        }}
        whileInView={{
            y:0,
            opacity:1,
        }}
        viewport={{once:true}}

        src={singleSkill?.image}
        className='rounded-full border border-[#F7AB0A] object-cover w-16 h-16 xl:w-28 xl:h-28 filter group-hover:grayscale transition duration-300 ease-in-out'
        />

        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-16 h-16 xl:w-28 xl:h-28 rounded-full'>
            <div className='flex items-center justify-center h-full'>
                <p className='md:text-3xl text-sm font-bold text-black opacity-100'>{singleSkill?.prog} %</p>
            </div>
        </div>
        
    </div>
        
  )
}