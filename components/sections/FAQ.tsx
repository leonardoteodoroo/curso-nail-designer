import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { GlassCard } from "../ui/GlassCard";

const faqItems = [
    {
        q: "Preciso ter experiência para fazer o curso?",
        a: "✅ Não! O curso foi desenhado do zero absoluto. Muitas das nossas 48 mil alunas nunca tinham pegado numa lixa antes. O método é passo a passo, com vídeos em velocidade normal e câmera lenta.",
    },
    {
        q: "Quanto tempo leva para começar a ganhar dinheiro?",
        a: "✅ Depende da sua dedicação, mas a maioria das alunas consegue atender as primeiras clientes entre 30 e 60 dias. Algumas, ainda mais rápido. O módulo 5 ensina exatamente como atrair clientes desde o começo.",
    },
    {
        q: "O acesso é vitalício mesmo?",
        a: "✅ Sim! Você paga uma vez e tem acesso vitalício + atualizações futuras. Isso inclui todos os novos módulos e melhorias que forem adicionados no futuro.",
    },
    {
        q: "Como funciona a garantia de 7 dias?",
        a: "✅ Simples: se por qualquer motivo você não gostar, basta solicitar o reembolso na plataforma (Hotmart) em até 7 dias. Devolvemos 100% sem perguntas.",
    },
    {
        q: "O curso funciona pra quem mora em cidade pequena?",
        a: "✅ Absoluto! Na verdade, cidade pequena é VANTAGEM. Menos concorrência, mais fidelidade. Temos alunas no interior do Mato Grosso, Manaus, interior de Minas que faturam alto.",
    },
    {
        q: "Já fiz outro curso e não funcionou. Por que esse seria diferente?",
        a: "✅ Porque a maioria dos cursos ensina SÓ técnica. A Escola Nail Designer ensina o método completo: técnica + mentalidade + negócio. É por isso que temos tantas histórias reais de transformação.",
    },
    {
        q: "Quais os materiais que vou precisar?",
        a: "✅ No módulo 1 tem a lista exata do que você precisa pra começar — sem desperdício. O investimento inicial em materiais é baixo e você recupera nas primeiras clientes.",
    },
    {
        q: "Posso assistir pelo celular?",
        a: "✅ Sim! A plataforma funciona perfeitamente no celular, tablet ou computador. Assista de qualquer lugar, no seu ritmo.",
    },
];

export const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section id="faq-lp2" className="bg-zinc-50 py-16 md:py-24 px-4">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-10">
                    <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 mb-2 block">
                        Perguntas Frequentes
                    </span>
                    <h2
                        className="text-3xl md:text-5xl font-bold text-zinc-900"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                        Tire Suas Dúvidas
                    </h2>
                    <p className="text-zinc-500 mt-2">e comece com segurança</p>
                </div>

                {/* Accordion */}
                <div className="space-y-3 mb-10">
                    {faqItems.map((item, i) => {
                        const isOpen = openIndex === i;

                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.3, delay: i * 0.05 }}
                                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${isOpen
                                    ? "bg-white border-emerald-500 shadow-md ring-1 ring-emerald-500/20"
                                    : "bg-white border-zinc-200 hover:border-emerald-300"
                                    }`}
                            >
                                <button
                                    onClick={() => setOpenIndex(isOpen ? -1 : i)}
                                    className="w-full text-left p-5 md:p-6 flex items-start justify-between gap-4"
                                    aria-expanded={isOpen}
                                >
                                    <span className="text-base md:text-lg font-bold text-zinc-900 flex-1 pt-1">
                                        {item.q}
                                    </span>
                                    <span
                                        className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300 ${isOpen
                                            ? "bg-emerald-600 text-white"
                                            : "bg-emerald-50 text-emerald-600"
                                            }`}
                                    >
                                        {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                                    </span>
                                </button>

                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.2, ease: "easeInOut" }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-5 md:px-6 pb-6 pt-0">
                                                <div className="border-t border-zinc-100 pt-4">
                                                    <p className="text-base text-zinc-600 leading-relaxed font-medium">
                                                        {item.a}
                                                    </p>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>

                {/* CTA Final */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <GlassCard className="p-8 max-w-md mx-auto bg-emerald-50 border-emerald-200">
                        <p className="font-bold text-zinc-900 mb-4">Ainda com dúvida?</p>
                        <button
                            onClick={() => window.open("https://go.hotmart.com/K104371220N?ap=5bc1&src=btn_faq", "_blank")}
                            className="w-full py-4 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold uppercase tracking-wide shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                        >
                            TESTAR POR 7 DIAS SEM RISCO
                        </button>
                        <p className="text-xs text-zinc-400 mt-2">
                            Compra 100% Segura • Acesso Imediato
                        </p>
                    </GlassCard>
                </motion.div>
            </div>
        </section>
    );
};
