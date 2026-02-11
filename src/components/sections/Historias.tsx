"use client";

import React from "react";
import { TestimonialCard } from "../ui/TestimonialCard";
import { motion } from "framer-motion";
import { ImpactBox } from "../ui/ImpactBox";

const stories = [
    {
        name: "Mariana",
        age: 28,
        location: "Rio de Janeiro",
        badge: "Ex-Perfeccionista",
        content: <>
            Eu refazia a MESMA unha 6, 7 vezes. Chorava de frustração. <br />
            Achava que nunca ia ficar 'perfeita'. <br /><br />
            Hoje eu entendo: <strong>perfeito NÃO EXISTE.</strong> <br />
            E minhas clientes AMAM meu trabalho. <br />
            Cobro R$ 100. Agenda fechada. E EU durmo tranquila.
        </>,
        quote: "Mariana, ex-perfeccionista paralisada"
    },
    {
        name: "Carla",
        age: 35,
        location: "São Paulo",
        badge: "Vencendo a Vergonha",
        content: <>
            Eu tinha VERGONHA de falar meu preço. <br />
            Cliente perguntava: 'Quanto é?' <br />
            Eu: 'Ahh... R$ 40...' (morrendo por dentro) <br /><br />
            Hoje eu respondo com <strong>SEGURANÇA:</strong> <br />
            'R$ 120. Aceita cartão ou Pix?' <br />
            O que mudou? EU mudei.
        </>,
        quote: "Carla, que aprendeu a se valorizar"
    },
    {
        name: "Jéssica",
        age: 24,
        location: "Belo Horizonte",
        badge: "Superando Ansiedade",
        content: <>
            Eu tremia LITERALMENTE na frente da cliente. <br />
            Suava frio. Mão tremendo. <br />
            Pensava: 'Ela tá julgando tudo que eu faço.' <br /><br />
            Descobri que isso é <strong>ANSIEDADE SOCIAL.</strong> <br />
            E que dá pra trabalhar mesmo com isso. <br />
            Hoje atendo 3 clientes/dia. E não tremo mais.
        </>,
        quote: "Jéssica, que venceu a ansiedade"
    },
    {
        name: "Ana Paula",
        age: 31,
        location: "Salvador",
        badge: "Sem Redes Sociais",
        content: <>
            Eu ODEIO aparecer. <br />
            Não posto foto. Não faço stories. <br />
            Nem tenho Instagram profissional. <br /><br />
            E mesmo assim... <br />
            Minha agenda lota <strong>SÓ com WhatsApp e indicação.</strong> <br />
            Você NÃO precisa ser influencer pra viver disso.
        </>,
        quote: "Ana Paula, agenda lotada sem redes sociais"
    },
    {
        name: "Renata",
        age: 29,
        location: "Curitiba",
        badge: "Encontrou o Método",
        content: <>
            Já fiz 3 cursos de unha. Gastei mais de R$ 2.000. <br />
            NENHUM me ensinou como REALMENTE trabalhar. <br />
            Só técnica. Nada de negócio. Nada de confiança. <br /><br />
            Esse foi o <strong>PRIMEIRO</strong> que me fez virar profissional DE VERDADE. <br />
            Hoje eu faturei R$ 4.800 no último mês.
        </>,
        quote: "Renata, que finalmente encontrou o curso certo"
    },
    {
        name: "Patrícia",
        age: 26,
        location: "Porto Alegre",
        badge: "Quebrou Crenças",
        content: <>
            'Eu não tenho dom.' 'Não nasci pra isso.' <br />
            EU me sabotava TODOS OS DIAS. <br /><br />
            Até entender: <strong>Dom é MITO. Técnica é TREINO.</strong> <br />
            Hoje eu sou a manicure mais procurada do meu bairro. <br />
            E eu NÃO nasci sabendo. EU APRENDI.
        </>,
        quote: "Patrícia, que parou de se sabotar"
    },
    {
        name: "Luciana",
        age: 33,
        location: "Fortaleza",
        badge: "Mãe Empreendedora",
        content: <>
            Tenho 2 filhos pequenos. <br />
            Toda vez que eu pensava em trabalhar... Vinha a CULPA. <br />
            'Sou má mãe por querer ganhar meu dinheiro?' <br /><br />
            Hoje eu trabalho em casa. Atendo enquanto eles dormem ou estão na escola. <br />
            Faturei R$ 3.200 mês passado. E meus filhos estão ÓTIMOS.
        </>,
        quote: "Luciana, mãe empreendedora sem culpa"
    },
    {
        name: "Camila",
        age: 22,
        location: "Goiânia",
        badge: "Começou do Zero",
        content: <>
            Nunca tinha pegado no alicate. ZERO experiência. <br />
            Comecei do absolutamente NADA. <br /><br />
            3 meses depois: Primeira cliente pagante. R$ 80. <br />
            EU chorei de emoção. <br />
            Hoje, 1 ano depois, atendo 4 clientes/dia.
        </>,
        quote: "Camila, que começou do zero"
    },
    {
        name: "Tatiane",
        age: 38,
        location: "Florianópolis",
        badge: "Valorização Real",
        content: <>
            Eu JÁ fazia unha há 5 anos. Mas ganhava MIXARIA. <br />
            R$ 30, R$ 40... 'Pra ajudar a pagar conta.' <br /><br />
            O problema NÃO era técnica. Era PRECIFICAÇÃO + POSICIONAMENTO. <br />
            Hoje cobro R$ 110. É a MESMA unha. Mas eu me valorizo.
        </>,
        quote: "Tatiane, que finalmente se valorizou"
    },
    {
        name: "Bruna",
        age: 27,
        location: "Recife",
        badge: "Superou Timidez",
        content: <>
            Sou MUITO tímida. <br />
            Cliente cancelava última hora... Eu não tinha coragem nem de cobrar a taxa. <br />
            'Tá ok, sem problemas!' (chorando por dentro) <br /><br />
            Aprendi SCRIPTS PRONTOS. Hoje eu tenho POLÍTICA DE CANCELAMENTO. <br />
            E as clientes respeitam. Mudou TUDO.
        </>,
        quote: "Bruna, que aprendeu a se impor"
    },
    {
        name: "Débora",
        age: 32,
        location: "Brasília",
        badge: "Perdeu o Medo",
        content: <>
            Eu tinha PAVOR de cliente 'chata'. <br />
            'E se ela reclamar?' 'E se ela me humilhar?' <br /><br />
            Aprendi a fazer ANAMNESE. Aprendi a ALINHAR EXPECTATIVA. <br />
            Aprendi o que FALAR se der errado. <br />
            Hoje eu atendo até as 'difíceis'. E elas viram minhas clientes fiéis.
        </>,
        quote: "Débora, que perdeu o medo"
    }
];

export const Historias = () => {
    return (
        <section className="py-[var(--section-padding-y-desktop)] bg-[var(--surface-page)] overflow-hidden">
            <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding-x-desktop)]">

                {/* Intro Title */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
                        Você Não Está Sozinha
                    </h2>
                    <p className="text-lg text-[var(--text-secondary)]">
                        Se você se identificou com alguma dessas situações... <br />
                        Quero que saiba: <strong>Você NÃO está sozinha.</strong> <br />
                        Milhares de mulheres passaram <strong>EXATAMENTE</strong> pelo mesmo que você. <br />
                        E hoje? Estão vivendo uma realidade completamente diferente.
                    </p>
                    <p className="mt-4 text-[var(--text-secondary)] italic">
                        Deixa eu te apresentar algumas delas.
                    </p>
                </div>

                {/* Grid of Stories */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    {stories.map((story, idx) => (
                        <TestimonialCard
                            key={idx}
                            name={story.name}
                            age={story.age}
                            location={story.location}
                            badge={story.badge}
                            content={story.content}
                            quote={story.quote}
                            delay={idx * 0.1}
                        />
                    ))}
                </div>

                {/* Special Section: Camila (SP) & Fernanda (Interior) */}
                <div className="mb-16">
                    <div className="flex items-center justify-center mb-12">
                        <div className="h-[1px] w-full max-w-xs bg-gradient-primary"></div>
                        <span className="mx-4 text-2xl">🌟</span>
                        <div className="h-[1px] w-full max-w-xs bg-gradient-primary"></div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto">
                        {/* Camila - Periferia */}
                        <TestimonialCard
                            name="Camila"
                            age={26}
                            location="Zona Leste de São Paulo"
                            badge="Mina de Ouro: Periferia"
                            highlight
                            content={
                                <>
                                    Eu achava que ninguém ia pagar R$ 100 aqui no meu bairro. <br />
                                    'As meninas daqui não têm dinheiro.' Era o que EU pensava. <br /><br />
                                    <strong>Mas aprendi uma coisa:</strong> <br />
                                    Quanto mais LONGE dos salões chiques... MAIOR a fidelidade da cliente. <br />
                                    Porque EU sou a ÚNICA perto delas que faz trabalho profissional. <br />
                                    Minhas clientes não me trocam. E me indicam pra mãe, prima, vizinha. <br />
                                    Agenda lotada só com indicação. Zero gasto com anúncio.
                                </>
                            }
                            quote="Camila, que descobriu a mina de ouro onde ela estava"
                            delay={0.1}
                        />

                        {/* Fernanda - Interior */}
                        <TestimonialCard
                            name="Fernanda"
                            age={30}
                            location="Interior de Mato Grosso"
                            badge="Mina de Ouro: Interior"
                            highlight
                            content={
                                <>
                                    'Cidade pequena não dá dinheiro.' Era o que EU acreditava. <br /><br />
                                    Mas descobri: <strong>Quanto MENOR a cidade... MENOS concorrência.</strong> <br />
                                    Sou a ÚNICA da minha região que faz fibra de vidro profissional. <br />
                                    Clientes vêm de 3 cidades vizinhas pra mim.
                                </>
                            }
                            quote="Fernanda, referência regional"
                            delay={0.2}
                        />
                    </div>
                </div>

                {/* Impact Conclusion - Percebeu o Padrão? */}
                <div className="max-w-3xl mx-auto">
                    <ImpactBox className="text-center bg-gradient-to-br from-[#FFF5F7] to-[#FAF8F6]">
                        <h3 className="text-xl md:text-2xl font-bold text-[var(--text-primary)] mb-4">
                            💎 Percebeu o padrão?
                        </h3>
                        <div className="text-lg text-[var(--text-secondary)] mb-6 leading-relaxed">
                            <p className="mb-2"><strong>Camila</strong> achava que morar na <strong>periferia</strong> era desvantagem.</p>
                            <p className="mb-4"><strong>Fernanda</strong> achava que morar no <strong>interior</strong> era desvantagem.</p>

                            <p className="mb-2"><strong>MAS...</strong> As DUAS descobriram a mesma verdade:</p>
                            <p className="text-[var(--text-primary)] font-bold text-xl block mt-2">
                                ONDE você mora não é problema. É a sua MAIOR vantagem.
                            </p>
                        </div>

                        <div className="bg-white/70 p-6 rounded-[var(--radius-lg)] inline-block text-left border border-[var(--border-subtle)] w-full max-w-lg shadow-sm mx-auto">
                            <p className="mb-2 font-medium text-[var(--text-secondary)]"><strong>Por quê?</strong></p>
                            <p className="mb-2">✅ <strong>Periferia/Bairro popular</strong> = Cliente fiel + Indicação orgânica</p>
                            <p className="mb-4">✅ <strong>Interior/Cidade pequena</strong> = Zero concorrência + Você é A referência</p>

                            <div className="text-center text-[var(--text-secondary)] italic border-t border-[var(--border-subtle)] pt-4 mt-2">
                                <p>Enquanto as "grandes manicures" brigam por atenção em bairro nobre...</p>
                                <p><strong>Você constrói SUA base sólida.</strong></p>
                            </div>
                            <p className="text-center font-bold text-[var(--action-primary-active)] mt-3">
                                Autoridade não se ganha em salão chique. <br />
                                Se constrói ONDE você está.
                            </p>
                        </div>

                        <div className="mt-12 text-center max-w-2xl mx-auto border-t border-[var(--border-subtle)] pt-8">
                            <h3 className="text-2xl font-bold mb-4">Percebeu?</h3>
                            <p className="text-[var(--text-secondary)] mb-4">
                                Cada uma delas tinha uma DOR específica. <br />
                                Cada uma achava que "não era pra ela".
                            </p>
                            <p className="text-[var(--text-primary)] font-bold mb-4">
                                MAS... Todas elas conseguiram.
                            </p>
                            <p className="text-[var(--text-secondary)]">
                                Não porque são "especiais". Não porque têm "dom". <br />
                                Mas porque elas encontraram o <strong>MÉTODO CERTO.</strong>
                            </p>
                            <p className="text-[var(--text-primary)] font-medium mt-4">
                                E agora eu vou te mostrar POR QUE você também vai conseguir.
                            </p>
                        </div>
                    </ImpactBox>
                </div>

            </div>
        </section>
    );
};
