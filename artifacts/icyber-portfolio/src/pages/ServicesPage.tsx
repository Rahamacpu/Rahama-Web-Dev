import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Services } from "@/components/sections/Services";

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen pt-20">
      <Navbar />
      <main className="flex-grow">
        <Services />
      </main>
      <Footer />
    </div>
  );
}
