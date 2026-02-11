"use client";

import React from "react";
import { motion } from "framer-motion";
import { Section } from "../layout/Section";
import { Container } from "../layout/Container";
import { Check, AlertCircle } from "lucide-react";

import { SectionSeparator } from "../ui/SectionSeparator";

export const AntiClimax = () => {
    return (
        <Section id="anti-climax" variant="default" className="py-20 relative">
            <SectionSeparator fill="var(--surface-section)" variant="slope" className="top-0 text-[var(--surface-page)]" />
            <Container>
                <div className="max-w-3xl mx-auto">

                    {/* Header - "Eu sei o que você tá pensando" */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-6">
                            Eu Sei O Que Você Tá Pensando
                        </h2>
                        <p className="text-lg text-[var(--text-secondary)] mb-4">
                            Nesse momento, você deve estar pensando: <br />
                            <em>&quot;Tá, mas...&quot;</em>
                        </p>
                        <div className="space-y-3 text-lg text-[var(--text-secondary)] italic">
                            <p>&quot;E se EU não conseguir?&quot;</p>
                            <p>&quot;E se for mais um curso que não funciona?&quot;</p>
                            <p>&quot;E se eu comprar e me arrepender?&quot;</p>
                        </div>
                    </motion.div>

                    {/* Empathy */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-[var(--surface-section)] mb-12"
                    >
                        <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-4">
                            Olha... <strong className="text-[var(--text-primary)]">EU entendo.</strong>
                        </p>
                        <p className="text-[var(--text-secondary)] leading-relaxed">
                            Você já foi enganada antes. Já comprou curso que prometeu
                            <em> &quot;faturar 5k em 30 dias&quot;</em> e não faturou nem R$ 500.
                            Já pagou presencial caro que não serviu de nada.
                            Já viu YouTube até cansar e continuou perdida.
                        </p>
                        <p className="mt-4 font-bold text-[var(--text-primary)]">
                            Então deixa eu ser MUITO honesta contigo.
                        </p>
                    </motion.div>

                    {/* The Honest Truth */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="relative mb-12"
                    >
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                            <div className="bg-[var(--status-error)] text-white text-sm font-bold px-4 py-1 rounded-full flex items-center gap-2">
                                <AlertCircle size={14} />
                                VERDADE NUA E CRUA
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 pt-10 border border-gray-200">
                            <h3 className="text-2xl font-bold text-center text-[var(--text-primary)] mb-6">
                                Isso aqui NÃO é milagre.
                            </h3>

                            <div className="space-y-3 text-[var(--text-secondary)] text-center mb-8">
                                <p>Você <strong>NÃO vai</strong> acordar amanhã com agenda lotada.</p>
                                <p>Você <strong>NÃO vai</strong> virar a manicure mais cara da cidade em 1 semana.</p>
                                <p className="font-bold text-[var(--text-primary)] text-lg mt-4">
                                    Isso. Dá. Trabalho.
                                </p>
                            </div>

                            {/* Checklist */}
                            <div className="bg-white rounded-xl p-6 shadow-sm max-w-md mx-auto">
                                <p className="text-sm font-bold text-[var(--text-muted)] uppercase tracking-wider mb-4 text-center">
                                    Você vai precisar:
                                </p>
                                {[
                                    "Assistir as aulas",
                                    "Praticar (muito)",
                                    "Aplicar o que ensino",
                                    "Ter coragem de cobrar o que merece",
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-3 py-2">
                                        <div className="bg-green-100 p-1 rounded-full text-green-600 shrink-0">
                                            <Check size={14} strokeWidth={3} />
                                        </div>
                                        <span className="text-[var(--text-secondary)] font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* The Promise */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="text-center"
                    >
                        <p className="text-lg text-[var(--text-secondary)] mb-4">
                            <strong>Não tem atalho.</strong>
                        </p>
                        <p className="text-xl text-[var(--text-primary)] font-bold mb-2">
                            MAS...
                        </p>
                        <p className="text-lg text-[var(--text-secondary)] mb-6">
                            Se você <strong>FIZER o trabalho</strong>... <br />
                            Eu te garanto que você <strong className="text-[var(--action-strong)]">vai ter resultado</strong>.
                        </p>
                        <p className="text-[var(--text-secondary)]">
                            Porque esse método já funcionou com{" "}
                            <span className="text-[var(--action-strong)] font-bold text-xl">
                                + de 48 MIL mulheres
                            </span>.
                        </p>
                        <p className="mt-4 text-lg font-bold text-[var(--text-primary)]">
                            Não é &quot;milagre&quot;. <span className="text-gradient-gold">É método.</span>
                        </p>

                        <div className="mt-12 space-y-4">
                            <p className="text-lg text-[var(--text-secondary)]">
                                Agora... se você leu até aqui... <br />
                                E sentiu que isso <strong>PODE</strong> ser para você...
                            </p>
                            <p className="text-xl font-bold text-[var(--text-primary)]">
                                Deixa eu te mostrar <strong>COMO</strong> eu vou te ajudar.
                            </p>
                        </div>
                    </motion.div>

                </div>
            </Container>
            <SectionSeparator fill="var(--surface-section)" variant="wave" flip className="text-[var(--surface-page)]" />
        </Section>
    );
};
