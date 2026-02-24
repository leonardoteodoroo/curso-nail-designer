import React from "react";

export const Step16_Footer: React.FC = () => {
  return (
    <footer id="footer" data-section="footer" className="bg-[#111111] text-[#a1a1aa] py-6 px-4 border-t border-[#27272a] font-sans text-xs flex flex-col items-center text-center">
      <div className="max-w-4xl w-full flex flex-col items-center gap-4">
        {/* DEV#disclaimer-transparencia */}
        <div className="text-[9px] sm:text-[10px] leading-relaxed opacity-60 space-y-2 font-normal text-balance">
          <p>
            Este site não é afiliado ao Facebook. Ao sair do Facebook, a
            responsabilidade pelo conteúdo e pela oferta é deste site. Este site
            participa de programa de afiliados e pode receber comissão por
            compras feitas por este link, sem custo extra para você. Ao clicar
            em um dos botões desta página, você será redirecionado para o
            checkout da Hotmart para concluir a compra com segurança. Resultados
            e ganhos variam e dependem de fatores individuais (como dedicação e
            contexto). Não há garantia de renda.
          </p>
        </div>

        {/* Linha separadora ultra-discreta */}
        <div className="w-12 h-px bg-[#27272a] my-1"></div>

        {/* DEV#company-info */}
        <div className="flex flex-col items-center gap-0.5 opacity-80 text-[10px] sm:text-xs">
          <p className="font-bold text-zinc-300">
            Escola Nail Designer / Sempre na Moda
          </p>
          <p className="max-w-[280px] sm:max-w-none">
            Centro estratégico | Rua: 14, 516 - Jardim Goiás - Goiânia-GO |
            CNPJ: 41.024.752/0001-70
          </p>
        </div>

        {/* DEV#support-contact */}
        <div className="flex flex-col items-center gap-0.5 text-[10px] sm:text-xs">
          <p className="font-medium text-zinc-300">
            Suporte WhatsApp:{" "}
            <span className="text-emerald-500/80">
              (62) 99991-8702
            </span>
          </p>
          <p className="font-medium text-zinc-300">
            E-mail:{" "}
            <span className="text-emerald-500/80">
              sac@semprenamoda.com.br
            </span>
          </p>
          <p className="text-[9px] opacity-60 mt-1 italic">
            Atendimento: Seg a Sex: 09h às 20h | Sáb: 10h às 14h.
          </p>
        </div>

        {/* DEV#legal-links */}
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-[10px] font-semibold uppercase tracking-tighter opacity-70 pt-2 border-t border-[#27272a] w-full mt-2">
          <a
            href="https://semprenamoda.com.br/pages/termos-de-servico"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            Termos de Serviço
          </a>
          <span className="hidden sm:inline">|</span>
          <a
            href="https://semprenamoda.com.br/pages/politica-de-cookies-seguranca-e-privacidade"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            Privacidade
          </a>
          <span className="hidden sm:inline">|</span>
          <a
            href="https://semprenamoda.com.br/pages/aviso-legal"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            Aviso Legal
          </a>
          <span className="hidden sm:inline">|</span>
          <a
            href="https://semprenamoda.com.br/pages/sobre-nos"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            Sobre Nós
          </a>
          <span className="hidden sm:inline">|</span>
          <a
            href="https://semprenamoda.com.br/blogs/todos-os-posts"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            Blog
          </a>
        </div>

        <p className="text-[9px] opacity-40">
          Copyright © {new Date().getFullYear()} Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};
