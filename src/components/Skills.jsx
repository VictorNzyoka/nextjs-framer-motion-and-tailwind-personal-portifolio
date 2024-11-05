'use client'
import Heading from "./sub/Heading"
import Image from 'next/image'
import { skillsData } from "@/app/assets"
import { motion } from 'framer-motion'

const Skills = () => {
    const variants = {
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {  // Fixed capitalization
                delay: 1.3 + i * 0.07,
            },
        }),
        hidden: {  // Fixed spelling
            opacity: 0,
            y: 30,
        }
    }

    return (
        <div className='min-h-screen flex flex-col items-center justify-center gap-y-20 px-96'>
            <Heading text={"Skills"} />
            <div className="w-full flex justify-between flex-wrap gap-x-8 gap-y-10 lg:gap-y-6">
                {skillsData.map((item, i) => (
                    <motion.div 
                        custom={i}
                        variants={variants}  // Fixed variants reference
                        initial="hidden"
                        whileInView="visible"
                        whileHover={{scale:1.1}}
                        viewport={{margin:"50px", once:true}}
                        key={i}
                        className="flex items-center gap-x-6 rounded-xl border border-yellow-500 bg-zinc-200 px-2 py-2 lg:px-2"
                    >
                        <Image 
                            src={item.icon} 
                            alt="Skills Image" 
                            width={100} 
                            height={100}
                            className="h-auto w-[40px]" 
                        />
                        <p className="text-sm text-gray-600">{item.name}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default Skills