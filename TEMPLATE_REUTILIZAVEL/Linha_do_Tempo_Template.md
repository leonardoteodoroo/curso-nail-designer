# Linha do Tempo Scriptada do Projeto (TEMPLATE NEUTRO)

## 1) Contexto do Projeto (preencher)
- **Projeto:** [NOME_DO_PROJETO]
- **Objetivo:** [OBJETIVO_PRINCIPAL]
- **Tipo de entrega:** [LP / Pré-sell / VSL / Página curta / Página longa / etc.]
- **Modelo de negócio:** [MODELO]
- **Destino do CTA:** [DESTINO_DO_CTA]
- **Stack (alto nível):** [FRAMEWORK] + [UI] + [LINGUAGEM] + [ESTILO] + [ANIMAÇÃO(opcional)]
- **Deploy (alto nível):** [HOSPEDAGEM] + [DOMÍNIO(opcional)]
- **Estado atual:** [STATUS_ATUAL_DO_PROJETO]

---

## 2) Estrutura Oficial do Repositório (Fonte da Verdade)
> Regra: manter separação entre conteúdo "core" e histórico/arquivo.

```text
.
├── core/                     # Fonte da verdade: copy final, design system, README oficial
├── guias/                    # Guias de execução (estrutura de blocos, visual, setup/deploy)
├── arquivo/                  # Histórico, pesquisa bruta, versões antigas e legados
├── src/                      # Código fonte
├── public/                   # Assets públicos
├── package.json              # Scripts e dependências
├── [config do framework]     # Arquivo(s) de configuração do framework
├── MAPA_DO_PROJETO.md        # Guia de navegação do workspace
├── CHANGELOG.md              # Registro de mudanças estruturais
└── Linha do Tempo Scriptada.md # Este documento
```

---

## 3) Arquivos Principais (mapa 1-linha)

- `core/COPY_FINAL.md` — Texto final aprovado (fonte da verdade da narrativa e oferta).
- `core/DESIGN_SYSTEM.md` — Tokens visuais e regras de UI (fonte da verdade do visual).
- `guias/GUIA_ESTRUTURA_BLOCOS.md` — Ordem e componentes por seção (execução).
- `guias/GUIA_ESTRATEGIA_VISUAL.md` — Mapa de mídia por seção (execução).
- `guias/GUIA_SETUP_DEPLOY.md` — Setup/Deploy padronizado (execução).
- `MAPA_DO_PROJETO.md` — "bússola" do repositório (onde está cada coisa).

---

## 4) Linha do Tempo (T1…Tn) — Fases com Entregáveis

### T1 — Briefing e Definições Iniciais

- Definir objetivo, público, proposta de valor e CTA.
- Definir restrições: prazo, compliance, tom, canais.
- **Entregável:** `core/BRIEFING.md`

### T2 — Pesquisa e Inteligência (VOC / Mercado / Regras)

- Coletar linguagem real do público (dores, desejos, objeções).
- Mapear concorrência e padrões de abordagem.
- Levantar bases técnicas/legais (se aplicável) e requisitos de compliance.
- **Entregáveis:** `arquivo/PESQUISA/` + síntese em `core/INSIGHTS_PESQUISA.md`

### T3 — Arquitetura de Persuasão (Estrutura + Ângulos)

- Definir fluxo da página (sequência de blocos) e tese central.
- Definir ângulos e pontos de prova necessários.
- **Entregável:** `guias/GUIA_ESTRUTURA_BLOCOS.md`

### T4 — Copy Final (Fonte da Verdade)

- Escrever a copy completa por seção, com CTAs e FAQs.
- Normalizar estilo, consistência e compliance.
- **Entregável:** `core/COPY_FINAL.md`

### T5 — Design System (Fonte da Verdade)

- Definir paleta, tipografia, tokens e componentes base.
- Documentar regras de espaçamento, hierarquia e acessibilidade.
- **Entregável:** `core/DESIGN_SYSTEM.md`

### T6 — Estratégia Visual (Mapa de Mídia)

- Mapear mídia por bloco (imagens, gráficos, provas, placeholders).
- Definir diretrizes de consistência visual e performance (formato/otimização).
- **Entregável:** `guias/GUIA_ESTRATEGIA_VISUAL.md`

### T7 — Setup do Projeto (Código)

- Inicializar projeto e dependências.
- Definir estrutura de pastas e padrões de componentes.
- Implementar tokens do Design System.
- **Entregável:** projeto buildando + `guias/GUIA_SETUP_DEPLOY.md` atualizado

### T8 — Implementação da Página (Bloco a Bloco)

- Transformar cada seção da copy em componente.
- A cada bloco: build local + responsividade + QA básico.
- **Entregável:** página completa implementada (sem pendências críticas)

### T9 — Revisão, Polimento e Qualidade

- Fidelidade da copy (comparar código vs COPY_FINAL).
- Performance (imagens/lazy load), SEO, acessibilidade, responsividade.
- **Entregável:** checklist de qualidade aprovado + build limpo

### T10 — Deploy

- Configurar hospedagem, domínio (se houver) e pipeline de deploy.
- Publicar a versão inicial.
- **Entregável:** site no ar + instruções de rollback

### T11 — Validação Pós-Deploy

- Validar CTAs, links, assets, SEO/OG, SSL e métricas essenciais.
- Validar tracking (se aplicável).
- **Entregável:** checklist pós-deploy aprovado

### T12 — Operação e Iteração

- Monitorar métricas e comportamento.
- Planejar melhorias e testes (se aplicável).
- **Entregável:** backlog priorizado + registro de mudanças

---

## 5) Regras de Consistência (para evitar duplicidade)

- **Fonte da verdade da copy:** sempre `core/COPY_FINAL.md`.
- **Fonte da verdade do visual:** sempre `core/DESIGN_SYSTEM.md`.
- **Arquivos de execução:** sempre em `guias/`.
- **Histórico e versões antigas:** sempre em `arquivo/`.
- **Deduplicação:** se existirem 2+ arquivos com o mesmo objetivo, manter 1 canonical e mover os demais para `arquivo/_LEGADO_REDUNDANTE/` com prefixo `LEGADO__`.

---

## 6) Próximo Passo (preencher sempre)

- **Fase atual:** [T?]
- **Próximo passo imediato:** [AÇÃO]
- **Critério de aceite:** [COMO SABER QUE TERMINOU]

---

## Prompt de Ativação (para reutilizar em novos projetos)

> Use o arquivo "Linha do Tempo Scriptada do Projeto (TEMPLATE NEUTRO)" como padrão.
> 1) Preencha as variáveis do Contexto com os dados deste novo projeto.
> 2) Gere/atualize os entregáveis conforme cada fase T1–T12.
> 3) Garanta as regras: core (fontes da verdade), guias (guias), arquivo (histórico).
> 4) Se houver duplicidade de arquivos com mesmo objetivo, mantenha 1 canonical e mova o resto para arquivo/_LEGADO_REDUNDANTE/ (sem apagar nada).
> 5) Ao final, mostre: fase atual, próximo passo imediato e critério de aceite.
