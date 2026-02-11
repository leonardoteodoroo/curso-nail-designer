import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-family-base',
});

const playfair = Playfair_Display({
    subsets: ['latin'],
    variable: '--font-family-heading',
});

export const metadata: Metadata = {
    metadataBase: new URL('https://lp-nail-designer.vercel.app'), // Placeholder production URL
    title: "Curso Nail Designer Profissional | Do Zero à Agenda Lotada",
    description: "Aprenda a técnica de alongamento que encanta clientes e fature de 3 a 5 mil por mês. Método comprovado para iniciantes.",
    keywords: ["nail designer", "curso de unhas", "alongamento de unhas", "manicure profissional", "renda extra", "curso online"],
    openGraph: {
        title: "Curso Nail Designer Profissional | Do Zero à Agenda Lotada",
        description: "Descubra como se tornar uma Nail Designer requisitada, mesmo começando do zero. Aulas práticas, certificados e suporte.",
        type: "website",
        locale: "pt_BR",
        images: [
            {
                url: "/og-image.jpg", // Placeholder
                width: 1200,
                height: 630,
                alt: "Nail Designer Profissional - Antes e Depois",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Curso Nail Designer Profissional",
        description: "Transforme sua vida financeira com unhas de alto padrão.",
    },
    other: {
        'apple-mobile-web-app-capable': 'yes',
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="pt-BR">
            <body className={`${inter.variable} ${playfair.variable} antialiased font-sans`}>
                {children}
            </body>
        </html>
    );
}
