'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Home as HomeIcon, User, Briefcase, BookOpen, Layers, Mail } from 'lucide-react';
import Hero from "@/components/Hero";
import About from "@/components/about";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Project from "@/components/Project";
import Contacts from "@/components/Contacts";

// Sidebar component integrated directly in page.js
function Sidebar({ navItems, scrollToSection }) {
  const [isMounted, setIsMounted] = useState(false);

  const iconMap = {
    home: { Icon: HomeIcon, color: "text-blue-500" },
    about: { Icon: User, color: "text-green-500" },
    experience: { Icon: Briefcase, color: "text-yellow-500" },
    skills: { Icon: BookOpen, color: "text-purple-500" },
    projects: { Icon: Layers, color: "text-red-500" },
    contacts: { Icon: Mail, color: "text-indigo-500" },
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <motion.aside
      initial={{ x: '-100%' }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed left-0 top-0 h-full w-20 bg-gray-200 flex flex-col items-center py-6 z-50"
    >
      {/* Logo */}
      <div className="flex flex-col items-center">
        <span className="text-red-600 font-bold text-xl">V.</span>
        <span className="text-xs text-gray-400">Nzyoka</span>
      </div>

      {/* Navigation Icons */}
      <div className="flex-grow flex items-center">
        <div className="flex flex-col space-y-8">
          {navItems.map((item, index) => {
            const iconConfig = iconMap[item.id.toLowerCase()];
            if (!iconConfig) return null;
            
            const { Icon, color } = iconConfig;
            
            return (
              <motion.div
                key={index}
                whileHover={{ scale: 1.2 }}
                className="group relative flex flex-col items-center cursor-pointer"
                onClick={() => scrollToSection(item.id)}
              >
                {/* Icon */}
                <div className={`${color} transition-colors group-hover:opacity-80`}>
                  <Icon size={24} />
                </div>
                
                {/* Tooltip */}
                <motion.div 
                  initial={{ opacity: 0, y: -4 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  className="absolute top-full mt-2 bg-gray-800 px-2 py-1 rounded opacity-0 group-hover:opacity-100 text-white text-sm transition-all duration-200"
                >
                  {item.name}
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Footer */}
      <div className="text-xs text-gray-400">
        © 2019 - {new Date().getFullYear()}
      </div>
    </motion.aside>
  );
}

// Main page component
export default function HomePage() {
  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Experience", id: "experience" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contacts" },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex">
      <Sidebar
        navItems={navItems}
        scrollToSection={scrollToSection}
      />
      <div className="flex-1 ml-20">
        <div id="home">
          <Hero />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="experience">
          <Experience />
        </div>
        <div id="skills">
          <Skills />
        </div>
        <div id="projects">
          <Project />
        </div>
        <div id="contacts">
          <Contacts />
        </div>
      </div>
    </div>
  );
}