import React from 'react'
import {motion} from 'framer-motion'
import Link from 'next/link'
import { SocialIcon } from 'react-social-icons'
import {PhoneIcon , EnvelopeIcon ,MapPinIcon} from '@heroicons/react/24/solid'
import { HeaderData } from '@/typings'
type Props = {
    pageInfoData:HeaderData
}

export default function CardContact({pageInfoData}: Props) {
  return (
    <div className='grid grid-cols-2 gap-2 max-w-7xl'>
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
                <Link href={`tel:${pageInfoData?.phoneNumber}`} className='cardContact'>
                <PhoneIcon className='h-7 w-7'/>
                <p>{pageInfoData?.phoneNumber}</p>
                </Link>
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
                <Link href={`mailto:${pageInfoData?.email}`} className='cardContact'>
                <EnvelopeIcon className='h-7 w-7'/>
                <p>{pageInfoData?.email}</p>
            </Link>

            </motion.div>

            <motion.div
            initial={{
            y:200,
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
            className='col-span-2'>
                <Link href="mailto:melladmrshid@gmail.com" className='cardContact'>
                <MapPinIcon className='w-7 h-7'/>
                <p>{pageInfoData?.loaction}</p>
                </Link>
            </motion.div>


        </div>
  )
}