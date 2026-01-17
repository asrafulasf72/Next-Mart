import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";


export default function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      <main className="pt-20 min-h-screen">
        {children}
      </main>
      <Footer />
    </>
  );
}
