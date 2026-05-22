import Navbar from "./components/layouts/Navbar";
import Hero from "./pages/homepage/Hero";
import Stats from "./pages/homepage/Statistik";
import Services from "./pages/homepage/Services";
import Experience from "./pages/homepage/Experience";
import Portfolio from "./pages/homepage/Portfolio";
import Footer from "./components/layouts/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Stats />
        <Services />
        <Experience />
        <Portfolio />
      </main>
      <Footer />
    </>
  );
}
