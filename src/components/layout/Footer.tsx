"use client";

import React from "react";
import { Container } from "./Container";
import { cn } from "@/lib/utils";

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-surface-section border-t border-border-subtle py-12 md:py-16">
            <Container>
                <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-12 items-start">
                    {/* Brand */}
                    <div className="space-y-4">
                        <h4 className="font-bold text-xl text-action-strong tracking-wide">
                            Nail Designer Profissional
                        </h4>
                        <p className="text-sm text-text-secondary leading-relaxed max-w-xs">
                            Transformando iniciantes em profissionais de elite.
                            Método validado por mais de 48 mil alunas.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h5 className="font-bold text-text-primary mb-4 text-sm uppercase tracking-wider">Acesso Rápido</h5>
                        <ul className="space-y-3 text-sm text-text-secondary">
                            <li><a href="#modulos" className="hover:text-action-primary transition-colors duration-200">Módulos do Curso</a></li>
                            <li><a href="#garantia" className="hover:text-action-primary transition-colors duration-200">Garantia de 7 Dias</a></li>
                            <li><a href="#faq" className="hover:text-action-primary transition-colors duration-200">Perguntas Frequentes</a></li>
                            <li><a href="#" className="hover:text-action-primary transition-colors duration-200 font-medium text-action-strong">Área da Aluna</a></li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h5 className="font-bold text-text-primary mb-4 text-sm uppercase tracking-wider">Legal</h5>
                        <ul className="space-y-3 text-sm text-text-secondary">
                            <li><a href="#" className="hover:text-action-primary transition-colors duration-200">Termos de Uso</a></li>
                            <li><a href="#" className="hover:text-action-primary transition-colors duration-200">Políticas de Privacidade</a></li>
                            <li><span className="text-text-muted cursor-default border px-2 py-1 rounded text-xs bg-white">CNPJ: 00.000.000/0001-00</span></li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="pt-8 border-t border-border-subtle/50 text-center space-y-2">
                    <p className="text-xs text-text-muted">
                        © {currentYear} Nail Designer Profissional. Todos os direitos reservados.
                    </p>
                    <p className="text-[10px] text-text-muted/60 max-w-lg mx-auto leading-normal">
                        Este site não faz parte do site do Facebook ou Facebook Inc. Além disso, este site NÃO é endossado pelo Facebook de nenhuma maneira. FACEBOOK é uma marca comercial da FACEBOOK, Inc.
                    </p>
                </div>
            </Container>
        </footer>
    );
};
