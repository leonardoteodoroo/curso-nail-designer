# Linha do Tempo Scriptada deste projeto

## Contexto rápido
- **Projeto:** Landing Page "Nail Designer" (Venda de curso profissionalizante).
- **Objetivo:** Converter visitantes através de narrativa emocional (arquétipos: perfeccionista, ansiosa, mãe) e autoridade técnica.
- **Stack:** Vite/Next.js 16 + React 19 + TypeScript + Tailwind v4 + Framer Motion.
- **Deploy:** GitHub Pages (via pacote `gh-pages` e action/script manual).
- **Estado Atual:** Projeto estruturado, build funcional, copy implementada e deploy inicial realizado.

## Inventário de arquivos (tree + resumo)
```text
.
├── 00-CORE/                  # [FONTE DA VERDADE] Copy final, Design System, README oficial
├── 01-EXECUCAO/              # Guias de implementação (Visual, Blocos narrativos)
├── ARQUIVADO/                # Histórico, pesquisa bruta e versões antigas
├── src/                      # [CÓDIGO FONTE] Aplicação Next.js
├── public/                   # Assets públicos (imagens, ícones)
├── package.json              # Scripts e dependências
├── next.config.mjs           # Configurações Next.js
├── CHANGELOG_REORGANIZACAO.md # Registro da limpeza de estrutura
├── MAPA_DO_PROJETO.md         # Guia de navegação do workspace
└── Linha do Tempo Scriptada deste projeto.md # Este documento
```

## Arquivos principais (mapa 1-linha por arquivo)
- `package.json` — Gerencia deps (Next 16, Motion, Lucide) e scripts de deploy (`npm run deploy`).
- `next.config.mjs` — Configura output estático (`output: 'export'`) e trailing slashes para GH Pages.
- `00-CORE/LP_VSL_COPY_FINAL.md` — Copywritting final da página (Narrativa "Duas Mulheres", Dores, Oferta).
- `00-CORE/DESIGN_SYSTEM_NAIL.md` — Definições visuais (Cores, Tipografia Inter, Tokens de sombra/borda).
- `MAPA_DO_PROJETO.md` — "Bússola" do repositório, explica a função de cada diretório raiz.
- `ARQUIVADO/03-PESQUISA/NOTEBOOKS_CRIADOS.txt` — Registro da inteligência de pesquisa (IDs e objetivos dos cadernos).
- `src/app/page.tsx` — Entry point da LP, orquestra as seções (Hero, DorDaManicure, etc).

## Linha do tempo (T1…Tn)
- **T1: Concepção & Pesquisa (NotebookLM)** — Criação de 6 cadernos de pesquisa para mapear dores (VOC), concorrentes e compliance.
- **T2: Criação da Copy & Estratégia** — Desenvolvimento da narrativa "Long-Form" baseada em 7 arquétipos psicológicos (Perfeccionista, Ansiosa, etc).
- **T3: Setup do Projeto (Next.js)** — `create-next-app` inicial (Commit `8a6c46f`), configuração de Tailwind e Framer Motion.
- **T4: Implementação dos Componentes** — Desenvolvimento modular das seções (Hero, Dor, Modulos, FAQ) em `src/components/sections`.
- **T5: Reorganização do Workspace** — Limpeza massiva de arquivos soltos na raiz e criação da estrutura `00-CORE` / `ARQUIVADO` (Log em `CHANGELOG_REORGANIZACAO.md`).
- **T6: Configuração de Deploy** — Ajuste de `next.config.mjs` para exportação estática e script `gh-pages` no package.json.
- **T7: Deploy Inicial** — Execução do build e deploy para produção (Commit `47390d0`).
- **T8: Refinamento & Polimento** — Ajustes finais de UI (glassmorphism), SEO (metadata) e acessibilidade (Commit `760f7c9` e `9db2df7`).
- **T9: Migração para a Raiz** — O conteúdo de `lp-nail-designer/` foi movido para a raiz do workspace para facilitar o acesso e o deploy.

## Cadernos do NotebookLM
*Baseado em `ARQUIVADO/03-PESQUISA/NOTEBOOKS_CRIADOS.txt`*

1.  **LP Nail - 1 - VOC (Voice of the Customer / Voz do Cliente)**
    *   **Objetivo:** Identificar dores, desejos e objeções reais, coleta frases reais de dores e desejos.
    *   **Saída:** Lista de frases de "Voz do Cliente" (ex: "Tenho medo de errar", "Sinto culpa").
2.  **LP Nail - 2 - Concorrentes**
    *   **Objetivo:** Análise competitiva e identificação de gafes do mercado.
    *   **Saída:** Pontos de diferenciação (foco em negócio vs apenas técnica).
3.  **LP Nail - 3 - Credibilidade**
    *   **Objetivo:** Embasamento técnico e legal (ANVISA, SENAC).
    *   **Saída:** Lista de normas e requisitos para passar autoridade.
4.  **LP Nail - 4 - Estrutura UX**
    *   **Objetivo:** Definir fluxo mobile-first e light copy.
    *   **Saída:** Princípios de escaneabilidade e arquitetura da página.
5.  **LP Nail - 5 - Compliance**
    *   **Objetivo:** Garantir adequação ao CDC e políticas de anúncios (Meta/Google).
    *   **Saída:** Termos proibidos e estrutura de garantia/risco reverso.
6.  **LP Nail - 6 - Ads & Criativos**
    *   **Objetivo:** Criar headlines e ganchos para tráfego pago.
    *   **Saída:** Lista de ângulos de anúncios testados.

## Duplicidades e riscos
- **[RISCO]** A raiz do workspace não é um repositório Git, apenas a subpasta `lp-nail-designer`. Isso dificulta o versionamento dos arquivos de documentação em `00-CORE` e `ARQUIVADO`.
- **[DUPLICIDADE]** Arquivos de copy antigos em `ARQUIVADO/_LEGADO_REDUNDANTE` podem confundir se acessados por acidente (mas já estão isolados).
- **[ATENÇÃO]** O projeto depende de `gh-pages` manual. Não há workflow de CI/CD (GitHub Actions) configurado visivelmente para deploy automático.

## Plano de ação
- **Organização:**
  - Manter rigorosamente a separação entre `00-CORE` (estratégia) e `lp-nail-designer` (código).
  - Considerar iniciar um git na raiz para versionar a documentação também, ou mover a documentação para dentro do repo do código (ex: `lp-nail-designer/docs`).
- **Consistência:**
  - Garantir que qualquer alteração na copy do código (`src/components/...`) seja refletida em `00-CORE/LP_VSL_COPY_FINAL.md` para manter a Fonte da Verdade atualizada.
- **Deploy:**
  - Validar se o domínio personalizado (`curso-nail-designer.semprenamoda.com.br`) está propagando corretamente.
  - Criar um script de verificação pós-deploy para garantir que links e imagens não quebraram no ambiente de produção.

---

## Playbook: Da Ideia Zero ao Site no Ar (Passo a Passo por Fases)

### FASE 1 — Definir a Ideia e o Objetivo Comercial
- Descreva em 1 parágrafo: **o que** você vai vender, **pra quem**, e **qual é a transformação** prometida.
- Defina o modelo de negócio: afiliado, produtor, co-produção.
- Defina a plataforma de venda (Hotmart, Kiwify, Eduzz).
- Defina o preço e as condições de pagamento (parcelamento, bump, order bump).
- **Entregável:** Briefing de 1 página com: Produto → Público → Promessa → Preço → Plataforma.

### FASE 2 — Pesquisa de Público e Inteligência de Mercado
- Criar cadernos de pesquisa no **NotebookLM** (ou ferramenta equivalente):
  - **Caderno VOC (Voz do Cliente):** Coletar frases reais de dores, desejos e objeções em fóruns, Reclame Aqui, YouTube, grupos do Facebook.
  - **Caderno Concorrentes:** Mapear LPs concorrentes, anúncios ativos (Meta Ad Library), gafes e pontos fracos.
  - **Caderno Credibilidade:** Buscar normas técnicas, certificações, dados oficiais que dão autoridade ao produto.
- Fazer scraping/coleta manual de:
  - Comentários reais (YouTube, Instagram, Reddit).
  - Perguntas frequentes do público-alvo.
  - Vocabulário real (como elas falam, não como você acha que falam).
- **Entregável:** Arquétipos psicológicos do público + lista de dores/desejos/objeções com frases VOC reais.

### FASE 3 — Definir Arquétipos e Ângulos de Venda
- Mapear os **perfis emocionais** do público (ex: Perfeccionista, Ansiosa, Mãe Culpada, Frustrada).
- Para cada arquétipo: identificar a **dor principal**, o **desejo oculto**, e a **objeção que trava a compra**.
- Definir o **ângulo principal da LP** (ex: "Não é sobre talento, é sobre método").
- Definir os **ângulos secundários** para anúncios (ex: "Quanto você cobra? R$25 ou R$120?").
- **Entregável:** Documento de arquétipos com copy de conexão para cada perfil.

### FASE 4 — Escrever a Copy (Texto da Página)
- Definir a **estrutura narrativa** da LP (ordem das seções, gancho → dor → solução → prova → oferta → CTA).
- Escrever a copy completa em Markdown, seção por seção:
  - Hero (gancho visual + headline).
  - Seção de Dor (identificação emocional).
  - Virada / Anticlímax ("E se existisse um caminho?").
  - Apresentação do Método/Produto (módulos, conteúdo).
  - Prova Social (depoimentos, números, conquistas).
  - Bônus + Ancoragem de Preço.
  - Garantia (risco reverso, CDC).
  - CTA Final + P.S. emocional.
  - FAQ (quebrando objeções restantes).
- Revisar compliance (palavras proibidas Google/Meta, CDC).
- **Entregável:** Arquivo `LP_VSL_COPY_FINAL.md` — a Fonte da Verdade do texto.

### FASE 5 — Criar o Design System
- Definir a **paleta de cores** (primária, secundária, ação, erro, sucesso).
- Definir **tipografia** (família, pesos, tamanhos para heading/body/caption).
- Definir **tokens visuais**: bordas, sombras, gradientes, espaçamentos.
- Definir **componentes base**: botões (primário, CTA, secundário), cards, impact boxes, separadores.
- Definir **tom visual**: premium? popular? clean? emocional?
- **Entregável:** Arquivo `DESIGN_SYSTEM.md` com todas as definições visuais documentadas.

### FASE 6 — Estratégia Visual (Imagens e Mídia)
- Listar todas as imagens necessárias por seção (hero, depoimentos, módulos, etc.).
- Definir se será: foto real, foto stock (Unsplash), imagem gerada por IA, ou placeholder.
- Criar prompts de geração de imagem para cada posição (se usar IA).
- Preparar imagens de prova social (prints de WhatsApp, depoimentos em vídeo, antes/depois).
- **Entregável:** Guia de estratégia visual com prompts e posições mapeadas.

### FASE 7 — Setup do Projeto (Código)
- Inicializar o projeto: `npx create-next-app@latest ./` (ou Vite, conforme a stack).
- Instalar dependências: Tailwind, Framer Motion, Lucide Icons, etc.
- Configurar `next.config.mjs` para exportação estática (`output: 'export'`).
- Criar estrutura de pastas: `src/components/sections/`, `src/components/ui/`, `src/components/layout/`.
- Implementar o Design System no CSS (variáveis CSS, tokens, classes base).
- Criar componentes reutilizáveis (Button, Card, Section, Container, AnimatedButton).
- **Entregável:** Projeto buildando sem erros com Design System funcional.

### FASE 8 — Implementar a Landing Page (Seção por Seção)
- Seguir a copy como guia: cada seção do `.md` vira um componente React.
- Ordem de implementação recomendada:
  1. `Hero.tsx` (primeiro impacto visual).
  2. `DorDaManicure.tsx` (conexão emocional).
  3. `Historias.tsx` / `HistoriaMariana.tsx` (narrativa central).
  4. `OQueNinguemTeContou.tsx` + `AntiClimax.tsx` (virada).
  5. `Modulos.tsx` (conteúdo do curso).
  6. `Bonus.tsx` (valor agregado).
  7. `WallOfLove.tsx` (prova social massiva).
  8. `Garantia.tsx` (risco reverso).
  9. `FinalCTA.tsx` (oferta + ancoragem de preço).
  10. `FAQ.tsx` (quebra de objeções).
  11. `Footer.tsx` + `Header.tsx` (navegação e rodapé legal).
- A cada seção: rodar `npm run dev`, verificar visualmente, ajustar responsividade mobile.
- **Entregável:** Todas as seções implementadas e visualmente coerentes.

### FASE 9 — Revisão e Polimento
- Checar **fidelidade da copy**: comparar cada componente com o `.md` original.
- Ajustar **animações**: entrada suave (fade-in, slide-up), sem exagero.
- Polir **responsividade**: testar em 360px (mobile), 768px (tablet), 1280px (desktop).
- Implementar **SEO**: meta title, meta description, Open Graph tags, favicon.
- Implementar **acessibilidade básica**: alt texts, contraste, navegação por teclado.
- Otimizar **performance**: lazy loading de imagens, minimizar bundle.
- **Entregável:** Build limpo (`npm run build` sem erros), site fluido em todos os breakpoints.

### FASE 10 — Configurar Deploy
- Escolher hospedagem: GitHub Pages, Vercel, Netlify, ou VPS.
- Se GitHub Pages:
  - Configurar `output: 'export'` no `next.config.mjs`.
  - Adicionar script `"deploy": "gh-pages -d out"` no `package.json`.
  - Configurar domínio personalizado (arquivo `CNAME` em `public/`).
- Se Vercel/Netlify:
  - Conectar repositório Git.
  - Configurar variáveis de ambiente (se houver).
  - Configurar domínio personalizado no painel.
- Rodar `npm run build && npm run deploy` (ou push para branch de deploy).
- **Entregável:** Site acessível publicamente no domínio final.

### FASE 11 — Validação Pós-Deploy
- Abrir o site no celular e no desktop — navegação completa de cima a baixo.
- Testar todos os CTAs (botões levam para o checkout correto?).
- Testar velocidade: Google PageSpeed Insights (meta: 90+ mobile).
- Testar SEO: verificar se Google indexa, OG tags funcionam (compartilhar no WhatsApp e ver preview).
- Testar o pixel/tracking (Meta Pixel, Google Analytics, GTM) — se configurado.
- Verificar certificado SSL (HTTPS funcionando sem aviso).
- **Entregável:** Checklist de validação 100% aprovado.

### FASE 12 — Pós-Lançamento (Tráfego e Iteração)
- Criar criativos de anúncio (imagens/vídeos) com os ângulos definidos na Fase 3.
- Configurar campanhas de tráfego pago (Meta Ads, Google Ads).
- Monitorar métricas: CTR dos anúncios, taxa de conversão da LP, custo por lead/venda.
- Iterar na LP com base em dados:
  - Headline não converte? → Testar variações (A/B).
  - Muita gente sai antes do CTA? → Ajustar seção de prova social ou preço.
  - FAQ não resolve objeções? → Adicionar perguntas reais dos leads.
- **Entregável:** Dashboard de métricas + primeiro ciclo de otimização realizado.

---

> **Resumo:** 12 fases. Da ideia no papel até o dinheiro entrando. Cada fase tem um entregável concreto. Não pule fases — o que parece atalho geralmente vira retrabalho.
O arquivo foi atualizado com as 12 fases completas — da ideia zero ao site no ar e gerando receita. Aqui está o resumo do que foi adicionado:

Fase	Nome	O que se faz
1	Definir a Ideia	Briefing: produto, público, promessa, preço, plataforma
2	Pesquisa de Público	NotebookLM, scraping de VOC, dores reais, vocabulário
3	Arquétipos e Ângulos	Perfis emocionais + ângulos de venda principal e secundários
4	Escrever a Copy	Narrativa completa seção por seção em Markdown
5	Design System	Cores, tipografia, tokens, componentes base
6	Estratégia Visual	Mapa de imagens, prompts de IA, prova social visual
7	Setup do Projeto	Next.js, deps, estrutura de pastas, CSS tokens
8	Implementar a LP	Cada seção da copy vira um componente React
9	Revisão e Polimento	Copy fiel, responsividade, SEO, acessibilidade
10	Configurar Deploy	GH Pages / Vercel, domínio, CNAME, scripts
11	Validação Pós-Deploy	CTAs, PageSpeed, SSL, OG tags, pixel/tracking
12	Pós-Lançamento	Criativos, tráfego pago, métricas, iteração A/B