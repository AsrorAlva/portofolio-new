import { usePortfolioData } from "../../hooks/usePortfolioData";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Project() {
    const data = usePortfolioData();
    const { projects } = data;

    return (
        <section id="projects" className="py-20 border-t border-white/5">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 md:mb-24 gap-8">
                <motion.h2 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter uppercase leading-[0.9]"
                >
                    Sel<br />
                    <span className="text-[#b2945e]">ected.</span><br />
                    Works
                </motion.h2>
                <div className="text-right hidden lg:block">
                    <p className="text-[#f5f5f5]/30 text-[9px] font-bold uppercase tracking-[0.4em] mb-3">
                        Slide to explore
                    </p>
                    <div className="flex gap-4 justify-end">
                        <button className="swiper-prev-btn text-[#f5f5f5]/40 hover:text-[#b2945e] transition-colors cursor-pointer text-xl">←</button>
                        <button className="swiper-next-btn text-[#f5f5f5]/40 hover:text-[#b2945e] transition-colors cursor-pointer text-xl">→</button>
                    </div>
                </div>
            </div>

            <Swiper
                modules={[Navigation, Pagination, Mousewheel]}
                spaceBetween={20}
                slidesPerView={1.1}
                mousewheel={true}
                navigation={{
                    prevEl: '.swiper-prev-btn',
                    nextEl: '.swiper-next-btn',
                }}
                pagination={{ 
                    clickable: true,
                    dynamicBullets: true,
                }}
                breakpoints={{
                    768: { slidesPerView: 1.5, spaceBetween: 30 },
                    1024: { slidesPerView: 2.2, spaceBetween: 30 },
                }}
                className="project-swiper !pb-20"
            >
                {projects.map((proj, index) => (
                    <SwiperSlide key={index}>
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="group relative border border-white/5 p-6 md:p-10 hover:border-[#b2945e]/30 transition-all duration-500 bg-white/[0.01] h-full"
                        >
                            <div className="overflow-hidden mb-8 aspect-video grayscale group-hover:grayscale-0 transition-all duration-700 bg-white/5">
                                <img 
                                    src={proj.photo.url} 
                                    alt={proj.photo.alt} 
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" 
                                />
                            </div>
                            
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-2xl md:text-3xl font-black tracking-tight text-[#f5f5f5] uppercase leading-none">
                                    {proj.name}
                                </h3>
                                <span className="text-[#b2945e] text-[9px] font-black tracking-widest uppercase pt-1">
                                    / 0{index + 1}
                                </span>
                            </div>

                            <p className="text-[#f5f5f5]/50 text-base md:text-lg font-light leading-relaxed mb-8 line-clamp-3">
                                {proj.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-8">
                                {proj.tech.map((tech, i) => (
                                    <span key={i} className="text-[9px] font-bold tracking-widest text-[#f5f5f5]/20 uppercase border border-white/5 px-3 py-1.5 hover:border-[#b2945e]/30 hover:text-[#b2945e] transition-colors">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex gap-8 border-t border-white/5 pt-8">
                                {proj.github && (
                                    <a href={proj.github} className="text-[9px] font-black uppercase tracking-widest text-[#f5f5f5]/60 hover:text-[#b2945e] transition-colors flex items-center gap-2 group/link">
                                        Source <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                                    </a>
                                )}
                                {proj.liveUrl && (
                                    <a href={proj.liveUrl} className="text-[9px] font-black uppercase tracking-widest text-[#f5f5f5]/60 hover:text-[#b2945e] transition-colors flex items-center gap-2 group/link">
                                        Live <span className="group-hover/link:-translate-y-1 group-hover/link:translate-x-1 transition-transform">↗</span>
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}