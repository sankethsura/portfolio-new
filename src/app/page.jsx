import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Stats from "@/components/Stats";
import Skills from "@/components/Skills";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import TrustedBy from "@/components/TrustedBy";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="relative z-10">
        <Hero />
        <Marquee />
        <About />
        <Stats />
        <Skills />
        <Approach />
        <Experience />
        <Education />
        <TrustedBy />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
