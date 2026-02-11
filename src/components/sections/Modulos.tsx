"use client";

import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Sparkles, Gem, MessageCircle, Home, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

const detailedModules = [
    {
        id: 1,
        title: "BASE TÉCNICA",
        subtitle: "Entender o Porquê de Cada Passo",
        icon: <BookOpen className="w-6 h-6 text-[var(--action-primary)]" />,
        description: "Para você, Perfeccionista, que fica insegura se está fazendo 'certo'.",
        groups: [
            {
                name: "📚 Anatomia das Unhas",
                items: ["Pra entender POR QUÊ faz cada passo (não só copiar)"]
            },
            {
                name: "🔧 Preparação + Cutilagem",
                items: [
                    "Técnica da 'pressão controlada' (sem bifes)",
                    "Quando PARAR de mexer (fim da refazeção)",
                    "Script pronto: O que FALAR se errar"
                ]
            },
            {
                name: "🎯 Dicas de Atendimento",
                items: ["Como lidar com cada situação real"]
            }
        ]
    },
    {
        id: 2,
        title: "ALONGAMENTO PREMIUM",
        subtitle: "A Técnica Que Te Faz Cobrar R$ 80-120",
        icon: <Gem className="w-6 h-6 text-[var(--action-strong)]" />,
        description: "Domine a técnica mais lucrativa do mercado.",
        highlight: true,
        groups: [
            {
                name: "🌟 Técnicas (Todos os Formatos)",
                items: [
                    "Naturalidade (alongamento discreto)",
                    "Redondo, Quadrado, Almond, Bailarina",
                    "Stiletto (ousado e premium - R$ 150+)"
                ]
            },
            {
                name: "🔬 Materiais Avançados",
                items: [
                    "Fibra de Vidro (resistente e leve)",
                    "Banho de Gel + Blindagem",
                    "Tipos de Brocas (qual usar)",
                    "Lixamento Boomerang Profissional"
                ]
            },
            {
                name: "🔄 Manutenção",
                items: ["Natural (sem reposição) e Completa"]
            }
        ]
    },
    {
        id: 3,
        title: "ACABAMENTOS PROFISSIONAIS",
        subtitle: "Se Diferenciar das 'Comuns'",
        icon: <Sparkles className="w-6 h-6 text-purple-500" />,
        description: "Para clientes que pagam mais e voltam sempre.",
        groups: [
            {
                name: "💅 Esmaltação Avançada",
                items: ["Sem manchas, 7 dias de duração", "Aplicação perfeita em 3 camadas"]
            },
            {
                name: "🌸 Francesinhas (4 Variações)",
                items: ["Permanente, Bilateral, Reta, Reversa"]
            },
            {
                name: "✨ Decorações Premium",
                items: ["Cascata de Glitter", "Decoração Trass", "Unhas Encapsuladas"]
            }
        ]
    },
    {
        id: 4,
        title: "ATENDIMENTO SEM ANSIEDADE",
        subtitle: "Parar de Travar na Frente da Cliente",
        icon: <MessageCircle className="w-6 h-6 text-blue-500" />,
        description: "Zero improviso. Zero ansiedade. Só execução.",
        groups: [
            {
                name: "🗣️ Comunicação",
                items: [
                    "Scripts prontos para CADA situação",
                    "O que falar quando ela reclama",
                    "Como cobrar sem vergonha (frase exata)"
                ]
            },
            {
                name: "📅 Gestão de Crise",
                items: [
                    "Lidar com cancelamento de última hora",
                    "Postar no Instagram SEM aparecer"
                ]
            }
        ]
    },
    {
        id: 5,
        title: "SEU NEGÓCIO EM CASA",
        subtitle: "Renda Real, Rotina Real de Mãe",
        icon: <Home className="w-6 h-6 text-green-600" />,
        description: "Renda real, rotina real, sem culpa materna.",
        groups: [
            {
                name: "💰 Gestão",
                items: ["Precificação inteligente", "Tabela de horários otimizada"]
            },
            {
                name: "📈 Marketing Real",
                items: ["Lotar agenda SEM Instagram (WhatsApp + indicação)"]
            },
            {
                name: "👩‍👧 Rotina",
                items: ["Conciliar filhos e atendimentos"]
            }
        ]
    }
];

const extraTechniques = [
    {
        title: "🦶 Spa dos Pés",
        items: ["Manicure/Pedicure Avançada", "Esfoliação Profissional", "Tratamento de Calos"]
    },
    {
        title: "👨 Manicure Masculina",
        items: ["Nicho ZERO concorrência", "Homens pagam MAIS"]
    },
    {
        title: "💡 Técnicas Especiais",
        items: ["Cutilagem em Laranja", "Extensão de Cílios Completo", "Polygel Iniciante"]
    }
];

export const Modulos = () => {
    return (
        <section className="py-[var(--section-padding-y-desktop)] bg-[var(--surface-section)]" id="modulos">
            <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding-x-mobile)] md:px-[var(--container-padding-x-desktop)]">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="space-y-8"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-[var(--text-primary)] mb-6">
                            O Nail Designer <br />
                            <span className="text-[var(--text-secondary)] text-2xl md:text-3xl font-medium">Escola de Unhas Profissionais</span>
                        </h2>

                        <div className="text-lg text-[var(--text-secondary)] leading-relaxed space-y-4 text-left md:text-center max-w-2xl mx-auto">
                            <p>Eu criei o <strong>Nail Designer</strong> há 12 anos. Não porque eu queria "vender curso".</p>
                            <p>Mas porque <strong>EU cansei</strong> de ver mulheres talentosas <strong>DESISTINDO</strong>...</p>
                            <div className="md:inline-block font-medium italic text-[var(--text-muted)] space-y-1">
                                <p>...por falta de confiança, vergonha de cobrar e medo de errar.</p>
                            </div>
                            <p className="pt-4 text-xl font-bold text-[var(--text-primary)]">
                                Um curso que ensina <strong>TUDO que você precisa para ser uma profissional de verdade.</strong>
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Modules Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {detailedModules.map((module, index) => (
                        <motion.div
                            key={module.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={cn(
                                "group relative p-6 rounded-[var(--radius-xl)] border transition-all duration-300 flex flex-col h-full bg-[var(--surface-card)]",
                                module.highlight
                                    ? "bg-gradient-to-br from-white to-[#FFF9E5] border-[var(--action-strong)] shadow-[var(--shadow-cta)] md:col-span-2 lg:col-span-1 lg:row-span-2 hover:-translate-y-1 transition-transform"
                                    : "border-[var(--border-subtle)] glass-card-hover"
                            )}
                        >
                            <div className="absolute top-4 right-4 text-xs font-bold text-[var(--text-muted)] opacity-50 group-hover:opacity-100 transition-opacity">
                                MÓDULO {module.id}
                            </div>

                            <div className="mb-6">
                                <div className={cn(
                                    "w-12 h-12 rounded-full flex items-center justify-center mb-4 transition-transform group-hover:scale-110",
                                    module.highlight ? "bg-[var(--action-strong)]/10" : "bg-[var(--surface-subtle)]"
                                )}>
                                    {module.icon}
                                </div>
                                <h3 className={cn("font-bold mb-1", module.highlight ? "text-2xl text-[var(--action-strong)]" : "text-xl text-[var(--text-primary)]")}>
                                    {module.title}
                                </h3>
                                <p className="text-sm font-medium text-[var(--text-secondary)]">{module.subtitle}</p>
                            </div>

                            <div className="mb-6 pl-4 border-l-2 border-[var(--border-default)] italic text-[var(--text-primary)] text-sm">
                                "{module.description}"
                            </div>

                            <div className="space-y-4 mt-auto">
                                {module.groups.map((group, gIdx) => (
                                    <div key={gIdx}>
                                        <h4 className="font-bold text-xs uppercase tracking-wide text-[var(--text-muted)] mb-2">
                                            {group.name}
                                        </h4>
                                        <ul className="space-y-2">
                                            {group.items.map((item, iIdx) => (
                                                <li key={iIdx} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                                                    <CheckCircle2 size={14} className={cn("mt-1 shrink-0", module.highlight ? "text-[var(--action-strong)]" : "text-[var(--action-primary)]")} />
                                                    <span className="leading-tight">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Extra Techniques Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-[var(--surface-card)] rounded-[var(--radius-xl)] p-8 border border-dashed border-[var(--action-primary)]"
                >
                    <h3 className="text-2xl font-bold text-center text-[var(--text-primary)] mb-8">
                        🎁 BÔNUS EXCLUSIVOS: Técnicas Extras + Nichos Lucrativos
                    </h3>
                    <div className="grid md:grid-cols-3 gap-8">
                        {extraTechniques.map((tech, idx) => (
                            <div key={idx} className="space-y-3 text-center md:text-left">
                                <h4 className="font-bold text-lg text-[var(--action-primary-active)]">{tech.title}</h4>
                                <ul className="space-y-2">
                                    {tech.items.map((item, i) => (
                                        <li key={i} className="flex items-center gap-2 justify-center md:justify-start text-sm text-[var(--text-secondary)]">
                                            <CheckCircle2 size={14} className="text-[var(--action-success)] shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </motion.div>

            </div>
        </section>
    );
};
