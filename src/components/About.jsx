import React from 'react'
import about from '../assets/about.jpg'
import {ABOUT_TEXT} from '../constants'
import { motion, transform } from "framer-motion"
function About() {
  return (
    <div className='pb-4 border-b mt-36 border-neutral-900 lg:mb-36'>
      <h1 className='pb-12 text-4xl text-center'>About <span className='text-neutral-500'>Me</span></h1>
      <div className='flex flex-wrap'>
        <motion.div whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}} transition={{duration:0.5}} className='w-full lg:w-1/2 lg:p-8'>
            <div className='flex items-center justify-center'>
                <img className='rounded-lg' src={about} alt='about'/>
            </div>
        </motion.div>
        <motion.div whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}} transition={{duration:0.5}} className='w-full lg:w-1/2'>
                <div className='flex items-center justify-center'> 
                    <p className='max-w-lg py-6 my-2'>
                        {ABOUT_TEXT}
                    </p>
                </div>
            </motion.div>
      </div>
    </div>
  )
}

export default About
