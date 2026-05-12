import { usePortfolioData } from "../../hooks/usePortfolioData";
import { motion } from "framer-motion";

export default function About() {
    const data = usePortfolioData();
    const { profile, education } = data;

    return (
        <section id="about" className="py-20 border-t border-white/5">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
                <div className="lg:col-span-5">
                    <motion.h2 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter uppercase leading-[0.9] lg:sticky lg:top-32"
                    >
                        About<br />
                        <span className="text-[#b2945e]">Me.</span>
                    </motion.h2>
                </div>
                
                <div className="lg:col-span-7 space-y-16 md:space-y-24">
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-lg md:text-xl text-[#f5f5f5]/60 font-light leading-relaxed">
                            {profile.about}
                        </p>
                    </motion.div>

                    <div className="pt-16 border-t border-white/5">
                        <h3 className="text-[10px] font-bold tracking-[0.4em] uppercase text-[#b2945e] mb-10">Education</h3>
                        <div className="space-y-10 md:space-y-12">
                            {education.map((edu, index) => (
                                <motion.div 
                                    key={index}
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="group border-l border-white/10 pl-6 md:pl-8 hover:border-[#b2945e] transition-colors"
                                >
                                    <h4 className="text-xl md:text-2xl font-black tracking-tight text-[#f5f5f5] uppercase mb-2">{edu.degree}</h4>
                                    <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-2">
                                        <p className="text-[#f5f5f5]/40 font-medium text-sm md:text-base">{edu.institution}</p>
                                        <span className="text-[10px] font-bold text-[#b2945e] tracking-widest uppercase">{edu.year}</span>
                                    </div>
                                    <div className="mt-3 inline-block px-2 py-1 bg-white/[0.03] border border-white/5">
                                        <p className="text-[#f5f5f5]/30 text-[9px] uppercase tracking-widest">GPA: {edu.gpa}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}