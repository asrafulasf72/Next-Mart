import Features from "@/components/Home/Features";
import Hero from "@/components/Home/Hero";
import HowItWorks from "@/components/Home/HowItWorks";
import ProductsPreview from "@/components/Home/ProductsPreview";
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
      </main>
      <footer>

      </footer>
    </>

  );
}
