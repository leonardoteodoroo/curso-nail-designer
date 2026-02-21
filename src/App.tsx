import React from "react";
import { DevTag } from "./components/DevTag";

// ── Seções principais ──────────────────────────────────────────────────────
import { Hero } from "../components/sections/Step01_Hero";

// Lazy loading das seções abaixo da dobra
const DorDaManicure = React.lazy(() => import("../components/sections/Step02_DorDaManicure").then(module => ({ default: module.DorDaManicure })));
const TimelineNailDesigner = React.lazy(() => import("../components/sections/Step03_TimelineNailDesigner").then(module => ({ default: module.TimelineNailDesigner })));
const HistoriaMariana = React.lazy(() => import("../components/sections/Step04_HistoriaMariana").then(module => ({ default: module.HistoriaMariana })));
const AntiClimax = React.lazy(() => import("../components/sections/Step05_AntiClimax").then(module => ({ default: module.AntiClimax })));
const Modulos = React.lazy(() => import("../components/sections/Step07_Modulos").then(module => ({ default: module.Modulos })));
const CarouselStitch = React.lazy(() => import("../components/sections/Step06_CarouselStitch").then(module => ({ default: module.CarouselStitch })));
const WallOfLove = React.lazy(() => import("../components/sections/Step09_WallOfLove").then(module => ({ default: module.WallOfLove })));
const PriceSpoiler = React.lazy(() => import("../components/sections/Step10_PriceSpoiler").then(module => ({ default: module.PriceSpoiler })));
const Garantia = React.lazy(() => import("../components/sections/Step12_Garantia").then(module => ({ default: module.Garantia })));
const FAQ = React.lazy(() => import("../components/sections/Step13_FAQ").then(module => ({ default: module.FAQ })));
const FinalOfferStitch = React.lazy(() => import("../components/sections/Step15_FinalOfferStitch").then(module => ({ default: module.FinalOfferStitch })));
const ExitIntent = React.lazy(() => import("../components/sections/Step16_ExitIntent").then(module => ({ default: module.ExitIntent })));

// ── Novos componentes ────────────────────────────────────────────────────
const CertificatesStepperStitch = React.lazy(() => import("../components/sections/Step08_CertificatesStepper2").then(module => ({ default: module.CertificatesStepperStitch })));
const OfertaInicial = React.lazy(() => import("../components/sections/Step14_OfertaInicial").then(module => ({ default: module.OfertaInicial })));
const PriceSpoilerV2 = React.lazy(() => import("../components/sections/Step11_PriceSpoilerV2").then(module => ({ default: module.PriceSpoilerV2 })));

// ── Componentes UI / Utilitários ───────────────────────────────────────────
const BackgroundHeading = React.lazy(() => import("../components/sections/BackgroundHeading").then(module => ({ default: module.BackgroundHeading })));
const BlurText = React.lazy(() => import("../components/sections/BlurText").then(module => ({ default: module.BlurText })));
const StaggerText = React.lazy(() => import("../components/sections/StaggerText").then(module => ({ default: module.StaggerText })));
const GlassCard = React.lazy(() => import("../components/sections/GlassCard").then(module => ({ default: module.GlassCard })));
const ClinicalCard = React.lazy(() => import("../components/sections/ClinicalCard").then(module => ({ default: module.ClinicalCard })));

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
    { tag: "#price-spoiler-v2", component: <PriceSpoilerV2 /> },
    { tag: "#garantia", component: <Garantia /> },
    { tag: "#faq", component: <FAQ /> },
    { tag: "#oferta-inicial", component: <OfertaInicial /> },
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
                    <React.Suspense fallback={<div className="min-h-[200px] flex items-center justify-center bg-zinc-900/50"><div className="w-8 h-8 rounded-full border-4 border-lime-500 border-t-transparent animate-spin"></div></div>}>
                        {component}
                    </React.Suspense>
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
