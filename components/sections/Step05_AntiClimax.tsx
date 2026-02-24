import React from "react";
import { motion } from "framer-motion";
import { AlertTriangle, CheckCircle2 } from "lucide-react";
import { BlurText } from "../ui/BlurText";

const objections = [
  '"E se EU não conseguir?"',
  '"Eu não tenho talento pra isso."',
  '"Será que funciona pra mim que moro no interior?"',
  '"E se eu comprar e me arrepender?"',
];

const requirements = [
  "Assistir as aulas (com calma, no seu ritmo)",
  "Praticar (muito, mas com orientação)",
  "Seguir o passo a passo (sem pular etapas)",
  "Pedir ajuda quando travar",
  "Acreditar que você MERECE mais",
];

export const AntiClimax: React.FC = () => {
  return (
    <section id="anti-climax-lp2" className="bg-white py-16 md:py-24 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Headline */}
        <BlurText
          text="Daí... você pensa que"
          className="text-3xl md:text-5xl text-center mb-10"
        />

        {/* Objeções */}
        <div className="space-y-4 mb-10 max-w-2xl mx-auto">
          {objections.map((obj, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex"
            >
              <div className="w-1 bg-rose-400 shrink-0 rounded-full" />
              <div className="bg-zinc-50 rounded-r-xl p-4 md:p-5 flex-1">
                <p
                  className="text-zinc-700 text-lg font-medium italic"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {obj}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empatia */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 space-y-6"
        >
          <motion.div
            className="flex flex-wrap items-center justify-center gap-x-2 text-3xl md:text-5xl font-bold mb-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              visible: { transition: { staggerChildren: 0.3 } },
              hidden: {},
            }}
          >
            <motion.span
              variants={{
                hidden: { opacity: 0, filter: "blur(10px)", y: 10 },
                visible: {
                  opacity: 1,
                  filter: "blur(0px)",
                  y: 0,
                  transition: { duration: 0.8, ease: "easeOut" },
                },
              }}
              className="text-zinc-800"
            >
              Olha...
            </motion.span>
            <motion.span
              variants={{
                hidden: { opacity: 0, filter: "blur(10px)", scale: 0.9 },
                visible: {
                  opacity: 1,
                  filter: "blur(0px)",
                  scale: 1,
                  transition: { duration: 0.8, delay: 0.5, ease: "easeOut" },
                },
              }}
              className="text-rose-600 italic"
            >
              EU entendo.
            </motion.span>
          </motion.div>

          <div className="text-lg text-zinc-600 leading-relaxed max-w-2xl mx-auto space-y-4">
            <p>
              Você já foi enganada antes. Já comprou curso que prometeu "faturar
              5k em 30 dias" e não faturou nem R$ 500.
            </p>
            <p>
              Já pagou presencial caro que não serviu de nada. Já viu YouTube
              até cansar e continuou perdida.
            </p>
            <p className="font-semibold text-zinc-900 bg-zinc-100 py-2 rounded-lg">
              Então deixa eu ser MUITO honesta contigo.
            </p>
          </div>
        </motion.div>

        {/* Callout "Verdade Nua e Crua" */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-amber-50 border border-amber-200 rounded-2xl p-6 md:p-8 mb-12 max-w-2xl mx-auto"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
              <AlertTriangle className="w-5 h-5 text-amber-600" />
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-amber-800">
              Verdade Nua e Crua
            </span>
          </div>
          <div className="space-y-2 text-zinc-700">
            <p className="font-medium italic">Você NÃO vai...</p>
            <ul className="space-y-1.5 text-sm">
              <li>• Ficar rica do dia pra noite</li>
              <li>• Acordar com as unhas perfeitas sem praticar</li>
              <li>• Ter resultado assistindo e não fazendo</li>
              <li>• Conseguir sem dedicação real</li>
            </ul>
          </div>
        </motion.div>
        {/* DEV#placeholder-step05
            Prompt Imagen 3:
            "Candid portrait of a Brazilian woman in her 30s sitting at a kitchen table studying on
            her smartphone, open notebook beside her, afternoon natural window light, focused expression,
            casual home clothes, no makeup, shot on iPhone"
            negative: stock photo, professional model, studio lighting, clean background
            Aspect ratio: 3:4
        */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center my-8"
        >
          <img
            src="/images/step05-mulher-estudando-cel.webp"
            alt="Mulher brasileira em casa assistindo aulas no celular com caderno aberto ao lado, concentrada, luz de dia"
            loading="lazy"
            decoding="async"
            className="w-full max-w-2xl rounded-2xl object-cover aspect-[16/9]"
          />
        </motion.div>

        {/* Lista "Você vai precisar" */}
        <div className="max-w-2xl mx-auto mb-12">
          <h3 className="text-xl font-bold text-zinc-900 text-center mb-6">
            Mas se você estiver disposta a fazer o trabalho:
          </h3>
          <div className="space-y-3">
            {requirements.map((req, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-center gap-3"
              >
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                <span className="text-zinc-700">{req}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bloco "A Promessa" */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-emerald-50 rounded-2xl p-8 md:p-10 border border-emerald-200 text-center max-w-2xl mx-auto mb-10"
        >
          <h3
            className="text-2xl md:text-3xl font-bold text-zinc-900 mb-3"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Se você FIZER o trabalho...
          </h3>
          <p className="text-4xl md:text-5xl font-black text-emerald-600 mb-3">
            + de 48 MIL mulheres
          </p>
          <p className="text-zinc-600 text-lg">já provaram que funciona.</p>
          <p className="text-lg font-bold text-zinc-800 mt-4">
            Não é "milagre". <span className="text-emerald-600">É método.</span>
          </p>
          <p className="text-base text-zinc-700 mt-3">
            Eu te garanto que você vai ter{" "}
            <span className="underline decoration-emerald-500 decoration-2 underline-offset-2 font-semibold">
              resultados
            </span>
            .
          </p>
        </motion.div>
      </div>
    </section>
  );
};
