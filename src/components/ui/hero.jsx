import { useState, useEffect } from "react";
import { usePortfolioData } from "../../hooks/usePortfolioData";
import { motion } from "framer-motion";

export default function Hero() {
  const data = usePortfolioData();
  const { photoProfile, profile } = data;
  const funnyTexts = profile.funnyText;
  const [currentFunnyText, setCurrentFunnyText] = useState(funnyTexts[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFunnyText((prev) => {
        const currentIndex = funnyTexts.indexOf(prev);
        const nextIndex = (currentIndex + 1) % funnyTexts.length;
        return funnyTexts[nextIndex];
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [funnyTexts]);

  return (
    <section id="home" className="relative min-h-[70vh] md:min-h-[85vh] flex flex-col justify-center py-12 md:py-20 overflow-hidden">
      <div className="relative z-10">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[#b2945e] font-medium tracking-[0.4em] uppercase text-[10px] md:text-xs mb-4 block"
        >
          {profile.subtitle}
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-[#f5f5f5] leading-[0.9] uppercase"
        >
          {profile.name.split(' ')[0]}<br />
          <span className="border-text">
            {profile.name.split(' ')[1]}
          </span>
          <span className="text-[#b2945e]">.</span>
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 max-w-lg"
        >
          <p className="text-[#f5f5f5]/50 text-sm md:text-base font-light leading-relaxed">
            {profile.heroDescription}
          </p>
          
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#projects" className="px-8 py-3 bg-[#f5f5f5] text-black font-bold uppercase text-[9px] tracking-[0.2em] hover:bg-[#b2945e] transition-colors text-center">
              {profile.heroButtons.work}
            </a>
            <a href="#contact" className="px-8 py-3 border border-white/10 text-[#f5f5f5] font-bold uppercase text-[9px] tracking-[0.2em] hover:border-[#b2945e] transition-colors text-center">
              {profile.heroButtons.contact}
            </a>
          </div>

          <div className="mt-12">
             <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#b2945e]/40 italic">
               "{currentFunnyText}"
             </span>
          </div>
        </motion.div>
      </div>

      {/* Decorative Background Image */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 0.08, scale: 1 }}
        transition={{ duration: 2 }}
        className="absolute -right-10 md:right-0 top-1/2 -translate-y-1/2 w-[80%] md:w-[45%] h-full z-0 grayscale pointer-events-none"
      >
        <img 
          src={photoProfile.url} 
          alt={photoProfile.alt} 
          className="w-full h-full object-cover object-right"
        />
      </motion.div>
    </section>
  );
}
