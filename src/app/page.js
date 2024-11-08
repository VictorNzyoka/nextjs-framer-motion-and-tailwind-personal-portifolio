'use client'

import Image from "next/image";
import Hero from "@/components/Hero"
import About from "@/components/about"
import Experience from '@/components/Experience'
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Experience />
      <Skills />
    </div>
  );
}
