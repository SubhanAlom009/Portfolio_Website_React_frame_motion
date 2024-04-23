import React from 'react'
import { EXPERIENCES } from '../constants'
import { motion, transform } from "framer-motion"

function Experience() {
  return (
    <div className='pb-4 border-b mt-36 border-neutral-900 lg:mb-36'>
        <motion.h1 whileInView={{opacity:1,y:0}} initial={{opacity:0,y:-100}} transition={{duration:0.5}} className='pb-12 text-4xl text-center'>Experience</motion.h1>
      <div>
        {
            EXPERIENCES.map((experience, index) => (
                <div key={index} className='flex flex-wrap mb-8 lg:justify-center'>
                    <motion.div whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}} transition={{duration:0.5}} className='flex justify-center w-full lg:w-1/2'>
                        <p className='mb-2 text-sm text-neutral-400'>{experience.year}</p>
                    </motion.div>
                    <motion.div whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}} transition={{duration:0.5}} className='w-full max-w-xl lg:w-3/4'>
                        <h5>{experience.role} - <span className='text-sm text-purple-100'>{experience.company}</span></h5>
                        <p className='my-4 text-sm font-thin text-neutral-400'>{experience.description}</p>
                        {
                            experience.technologies.map((technology, index) => (
                                <span key={index} className='px-2 py-1 mt-4 mr-2 text-sm font-medium text-purple-700 rounded bg-neutral-900'>
                                    {technology}
                                </span>
                            ))
                        }
                    </motion.div>
                </div>
            ))
        }
      </div>
    </div>
  )
}

export default Experience
