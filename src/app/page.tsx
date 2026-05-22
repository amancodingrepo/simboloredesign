import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Proces";
import TrustedBrands from "@/components/TrustedBrands";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <Process />
      <TrustedBrands />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  );
}
