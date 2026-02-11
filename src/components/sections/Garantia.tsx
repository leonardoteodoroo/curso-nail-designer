"use client";

import React from "react";
import { motion } from "framer-motion";
import { Section } from "../layout/Section";
import { Container } from "../layout/Container";
import { ShieldCheck, Check } from "lucide-react";

export const Garantia = () => {
    return (
        <Section id="garantia" variant="default" className="py-20">
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto text-center"
                >
                    <div className="relative bg-white rounded-[var(--radius-2xl)] p-8 md:p-12 border-2 border-[var(--action-strong)] shadow-[var(--shadow-cta)] overflow-hidden">
                        {/* Decorative Background Glow */}
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-[var(--action-strong)] to-transparent opacity-50" />

                        {/* Shield Icon */}
                        <div className="w-24 h-24 bg-[var(--status-success-surface)] rounded-full flex items-center justify-center mx-auto mb-8 border-4 border-white shadow-md relative z-10">
                            <ShieldCheck className="w-12 h-12 text-[var(--status-success)]" />
                        </div>

                        <h2 className="text-3xl md:text-5xl font-bold text-[var(--text-primary)] mb-6">
                            Garantia <span className="text-gradient-gold">Incondicional</span> de 7 Dias
                        </h2>

                        <p className="text-xl text-[var(--text-secondary)] mb-8 leading-relaxed max-w-2xl mx-auto">
                            Se por <strong>QUALQUER</strong> motivo você não gostar... <br />
                            Eu devolvo <span className="text-[var(--status-success)] font-bold">100% do seu dinheiro</span>. <br />
                            Sem letras miúdas. Sem perguntas.
                        </p>

                        <div className="grid md:grid-cols-2 gap-4 text-left max-w-lg mx-auto bg-[var(--surface-section)] p-6 rounded-xl border border-[var(--border-subtle)] mb-8">
                            {[
                                "Risco ZERO para você",
                                "Processado pela Hotmart",
                                "Reembolso em 1 clique",
                                "Acesso imediato agora",
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center gap-3">
                                    <div className="bg-green-100 p-1 rounded-full"><Check size={14} className="text-green-700" strokeWidth={3} /></div>
                                    <span className="text-sm font-bold text-[var(--text-secondary)]">{item}</span>
                                </div>
                            ))}
                        </div>

                        <p className="text-sm text-[var(--text-muted)] mt-6 font-medium">
                            O risco é todo meu. Você só tem a ganhar.
                        </p>
                    </div>
                </motion.div>
            </Container>
        </Section>
    );
};
