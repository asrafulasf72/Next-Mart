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
      </main>
      <footer>

      </footer>
    </>

  );
}
