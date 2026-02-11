import React from "react";
import { Button } from "@/components/ui/Button";
import { ImpactBox } from "@/components/ui/ImpactBox";
import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/utils";

export default function DesignSystemPage() {
    return (
        <div className="min-h-screen bg-surface-page p-8 md:p-16 space-y-16">
            <header className="space-y-4">
                <h1 className="text-4xl font-bold bg-gradient-brand bg-clip-text text-transparent">
                    Design System Nail Designer
                </h1>
                <p className="text-text-secondary text-lg max-w-2xl">
                    Documentação visual dos tokens e componentes base do projeto.
                    Baseado na filosofia "Licensed to Wow".
                </p>
            </header>

            {/* CORES */}
            <section className="space-y-6">
                <h2 className="text-2xl font-bold border-b border-border-subtle pb-2">1. Cores & Paleta</h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <ColorSwatch name="Action Primary" token="bg-action-primary" hex="#E8B4B8" />
                    <ColorSwatch name="Action Strong" token="bg-action-strong" hex="#D4AF37" />
                    <ColorSwatch name="Surface Page" token="bg-surface-page" hex="#FAF8F6" border />
                    <ColorSwatch name="Surface Section" token="bg-surface-section" hex="#FFF5F7" />
                    <ColorSwatch name="Status Success" token="bg-status-success" hex="#10B981" />
                    <ColorSwatch name="Status Error" token="bg-status-error" hex="#EF4444" />
                </div>

                <div className="space-y-2">
                    <h3 className="font-semibold">Gradientes</h3>
                    <div className="h-16 w-full rounded-xl bg-gradient-cta flex items-center justify-center text-white font-bold shadow-cta">
                        Gradient CTA (Brand)
                    </div>
                </div>
            </section>

            {/* TIPOGRAFIA */}
            <section className="space-y-6">
                <h2 className="text-2xl font-bold border-b border-border-subtle pb-2">2. Tipografia (Inter)</h2>

                <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div className="space-y-2">
                            <p className="text-display text-6xl font-bold">Display 6XL</p>
                            <p className="text-text-muted">Inter Bold - 56px</p>
                        </div>
                        <div className="space-y-2">
                            <p className="text-4xl font-bold">Heading 4XL</p>
                            <p className="text-text-muted">Inter Bold - 36px</p>
                        </div>
                        <div className="space-y-2">
                            <p className="text-2xl font-bold">Heading 2XL</p>
                            <p className="text-text-muted">Inter Bold - 24px</p>
                        </div>
                        <div className="space-y-2">
                            <p className="text-base text-text-primary leading-relaxed">
                                <strong>Body (Base)</strong><br />
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Nossa metodologia foca na técnica segura e no acabamento natural.
                                (Line-height Relaxed 1.65)
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* COMPONENTES */}
            <section className="space-y-6">
                <h2 className="text-2xl font-bold border-b border-border-subtle pb-2">3. Componentes</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Botões */}
                    <div className="space-y-4">
                        <h3 className="font-semibold text-lg">Botões</h3>
                        <div className="flex flex-wrap gap-4 items-center">
                            <Button variant="primary">Primary Action</Button>
                            <Button variant="cta">QUERO VAGA AGORA</Button>
                            <Button variant="secondary">Secondary</Button>
                            <Button disabled>Disabled</Button>
                        </div>
                    </div>

                    {/* Cards */}
                    <div className="space-y-4">
                        <h3 className="font-semibold text-lg">Cards</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Card>
                                <h4 className="font-bold mb-2">Card Simples</h4>
                                <p className="text-sm text-text-secondary">Conteúdo do card padrão com sombra suave.</p>
                            </Card>
                            <Card hoverEffect>
                                <h4 className="font-bold mb-2">Card Hover</h4>
                                <p className="text-sm text-text-secondary">Passe o mouse para ver a elevação.</p>
                            </Card>
                        </div>
                    </div>
                </div>

                {/* Impact Box */}
                <div className="space-y-4">
                    <h3 className="font-semibold text-lg">Impact Box (Destaques)</h3>
                    <ImpactBox>
                        <h4 className="text-xl font-bold text-action-strong mb-2">Depoimento da Camila</h4>
                        <p className="text-text-secondary italic">
                            "Antes eu demorava 4 horas pra fazer uma unha e ainda ficava torta.
                            Com o método, faço em 1h30 com acabamento perfeito."
                        </p>
                    </ImpactBox>
                </div>
            </section>
        </div>
    );
}

function ColorSwatch({ name, token, hex, border }: { name: string, token: string, hex: string, border?: boolean }) {
    return (
        <div className="flex items-center space-x-3">
            <div className={cn("w-16 h-16 rounded-lg shadow-sm", token, border && "border border-border-default")}></div>
            <div>
                <p className="font-semibold text-sm">{name}</p>
                <p className="text-xs text-text-muted">{hex}</p>
                <code className="text-[10px] bg-gray-100 px-1 rounded text-gray-500">{token}</code>
            </div>
        </div>
    )
}
