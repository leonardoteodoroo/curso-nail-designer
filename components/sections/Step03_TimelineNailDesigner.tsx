import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import {
  Youtube,
  GraduationCap,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Sparkles,
  Frown,
  PlayCircle,
} from "lucide-react";

const VIEWPORT_CONFIG = {
  once: true,
  amount: 0.3,
  margin: "0px 0px -15% 0px",
};

export const TimelineNailDesigner: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 75%", "end 50%"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const height = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      ref={containerRef}
      className="relative py-20 px-4 max-w-4xl mx-auto font-sans"
    >
      <div className="text-center mb-16 px-2 relative z-10">
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 mt-2 mb-6">
          Daí você tenta aprender sozinha e...
        </h2>
      </div>

      <div className="relative">
        {/* Line Container: Adjusted for mobile */}
        <div className="absolute left-4 md:left-5 top-4 bottom-12 w-0.5 bg-gray-200 rounded-full">
          <motion.div
            style={{ height }}
            className="absolute top-0 left-0 w-full bg-gradient-to-b from-pink-500 via-rose-400 to-pink-300 rounded-full z-10 origin-top shadow-sm"
          />
        </div>

        {/* Content Container: Adjusted for perfect alignment with the line */}
        <div className="space-y-8 md:space-y-12 pl-10 md:pl-12 relative">
          {/* Item 1: O Caos do YouTube */}
          <TimelineItemNode
            icon={<Youtube size={16} className="md:w-6 md:h-6 text-red-600" />} // Smaller icon on mobile
            title="O Caos do YouTube"
          >
            <p className="text-gray-600 mb-3 text-[13px] md:text-sm leading-snug">
              Você assiste 47 vídeos diferentes. <br />
              Uma faz assim. Outra faz assado. <br />
              Cada uma fala uma coisa. Uma usa X. Outra odeia X e usa Y.
              <br />
              <br />É um caos total... Você fica{" "}
              <strong className="text-gray-800">mais confusa</strong> do que
              quando começou.
            </p>

            {/* Stacked Interactive Tutorial Cards */}
            <div className="relative h-[200px] md:h-[240px] mt-6 mb-4">
              {/* Card 1: Tutorial #1 */}
              <div className="absolute top-0 left-0 w-[85%] md:w-[80%] bg-white p-2.5 rounded-xl shadow-md border border-gray-100 -rotate-3 z-10 transition-transform hover:rotate-0">
                <div className="flex items-center gap-1.5 mb-2 text-rose-500 font-bold text-[10px] uppercase tracking-wider">
                  <PlayCircle size={14} /> Tutorial #1
                </div>
                <div className="relative h-20 md:h-28 rounded-lg overflow-hidden bg-gray-50 border border-gray-100">
                  <img
                    src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=400&auto=format&fit=crop"
                    alt="Tutorial 1"
                    className="object-cover w-full h-full opacity-90"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                <p className="text-[10px] md:text-[11px] font-bold text-gray-800 mt-2 px-0.5">
                  "USE ESTA MARCA X!"
                </p>
              </div>

              {/* Card 2: Tutorial #47 */}
              <div className="absolute top-12 left-8 w-[85%] md:w-[80%] bg-white p-2.5 rounded-xl shadow-xl border border-gray-100 rotate-3 z-20 transition-transform hover:rotate-0">
                <div className="flex items-center gap-1.5 mb-2 text-blue-500 font-bold text-[10px] uppercase tracking-wider">
                  <PlayCircle size={14} /> Tutorial #47
                </div>
                <div className="relative h-20 md:h-28 rounded-lg overflow-hidden bg-gray-50 border border-gray-100">
                  <img
                    src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=400&auto=format&fit=crop"
                    alt="Tutorial 47"
                    className="object-cover w-full h-full opacity-90"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                <p className="text-[10px] md:text-[11px] font-bold text-gray-700 mt-2 px-0.5">
                  "MARCA X NÃO PRESTA, USE Y!"
                </p>
              </div>
            </div>
          </TimelineItemNode>

          {/* Item 2: O Curso Presencial Caro */}
          <TimelineItemNode
            icon={
              <GraduationCap
                size={16}
                className="md:w-6 md:h-6 text-green-600"
              />
            }
            title="O Curso Presencial Caro"
          >
            <div className="text-gray-600 mb-4 text-[13px] md:text-sm leading-relaxed space-y-3">
              <p className="italic">
                Aí você pensa: "Vou fazer um curso presencial."
              </p>
              <p>
                Você paga <strong>R$ 800,00</strong>. 3 dias de aula. <br />A
                professora faz na sua frente. Parece fácil.
              </p>
              <p>
                Mas quando você tenta em casa? <br />
                <strong>Nada sai igual.</strong>
              </p>
              <p className="text-xs md:text-[13px] opacity-90">
                Porque ela NÃO TE ENSINOU. Ela FEZ NA SUA FRENTE. <br />
                Você <strong>copiou</strong>. Não aprendeu.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3 mt-4">
              {/* Na Aula */}
              <div className="group relative rounded-xl overflow-hidden border border-emerald-100 shadow-sm transition-all hover:shadow-md">
                <div className="h-16 md:h-20 bg-emerald-50">
                  <img
                    src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=400&auto=format&fit=crop"
                    alt="Na Aula"
                    className="object-cover w-full h-full opacity-60 grayscale-[30%] group-hover:grayscale-0 group-hover:opacity-100 transition-all"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-emerald-900/10" />
                </div>
                <div className="bg-emerald-50/50 p-2 text-center">
                  <p className="text-[9px] font-bold text-emerald-700 uppercase tracking-tight mb-0.5">
                    NA AULA
                  </p>
                  <p className="text-emerald-800 font-bold text-[11px] md:text-xs">
                    Perfeito ✨
                  </p>
                </div>
              </div>

              {/* Em Casa */}
              <div className="group relative rounded-xl overflow-hidden border border-rose-100 shadow-sm transition-all hover:shadow-md scale-[1.02]">
                <div className="h-16 md:h-20 bg-rose-50">
                  <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=400&auto=format&fit=crop"
                    alt="Em Casa"
                    className="object-cover w-full h-full opacity-60 grayscale-[30%] group-hover:grayscale-0 group-hover:opacity-100 transition-all"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-rose-900/10" />
                </div>
                <div className="bg-rose-50/50 p-2 text-center">
                  <p className="text-[9px] font-bold text-rose-600 uppercase tracking-tight mb-0.5">
                    EM CASA
                  </p>
                  <p className="text-rose-800 font-bold text-[11px] md:text-xs">
                    Desastre 🤡
                  </p>
                </div>
              </div>
            </div>
          </TimelineItemNode>

          {/* Item 3: O Que NENHUM Curso Te Ensina */}
          <TimelineItemNode
            icon={
              <AlertTriangle
                size={16}
                className="md:w-6 md:h-6 text-orange-500"
              />
            }
            title="O Que NENHUM Curso Te Ensina"
          >
            <ul className="space-y-2">
              {[
                "Como cobrar sem vergonha",
                "Como lidar com cliente difícil",
                "Como montar uma agenda que não cancela",
                "Como precificar pra ter LUCRO",
                "Como se posicionar como profissional premium",
                "Como começar sem ter clientela formada",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-gray-700 font-medium text-[11px] md:text-sm"
                >
                  <span className="text-red-500 font-bold text-xs md:text-base leading-none mt-0.5">
                    ✕
                  </span>
                  <span className="flex-1 leading-snug">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 pt-4 border-t border-gray-100 italic">
              <p className="text-[13px] md:text-sm text-gray-600 leading-snug">
                Eles acham que isso "não é técnico". <br />
                <span className="text-pink-600 font-bold">
                  Mas EU sei que é aí que você trava.
                </span>
              </p>
            </div>
          </TimelineItemNode>
        </div>
      </div>
    </div>
  );
};

interface TimelineItemProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}

const TimelineItemNode: React.FC<TimelineItemProps> = ({
  icon,
  title,
  children,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={VIEWPORT_CONFIG}
      transition={{ duration: 0.5 }}
      className="relative w-full"
    >
      {/* Icon Bubble: Centered on the timeline line */}
      <div className="absolute -left-10 md:-left-12 w-8 h-8 md:w-10 md:h-10 rounded-full bg-white border md:border-2 border-pink-100 flex items-center justify-center shadow-sm z-20 shrink-0">
        {icon}
      </div>

      {/* Content Card: Reduced padding and internal spacing */}
      <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-5 border border-gray-100 shadow-sm hover:shadow-md transition-shadow relative z-10 w-full overflow-hidden">
        <h3 className="text-base md:text-lg font-serif font-bold text-gray-900 mb-2 leading-tight">
          {title}
        </h3>
        {children}
      </div>
    </motion.div>
  );
};
