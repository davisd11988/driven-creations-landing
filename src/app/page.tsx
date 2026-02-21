import ClientOnly from "@/components/ClientOnly";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Services from "@/components/Services";
import Story from "@/components/Story";
import ScrollCollision from "@/components/ScrollCollision";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-brand-dark min-h-screen overflow-x-hidden">
      <ClientOnly>
        <Navbar />
        <Hero />
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
