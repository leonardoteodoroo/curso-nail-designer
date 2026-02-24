import { motion, useScroll, useTransform } from "framer-motion";
import { Frown, Calendar, CheckCheck } from "lucide-react";

const ScrollIndicator = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 100], [1, 0]);

  return (
    <motion.div
      style={{ opacity, x: "-50%" }}
      initial={{ opacity: 0, y: 10, x: "-50%" }}
      animate={{ opacity: 1, y: 0, x: "-50%" }}
      transition={{ delay: 1.5, duration: 1 }}
      className="absolute bottom-8 left-1/2 z-20 flex flex-col items-center gap-2 cursor-pointer mix-blend-multiply"
      onClick={() =>
        window.scrollBy({ top: window.innerHeight * 0.8, behavior: "smooth" })
      }
    >
      <span className="text-[10px] uppercase tracking-widest text-emerald-950/70 font-semibold">
        Role para ver
      </span>
      <div className="w-[28px] h-[44px] rounded-full border-[2px] border-emerald-950/80 flex justify-center p-1.5 shadow-sm bg-white/5 backdrop-blur-[1px]">
        <motion.div
          animate={{ y: [0, 14, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-1.5 h-1.5 bg-emerald-950 rounded-full"
        />
      </div>
    </motion.div>
  );
};

export const Hero = () => {
  return (
    <section className="min-h-[100dvh] flex flex-col bg-white overflow-hidden relative">
      {/* ═══ TÍTULO ═══ */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center pt-2 pb-6 md:py-10 px-4 bg-white relative z-20"
      >
        <h1
          className="text-5xl md:text-7xl lg:text-8xl font-black text-zinc-900 leading-none tracking-tight"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Duas{" "}
          <span className="italic bg-gradient-to-r from-[#ec1337] to-rose-500 bg-clip-text text-transparent pr-2 pb-2 inline-block">
            Mulheres!
          </span>
        </h1>
        <p className="text-base md:text-xl text-zinc-400 mt-3 md:mt-4 font-medium tracking-wide uppercase">
          Mesma Idade.&nbsp;&nbsp;Mesma Cidade.
        </p>
      </motion.div>

      {/* ═══ ÁREA VISUAL: Fotos + Cards + VS ═══ */}
      <div className="relative flex flex-col md:flex-row md:items-stretch w-full">
        {/* ── REALIDADE A (Topo no mobile, Esquerda no desktop) ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full md:w-1/2 aspect-[4/3] md:aspect-auto md:min-h-[450px]"
        >
          {/* Imagem Realidade A — LCP acima da dobra: fetchPriority high */}
          <img
            src="/images/step01-hero-unha-simples.webp"
            alt="Mãos com unhas simples e cobrança baixa de R$25 — manicure desvalorizada"
            fetchPriority="high"
            loading="eager"
            decoding="sync"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Card REALIDADE A — TOPO-ESQUERDA, ROTAÇÃO INVERTIDA 20° ↗ */}
          <motion.div
            initial={{ opacity: 0, x: -50, rotate: 30 }}
            animate={{ opacity: 1, x: 0, rotate: 20 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="absolute top-16 left-5 md:top-20 md:left-10
                                   bg-white/95 backdrop-blur-sm rounded-2xl
                                   shadow-[0_10px_40px_rgba(0,0,0,0.15)]
                                   p-3.5 md:p-5 w-[170px] md:w-[200px] z-10"
          >
            {/* Badge */}
            <div className="absolute -top-3 left-4 bg-red-100 text-red-600 px-3 py-0.5 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-wider">
              Realidade A
            </div>

            <p className="text-zinc-500 text-xs md:text-sm font-medium mt-1">
              Uma Cobra
            </p>
            <div className="flex items-baseline gap-1 mt-1">
              <span className="text-red-500 text-2xl md:text-3xl font-black leading-none">
                R$ 25
              </span>
              <span className="text-zinc-400 text-xs md:text-sm font-normal">
                /unha
              </span>
            </div>

            {/* Barra de valor (curta) */}
            <div className="w-full h-2.5 bg-zinc-100 rounded-full overflow-hidden mt-3">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "20%" }}
                transition={{ duration: 1, delay: 1 }}
                className="h-full bg-red-400 rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* ── CÍRCULO VS ── */}
        <motion.div
          style={{ x: "-50%", y: "-50%" }}
          initial={{ opacity: 0, scale: 0.5, x: "-50%", y: "-50%" }}
          animate={{ opacity: 1, scale: 1, x: "-50%", y: "-50%" }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="absolute left-1/2 top-1/2 z-30
                               w-14 h-14 md:w-16 md:h-16
                               bg-white rounded-full
                               shadow-[0_4px_20px_rgba(0,0,0,0.15)] border-2 border-zinc-200
                               flex items-center justify-center"
        >
          <span className="text-zinc-800 text-sm md:text-base font-black tracking-wider">
            VS
          </span>
        </motion.div>

        {/* ── REALIDADE B (Baixo no mobile, Direita no desktop) ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative w-full md:w-1/2 aspect-[4/3] md:aspect-auto md:min-h-[450px]"
        >
          {/* Imagem Realidade B — above fold: fetchPriority high */}
          <img
            src="/images/step01-hero-unha-premium.webp"
            alt="Mãos com unhas gel premium cobrando R$120 — nail designer valorizada"
            fetchPriority="high"
            loading="eager"
            decoding="sync"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Card REALIDADE B — FUNDO-DIREITA, ROTAÇÃO INVERTIDA -20° ↘ */}
          <motion.div
            initial={{ opacity: 0, x: 50, rotate: -30 }}
            animate={{ opacity: 1, x: 0, rotate: -20 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="absolute bottom-16 right-5 md:bottom-20 md:right-10
                                   bg-white/95 backdrop-blur-sm rounded-2xl
                                   shadow-[0_10px_40px_rgba(0,0,0,0.15)]
                                   p-4 md:p-6 w-[195px] md:w-[232px] z-10"
          >
            {/* Badge */}
            <div className="absolute -top-3 right-4 bg-emerald-100 text-emerald-700 px-3 py-0.5 rounded-full text-[11px] md:text-xs font-bold uppercase tracking-wider">
              Realidade B
            </div>

            <p className="text-zinc-500 text-sm md:text-base font-medium mt-1 flex items-center gap-1">
              A Outra Cobra <span>📈</span>
            </p>
            <div className="flex items-baseline gap-1.5 mt-1">
              <span className="text-emerald-600 text-3xl md:text-4xl font-black leading-none">
                R$ 120
              </span>
              <span className="text-zinc-400 text-sm md:text-base font-normal">
                /unha
              </span>
            </div>

            {/* Barra de valor (longa) */}
            <div className="w-full h-2.5 bg-zinc-100 rounded-full overflow-hidden mt-3">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "85%" }}
                transition={{ duration: 1, delay: 1.2 }}
                className="h-full bg-emerald-500 rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* ── SCROLL INDICATOR ── */}
        <ScrollIndicator />
      </div>

      {/* ═══ TEXTO DE REVELAÇÃO ═══ */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="text-center px-5 py-10 md:py-16 bg-white space-y-6 md:space-y-8"
      >
        <div className="space-y-2">
          <p className="text-lg md:text-xl font-medium text-zinc-500">
            As Duas Fazem o Mesmo Alongamento em Gel.
          </p>
        </div>

        {/* ── BLOCO DOR DA MANICURE ── */}
        <div className="mx-auto w-full max-w-[960px] flex flex-col lg:flex-row gap-12 items-center text-left px-0 py-8">
          <div className="lg:w-1/2 flex flex-col items-start gap-6">
            <h2 className="text-3xl font-bold text-[#1b0d10] leading-tight w-full text-center lg:text-left">
              Você se sente{" "}
              <span className="text-[#ec1337]">desvalorizada?</span>
            </h2>
            <p className="text-[#1b0d10] text-lg leading-relaxed">
              A ansiedade de não saber quanto cobrar, o medo de perder clientes
              e a frustração de não ver seu trabalho reconhecido. Chega de olhar
              o WhatsApp com medo daquela mensagem:{" "}
              <span className="italic text-[#9a4c59]">"Quanto custa?"</span> e a
              cliente sumir depois da resposta.
            </p>
            <div className="grid grid-cols-1 gap-4 mt-4">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-[#fcf8f9] border border-[#f3e7e9]">
                <div className="p-2 bg-red-100 text-[#ec1337] rounded-full">
                  <Frown className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-[#1b0d10]">
                    Insegurança Técnica
                  </h4>
                  <p className="text-sm text-[#9a4c59]">
                    Medo de errar na frente da cliente e manchar sua reputação.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-xl bg-[#fcf8f9] border border-[#f3e7e9]">
                <div className="p-2 bg-red-100 text-[#ec1337] rounded-full">
                  <Calendar className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-[#1b0d10]">Agenda Vazia</h4>
                  <p className="text-sm text-[#9a4c59]">
                    Falta de previsibilidade financeira no final do mês.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Chat UI Mockup */}
          <div className="lg:w-1/2 w-full max-w-sm mx-auto">
            <div className="bg-gray-100 rounded-3xl p-4 shadow-2xl border-4 border-white">
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
                <div className="bg-[#075E54] p-3 flex items-center gap-3 text-white">
                  <div className="w-8 h-8 rounded-full bg-gray-300 overflow-hidden">
                    <img
                      alt="Avatar da Cliente Indecisa no WhatsApp"
                      className="w-full h-full object-cover"
                      src="/images/step01-hero-cliente-indecisa.webp"
                      fetchPriority="high"
                      loading="eager"
                      decoding="sync"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-bold">Cliente Indecisa</p>
                    <p className="text-xs opacity-80">
                      visto por último hoje às 14:30
                    </p>
                  </div>
                </div>
                <div
                  className="bg-[#ECE5DD] p-4 h-64 flex flex-col gap-3 overflow-hidden"
                >
                  <div className="self-start bg-white p-2 rounded-lg rounded-tl-none shadow-sm max-w-[80%]">
                    <p className="text-sm text-gray-800">
                      Oi, quanto tá o alongamento?
                    </p>
                    <span className="text-[10px] text-gray-400 block text-right mt-1">
                      14:28
                    </span>
                  </div>
                  <div className="self-end bg-[#DCF8C6] p-2 rounded-lg rounded-tr-none shadow-sm max-w-[80%]">
                    <p className="text-sm text-gray-800">
                      Oi flor! Está R$ 120,00 com decoração inclusa 🥰
                    </p>
                    <span className="text-[10px] text-gray-500 block text-right mt-1 flex items-center justify-end gap-1">
                      14:29
                      <CheckCheck className="w-3 h-3 text-blue-400" />
                    </span>
                  </div>
                  <div className="self-start bg-white p-2 rounded-lg rounded-tl-none shadow-sm max-w-[80%]">
                    <p className="text-sm text-gray-800">
                      Nossa... a menina aqui do lado faz por 40. Vou ver e te
                      falo.
                    </p>
                    <span className="text-[10px] text-gray-400 block text-right mt-1">
                      14:30
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <h2 className="text-2xl md:text-4xl font-bold text-zinc-900">
            Qual a Diferença Entre Elas?
          </h2>
        </div>

        <div className="inline-block text-left bg-zinc-50 px-6 py-5 md:px-8 md:py-6 rounded-2xl border border-zinc-100 max-w-lg">
          <div className="space-y-2 text-base md:text-lg text-zinc-400 mb-5">
            <p className="flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 shrink-0 rounded-full bg-red-400"></span>
              Não é talento.
            </p>
            <p className="flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 shrink-0 rounded-full bg-red-400"></span>
              Não é sorte.
            </p>
            <p className="flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 shrink-0 rounded-full bg-red-400"></span>
              Não é Instagram grande.
            </p>
          </div>

          <p
            className="text-lg md:text-xl text-zinc-800 leading-relaxed"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            É sobre{" "}
            <span className="font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded">
              ONDE
            </span>{" "}
            você vende seu tempo, não{" "}
            <span className="font-bold text-red-600 bg-red-50 px-1.5 py-0.5 rounded">
              QUANTO
            </span>{" "}
            você cobra.
          </p>
        </div>

        {/* Botão Curioso */}
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          onClick={() =>
            document
              .getElementById("oferta-lp2")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 uppercase tracking-wide text-sm md:text-base animate-pulse-slow"
        >
          QUERO DESCOBRIR A DIFERENÇA
        </motion.button>
      </motion.div>
    </section>
  );
};
