import Hero from "@/components/Hero";
import About from "@/components/About";
import Work from "@/components/Work";
import Certificates from "@/components/Certificates";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="flex flex-col gap-24">
      <Hero />
      <About />
      <Work />
      <Certificates />
      <Contact />
    </div>
  );
}