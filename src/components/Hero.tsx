import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Hero() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (id: string) => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: id } });
    } else {
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
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 bg-slate-50 dark:bg-black transition-colors duration-300">
        <img 
          src="https://github.com/suowei0205/lsmlab.github.io/blob/main/images/hero-bg.jpg?raw=true" 
          alt="Lab Background" 
          className="w-full h-full object-contain opacity-20 dark:opacity-80 transition-opacity duration-300"
          onError={(e) => {
            (e.target as HTMLImageElement).src = "https://www.leshimin.org/Home/034d518760c3b6dca24fb81d9a60c963.jpg";
          }}
        />
        <div className="absolute inset-0 bg-white/60 dark:bg-slate-900/80 mix-blend-multiply transition-colors duration-300"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white tracking-tight mb-6 leading-tight transition-colors duration-300">
            Laboratory of Single-molecule and <br className="hidden md:block" /> Single-cell Mechanobiology
            <span className="block text-2xl md:text-3xl lg:text-4xl mt-4 font-normal text-primary-600 dark:text-primary-200 transition-colors duration-300">
              单分子与单细胞力学生物学实验室
            </span>
          </h1>
          
          <p className="mt-6 text-xl md:text-2xl text-slate-700 dark:text-slate-200 max-w-3xl mx-auto font-light leading-relaxed transition-colors duration-300">
            Our endeavors are dedicated to comprehending the molecular mechanisms underlying cell mechanosensing and mechanotransduction.
            <span className="block text-lg mt-3 opacity-80">致力于理解细胞机械感知与机械传导的分子机制。</span>
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={() => handleNavClick('research')}
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-primary-600 hover:bg-primary-700 transition-colors duration-300 shadow-lg hover:shadow-primary-500/30 cursor-pointer"
            >
              了解我们的研究 Research
              <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
            </button>
            <button 
              onClick={() => handleNavClick('join')}
              className="inline-flex items-center justify-center px-8 py-3 border border-slate-100 dark:border-white/30 text-base font-medium rounded-full text-slate-700 dark:text-white bg-white/50 dark:bg-white/10 hover:bg-white/80 dark:hover:bg-white/20 backdrop-blur-sm transition-colors duration-300 cursor-pointer"
            >
              加入我们 Join Us
            </button>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <button onClick={() => handleNavClick('research')} className="text-slate-400 dark:text-white/70 hover:text-primary-600 dark:hover:text-white transition-colors cursor-pointer">
          <div className="w-8 h-12 border-2 border-current rounded-full flex justify-center p-1">
            <div className="w-1 h-3 bg-current rounded-full"></div>
          </div>
        </button>
      </motion.div>
    </section>
  );
}
