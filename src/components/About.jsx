import React from 'react'
import aboutImg from "../assets/about.jpg"
import { ABOUT_TEXT } from '../constants'

export default function About() {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <h2 className='text-center text-4xl font-extralight my-20'>
            About <span className='text-neutral-500'>Me</span>
        </h2>
        <div className='flex flex-wrap'>
            <div className='w-full lg:w-1/2 flex items-center justify-center lg:p-10'>
                <img src={aboutImg} alt="" className='rounded-2xl' />
            </div>
            <div className='w-full lg:w-1/2 flex justify-center lg:justify-start'>
                <p className='my-2 py-6 text-justify max-w-xl font-light tracking-tight'>
                    {ABOUT_TEXT}
                </p>
            </div>
        </div>
    </div>
  )
}
