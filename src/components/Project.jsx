"use client"

import React from 'react'
import { motion } from "framer-motion"
import { Github, ExternalLink, Search, ShoppingCart, Cpu, Leaf, CheckSquare } from "lucide-react"

const projects = [
  {
    title: "Maize Plant Disease Detection",
    description: "A mobile app using machine learning to help farmers detect maize plant diseases from plant images.",
    image: "/maize.jpeg?height=200&width=300",
    technologies: ["Python", "TensorFlow", "Java"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "Mess Management System",
    description: "A web-based application for Dedan Kimathi University's mess management with features for menu planning, inventory management, and online ordering.",
    image: "/mess.jpeg?height=200&width=300",
    technologies: ["HTML", "CSS", "JavaScript", "PHP"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "Job Listings Application",
    description: "A job listings application using Laravel where users can register, login, create, and manage job listings.",
    image: "/job.jpeg?height=200&width=300",
    technologies: ["Laravel", "MySQL", "Bootstrap"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "Todo List",
    description: "A simple and efficient todo list application to help manage daily tasks and improve productivity.",
    image: "/todo.webp?height=200&width=300",
    technologies: ["React", "JavaScript", "CSS"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "OpenAI Clone",
    description: "A clone of the OpenAI interface, demonstrating proficiency in replicating complex UI and potentially some AI integration.",
    image: "/openai.jpeg?height=200&width=300",
    technologies: ["React", "Node.js", "OpenAI API"],
    githubUrl: "#",
    liveUrl: "#",
  },
]

// Fixed animation variants
const containerVariants = {
  hidden: { 
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      duration: 1,
      bounce: 0.3,
      staggerChildren: 0.1
    }
  }
}

const cardVariants = {
  hidden: { 
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      duration: 0.5,
      bounce: 0.3
    }
  },
  hover: {
    y: -10,
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  }
}

const ProjectIcon = ({ title }) => {
  switch (title) {
    case "Maize Plant Disease Detection":
      return <Leaf className="h-8 w-8 text-blue-400" />
    case "Mess Management System":
      return <ShoppingCart className="h-8 w-8 text-blue-400" />
    case "Job Listings Application":
      return <Search className="h-8 w-8 text-blue-400" />
    case "Todo List":
      return <CheckSquare className="h-8 w-8 text-blue-400" />
    case "OpenAI Clone":
      return <Cpu className="h-8 w-8 text-blue-400" />
    default:
      return <Github className="h-8 w-8 text-blue-400" />
  }
}

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      variants={cardVariants}
      whileHover="hover"
      className="bg-blue-50 rounded-xl overflow-hidden shadow-lg border border-blue-400 h-full"
    >
      <div className="flex flex-col h-full">
        <div className="relative w-full h-48 overflow-hidden">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-50 to-transparent" />
          <div className="absolute top-4 left-4">
            <ProjectIcon title={project.title} />
          </div>
        </div>

        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
          <p className="text-gray-600 text-sm mb-4 flex-grow">{project.description}</p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech, techIndex) => (
              <span
                key={techIndex}
                className="px-3 py-1 text-xs font-medium text-blue-600 bg-white rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex justify-between items-center mt-auto">
            <motion.a
              href={project.githubUrl}
              className="text-gray-600 hover:text-blue-600 transition-colors"
              whileHover={{ scale: 1.1 }}
              aria-label={`View ${project.title} on GitHub`}
            >
              <Github className="h-6 w-6" />
            </motion.a>
            {project.liveUrl && (
              <motion.a
                href={project.liveUrl}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                <span>View Project</span>
                <ExternalLink className="h-4 w-4" />
              </motion.a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Component() {
  return (
    <section className="w-full min-h-screen bg-white py-20 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="max-w-7xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">My Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A showcase of my latest work and technical projects
          </p>
        </div>

        <div className="grid grid-cols-4 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </motion.div>
    </section>
  )
}