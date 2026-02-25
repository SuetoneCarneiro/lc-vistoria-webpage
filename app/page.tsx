import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Location from "@/components/Location";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <Hero />
      <Services />
      <Location />
    </main>
  );
}