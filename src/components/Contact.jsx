import React from 'react'
import { CONTACT } from '../constants'
import { motion, transform } from "framer-motion"
function Contact() {
  return (
    <div className='pb-4 border-b mt-36 border-neutral-900 lg:mb-6'>
       <motion.h1 whileInView={{opacity:1,y:0}} initial={{opacity:0,y:-100}} transition={{duration:0.5}} className='pb-12 text-4xl text-center'>Get in Touch</motion.h1>
       <div className='flex flex-col flex-wrap items-center space-y-3'>
         <motion.h1 whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}} transition={{duration:0.5}} className='text-sm tracking-wide text-neutral-400'>{CONTACT.address}</motion.h1>
         <motion.p whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}} transition={{duration:0.5}}  className='text-sm tracking-wide text-neutral-400'>{CONTACT.phoneNo}</motion.p>
         <motion.p whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}} transition={{duration:0.5}} className='text-sm tracking-wide text-neutral-400'>{CONTACT.email}</motion.p>
       </div>
    </div>
  )
}

export default Contact
