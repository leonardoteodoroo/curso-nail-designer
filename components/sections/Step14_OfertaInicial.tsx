import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, Sparkles, ArrowRight } from "lucide-react";

export const OfertaInicial = () => {
    return (
        <section id="oferta-inicial" className="py-20 md:py-32 bg-white relative overflow-hidden">
            <div className="container px-4 md:px-6 mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="max-w-2xl mx-auto"
                >
                    <h3
                        className="text-2xl font-bold text-zinc-900 text-center mb-8 flex items-center justify-center gap-3"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                        📋 RECAPITULANDO — Tudo Que Você Recebe:
                    </h3>
                    <div className="space-y-1 mb-12">
                        {[
                            { item: "Curso Nail Designer Completo (130+ aulas)", value: "R$ 497", type: "price" },
                            { item: "Bônus 1: Extensão de Cílios", value: "R$ 297", type: "price" },
                            { item: "Bônus 2: Manicure & Pedicure Avançada", value: "R$ 197", type: "price" },
                            { item: "Bônus 3: Cutilagem em Laranja", value: "R$ 147", type: "price" },
                            { item: "Bônus 4: Polygel Iniciante", value: "R$ 197", type: "price" },
                            { item: "Bônus 5: Manicure Masculina", value: "R$ 147", type: "price" },
                            { item: "Bônus 6: Ferramentas Prontas", value: "Inestimável", type: "highlight" },
                            { item: "Bônus 7: Sorteio Mensal Kit Profissional", value: "Inestimável", type: "highlight" },
                            { item: "25 Certificados Profissionais", value: "Incluso", type: "included" },
                            { item: "Suporte via WhatsApp", value: "Incluso", type: "included" },
                            { item: "Comunidade Privada", value: "Incluso", type: "included" },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="flex items-center justify-between py-3 border-b border-zinc-200"
                            >
                                <div className="flex items-center gap-3">
                                    <CheckCircle2 className="w-4 h-4 text-zinc-400 shrink-0" />
                                    <span className="text-sm md:text-base text-zinc-800 font-medium">{item.item}</span>
                                </div>
                                <span className={`text-sm md:text-base font-bold whitespace-nowrap ${item.type === 'price' ? "text-amber-400/70 line-through" :
                                    item.type === 'highlight' ? "text-amber-500" :
                                        "text-emerald-500"
                                    }`}>
                                    {item.value}
                                </span>
                            </motion.div>
                        ))}

                        {/* Valor Total */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.8 }}
                            className="flex flex-col items-center justify-center pt-8 pb-4 mt-2"
                        >
                            <span className="text-zinc-400 font-medium text-sm md:text-base mb-1">
                                Valor total se vendido separado:
                            </span>
                            <span className="text-3xl md:text-4xl font-black text-zinc-300 line-through decoration-zinc-400/50 decoration-2">
                                R$ 1.482,00+
                            </span>
                        </motion.div>
                    </div>

                    {/* Bloco de Preço Final e CTA */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="mt-10 bg-white border-2 border-emerald-500 rounded-3xl p-8 py-10 shadow-2xl relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 bg-emerald-500 text-white text-xs font-bold px-4 py-1 rounded-bl-xl uppercase tracking-widest">
                            Oferta Especial
                        </div>

                        <div className="text-center space-y-2 mb-8">
                            <p className="text-zinc-400 text-sm line-through">De R$ 997,00 por apenas</p>
                            <div className="flex items-center justify-center gap-1">
                                <span className="text-zinc-600 text-xl font-bold mt-2">7x de</span>
                                <span className="text-5xl md:text-6xl font-black text-emerald-600 tracking-tight">R$ 8,16</span>
                            </div>
                            <p className="text-emerald-700 font-medium text-sm">ou R$ 49,90 à vista</p>
                        </div>

                        <button
                            onClick={() => window.open("https://go.hotmart.com/K104371220N?ap=5bc1&src=btn_oferta", "_blank")}
                            className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-bold py-4 md:py-5 rounded-full shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 uppercase tracking-wide text-sm md:text-lg flex items-center justify-center gap-2 mb-4 animate-pulse-slow"
                        >
                            SIM! QUERO GARANTIR MINHA VAGA AGORA
                            <ArrowRight className="w-5 h-5" />
                        </button>

                        <div className="flex items-center justify-center gap-4 text-[10px] md:text-xs text-zinc-400 font-medium uppercase tracking-wide">
                            <span className="flex items-center gap-1"><ShieldCheck className="w-3 h-3" /> Compra Segura</span>
                            <span className="flex items-center gap-1"><Sparkles className="w-3 h-3" /> Acesso Imediato</span>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};
