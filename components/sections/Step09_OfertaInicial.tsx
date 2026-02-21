import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, Sparkles, ArrowRight } from "lucide-react";

export const OfertaInicial = () => {
  return (
    <section
      id="oferta-inicial"
      className="pt-20 pb-0 md:pt-32 md:pb-0 bg-white relative overflow-hidden"
    >
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <h3
            className="text-2xl font-bold text-zinc-900 text-center mb-8 flex items-center justify-center gap-3"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            📋 Tudo Que Você Recebe:
          </h3>
          <div className="space-y-1 mb-2">
            {[
              {
                item: "Curso Nail Designer Completo (130+ aulas)",
                value: "R$ 497",
                type: "price",
              },
              {
                item: "Bônus 1: Extensão de Cílios",
                value: "R$ 297",
                type: "price",
              },
              {
                item: "Bônus 2: Manicure & Pedicure Avançada",
                value: "R$ 197",
                type: "price",
              },
              {
                item: "Bônus 3: Cutilagem em Laranja",
                value: "R$ 147",
                type: "price",
              },
              {
                item: "Bônus 4: Polygel Iniciante",
                value: "R$ 197",
                type: "price",
              },
              {
                item: "Bônus 5: Manicure Masculina",
                value: "R$ 147",
                type: "price",
              },
              {
                item: "Bônus 6: Ferramentas Prontas",
                value: "Inestimável",
                type: "highlight",
              },
              {
                item: "Bônus 7: Sorteio Mensal Kit Profissional",
                value: "Inestimável",
                type: "highlight",
              },
              {
                item: "25 Certificados Profissionais",
                value: "Incluso",
                type: "included",
              },
              {
                item: "Suporte via WhatsApp",
                value: "Incluso",
                type: "included",
              },
              {
                item: "Comunidade Privada",
                value: "Incluso",
                type: "included",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center justify-between py-3 border-b border-zinc-200"
              >
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-zinc-400 shrink-0" />
                  <span className="text-sm md:text-base text-zinc-800 font-medium">
                    {item.item}
                  </span>
                </div>
                <span
                  className={`text-sm md:text-base font-bold whitespace-nowrap ${item.type === "price"
                    ? "text-amber-400/70 line-through"
                    : item.type === "highlight"
                      ? "text-amber-500"
                      : "text-emerald-500"
                    }`}
                >
                  {item.value}
                </span>
              </motion.div>
            ))}

            {/* Valor Total */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="flex flex-col items-center text-center justify-center pt-8 pb-0 mt-2 px-4"
            >
              <h4 className="text-xl md:text-2xl font-bold text-zinc-800 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Tudo isso nós comercializamos por <span className="block text-4xl md:text-6xl text-emerald-700 font-black mt-3 sm:mt-4">R$ 497,00</span>
              </h4>
              <p className="text-sm md:text-base text-zinc-600 mb-3 max-w-xl mx-auto leading-relaxed">
                E vale cada centavo. Mas eu conheço a realidade de quem está começando ou querendo crescer nessa área agora. O seu maior obstáculo não é apenas aprender a técnica: <strong>é montar o kit da mesa.</strong>
              </p>
              <p className="text-sm md:text-base text-zinc-600 mb-4 max-w-xl mx-auto leading-relaxed">
                Eu sei que se eu cobrar R$ 497 hoje, talvez falte orçamento para os seus materiais no final do mês.
                Sendo sincera, <strong className="text-emerald-700">eu só ganho de verdade quando você vira um caso de sucesso e me indica.</strong>
              </p>
            </motion.div>
          </div>

          {/* Placeholder para a próxima seção de oferta a ser embutida aqui ou abaixo dela */}
        </motion.div>
      </div>
    </section>
  );
};
