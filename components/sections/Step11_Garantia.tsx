import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, CheckCircle2 } from "lucide-react";

export const Garantia: React.FC = () => {
  return (
    <section id="garantia-lp2" className="bg-white py-16 md:py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 md:p-8"
        >
          {/* Imagem topo — mesma proporção do popup exit intent */}
          <div className="w-full rounded-xl overflow-hidden mb-6">
            <img
              src="/images/step11-garantia-confianca.webp"
              alt="Mulher brasileira sorrindo em frente ao notebook com expressão tranquila e confiante, ambiente doméstico, luz suave"
              loading="lazy"
              decoding="async"
              className="w-full h-48 object-cover"
            />
          </div>

          {/* Conteúdo */}
          <div>
            <h3 className="text-base md:text-lg font-bold text-zinc-900 uppercase tracking-wide mb-3 text-center">
              Garantia Incondicional de 7 Dias
            </h3>
            <p className="text-zinc-600 text-sm md:text-base leading-relaxed mb-4">
              Se por <strong>QUALQUER motivo</strong> você não gostar do
              curso, basta solicitar o reembolso em até 7 dias e devolvemos{" "}
              <strong>100% do seu dinheiro</strong>. Sem perguntas, sem
              burocracia.
            </p>

            <div className="space-y-2 mb-4">
              {[
                "Risco ZERO para você",
                "Processado pela Hotmart (plataforma segura)",
                "Reembolso com 1 clique",
                "Acesso imediato após a compra",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 text-sm text-zinc-700"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <p className="text-sm font-bold text-emerald-700 text-center">
              O risco é todo meu. Você só tem a ganhar.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
