# 🔄 RELATÓRIO DE DEDUPLICAÇÃO E CONSOLIDAÇÃO

Este relatório documenta as decisões tomadas para eliminar redundância e definir arquivos "Canônicos" (Oficiais).

---

## 1. ESTRATÉGIA VISUAL
- **Conflito:** `ESTRATEGIA_VISUAL_LP_VSL.md` vs `PANORAMA_VISUAL_LP.md` vs `ANTES_DEPOIS_VISUAL.md`.
- **Decisão:** `ESTRATEGIA_VISUAL_LP_VSL.md` foi escolhido como **Canônico**.
- **Motivo:** É muito mais detalhado, contendo prompts para IA, alt-texts e posicionamento exato. O `PANORAMA` era apenas um resumo.
- **Ação:** Renomeado para `/01-EXECUCAO/GUIA_ESTRATEGIA_VISUAL.md`. Os outros foram movidos para `_LEGADO_REDUNDANTE`.

## 2. ESTRUTURA NARRATIVA (ROTEIRO)
- **Conflito:** `ESTRUTURA_LP_VSL_NARRATIVA.md` vs `ROTEIRO_PAGINA_VENDAS.md`.
- **Decisão:** `ESTRUTURA_LP_VSL_NARRATIVA.md` foi escolhido como **Canônico**.
- **Motivo:** Reflete exatamente a copy final, enquanto o `ROTEIRO` era um documento preliminar de pesquisa.
- **Ação:** Renomeado para `/01-EXECUCAO/GUIA_ESTRUTURA_BLOCOS.md`. `ROTEIRO` movido para `_LEGADO_REDUNDANTE`.

## 3. COPY E OFERTA
- **Conflito:** `LP_VSL_COPY_FINAL.md` vs `PREVIEW_COPY_FINAL_ATUALIZADA.md`.
- **Decisão:** `LP_VSL_COPY_FINAL.md` mantido como **CORE**.
- **Observação Crítica:** O arquivo `PREVIEW` continha sugestões de alteração na oferta (removendo "módulos" e focando em "benefícios").
- **Motivo da Decisão:** A regra "NÃO reescrever LP_VSL_COPY_FINAL.md" foi respeitada estritamente. O CORE reflete o arquivo original. As sugestões do PREVIEW foram preservadas em `_LEGADO_REDUNDANTE` caso o usuário decida aplicá-las manualmente no futuro.

## 4. ANÁLISE DE COPY
- **Arquivos:** `ANALISE_COPY_FINAL.md`, `ANTES_DEPOIS_VISUAL.md`.
- **Ação:** Movidos para `_LEGADO_REDUNDANTE`, pois cumpriram seu papel de validar a copy, mas não são necessários para a *execução* diária.

---
**Resultado:** O workspace agora tem apenas 4 arquivos de texto principais para leitura diária (2 no CORE, 2 na EXECUCAO), eliminando a carga cognitiva de escolher entre múltiplas versões.
