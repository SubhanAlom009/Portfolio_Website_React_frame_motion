import React from 'react'
import {HERO_CONTENT} from '../constants'
import profile from '../assets/kevinRushProfile.png'
import { motion, transform } from "framer-motion"

const container = (delay)=>({
    hidden:{x:-100,opacity:0},
    visible:{
        x:0,
        opacity:100,
        transition:{duration:0.5,delay:delay},
    },  
})
function Hero() {
  return (
    <div className='pb-4 border-b mt-36 border-neutral-900 lg:mb-36'>
        <div className='flex flex-wrap'>
            <div className='w-full lg:w-1/2'>
                <div className='flex flex-col item-center lg:items-start'>
                    <motion.h1 variants={(container(0))} initial="hidden"  animate='visible'
                    className='pb-16 text-6xl font-thin tracking-tight lg:text-8xl lg:mt-16'>Kevin Rush</motion.h1>
                    <motion.h4 variants={(container(0.5))} initial="hidden"  animate='visible' className='text-3xl font-medium text-transparent bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text'>Full Stack Developer</motion.h4>
                    <motion.p variants={(container(1))} initial="hidden"  animate='visible' className='max-w-xl py-6 my-2 font-light tracking-tight'>{HERO_CONTENT}</motion.p>
                </div>
            </div>
            <div className='w-full lg:w-1/2'>
                <div className='flex justify-center'>
                    <motion.img initial={{x:100,opacity:0}} animate={{x:0,opacity:100}} transition={{duration:1,delay:1.2}} src={profile} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero
