import Features from "@/components/Home/Features";
import Hero from "@/components/Home/Hero";
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
      </main>
      <footer>

      </footer>
    </>

  );
}
