import { useState, useEffect } from "react";
import { usePortfolioData } from "../../hooks/usePortfolioData";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const data = usePortfolioData();
  const { profile } = data;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-[#0a0a0a]/80 backdrop-blur-md py-4" : "bg-transparent py-6"
      } border-b border-white/5`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 md:px-12 lg:px-20">
        <div className="flex items-center">
          <a href="#home" className="text-xl font-black tracking-tighter text-[#f5f5f5] uppercase group">
            {profile.name.split(' ')[0]}<span className="text-[#b2945e] group-hover:translate-x-1 inline-block transition-transform">.</span>
          </a>
        </div>
        
        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 lg:space-x-12">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[10px] font-bold text-[#f5f5f5]/50 hover:text-[#f5f5f5] transition-colors uppercase tracking-[0.2em]"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col space-y-1.5 p-2 z-50"
        >
          <motion.span 
            animate={isOpen ? { rotate: 45, y: 7.5 } : { rotate: 0, y: 0 }}
            className="w-6 h-[1.5px] bg-[#f5f5f5]"
          />
          <motion.span 
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            className="w-4 h-[1.5px] bg-[#b2945e] self-end"
          />
          <motion.span 
            animate={isOpen ? { rotate: -45, y: -7.5, width: "1.5rem" } : { rotate: 0, y: 0, width: "1rem" }}
            className="w-4 h-[1.5px] bg-[#f5f5f5] self-end"
          />
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-[#0a0a0a] z-40 flex flex-col items-center justify-center p-8 md:hidden"
          >
            <div className="space-y-10 text-center">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-4xl font-black uppercase tracking-tighter text-[#f5f5f5] hover:text-[#b2945e] transition-colors"
                  >
                    {link.name}
                  </a>
                </motion.div>
              ))}
            </div>
            
            <div className="absolute bottom-12 text-center">
              <p className="text-[#f5f5f5]/20 text-[10px] font-bold uppercase tracking-[0.4em]">
                {profile.email}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}