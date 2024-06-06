import React from 'react'
import profilePic from "../assets/kevinRushProfile.png"
import { HERO_CONTENT, HERO_NAME } from '../constants'

export default function Hero() {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <div className='flex flex-wrap'>
            <div className='flex flex-col w-full lg:w-1/2 items-center lg:items-start'>
                <h1 className='text-6xl font-thin tracking-tight pb-16 lg:mt-16 lg:text-8xl'>
                    {HERO_NAME}
                </h1>
                <h3 className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent
                text-4xl '>
                    Fontend Developer
                </h3>
                <p className='my-2 max-w-xl py-6 font-light tracking-tight text-neutral-400'>
                    {HERO_CONTENT}
                </p>
            </div>
            <div className='w-full lg:w-1/2 lg:p-12 flex justify-center'>
                <img src={profilePic} alt="profile image" />
            </div>
        </div>
    </div>
  )
}
