import Footer from "./components/Footer";
import Hero from "./components/Hero";
import InstructorSection from "./components/InstructorSection";
import Navbar from "./components/NavBar";


export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50"> {/* neutral page background */}
      <Navbar />
      <Hero />
      <InstructorSection />
      <Footer />
    </main>
  );
}

