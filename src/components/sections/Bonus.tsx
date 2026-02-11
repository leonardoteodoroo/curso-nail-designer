"use client";

import React from "react";
import { motion } from "framer-motion";
import { Section } from "../layout/Section";
import { Container } from "../layout/Container";
import { Gift, Scissors, Sparkles, Wrench, Users, FileText, Trophy, GraduationCap, Check } from "lucide-react";

const bonuses = [
    {
        num: 1,
        title: "Curso Extensão de Cílios Completo",
        subtitle: "17 aulas + Certificado",
        value: "R$ 297",
        description: "Fio a Fio, Volume Híbrido, Volume Brasileiro, Lash Lifting",
        target: "Diversificar serviços (mais renda, mesma cliente)",
        icon: <Sparkles className="w-5 h-5" />,
    },
    {
        num: 2,
        title: "Manicure & Pedicure Avançada",
        subtitle: "Curso completo + Spa dos Pés + Certificado",
        value: "R$ 197",
        description: "Esfoliação avançada, tratamento para calos, técnicas profissionais",
        target: "Atender o 'pacote completo'",
        icon: <Scissors className="w-5 h-5" />,
    },
    {
        num: 3,
        title: "Treinamento de Cutilagem em Laranja",
        subtitle: "Prática guiada passo a passo",
        value: "R$ 147",
        description: "Treine sem medo de errar em cliente real",
        target: "Para você, Perfeccionista",
        icon: <Wrench className="w-5 h-5" />,
    },
    {
        num: 4,
        title: "Polygel Iniciante",
        subtitle: "Aula completa + Certificado",
        value: "R$ 197",
        description: "Técnica premium do mercado atual",
        target: "Aumentar ticket médio",
        icon: <Sparkles className="w-5 h-5" />,
    },
    {
        num: 5,
        title: "Manicure Masculina Profissional",
        subtitle: "Curso + Certificado",
        value: "R$ 147",
        description: "Nicho pouco explorado, homens pagam MAIS",
        target: "ZERO concorrência",
        icon: <Users className="w-5 h-5" />,
    },
    {
        num: 6,
        title: "Ferramentas Prontas (EXCLUSIVO)",
        subtitle: "Templates prontos para usar",
        value: "Inestimável",
        description: "Tabela de Precificação, Scripts WhatsApp, Ficha de Anamnese, Rotina para Mães, Comunidade Privada",
        target: "NÃO TRAVAR na execução",
        icon: <FileText className="w-5 h-5" />,
    },
];

const recapItems = [
    { name: "Curso Nail Designer Completo (130+ aulas)", value: "R$ 497" },
    { name: "Bônus 1: Extensão de Cílios", value: "R$ 297" },
    { name: "Bônus 2: Manicure & Pedicure Avançada", value: "R$ 197" },
    { name: "Bônus 3: Cutilagem em Laranja", value: "R$ 147" },
    { name: "Bônus 4: Polygel Iniciante", value: "R$ 197" },
    { name: "Bônus 5: Manicure Masculina", value: "R$ 147" },
    { name: "Bônus 6: Ferramentas Prontas", value: "Inestimável" },
    { name: "Bônus 7: Sorteio Mensal Kit Profissional", value: "Inestimável" },
    { name: "25 Certificados Profissionais", value: "Incluso" },
    { name: "Suporte via WhatsApp", value: "Incluso" },
    { name: "Comunidade Privada", value: "Incluso" },
];

export const Bonus = () => {
    return (
        <Section id="bonus" variant="alternate" className="py-20">
            <Container>
                <div className="max-w-4xl mx-auto">

                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <p className="text-lg text-[var(--text-secondary)] mb-8 italic">
                            Mas eu sei que você ainda tá pensando... <br />
                            <strong className="text-[var(--text-primary)]">"Será que EU vou conseguir?"</strong> <br /><br />
                            Por isso eu preparei algo <strong>a MAIS</strong>.
                        </p>

                        <span className="inline-block bg-[var(--action-strong)] text-white text-sm font-bold px-4 py-1 rounded-full mb-4">
                            🎁 BÔNUS EXCLUSIVOS
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
                            Você NÃO Vai Ficar Sozinha
                        </h2>
                        <p className="text-lg text-[var(--text-secondary)]">
                            Além das 130 aulas, você ainda recebe:
                        </p>
                    </motion.div>

                    {/* Bonus Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                        {bonuses.map((bonus, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.05 }}
                                className="bg-white rounded-xl p-5 border border-[var(--surface-section)] shadow-sm glass-card-hover"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="shrink-0 w-10 h-10 bg-[var(--action-strong)]/10 rounded-lg flex items-center justify-center text-[var(--action-strong)]">
                                        {bonus.icon}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center justify-between gap-2 mb-1">
                                            <h3 className="font-bold text-[var(--text-primary)] text-sm leading-tight">
                                                BÔNUS {bonus.num}: {bonus.title}
                                            </h3>
                                            <span className="shrink-0 text-xs font-bold text-[var(--action-strong)] bg-[var(--action-strong)]/10 px-2 py-0.5 rounded">
                                                {bonus.value}
                                            </span>
                                        </div>
                                        <p className="text-xs text-[var(--text-muted)] mb-2">{bonus.subtitle}</p>
                                        <p className="text-sm text-[var(--text-secondary)] mb-2">{bonus.description}</p>
                                        <p className="text-xs font-medium text-[var(--action-primary-active)]">
                                            → {bonus.target}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Bonus 7 - Special Highlight */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative bg-gradient-to-br from-[var(--action-strong)]/5 to-[var(--action-primary)]/5 rounded-2xl p-6 md:p-8 border-2 border-[var(--action-strong)]/20 text-center mb-12"
                    >
                        <Trophy className="w-10 h-10 text-[var(--action-strong)] mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">
                            🎁 BÔNUS 7: Sorteio Mensal de Kit Manicure Profissional
                        </h3>
                        <p className="text-[var(--text-secondary)] mb-4">
                            Todos os meses, uma aluna é sorteada para receber em casa um <strong>Kit Manicure Inicial Completo</strong> — profissional e pronto para trabalhar.
                        </p>
                        <p className="text-sm font-bold text-[var(--action-strong)]">
                            Isso não é brinde. É investimento na SUA carreira.
                        </p>
                    </motion.div>

                    {/* ═══ Certificados Profissionais ═══ */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-2xl p-6 md:p-8 border border-[var(--border-subtle)] shadow-sm mb-12"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                                <GraduationCap className="w-6 h-6 text-blue-600" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-[var(--text-primary)]">
                                    🎓 25 Certificados Profissionais
                                </h3>
                                <p className="text-sm text-[var(--text-secondary)]">
                                    Válidos em todo o Brasil (Lei 9.394/96)
                                </p>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <h4 className="font-bold text-sm text-[var(--text-primary)] mb-3">O que você recebe:</h4>
                                <ul className="space-y-2">
                                    {[
                                        "Certificado personalizado com seu nome completo",
                                        "Válido como curso livre profissionalizante",
                                        "Amparado pela Lei 9.394/96 (LDB)",
                                        "Aceito em salões, clínicas e espaços de beleza",
                                        "25 certificados diferentes (1 por módulo/técnica)",
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                                            <Check size={16} className="text-[var(--action-success)] shrink-0 mt-0.5" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-bold text-sm text-[var(--text-primary)] mb-3">Como funciona:</h4>
                                <div className="space-y-3">
                                    {[
                                        { step: "1", text: "Conclua 60% do módulo" },
                                        { step: "2", text: "Solicite pelo WhatsApp" },
                                        { step: "3", text: "Nossa equipe personaliza e envia" },
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex items-center gap-3">
                                            <div className="w-7 h-7 bg-[var(--action-primary)]/20 rounded-full flex items-center justify-center text-xs font-bold text-[var(--action-primary-active)]">
                                                {item.step}
                                            </div>
                                            <span className="text-sm text-[var(--text-secondary)]">{item.text}</span>
                                        </div>
                                    ))}
                                </div>
                                <p className="mt-4 text-xs text-[var(--text-muted)] italic">
                                    Simples. Rápido. Sem burocracia.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* ═══ Recapitulação ═══ */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-br from-[#FFF5F7] to-[#FAF8F6] rounded-2xl p-6 md:p-8 border-2 border-[var(--action-primary)]/20"
                    >
                        <h3 className="text-xl md:text-2xl font-bold text-center text-[var(--text-primary)] mb-6">
                            📋 RECAPITULANDO — Tudo Que Você Recebe:
                        </h3>

                        <div className="space-y-2 mb-6">
                            {recapItems.map((item, idx) => (
                                <div key={idx} className="flex items-center justify-between py-2 border-b border-[var(--border-subtle)]/50 last:border-0">
                                    <div className="flex items-center gap-2">
                                        <Check size={16} className="text-[var(--action-success)] shrink-0" />
                                        <span className="text-sm text-[var(--text-primary)]">{item.name}</span>
                                    </div>
                                    <span className="text-xs font-bold text-[var(--action-strong)] shrink-0">{item.value}</span>
                                </div>
                            ))}
                        </div>

                        <div className="text-center space-y-1">
                            <p className="text-sm text-[var(--text-muted)]">Valor total se vendido separado:</p>
                            <p className="text-2xl font-bold text-[var(--text-muted)] line-through">R$ 1.482,00+</p>
                            <p className="text-lg font-bold text-[var(--text-primary)]">
                                Você leva TUDO por apenas:
                            </p>
                            <p className="text-4xl font-black text-[var(--action-strong)]">
                                7x R$ 8,16
                            </p>
                            <p className="text-sm text-[var(--text-secondary)]">
                                ou R$ 49,90 à vista
                            </p>
                        </div>
                    </motion.div>

                </div>
            </Container>
        </Section>
    );
};
