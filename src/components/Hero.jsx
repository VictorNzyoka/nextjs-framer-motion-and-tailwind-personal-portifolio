'use client'
import Image from 'next/image'
import { heroIcons } from '@/app/assets'
import React, { useState } from 'react' 
import { useMotionValue, useTransform, motion, useSpring  } from 'framer-motion'

const Hero = () => {
  const [windowOffset, setWindowOffset] = useState({ innerWidth:0 , innerHeight: 0})
  const [mouseMove,setMouseMove] = useState(false)
  const [buttonHover,setButtonHover] = useState(false)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const handleMouseMove =(e) => {
    const {clientX ,clientY} = e
    x.set(clientX)
    y.set(clientY)
  }


  const handleMouseEnter = ( ) => {
    setWindowOffset({ innerWidth: window.innerWidth, innerHeight: window.innerHeight})
    setMouseMove(true)
  }

  const {innerWidth, innerHeight} = windowOffset

  const xSpring = useSpring(x, { stiffness:100, damping:10})
  const ySpring = useSpring(y, { stiffness:100, damping:10})

  const rotateY = useTransform(xSpring, [0,innerWidth], [-30,30])
  const rotateX = useTransform(ySpring , [0,innerHeight], [10,-50])
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50" onMouseMove={handleMouseMove} 
    onMouseEnter={handleMouseEnter}>
      <div className="max-w-2xl mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-center space-y-6">
          {/* Image Container with Overlay Text */}
          <div className="relative">
            <motion.div className="relative w-[150px] h-[150px] rounded-full overflow-hidden" 
            style={{
              rotateX: mouseMove ? rotateX : 0,
              rotateY: mouseMove ? rotateY : 0,
              transition: '0.1s'
            }}>
              <Image
                src="/pic1.jpeg"
                alt="Victor Nzyoka"
                width={200}
                height={200}
                priority={true}
                className="object-cover"
              />
            </motion.div>
            <motion.span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl font-semibold text-white drop-shadow-lg"
            initial={{scale:0}}
            animate={{
            opacity: buttonHover ? 0 : 1,
            scale: buttonHover ? 2 : 0,
            y: buttonHover ? -40 : 0,
             }}
             transition={{
              opacity: { delay: 0.4}
             }}>
              Hi
            </motion.span>
          </div>

          {/* Text Content */}
          <div className="text-center space-y-3">
            <h1 className="text-3xl md:text-4xl font-bold tracking-wider text-gray-700
            sm:text-2xl">
              My name is Victor Nzyoka &
            </h1>
            <p className="text-lg md:text-xl tracking-wider text-gray-600">
              Am a Software Engineer
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center justify-center gap-x-10 mt-8 text-3xl text-yellow-600
          sm:text-2xl">
            {heroIcons.map((icon, i) => {
              const socialLinks = [
                'https://instagram.com/yourusername',
                'https://facebook.com/yourusername',
                'https://dribbble.com/yourusername',
                'https://youtube.com/@yourusername',
                'https://github.com/yourusername'
              ];
              
              return (
                <a 
                  href={socialLinks[i]}
                  key={i} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:bg-red-400 hover:text-white transition-colors p-2 rounded-lg"
                >
                  {React.cloneElement(icon, {
                    size: "24",
                    className: "w-6 h-6"
                  })}
                </a>
              );
            })}
          </div>

          {/* CTA Button */}
          <a
            href="#contact"
            className="inline-block mt-6 px-6 py-3 rounded-lg bg-blue-400 text-white font-medium tracking-wider hover:bg-blue-500 transition-colors duration-300 shadow-md hover:shadow-lg"
            onMouseEnter={() => setButtonHover(true)}
            onMouseLeave={() => setButtonHover(false)}
            >
            Talk to me
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero