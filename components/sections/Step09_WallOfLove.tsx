import React, { useState, useRef, useEffect } from "react";
import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
import { BlurText } from "../ui/BlurText";
import { BackgroundHeading } from "../ui/BackgroundHeading";
import { ClinicalCard } from "../ui/ClinicalCard";
import { CheckCircle2 } from "lucide-react";

const categories = [
  "Conquistas Financeiras",
  "Técnicas",
  "Emocionais",
  "Familiares",
  "Reconhecimento",
  "Improváveis",
];

type Testimonial = {
  name: string;
  age: number;
  city: string;
  category: string;
  quote: string;
};

const allTestimonials: Testimonial[] = [
  {
    name: "Mariana",
    age: 28,
    city: "Rio",
    category: "Conquistas Financeiras",
    quote: "Fui de R$25 pra R$120 por unha em 4 meses. Minha renda triplicou.",
  },
  {
    name: "Carla",
    age: 35,
    city: "SP",
    category: "Conquistas Financeiras",
    quote: "Saí do salão e hoje faturo R$4.500 por mês trabalhando em casa.",
  },
  {
    name: "Renata",
    age: 29,
    city: "Curitiba",
    category: "Conquistas Financeiras",
    quote: "Pedi demissão do CLT. Hoje ganho o dobro fazendo o que amo.",
  },
  {
    name: "Jéssica",
    age: 24,
    city: "BH",
    category: "Técnicas",
    quote: "Nunca tinha pegado numa lixa. Hoje faço alongamento perfeito.",
  },
  {
    name: "Débora",
    age: 32,
    city: "Brasília",
    category: "Técnicas",
    quote: "Minha curvatura C ficou impecável depois do módulo 2.",
  },
  {
    name: "Bruna",
    age: 27,
    city: "Recife",
    category: "Técnicas",
    quote: "Aprendi nail art que ninguém na minha cidade faz. Sou referência.",
  },
  {
    name: "Patrícia",
    age: 26,
    city: "POA",
    category: "Emocionais",
    quote:
      "Parei de ter vergonha de cobrar. Minha postura mudou completamente.",
  },
  {
    name: "Tatiane",
    age: 38,
    city: "Floripa",
    category: "Emocionais",
    quote: "Com 38 anos recomeçei. Foi a melhor decisão da minha vida.",
  },
  {
    name: "Fernanda",
    age: 30,
    city: "MT",
    category: "Emocionais",
    quote: "Passei de insegura para a referência da minha região.",
  },
  {
    name: "Ana Paula",
    age: 31,
    city: "Salvador",
    category: "Familiares",
    quote: "Consigo trabalhar e cuidar dos filhos. Monto meu horário.",
  },
  {
    name: "Camila",
    age: 22,
    city: "Goiânia",
    category: "Familiares",
    quote: "Pago minha faculdade com unhas. Minha mãe se orgulha.",
  },
  {
    name: "Luciana",
    age: 33,
    city: "Fortaleza",
    category: "Familiares",
    quote: "Sustento minha casa. Não dependo de ninguém.",
  },
  {
    name: "Camila ZL",
    age: 26,
    city: "SP-ZL",
    category: "Reconhecimento",
    quote: "Faturei R$5k no primeiro mês. As clientes me indicam sem parar.",
  },
  {
    name: "Débora D",
    age: 30,
    city: "Brasília",
    category: "Reconhecimento",
    quote: "Fui convidada para dar workshop na minha cidade.",
  },
  {
    name: "Mariana R",
    age: 25,
    city: "RJ",
    category: "Reconhecimento",
    quote: "Meu perfil saiu de 200 para 3.000 seguidores em 2 meses.",
  },
  {
    name: "Tatiane M",
    age: 40,
    city: "Interior SP",
    category: "Improváveis",
    quote:
      "Com 40 anos e sem internet boa, fiz o curso pelo celular. Deu certo.",
  },
  {
    name: "Sandra",
    age: 45,
    city: "Interior MG",
    category: "Improváveis",
    quote:
      "Nunca tinha feito curso online. Hoje sou a nail designer da cidade.",
  },
  {
    name: "Raimunda",
    age: 50,
    city: "Manaus",
    category: "Improváveis",
    quote: "Meus filhos me ajudaram a baixar o app. Hoje eu que sustento eles.",
  },
];

const marqueeItems = allTestimonials.map(
  (t) => `"${t.quote}" — ${t.name}, ${t.city}`,
);
const tripled = [...marqueeItems, ...marqueeItems, ...marqueeItems];

const AnimatedNumber: React.FC<{
  value: number;
  suffix?: string;
  prefix?: string;
}> = ({ value, suffix = "", prefix = "" }) => {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 2000;
          const startTime = performance.now();
          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setDisplay(Math.round(eased * value));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-black text-emerald-600">
      {prefix}
      {display.toLocaleString("pt-BR")}
      {suffix}
    </div>
  );
};

export const WallOfLove: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const marqueeX = useMotionValue(0);
  const isPaused = useRef(false);

  useAnimationFrame(() => {
    if (!isPaused.current) {
      let newX = marqueeX.get() - 1.5;
      const totalWidth = tripled.length * 300;
      if (Math.abs(newX) > totalWidth / 3) {
        newX = 0;
      }
      marqueeX.set(newX);
    }
  });

  const filteredTestimonials = allTestimonials.filter(
    (t) => t.category === categories[activeCategory],
  );

  return (
    <section className="bg-white py-16 md:py-24 px-4 overflow-hidden relative">
      <BackgroundHeading text="MURAL • DO • AMOR • ❤️" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Headline */}
        <div className="text-center mb-12">
          <span className="inline-block bg-rose-50 text-rose-600 text-[10px] md:text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            MURAL DO AMOR ❤️
          </span>
          <BlurText
            text="Elas Fizeram, Você Também Vai Fazer."
            className="text-3xl md:text-5xl mb-4"
          />
          <p className="text-zinc-600 max-w-xl mx-auto text-lg leading-relaxed">
            Mais de{" "}
            <strong className="text-emerald-600">48.000 mulheres</strong> já
            passaram por aqui.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat, i) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(i)}
              className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                activeCategory === i
                  ? "bg-emerald-600 text-white shadow-md"
                  : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-4 mb-16">
          {filteredTestimonials.slice(0, 3).map((t, i) => (
            <motion.div
              key={`${t.name}-${activeCategory}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <ClinicalCard hoverEffect className="p-6 h-full">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-300 to-teal-400 flex items-center justify-center text-white font-bold text-sm">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="font-bold text-zinc-900 text-sm">
                      {t.name}, {t.age}
                    </p>
                    <p className="text-xs text-zinc-400">{t.city}</p>
                  </div>
                </div>
                <span className="inline-block bg-emerald-50 text-emerald-700 text-[10px] font-bold uppercase px-2 py-0.5 rounded-full mb-2">
                  {t.category}
                </span>
                <p className="text-sm text-zinc-700 italic leading-relaxed">
                  "{t.quote}"
                </p>
              </ClinicalCard>
            </motion.div>
          ))}
        </div>

        {/* Marquee */}
        <div className="relative mb-16">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <div
            className="overflow-hidden"
            onMouseEnter={() => (isPaused.current = true)}
            onMouseLeave={() => (isPaused.current = false)}
            onTouchStart={() => (isPaused.current = true)}
            onTouchEnd={() => (isPaused.current = false)}
          >
            <motion.div className="flex gap-4" style={{ x: marqueeX }}>
              {tripled.map((item, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 w-[300px] bg-zinc-50 rounded-xl p-4 border border-zinc-100 hover:border-emerald-200 transition-colors"
                >
                  <p className="text-xs text-zinc-600 line-clamp-3">{item}</p>
                </div>
              ))}
            </motion.div>
          </div>
          <p className="text-center text-xs text-zinc-400 mt-3 md:hidden">
            Arraste para navegar →
          </p>
        </div>

        {/* Números Animados */}
        <div className="mb-16">
          <h3
            className="text-2xl font-bold text-zinc-900 text-center mb-8"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Os Números Não Mentem
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: 48000, suffix: "+", label: "Alunas formadas" },
              { value: 3500, prefix: "R$", label: "Renda média/mês" },
              { value: 87, suffix: "%", label: "Satisfação das alunas" },
              {
                value: 48,
                suffix: "/5",
                label: "Nota média",
                displayValue: true,
              },
            ].map((metric, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                {metric.displayValue ? (
                  <div className="text-4xl md:text-5xl font-black text-emerald-600">
                    4.8/5
                  </div>
                ) : (
                  <AnimatedNumber
                    value={metric.value}
                    suffix={metric.suffix}
                    prefix={metric.prefix}
                  />
                )}
                <p className="text-sm text-zinc-500 mt-1">{metric.label}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bloco Final */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <ClinicalCard className="p-8 bg-emerald-50 border-emerald-200 max-w-3xl mx-auto text-center">
            <h3
              className="text-xl md:text-2xl font-bold text-zinc-900 mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              A Realização Mais Importante
            </h3>
            <p className="text-zinc-700 mb-4 font-medium">
              Nenhuma tinha "dom".{" "}
              <span className="text-emerald-600 font-bold">
                TODAS DECIDIRAM começar.
              </span>
            </p>
            <div className="flex flex-col gap-2 text-sm text-zinc-600 max-w-sm mx-auto text-left mb-6">
              {[
                "Elas tinham medo. Você também tem.",
                "Elas não tinham experiência. Você talvez também não.",
                "Elas começaram do zero. Você pode começar agora.",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <p className="text-lg font-bold text-zinc-800">
              A única diferença entre você e elas?{" "}
              <span className="text-emerald-600">Uma decisão.</span>
            </p>
          </ClinicalCard>
        </motion.div>
      </div>
    </section>
  );
};
