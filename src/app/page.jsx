import CTA from "@/components/Home/CTA";
import Features from "@/components/Home/Features";
import Hero from "@/components/Home/Hero";
import HowItWorks from "@/components/Home/HowItWorks";
import ProductsPreview from "@/components/Home/ProductsPreview";
import Testimonials from "@/components/Home/Testimonials";
import WhyChooseUs from "@/components/Home/WhyChooseUs";
import Navbar from "@/components/Navbar/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <header>
         <Navbar/>
      </header>
      <main>
           <Hero/>
           <Features/>
           <HowItWorks/>
           <ProductsPreview/>
           <WhyChooseUs/>
           <Testimonials/>
           <CTA/>
      </main>
      <footer>

      </footer>
    </>

  );
}
