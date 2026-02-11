"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { X, PlayCircle, AlertTriangle, ArrowDown } from "lucide-react";
import { Section } from "../layout/Section";
import { Container } from "../layout/Container";
import { ImpactBox } from "../ui/ImpactBox";
import Image from "next/image";
import { SectionSeparator } from "../ui/SectionSeparator";

export const OQueNinguemTeContou = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <Section id="inimigo-em-comum" variant="default" className="py-20 relative overflow-hidden">
            <SectionSeparator fill="#FAF8F6" variant="wave" className="top-0 rotate-180 text-[var(--surface-page)]" />

            <Container>
                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={containerVariants}
                    className="max-w-4xl mx-auto space-y-20 relative z-10"
                >
                    {/* Header */}
                    <motion.div variants={itemVariants} className="text-center max-w-2xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-6">
                            O Que Ninguém Te Contou
                        </h2>
                        <p className="text-lg md:text-xl text-[var(--text-secondary)]">
                            Sabe <strong>por que</strong> você se sente assim? <br />
                            Porque{" "}
                            <span className="text-[var(--status-error)] font-bold">
                                TODO MUNDO te ensinou ERRADO.
                            </span>
                        </p>
                    </motion.div>

                    {/* ─── Problem 1: YouTube Chaos ─── */}
                    <motion.div
                        variants={itemVariants}
                        className="grid md:grid-cols-2 gap-8 items-center"
                    >
                        {/* Visual - Stacked "videos" */}
                        <div className="order-2 md:order-1 relative h-[320px]">
                            {/* Video Card 1 */}
                            <div className="absolute top-0 left-0 w-[85%] bg-white p-3 rounded-[var(--radius-lg)] shadow-[var(--shadow-lg)] rotate-[-3deg] border border-gray-200 z-10">
                                <div className="flex items-center gap-2 mb-2 text-red-500 font-bold text-xs uppercase">
                                    <PlayCircle size={14} /> Tutorial #1
                                </div>
                                <div className="relative h-28 rounded overflow-hidden bg-gray-100">
                                    <Image
                                        src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=400&auto=format&fit=crop"
                                        alt="Tutorial confuso de YouTube"
                                        fill
                                        sizes="300px"
                                        className="object-cover"
                                    />
                                </div>
                                <p className="text-xs font-bold text-gray-700 mt-2">
                                    "USE ESTA MARCA X!"
                                </p>
                            </div>

                            {/* Video Card 2 */}
                            <div className="absolute top-16 left-12 w-[85%] bg-white p-3 rounded-[var(--radius-lg)] shadow-[var(--shadow-lg)] rotate-[3deg] border border-gray-200 z-20">
                                <div className="flex items-center gap-2 mb-2 text-blue-500 font-bold text-xs uppercase">
                                    <PlayCircle size={14} /> Tutorial #47
                                </div>
                                <div className="relative h-28 rounded overflow-hidden bg-gray-100">
                                    <Image
                                        src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=400&auto=format&fit=crop"
                                        alt="Outro tutorial contradizendo o primeiro"
                                        fill
                                        sizes="300px"
                                        className="object-cover"
                                    />
                                </div>
                                <p className="text-xs font-bold text-gray-700 mt-2">
                                    "MARCA X NÃO PRESTA, USE Y!"
                                </p>
                            </div>
                        </div>

                        {/* Text */}
                        <div className="order-1 md:order-2 space-y-4">
                            <h3 className="text-xl font-bold text-[var(--text-primary)]">
                                1. O Caos do YouTube
                            </h3>
                            <p className="text-[var(--text-secondary)] leading-relaxed">
                                Você assiste <strong>47 vídeos</strong> diferentes. <br />
                                Uma faz assim. Outra faz assado. <br />
                                Cada uma fala uma coisa. Uma usa X. Outra odeia X e usa Y.
                            </p>
                            <div className="flex items-center gap-3 p-4 bg-red-50 rounded-lg border border-red-100">
                                <AlertTriangle className="text-red-500 shrink-0" />
                                <p className="text-sm font-medium text-red-700">
                                    Resultado: Você fica <strong>mais confusa</strong> do que quando
                                    começou.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* ─── Problem 2: Presential Course ─── */}
                    <motion.div
                        variants={itemVariants}
                        className="grid md:grid-cols-2 gap-8 items-center"
                    >
                        {/* Text */}
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold text-[var(--text-primary)]">
                                2. O Curso Presencial "Caro"
                            </h3>
                            <p className="text-[var(--text-secondary)] italic mb-2">
                                Aí você pensa: "Vou fazer um curso presencial."
                            </p>
                            <p className="text-[var(--text-secondary)] leading-relaxed">
                                Você paga <strong>R$ 800,00</strong>. 3 dias de aula. <br />
                                A professora faz na sua frente. Parece fácil.
                            </p>
                            <p className="text-[var(--text-primary)] font-medium">
                                Mas quando você tenta em casa? <br />
                                <strong>Nada sai igual.</strong>
                            </p>
                            <p className="text-sm text-[var(--text-secondary)] italic">
                                Porque ela NÃO TE ENSINOU. Ela FEZ NA SUA FRENTE. <br />
                                Você <strong>copiou</strong>. Não aprendeu.
                            </p>
                        </div>

                        {/* Visual - Before/After Comparison */}
                        <div className="flex flex-col gap-4">
                            <div className="relative rounded-lg overflow-hidden border border-green-200 shadow-sm opacity-60 grayscale-[40%]">
                                <div className="relative h-32 bg-green-50">
                                    <Image
                                        src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=400&auto=format&fit=crop"
                                        alt="Professora fazendo unha profissional na aula"
                                        fill
                                        sizes="400px"
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-green-900/30" />
                                </div>
                                <div className="bg-green-50 p-3 text-center">
                                    <span className="text-xs font-bold uppercase tracking-wider text-green-700">
                                        Na Aula
                                    </span>
                                    <p className="text-lg font-bold text-green-800">Perfeito ✨</p>
                                </div>
                            </div>

                            <div className="flex items-center justify-center">
                                <ArrowDown className="text-gray-300" size={24} />
                            </div>

                            <div className="relative rounded-lg overflow-hidden border-2 border-red-200 shadow-md scale-[1.02]">
                                <div className="relative h-32 bg-red-50">
                                    <Image
                                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=400&auto=format&fit=crop"
                                        alt="Aluna frustrada tentando em casa"
                                        fill
                                        sizes="400px"
                                        className="object-cover grayscale-[20%]"
                                    />
                                    <div className="absolute inset-0 bg-red-900/20" />
                                </div>
                                <div className="bg-red-50 p-3 text-center">
                                    <span className="text-xs font-bold uppercase tracking-wider text-red-700">
                                        Em Casa
                                    </span>
                                    <p className="text-lg font-bold text-red-800">Frustração 😔</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* ─── The Missing List ─── */}
                    <ImpactBox className="bg-white border-[var(--status-error)]/20 shadow-none">
                        <h3 className="text-center text-xl font-bold text-[var(--text-primary)] mb-8">
                            E tem mais... O que NENHUM curso te ensina:
                        </h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            {[
                                "Como cobrar sem vergonha",
                                "Como lidar com cliente difícil",
                                "O que falar quando ela reclama",
                                "Como NÃO entrar em pânico quando erra",
                                "Como parar de se comparar com o Instagram",
                            ].map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    variants={itemVariants}
                                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-[var(--surface-section)] transition-colors"
                                >
                                    <div className="bg-red-100 p-1 rounded-full text-red-600 shrink-0">
                                        <X size={16} strokeWidth={3} />
                                    </div>
                                    <span className="text-[var(--text-secondary)] font-medium">
                                        {item}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                        <p className="text-center mt-8 font-bold text-[var(--text-primary)]">
                            Eles acham que isso "não é técnico". <br />
                            <span className="text-[var(--action-primary-active)]">
                                Mas EU sei que é aí que você trava.
                            </span>
                        </p>
                    </ImpactBox>

                    {/* ─── Transition to Next Section ─── */}
                    <motion.div variants={itemVariants} className="text-center max-w-2xl mx-auto pt-8">
                        <p className="text-lg text-[var(--text-secondary)] mb-4">
                            Foi exatamente por isso que eu criei algo <strong>completamente diferente.</strong>
                        </p>
                        <p className="text-[var(--text-muted)]">
                            Mas antes de te contar <strong className="text-[var(--text-primary)]">O QUÊ</strong>... <br />
                            Deixa eu te mostrar <strong className="text-[var(--action-strong)]">POR QUÊ funciona.</strong>
                        </p>
                    </motion.div>
                </motion.div>
            </Container>

            <SectionSeparator fill="var(--surface-section)" variant="curve" flip className="text-[var(--surface-page)]" />
        </Section>
    );
};
