import Navbar from "@/components/Navbar";
import HeroAlt2 from "@/components/HeroAlt2";
import Problem from "@/components/Problem";
import Services from "@/components/Services";
import Story from "@/components/Story";
import ScrollCollision from "@/components/ScrollCollision";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Alt2Home() {
  return (
    <main className="bg-brand-dark min-h-screen overflow-x-hidden">
      <Navbar />
      <HeroAlt2 />
      <Problem />
      <Services />
      <Story />
      <ScrollCollision />
      <Portfolio />
      <Process />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
