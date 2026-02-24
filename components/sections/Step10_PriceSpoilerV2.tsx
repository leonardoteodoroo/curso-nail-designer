"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Lock,
  Eye,
  Timer,
  RefreshCcw,
  AlertCircle,
  Check,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

interface PriceSpoilerV2Props {
  initialAnchorPrice?: string;
  promoPrice?: string;
  checkoutUrl?: string;
  className?: string;
  onAnalytics?: (event: string, data?: any) => void;
}

const STORAGE_KEY = "nail_course_price_timer_v2";
const DURATION_SECONDS = 420; // 7 minutes

export const PriceSpoilerV2: React.FC<PriceSpoilerV2Props> = ({
  initialAnchorPrice = "R$ 497,00",
  promoPrice = "R$ 49,90",
  checkoutUrl = "#",
  className,
  onAnalytics = (event, data) => console.log(`[Analytics] ${event}`, data),
}) => {
  const [status, setStatus] = useState<"spoiler" | "revealed" | "expired">(
    "spoiler",
  );
  const [timeLeft, setTimeLeft] = useState(DURATION_SECONDS);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Restore state from sessionStorage on mount
  useEffect(() => {
    const saved = sessionStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const { status: savedStatus, endTime } = JSON.parse(saved);

        if (savedStatus === "revealed") {
          const now = Date.now();
          const remaining = Math.max(0, Math.ceil((endTime - now) / 1000));

          if (remaining > 0) {
            setStatus("revealed");
            setTimeLeft(remaining);
          } else {
            setStatus("expired");
            setTimeLeft(0);
            onAnalytics("timer_expired", { auto: true });
          }
        } else if (savedStatus === "expired") {
          setStatus("expired");
          setTimeLeft(0);
        }
      } catch (e) {
        console.error("Failed to parse saved timer state", e);
      }
    }
  }, [onAnalytics]);

  // Timer logic
  useEffect(() => {
    if (status === "revealed" && timeLeft > 0) {
      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          const newValue = prev - 1;
          if (newValue <= 0) {
            clearInterval(timerRef.current!);
            setStatus("expired");
            sessionStorage.setItem(
              STORAGE_KEY,
              JSON.stringify({ status: "expired", endTime: 0 }),
            );
            onAnalytics("timer_expired");
            return 0;
          }
          return newValue;
        });
      }, 1000);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [status, timeLeft, onAnalytics]);

  const handleReveal = () => {
    const endTime = Date.now() + DURATION_SECONDS * 1000;
    setStatus("revealed");
    setTimeLeft(DURATION_SECONDS);
    sessionStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ status: "revealed", endTime }),
    );
    onAnalytics("price_reveal_clicked");
    onAnalytics("timer_started", { duration: DURATION_SECONDS });
  };

  const handleReset = () => {
    setStatus("revealed");
    const endTime = Date.now() + DURATION_SECONDS * 1000;
    setTimeLeft(DURATION_SECONDS);
    sessionStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ status: "revealed", endTime }),
    );
    onAnalytics("timer_restarted");
  };

  const handleCtaClick = () => {
    onAnalytics("cta_clicked", { url: checkoutUrl });
    window.location.href = checkoutUrl;
  };

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");
    const s = (seconds % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  return (
    <section className="pt-0 pb-20 md:pt-0 md:pb-32 bg-white relative overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto flex flex-col items-center">
        <div
          className={cn(
            "relative w-full max-w-md mx-auto overflow-hidden transition-all duration-500",
            "bg-white rounded-2xl shadow-xl border",
            status === "spoiler"
              ? "border-rose-100 p-6"
              : "border-[#20B27A] p-0 ring-4 ring-[#20B27A]/10",
            className,
          )}
        >
          <AnimatePresence mode="wait">
            {/* STATE: SPOILER (Telegram Style) */}
            {status === "spoiler" && (
              <motion.div
                key="spoiler"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, scale: 1.05, filter: "blur(8px)" }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center text-center space-y-6"
              >
                {/* Efeito de Spoiler Telegram */}
                <button
                  onClick={handleReveal}
                  className="relative w-full overflow-hidden rounded-xl group cursor-pointer"
                  aria-label="Revelar preço"
                >
                  <div className="absolute inset-0 z-0 opacity-100 transition-opacity duration-500 bg-[#333]">
                    {/* Noise Pattern Overlay */}
                    <div
                      className="absolute inset-0 opacity-30"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                        filter: "contrast(150%) brightness(100%)",
                      }}
                    />
                    {/* Animation Layer */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 translate-x-[-100%] animate-[shimmer_2s_infinite]" />
                  </div>

                  {/* Conteúdo Oculto (sugerido por silhueta) */}
                  <div className="relative z-10 py-10 px-4 select-none flex flex-col items-center justify-center gap-2">
                    <div className="h-4 w-3/4 bg-white/20 rounded-md animate-pulse mb-2 blur-[2px]" />
                    <div className="h-10 w-1/2 bg-white/20 rounded-md animate-pulse blur-[2px]" />

                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium border border-white/10 shadow-lg flex items-center gap-2 transform group-hover:scale-105 transition-transform">
                        <Eye className="w-4 h-4" />
                        Toque para revelar
                      </span>
                    </div>
                  </div>
                </button>

                <div className="space-y-4">
                  <div className="space-y-1">
                    <p className="font-bold text-zinc-800 text-lg leading-tight">
                      Preparei uma condição ÚNICA para VOCÊ agora.
                    </p>
                  </div>

                  <div className="pt-3 border-t border-zinc-100">
                    <p className="text-[10px] leading-relaxed text-zinc-400 italic">
                      *Ao ativar, você concorda que esta oferta exclusiva ficará
                      disponível <br className="hidden sm:block" />
                      apenas para esta seção e poderá expirar em breve.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}

            {/* STATE: REVEALED */}
            {status === "revealed" && (
              <motion.div
                key="revealed"
                id="price-reveal-content-v2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="flex flex-col items-center w-full"
              >
                {/* Top Banner based on the original provided images */}
                <div className="relative w-full bg-[#F2FCF5] py-3.5 text-center rounded-t-2xl overflow-hidden border-b border-[#20B27A]/10 flex justify-center items-center">
                  <span className="text-[#1A7A4E] font-[800] text-[10px] sm:text-[12px] tracking-wider sm:tracking-[0.15em] uppercase px-12">
                    OFERTA POR TEMPO LIMITADO
                  </span>
                  <div className="absolute top-0 right-0 h-full flex items-center bg-[#20B27A] text-white text-[11px] sm:text-[12px] font-bold px-3 sm:px-4 rounded-bl-2xl sm:rounded-bl-3xl">
                    ~90% OFF
                  </div>
                </div>

                {/* Content Container */}
                <div className="px-6 sm:px-8 pb-8 pt-6 w-full flex flex-col items-center space-y-6 text-center">
                  <div className="space-y-0.5 w-full flex flex-col items-center">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                      className="text-lg text-slate-400 line-through font-medium"
                    >
                      De: {initialAnchorPrice}
                    </motion.div>

                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        delay: 0.3,
                      }}
                      className="text-6xl sm:text-[72px] leading-none font-black text-rose-500 tracking-tighter"
                      style={{
                        textShadow: "0 4px 12px rgba(225, 29, 72, 0.15)",
                      }}
                    >
                      {promoPrice}
                    </motion.div>
                  </div>

                  <div
                    className="w-full p-4 bg-orange-50/80 rounded-xl flex items-center justify-between"
                    role="timer"
                    aria-live="polite"
                  >
                    <div className="flex items-center gap-2 text-orange-800">
                      <Timer className="w-5 h-5 animate-pulse" />
                      <span className="font-semibold text-[13px] sm:text-sm">
                        Preço reservado por:
                      </span>
                    </div>
                    <span className="font-mono text-xl font-bold text-orange-600 w-[60px] text-right">
                      {formatTime(timeLeft)}
                    </span>
                  </div>

                  {/* Frase dinâmica de data */}
                  {(() => {
                    try {
                      const now = new Date();
                      const diaSemana = now.toLocaleDateString("pt-BR", { weekday: "long" });
                      const dia = now.getDate();
                      const mes = now.toLocaleDateString("pt-BR", { month: "long" });
                      const texto = `Condição reservada somente agora, ${diaSemana} dia ${dia} de ${mes}.`;
                      return (
                        <p className="text-[11px] text-orange-700/80 font-medium text-center mt-1 italic">
                          {texto}
                        </p>
                      );
                    } catch {
                      return (
                        <p className="text-[11px] text-orange-700/80 font-medium text-center mt-1 italic">
                          Válido somente hoje. Não perca esta oportunidade.
                        </p>
                      );
                    }
                  })()}

                  <Button
                    onClick={handleCtaClick}
                    variant="cta"
                    className="w-full text-lg py-6 shadow-lg shadow-rose-200/50 hover:shadow-rose-300/60 animate-in fade-in zoom-in duration-300"
                  >
                    Garantir minha vaga agora
                  </Button>

                  {/* Trust Badges - Based on the second image */}
                  <div className="w-full flex flex-col items-center gap-3 mt-4">
                    <div className="flex flex-row items-center justify-center gap-4 sm:gap-6">
                      <div className="flex items-center gap-1.5 text-slate-500 text-[12px] sm:text-[13px] font-medium">
                        <Lock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-400 stroke-[2.5]" />
                        <span>Pagamento Seguro</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-slate-500 text-[12px] sm:text-[13px] font-medium">
                        <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-400 stroke-[2.5]" />
                        <span>7 Dias de Garantia</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-500 text-[12px] sm:text-[13px] font-medium">
                      <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-400 stroke-[2.5]" />
                      <span>Acesso Imediato</span>
                    </div>
                  </div>

                  {/* Price Anchoring */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="w-full p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100/50 border border-slate-200/60 shadow-sm mt-2"
                  >
                    <p className="text-[13px] sm:text-sm text-slate-500 font-medium mb-3.5 text-left border-b border-slate-200/60 pb-2">
                      Isso é{" "}
                      <strong className="text-rose-500 font-bold uppercase tracking-wider">
                        menos
                      </strong>{" "}
                      que:
                    </p>
                    <ul className="space-y-2.5 text-left">
                      <li className="flex items-start gap-2.5 text-[13px] sm:text-sm text-slate-600 leading-snug">
                        <span className="shrink-0">💅</span>
                        <span>
                          <strong className="text-slate-800">Meia unha</strong>{" "}
                          que você VAI fazer (se cobrar R$ 100)
                        </span>
                      </li>
                      <li className="flex items-start gap-2.5 text-[13px] sm:text-sm text-slate-600 leading-snug">
                        <span className="shrink-0">🍨</span>
                        <span>1 açaí por semana (R$ 8/semana)</span>
                      </li>
                      <li className="flex items-start gap-2.5 text-[13px] sm:text-sm text-slate-600 leading-snug">
                        <span className="shrink-0">🚗</span>
                        <span>1 Uber ida+volta</span>
                      </li>
                    </ul>
                  </motion.div>
                </div>
              </motion.div>
            )}

            {/* STATE: EXPIRED */}
            {status === "expired" && (
              <motion.div
                key="expired"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-col items-center text-center space-y-6 py-4 p-8 bg-white"
              >
                <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-2">
                  <AlertCircle className="w-8 h-8 text-gray-400" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-gray-800">
                    Reserva expirada
                  </h3>
                  <p className="text-gray-500 max-w-[200px] mx-auto">
                    O tempo para garantir essa condição especial acabou.
                  </p>
                </div>

                <Button
                  onClick={handleReset}
                  variant="primary"
                  className="w-full gap-2 rounded-xl py-6"
                >
                  <RefreshCcw className="w-4 h-4" />
                  Tentar Reservar Novamente
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
