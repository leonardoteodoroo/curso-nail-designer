import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { BlurText } from "../ui/BlurText";
import { StaggerText } from "../ui/StaggerText";

const painCards = [
    {
        badge: "Perfeccionismo",
        quote: '"Se não ficar perfeito, eu nem posto. Prefiro nem tentar."',
        text: "Você fica horas tentando acertar a curvatura. Refaz 3, 4 vezes. Acha que nunca tá bom o suficiente. O resultado? Você trava. Não atende, não posta, não cresce.",
        highlight: "O perfeccionismo não te protege. Ele te paralisa.",
    },
    {
        badge: "Vergonha de Cobrar",
        quote: '"Ah, pra amiga eu faço mais barato..."',
        text: "Toda vez que alguém pergunta o preço, seu estômago embrulha. Você dá desconto sem ninguém pedir. Faz pacote, divide em 3x, aceita PIX depois. No final do mês, trabalhou 12 horas por dia e não sobrou nada.",
        highlight: "E você sai do atendimento ganhando menos que o Uber da cliente.",
    },
    {
        badge: "Cancelamento",
        quote: null,
        text: "Você organizou sua agenda. Separou os materiais. E de manhã cedo...",
        highlight: "Sua agenda é refém da educação dos outros.",
        hasWhatsApp: true,
    },
];

export const DorDaManicure: React.FC = () => {
    return (
        <section className="bg-white py-16 md:py-24 px-4">
            <div className="max-w-4xl mx-auto">
                {/* Headline */}
                <BlurText
                    text="Eu Sei O Que Você Sente"
                    className="text-3xl md:text-5xl text-center mb-6"
                />

                {/* Parágrafo de empatia */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-lg text-zinc-600 leading-relaxed mb-12"
                >
                    Olha, eu também já estive aí. Sei como é querer fazer tudo perfeito
                    e sentir que nunca é o suficiente. Sei como é ter medo de cobrar o
                    que merece. E sei especialmente como é ter a agenda cancelada em cima
                    da hora.
                </motion.p>

                {/* Pain Cards */}
                <div className="space-y-8">
                    {painCards.map((card, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="rounded-2xl border border-zinc-100 shadow-sm bg-white hover:shadow-md transition-shadow duration-300 overflow-hidden"
                        >
                            {/* Border left accent */}
                            <div className="flex">
                                <div className="w-1 bg-rose-400 shrink-0" />
                                <div className="p-6 md:p-8 flex-1">
                                    {/* Caso Especial: Cancelamento (Badge ao lado da bolha) */}
                                    {card.badge === "Cancelamento" ? (
                                        <div className="flex flex-col gap-4">
                                            {/* Linha Badge + WhatsApp (Sempre em coluna para evitar sobreposição) */}
                                            <div className="flex flex-col gap-3">
                                                <span className="inline-block bg-rose-50 text-rose-600 text-[10px] md:text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border border-rose-100 self-start">
                                                    {card.badge}
                                                </span>

                                                <div className="bg-[#dcf8c6] px-3 py-2 rounded-lg rounded-tl-none shadow-sm border border-[#c7eab0] max-w-[85%] relative self-start ml-2">
                                                    {/* Rabicho da bolha */}
                                                    <div className="absolute top-0 -left-2 w-0 h-0 border-t-[8px] border-t-[#dcf8c6] border-l-[8px] border-l-transparent" />

                                                    <p className="text-zinc-800 text-sm md:text-base leading-snug">
                                                        Oi, preciso desmarcar 😕
                                                    </p>
                                                    <div className="flex items-center justify-end gap-1 mt-1 opacity-60">
                                                        <span className="text-[9px] text-zinc-500 font-medium">09:42</span>
                                                        <CheckCircle2 size={10} className="text-blue-500" strokeWidth={3} />
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Textos inferiores */}
                                            <div className="space-y-4">
                                                <p className="text-zinc-600 leading-relaxed text-sm md:text-base">
                                                    {card.text}
                                                </p>
                                                <p className="text-[#b91c1c] font-bold text-lg md:text-xl leading-snug">
                                                    {card.highlight}
                                                </p>
                                            </div>
                                        </div>
                                    ) : (
                                        <>
                                            {/* Layout Padrão para outros cards */}
                                            <span className="inline-block bg-rose-50 text-rose-600 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
                                                {card.badge}
                                            </span>

                                            {card.quote && (
                                                <div className="bg-zinc-50 rounded-lg p-4 mb-4 border border-zinc-100">
                                                    <p
                                                        className="text-zinc-700 italic leading-relaxed"
                                                        style={{ fontFamily: "'Playfair Display', serif" }}
                                                    >
                                                        {card.quote}
                                                    </p>
                                                </div>
                                            )}

                                            <p className="text-zinc-600 leading-relaxed mb-4 text-sm md:text-base">
                                                {card.text}
                                            </p>

                                            <p className="text-rose-700 font-bold text-lg">
                                                {card.highlight}
                                            </p>
                                        </>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Transição */}
                <div className="mt-16 text-center space-y-4">
                    <StaggerText
                        text="Se você SE RECONHECEU em pelo menos uma dessas situações..."
                        className="text-lg md:text-xl text-zinc-700 justify-center"
                    />
                    <motion.p
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-2xl md:text-3xl font-bold text-emerald-950"
                    >
                        Não é culpa sua.
                    </motion.p>
                </div>
            </div>
        </section>
    );
};
