"use client";

import React from "react";
import Image from "next/image";
import { Section } from "../layout/Section";
import { Container } from "../layout/Container";
import { motion } from "framer-motion";
import { SectionSeparator } from "../ui/SectionSeparator";

export const DorDaManicure = () => {
    return (
        <Section id="dor-da-manicure" variant="alternate" className="py-20">
            <Container>
                {/* Header Section */}
                <div className="text-center max-w-3xl mx-auto mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-6">
                        Eu Sei O Que Você Sente
                    </h2>
                    <p className="text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed mb-4">
                        Olha, eu também já estive aí. <br />
                        Sabe aquele momento em que você olha sua unha pronta... <br />
                        E ao invés de sentir orgulho, você <strong className="text-[var(--status-error)]">só vê defeitos?</strong>
                    </p>
                    <div className="w-24 h-1 bg-[var(--action-primary)] mx-auto rounded-full" />
                </div>

                {/* ═══ Full Emotional Narrative ═══ */}
                <div className="max-w-3xl mx-auto space-y-12 mb-16">
                    {/* Pain 1: Perfeccionismo */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-xl p-8 border-l-4 border-[var(--status-error)] shadow-sm"
                    >
                        <div className="text-lg text-[var(--text-secondary)] leading-relaxed space-y-2">
                            <p><em>"Ficou torta."</em></p>
                            <p><em>"A cutilagem não tá perfeita."</em></p>
                            <p><em>"E se a cliente não gostar?"</em></p>
                            <p className="mt-4">
                                Você refaz. Uma, duas, três vezes. <br />
                                Até que desiste.
                            </p>
                            <p className="font-bold text-[var(--status-error)] text-xl mt-2">
                                "Não sirvo pra isso."
                            </p>
                        </div>
                    </motion.div>

                    {/* Pain 2: Vergonha de cobrar */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="bg-white rounded-xl p-8 border-l-4 border-[var(--action-primary)] shadow-sm"
                    >
                        <p className="text-sm font-bold text-[var(--text-muted)] uppercase tracking-wider mb-2">Ou então...</p>
                        <div className="text-lg text-[var(--text-secondary)] leading-relaxed space-y-2">
                            <p>
                                Você <strong>SABE fazer</strong>. A técnica até que tá boa. <br />
                                Mas na hora de cobrar, aquele aperto no peito:
                            </p>
                            <p className="italic text-[var(--text-primary)] font-medium p-3 bg-[var(--surface-subtle)] rounded-lg border border-[var(--border-subtle)]">
                                "R$ 80?? Não... Muito caro. Vou cobrar R$ 50."
                            </p>
                            <p className="text-[var(--text-muted)] mt-2">
                                E você sai do atendimento ganhando <strong>menos que o Uber da cliente.</strong>
                            </p>
                        </div>
                    </motion.div>

                    {/* Pain 3: Cancelamento */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-white rounded-xl p-8 border-l-4 border-gray-400 shadow-sm"
                    >
                        <p className="text-sm font-bold text-[var(--text-muted)] uppercase tracking-wider mb-2">Ou pior ainda...</p>
                        <div className="text-lg text-[var(--text-secondary)] leading-relaxed space-y-3">
                            <p>
                                A cliente marca. Você prepara tudo. <br />
                                30 minutos antes, WhatsApp:
                            </p>
                            <div className="flex flex-col space-y-2 max-w-[280px] bg-[#E5DDD5] p-4 rounded-xl shadow-inner mx-auto my-4 relative">
                                {/* Pattern Overlay (simulated) */}
                                <div className="absolute inset-0 opacity-5 bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')] bg-repeat rounded-xl pointer-events-none"></div>
                                
                                {/* Message Bubble (Received) */}
                                <div className="bg-white p-3 rounded-lg rounded-tl-none shadow-sm relative self-start">
                                    <div className="absolute top-0 -left-2 w-0 h-0 border-t-[10px] border-t-white border-l-[10px] border-l-transparent"></div>
                                    <p className="text-sm text-gray-800 leading-snug">
                                        Oi, preciso desmarcar.
                                    </p>
                                    <span className="text-[10px] text-gray-400 block text-right mt-1">
                                        09:42
                                    </span>
                                </div>
                            </div>
                            <p>
                                Seu estômago afunda. <br />
                                <em>"Foi algo que EU fiz?"</em>
                            </p>
                            <div className="pl-4 border-l-2 border-[var(--border-subtle)] italic text-[var(--text-muted)] space-y-1">
                                <p>"E se ela me bloqueou?"</p>
                                <p>"E se ela achou ruim?"</p>
                                <p>"E se ela comentou com alguém?"</p>
                            </div>
                            <p className="font-medium text-[var(--text-secondary)]">
                                Você não dorme direito naquela noite.
                            </p>
                        </div>
                    </motion.div>

                    {/* "Não é culpa sua" */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="text-center py-8"
                    >
                        <div className="inline-block bg-[var(--surface-card)] px-8 py-6 rounded-2xl shadow-sm border border-[var(--border-subtle)]">
                            <p className="text-lg text-[var(--text-secondary)] mb-4">
                                Se você <strong>SE RECONHECEU</strong> em pelo menos <strong>UMA</strong> dessas situações... <br />
                                Eu preciso te contar uma coisa.
                            </p>
                            <p className="text-3xl font-bold text-[var(--text-primary)] mb-2">
                                Não é culpa sua.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </Container>
            <SectionSeparator fill="var(--surface-page)" variant="wave" flip className="text-[var(--surface-section)]" />
        </Section>
    );
};
