'use client'

import Heading from './sub/Heading'
import Achievements from './sub/Achievements'
import Image from 'next/image'
import {aboutData, aboutText, downloadIcon, arrowLeftIcon, viewIcon} from '@/app/assets'

const about = () => { 
    return (
      <div className='bg-white min-h-screen px-96 flex flex-col items-center justify-center' >
        <Heading text={"About Me"}/>
        <div className='w-full flex items-center justify-between gap-x-12 md:justify-center'>
          <div className="relative flex-shrink-0 md:hidden">
            <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-red-400 to-red-300 opacity-75 blur"></div>
            <div className="relative">
              <Image 
                src={'/about-me.jpeg'} 
                alt="About Me" 
                width={400} 
                height={400}
                className='w-[300px] h-[400px] object-cover rounded-lg shadow-xl lg:w-[250px] lg:h-[350px]'
                priority
              />
              {/* Optional decorative elements */}
              <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full border-8 border-white bg-red-400"></div>
              <div className="absolute -top-4 -left-4 h-16 w-16 rounded-full border-4 border-white bg-red-300"></div>
            </div>
          </div>

          <div className='relative max-w-[800px] rounded-xl bg-zinc-100 p-8 text-justify shadow-lg' >
              <span className='absolute -left-5 top-20 scale-[2.5] text-zinc-100 md:hidden'>{arrowLeftIcon}</span>
              <p className='text-lg font-light text-gray-700 first-letter:pl-3 first-letter:text-3xl first-letter:font-medium lg:text-[16px] sm:text-[14px]'>{aboutText}</p>
              
              <div className='flex items-center gap-x-4 mt-8'>
                <a 
                  href="/Resume-Victor Nzyoka Mutunga.docx" 
                  download="" 
                  className='w-max flex items-center gap-x-2 rounded-full border-gray-300 bg-blue-400 px-5 py-2.5 font-light text-white hover:bg-blue-500 transition-colors duration-300 hover:shadow-md'
                >
                  <span className='text-xl'>{downloadIcon}</span>
                  <span>Download Resume</span>
                </a>
                <a 
                  href="/Resume-Victor Nzyoka Mutunga.docx"
                  className='w-max flex items-center gap-x-2 rounded-full border border-gray-300 px-5 py-2.5 font-light text-gray-700 hover:bg-gray-50 hover:border-blue-300 transition-all duration-300 hover:shadow-md'
                >
                  <span>View Resume</span>
                  <span className='text-xl'>{viewIcon}</span>
                </a>
              </div>
          </div>
        </div>
        <div className="mt-20 w-full flex flex-wrap items-center justify-between gap-y-10">
          {aboutData.map((item,i) =>(
            <Achievements key={i} title={item.title}
            amount={item.amount}>
              {item.icon}
            </Achievements>
         
          ) )}
          </div>
      </div>
    )
  }

export default about