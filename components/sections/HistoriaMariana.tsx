import React from "react";
import { motion } from "framer-motion";
import { Quote, TrendingUp, Calendar, Users, CheckCircle2, X, Check, CalendarCheck2, Heart, BellOff, BadgeCheck } from "lucide-react";

// ── Dados do split Antes × Depois ────────────────────────────────────────────
const beforeItems = [
    "28 anos, morando na periferia do Rio",
    "Cobrava R$25 por unha tentando fidelizar",
    "Vergonha de mostrar o trabalho",
    "3 cancelamentos por semana",
];

const afterItems = [
    { icon: Check, label: "Cobra R$120 por unha", sub: "Com fila de espera" },
    { icon: CalendarCheck2, label: "Agenda lotada 3 semanas antes", sub: "" },
    { icon: Heart, label: "Posts com 200+ curtidas", sub: "" },
    { icon: BellOff, label: "Zero cancelamentos", sub: "Trabalha apenas com sinal" },
];

const chatMessages = [
    { text: "Eu tenho MEDO de atender cliente.", time: "10:23" },
    { text: "Prefiro fazer só em amigas. Pé e mão R$30... 😬", time: "10:23" },
    { text: "Porque se eu cobrar e ficar ruim, vou morrer de vergonha. 😰", time: "10:24" },
];

// ─────────────────────────────────────────────────────────────────────────────

export const HistoriaMariana: React.FC = () => {
    return (
        <section className="bg-zinc-50 py-16 md:py-20 px-4">
            <div className="max-w-4xl mx-auto">

                {/* ══ COPY ESTRATÉGICA (V2) ══════════════════════════════════ */}

                {/* Intro */}
                <div className="py-10 max-w-4xl mx-auto text-center">
                    <p className="text-emerald-600 font-semibold tracking-widest uppercase text-xs mb-4">
                        A virada de chave
                    </p>
                    <h2
                        className="text-2xl md:text-4xl font-bold leading-tight mb-6 text-zinc-900"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                        Foi exatamente por isso que eu criei algo completamente diferente.{" "}
                        Mas antes de te contar{" "}
                        <span className="text-emerald-600">O QUÊ</span>...
                    </h2>
                    <p
                        className="text-xl text-zinc-500 italic"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                        Deixa eu te mostrar POR QUÊ funciona.
                    </p>
                </div>

                {/* Subtítulo */}
                <div className="pb-6 max-w-5xl mx-auto text-center">
                    <h3
                        className="text-3xl md:text-4xl font-bold mb-2 text-zinc-900"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                        A História de Mariana
                    </h3>
                    <p className="text-lg text-zinc-400 mb-6">(Agora você vai entender)</p>
                    {/* Balões conversacionais */}
                    <div className="space-y-2.5 max-w-xl mx-auto pt-2 text-left">
                        {([
                            {
                                text: (
                                    <>
                                        Conheci a Mariana há dois anos, e ela estava no limite,{" "}
                                        <span className="font-semibold text-red-500">
                                            perdendo até a própria fé...
                                        </span>
                                    </>
                                ),
                                delay: 0,
                            },
                            {
                                text: "Mãe solteira de duas meninas... Morando de favor na casa dos pais.",
                                delay: 0.14,
                            },
                            {
                                text: "Atendendo clientes num estúdio improvisado no quarto, enquanto o atual namorado mal saía da cama lidando com uma depressão severa pelo desemprego.",
                                delay: 0.28,
                            },
                            {
                                text: (
                                    <>
                                        Só que a reviravolta que ela deu não apenas resgatou a saúde do parceiro, como{" "}
                                        <span className="font-bold text-zinc-900">
                                            calou a boca de muita gente...
                                        </span>
                                    </>
                                ),
                                delay: 0.44,
                            },
                            {
                                text: (
                                    <>
                                        ...e aquela mesinha improvisada virou seu{" "}
                                        <span className="font-bold text-emerald-600 underline underline-offset-2 decoration-emerald-300">
                                            passaporte para a independência.
                                        </span>
                                    </>
                                ),
                                delay: 0.58,
                                highlight: true,
                            },
                        ] as Array<{ text: React.ReactNode; delay: number; highlight?: boolean }>).map((msg, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -14 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.38, delay: msg.delay, ease: [0.25, 0.1, 0.25, 1] }}
                                className="flex items-end gap-1.5"
                            >
                                {/* Seta — entra junto com x do card, só opacity/transform */}
                                <motion.span
                                    initial={{ opacity: 0, x: -6 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.28, delay: msg.delay + 0.18, ease: "easeOut" }}
                                    className="shrink-0 text-zinc-300 text-lg leading-none mb-1 select-none"
                                    style={{ willChange: "transform, opacity" }}
                                >
                                    ›
                                </motion.span>
                                <div
                                    className={`rounded-2xl rounded-bl-sm px-4 py-2.5 text-sm md:text-base leading-snug max-w-[92%] shadow-sm ${msg.highlight
                                        ? "bg-emerald-50 border border-emerald-100 text-zinc-700"
                                        : "bg-white border border-zinc-100 text-zinc-600"
                                        }`}
                                >
                                    {msg.text}
                                </div>
                            </motion.div>
                        ))}

                        {/* Linha de transição para o card */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.75 }}
                            className="text-zinc-400 text-xs text-center pt-2 pb-1 italic"
                        >
                            Quando ela entrou no curso, me mandou essa mensagem:
                        </motion.p>
                    </div>
                </div>

                {/* Split Antes × Depois */}
                <div className="w-full grid md:grid-cols-2 border border-zinc-100 rounded-2xl overflow-hidden shadow-sm mb-12">

                    {/* ANTES */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="relative bg-zinc-50 text-zinc-700 p-8 md:p-12 flex flex-col justify-center border-r border-zinc-100"
                    >
                        <div className="max-w-md mx-auto w-full">
                            <span className="inline-block px-4 py-1.5 bg-red-100 text-red-600 rounded-full text-xs font-bold mb-8 border border-red-200 tracking-wider uppercase">
                                Antes do Método
                            </span>

                            {/* Card WhatsApp realista */}
                            <motion.div
                                initial={{ rotate: -1 }}
                                whileHover={{ rotate: 0 }}
                                transition={{ duration: 0.4 }}
                                className="rounded-2xl overflow-hidden shadow-xl border border-zinc-200 mb-8 bg-white"
                            >
                                <div className="bg-[#075E54] p-3 flex items-center gap-3">
                                    <div className="w-9 h-9 bg-zinc-300 rounded-full flex items-center justify-center text-[#075E54] font-bold text-sm">
                                        M
                                    </div>
                                    <div>
                                        <p className="font-semibold text-white text-sm">Mariana (Aluna Nova)</p>
                                        <p className="text-xs text-white/60">visto por último hoje às 10:20</p>
                                    </div>
                                </div>
                                <div className="bg-[#ECE5DD] p-4 flex flex-col gap-2.5">
                                    {chatMessages.map((msg, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, y: 6 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.2 + i * 0.15 }}
                                            className="bg-white self-start max-w-[88%] px-3 py-2 rounded-lg rounded-tl-none shadow-sm"
                                        >
                                            <p className="text-sm text-zinc-800 leading-snug">{msg.text}</p>
                                            <span className="block text-[10px] text-zinc-400 text-right mt-1">
                                                {msg.time}
                                            </span>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>

                            <div className="space-y-3">
                                {beforeItems.map((item, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <X className="text-red-400 shrink-0 mt-0.5" size={16} />
                                        <p className="text-sm text-zinc-600">{item}</p>
                                    </div>
                                ))}
                                <p
                                    className="text-red-500 italic text-lg mt-5 pl-8 border-l-2 border-red-200"
                                    style={{ fontFamily: "'Playfair Display', serif" }}
                                >
                                    "Eu não nasci pra isso."
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* DEPOIS */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="relative bg-emerald-50 text-zinc-800 p-8 md:p-12 flex flex-col justify-center"
                    >
                        <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.04]" />
                        <div className="relative z-10 max-w-md mx-auto w-full">
                            <span className="inline-block px-4 py-1.5 bg-emerald-100 text-emerald-700 rounded-full text-xs font-bold mb-8 border border-emerald-200 tracking-wider uppercase">
                                Resultado Real
                            </span>

                            {/* Card foto */}
                            <motion.div
                                initial={{ rotate: 2 }}
                                whileHover={{ rotate: 0 }}
                                transition={{ duration: 0.4 }}
                                className="bg-white rounded-xl shadow-2xl border border-emerald-100 p-2 mb-8"
                            >
                                <div className="relative aspect-video bg-zinc-100 rounded-lg overflow-hidden mb-3 group">
                                    <img
                                        alt="Resultado Mariana — unhas profissionais"
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0kMH9InjMv1OFz0C0znAcMLwrMe8F1poA9J3EqYx0O6STxxNhp7hi8qKSveKn5lk53JfvUGc5ILRlMSnAj2lCfXa8eQ6M3iyz7d8XmIldVNnUBcVYqSAxBJvlCPwfzjWGsdE1kt_I9h-_-wWxwQqmYwwaVK5vfa7tMxaHxwmF8_ikGDw1alI_rkI6QS_oUJcs6raiPT_QnRUOfCT4yN_r5E8eCjkzKFn-KvTqXfUpGiwQLU1WUrbT_y1OPJDYhNL1K9izaq6SYXgZ"
                                    />
                                    <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-emerald-700 shadow-lg flex items-center gap-1">
                                        <BadgeCheck size={14} /> Aprovado
                                    </div>
                                </div>
                                <div className="flex justify-between items-center px-2 pb-2">
                                    <div>
                                        <p className="text-[10px] text-zinc-400 uppercase tracking-widest font-bold">Valor Cobrado</p>
                                        <p className="text-xl font-bold text-zinc-900">
                                            R$ 120,00{" "}
                                            <span className="text-xs font-normal text-zinc-400">/unha</span>
                                        </p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-[10px] text-zinc-400 uppercase tracking-widest font-bold">Agenda</p>
                                        <p className="text-sm font-medium text-emerald-600 flex items-center gap-1 justify-end">
                                            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                                            Lotada
                                        </p>
                                    </div>
                                </div>
                            </motion.div>

                            <div className="space-y-4">
                                {afterItems.map(({ icon: Icon, label, sub }, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: 10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.1 + i * 0.12 }}
                                        className="flex items-start gap-4"
                                    >
                                        <div className="bg-emerald-100 p-1.5 rounded-full text-emerald-600 shrink-0">
                                            <Icon size={16} />
                                        </div>
                                        <div>
                                            <p className="font-medium text-zinc-900">{label}</p>
                                            {sub && <p className="text-xs text-zinc-500">{sub}</p>}
                                        </div>
                                    </motion.div>
                                ))}
                                <p
                                    className="text-emerald-700 italic text-xl mt-6 pl-10 border-l-2 border-emerald-400"
                                    style={{ fontFamily: "'Playfair Display', serif" }}
                                >
                                    "Me tornei quem eu sonhava."
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* ── Blockquote final ── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="bg-white py-16 px-4"
                >
                    <div className="max-w-3xl mx-auto text-center">
                        <blockquote
                            className="text-2xl md:text-3xl italic leading-relaxed text-zinc-800"
                            style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                            "Eu olhava pras minhas unhas e pensava: 'isso nunca vai ficar bom o suficiente'.
                            Mas a verdade é que eu nunca tinha aprendido o método certo.{" "}
                            <span className="bg-emerald-50 px-2 text-emerald-700 not-italic font-sans font-medium text-lg align-middle rounded mx-1">
                                Eu tava fazendo tudo no escuro.
                            </span>"
                        </blockquote>
                        <div className="flex items-center justify-center mt-8 gap-3">
                            <div className="h-px w-12 bg-zinc-200" />
                            <cite className="font-bold text-zinc-900 not-italic tracking-wide text-xs uppercase">
                                Mariana, ao entrar no curso
                            </cite>
                            <div className="h-px w-12 bg-zinc-200" />
                        </div>
                    </div>
                </motion.div>

                {/* ══ RESTO ORIGINAL ═════════════════════════════════════════ */}

                {/* Detalhes Extra: O que mudou? */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-12 md:mt-16"
                >
                    <div className="text-center mb-8">
                        <p className="text-zinc-500 text-sm md:text-base mb-1">Sabe o mais louco?</p>
                        <h3 className="text-xl md:text-2xl font-bold text-zinc-900">
                            As unhas dela NÃO são "perfeitas".
                        </h3>
                        <p className="text-zinc-500 text-sm md:text-base mt-2">
                            Tem pequenos desvios. Pequenas assimetrias. <br />
                            Que <span className="text-zinc-900 font-bold">SÓ ELA vê</span>. A cliente? <span className="text-emerald-600 font-bold">Ama.</span>
                        </p>
                    </div>

                    <div className="bg-orange-50/30 border border-orange-100 rounded-2xl p-6 md:p-10 shadow-sm relative overflow-hidden">
                        <div className="absolute left-0 inset-y-0 w-1 bg-gradient-to-b from-orange-400 to-amber-500" />

                        <h4 className="text-center text-xl md:text-2xl font-serif font-bold text-zinc-900 mb-8">
                            O que mudou?
                        </h4>

                        <div className="space-y-6 max-w-2xl mx-auto">
                            <div className="text-sm md:text-base text-zinc-700 space-y-2">
                                <p>Ela aprendeu <strong>ONDE PARAR.</strong></p>
                                <p>Aprendeu que <em>"bom o suficiente" &gt; "perfeito paralisante"</em>.</p>
                                <p>E principalmente: aprendeu <strong>o que FALAR</strong> quando a cliente olha a unha.</p>
                            </div>

                            {/* Diálogo Estilo WhatsApp */}
                            <div className="space-y-4 pt-6 p-4 md:p-6 bg-[#efeae2] rounded-2xl relative overflow-hidden border border-zinc-200">
                                <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/cubes.png")' }} />

                                <div className="flex justify-start relative z-10">
                                    <div className="bg-white px-3 py-2 rounded-lg rounded-tl-none shadow-sm border border-zinc-100 max-w-[85%] relative">
                                        <div className="absolute top-0 -left-2 w-0 h-0 border-t-[8px] border-t-white border-l-[8px] border-l-transparent" />
                                        <p className="text-[10px] font-bold text-zinc-400 mb-0.5 uppercase tracking-tight">Cliente</p>
                                        <p className="text-zinc-800 text-sm md:text-base">Nossa, ficou lindo! Como você fez isso?</p>
                                        <p className="text-[9px] text-zinc-400 text-right mt-1">09:42</p>
                                    </div>
                                </div>

                                <div className="flex justify-end relative z-10 opacity-60">
                                    <div className="bg-[#f0f0f0] px-3 py-2 rounded-lg rounded-tr-none border border-zinc-200 max-w-[85%] relative">
                                        <div className="absolute top-0 -right-2 w-0 h-0 border-t-[8px] border-t-[#f0f0f0] border-r-[8px] border-r-transparent" />
                                        <p className="text-[10px] font-bold text-zinc-400 mb-0.5 text-right uppercase tracking-tight">Antes ela respondia</p>
                                        <p className="text-zinc-500 text-xs italic line-through">
                                            "Ah, obrigada..." <span className="text-[10px] font-normal opacity-80">(insegura)</span>
                                        </p>
                                        <p className="text-[9px] text-zinc-400 text-right mt-1">09:43</p>
                                    </div>
                                </div>

                                <div className="flex justify-end relative z-10">
                                    <div className="bg-[#dcf8c6] px-3 py-2 rounded-lg rounded-tr-none shadow-sm border border-[#c7eab0] max-w-[85%] relative">
                                        <div className="absolute top-0 -right-2 w-0 h-0 border-t-[8px] border-t-[#dcf8c6] border-r-[8px] border-r-transparent" />
                                        <p className="text-[10px] font-bold text-emerald-600 mb-0.5 text-right uppercase tracking-tight">Hoje ela responde</p>
                                        <p className="text-zinc-800 text-sm md:text-base font-medium leading-tight">
                                            Usei a técnica de estruturação em camadas, por isso fica tão resistente. Vai durar fácil 20 dias.
                                        </p>
                                        <div className="flex items-center justify-end gap-1 mt-1">
                                            <p className="text-[9px] text-zinc-400">09:45</p>
                                            <div className="flex text-blue-500">
                                                <CheckCircle2 size={10} strokeWidth={3} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Bloco Autoridade */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="mt-12 md:mt-16 bg-white border border-zinc-100 p-8 md:p-12 rounded-3xl shadow-xl text-center"
                >
                    <h3 className="font-serif font-bold text-amber-600 mb-6 flex flex-col items-center">
                        <span className="text-xl md:text-3xl opacity-80">Autoridade não se ganha.</span>
                        <span className="text-3xl md:text-6xl mt-1 underline decoration-amber-200 decoration-4 underline-offset-8">
                            Se constrói.
                        </span>
                    </h3>
                    <p className="text-lg md:text-xl text-zinc-500 mb-2">A cliente paga R$ 100 e sai pensando:</p>
                    <p className="text-2xl md:text-3xl font-bold text-zinc-900">"Valeu cada centavo."</p>
                </motion.div>

                {/* Micro-Provas Sociais */}
                <div className="mt-16 md:mt-24">
                    <p className="text-center text-zinc-500 mb-8 font-medium">Esse é apenas UM exemplo. Eu poderia te contar:</p>
                    <div className="grid md:grid-cols-3 gap-4 mb-12">
                        <div className="bg-white p-4 md:p-5 rounded-2xl shadow-sm border border-zinc-100 flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-rose-50 flex items-center justify-center text-rose-500 shrink-0">
                                <TrendingUp size={20} />
                            </div>
                            <div>
                                <p className="text-sm font-bold text-zinc-900">Carla</p>
                                <p className="text-[11px] md:text-xs text-zinc-500">tinha vergonha de vender, hoje cobra R$ 150</p>
                            </div>
                        </div>
                        <div className="bg-white p-4 md:p-5 rounded-2xl shadow-sm border border-zinc-100 flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-orange-500 shrink-0">
                                <Calendar size={20} />
                            </div>
                            <div>
                                <p className="text-sm font-bold text-zinc-900">Jéssica</p>
                                <p className="text-[11px] md:text-xs text-zinc-500">de 1 cliente/mês para agenda lotada</p>
                            </div>
                        </div>
                        <div className="bg-white p-4 md:p-5 rounded-2xl shadow-sm border border-zinc-100 flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-500 shrink-0">
                                <Users size={20} />
                            </div>
                            <div>
                                <p className="text-sm font-bold text-zinc-900">Ana</p>
                                <p className="text-[11px] md:text-xs text-zinc-500">ODEIA Instagram, agenda lotada via WhatsApp</p>
                            </div>
                        </div>
                    </div>

                    <div className="text-center">
                        <p className="text-lg md:text-xl font-bold text-zinc-900 mb-2">
                            NÃO é sobre ter nascido com "dom".
                        </p>
                        <p className="text-xl md:text-3xl font-bold text-zinc-900">
                            É sobre aprender o <span className="text-amber-500 uppercase">SISTEMA CERTO.</span>
                        </p>
                    </div>

                    {/* CTA Estratégico */}
                    <div className="mt-16 flex flex-col items-center gap-3">
                        <button
                            onClick={() =>
                                document.getElementById("anti-climax-lp2")?.scrollIntoView({ behavior: "smooth" })
                            }
                            className="group relative inline-flex items-center gap-3 bg-zinc-900 hover:bg-zinc-800 text-white font-extrabold px-10 py-5 rounded-2xl text-base md:text-lg transition-all duration-300 shadow-2xl hover:shadow-zinc-900/40 hover:-translate-y-0.5 uppercase tracking-wide"
                        >
                            <span>Quero aprender esse sistema</span>
                            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                        </button>
                        <p className="text-xs text-zinc-400 font-medium">
                            Sem risco — 7 dias de garantia incondicional
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};
