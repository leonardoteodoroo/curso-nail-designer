import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  PanInfo,
  animate,
  MotionValue,
  useReducedMotion,
} from "framer-motion";
import { ChevronLeft, ChevronRight, MoveRight } from "lucide-react";

interface StitchReview {
  id: number;
  name: string;
  age: number;
  location: string;
  quote: string;
  detail: string;
  status: string;
  image?: string;
  initial: string;
  isTop?: boolean;
}

/*
  DEV#placeholder-step06 — Prompts Imagen 3 por aluna:
  Padrão geral: "Candid portrait of a Brazilian woman [nome], [age] anos, from [city],
  smiling naturally but not posing, casual outfit, real home environment or outdoor
  Brazilian city background, shot on iPhone, soft natural light, no heavy filter, slightly candid look"
  negative: studio, professional model, perfect lighting, posed photo, stock image

  Paths esperados em /public/images/:
  - step06-mariana.webp    → Mariana, 28, Rio — sorrindo em frente ao espelho com unhas feitas
  - step06-vanessa.webp    → Vanessa, 26, Osasco — segurando celular em casa, olhando para câmera com confiança
  - step06-carla.webp      → Carla, 35, SP — home office improvisado
  - step06-jessica.webp    → Jéssica, 24, BH — expressão empolgada, casual
  - step06-ana-paula.webp  → Ana Paula, 31, Salvador — sorriso tímido
  - step06-renata.webp     → Renata, 29, Curitiba — satisfeita
  - step06-patricia.webp   → Patrícia, 26, POA — expressão de superação
  - step06-luciana.webp    → Luciana, 33, Fortaleza — filhos pequenos ao fundo
  - step06-camila.webp     → Camila, 22, Goiânia — jovem e animada
  - step06-tatiane.webp    → Tatiane, 38, Florianópolis — madura e confiante
  - step06-bruna.webp      → Bruna, 27, Recife — tímida mas feliz
  - step06-debora.webp     → Débora, 32, Brasília — expressão de alívio
  - step06-fabiana.webp    → Fabiana, 34, Caxias — mesa de unhas montada
  - step06-gisele.webp     → Gisele, 25, Serra Negra MG — ambiente interiorano
*/
const stitchReviews: StitchReview[] = [
  {
    id: 1,
    name: "Mariana",
    age: 28,
    location: "Rio de Janeiro",
    quote: '"Superei o Perfeccionismo"',
    detail:
      'Eu refazia a MESMA unha 6, 7 vezes. Chorava de frustração. Achava que nunca ia ficar "perfeita". Hoje eu entendo: perfeito NÃO EXISTE. E minhas clientes AMAM meu trabalho. Cobro R$ 100. Agenda fechada. E EU durmo tranquila.',
    status: "Ex-perfeccionista paralisada",
    image: "/images/step06-mariana.webp",
    initial: "M",
  },
  {
    id: 2,
    name: "Vanessa",
    age: 26,
    location: "Osasco, SP",
    quote: '"Sustento da Casa"',
    detail:
      'Meu marido perdeu o emprego e entrou em depressão. O desespero bateu… Mas eu tinha minha profissão. Trabalhei dobrado. Paguei aluguel. Fiz mercado. Segurei a barra sozinha. Hoje eu sei: Meu Studio não é "bico". É o sustento da minha família.',
    status: "Sustenta a casa sozinha",
    image: "/images/step06-vanessa.webp",
    initial: "V",
    isTop: true,
  },
  {
    id: 3,
    name: "Carla",
    age: 35,
    location: "São Paulo",
    quote: '"Venci a Vergonha"',
    detail:
      'Eu tinha VERGONHA de falar meu preço. "Quanto é?" — "Ahh… R$ 40…" (morrendo por dentro). Hoje respondo com SEGURANÇA: "R$ 120. Aceita cartão ou Pix?" O que mudou? EU mudei.',
    status: "Aprendeu a se valorizar",
    image: "/images/step06-carla.webp",
    initial: "C",
  },
  {
    id: 4,
    name: "Jéssica",
    age: 24,
    location: "Belo Horizonte",
    quote: '"Venci a Ansiedade"',
    detail:
      'Eu tremia LITERALMENTE na frente da cliente. Suava frio. Mão tremendo. Pensava: "Ela tá julgando tudo que eu faço." Descobri que isso é ANSIEDADE SOCIAL. E que dá pra trabalhar mesmo com isso. Hoje minha agenda vive lotada. E não tremo mais.',
    status: "Venceu a ansiedade",
    image: "/images/step06-jessica.webp",
    initial: "J",
  },
  {
    id: 5,
    name: "Ana Paula",
    age: 31,
    location: "Salvador",
    quote: '"Agenda Cheia (Offline)"',
    detail:
      "Eu ODEIO aparecer. Não posto foto. Não faço stories. Nem tenho Instagram profissional. E mesmo assim… Minha agenda lota SÓ com WhatsApp e indicação. Você NÃO precisa ser influencer pra viver disso.",
    status: "Agenda lotada sem redes sociais",
    image: "/images/step06-ana-paula.webp",
    initial: "A",
  },
  {
    id: 6,
    name: "Renata",
    age: 29,
    location: "Curitiba",
    quote: '"Achei o Curso Certo"',
    detail:
      "Já fiz 3 cursos de unha. Gastei mais de R$ 2.000. NENHUM me ensinou como REALMENTE trabalhar. Só técnica. Nada de negócio. Nada de confiança. Esse foi o PRIMEIRO que me fez virar profissional DE VERDADE. Hoje eu faturei R$ 4.800 no último mês.",
    status: "Finalmente encontrou o curso certo",
    image: "/images/step06-renata.webp",
    initial: "R",
  },
  {
    id: 7,
    name: "Patrícia",
    age: 26,
    location: "Porto Alegre",
    quote: '"Parei de Me Sabotar"',
    detail:
      '"Eu não tenho dom." "Não nasci pra isso." EU me sabotava TODOS OS DIAS. Até entender: Dom é MITO. Técnica é TREINO. Hoje eu sou a manicure mais procurada do meu bairro. E eu NÃO nasci sabendo. EU APRENDI.',
    status: "Parou de se sabotar",
    image: "/images/step06-patricia.webp",
    initial: "P",
  },
  {
    id: 8,
    name: "Luciana",
    age: 33,
    location: "Fortaleza",
    quote: '"Empreendo Sem Culpa"',
    detail:
      'Tenho 2 filhos pequenos. Toda vez que eu pensava em trabalhar… Vinha a CULPA. "Sou má mãe por querer ganhar meu dinheiro?" Hoje eu trabalho em casa. Atendo enquanto eles dormem ou estão na escola. Faturei R$ 3.200 mês passado. E meus filhos estão ÓTIMOS.',
    status: "Mãe empreendedora sem culpa",
    image: "/images/step06-luciana.webp",
    initial: "L",
  },
  {
    id: 9,
    name: "Camila",
    age: 22,
    location: "Goiânia",
    quote: '"Comecei do Zero"',
    detail:
      "Nunca tinha pegado no alicate. ZERO experiência. Comecei do absolutamente NADA. 3 meses depois: Primeira cliente pagante. R$ 80. EU chorei de emoção. Hoje, 1 ano depois, atendo 4 clientes/dia.",
    status: "Começou do zero",
    image: "/images/step06-camila.webp",
    initial: "C",
  },
  {
    id: 10,
    name: "Tatiane",
    age: 38,
    location: "Florianópolis",
    quote: '"Me Valorizei"',
    detail:
      'Eu JÁ fazia unha há 5 anos. Mas ganhava MIXARIA. R$ 30, R$ 40… "Pra ajudar a pagar conta." O problema NÃO era técnica. Era PRECIFICAÇÃO + POSICIONAMENTO. Hoje cobro R$ 110. É a MESMA unha. Mas eu me valorizo.',
    status: "Finalmente se valorizou",
    image: "/images/step06-tatiane.webp",
    initial: "T",
  },
  {
    id: 11,
    name: "Bruna",
    age: 27,
    location: "Recife",
    quote: '"Aprendi a Me Impor"',
    detail:
      'Sou MUITO tímida. Cliente cancelava última hora… Eu não tinha coragem nem de cobrar a taxa. "Tá ok, sem problemas!" (chorando por dentro). Aprendi SCRIPTS PRONTOS. Hoje eu tenho POLÍTICA DE CANCELAMENTO. E as clientes respeitam. Mudou TUDO.',
    status: "Aprendeu a se impor",
    image: "/images/step06-bruna.webp",
    initial: "B",
  },
  {
    id: 12,
    name: "Débora",
    age: 32,
    location: "Brasília",
    quote: '"Perdi o Medo"',
    detail:
      'Eu tinha PAVOR de cliente "chata". "E se ela reclamar?" "E se ela me humilhar?" Aprendi a fazer ANAMNESE. Aprendi a ALINHAR EXPECTATIVA. Aprendi o que FALAR se der errado. Hoje eu atendo até as "difíceis". E elas viram minhas clientes fiéis.',
    status: "Conquistou sua independência",
    image: "/images/step06-debora.webp",
    initial: "D",
  },
  {
    id: 13,
    name: "Fabiana",
    age: 34,
    location: "Duque de Caxias, RJ",
    quote: '"Meu Bairro Paga Bem"',
    detail:
      'Eu achava que ninguém ia pagar R$ 100 aqui no meu bairro. "As meninas daqui não têm dinheiro." Era o que EU pensava. Mas aprendi: Quanto mais LONGE dos salões chiques… MAIOR a fidelidade da cliente. Minhas clientes não me trocam. Agenda lotada só com indicação. Zero gasto com anúncio.',
    status: "Lotou a agenda no bairro",
    image: "/images/step06-fabiana.webp",
    initial: "F",
  },
  {
    id: 14,
    name: "Gisele",
    age: 25,
    location: "Serra Negra, MG",
    quote: '"Sucesso no Interior"',
    detail:
      "Cidade pequena não dá dinheiro. Era o que EU acreditava. Mas descobri: Quanto MENOR a cidade… MENOS concorrência. Sou a ÚNICA da minha região que faz fibra de vidro profissional. Clientes vêm de 3 cidades vizinhas pra mim.",
    status: "Referência na região",
    image: "/images/step06-gisele.webp",
    initial: "G",
  },
];

// --- Card Interno (Visual) ---
// Mantido o estilo original do Stitch, mas recebendo propriedade isCenter
const StitchCardInner: React.FC<{
  review: StitchReview;
  isCenter: boolean;
}> = ({ review, isCenter }) => {
  return (
    <div
      className={`bg-white h-full flex flex-col transition-shadow duration-300 ${isCenter
        ? "shadow-2xl border-2 border-rose-100" // Borda rosa sutil no centro
        : "shadow-xl border-2 border-transparent" // Borda transparente
        }`}
    >
      {/* Image / Avatar - Sempre h-56 */}
      <div className="relative overflow-hidden shrink-0 h-56 w-full">
        {review.image ? (
          <img
            alt={`Foto de ${review.name}`}
            src={review.image}
            className="w-full h-full object-cover"
            loading={isCenter ? "eager" : "lazy"}
            decoding="async"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-rose-50 to-rose-100">
            <div className="w-20 h-20 rounded-full bg-rose-200/60 flex items-center justify-center text-[#ee2b5b] text-3xl font-bold">
              {review.initial}
            </div>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

        {/* Texto sobreposto */}
        <div className="absolute left-5 bottom-5">
          <h3 className="text-white font-bold text-xl leading-tight">
            {review.name}, {review.age}
          </h3>
          <p className="text-white/80 text-xs">{review.location}</p>
        </div>

        {review.isTop && (
          // Animação de entrada suave via opacity
          <div
            className={`absolute top-4 right-4 bg-white/20 backdrop-blur-md px-3 py-1 rounded-lg border border-white/30 transition-opacity duration-300 ${isCenter ? "opacity-100" : "opacity-0"}`}
          >
            <div className="flex items-center gap-1">
              <span className="text-yellow-400 text-sm">★</span>
              <span className="text-white text-xs font-bold">Top Aluna</span>
            </div>
          </div>
        )}
      </div>

      {/* Content - Sempre p-5 */}
      <div className="relative flex flex-col flex-1 p-5">
        <span
          className={`inline-flex items-center self-start px-3 py-1 rounded-full text-xs font-semibold mb-2 transition-colors duration-300 ${isCenter ? "bg-[#ee2b5b] text-white" : "bg-rose-50 text-[#ee2b5b]"
            }`}
        >
          {review.status}
        </span>

        <blockquote className="font-bold mb-1 text-gray-900 leading-tight text-base">
          {review.quote}
        </blockquote>

        <p className="text-gray-500 text-xs leading-relaxed mt-1 flex-1">
          {review.detail}
        </p>
      </div>
    </div>
  );
};

// --- Configurações de Animação ---
const DRAG_BUFFER = 10;
const VELOCITY_THRESHOLD = 50;

export const CarouselStitch: React.FC = () => {
  // Gap Responsivo
  const [gap, setGap] = useState(290);

  useEffect(() => {
    const handleResize = () => {
      // Em telas muito pequenas, use um gap menor
      setGap(window.innerWidth < 768 ? 250 : 290);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [activeIndex, setActiveIndex] = useState(1); // Começa no segundo card (Vanessa)
  const shouldReduceMotion = useReducedMotion();
  const x = useMotionValue(-gap); // Começa na posição do segundo card
  const containerRef = useRef<HTMLDivElement>(null);

  const prevGap = useRef(gap);

  // Atualiza posição se o gap mudar
  useEffect(() => {
    if (prevGap.current !== gap) {
      x.stop();
      x.set(-activeIndex * gap);
      prevGap.current = gap;
    }
  }, [gap, activeIndex, x]);

  const jumpTo = (idx: number) => {
    setActiveIndex(idx);
    animate(x, -idx * gap, {
      type: "spring",
      stiffness: 300,
      damping: 30,
    });
  };

  const handleDragEnd = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;

    if (offset < -DRAG_BUFFER || velocity < -VELOCITY_THRESHOLD) {
      jumpTo((activeIndex + 1) % stitchReviews.length);
    } else if (offset > DRAG_BUFFER || velocity > VELOCITY_THRESHOLD) {
      jumpTo((activeIndex - 1 + stitchReviews.length) % stitchReviews.length);
    } else {
      jumpTo(activeIndex);
    }
  };

  const handlePan = (event: Event, info: PanInfo) => {
    x.set(x.get() + info.delta.x);
  };

  const nextSlide = () => jumpTo((activeIndex + 1) % stitchReviews.length);
  const prevSlide = () =>
    jumpTo((activeIndex - 1 + stitchReviews.length) % stitchReviews.length);

  // Teclado
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [prevSlide, nextSlide]); // Corrigido dependências

  return (
    <section
      id="carousel-stitch"
      data-section="carousel-stitch"
      className="w-full py-12 lg:py-20 relative bg-[#f8f6f6]"
      style={{ overflowX: "hidden" }}
    >
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-rose-50/60 to-transparent pointer-events-none -z-10" />
      <div className="absolute -left-20 top-40 w-64 h-64 bg-rose-200/30 rounded-full blur-3xl -z-10" />
      <div className="absolute -right-20 top-20 w-80 h-80 bg-rose-100/20 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Coluna esquerda: texto */}
          <div className="text-left space-y-6 relative z-20">
            <span className="inline-block py-1 px-3 rounded-full bg-rose-100 text-[#ee2b5b] text-sm font-semibold tracking-wide uppercase">
              Histórias Reais
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight">
              Milhares de mulheres passaram{" "}
              <span className="text-[#ee2b5b] relative inline-block">
                EXATAMENTE
                <svg
                  className="absolute w-full h-3 -bottom-1 left-0 text-rose-300"
                  preserveAspectRatio="none"
                  viewBox="0 0 100 10"
                >
                  <path
                    d="M0 5 Q 50 10 100 5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                  />
                </svg>
              </span>{" "}
              pelo mesmo que você.
            </h2>
            <p className="text-lg text-gray-500 max-w-md">
              Hoje elas vivem da Nail Art, conquistaram sua independência
              financeira e faturam alto. O próximo depoimento pode ser o seu.
            </p>

            <div className="flex items-center gap-4 pt-2">
              <div className="flex -space-x-3">
                {[
                  { src: "/images/step06-mariana.webp", alt: "Aluna Mariana" },
                  { src: "/images/step06-jessica.webp", alt: "Aluna Jéssica" },
                  { src: "/images/step06-carla.webp", alt: "Aluna Carla" },
                ].map(({ src, alt }) => (
                  <div
                    key={src}
                    className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-rose-100 flex-shrink-0"
                  >
                    <img
                      src={src}
                      alt={alt}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="text-sm text-gray-500">
                <span className="text-[#ee2b5b] font-bold">48.000+</span> Alunas
                Transformadas
              </div>
            </div>

            {/* Controles desktop */}
            <div className="hidden md:flex gap-4 mt-4 w-max">
              <div className="flex gap-4 items-center">
                <button
                  onClick={prevSlide}
                  aria-label="Card anterior"
                  className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center bg-white hover:bg-rose-50 hover:border-rose-200 transition-all group shadow-sm"
                >
                  <ChevronLeft
                    className="text-gray-500 group-hover:text-[#ee2b5b]"
                    size={24}
                  />
                </button>

                {/* Paginação de Bolinhas */}
                <div className="flex gap-2 items-center">
                  {stitchReviews.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => jumpTo(i)}
                      aria-label={`Ir para depoimento ${i + 1}`}
                      className={`h-2 rounded-full transition-all duration-300 ${i === activeIndex
                        ? "w-6 bg-[#ee2b5b]"
                        : "w-2 bg-gray-300 hover:bg-rose-300"
                        }`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextSlide}
                  aria-label="Próximo card"
                  className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center bg-white hover:bg-rose-50 hover:border-rose-200 transition-all group shadow-sm"
                >
                  <ChevronRight
                    className="text-gray-500 group-hover:text-[#ee2b5b]"
                    size={24}
                  />
                </button>
              </div>
            </div>

            {/* CTA desktop — QUERO TER ESSES RESULTADOS TAMBÉM */}
            <div className="hidden md:flex flex-col items-start gap-2 mt-6">
              <button
                onClick={() =>
                  document
                    .getElementById("oferta-lp2")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="inline-flex items-center gap-2 rounded-full bg-[#ee2b5b] hover:bg-[#d41f4e] text-white font-bold px-8 py-4 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 uppercase tracking-wide text-sm"
              >
                QUERO TER ESSES RESULTADOS TAMBÉM →
              </button>
              <p className="text-xs text-gray-400 font-medium pl-1">
                Garantia de 7 dias — sem burocracia
              </p>
            </div>
          </div>

          {/* Coluna direita: carrossel Circular Infinito (Framer Motion) */}
          <div className="relative flex flex-col items-center justify-center overflow-visible">
            <div
              ref={containerRef}
              className="relative h-[480px] md:h-[520px] w-full flex items-center justify-center touch-pan-y select-none"
              style={{ perspective: 1000 }}
            >
              {/* Ghost Surface for Dragging */}
              <motion.div
                className="absolute inset-0 z-50 cursor-grab active:cursor-grabbing touch-pan-y"
                onPan={handlePan}
                onPanEnd={handleDragEnd}
                whileTap={{ cursor: "grabbing" }}
              />

              {/* The Cards */}
              {stitchReviews.map((review, i) => (
                <CarouselCardStitch
                  key={review.id}
                  index={i}
                  review={review}
                  x={x}
                  gap={gap}
                  shouldReduceMotion={shouldReduceMotion}
                />
              ))}
            </div>

            {/* Mobile Controls */}
            <div className="flex md:hidden flex-col items-center mt-6 gap-4 relative z-50 pointer-events-none w-full px-4">
              <div className="flex justify-between items-center w-full max-w-xs pointer-events-auto">
                <button
                  onClick={prevSlide}
                  aria-label="Card anterior"
                  className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center bg-white/90 backdrop-blur-sm sm:backdrop-blur-md transition-all hover:bg-white shadow-sm sm:shadow-md active:scale-95 text-[#ee2b5b]"
                >
                  <ChevronLeft size={20} />
                </button>

                {/* Paginação de Bolinhas Mobile */}
                <div className="flex gap-1.5 items-center">
                  {stitchReviews.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => jumpTo(i)}
                      aria-label={`Ir para depoimento ${i + 1}`}
                      className={`h-1.5 rounded-full transition-all duration-300 ${i === activeIndex
                        ? "w-5 bg-[#ee2b5b]"
                        : "w-1.5 bg-gray-300"
                        }`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextSlide}
                  aria-label="Próximo card"
                  className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center bg-white/90 backdrop-blur-sm sm:backdrop-blur-md transition-all hover:bg-white shadow-sm sm:shadow-md active:scale-95 text-[#ee2b5b]"
                >
                  <ChevronRight size={20} />
                </button>
              </div>

              <div className="flex items-center gap-2 opacity-60">
                <span className="text-[10px] uppercase tracking-tighter font-bold text-[#ee2b5b]">
                  Deslize para ler
                </span>
                <div className="flex gap-1">
                  <motion.div
                    animate={shouldReduceMotion ? { x: 0 } : { x: [0, 5, 0] }}
                    transition={{
                      repeat: shouldReduceMotion ? 0 : Infinity,
                      duration: shouldReduceMotion ? 0 : 1.5,
                    }}
                    className="w-1 h-1 rounded-full bg-[#ee2b5b]"
                  />
                  <div className="w-1 h-1 rounded-full bg-[#ee2b5b] opacity-50" />
                  <div className="w-1 h-1 rounded-full bg-[#ee2b5b] opacity-25" />
                </div>
              </div>

              {/* CTA — QUERO TER ESSES RESULTADOS TAMBÉM */}
              <div className="flex flex-col items-center gap-2 mt-2 pointer-events-auto">
                <button
                  onClick={() =>
                    document
                      .getElementById("modulos-lp2")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="inline-flex items-center gap-2 rounded-full bg-[#ee2b5b] hover:bg-[#d41f4e] text-white font-bold px-8 py-4 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 uppercase tracking-wide text-sm"
                >
                  QUERO TER ESSES RESULTADOS TAMBÉM →
                </button>
                <p className="text-xs text-gray-400 font-medium">
                  Garantia de 7 dias — sem burocracia
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Componente Motion Wrapper (Lógica de Animação Otimizada) ---
interface CarouselCardStitchProps {
  index: number;
  review: StitchReview;
  x: MotionValue<number>;
  gap: number;
  shouldReduceMotion: boolean | null;
}

const CarouselCardStitch: React.FC<CarouselCardStitchProps> = ({
  index,
  review,
  x,
  gap,
  shouldReduceMotion,
}) => {
  // Posição baseada no scroll (x)
  const position = useTransform(
    x,
    (currentX: number) => currentX + index * gap,
  );

  // Ajustes de Animação para combinar com o estilo Stitch
  const rotateY = useTransform(
    position,
    [-gap, 0, gap],
    shouldReduceMotion ? [0, 0, 0] : [22, 0, -22],
  );
  const scale = useTransform(
    position,
    [-gap, 0, gap],
    shouldReduceMotion ? [0.95, 1, 0.95] : [0.8, 1, 0.8],
  );
  const opacity = useTransform(
    position,
    [-gap * 1.5, 0, gap * 1.5],
    [0.4, 1, 0.4],
  ); // Opacidade suave nos laterais
  const blur = useTransform(
    position,
    [-gap, 0, gap],
    shouldReduceMotion
      ? [0, 0, 0]
      : window.innerWidth < 768
        ? [0.5, 0, 0.5]
        : [1, 0, 1],
  );
  const z = useTransform(position, (pos) =>
    shouldReduceMotion ? 0 : -Math.abs(pos) * 1.2,
  );
  // Translação parallax similar ao Nail (0.6 fator)
  const translateX = useTransform(position, (pos) => pos * 0.6);

  // Otimização: esconde cards muito longe
  const display = useTransform(position, (pos: number) =>
    Math.abs(pos) >= gap * 2.2 ? "none" : "block",
  );

  // Detecta se é o card central (para efeitos visuais internos como o badge)
  const [isCenter, setIsCenter] = useState(false);
  useEffect(() => {
    const unsubscribe = x.on("change", (latestX) => {
      const currentPos = latestX + index * gap;
      setIsCenter(Math.abs(currentPos) < gap * 0.5);
    });
    return unsubscribe;
  }, [x, index, gap]);

  return (
    <motion.div
      className="absolute w-[250px] min-[375px]:w-[280px] min-h-[380px] md:min-h-[420px] h-auto max-w-[85vw] rounded-[24px] pointer-events-none will-change-transform"
      style={{
        x: translateX,
        rotateY,
        scale,
        opacity,
        z,
        display,
        filter: shouldReduceMotion ? "none" : `blur(${blur}px)`,
        zIndex: useTransform(
          position,
          (pos) => 100 - Math.round(Math.abs(pos)),
        ),
      }}
    >
      {/* Inner Wrapper com Overflow Hidden para Bordas Arredondadas Perfeitas */}
      <div className="w-full h-full rounded-[24px] overflow-hidden bg-white relative">
        {/* Gloss Decorativo */}
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-white/40 via-transparent to-black/5 pointer-events-none z-50 rounded-[24px]" />
        <StitchCardInner review={review} isCenter={isCenter} />
      </div>
    </motion.div>
  );
};
