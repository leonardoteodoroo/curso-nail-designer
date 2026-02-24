import React from "react";
import { motion } from "framer-motion";
import {
  Verified,
  Trophy,
  ShieldCheck,
  Download,
  Play,
  Dumbbell,
  Award,
  CheckCircle,
} from "lucide-react";

export const CertificatesStepperStitch: React.FC = () => {
  return (
    <section className="bg-zinc-50 px-6 py-16 lg:px-20 overflow-hidden relative font-sans">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#10b77f]/5 via-transparent to-transparent opacity-50"></div>
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-12 items-center relative z-10">
        <div className="flex-1 space-y-8">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl lg:text-4xl font-black text-zinc-900 mb-4">
              25 Certificados Profissionais
            </h2>
            <p className="text-zinc-600 text-lg">
              Reconhecimento válido em todo território nacional. Seu nome
              impresso com a chancela de qualidade Nail Designer Academy.
            </p>
          </div>
          <div className="flex flex-col gap-6">
            {/* Stepper Animado — igual ao Modulos */}
            <h4 className="text-sm font-bold text-zinc-900 mb-2 uppercase tracking-wider text-center lg:text-left">
              Como funciona:
            </h4>
            <div className="relative max-w-[320px] w-full mx-auto lg:mx-0">
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
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                    repeatDelay: 0.5,
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent w-2/3"
                />
              </motion.div>

              <div className="grid grid-cols-3 justify-items-center items-start relative z-10">
                {/* Passo 1 */}
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.1,
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                  }}
                  className="flex flex-col items-center gap-2"
                >
                  <div className="w-8 h-8 rounded-full bg-white border-2 border-emerald-500 text-emerald-600 font-bold flex items-center justify-center text-sm ring-4 ring-emerald-50 shadow-md leading-none z-10 w-8 h-8">
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
                  transition={{
                    delay: 0.6,
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                  }}
                  className="flex flex-col items-center gap-2"
                >
                  <div className="w-8 h-8 rounded-full bg-white border-2 border-emerald-500 text-emerald-600 font-bold flex items-center justify-center text-sm ring-4 ring-emerald-50 shadow-md leading-none z-10 w-8 h-8">
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
                  transition={{
                    delay: 1.1,
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                  }}
                  className="flex flex-col items-center gap-2"
                >
                  <div className="w-8 h-8 rounded-full bg-emerald-500 text-white font-bold flex items-center justify-center text-sm ring-4 ring-emerald-100 shadow-lg leading-none z-10 w-8 h-8">
                    3
                  </div>
                  <span className="font-bold text-emerald-800 text-[11px] text-center leading-none whitespace-nowrap bg-emerald-50/80 px-1.5 py-0.5 rounded-full">
                    Receba
                  </span>
                </motion.div>
              </div>
            </div>

            <p className="text-zinc-400 text-xs italic font-medium text-center lg:text-left mt-2">
              "Imprima, enquadre e espalhe pelo seu estúdio"
            </p>

            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-zinc-700 font-medium">
                <CheckCircle
                  className="text-[#10b77f] shrink-0 mt-0.5"
                  size={20}
                />
                <span>Certificado personalizado com seu nome completo</span>
              </li>
              <li className="flex items-start gap-3 text-zinc-700 font-medium">
                <CheckCircle
                  className="text-[#10b77f] shrink-0 mt-0.5"
                  size={20}
                />
                <span>Válido como curso livre profissionalizante</span>
              </li>
              <li className="flex items-start gap-3 text-zinc-700 font-medium">
                <CheckCircle
                  className="text-[#10b77f] shrink-0 mt-0.5"
                  size={20}
                />
                <span>Amparado pela Lei 9.394/96 (LDB)</span>
              </li>
              <li className="flex items-start gap-3 text-zinc-700 font-medium">
                <CheckCircle
                  className="text-[#10b77f] shrink-0 mt-0.5"
                  size={20}
                />
                <span>Aceito em salões, clínicas e espaços de beleza</span>
              </li>
              <li className="flex items-start gap-3 text-zinc-700 font-medium">
                <CheckCircle
                  className="text-[#10b77f] shrink-0 mt-0.5"
                  size={20}
                />
                <span>25 certificados diferentes — 1 por módulo/técnica</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex-1 relative">
          <div className="relative z-10 rounded-2xl bg-white p-2 shadow-2xl rotate-3 transition hover:rotate-0 duration-500 border-4 border-zinc-100">
            {/* Placeholder de Imagem do Certificado */}
            <div className="aspect-[1.414/1] relative overflow-hidden flex items-center justify-center bg-zinc-100 border border-zinc-200">
              {/* DEV#placeholder-step08
                    Prompt Imagen 3:
                    "Photo of a framed professional certificate hanging on a beauty salon wall,
                    text reads 'Nail Designer Academy', natural light, slightly off-center angle,
                    real salon environment, warm tones, shot on iPhone"
                    negative: digital render, computer screen, white background, perfect composition
                    Aspect ratio: 1.414:1 (A4 landscape)
                */}
              <img
                src="/images/step08-certificado-nail-designer.webp"
                alt="Certificado de conclusão impresso e emoldurado na parede do estúdio da aluna, com o nome Escola Nail Designer Academy em destaque"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-2xl bg-[#10b77f]/10 rotate-6"></div>
        </div>
      </div>

      {/* Ticker Infinito de Alunas com Certificado */}
      <div className="relative mt-24 mb-6 w-full overflow-hidden flex flex-col items-center">
        <h4 className="text-sm font-bold text-zinc-400 mb-6 uppercase tracking-wider text-center">
          Junte-se a milhares de alunas certificadas
        </h4>

        <div className="relative w-full max-w-[100vw] flex overflow-hidden group">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 35, // velocidade confortável
              ease: "linear",
              repeat: Infinity,
            }}
            className="flex gap-4 w-max px-4 group-hover:[animation-play-state:paused]"
          >
            {/* 29 imagens reais, duplicadas para loop infinito perfeito */}
            {[
              ...Array.from({ length: 29 }, (_, i) => i + 1).filter(n => n !== 26),
              ...Array.from({ length: 29 }, (_, i) => i + 1).filter(n => n !== 26),
            ].map((n, i) => (
              <div
                key={i}
                className="w-48 h-64 md:w-56 md:h-72 rounded-xl border-4 border-white shadow-xl bg-zinc-100 overflow-hidden flex-shrink-0 relative"
              >
                <img
                  src={`/images/certificadoaluna${n}.webp`}
                  alt={`Aluna ${n} certificada pelo curso Nail Designer Academy`}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </motion.div>

          {/* Sombras laterais para fade out do carrossel infinito */}
          <div className="absolute inset-y-0 left-0 w-12 md:w-32 bg-gradient-to-r from-zinc-50 to-transparent pointer-events-none z-10" />
          <div className="absolute inset-y-0 right-0 w-12 md:w-32 bg-gradient-to-l from-zinc-50 to-transparent pointer-events-none z-10" />
        </div>
      </div>
    </section>
  );
};
