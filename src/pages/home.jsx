import { ArrowUp } from "lucide-react";
import AboutSection from "../components/about section";
import ContactSection from "../components/contact section";
import Footer from "../components/footer";
import HeroSection from "../components/hero section";
import PortfolioSection from "../components/portfolio section";
import ServiceSection from "../components/service section";
import { useEffect, useState } from "react";
import Header from "../components/header";
import { useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";

export default function Home() {
  const [showScroll, setShowScroll] = useState(false);
  const page = useLocation().pathname;

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    if (page === "/") {
      const html = document.documentElement;
      html.style.scrollBehavior = "smooth";
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <div id="home">
      <Header />
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        >
          <HeroSection />
          <AboutSection />
          <ServiceSection />
          <PortfolioSection />
          <ContactSection />
        {/*   <Footer /> */}
        </motion.div>
      </AnimatePresence>
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-10 rounded-full bg-blue-700 p-3 text-white shadow-lg transition-all duration-300 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
          aria-label="Scroll to top"
        >
          <ArrowUp />
        </button>
      )}
    </div>
  );
}
