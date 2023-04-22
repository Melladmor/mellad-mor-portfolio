import React, { useState } from 'react'
import {motion} from 'framer-motion'
import {useForm  ,SubmitHandler} from 'react-hook-form'
import { HeaderData } from '@/typings'
type Props = {
    pageInfoData:HeaderData
}

type FormValues ={
    name:string,
    email:string,
    message:string
}

function FormContact({pageInfoData}: Props) {


    const {register , handleSubmit  , formState:{errors}} = useForm()
    const onSubmit = (data:any)=>{
        window.location.href = `mailto:${pageInfoData.email}?body=Hi, My name is  ${data?.name}. 
        ${data?.message}`
    };

  return (
    <form className='grid grid-cols-1 gap-2' onSubmit={handleSubmit(onSubmit)}>
        <motion.div
        initial={{
        x:-100,
        opacity:0,
        scale:0.5
        }}
        whileInView={{
        x:0,
        opacity:1,
        scale:1
        }}
        transition={{
        duration:1.5
        }}
        >
            <input   {...register('name')} type='text' className='inputStyle' placeholder='Name'/>
        </motion.div>

        <motion.div
        initial={{
        x:100,
        opacity:0,
        scale:0.5
        }}
        whileInView={{
        x:0,
        opacity:1,
        scale:1
        }}
        transition={{
        duration:1.5
        }}
        >
            <input   {...register('email')} type='email' className='inputStyle' placeholder='Email'/>
        </motion.div>
        <motion.div
        initial={{
            x:-100,
            opacity:0,
            scale:0.5
            }}
            whileInView={{
            x:0,
            opacity:1,
            scale:1
            }}
            transition={{
            duration:1.5
            }}
        >
            <textarea  {...register('message')} className='inputStyle' placeholder='Message'></textarea>
        </motion.div>

        <motion.button
        initial={{
        y:100,
        opacity:0,
        scale:0.5
        }}
        whileInView={{
        y:0,
        opacity:1,
        scale:1
        }}
        transition={{
        duration:1.5
        }}
        type='submit'
        className='border border-[#F7AB0A]/60 p-2 rounded-md hover:border-[#F7AB0A]/80 hover:bg-[#F7AB0A]/60 bg-[#F7AB0A]/40'>Send</motion.button>
    </form>
  )
}

export default FormContact