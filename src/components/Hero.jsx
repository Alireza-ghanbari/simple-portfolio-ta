import React from 'react'
import profilePic from "../assets/kevinRushProfile.png"
import { HERO_CONTENT, HERO_NAME } from '../constants'
import { motion } from "framer-motion";

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.7, delay: delay },
    },
  });

export default function Hero() {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <div className='flex flex-wrap'>
            <div className='flex flex-col w-full lg:w-1/2 items-center lg:items-start'>
                <motion.h1 
                variants={container(0)}
                initial="hidden"
                animate="visible"
                 className='text-6xl font-thin tracking-tight pb-16 lg:mt-16 lg:text-8xl'>
                    {HERO_NAME}
                </motion.h1>
                <motion.h3 variants={container(.5)}
              initial="hidden"
              animate="visible" className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent
                sm:text-4xl text-3xl'>
                    Fontend Developer
                </motion.h3>
                <motion.p variants={container(1)}
              initial="hidden"
              animate="visible" className='my-2 max-w-xl py-6 font-light tracking-tight text-neutral-400 text-justify'>
                    {HERO_CONTENT}
                </motion.p>
            </div>
            <div className='w-full lg:w-1/2 lg:p-12 flex justify-center'>
                <motion.img initial={{x:100, opacity:0}} animate={{x:0, opacity:1}} transition={{duration:1, delay:.3}}  src={profilePic} alt="profile image" />
            </div>
        </div>
    </div>
  )
}
