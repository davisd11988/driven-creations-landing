import ClientOnly from "@/components/ClientOnly";
import Navbar from "@/components/Navbar";
import HeroAlt3 from "@/components/HeroAlt3";
import Problem from "@/components/Problem";
import Services from "@/components/Services";
import Story from "@/components/Story";
import ScrollCollision from "@/components/ScrollCollision";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Alt3Home() {
  return (
    <main className="bg-brand-dark min-h-screen overflow-x-hidden">
      <ClientOnly>
        <Navbar />
        <HeroAlt3 />
        <Problem />
        <Services />
        <Story />
        <ScrollCollision />
        <Portfolio />
        <Process />
        <Testimonials />
        <CTA />
        <Footer />
      </ClientOnly>
    </main>
  );
}
