'use client'

import { useRef } from 'react';
import Hero from "@/components/Hero"
import About from "@/components/about"
import Experience from '@/components/Experience'
import Skills from "@/components/Skills";
import Project from "@/components/Project";
import Contacts from "@/components/Contacts";
import Sidebar from '@/components/Sidebar';

export default function Home() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const skillsRef = useRef(null);
  const projectRef = useRef(null);
  const contactsRef = useRef(null);

  const scrollToHome = () => {
    homeRef.current.scrollIntoView({ behavior: 'auto' });
  };

  const scrollToAbout = () => {
    aboutRef.current.scrollIntoView({ behavior: 'auto' });
  };

  const scrollToExperience = () => {
    experienceRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToSkills = () => {
    skillsRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProject = () => {
    projectRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    contactsRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <Sidebar
        scrollToHome={scrollToHome}
        scrollToAbout={scrollToAbout}
        scrollToExperience={scrollToExperience}
        scrollToSkills={scrollToSkills}
        scrollToProject={scrollToProject}
        scrollToContact={scrollToContact}
      />
      <div>
        <div ref={homeRef}>
          <Hero />
        </div>
        <div ref={aboutRef}>
          <About />
        </div>
        <div ref={experienceRef}>
          <Experience />
        </div>
        <div ref={skillsRef}>
          <Skills />
        </div>
        <div ref={projectRef}>
          <Project />
        </div>
        <div ref={contactsRef}>
          <Contacts />
        </div>
      </div>
    </div>
  );
}