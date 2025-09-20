import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import SectionDivider from "./components/SectionDivider";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <section id="home" className="scroll-mt-24 md:scroll-mt-12">
          <Home />
        </section>
        <SectionDivider />
        <section id="about" className="scroll-mt-24 md:scroll-mt-12">
          <About />
        </section>
        <SectionDivider />
        <section id="work" className="scroll-mt-24 md:scroll-mt-12">
          <Work />
        </section>
        <SectionDivider />
        <section id="contact" className="scroll-mt-24 md:scroll-mt-12">
          <Contact />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
