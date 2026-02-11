# Estratégia Inicial: Página de Vendas "Curso Manicure Pro" (Low Ticket)

## 1. Diagnóstico

O objetivo é criar uma página de vendas de alta conversão para um curso de manicure com ticket baixo (± R$ 49,90).
O mercado de cursos profissionalizantes de beleza é saturado, exigindo uma abordagem diferenciada.
A estratégia "Light Copy" é fundamental: fugir de promessas agressivas ("fique rica rápido") e focar em empatia, conexão emocional e benefícios tangíveis (renda extra, tempo com a família, independência).
O design deve ser "Premium" para elevar a percepção de valor do produto barato, transmitindo confiança e profissionalismo.
O público-alvo (mulheres buscando renda extra/transição de carreira) acessa majoritariamente via mobile, tornando o `responsive-design` não-negociável.

## 2. Squad de Agentes Selecionados

| Skill | Função Prática | Justificativa |
| :--- | :--- | :--- |
| **`using-notebooklm`** | **Pesquisadora de Mercado** | Essencial para analisar dores, concorrentes e estruturar o conteúdo baseado em dados reais (conforme Fase 1 do Gatilho). |
| **`visual-design-foundations`** | **Diretora de Arte** | Garantir que a estética (tipografia, cores, espaçamento) transmita "Premium" e confiança, elevando o valor percebido do ticket baixo. |
| **`interaction-design`** | **Designer de Experiência** | Criar micro-interações que mantenham o engajamento e guiem a leitura fluida da "Light Copy", evitando tédio. |
| **`responsive-design`** | **Engenheira Mobile** | O público-alvo acessará via celular. A página deve ser *mobile-first*, rápida e perfeita em telas pequenas. |
| **`writing-clearly-and-concisely`** | **Copywriter Sênior** | Implementar a "Light Copy": texto conversacional, direto e sem "hype", focado na conexão humana. |
| **`accessibility-compliance`** | **Auditora de Inclusão** | Garantir que a página seja acessível a todas as potenciais alunas, expandindo o alcance e demonstrando profissionalismo. |
| **`tailwind-design-system`** | **Engenheira Frontend** | Construção rápida e padronizada da interface, permitindo iterações ágeis e consistência visual. |
| **`reddit-scraper`** | **Investigadora de Campo** | Monitorar conversas reais e "sem filtro" no Reddit para descobrir as dores ocultas que as pesquisas tradicionais não pegam. |

## 3. Plano de Ação

### Fase A: Pesquisa & Conteúdo (NotebookLM) - Execução Cirúrgica

Esta fase utiliza 5 cadernos essenciais + 1 extra no NotebookLM, conforme o "Conjunto Enxuto".

#### 1. Caderno 1 — VOC (Voz do Cliente) + Objeções
*O coração do light copy: dores, desejos, medos reais.*
*   **Prompt (Discover Sources):**
    ```text
    Quero fontes brasileiras (pt-BR) de 2023–2026 com linguagem real de mulheres que querem aprender manicure/nail designer para trabalhar e ganhar renda.
    Priorize: comentários e perguntas em redes sociais, fóruns, threads, comunidades e FAQs.
    Objetivo: extrair dores, desejos, objeções e frases exatas (VOC) para usar em uma landing page low ticket.
    Evite fontes genéricas e textos muito “venda”; prefira falas reais.
    ```
*   **Prompt (Extração):**
    ```text
    Extraia 60 frases VOC (curtas) e organize em:
    1) Dores (contexto real: filhos, tempo, renda, medo)
    2) Desejos (autonomia, autoestima, agenda)
    3) Objeções (material, “vou conseguir?”, suporte, certificado, golpe)
    4) Perguntas frequentes
    Depois, gere: 10 headlines + 12 bullets + 8 perguntas de FAQ em tom conversacional.
    ```

#### 2. Caderno 2 — Concorrentes + "Gafes"
*Mapear promessas e diferenciar-se pela honestidade.*
*   **Prompt (Discover Sources):**
    ```text
    Encontre páginas de venda brasileiras de cursos de unhas/nail designer (low ticket e intermediário):
    fibra de vidro, gel, banho de gel, blindagem, polygel, manicure/pedicure.
    Quero páginas com: promessa, módulos, bônus, garantia, depoimentos e CTA.
    Também traga análises/reclamações e críticas comuns sobre cursos digitais de unhas.
    Período 2023–2026, pt-BR.
    ```
*   **Prompt (Extração):**
    ```text
    Para cada concorrente, preencha:
    - Promessa principal (1 frase)
    - Mecanismo (como diz que entrega)
    - Preço e condições
    - Provas (tipo e qualidade)
    - Garantia
    - CTA e urgência
    - 3 objeções que ele responde
    - 3 brechas/gafes (exageros, inconsistências, o que falta esclarecer)
    No final: liste 10 “ângulos light copy” para eu me diferenciar sem atacar ninguém.
    ```

#### 3. Caderno 3 — Credibilidade Técnica (Institucional)
*Fontes oficiais (SENAC, ANVISA) para elevar o padrão.*
*   **Prompt (Discover Sources):**
    ```text
    Quero fontes brasileiras confiáveis sobre:
    1) Conteúdo e competências de cursos de alongamento de unhas (fibra/gel) e manicure
    2) Biossegurança em serviços de embelezamento (higiene, esterilização, riscos)
    3) Lista de materiais para iniciar (kit mínimo) e boas práticas
    Priorize SENAC e documentos/guia de órgãos públicos (ANVISA/gov.br), 2021–2026.
    ```
*   **Prompt (Extração):**
    ```text
    Resuma em blocos prontos para landing page:
    A) “O que você vai aprender na prática” (em bullets)
    B) “Kit mínimo para começar” (econômico/intermediário) + observações honestas
    C) “Biossegurança” (5 regras simples que passam confiança)
    D) “O que dá errado com iniciantes e como evitar” (tom acolhedor)
    ```

#### 4. Caderno 4 — Estrutura Light Copy + UX
*Layout baseado em comportamento de leitura real.*
*   **Prompt (Discover Sources):**
    ```text
    Quero fontes sobre escrita para web e landing pages de alta conversão com foco em:
    - texto escaneável (scan), conciso, objetivo (menos promocional)
    - hierarquia: headline, subheadline, bullets, seções curtas
    - padrões de layout para conversão em mobile
    Priorize pesquisas e guias de UX writing (ex.: Nielsen Norman Group) e boas práticas de landing page.
    ```
*   **Prompt (Extração):**
    ```text
    Crie uma estrutura de landing page low ticket (R$49,90) em “light copy”, com:
    1) Seções (ordem)
    2) Objetivo psicológico de cada seção
    3) Exemplo de microcopy (2–3 linhas por seção)
    4) Onde colocar CTA e FAQ
    Tudo em tom de conversa, sem prometer renda.
    ```

#### 5. Caderno 5 — Compliance + Garantia
*Evitar bloqueios e reduzir reembolsos.*
*   **Prompt (Discover Sources):**
    ```text
    Quero fontes oficiais sobre:
    - políticas do Google Ads e Meta contra promessas enganosas / “get rich quick”
    - regras brasileiras de direito de arrependimento (7 dias) e boas práticas de transparência em compras online
    Priorize: Google Ads Policy, Meta Ad Standards/Community Standards e órgãos públicos brasileiros (gov.br, Procon).
    ```
*   **Prompt (Extração):**
    ```text
    Gere:
    1) Lista “frases proibidas/arriscadas” (ex.: renda garantida, resultados em X dias)
    2) Versões seguras e ainda persuasivas (light copy)
    3) Texto curto para “Garantia e reembolso” (claro e humano)
    4) Checklist de compliance da landing + anúncios (Google/Meta)
    ```

#### 6. Caderno EXTRA — Criativos (Ads)
*Alinhamento de promessa entre anúncio e página.*
*   **Prompt (Discover Sources):**
    ```text
    Encontre exemplos brasileiros de anúncios e criativos para cursos de unhas/manicure:
    - Google Ads (pesquisa): termos e mensagens de intenção (ex.: “curso fibra de vidro”, “banho de gel”)
    - Meta Ads: hooks emocionais (mãe, renda, trabalhar em casa) sem promessas irreais
    Período 2023–2026. Traga também boas práticas de anúncios que evitam exageros.
    ```
*   **Prompt (Extração):**
    ```text
    Crie:
    - 30 headlines para Google Search (intenção quente)
    - 20 hooks para Meta (intenção fria) em tom humano
    - 10 roteiros de vídeo de 15s (sem hype, com conexão)
    - Mapa: qual anúncio leva para qual seção da landing (mensagem consistente)
    ```

### Fase B: Design & Prototipação
3.  **Definição Visual**: Selecionar paleta de cores (premium/suave), tipografia (moderna/legível) e estilo de imagens.
4.  **Wireframe Mobile**: Desenhar a estrutura focada na experiência mobile (scroll infinito fluído, CTAs visíveis).

### Fase C: Desenvolvimento (Frontend)
5.  **Setup do Projeto**: Inicializar projeto (HTML/Tailwind ou Framework leve) com estrutura de arquivos organizada.
6.  **Implementação de Componentes**: Construir seções (Hero, Módulos, Depoimentos) usando `tailwind-design-system`.
7.  **Refino de Interação**: Adicionar animações sutis (`interaction-design`) para dar vida à página.

### Fase D: Refino & Polimento
8.  **Revisão de Copy**: Verificar o tom "Light Copy" e clareza (`writing-clearly-and-concisely`).
9.  **Auditoria**: Verificar responsividade e acessibilidade (`accessibility-compliance`).

## 4. Critérios de Sucesso (Nota 100)

1.  **Conversacional**: O texto lê como uma conversa entre amigas, zero manipulação agressiva.
2.  **Mobile-Perfection**: A experiência no celular é "manteiga" (suave, rápida, legível).
3.  **Premium Feel**: O visual parece custar R$ 500,00, mas o produto custa R$ 49,90.
4.  **Embasamento**: Cada promessa da página é sustentada por uma dor/desejo real mapeado na pesquisa.
5.  **Zero Atrito**: Navegação intuitiva, carregamento rápido e CTAs claros.
