# REGRAS DO WORKSPACE (ANTI-DUPLICAÇÃO + ANTI-ALUCINAÇÃO)

> **Escopo:** Este arquivo governa a **gestão de arquivos e estrutura** do workspace.
> Ele NÃO substitui o `MASTER_PROMPT_ESTRATEGICO.md` (que governa o fluxo de raciocínio e orquestração de skills).
> Ambos são complementares e devem ser respeitados simultaneamente.

---

## 0) Regra de Início (Obrigatória)
Antes de qualquer ação:
1. Listar a árvore atual do projeto.
2. Ler este arquivo (`REGRAS_DO_WORKSPACE.md`).
3. Ler `CANONICAL_MAP.md` e `MAPA_DO_PROJETO.md`.
4. Só então executar tarefas.

---

## 1) Objetivo
Manter a raiz do projeto com o MÍNIMO de arquivos possíveis e evitar criação de documentos redundantes.
Nada é apagado. Mudanças viram arquivamento com rastreabilidade.

---

## 2) Fontes da Verdade (CANONICAL)
- Texto final (copy): `core/COPY_FINAL.md`
- Visual (design system): `core/DESIGN_SYSTEM.md`
- Guias de execução: `guias/*` (somente os listados em `CANONICAL_MAP.md`)

Regra: qualquer informação nova deve ser incorporada em um CANONICAL existente, nunca em um arquivo novo "parecido".

---

## 3) Permissão para criar arquivos novos (restrita)
Só é permitido criar arquivo novo se:
- For um índice/README/Mapa/Changelog, OU
- For um novo tema que NÃO exista em `CANONICAL_MAP.md`.

Se criar um novo canonical, registrar imediatamente em `CANONICAL_MAP.md`.

---

## 4) Validação obrigatória antes de criar qualquer arquivo
Antes de criar:
1. Procurar se já existe arquivo com o mesmo objetivo (título/tema/palavras-chave).
2. Se existir, ATUALIZAR o arquivo existente (canonical).
3. Se existirem 2+ arquivos do mesmo tema:
   - Escolher 1 como CANONICAL.
   - Consolidar nele (sem apagar conteúdo dos outros).
   - Arquivar os demais como LEGADO.

---

## 5) Protocolo de Deduplicação
Quando houver redundância:
- Escolher o arquivo mais completo como CANONICAL.
- Copiar para ele qualquer conteúdo ÚNICO dos redundantes.
- Nunca deletar redundantes.
- Arquivar redundantes como LEGADO usando o protocolo abaixo.

---

## 6) Protocolo de Arquivamento (sem perda + rastreabilidade)
Ao arquivar qualquer arquivo:
1. Mover para: `arquivo/YYYY-MM-DD_HH-mm_BRT/` (timestamp).
2. Renomear com prefixo: `ARQ__` (ex.: `ARQ__nome-original.md`).
3. Inserir no TOPO do arquivo arquivado um bloco:

```
---
ARQUIVADO_EM: YYYY-MM-DD HH:mm (BRT)
MOTIVO: [por que foi arquivado]
SUBSTITUIDO_POR: [arquivo canonical atual]
OBS: [se houver instruções de recuperação]
---
```

Regra: arquivos arquivados são somente leitura (não editar depois).

---

## 7) Raiz mínima (Obrigatório)
A raiz do projeto deve conter apenas:
- `README.md`
- `REGRAS_DO_WORKSPACE.md`
- `MAPA_DO_PROJETO.md`
- `CANONICAL_MAP.md`
- (opcional) `TAREFAS.md`

Todo o resto fica em `core/`, `guias/` ou `arquivo/`.

---

## 8) Saída obrigatória ao finalizar qualquer tarefa
Sempre mostrar:
- Árvore final (DEPOIS).
- Lista de alterações (de → para).
- Canonicals atuais.
- Arquivamentos com timestamp e motivo.

---

## 9) Relação com outros documentos de governança
- **`MASTER_PROMPT_ESTRATEGICO.md`** → Define o fluxo de raciocínio da IA (skills, brainstorming, checkpoints). Não trata de arquivos.
- **`REGRAS_DO_WORKSPACE.md`** (este) → Define a gestão de arquivos (canonicals, duplicação, arquivamento). Não trata de raciocínio.
- **`CANONICAL_MAP.md`** → Índice dos arquivos canônicos por tema.
- **`MAPA_DO_PROJETO.md`** → Guia de navegação do workspace.

Nenhum desses documentos se sobrepõe. Todos devem ser lidos antes de qualquer ação.
