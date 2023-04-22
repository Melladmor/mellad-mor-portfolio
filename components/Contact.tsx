import React from 'react'
import {motion} from 'framer-motion'
import CardContact from './CardContact'
import FormContact from './FormContact'
import { headerInfoData } from '@/data/headerData'

type Props = {
}

function Contact({}: Props) {

  const data = headerInfoData
  return (
    <div className='h-screen flex flex-col justify-center items-center max-w-7xl mx-auto space-y-3 p-3 md:p-0'>
        <h3 className='headers_sections'>Contact</h3>

        <div className='flex flex-col space-y-10'>
            <h4 className='text-2xl md:text-4xl font-semibold text-center'>
                I have got just what you need.{" "}
                <span className='decoration-[#F7AB0A]/50 underline'>Lets Talk.</span>
            </h4>
        </div>

        <CardContact pageInfoData={headerInfoData}/>

        <FormContact pageInfoData={headerInfoData}/>
        
    </div>
  )
}

export default Contact