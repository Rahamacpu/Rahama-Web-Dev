import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { About } from "@/components/sections/About";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen pt-20">
      <Navbar />
      <main className="flex-grow flex items-center">
        <About />
      </main>
      <Footer />
    </div>
  );
}
