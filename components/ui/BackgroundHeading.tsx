import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface BackgroundHeadingProps {
  text: string;
  className?: string;
}

export const BackgroundHeading: React.FC<BackgroundHeadingProps> = ({
  text,
  className,
}) => {
  // Criamos uma string repetida para garantir que cubra telas largas
  // "WALL OF LOVE • " repetido 4x deve ser suficiente dado o tamanho da fonte
  const content = Array(4).fill(text).join(" • ");

  return (
    <div
      className={cn(
        "absolute inset-0 w-full h-full flex items-start md:items-center overflow-hidden pointer-events-none select-none z-0 pt-4 md:pt-0",
        className,
      )}
      aria-hidden="true"
    >
      <motion.div
        className="whitespace-nowrap flex flex-nowrap items-center"
        animate={{ x: ["0%", "-50%"] }} // Move metade do conteúdo duplicado
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 40, // Velocidade lenta e elegante
        }}
      >
        {/* Renderizamos o conteúdo duas vezes para o loop perfeito */}
        <span
          className="text-[6rem] md:text-[10rem] lg:text-[13rem] font-black uppercase text-zinc-900/[0.03] leading-none tracking-tighter shrink-0 px-8"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {content} •
        </span>
        <span
          className="text-[6rem] md:text-[10rem] lg:text-[13rem] font-black uppercase text-zinc-900/[0.03] leading-none tracking-tighter shrink-0 px-8"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {content} •
        </span>
      </motion.div>
    </div>
  );
};
