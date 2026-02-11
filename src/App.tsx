import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { DorDaManicure } from "@/components/sections/DorDaManicure";
import { Historias } from "@/components/sections/Historias";
import { OQueNinguemTeContou } from "@/components/sections/OQueNinguemTeContou";
import { HistoriaMariana } from "@/components/sections/HistoriaMariana";
import { AntiClimax } from "@/components/sections/AntiClimax";
import { Modulos } from "@/components/sections/Modulos";
import { Bonus } from "@/components/sections/Bonus";
import { WallOfLove } from "@/components/sections/WallOfLove";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Garantia } from "@/components/sections/Garantia";
import { FAQ } from "@/components/sections/FAQ";
import { Footer } from "@/components/layout/Footer";

function App() {
    return (
        <main className="min-h-screen">
            <Header />
            {/* Bloco 1: Premissa Forte */}
            <Hero />
            {/* Bloco 2: Identificação (7 Arquétipos) */}
            <DorDaManicure />
            {/* Bloco 2.5: Você Não Está Sozinha (Depoimentos) */}
            <Historias />
            {/* Bloco 3: Inimigo em Comum */}
            <OQueNinguemTeContou />
            {/* Bloco 4: Storytelling Mariana */}
            <HistoriaMariana />
            {/* Bloco 5: Anti-Climax */}
            <AntiClimax />
            {/* Bloco 6: Produto (Módulos) */}
            <Modulos />
            {/* Bloco 7: Bônus */}
            <Bonus />
            {/* Bloco 10: Wall of Love */}
            <WallOfLove />
            {/* Bloco 11: Oferta + CTA Final */}
            <FinalCTA />
            {/* Bloco 12: Garantia */}
            <Garantia />
            {/* Bloco 13: FAQ */}
            <FAQ />
            {/* Footer */}
            <Footer />
        </main>
    );
}

export default App;
