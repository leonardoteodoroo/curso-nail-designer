"use client";

import React from "react";
import { motion } from "framer-motion";
import { Section } from "../layout/Section";
import { Container } from "../layout/Container";
import { ImpactBox } from "../ui/ImpactBox";
import Image from "next/image";
import { Quote, TrendingUp, Users, Calendar } from "lucide-react";

export const HistoriaMariana = () => {
    return (
        <Section id="historia-mariana" variant="alternate" className="py-20">
            <Container>
                <div className="max-w-4xl mx-auto">

                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="inline-block bg-[var(--action-primary)] text-white text-sm font-bold px-4 py-1 rounded-full mb-4">
                            HISTÓRIA REAL
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
                            A História de Mariana
                        </h2>
                        <p className="text-lg text-[var(--text-secondary)]">
                            Agora Você Vai Entender
                        </p>
                    </motion.div>

                    {/* Before/After Split */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="grid md:grid-cols-2 gap-0 rounded-2xl overflow-hidden shadow-lg mb-16"
                    >
                        {/* BEFORE */}
                        <div className="relative bg-gray-100">
                            <div className="relative h-64 md:h-80">
                                <Image
                                    src="https://images.unsplash.com/photo-1531746790095-e5fa288d7c1b?q=80&w=600&auto=format&fit=crop"
                                    alt="Mariana frustrada refazendo unha"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    className="object-cover grayscale-[50%] brightness-75"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                    <span className="text-xs font-bold uppercase tracking-wider text-red-300 mb-2 block">
                                        ANTES
                                    </span>
                                    <p className="font-bold text-lg mb-1">Mariana, 28 anos</p>
                                    <p className="text-sm opacity-80">
                                        Refazia a mesma unha 5 vezes.<br />
                                        Medo de atender cliente.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* AFTER */}
                        <div className="relative bg-[var(--surface-subtle)]">
                            <div className="relative h-64 md:h-80">
                                <Image
                                    src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=600&auto=format&fit=crop"
                                    alt="Mariana confiante atendendo clientas"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                    <span className="text-xs font-bold uppercase tracking-wider text-[var(--action-strong)] mb-2 block">
                                        DEPOIS
                                    </span>
                                    <p className="font-bold text-lg mb-1">R$ 100 por atendimento</p>
                                    <p className="text-sm opacity-80">
                                        Agenda fechada por 3 semanas.<br />
                                        Clientes amam o trabalho dela.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Story Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="space-y-8 mb-16"
                    >
                        {/* Quote */}
                        <div className="relative bg-white rounded-xl p-6 md:p-8 shadow-sm border border-[var(--surface-section)]">
                            <Quote className="absolute top-4 left-4 text-[var(--action-primary)] opacity-20" size={48} />
                            <blockquote className="relative z-10 text-lg md:text-xl italic text-[var(--text-secondary)] pl-8">
                                &quot;Eu tenho MEDO de atender cliente.
                                Prefiro fazer só em amigas. De graça.
                                Porque se eu cobrar e ficar ruim, vou morrer de vergonha.&quot;
                            </blockquote>
                            <p className="mt-4 pl-8 text-sm font-medium text-[var(--text-muted)]">
                                — Mariana, quando entrou no curso
                            </p>
                        </div>

                        {/* Revelation */}
                        <div className="text-center px-4">
                            <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                                Sabe o mais louco? <br />
                                <strong className="text-[var(--text-primary)]">
                                    As unhas dela NÃO são &quot;perfeitas&quot;.
                                </strong>
                            </p>
                            <p className="text-[var(--text-secondary)] mt-2">
                                Tem pequenos desvios. Pequenas assimetrias. <br />
                                Que <strong>SÓ ELA vê</strong>. A cliente? <span className="text-[var(--action-strong)] font-bold">Ama.</span>
                            </p>
                        </div>
                    </motion.div>

                    {/* Dialogue - What Changed */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        <ImpactBox className="mb-16">
                            <h3 className="text-xl font-bold text-[var(--text-primary)] mb-6 text-center">
                                O que mudou?
                            </h3>

                            <div className="space-y-6">
                                <div className="flex flex-col gap-4">
                                    <p className="text-[var(--text-secondary)]">
                                        Ela aprendeu <strong>ONDE PARAR</strong>. <br />
                                        Aprendeu que <em>&quot;bom o suficiente&quot;</em> <strong>&gt;</strong> <em>&quot;perfeito paralisante&quot;</em>.
                                    </p>
                                    <p className="text-[var(--text-secondary)]">
                                        E principalmente: aprendeu <strong>o que FALAR</strong> quando a cliente olha a unha.
                                    </p>
                                </div>

                                {/* Dialogue Bubbles */}
                                <div className="space-y-3 max-w-lg mx-auto">
                                    <div className="bg-[var(--surface-subtle)] rounded-2xl rounded-bl-sm px-4 py-3">
                                        <p className="text-sm text-[var(--text-muted)] mb-1 font-medium">Cliente:</p>
                                        <p className="text-[var(--text-primary)]">&quot;Nossa, ficou lindo! Como você fez isso?&quot;</p>
                                    </div>

                                    <div className="bg-red-50 rounded-2xl rounded-bl-sm px-4 py-3 opacity-60 ml-4">
                                        <p className="text-sm text-red-400 mb-1 font-medium">Antes ela respondia:</p>
                                        <p className="text-red-600 line-through">&quot;Ah, obrigada...&quot; <span className="text-xs">(insegura)</span></p>
                                    </div>

                                    <div className="bg-green-50 rounded-2xl rounded-br-sm px-4 py-3 border-2 border-green-200 ml-4">
                                        <p className="text-sm text-green-600 mb-1 font-medium">Hoje ela responde:</p>
                                        <p className="text-green-800 font-medium">
                                            &quot;Usei a técnica de estruturação em camadas, por isso fica tão resistente. Vai durar fácil 20 dias.&quot;
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </ImpactBox>
                    </motion.div>

                    {/* Key Insight */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-2xl p-8 shadow-md border border-[var(--surface-section)] text-center mb-16"
                    >
                        <h3 className="text-2xl md:text-3xl font-bold text-gradient-gold mb-6">
                            Autoridade não se ganha. Se constrói.
                        </h3>
                        <p className="text-lg text-[var(--text-secondary)]">
                            A cliente paga R$ 100 e sai pensando: <br />
                            <strong className="text-[var(--text-primary)]">&quot;Valeu cada centavo.&quot;</strong>
                        </p>
                    </motion.div>

                    {/* More Examples (Brief) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <p className="text-[var(--text-secondary)] mb-6">
                            Esse é apenas <strong>UM</strong> exemplo. Eu poderia te contar:
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                            <div className="flex items-center gap-3 bg-white rounded-lg p-4 shadow-sm border border-[var(--surface-section)]">
                                <TrendingUp className="text-[var(--action-primary)] shrink-0" size={20} />
                                <p className="text-sm text-left text-[var(--text-secondary)]">
                                    <strong>Carla</strong> — tinha vergonha de vender, hoje cobra R$ 150
                                </p>
                            </div>
                            <div className="flex items-center gap-3 bg-white rounded-lg p-4 shadow-sm border border-[var(--surface-section)]">
                                <Calendar className="text-[var(--action-primary)] shrink-0" size={20} />
                                <p className="text-sm text-left text-[var(--text-secondary)]">
                                    <strong>Jéssica</strong> — de 1 cliente/mês para 3 clientes/dia
                                </p>
                            </div>
                            <div className="flex items-center gap-3 bg-white rounded-lg p-4 shadow-sm border border-[var(--surface-section)]">
                                <Users className="text-[var(--action-primary)] shrink-0" size={20} />
                                <p className="text-sm text-left text-[var(--text-secondary)]">
                                    <strong>Ana</strong> — ODEIA Instagram, agenda lotada via WhatsApp
                                </p>
                            </div>
                        </div>

                        <div className="max-w-xl mx-auto">
                            <p className="text-xl font-bold text-[var(--text-primary)] mb-2">
                                NÃO é sobre ter nascido com &quot;dom&quot;.
                            </p>
                            <p className="text-xl font-bold text-[var(--text-primary)]">
                                É sobre aprender o <span className="text-gradient-gold">SISTEMA CERTO</span>.
                            </p>
                        </div>
                    </motion.div>

                </div>
            </Container>
        </Section>
    );
};
