"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FlipText } from "../ui/FlipText";
import { ArrowDown } from "lucide-react";
import { SectionSeparator } from "../ui/SectionSeparator";

export const Hero = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const yLeft = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
    const yRight = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

    return (
        <section
            ref={containerRef}
            className="relative w-full flex flex-col bg-[var(--surface-page)] overflow-hidden"
            aria-labelledby="hero-title"
        >
            {/* Main Title Area - Top Centered */}
            <div className="relative z-30 w-full pt-12 pb-8 md:pt-16 md:pb-12 text-center px-4">
                <h1 id="hero-title" className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 text-[var(--text-primary)] tracking-tight">
                    <FlipText delay={0.2} className="block text-[var(--action-primary)] mb-2 glow-text">
                        Duas Mulheres.
                    </FlipText>
                    <span className="block text-2xl md:text-4xl text-[var(--text-secondary)] font-medium">
                        Mesma Idade. Mesma Cidade.
                    </span>
                </h1>
            </div>

            {/* Split Screen Content */}
            <div className="relative flex flex-col md:flex-row w-full" style={{ minHeight: '500px', height: '60vh' }}>
                {/* Left Side: Cheap Nail */}
                <motion.div
                    className="w-full md:w-1/2 relative overflow-hidden group border-b-4 md:border-b-0 md:border-r-4 border-white"
                    {...{ style: { y: yLeft, height: '100%', minHeight: '250px' } }}
                >
                    {/* Background Image */}
                    <img
                        src="https://images.unsplash.com/photo-1610992015732-2449b76344bc?q=80&w=1200&auto=format&fit=crop"
                        alt="Mãos fazendo unha com insegurança"
                        className="object-cover w-full h-full brightness-[0.7] grayscale-[20%]"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />

                    {/* Text Overlay Left */}
                    <div className="absolute bottom-10 left-6 md:left-12 z-20 text-white max-w-[80%]">
                        <div className="inline-block bg-red-600/90 backdrop-blur-md px-4 py-2 rounded-[var(--radius-lg)] mb-3 shadow-lg border border-red-500/30">
                            <span className="text-2xl md:text-4xl font-bold">R$ 25,00</span>
                        </div>
                        <p className="text-lg md:text-2xl font-bold opacity-90 drop-shadow-lg leading-tight">
                            Uma Cobra R$ 25 por Unha.
                        </p>
                    </div>
                </motion.div>

                {/* Right Side: Expensive Nail */}
                <motion.div
                    className="w-full md:w-1/2 relative overflow-hidden group"
                    {...{ style: { y: yRight, height: '100%', minHeight: '250px' } }}
                >
                    {/* Background Image */}
                    <img
                        src="https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=1200&auto=format&fit=crop"
                        alt="Manicure profissional confiante"
                        className="object-cover w-full h-full brightness-[0.9]"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />

                    {/* Text Overlay Right */}
                    <div className="absolute bottom-10 right-6 md:right-12 z-20 text-white text-right max-w-[80%] ml-auto">
                        <div className="inline-block bg-[var(--action-strong)] backdrop-blur-md px-6 py-3 rounded-[var(--radius-lg)] mb-3 shadow-[0_0_30px_rgba(212,175,55,0.4)] border border-yellow-400/30 animate-[pulse-glow_3s_infinite]">
                            <span className="text-3xl md:text-5xl font-black text-white drop-shadow-md">R$ 120,00</span>
                        </div>
                        <p className="text-lg md:text-2xl font-bold opacity-90 drop-shadow-lg leading-tight">
                            A Outra Cobra R$ 120.
                        </p>
                    </div>
                </motion.div>

                {/* Central VS Badge */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 hidden md:flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-xl font-bold text-[var(--text-secondary)] border-4 border-[var(--surface-page)]">
                    VS
                </div>
            </div>

            {/* Bottom Copy & Scroll */}
            <div className="relative z-30 bg-[var(--surface-page)] py-12 md:py-16 text-center px-4">
                <div className="max-w-2xl mx-auto">
                    <p className="text-xl md:text-2xl font-bold text-[var(--text-primary)] mb-4">
                        As Duas Fazem o Mesmo Alongamento em Gel.
                    </p>

                    <h3 className="text-2xl md:text-3xl font-bold text-gradient-gold mb-2">
                        Qual a Diferença Entre Elas?
                    </h3>

                    <p className="text-[var(--text-secondary)] text-lg mb-8 leading-relaxed">
                        Não é talento. <br />
                        Não é sorte. <br />
                        Não é Instagram grande. <br /><br />
                        É sobre <strong>ONDE</strong> você vende seu tempo, não <strong>QUANTO</strong> você cobra.
                    </p>

                    {/* Scroll Indicator */}
                    <motion.div
                        className="flex justify-center cursor-pointer"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, duration: 1, repeat: Infinity, repeatType: "reverse" }}
                        onClick={() => {
                            const nextSection = document.getElementById('dor-da-manicure');
                            if (nextSection) {
                                nextSection.scrollIntoView({ behavior: 'smooth' });
                            }
                        }}
                    >
                        <ArrowDown className="text-[var(--action-primary)] w-10 h-10 animate-bounce" />
                    </motion.div>
                </div>
            </div>

            <SectionSeparator variant="wave" flip fill="var(--surface-section)" className="z-20 text-[var(--surface-section)]" />


        </section>
    );
};
