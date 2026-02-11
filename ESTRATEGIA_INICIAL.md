# Protocolo Maestro Universal 2026 - Estratégia Inicial

**Data:** 11/02/2026
**Projeto:** LP Nail Designer (Migração & Hardening)
**Status:** 🟡 Planejamento

---

## 1. Diagnóstico
O projeto encontra-se em um estado de "crise de identidade". A estrutura atual utiliza **Next.js 16**, mas o objetivo operacional é um **Single Page Application (SPA)** leve, rodando sobre **Vite** com **React 19**. O deploy está quebrado possivelmente devido à complexidade desnecessária do Next.js para um site estático hospedado no GitHub Pages, ou conflitos de configuração.

**Pontos Críticos:**
*   **Sobrecarga de Framework:** Next.js é excessivo para o escopo e introduz complexidade de build/deploy (SSR/SSG) que conflita com a simplicidade desejada.
*   **Dependências Legadas/Incompatíveis:** A mistura de configurações (Next config vs desejo de Vite) impede o funcionamento.
*   **Estilização:** Necessidade de garantir que o Tailwind (visado v4) esteja perfeitamente integrado ao pipeline do Vite.

**Solução:** Substituição cirúrgica do motor de build (Next.js -> Vite), limpeza total de dependências e reconfiguração do "Adamantium" (Stack sólida: React 19 + TS + Vite + Tailwind 4).

---

## 2. Squad de Agentes

| Skill / Agente | Função Prática | Justificativa |
| :--- | :--- | :--- |
| **react-modernization** | Especialista em React | Garantir que a migração para React 19 (e remoção de dependências do Next como `next/image`) seja feita usando os padrões mais recentes (Hooks, CreateRoot). |
| **tailwind-design-system** | Arquiteto de UI | Implementar Tailwind CSS v4 com a nova configuração "Zero-Config" (CSS-first), garantindo performance máxima e leveza. |
| **writing-plans** | Estrategista | Estruturar a execução da migração passo-a-passo para evitar "quebras" durante o processo. |
| **github-actions-templates** | DevOps | Corrigir o pipeline de deploy para o GitHub Pages, garantindo que `npm run deploy` funcione determinística e previsivelmente. |

---

## 3. Plano de Ação

### Fase 1: Tabula Rasa (Limpeza e Fundação)
1.  **Exurpar Next.js:** Remover `next`, `eslint-config-next` e arquivos de config (`next.config.mjs`, pasta `.next`).
2.  **Instalar Motor Vite:** Adicionar `vite`, `@vitejs/plugin-react` e atualizar `react`/`react-dom` para as versões estáveis mais recentes do 19.
3.  **Configurar Tailwind 4:** Instalar `@tailwindcss/vite` e `tailwindcss`. Configurar o arquivo CSS principal com a diretiva `@import "tailwindcss";`.
4.  **Estrutura de Arquivos:** Mover `index.html` para a raiz (padrão Vite) e configurar o script de entrada module apontando para `src/main.tsx`.

### Fase 2: Transplante de Código
1.  **Entry Point:** Criar `src/main.tsx` limpo usando `createRoot`.
2.  **Adaptação de Componentes:** Varrer `src/` em busca de importações específicas do Next.js (ex: `Link`, `Image`) e substituir por equivalentes padrão (`<a>`, `<img>`) ou componentes equivalentes do React standard, já que o foco é performance e leveza.
3.  **Assets & Fontes:** Configurar Google Fonts (Inter/Playfair) diretamente no CSS ou HTML head. Verificar se Lucide React está importado corretamente.

### Fase 3: Hardening e Deploy
1.  **Scripts:** Atualizar `package.json` scripts:
    *   `dev`: `vite`
    *   `build`: `tsc -b && vite build`
    *   `preview`: `vite preview`
    *   `deploy`: `gh-pages -d dist` (Vite gera em `dist`, não `out`).
2.  **Validação Local:** Garantir build sem erros e funcionamento das animações (bounce, pulse).
3.  **Deploy:** Executar o deploy para GitHub Pages e validar produção.

---

## 4. Critérios de Sucesso (Nota 100)

1.  **Zero Next.js:** Nenhum traço de Next.js residual no `package.json` ou `node_modules`.
2.  **Vite Powered:** O comando `npm run dev` incia o servidor em <300ms.
3.  **Tailwind v4 Nativo:** Estilos carregam instantaneamente sem FOUC (Flash of Unstyled Content), usando a engine Rust do Tailwind 4.
4.  **Deploy Funcional:** URL do GitHub Pages abre o site corretamente, sem páginas 404 ou erros de console.
5.  **Fidelidade Visual:** Todas as animações e fontes estão presentes conforme o design original "Dark Graphite".
