import React from 'react'
import {motion} from 'framer-motion'
type Props = {}

function BackGroundCircle({}: Props) {
  return (
    <motion.div initial={{opacity:0,}} animate={{scale:[1,2,2,3,1],opacity:[0.1,0.2,0.4,0.0,0.1,1.0],borderRadius:['20%','20%','20%','20%','20%']}} transition={{duration:2.5}} className='relative flex justify-center items-center'>
        <div className='border absolute md:border-[#333333] border-orange-400 rounded-full  md:h-[200px] md:w-[200px] h-[200px] w-[200px] mt-52 animate-ping'/>
        <div className='border absolute border-[#333333] rounded-full md:h-[300px] md:w-[300px] h-[200px] w-[200px] mt-52 '/>
        <div className='border absolute border-[#333333] rounded-full md:h-[500px] md:w-[500px] h-[300px] w-[300px] mt-52 '/>
        <div className='border absolute md:border-orange-400 border-[#333333]  rounded-full md:h-[650px] md:w-[650px] h-[450px] w-[450px] mt-52 animate-pulse'/>
        <div className='border absolute border-[#333333] rounded-full md:h-[800px] md:w-[800px] h-[600px] w-[600px] mt-52 '/>
    </motion.div>
  )
}

export default BackGroundCircle