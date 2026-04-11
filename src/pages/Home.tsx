import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Research from '../components/Research';
import Team from '../components/Team';
import Publications from '../components/Publications';
import News from '../components/News';
import Gallery from '../components/Gallery';
import JoinUs from '../components/JoinUs';
import Footer from '../components/Footer';

const SectionDivider = () => (
  <div className="w-full flex justify-center relative z-20">
    <div className="w-full max-w-6xl h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-700/50 to-transparent"></div>
  </div>
);

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  const lastScrollTo = useRef<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'research', 'team', 'publications', 'news', 'gallery', 'join'];
      const scrollPosition = window.scrollY + 100; // Offset for fixed navbar

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    
    // Handle scroll to section from other pages
    const state = location.state as { scrollTo?: string } | null;
    if (state?.scrollTo && lastScrollTo.current !== state.scrollTo) {
      const id = state.scrollTo;
      lastScrollTo.current = id;
      
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const offset = 80;
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = element.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          const offsetPosition = elementPosition - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    }
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar activeSection={activeSection} />
      <main className="flex-grow">
        <Hero />
        <SectionDivider />
        <Research />
        <SectionDivider />
        <Team />
        <SectionDivider />
        <Publications limit={10} />
        <SectionDivider />
        <News limit={4} />
        <SectionDivider />
        <Gallery />
        <SectionDivider />
        <JoinUs />
      </main>
      <Footer />
    </div>
  );
}
