import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Palette, Sparkles, MessageCircle, Home, Plus, Minus, CheckCircle2, GraduationCap, ArrowRight, Scissors, Wrench, Trophy, FileText, Eye, Users, ShieldCheck } from "lucide-react";
import { BlurText } from "../ui/BlurText";
import { GlassCard } from "../ui/GlassCard";
import { ClinicalCard } from "../ui/ClinicalCard";
import { CertificatesStepperStitch } from "./CertificatesStepper2";
import { OfertaInicial } from "./OfertaInicial";

const modules = [
    {
        icon: BookOpen,
        num: 1,
        title: "Fundamentos & Base Perfeita",
        subtitle: "O alicerce que 90% dos cursos ignoram",
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
        ],
        callout: "Resultado: Confiança técnica. Você VAI saber o que está fazendo.",
    },
    {
        icon: Palette,
        num: 2,
        title: "Alongamento em Gel — Do Zero ao Premium",
        subtitle: "A Técnica Que Te Faz Cobrar R$ 80-120",
        groups: [
            {
                name: "🌟 Técnicas (Todos os Formatos)",
                items: [
                    "Naturalidade na Unha (alongamento discreto)",
                    "Formato Redondo (clássico pedido)",
                    "Formato Quadrado (moderno e forte)",
                    "Almond (amendoado elegante)",
                    "Bailarina (coffin sofisticado)",
                    "Stiletto (ousado e premium - R$ 150+)"
                ]
            },
            {
                name: "🔬 Materiais e Técnicas Avançadas",
                items: [
                    "Fibra de Vidro (resistente, leve, natural)",
                    "Banho de Gel (brilho profissional duradouro)",
                    "Blindagem da Fibra (unhas mais resistentes)",
                    "Tipos de Brocas (qual usar em cada situação)",
                    "Lixamento Boomerang (técnica profissional de acabamento)"
                ]
            },
            {
                name: "🔄 Manutenção Profissional",
                items: [
                    "Manutenção Natural (alongamento sem reposição)",
                    "Manutenção com Reposição (renovação completa)"
                ]
            }
        ],
        callout: "Resultado: Você vira ESPECIALISTA na técnica mais lucrativa.",
    },
    {
        icon: Sparkles,
        num: 3,
        title: "Acabamentos Profissionais — O Diferencial Premium",
        subtitle: "Para você que quer clientes que voltam E indicam",
        groups: [
            {
                name: "💅 Esmaltação Avançada",
                items: [
                    "Técnica profissional (sem mancha, 7 dias de duração)",
                    "Aplicação perfeita em 3 camadas"
                ]
            },
            {
                name: "🌸 Francesinhas (4 Variações)",
                items: [
                    "Francesinha Permanente (clássica que nunca sai de moda)",
                    "Francesinha Bilateral (dupla lateral moderna)",
                    "Francesinha Reta (minimalista elegante)",
                    "Francesinha Reversa (invertida sofisticada)"
                ]
            },
            {
                name: "✨ Decorações Premium",
                items: [
                    "Unha Cascata de Glitter (efeito degradê brilhante)",
                    "Decoração Trass (aplicação de pedrarias)",
                    "Unhas Encapsuladas (flores, glitter, designs dentro do gel)"
                ]
            }
        ],
        callout: "Resultado: Clientes que pagam mais e voltam sempre.",
    },
    {
        icon: MessageCircle,
        num: 4,
        title: "Atendimento Sem Ansiedade — Postura de Expert",
        subtitle: "Parar de Travar na Frente da Cliente",
        groups: [
            {
                name: "🗣️ Comunicação & Postura",
                items: [
                    "Scripts prontos para CADA situação",
                    "O que falar quando ela reclama",
                    "Como lidar com cancelamento de última hora",
                    "Como cobrar sem vergonha (frase exata)",
                    "Como postar no Instagram SEM aparecer (se quiser)"
                ]
            }
        ],
        callout: "Resultado: Zero improviso. Zero ansiedade. Só execução.",
    },
    {
        icon: Home,
        num: 5,
        title: "Montando Seu Negócio",
        subtitle: "Para você, Mãe, que precisa conciliar filho + renda",
        groups: [
            {
                name: "💰 Gestão & Rotina",
                items: [
                    "Precificação inteligente (nunca mais 'pagar para trabalhar')",
                    "Como lotar agenda SEM Instagram (WhatsApp + indicação)",
                    "Rotina para mães (como encaixar atendimentos)",
                    "Tabela de horários (otimizar tempo)"
                ]
            }
        ],
        callout: "Resultado: Renda real, rotina real, sem culpa materna.",
    },
    {
        icon: GraduationCap,
        num: 6,
        title: "Pedicure Profissional Completa",
        subtitle: "Aumente seu lucro diversificando serviços",
        groups: [
            {
                name: "🦶 Técnica de Pés",
                items: ["Anatomia específica dos pés", "Cutilagem avançada sem traumas", "Esmaltação de longa duração"]
            }
        ],
        callout: "Diversificar serviços é o caminho mais rápido para aumentar seu faturamento mensal.",
    },
    {
        icon: Sparkles,
        num: 7,
        title: "Spa dos Pés",
        subtitle: "Tratamento premium que suas clientes vão amar",
        groups: [
            {
                name: "🌿 Tratamentos",
                items: [
                    "Manicure e Pedicure Avançada (curso completo)",
                    "Esfoliação Avançada (técnicas profissionais)",
                    "Tratamento para Calos (sem dor, sem risco)"
                ]
            }
        ],
        callout: "Aumente seu ticket médio oferecendo a experiência completa de relaxamento.",
    },
    {
        icon: Users,
        num: 8,
        title: "Manicure Masculina Profissional",
        subtitle: "Nicho em crescimento explosivo",
        groups: [
            {
                name: "👔 Público Masculino",
                items: [
                    "Nicho pouco explorado = ZERO concorrência",
                    "Homens pagam MAIS e são clientes fiéis",
                    "Técnicas de acabamento natural"
                ]
            }
        ],
        callout: "Seja a primeira da sua região a dominar este nicho pouco explorado.",
    },
    {
        icon: Palette,
        num: 9,
        title: "Treinamento de Cutilagem em Laranja",
        subtitle: "Aumente seu arsenal de habilidades premium",
        groups: [
            {
                name: "🎨 Habilidades Extras",
                items: [
                    "Treinamento de Cutilagem em Laranja (treinar sem medo)",
                    "Extensão de Cílios Completo (17 aulas, diversificar renda)",
                    "Polygel Iniciante (técnica premium)"
                ]
            }
        ],
        callout: "Para você, Perfeccionista: treine em laranjas antes de ir para a cliente real.",
    },
];

const bonuses = [
    {
        id: 1,
        title: "BÔNUS 1: Curso Extensão de Cílios Completo",
        value: "R$ 297",
        subtitle: "17 aulas + Certificado",
        desc: "Fio a Fio, Volume Híbrido, Volume Brasileiro, Lash Lifting",
        reason: "→ Diversificar serviços (mais renda, mesma cliente)",
        icon: Sparkles
    },
    {
        id: 2,
        title: "BÔNUS 2: Manicure & Pedicure Avançada",
        value: "R$ 197",
        subtitle: "Curso completo + Spa dos Pés + Certificado",
        desc: "Esfoliação avançada, tratamento para calos, técnicas profissionais",
        reason: "→ Atender o 'pacote completo'",
        icon: Scissors
    },
    {
        id: 3,
        title: "BÔNUS 3: Treinamento de Cutilagem em Laranja",
        value: "R$ 147",
        subtitle: "Prática guiada passo a passo",
        desc: "Treine sem medo de errar em cliente real",
        reason: "→ Para você, Perfeccionista",
        icon: Wrench
    },
    {
        id: 4,
        title: "BÔNUS 4: Polygel Iniciante",
        value: "R$ 197",
        subtitle: "Aula completa + Certificado",
        desc: "Técnica premium do mercado atual",
        reason: "→ Aumentar ticket médio",
        icon: Sparkles
    },
    {
        id: 5,
        title: "BÔNUS 5: Manicure Masculina Profissional",
        value: "R$ 147",
        subtitle: "Curso + Certificado",
        desc: "Nicho pouco explorado, homens pagam MAIS",
        reason: "→ ZERO concorrência",
        icon: Users
    },
    {
        id: 6,
        title: "BÔNUS 6: Ferramentas Prontas (EXCLUSIVO)",
        value: "Inestimável",
        subtitle: "Templates prontos para usar",
        desc: "Tabela de Precificação, Scripts WhatsApp, Ficha de Anamnese, Rotina para Mães, Comunidade Privada",
        reason: "→ NÃO TRAVAR na execução",
        icon: FileText
    }
];

const superBonus = {
    title: "🎁 BÔNUS 7: Sorteio Mensal de Kit Manicure Profissional",
    desc: "Todos os meses, uma aluna será sorteada para receber em casa um KIT MANICURE INICIAL: Completo, Profissional, Pronto para trabalhar.",
    highlight: "Isso não é um simples brinde. É o empurrão que falta para quem quer sair do zero. → Porque eu SEI que material custa caro no início"
};

export const Modulos: React.FC = () => {
    const [openModule, setOpenModule] = useState(0);

    return (
        <section id="oferta-lp2" className="bg-zinc-50 py-16 md:py-24 px-4">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    {/* Logo do Curso — substitua o src quando tiver a imagem */}
                    <div className="flex justify-center mb-6">
                        <div className="w-32 h-32 rounded-2xl border-2 border-dashed border-zinc-300 bg-white flex flex-col items-center justify-center gap-1 text-zinc-400 shadow-sm">
                            {/* Substitua esta div por: <img src="/logo-curso.png" alt="Logo Nail Designer" className="w-32 h-32 object-contain" /> */}
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                            <span className="text-[10px] font-medium uppercase tracking-wide">Logo</span>
                        </div>
                    </div>
                    <span className="inline-block bg-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
                        Nail Designer Academy
                    </span>
                    <BlurText
                        text="Escola de Unhas Profissionais"
                        className="text-3xl md:text-5xl mb-4"
                    />
                    <p className="text-zinc-600 max-w-2xl mx-auto leading-relaxed">
                        Depois de 12 anos fazendo unhas e formando mais de 48 mil alunas,
                        eu organizei tudo o que aprendi num método passo a passo.
                        Sem enrolação, sem teoria inútil. Só o que funciona <strong className="text-zinc-900">para que você seja uma profissional de Alto Padrão.</strong>
                    </p>
                </div>

                {/* Módulos — Accordion */}
                <div className="space-y-3 mb-16">
                    {modules.map((mod, i) => {
                        const isOpen = openModule === i;
                        const Icon = mod.icon;

                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className={`rounded-2xl border transition-all duration-300 bg-white ${isOpen
                                    ? "border-emerald-300 shadow-md ring-1 ring-emerald-500/20"
                                    : "border-zinc-200 hover:border-emerald-200"
                                    }`}
                            >
                                {/* Header (clicável - estrutura simplificada e padding ajustado) */}
                                <button
                                    onClick={() => setOpenModule(isOpen ? -1 : i)}
                                    className="w-full text-left p-4 md:p-6 flex items-start justify-between gap-4"
                                >
                                    <div className="flex items-start gap-4 flex-1 min-w-0 pr-2">
                                        <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-colors mt-1 ${isOpen
                                            ? "bg-emerald-600 text-white"
                                            : "bg-emerald-50 text-emerald-600"
                                            }`}>
                                            <Icon className="w-5 h-5" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h3 className="text-base md:text-lg font-bold text-zinc-900 whitespace-normal break-words leading-tight mb-1">
                                                {mod.title}
                                            </h3>
                                            <p className="text-xs md:text-sm text-zinc-500 leading-snug">
                                                {mod.subtitle}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Toggle */}
                                    <div
                                        className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors mt-2 ${isOpen
                                            ? "bg-emerald-600 text-white"
                                            : "bg-emerald-50 text-emerald-600"
                                            }`}
                                    >
                                        {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                                    </div>
                                </button>

                                {/* Content (expand) */}
                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-5 md:px-6 pb-6 border-t border-zinc-100 pt-5">
                                                <div className="space-y-6 mb-5">
                                                    {mod.groups.map((group, gIdx) => (
                                                        <div key={gIdx} className="space-y-3">
                                                            <h4 className="text-sm md:text-base font-bold text-zinc-800 uppercase tracking-wide flex items-center gap-2">
                                                                {group.name}
                                                            </h4>
                                                            <div className="space-y-2">
                                                                {group.items.map((item, iIdx) => (
                                                                    <div key={iIdx} className="flex items-start gap-2.5 text-zinc-600 text-sm md:text-base leading-snug">
                                                                        <CheckCircle2
                                                                            className="w-4 h-4 text-rose-300 shrink-0 mt-0.5"
                                                                            strokeWidth={1.5}
                                                                            absoluteStrokeWidth
                                                                        />
                                                                        <span>{item}</span>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                                {mod.callout && (
                                                    <p className="text-sm italic text-emerald-800 bg-emerald-50/80 rounded-lg p-4 border border-emerald-100/50 leading-relaxed">
                                                        💡 {mod.callout}
                                                    </p>
                                                )}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Bônus */}
                <div className="mb-12 text-center">
                    <span className="inline-block bg-amber-100 text-amber-700 text-[10px] md:text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
                        🎁 BÔNUS EXCLUSIVOS
                    </span>
                    <h3
                        className="text-3xl md:text-5xl font-bold text-zinc-900 mb-4"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                        Você NÃO Vai Ficar Sozinha
                    </h3>
                    <p className="text-zinc-600 max-w-xl mx-auto text-lg">
                        Além das <span className="text-emerald-600 font-extrabold">+130 aulas</span>, você ainda recebe:
                    </p>
                </div>
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                    {bonuses.map((bonus, i) => {
                        const Icon = bonus.icon;
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <ClinicalCard hoverEffect className="p-6 h-full flex flex-col relative overflow-hidden group">
                                    {/* Icon e Valor */}
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600">
                                            <Icon size={20} />
                                        </div>
                                        <div className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-[10px] font-bold line-through">
                                            {bonus.value}
                                        </div>
                                    </div>

                                    {/* Títulos */}
                                    <h4 className="font-bold text-zinc-900 text-sm mb-1">
                                        {bonus.title}
                                    </h4>
                                    <p className="text-[11px] text-zinc-400 mb-3 font-medium lowercase">
                                        {bonus.subtitle}
                                    </p>

                                    {/* Descrição */}
                                    <p className="text-xs text-zinc-600 mb-4 leading-relaxed italic">
                                        {bonus.desc}
                                    </p>

                                    {/* Reason */}
                                    <p className="text-[11px] font-medium text-rose-400 mt-auto">
                                        {bonus.reason}
                                    </p>
                                </ClinicalCard>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Super Bônus 7 (Largo) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <ClinicalCard className="p-8 md:p-12 border-2 border-amber-200 bg-gradient-to-br from-amber-50/50 to-white text-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <Trophy size={100} className="text-amber-500" />
                        </div>

                        <div className="w-16 h-16 rounded-2xl bg-amber-100 flex items-center justify-center text-amber-600 mx-auto mb-6 shadow-sm">
                            <Trophy size={32} />
                        </div>

                        <h3 className="text-xl md:text-2xl font-bold text-zinc-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                            {superBonus.title}
                        </h3>

                        <p className="text-zinc-600 max-w-xl mx-auto mb-6 text-sm md:text-base leading-relaxed">
                            {superBonus.desc}
                        </p>

                        <div className="inline-block bg-amber-50 text-amber-700 px-4 py-2 rounded-lg font-bold text-xs md:text-sm border border-amber-100 italic">
                            {superBonus.highlight}
                        </div>
                    </ClinicalCard>
                </motion.div>
            </div>
        </section >
    );
};
