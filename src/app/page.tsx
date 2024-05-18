"use client";
import About from "@/components/About";
import Contact from "@/components/Contact";
import ExpandableFAB from "@/components/ExpandableFAB";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Contact />
      <ExpandableFAB />
    </>
  );
}
