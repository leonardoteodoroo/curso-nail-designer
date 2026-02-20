import React from 'react';
import { motion } from 'framer-motion';
import { Verified, Trophy, ShieldCheck, Download, Play, Dumbbell, Award, CheckCircle } from 'lucide-react';

export const CertificatesStepperStitch: React.FC = () => {
    return (
        <section className="bg-zinc-50 px-6 py-16 lg:px-20 overflow-hidden relative font-sans">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#10b77f]/5 via-transparent to-transparent opacity-50"></div>
            <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-12 items-center relative z-10">
                <div className="flex-1 space-y-8">
                    <div>
                        <h2 className="text-3xl lg:text-4xl font-black text-zinc-900 mb-4">25 Certificados Profissionais</h2>
                        <p className="text-zinc-600 text-lg">Reconhecimento válido em todo território nacional. Seu nome impresso com a chancela de qualidade Nail Designer Pro.</p>
                    </div>
                    <div className="flex flex-col gap-6">
                        {/* Stepper Animado — igual ao Modulos */}
                        <h4 className="text-sm font-bold text-zinc-900 mb-2 uppercase tracking-wider">Como funciona:</h4>
                        <div className="relative max-w-[320px] w-full">
                            {/* Linha de Conexão Base */}
                            <div className="absolute top-4 left-0 right-0 h-[2px] bg-emerald-100/60 rounded-full" />

                            {/* Linha de Progresso Animada */}
                            <motion.div
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 1.5, ease: "easeInOut" }}
                                className="absolute top-4 left-0 right-0 h-[2px] bg-emerald-500 rounded-full origin-left shadow-[0_0_8px_rgba(16,185,129,0.25)] overflow-hidden"
                            >
                                <motion.div
                                    animate={{ x: ["-100%", "200%"] }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "linear", repeatDelay: 0.5 }}
                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent w-2/3"
                                />
                            </motion.div>

                            <div className="grid grid-cols-3 justify-items-center items-start relative z-10">
                                {/* Passo 1 */}
                                <motion.div
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1, type: "spring", stiffness: 260, damping: 20 }}
                                    className="flex flex-col items-center gap-2"
                                >
                                    <div className="w-8 h-8 rounded-full bg-white border-2 border-emerald-500 text-emerald-600 font-bold flex items-center justify-center text-sm ring-4 ring-emerald-50 shadow-md leading-none z-10">
                                        1
                                    </div>
                                    <span className="font-bold text-zinc-800 text-[11px] text-center leading-none whitespace-nowrap">
                                        Conclua
                                    </span>
                                </motion.div>

                                {/* Passo 2 */}
                                <motion.div
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.6, type: "spring", stiffness: 260, damping: 20 }}
                                    className="flex flex-col items-center gap-2"
                                >
                                    <div className="w-8 h-8 rounded-full bg-white border-2 border-emerald-500 text-emerald-600 font-bold flex items-center justify-center text-sm ring-4 ring-emerald-50 shadow-md leading-none z-10">
                                        2
                                    </div>
                                    <span className="font-bold text-zinc-800 text-[11px] text-center leading-none whitespace-nowrap">
                                        Solicite
                                    </span>
                                </motion.div>

                                {/* Passo 3 */}
                                <motion.div
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 1.1, type: "spring", stiffness: 260, damping: 20 }}
                                    className="flex flex-col items-center gap-2"
                                >
                                    <div className="w-8 h-8 rounded-full bg-emerald-500 text-white font-bold flex items-center justify-center text-sm ring-4 ring-emerald-100 shadow-lg leading-none z-10">
                                        3
                                    </div>
                                    <span className="font-bold text-emerald-800 text-[11px] text-center leading-none whitespace-nowrap bg-emerald-50/80 px-1.5 py-0.5 rounded-full">
                                        Receba
                                    </span>
                                </motion.div>
                            </div>
                        </div>

                        <p className="text-zinc-400 text-xs italic font-medium">
                            "Imprima, enquadre e espalhe pelo seu estúdio"
                        </p>

                        <ul className="space-y-3">
                            <li className="flex items-start gap-3 text-zinc-700 font-medium">
                                <CheckCircle className="text-[#10b77f] shrink-0 mt-0.5" size={20} />
                                <span>Certificado personalizado com seu nome completo</span>
                            </li>
                            <li className="flex items-start gap-3 text-zinc-700 font-medium">
                                <CheckCircle className="text-[#10b77f] shrink-0 mt-0.5" size={20} />
                                <span>Válido como curso livre profissionalizante</span>
                            </li>
                            <li className="flex items-start gap-3 text-zinc-700 font-medium">
                                <CheckCircle className="text-[#10b77f] shrink-0 mt-0.5" size={20} />
                                <span>Amparado pela Lei 9.394/96 (LDB)</span>
                            </li>
                            <li className="flex items-start gap-3 text-zinc-700 font-medium">
                                <CheckCircle className="text-[#10b77f] shrink-0 mt-0.5" size={20} />
                                <span>Aceito em salões, clínicas e espaços de beleza</span>
                            </li>
                            <li className="flex items-start gap-3 text-zinc-700 font-medium">
                                <CheckCircle className="text-[#10b77f] shrink-0 mt-0.5" size={20} />
                                <span>25 certificados diferentes — 1 por módulo/técnica</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex-1 relative">
                    <div className="relative z-10 rounded-2xl bg-white p-2 shadow-2xl rotate-3 transition hover:rotate-0 duration-500 border-4 border-zinc-100">
                        {/* Abstract representation of a certificate */}
                        <div className="aspect-[1.414/1] bg-slate-50 border-2 border-[#10b77f]/20 p-8 flex flex-col items-center justify-center text-center relative overflow-hidden">
                            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                            <div className="h-16 w-16 mb-4 text-[#10b77f] opacity-20">
                                <Award size={64} />
                            </div>
                            <h3 className="text-2xl font-serif text-zinc-800 mb-1">Certificado de Conclusão</h3>
                            <div className="w-16 h-0.5 bg-[#10b77f]/40 my-3"></div>
                            <p className="text-zinc-400 text-sm font-serif italic">Conferido a</p>
                            <p className="text-xl font-script text-zinc-900 my-2 font-bold font-serif">Seu Nome Aqui</p>
                            <p className="text-zinc-500 text-xs mt-4 max-w-[200px]">Por concluir com êxito a formação completa em Nail Designer Profissional.</p>
                            <div className="absolute bottom-6 right-8">
                                <Verified className="text-amber-400 drop-shadow-md" size={48} />
                            </div>
                        </div>
                    </div>
                    <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-2xl bg-[#10b77f]/10 rotate-6"></div>
                </div>
            </div>
        </section>
    );
};
