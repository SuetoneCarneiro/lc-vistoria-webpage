import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Location from "@/components/Location";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <Hero />
      <section id="servicos"><Services /></section>
      <section id="localizacao"><Location /></section>
      <section id="sobre-nos"><About /></section>
      <Footer />
    </main>
  );
}