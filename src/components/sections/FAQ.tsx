"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "../ui/Button";

const faqs = [
    {
        question: "Serve para quem nunca pegou no alicate?",
        answer: "✅ Sim. Começamos do zero absoluto. Anatomia, materiais, primeiros passos."
    },
    {
        question: "E se eu travar de ansiedade na frente da cliente?",
        answer: "✅ Você receberá scripts prontos para CADA situação. Zero improviso."
    },
    {
        question: "Preciso aparecer no Instagram?",
        answer: "✅ NÃO. Ensino como lotar agenda só com WhatsApp e indicação."
    },
    {
        question: "Tenho filho pequeno. Vai dar tempo?",
        answer: "✅ Aulas de 15-30 min. Assista quando puder. Sem horário fixo."
    },
    {
        question: "Já fiz curso e não consegui. Por que esse seria diferente?",
        answer: "✅ Porque ensina negócio + confiança, não só técnica."
    },
    {
        question: "Tenho vergonha de cobrar. Isso é ensinado?",
        answer: "✅ SIM. Módulo inteiro sobre precificação sem culpa."
    },
    {
        question: "Sou muito perfeccionista. E se eu travar?",
        answer: "✅ Vou te ensinar ONDE parar de mexer. Fim da refazeção infinita."
    },
    {
        question: "Preciso ter os materiais antes de iniciar?",
        answer: "✅ NÃO. Começamos com a parte teórica. Depois eu te mostro exatamente O QUE comprar e ONDE. Você pode ir comprando conforme assiste as aulas."
    },
    {
        question: "Tenho que pagar todo mês?",
        answer: "✅ NÃO. Pagamento único. O curso é SEU para sempre. Zero mensalidade."
    },
    {
        question: "Terei suporte após a compra?",
        answer: "✅ SIM. Suporte via WhatsApp direto com a equipe. Tire suas dúvidas quando precisar."
    },
    {
        question: "O curso tem atualização? Eu pago por elas?",
        answer: "✅ SIM, atualizações frequentes com novas técnicas. NÃO, você NÃO paga nada a mais. Acesso vitalício a TUDO que for lançado."
    },
    {
        question: "Como faço para acessar depois de comprar?",
        answer: "✅ No mesmo instante do pagamento, você recebe senha e passo a passo no e-mail. Começa AGORA mesmo."
    },
    {
        question: "Como solicito os certificados?",
        answer: "✅ Ao concluir 60% do curso, aparece a opção de solicitar. Nossa equipe personaliza e envia pelo WhatsApp. Simples e rápido."
    },
    {
        question: "O curso tem certificado?",
        answer: "✅ SIM, 25 certificados válidos em todo Brasil (Lei 9.394/96)."
    },
    {
        question: "Precisa de material caro para começar?",
        answer: "✅ NÃO. Kit básico R$ 150-300. Ensino exatamente o que comprar."
    },
    {
        question: "E se eu não gostar do curso?",
        answer: "✅ 7 dias de garantia TOTAL. Devolvo 100% do valor. Sem perguntas."
    }
];

export const FAQ = () => {
    return (
        <section className="py-[var(--section-padding-y-desktop)] bg-[var(--surface-page)]" id="faq">
            <div className="max-w-3xl mx-auto px-[var(--container-padding-x-mobile)] md:px-[var(--container-padding-x-desktop)]">

                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-4">
                        Perguntas Frequentes
                    </h2>
                    <p className="text-[var(--text-secondary)]">
                        Tire suas dúvidas e comece com segurança.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <AccordionItem key={index} question={faq.question} answer={faq.answer} />
                    ))}
                </div>

                {/* Final CTA in FAQ */}
                <div className="mt-16 text-center bg-gradient-to-r from-[#FFF5F7] to-[#FAF8F6] p-8 rounded-[var(--radius-xl)] border border-[var(--action-strong)]/20">
                    <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-4">
                        Ainda com dúvida?
                    </h3>
                    <p className="text-[var(--text-secondary)] mb-6">
                        Lembre-se: Você tem <strong>7 dias de garantia</strong> para testar sem risco.
                    </p>
                    <Button variant="cta" className="w-full md:w-auto text-lg px-12 animate-pulse">
                        QUERO MINHA INDEPENDÊNCIA
                    </Button>
                    <p className="text-xs text-[var(--text-muted)] mt-4">
                        Compra 100% Segura • Acesso Imediato
                    </p>
                </div>

            </div>
        </section>
    );
};

const AccordionItem = ({ question, answer }: { question: string, answer: string }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border border-[var(--border-subtle)] rounded-[var(--radius-lg)] bg-[var(--surface-card)] overflow-hidden">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-4 text-left hover:bg-[var(--surface-subtle)] transition-colors focus:outline-none"
                aria-expanded={isOpen}
            >
                <span className="font-semibold text-[var(--text-primary)] pr-4">{question}</span>
                <ChevronDown
                    className={cn(
                        "text-[var(--text-secondary)] transition-transform duration-300",
                        isOpen ? "rotate-180" : "rotate-0"
                    )}
                />
            </button>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                        <div className="p-4 pt-0 text-[var(--text-secondary)] leading-relaxed border-t border-[var(--border-subtle)]/50 bg-[var(--surface-page)]/50">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
