import React from 'react'
import {RiReactjsLine} from "react-icons/ri"
import {TbBrandNextjs} from 'react-icons/tb'
import {SiMongodb} from "react-icons/si"
import {DiRedis} from "react-icons/di"
import {FaNodeJs} from "react-icons/fa"
import {BiLogoPostgresql} from "react-icons/bi"
import { animate, motion, transform } from "framer-motion"

const iconVariants = (duration)=>({
    initial:{y:-10},
    animate:{
        y:[10,-10],
        transition:{
            duration:duration,
            repeat:Infinity,
            ease:"linear",
            repeatType:"reverse"
        }
    }
})

function Technologies() {
  return (
    <div className='pb-4 border-b mt-36 border-neutral-900 lg:mb-36'>
        <motion.h1 whileInView={{opacity:1,y:0}} initial={{opacity:0,y:-100}} transition={{duration:1.5}} className='pb-12 text-4xl text-center'>Technologies</motion.h1>
        <motion.div whileInView={{opacity:1,y:0}} initial={{opacity:0,y:50}} transition={{duration:0.5}} className='flex flex-wrap items-center justify-center gap-4'>
            <motion.div variants={iconVariants(2.5)} initial='initial' animate='animate' className='p-4 border-4 rounded-2xl border-neutral-800'>
                <RiReactjsLine className='text-7xl text-cyan-500'/>
            </motion.div>
            <motion.div variants={iconVariants(3)} initial='initial' animate='animate' className='p-4 border-4 rounded-2xl border-neutral-800'>
                <TbBrandNextjs className='text-neutral-400 text-7xl'/>
            </motion.div>
            <motion.div variants={iconVariants(5)} initial='initial' animate='animate' className='p-4 border-4 rounded-2xl border-neutral-800'>
                <SiMongodb className='text-green-500 text-7xl'/>
            </motion.div>
            <motion.div variants={iconVariants(2)} initial='initial' animate='animate' className='p-4 border-4 rounded-2xl border-neutral-800'>
                <DiRedis className='text-red-700 text-7xl'/>
            </motion.div>
            <motion.div variants={iconVariants(6)} initial='initial' animate='animate' className='p-4 border-4 rounded-2xl border-neutral-800'>
                <FaNodeJs className='text-green-600 text-7xl'/>
            </motion.div>
            <motion.div variants={iconVariants(4)} initial='initial' animate='animate' className='p-4 border-4 rounded-2xl border-neutral-800'>
                <BiLogoPostgresql className='text-7xl text-cyan-700'/>
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Technologies
