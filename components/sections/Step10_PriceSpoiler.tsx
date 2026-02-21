"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Lock,
  Eye,
  Timer,
  RefreshCcw,
  CheckCircle2,
  AlertCircle,
  Check,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

interface PriceSpoilerProps {
  initialAnchorPrice?: string;
  promoPrice?: string;
  checkoutUrl?: string;
  className?: string;
  onAnalytics?: (event: string, data?: any) => void;
}

const STORAGE_KEY = "nail_course_price_timer";
const DURATION_SECONDS = 120; // 2 minutes

export const PriceSpoiler: React.FC<PriceSpoilerProps> = ({
  initialAnchorPrice = "R$ 997,00",
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
  }, []);

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
  }, [status, timeLeft]);

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
    setStatus("revealed"); // Reset back to revealed with full time? Or back to spoiler?
    // User requested: "reinicia o countdown e volta a mostrar o preço revelado" -> So back to revealed state directly or spoiler?
    // "Botão 'Reservar novamente' que reinicia o countdown e volta a mostrar o preço revelado." -> sounds like restart timer + show price.

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
    <div
      className={cn(
        "relative w-full max-w-md mx-auto overflow-hidden transition-all duration-500",
        "bg-white rounded-2xl shadow-xl border border-rose-100",
        status === "spoiler" ? "p-6" : "p-8 ring-4 ring-rose-50", // Enhance visual when revealed
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

            <div className="space-y-2">
              <p className="font-medium text-gray-700">
                O preço tá aqui… mas tá de spoiler{" "}
                <span role="img" aria-label="smile">
                  😄
                </span>
              </p>
              <p className="text-sm text-gray-500">
                Uma condição única que preparei pra você.
              </p>
            </div>
          </motion.div>
        )}

        {/* STATE: REVEALED */}
        {status === "revealed" && (
          <motion.div
            key="revealed"
            id="price-reveal-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="flex flex-col items-center text-center space-y-6"
          >
            <div className="space-y-1">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg text-gray-400 line-through font-medium"
              >
                De: {initialAnchorPrice}
              </motion.div>

              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 400, delay: 0.3 }}
                className="text-5xl font-black text-rose-500 tracking-tight"
                style={{ textShadow: "0 4px 12px rgba(225, 29, 72, 0.15)" }}
              >
                {promoPrice}
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 text-green-700 text-sm font-medium border border-green-100"
              >
                <CheckCircle2 className="w-3.5 h-3.5" />
                Oferta por tempo limitado
              </motion.div>
            </div>

            <div
              className="w-full p-4 bg-orange-50 rounded-xl border border-orange-100 flex items-center justify-between"
              role="timer"
              aria-live="polite"
            >
              <div className="flex items-center gap-2 text-orange-800">
                <Timer className="w-5 h-5 animate-pulse" />
                <span className="font-semibold text-sm">
                  Preço reservado por:
                </span>
              </div>
              <span className="font-mono text-xl font-bold text-orange-600 w-[60px] text-right">
                {formatTime(timeLeft)}
              </span>
            </div>

            <Button
              onClick={handleCtaClick}
              variant="cta"
              className="w-full text-lg py-6 shadow-lg shadow-rose-200/50 hover:shadow-rose-300/60 animate-in fade-in zoom-in duration-300"
            >
              Garantir minha vaga agora
            </Button>

            <p className="text-xs text-gray-400">
              Pagamento seguro e acesso imediato.
            </p>
          </motion.div>
        )}

        {/* STATE: EXPIRED */}
        {status === "expired" && (
          <motion.div
            key="expired"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center text-center space-y-6 py-4"
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
              className="w-full gap-2"
            >
              <RefreshCcw className="w-4 h-4" />
              Reservar novamente
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
