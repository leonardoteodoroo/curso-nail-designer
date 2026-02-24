import React from "react";
import { DevTag } from "./components/DevTag";

// ── Seções principais ──────────────────────────────────────────────────────
import { Hero } from "../components/sections/Step01_Hero";

// Lazy loading das seções abaixo da dobra
const DorDaManicure = React.lazy(() =>
  import("../components/sections/Step02_DorDaManicure").then((module) => ({
    default: module.DorDaManicure,
  })),
);
const TimelineNailDesigner = React.lazy(() =>
  import("../components/sections/Step03_TimelineNailDesigner").then(
    (module) => ({ default: module.TimelineNailDesigner }),
  ),
);
const HistoriaMariana = React.lazy(() =>
  import("../components/sections/Step04_HistoriaMariana").then((module) => ({
    default: module.HistoriaMariana,
  })),
);
const AntiClimax = React.lazy(() =>
  import("../components/sections/Step05_AntiClimax").then((module) => ({
    default: module.AntiClimax,
  })),
);
const Modulos = React.lazy(() =>
  import("../components/sections/Step07_Modulos").then((module) => ({
    default: module.Modulos,
  })),
);
const CarouselStitch = React.lazy(() =>
  import("../components/sections/Step06_CarouselStitch").then((module) => ({
    default: module.CarouselStitch,
  })),
);
const OfertaInicial = React.lazy(() =>
  import("../components/sections/Step09_OfertaInicial").then((module) => ({
    default: module.OfertaInicial,
  })),
);
const PriceSpoilerV2 = React.lazy(() =>
  import("../components/sections/Step10_PriceSpoilerV2").then((module) => ({
    default: module.PriceSpoilerV2,
  })),
);
const Garantia = React.lazy(() =>
  import("../components/sections/Step11_Garantia").then((module) => ({
    default: module.Garantia,
  })),
);
const FAQ = React.lazy(() =>
  import("../components/sections/Step12_FAQ").then((module) => ({
    default: module.FAQ,
  })),
);
const WallOfLove = React.lazy(() =>
  import("../components/sections/Step13_WallOfLove").then((module) => ({
    default: module.WallOfLove,
  })),
);
const FinalOfferStitch = React.lazy(() =>
  import("../components/sections/Step14_FinalOfferStitch").then((module) => ({
    default: module.FinalOfferStitch,
  })),
);
const ExitIntent = React.lazy(() =>
  import("../components/sections/Step15_ExitIntent").then((module) => ({
    default: module.ExitIntent,
  })),
);

// ── Novos componentes ────────────────────────────────────────────────────
const CertificatesStepperStitch = React.lazy(() =>
  import("../components/sections/Step08_CertificatesStepper2").then(
    (module) => ({ default: module.CertificatesStepperStitch }),
  ),
);
const Step16_Footer = React.lazy(() =>
  import("../components/sections/Step16_Footer").then((module) => ({
    default: module.Step16_Footer,
  })),
);

// ── Componentes UI / Utilitários ───────────────────────────────────────────

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
  { tag: "#oferta-inicial", component: <OfertaInicial /> },
  { tag: "#price-spoiler-v2", component: <PriceSpoilerV2 checkoutUrl="https://go.hotmart.com/K104371220N?ap=cf94&src=price_spoiler" /> },
  { tag: "#garantia", component: <Garantia /> },
  { tag: "#faq", component: <FAQ /> },
  { tag: "#wall-of-love", component: <WallOfLove /> },
  { tag: "#final-offer", component: <FinalOfferStitch /> },
  { tag: "#exit-intent", component: <ExitIntent /> },
  { tag: "#footer", component: <Step16_Footer /> },
];

const allEntries = [...sections];

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
        <div key={tag} style={{ position: "relative" }}>
          <DevTag label={tag} />
          <React.Suspense
            fallback={
              <div className="min-h-[200px] flex items-center justify-center bg-zinc-900/50">
                <div className="w-8 h-8 rounded-full border-4 border-lime-500 border-t-transparent animate-spin"></div>
              </div>
            }
          >
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
