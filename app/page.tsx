import SmoothScroll from "@/components/SmoothScroll";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import Works from "@/components/Works";
import Process from "@/components/Process";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <SmoothScroll>
      <Nav />
      <main>
        <Hero />
        <Manifesto />
        <Works />
        <Process />
        <Contact />
      </main>
    </SmoothScroll>
  );
}
