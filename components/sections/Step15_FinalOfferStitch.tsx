import React from "react";
import {
  Package2,
  CheckCircle,
  ArrowRight,
  Lock,
  ShieldCheck,
  Zap,
} from "lucide-react";

export const FinalOfferStitch: React.FC = () => {
  return (
    <section className="w-full py-16 px-4 md:px-8 lg:px-12 bg-zinc-50 font-display">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Part 1: Recap Stack (Left Side) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white rounded-2xl border border-zinc-200 p-8 shadow-sm">
              <h3 className="text-xl font-bold text-zinc-900 mb-6 flex items-center gap-2">
                <Package2 className="text-zinc-400" size={24} />
                Resumo do que você leva hoje:
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-[#10b77f] shrink-0" size={24} />
                  <div className="flex-1 flex justify-between border-b border-dashed border-zinc-200 pb-2">
                    <span className="text-zinc-700 font-medium">
                      Acesso Vitalício + Atualizações Futuras
                    </span>
                    <span className="text-zinc-400 line-through text-sm">
                      R$ 697,00
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-[#10b77f] shrink-0" size={24} />
                  <div className="flex-1 flex justify-between border-b border-dashed border-zinc-200 pb-2">
                    <span className="text-zinc-700 font-medium">
                      25 Certificados Profissionais
                    </span>
                    <span className="text-zinc-400 line-through text-sm">
                      R$ 250,00
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-[#10b77f] shrink-0" size={24} />
                  <div className="flex-1 flex justify-between border-b border-dashed border-zinc-200 pb-2">
                    <span className="text-zinc-700 font-medium">
                      Curso de Extensão de Cílios
                    </span>
                    <span className="text-zinc-400 line-through text-sm">
                      R$ 297,00
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-[#10b77f] shrink-0" size={24} />
                  <div className="flex-1 flex justify-between border-b border-dashed border-zinc-200 pb-2">
                    <span className="text-zinc-700 font-medium">
                      Curso Manicure & Pedicure
                    </span>
                    <span className="text-zinc-400 line-through text-sm">
                      R$ 197,00
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-[#10b77f] shrink-0" size={24} />
                  <div className="flex-1 flex justify-between border-b border-dashed border-zinc-200 pb-2">
                    <span className="text-zinc-700 font-medium">
                      Kit de Documentos & Fichas
                    </span>
                    <span className="text-zinc-400 line-through text-sm">
                      R$ 97,00
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-[#10b77f] shrink-0" size={24} />
                  <div className="flex-1 flex justify-between pb-2">
                    <span className="text-zinc-700 font-medium">
                      Participação Sorteio Mensal
                    </span>
                    <span className="text-zinc-400 line-through text-sm">
                      Inestimável
                    </span>
                  </div>
                </li>
              </ul>
              <div className="mt-8 pt-6 border-t border-zinc-200 flex justify-between items-center bg-zinc-50 -mx-8 -mb-8 p-8 rounded-b-2xl">
                <span className="text-lg font-bold text-zinc-500">
                  Valor Total Real:
                </span>
                <span className="text-2xl font-black text-zinc-400 line-through decoration-red-500/50 decoration-2">
                  R$ 1.538,00+
                </span>
              </div>
            </div>
          </div>

          {/* Part 2: Final Price Card (Right Side / Sticky) */}
          <div className="lg:col-span-5 lg:sticky lg:top-8">
            <div className="bg-white rounded-2xl shadow-xl border-2 border-[#10b77f] overflow-hidden relative">
              {/* Discount Badge */}
              <div className="absolute top-0 right-0 bg-[#10b77f] text-white text-xs font-bold px-3 py-1 rounded-bl-lg z-10">
                -90% OFF
              </div>
              <div className="bg-emerald-50 p-4 text-center border-b border-emerald-100">
                <p className="text-emerald-800 font-bold text-sm tracking-wide uppercase">
                  Oferta por Tempo Limitado
                </p>
              </div>
              <div className="p-8 text-center space-y-6">
                <div className="space-y-1">
                  <p className="text-zinc-500 text-sm line-through">
                    De R$ 1.482,00 por apenas
                  </p>
                  <div className="flex items-center justify-center gap-1 text-zinc-900">
                    <span className="text-2xl font-medium">7x de</span>
                    <span className="text-6xl font-extrabold tracking-tighter text-[#10b77f]">
                      8,16
                    </span>
                  </div>
                  <p className="text-zinc-500 text-sm">ou R$ 49,90 à vista</p>
                </div>
                <button className="w-full group relative flex items-center justify-center gap-3 bg-gradient-to-r from-emerald-600 to-[#10b77f] text-white font-black text-lg py-4 px-6 rounded-xl shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:-translate-y-1 transition-all duration-200">
                  <div className="absolute inset-0 bg-white/20 rounded-xl animate-pulse"></div>
                  <span className="relative z-10">SIM! QUERO MINHA VAGA</span>
                  <ArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform" />
                </button>
                <div className="flex flex-wrap justify-center gap-4 text-xs text-zinc-500">
                  <div className="flex items-center gap-1">
                    <Lock className="text-zinc-400" size={16} />
                    Pagamento Seguro
                  </div>
                  <div className="flex items-center gap-1">
                    <ShieldCheck className="text-zinc-400" size={16} />7 Dias de
                    Garantia
                  </div>
                  <div className="flex items-center gap-1">
                    <Zap className="text-zinc-400" size={16} />
                    Acesso Imediato
                  </div>
                </div>
                {/* Payment Methods Image Placeholder */}
                <div className="pt-4 border-t border-zinc-100 opacity-60 grayscale hover:grayscale-0 transition-all">
                  <div className="flex justify-center gap-2">
                    <div className="h-6 w-10 bg-zinc-200 rounded flex items-center justify-center text-[8px] font-bold text-zinc-500">
                      VISA
                    </div>
                    <div className="h-6 w-10 bg-zinc-200 rounded flex items-center justify-center text-[8px] font-bold text-zinc-500">
                      MC
                    </div>
                    <div className="h-6 w-10 bg-zinc-200 rounded flex items-center justify-center text-[8px] font-bold text-zinc-500">
                      PIX
                    </div>
                    <div className="h-6 w-10 bg-zinc-200 rounded flex items-center justify-center text-[8px] font-bold text-zinc-500">
                      ELO
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Scarcity / Urgency */}
            <div className="mt-4 text-center">
              <p className="text-sm text-red-500 font-medium flex items-center justify-center gap-2">
                <Zap className="text-sm animate-pulse" size={16} />
                Essa oferta pode encerrar a qualquer momento.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
