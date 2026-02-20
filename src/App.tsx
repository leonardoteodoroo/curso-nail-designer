import React from "react";
import { DevTag } from "./components/DevTag";

// ── Seções principais ──────────────────────────────────────────────────────
import { Hero } from "../components/sections/Hero";
import { DorDaManicure } from "../components/sections/DorDaManicure";
import { TimelineNailDesigner } from "../components/sections/TimelineNailDesigner";
import { HistoriaMariana } from "../components/sections/HistoriaMariana";
import { AntiClimax } from "../components/sections/AntiClimax";
import { Modulos } from "../components/sections/Modulos";
import { CarouselStitch } from "../components/sections/CarouselStitch";
import { WallOfLove } from "../components/sections/WallOfLove";
import { PriceSpoiler } from "../components/sections/PriceSpoiler";
import { Garantia } from "../components/sections/Garantia";
import { FAQ } from "../components/sections/FAQ";
import { FinalOfferStitch } from "../components/sections/FinalOfferStitch";
import { ExitIntent } from "../components/sections/ExitIntent";

// ── Novos componentes ────────────────────────────────────────────────────
import { CertificatesStepperStitch } from "../components/sections/CertificatesStepper2";

// ── Componentes UI / Utilitários ───────────────────────────────────────────
import { BackgroundHeading } from "../components/sections/BackgroundHeading";
import { BlurText } from "../components/sections/BlurText";
import { StaggerText } from "../components/sections/StaggerText";
import { GlassCard } from "../components/sections/GlassCard";
import { ClinicalCard } from "../components/sections/ClinicalCard";

// ── Tipo para cada entrada do preview ─────────────────────────────────────
interface PreviewEntry {
    tag: string;
    component: React.ReactNode;
}

const sections: PreviewEntry[] = [
    { tag: "#hero", component: <Hero /> },
    { tag: "#dor-da-manicure", component: <DorDaManicure /> },
    { tag: "#timeline", component: <TimelineNailDesigner /> },
    { tag: "#historia-mariana", component: <HistoriaMariana /> },
    { tag: "#anti-climax", component: <AntiClimax /> },
    { tag: "#carousel-stitch", component: <CarouselStitch /> },
    { tag: "#modulos", component: <Modulos /> },
    { tag: "#certificates-stepper", component: <CertificatesStepperStitch /> },
    { tag: "#wall-of-love", component: <WallOfLove /> },
    { tag: "#price-spoiler", component: <PriceSpoiler /> },
    { tag: "#garantia", component: <Garantia /> },
    { tag: "#faq", component: <FAQ /> },
    { tag: "#final-offer", component: <FinalOfferStitch /> },
    { tag: "#exit-intent", component: <ExitIntent /> },
];

// Componentes UI exibidos com demonstração mínima
const uiComponents: PreviewEntry[] = [
    {
        tag: "#bg-heading",
        component: (
            <div className="py-16 px-8 bg-white">
                <BackgroundHeading text="Exemplo BackgroundHeading" />
            </div>
        ),
    },
    {
        tag: "#blur-text",
        component: (
            <div className="py-16 px-8 bg-white flex flex-col gap-4 items-center">
                <BlurText text="Exemplo BlurText — Animação de Entrada" className="text-3xl" />
            </div>
        ),
    },
    {
        tag: "#stagger-text",
        component: (
            <div className="py-16 px-8 bg-white flex flex-col gap-4 items-center">
                <StaggerText text="Exemplo StaggerText — Letras em Cascata" className="text-3xl" />
            </div>
        ),
    },
    {
        tag: "#glass-card",
        component: (
            <div className="py-16 px-8 bg-gradient-to-br from-emerald-100 to-teal-200 flex gap-4 flex-wrap justify-center">
                <GlassCard className="p-8 max-w-xs">
                    <p className="text-zinc-800 font-semibold">Exemplo GlassCard</p>
                    <p className="text-zinc-500 text-sm mt-1">Efeito glassmorphism</p>
                </GlassCard>
            </div>
        ),
    },
    {
        tag: "#clinical-card",
        component: (
            <div className="py-16 px-8 bg-zinc-50 flex gap-4 flex-wrap justify-center">
                <ClinicalCard className="p-8 max-w-xs">
                    <p className="text-zinc-800 font-semibold">Exemplo ClinicalCard</p>
                    <p className="text-zinc-500 text-sm mt-1">Card com borda e sombra clean</p>
                </ClinicalCard>
                <ClinicalCard hoverEffect className="p-8 max-w-xs">
                    <p className="text-zinc-800 font-semibold">ClinicalCard + hoverEffect</p>
                    <p className="text-zinc-500 text-sm mt-1">Passe o mouse para ver</p>
                </ClinicalCard>
            </div>
        ),
    },
];

const allEntries = [...sections, ...uiComponents];

export default function App() {
    return (
        <div>
            {/* Barra de título do preview */}
            <div
                style={{
                    position: "sticky",
                    top: 0,
                    zIndex: 99999,
                    background: "rgba(15, 23, 42, 0.95)",
                    backdropFilter: "blur(8px)",
                    borderBottom: "1px solid rgba(163, 230, 53, 0.2)",
                    padding: "8px 16px",
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                }}
            >
                <span
                    style={{
                        color: "#a3e635",
                        fontFamily: "'Courier New', monospace",
                        fontSize: "12px",
                        fontWeight: 700,
                        letterSpacing: "0.08em",
                    }}
                >
                    ◉ DEV PREVIEW
                </span>
                <span
                    style={{
                        color: "rgba(255,255,255,0.4)",
                        fontFamily: "'Courier New', monospace",
                        fontSize: "11px",
                    }}
                >
                    Curso Nail Designer — {allEntries.length} fragmentos
                </span>
            </div>

            {/* Renderização de cada fragmento */}
            {allEntries.map(({ tag, component }) => (
                <div
                    key={tag}
                    style={{ position: "relative" }}
                >
                    <DevTag label={tag} />
                    {component}
                    {/* Divisor entre seções */}
                    <div
                        style={{
                            height: "2px",
                            background:
                                "linear-gradient(to right, transparent, rgba(163,230,53,0.3), transparent)",
                        }}
                    />
                </div>
            ))}
        </div>
    );
}
