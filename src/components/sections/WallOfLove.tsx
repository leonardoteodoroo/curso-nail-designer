"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, DollarSign, Palette, Heart, Users, Award, Sparkles, ImageIcon, CheckCircle } from "lucide-react";
import { Section } from "../layout/Section";
import { Container } from "../layout/Container";
import { AnimatedButton } from "../ui/AnimatedButton";
import Image from "next/image";

// Quick testimonial quotes for marquee
const quickQuotes = [
    { name: "Ana", location: "SP", text: "Mudou minha vida." },
    { name: "Carla", location: "RJ", text: "Melhor investimento que já fiz." },
    { name: "Luana", location: "MG", text: "Paguei em 1 mês." },
    { name: "Bruna", location: "PE", text: "Nunca mais dependi de ninguém." },
    { name: "Patrícia", location: "RS", text: "Minha autoestima voltou." },
    { name: "Jéssica", location: "BA", text: "Não acredito que consegui." },
    { name: "Fernanda", location: "MT", text: "Virei referência na minha cidade." },
    { name: "Simone", location: "AM", text: "Meu marido ficou impressionado." },
    { name: "Kelly", location: "DF", text: "Eram só R$ 8 por mês. Arrisquei. Valeu." },
    { name: "Eduarda", location: "SC", text: "Hoje EU escolho meus horários." },
    { name: "Priscila", location: "PB", text: "Saí da depressão atendendo clientes." },
    { name: "Rafaela", location: "ES", text: "Comprei minha moto em cash." },
    { name: "Cláudia", location: "PE", text: "Primeira vez que me senti capaz." },
    { name: "Laura", location: "PA", text: "Minha filha disse: 'Mãe, tô orgulhosa de você'." },
    { name: "Lívia", location: "SP", text: "Dobrei minha renda em 90 dias." },
];

const stats = [
    { value: "48.000+", label: "Alunas Formadas" },
    { value: "R$ 1.2k-3.5k", label: "Média Faturamento" },
    { value: "87%", label: "Ativas após 6 meses" },
    { value: "4.8/5", label: "Estrelas (9.2k reviews)" },
];

const conquestCategories = [
    {
        icon: <DollarSign className="w-5 h-5" />,
        title: "Conquistas Financeiras",
        color: "text-green-600",
        bgColor: "bg-green-100",
        testimonials: [
            { name: "Amanda", age: 29, location: "Curitiba", quote: "Saí do zero e hoje faturo R$ 3.200/mês trabalhando de casa." },
            { name: "Lívia", age: 34, location: "São Paulo", quote: "Dobrei minha renda em 90 dias. Hoje é minha renda principal." },
            { name: "Rafaela", age: 27, location: "Vitória", quote: "Em 6 meses, comprei minha moto. Em cash. Com dinheiro de unha." },
        ],
    },
    {
        icon: <Palette className="w-5 h-5" />,
        title: "Conquistas Técnicas",
        color: "text-purple-600",
        bgColor: "bg-purple-100",
        testimonials: [
            { name: "Juliana", age: 31, location: "Recife", quote: "Comecei achando que não sabia nada. Hoje faço fibra de vidro profissional." },
            { name: "Thaís", age: 25, location: "Brasília", quote: "Minhas clientes perguntam: 'Você fez onde?' Com orgulho eu respondo." },
            { name: "Gabriela", age: 38, location: "BH", quote: "Finalmente entendi a técnica. PAREI de refazer. Ficou natural." },
        ],
    },
    {
        icon: <Heart className="w-5 h-5" />,
        title: "Conquistas Emocionais",
        color: "text-pink-600",
        bgColor: "bg-pink-100",
        testimonials: [
            { name: "Bianca", age: 26, location: "Salvador", quote: "Não tenho mais vergonha de cobrar. Essa foi a MAIOR mudança." },
            { name: "Priscila", age: 33, location: "João Pessoa", quote: "Saí da depressão. Ter algo MEU me devolveu a vontade de viver." },
            { name: "Cláudia", age: 40, location: "Recife", quote: "Primeira vez na vida que me senti CAPAZ de fazer algo sozinha." },
        ],
    },
    {
        icon: <Users className="w-5 h-5" />,
        title: "Conquistas Familiares",
        color: "text-blue-600",
        bgColor: "bg-blue-100",
        testimonials: [
            { name: "Kelly", age: 28, location: "Brasília", quote: "Hoje pago a escola do meu filho SEM pedir nada pro pai dele." },
            { name: "Simone", age: 42, location: "Manaus", quote: "Meu marido parou de dizer 'isso não dá dinheiro'. Porque DÁ." },
            { name: "Laura", age: 35, location: "Belém", quote: "Minha filha de 8 anos disse: 'Mãe, tô orgulhosa de você.' Chorei." },
        ],
    },
    {
        icon: <Award className="w-5 h-5" />,
        title: "Conquistas de Reconhecimento",
        color: "text-amber-600",
        bgColor: "bg-amber-100",
        testimonials: [
            { name: "Eduarda", age: 24, location: "Florianópolis", quote: "Virei a 'menina da unha' do bairro. Agenda lotada só com indicação." },
            { name: "Natália", age: 30, location: "Goiânia", quote: "Fui convidada pra fazer as unhas de um casamento. 15 madrinhas." },
            { name: "Vanessa", age: 36, location: "Porto Alegre", quote: "Salão da minha rua me ofereceu sociedade. EU recusei. Prefiro ser dona." },
        ],
    },
    {
        icon: <Sparkles className="w-5 h-5" />,
        title: "Conquistas Improváveis",
        color: "text-indigo-600",
        bgColor: "bg-indigo-100",
        testimonials: [
            { name: "Carolina", age: 55, location: "Fortaleza", quote: "'Com essa idade?' disseram. Hoje faturo mais que minha filha formada." },
            { name: "Andréia", age: 22, location: "Maceió", quote: "Comecei no 9º mês de gravidez. 3 meses depois, já tinha 12 clientes fixas." },
            { name: "Roberta", age: 44, location: "Campinas", quote: "Sou cadeirante. Atendo em casa. Minha limitação virou meu diferencial." },
        ],
    },
];

import { SectionSeparator } from "../ui/SectionSeparator";

export const WallOfLove = () => {
    return (
        <Section id="prova-social" variant="alternate" className="py-20 relative overflow-hidden">

            <Container>
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
                        WALL OF LOVE ❤️
                    </h2>
                    <p className="text-lg text-[var(--text-secondary)]">
                        Elas Fizeram, Você Também Vai Fazer. <br />
                        <span className="font-bold">Mais de 48.000 mulheres já passaram por aqui.</span>
                    </p>
                </motion.div>

                {/* ═══ Conquest Categories ═══ */}
                <div className="mb-20">
                    <div className="space-y-8">
                        {conquestCategories.map((category, catIdx) => (
                            <motion.div
                                key={catIdx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: catIdx * 0.05 }}
                                className="bg-white rounded-2xl p-6 md:p-8 border border-[var(--border-subtle)] shadow-sm"
                            >
                                {/* Category Header */}
                                <div className="flex items-center gap-3 mb-6">
                                    <div className={`w-10 h-10 ${category.bgColor} rounded-lg flex items-center justify-center ${category.color}`}>
                                        {category.icon}
                                    </div>
                                    <h3 className="text-lg font-bold text-[var(--text-primary)]">
                                        {category.title}
                                    </h3>
                                </div>

                                {/* Testimonials Grid */}
                                <div className="grid md:grid-cols-3 gap-4">
                                    {category.testimonials.map((t, tIdx) => (
                                        <div
                                            key={tIdx}
                                            className="bg-[var(--surface-subtle)] rounded-xl p-4 border border-[var(--border-subtle)]/50"
                                        >
                                            <div className="flex gap-1 mb-2">
                                                {[1, 2, 3, 4, 5].map((star) => (
                                                    <Star key={star} size={12} className="fill-yellow-400 text-yellow-400" />
                                                ))}
                                            </div>
                                            <p className="text-sm text-[var(--text-primary)] italic mb-3 leading-relaxed">
                                                &quot;{t.quote}&quot;
                                            </p>
                                            <p className="text-xs font-bold text-[var(--text-secondary)]">
                                                {t.name}, {t.age} • {t.location}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* ═══ Galeria de Unhas (NEW) ═══ */}
                <div className="mb-20">
                    <div className="text-center mb-10">
                        <h3 className="text-2xl font-bold text-[var(--text-primary)] flex items-center justify-center gap-2">
                            <ImageIcon className="text-[var(--action-primary)]" /> GALERIA DE UNHAS
                        </h3>
                        <p className="text-[var(--text-secondary)] italic mt-2">
                            "Todas essas unhas foram feitas por alunas que começaram do ZERO no Nail Designer."
                        </p>
                    </div>
                    {/* Placeholder Grid for Images - Using placeholders for now */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="relative aspect-square rounded-xl overflow-hidden bg-gray-100 border border-[var(--border-subtle)] shadow-sm group">
                                <Image
                                    src={`https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=400&auto=format&fit=crop`} // Generic Nail Image
                                    alt={`Trabalho de aluna ${i}`}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <span className="text-white text-xs font-bold bg-black/50 px-3 py-1 rounded-full">Aluna Iniciante</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ═══ OS NÚMEROS NÃO MENTEM ═══ */}
                <div className="mb-20 bg-[var(--surface-card)] rounded-2xl p-8 border border-[var(--border-subtle)] shadow-sm">
                    <h3 className="text-center text-2xl font-bold text-[var(--text-primary)] mb-8 flex items-center justify-center gap-2">
                        📊 OS NÚMEROS NÃO MENTEM
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        {stats.map((stat, idx) => (
                            <div key={idx} className="space-y-1">
                                <div className="flex justify-center mb-2">
                                    <CheckCircle className="text-[var(--action-success)] w-6 h-6" />
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)]">
                                    {stat.value}
                                </h3>
                                <p className="text-sm text-[var(--text-secondary)] font-medium">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>


                {/* Marquee - Quick Quotes */}
                <div className="mb-20">
                    <h3 className="text-2xl font-bold text-[var(--text-primary)] text-center mb-8">
                        O Que Elas Dizem (Frases Curtas) 💬
                    </h3>
                    <div className="relative overflow-hidden py-4">
                        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[var(--surface-section)] to-transparent z-10" />
                        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[var(--surface-section)] to-transparent z-10" />
                        <MarqueeContent direction="left" speed={35} />
                    </div>
                    <div className="relative overflow-hidden py-4">
                        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[var(--surface-section)] to-transparent z-10" />
                        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[var(--surface-section)] to-transparent z-10" />
                        <MarqueeContent direction="right" speed={40} />
                    </div>
                </div>

                {/* ═══ "A Realização Mais Importante" ═══ */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-2xl mx-auto mb-12"
                >
                    <h3 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-8">
                        ✨ A Realização Mais Importante
                    </h3>

                    <div className="space-y-6 text-lg text-[var(--text-secondary)] leading-relaxed">
                        <p>Você percebeu?</p>
                        <p className="italic">
                            Nenhuma dessas mulheres tinha "dom". <br />
                            Nenhuma delas era "especial". <br />
                            Nenhuma começou "perfeita".
                        </p>
                        <p>Mas <strong>TODAS</strong> tinham uma coisa em comum:</p>
                        <p className="text-xl font-bold text-[var(--text-primary)]">
                            Elas DECIDIRAM começar.
                        </p>
                        <p>E hoje?</p>
                        <div className="font-medium text-[var(--text-primary)] space-y-1">
                            <p>✅ Financeiramente independentes.</p>
                            <p>✅ Emocionalmente confiantes.</p>
                            <p>✅ Tecnicamente capacitadas.</p>
                        </div>
                        <p className="text-xl font-bold text-[var(--action-primary-active)] pt-4">
                            Essa pode ser SUA história.
                        </p>
                        <p>
                            A única diferença entre você e elas? <br />
                            <strong>Elas já começaram.</strong>
                        </p>
                        <p className="pt-8 font-bold text-[var(--text-primary)]">
                            Tudo isso... <br />
                            <span className="text-2xl">Por quanto?</span>
                        </p>
                    </div>
                </motion.div>

                {/* CTA intermediário REMOVED - Flow to FinalCTA */}

            </Container>
            <SectionSeparator fill="var(--surface-page)" variant="wave" flip className="text-[var(--surface-section)]" />
        </Section>
    );
};

const MarqueeContent = ({ direction, speed }: { direction: "left" | "right"; speed: number }) => {
    const items = [...quickQuotes, ...quickQuotes];

    return (
        <motion.div
            initial={{ x: direction === "left" ? 0 : "-50%" }}
            animate={{ x: direction === "left" ? "-50%" : 0 }}
            transition={{
                duration: speed,
                ease: "linear",
                repeat: Infinity,
            }}
            className="flex gap-4 whitespace-nowrap px-4"
        >
            {items.map((item, index) => (
                <div
                    key={index}
                    className="flex-shrink-0 w-[260px] p-4 rounded-xl bg-white border border-[var(--border-subtle)] shadow-sm hover:border-[var(--action-primary)] transition-colors"
                >
                    <div className="flex gap-1 mb-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <Star key={star} size={12} className="fill-yellow-400 text-yellow-400" />
                        ))}
                    </div>
                    <p className="text-sm text-[var(--text-primary)] italic mb-2 text-wrap line-clamp-2">
                        &quot;{item.text}&quot;
                    </p>
                    <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-[var(--surface-subtle)] flex items-center justify-center text-[10px] font-bold">
                            {item.name.charAt(0)}
                        </div>
                        <span className="text-xs font-bold text-[var(--text-secondary)]">
                            {item.name}, {item.location}
                        </span>
                    </div>
                </div>
            ))}
        </motion.div>
    );
};
