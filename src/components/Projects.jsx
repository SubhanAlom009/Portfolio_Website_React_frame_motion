import React from 'react'
import { PROJECTS } from '../constants'
import { motion, transform } from "framer-motion"
function Projects() {
  return (
    <div className='pb-4 border-b mt-36 border-neutral-900 lg:mb-36'>
      <motion.h1 whileInView={{opacity:1,y:0}} initial={{opacity:0,y:-100}} transition={{duration:0.5}} className='pb-12 text-4xl text-center'>Projects</motion.h1>
      <div>
        {
            PROJECTS.map((project, index) => (
                <div key={index} className='flex flex-wrap mb-8 lg:justify-center'>
                    <motion.div whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}} transition={{duration:0.5}} className='w-full lg:w-1/2'>
                        <img src={project.image} width={150} height={150} className='mb-6 rounded'/>
                    </motion.div>
                    <motion.div whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}} transition={{duration:0.5}} className='w-full max-w-xl lg:w-3/4'>
                        <h5>{project.title}</h5>
                        <p className='my-4 text-sm font-thin text-neutral-400'>{project.description}</p>
                        {project.technologies.map((tech,index)=>(
                            <span key={index} className='px-2 py-1 mt-4 mr-2 text-sm font-medium text-purple-700 rounded bg-neutral-900'>{tech}</span>
                        ))}
                    </motion.div>
                </div>
            ))
        }
      </div>
    </div>
  )
}

export default Projects
