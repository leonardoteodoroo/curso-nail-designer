import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, ShieldCheck, Gift, CheckCircle2 } from "lucide-react";

export const ExitIntent: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [hasFired, setHasFired] = useState(false);

    const handleExitIntent = useCallback(
        (e: MouseEvent) => {
            if (e.clientY <= 10 && !hasFired) {
                setIsVisible(true);
                setHasFired(true);
            }
        },
        [hasFired]
    );

    // Desktop: mouse leave top
    useEffect(() => {
        document.addEventListener("mouseleave", handleExitIntent);
        return () => document.removeEventListener("mouseleave", handleExitIntent);
    }, [handleExitIntent]);

    // Mobile: back button / popstate
    useEffect(() => {
        if (hasFired) return;

        window.history.pushState(null, "", window.location.href);

        const handlePopState = () => {
            if (!hasFired) {
                setIsVisible(true);
                setHasFired(true);
                window.history.pushState(null, "", window.location.href);
            }
        };

        window.addEventListener("popstate", handlePopState);
        return () => window.removeEventListener("popstate", handlePopState);
    }, [hasFired]);

    const close = () => setIsVisible(false);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[200] flex items-center justify-center p-3"
                    onClick={close}
                >
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

                    {/* Popup */}
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        transition={{ type: "spring", damping: 20 }}
                        onClick={(e) => e.stopPropagation()}
                        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden"
                    >
                        {/* Close button */}
                        <button
                            onClick={close}
                            className="absolute top-3 right-3 text-zinc-400 hover:text-zinc-600 transition-colors z-10"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        {/* Conteúdo */}
                        <div className="p-5 md:p-6">
                            <div className="text-center mb-4">
                                <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-3">
                                    <Gift className="w-6 h-6 text-emerald-600" />
                                </div>
                                <h3
                                    className="text-lg md:text-xl font-bold text-zinc-900 mb-1"
                                    style={{ fontFamily: "'Playfair Display', serif" }}
                                >
                                    Espera! Não vá embora ainda…
                                </h3>
                                <p className="text-zinc-500 text-sm">
                                    Você está a um passo da sua independência financeira.
                                </p>
                            </div>

                            {/* Mini recap */}
                            <div className="bg-zinc-50 rounded-xl p-4 mb-4 space-y-2">
                                {[
                                    "9 módulos completos + 4 bônus",
                                    "Acesso vitalício com atualizações",
                                    "Garantia de 7 dias — risco zero",
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-2 text-sm text-zinc-700">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Preço */}
                            <div className="text-center mb-4">
                                <p className="text-sm text-zinc-400 line-through">R$ 997,00</p>
                                <p className="text-3xl font-black text-emerald-600">
                                    7x de R$ 8,16
                                </p>
                                <p className="text-xs text-zinc-500">
                                    ou R$ 49,90 à vista
                                </p>
                            </div>

                            {/* CTA */}
                            <button
                                onClick={() => window.open("https://go.hotmart.com/K104371220N?ap=5bc1&src=exit_intent", "_blank")}
                                className="w-full py-4 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold uppercase tracking-wide shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2"
                            >
                                SIM, QUERO COMEÇAR AGORA
                                <ArrowRight className="w-4 h-4" />
                            </button>

                            <p className="flex items-center justify-center gap-1.5 text-[10px] text-zinc-400 mt-2">
                                <ShieldCheck className="w-3 h-3" />
                                Compra Segura • Hotmart Oficial
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
