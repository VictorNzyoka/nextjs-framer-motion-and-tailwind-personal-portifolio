'use client'
import Heading from "./sub/Heading"
import Image from "next/image"
import { arrowLeftIcon, experienceData } from "@/app/assets"
import {motion, useScroll,useSpring} from 'framer-motion'
import {useRef} from 'react'

const Experience = () => {
  const date = new Date().getFullYear()  

  const containerRef = useRef(null)

  const {scrollYProgress} = useScroll
   ({
    target: containerRef,
    offset: ['start 95%', 'end end'],
   })
   
   const scaleY = useSpring(scrollYProgress, { 
    stiffness: 200, 
    damping: 20
  })
  return (
    <div className="relative py-20 px-96">
      <Heading text={"Experience @ Education"} />
      <Image 
        src={"/education.webp"} 
        alt={"Experience Image"} 
        width={400} 
        height={400} 
        className="absolute -top-1 right-96 opacity-70 lg:hidden" 
      />
      <div 
      ref={containerRef} 
      className="w-full h-full flex flex-col items-center justify-center gap-y-10 lg:gap-y-20 py-10">
        {experienceData.map((data, i) => (
          <div
            key={`id-${i}`}
            className={`w-[600px] xl:w-[480px] sm:w-full px-12 sm:px-0 relative ${
              i % 2 === 0 
                ? "-left-[300px] xl:left-[240px] lg:left-0" 
                : "left-[300px] xl:left-[240px] lg:left-0"
            }`}
          >
            <motion.div initial={{opacity: 0, x: i % 2 === 0 ? -80 :80}}
            whileInView={{opacity: 1 , x:0}}
            viewport={{once: true}}
            transition={{duration: .7 , type: "spring" ,stiffness: 50}}
             className="relative flex flex-col gap-y-3 rounded-md border border-blue-300 bg-white p-4 tracking-wide sm:text-sm">
              <h1 className="text-xl sm:text-lg font-light text-gray-700">{data.title}</h1>
              <p className="text-gray-800">
                <span className="block font-light">Education</span>
                <span className="block pl-2 font-extralight">{data.education}</span>
              </p>
              <div className="text-gray-800">
                <span className="font-light">Experience</span>
                <ul className="pl-2">
                  {data.experience.map((exp, j) => (
                    <li key={j} className="my-1 font-extralight">{exp}</li>
                  ))}
                </ul>
              </div>
              <span className={`absolute top-20 text-blue-300 px-2 -translate-y-1/2 ${
                i % 2 === 0 ? "left-full rotate-180" : "right-full"
              }`}>
                {arrowLeftIcon}
              </span>
            </motion.div>
            <div 
              className={`w-14 border border-gray-300 rounded-full aspect-square grid place-items-center text-blue-400 font-light absolute top-20 ${
                i % 2 === 0 
                  ? "left-[calc(100%+10px)] -translate-y-1/2" 
                  : "right-[calc(100%+10px)] -translate-y-1/2"
              }`}
            >
              {data.year} {/* Changed to use data.year directly */}
            </div>
          </div>
        ))}
        
        <motion.div 
        initial={{scaleY: 0}}
        style={{scaleY}}

        className="absolute w-1 h-full bg-gray-300 origin-top"></motion.div >
      </div>
    </div>
  )  
}

export default Experience