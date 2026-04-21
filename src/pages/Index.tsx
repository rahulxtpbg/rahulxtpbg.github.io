import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";
import Work from "@/components/site/Work";
import Research from "@/components/site/Research";
import Exploring from "@/components/site/Exploring";
import Media from "@/components/site/Media";
import Experience from "@/components/site/Experience";
import Contact from "@/components/site/Contact";
import Footer from "@/components/site/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <Work />
      <Research />
      <Exploring />
      <Media />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
