import { usePortfolioData } from "../../hooks/usePortfolioData";
import { motion } from "framer-motion";

export default function Experience() {
    const data = usePortfolioData();
    const { experience } = data;

    return (
        <section id="experience" className="py-20 border-t border-white/5">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
                <div className="lg:col-span-5">
                    <motion.h2 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter uppercase leading-[0.9] lg:sticky lg:top-32"
                    >
                        Exp<br />
                        <span className="text-[#b2945e]">erience.</span>
                    </motion.h2>
                </div>
                
                <div className="lg:col-span-7">
                    <div className="space-y-16 md:space-y-24">
                        {experience.map((exp, index) => (
                            <motion.div 
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group relative"
                            >
                                <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4 gap-2">
                                    <h3 className="text-2xl md:text-3xl font-black tracking-tight text-[#f5f5f5] uppercase group-hover:text-[#b2945e] transition-colors leading-tight">
                                        {exp.position}
                                    </h3>
                                    <span className="text-[10px] font-bold tracking-[0.2em] text-[#f5f5f5]/30 uppercase">
                                        {exp.duration}
                                    </span>
                                </div>
                                <h4 className="text-sm md:text-base font-bold text-[#b2945e] mb-4 uppercase tracking-widest">
                                    @ {exp.company}
                                </h4>
                                <p className="text-[#f5f5f5]/50 text-base md:text-lg font-light leading-relaxed max-w-2xl">
                                    {exp.description}
                                </p>
                                <div className="absolute -left-4 md:-left-8 top-0 bottom-0 w-[1px] bg-white/5 group-hover:bg-[#b2945e] transition-colors" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}