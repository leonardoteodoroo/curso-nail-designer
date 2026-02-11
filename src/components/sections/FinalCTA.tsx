"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, ShieldCheck, CreditCard, Lock, Zap, RefreshCw, Mail } from "lucide-react";
import { AnimatedButton } from "../ui/AnimatedButton";
import { PriceSpoiler } from "../ui/PriceSpoiler";
import { Section } from "../layout/Section";
import { Container } from "../layout/Container";

export const FinalCTA = () => {
    return (
        <>
            {/* ═══ SEÇÃO: Quanto Vale Sua Independência? ═══ */}
            <Section id="oferta" variant="default" className="py-20">
                <Container>
                    <div className="max-w-3xl mx-auto">

                        {/* Emotional Closing - "Um Último Recado" */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-16 space-y-6"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-6">
                                Um Último Recado
                            </h2>
                            <div className="text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed space-y-4">
                                <p>
                                    Eu <strong>poderia</strong> colocar aqui:
                                </p>
                                <div className="space-y-1 font-bold text-[var(--text-primary)]">
                                    <p>&quot;SÓ 3 VAGAS!&quot;</p>
                                    <p>&quot;ÚLTIMA CHANCE!&quot;</p>
                                    <p>&quot;PROMOÇÃO ACABA EM 5 MINUTOS!&quot;</p>
                                </div>
                                <p>
                                    Mas não vou. <br />
                                    Porque <strong>EU sei</strong> que você odeia pressão. <br />
                                    <span className="italic">(Eu também odeio.)</span>
                                </p>
                            </div>
                        </motion.div>

                        {/* The Truth */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-center mb-16 space-y-4"
                        >
                            <p className="text-lg text-[var(--text-secondary)]">
                                A verdade é simples:
                            </p>
                            <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                                Cada dia que você <strong>adia</strong>... <br />
                                É mais um dia dependendo de alguém. <br />
                                Mais um dia sem a confiança que você <strong>merece ter</strong>. <br />
                                Mais um dia achando que &quot;não é pra você&quot;.
                            </p>
                            <p className="text-xl font-bold text-[var(--text-primary)]">
                                Você merece coisa melhor.
                            </p>
                            <p className="text-lg text-[var(--text-secondary)]">
                                Você merece <strong>SUA independência</strong>. <br />
                                Você merece cobrar <strong>o que você VALE</strong>. <br />
                                Você merece atender sem medo, sem vergonha, sem ansiedade.
                            </p>
                        </motion.div>

                        {/* Price Anchoring */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-center mb-12"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-6">
                                Quanto Vale Sua Independência?
                            </h2>
                            <p className="text-lg text-[var(--text-secondary)] mb-2">
                                Eu <strong>poderia</strong> cobrar R$ 997 por tudo isso. E seria justo.
                            </p>
                            <div className="text-[var(--text-secondary)] space-y-1 mb-6">
                                <p>Afinal, são:</p>
                                <ul className="text-sm space-y-1">
                                    <li>• 12 anos de experiência</li>
                                    <li>• + de 48 mil alunas formadas</li>
                                    <li>• Centenas de horas de conteúdo</li>
                                    <li>• Ferramentas exclusivas</li>
                                    <li>• Suporte contínuo</li>
                                </ul>
                            </div>
                            <p className="text-[var(--text-secondary)] mb-8">
                                Mas <strong>EU lembro</strong> como era no começo. <br />
                                Eu lembro de contar moedas para comprar material. <br />
                                Então <strong>EU decidi</strong> fazer diferente.
                            </p>
                        </motion.div>

                        {/* Pricing Area */}
                        <div className="max-w-md mx-auto mb-12 space-y-8">
                            <div className="text-center mb-6">
                                <h3 className="text-2xl font-bold text-[var(--text-primary)]">
                                    💅 SIM, QUERO MINHA INDEPENDÊNCIA
                                </h3>
                            </div>

                            <PriceSpoiler
                                initialAnchorPrice="R$ 997,00"
                                promoPrice="R$ 49,90"
                                checkoutUrl="#checkout"
                                className="shadow-[var(--shadow-cta)]"
                            />

                            {/* Value Comparison & Features - Mantidos visíveis para reforçar a oferta */}
                            <div className="bg-[var(--surface-card)] rounded-xl p-6 border border-[var(--border-subtle)] shadow-sm">
                                {/* Value Comparison */}
                                <div className="bg-[var(--surface-subtle)] rounded-lg p-4 mb-6 text-sm text-[var(--text-secondary)]">
                                    <p className="font-medium text-[var(--text-primary)] mb-2">Isso é <strong>menos que:</strong></p>
                                    <ul className="space-y-1 text-left max-w-xs mx-auto">
                                        <li>• <strong>Meia unha</strong> que você VAI fazer</li>
                                        <li>• 1 açaí por semana</li>
                                        <li>• 1 Uber ida+volta</li>
                                    </ul>
                                </div>

                                {/* Feature List */}
                                <ul className="text-left space-y-3 mb-6">
                                    {[
                                        "Acesso imediato e vitalício",
                                        "Todos os bônus inclusos",
                                        "7 dias de garantia incondicional",
                                        "Comunidade de alunas",
                                        "Certificados profissionais",
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-center gap-3 text-sm text-[var(--text-secondary)]">
                                            <Check size={18} className="text-[var(--action-success)] shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* Trust Badges */}
                                <div className="pt-4 border-t border-[var(--border-subtle)] flex flex-wrap items-center justify-center gap-4 text-xs text-[var(--text-muted)]">
                                    <div className="flex items-center gap-1">
                                        <ShieldCheck size={14} className="text-[var(--action-success)]" />
                                        <span>Garantia de 7 Dias</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Lock size={14} />
                                        <span>Compra Segura</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Extra Benefits */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6 mb-12"
                        >
                            <div className="flex items-start gap-4 bg-white rounded-xl p-5 border border-[var(--surface-section)] shadow-sm">
                                <div className="shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                                    <RefreshCw className="w-5 h-5 text-green-600" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-[var(--text-primary)] mb-1">✅ Atualizações GRÁTIS para sempre</h4>
                                    <p className="text-sm text-[var(--text-secondary)]">
                                        O curso é atualizado frequentemente com novas técnicas, materiais e tendências do mercado.
                                        Você <strong>NÃO paga nada a mais</strong> por isso. Uma vez dentro, você tem acesso a <strong>TUDO</strong> que for lançado. Para sempre.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 bg-white rounded-xl p-5 border border-[var(--surface-section)] shadow-sm">
                                <div className="shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                                    <Zap className="w-5 h-5 text-blue-600" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-[var(--text-primary)] mb-1">✅ Acesso IMEDIATO após o pagamento</h4>
                                    <p className="text-sm text-[var(--text-secondary)]">
                                        Não precisa esperar. Assim que você finalizar a compra, recebe automaticamente no seu e-mail:
                                        <strong> Senha de acesso</strong>, <strong>Link da plataforma</strong> e <strong>Passo a passo para começar AGORA</strong>.
                                        Você pode começar a assistir <strong>HOJE MESMO</strong>.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Final Signature */}
                        <div className="text-center mb-12 opacity-80">
                            <p className="font-display italic text-lg text-[var(--text-secondary)]">
                                Com carinho, <br />
                                <span className="font-bold text-[var(--text-primary)] not-italic">Sua Mentora</span>
                            </p>
                            <p className="text-sm text-[var(--text-muted)] mt-1">
                                Nail Designer - Escola de Unhas Profissionais
                            </p>
                        </div>

                        {/* P.S. Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-xl p-6 border border-[var(--border-subtle)] shadow-sm text-center"
                        >
                            <p className="text-sm font-bold text-[var(--text-muted)] uppercase tracking-wider mb-3">
                                P.S.
                            </p>
                            <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                                Se você ainda tá em dúvida... responde isso:
                            </p>
                            <p className="text-xl font-bold text-[var(--text-primary)] mt-4 leading-relaxed">
                                &quot;Daqui a 6 meses, você quer estar no MESMO LUGAR de hoje? <br />
                                Ou você quer estar cobrando R$ 100 por unha, com agenda lotada, confiante?&quot;
                            </p>
                            <p className="mt-4 text-lg font-bold text-[var(--action-primary-active)]">
                                A escolha é sua. ❤️
                            </p>
                        </motion.div>

                    </div>
                </Container>
            </Section>
        </>
    );
};
