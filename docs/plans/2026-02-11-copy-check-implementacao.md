# Check Completo: Copy Proposta vs Implementação Atual

> **Para Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans para implementar este plano task-by-task.

**Goal:** Garantir que 100% da copy proposta no `LP_VSL_COPY_FINAL.md` esteja implementada na landing page.

**Arquitetura:** Landing page Next.js com componentes por seção, Tailwind CSS v4, Framer Motion para animações.

**Tech Stack:** Next.js 15, React 19, TypeScript, Tailwind CSS v4, Framer Motion

---

## 📊 RELATÓRIO DE AUDITORIA DA COPY

### Legenda
- ✅ = Implementado corretamente
- ⚠️ = Implementado parcialmente (conteúdo faltante)
- ❌ = NÃO implementado (seção inteira ausente)
- 🔄 = Implementado mas não usado na page.tsx

---

## SEÇÃO 1: HERO (Hero.tsx)
**Status: ✅ Completo**

| Elemento da Copy | Status | Observação |
|---|---|---|
| "Duas Mulheres. Mesma Idade. Mesma Cidade." | ✅ | OK |
| "Uma Cobra R$ 25 / A Outra Cobra R$ 120" | ✅ | Visual split-screen |
| "As Duas Fazem o Mesmo Alongamento em Gel" | ✅ | OK |
| "Qual a Diferença Entre Elas?" | ✅ | OK |
| "Não é talento. Não é sorte." | ✅ | OK |
| "É sobre ONDE você vende seu tempo" | ✅ | OK |
| Scroll indicator (seta bounce) | ✅ | ArrowDown animada |

---

## SEÇÃO 2: "EU SEI O QUE VOCÊ SENTE" (DorDaManicure.tsx)
**Status: ⚠️ Parcial**

| Elemento da Copy | Status | Observação |
|---|---|---|
| Título "Eu Sei O Que Você Sente" | ✅ | OK |
| Parágrafo emocional de abertura | ✅ | OK (resumido) |
| Dor 1: Perfeccionismo (refazer 3x) | ⚠️ | Condensado no card da Mariana (curto) |
| Dor 2: Vergonha de cobrar (R$80→R$50) | ⚠️ | Condensado no card da Carla |
| Dor 3: Cancelamento WhatsApp (ansiedade) | ⚠️ | Parcial no card da Jéssica |
| **Texto completo "Ou então..." (cobrar menos que Uber)** | ❌ | **FALTANDO - narrativa emocional inteira** |
| **Texto completo "Ou pior..." (cancelamento WhatsApp)** | ❌ | **FALTANDO - narrativa emocional inteira** |
| "Não é culpa sua" | ❌ | **FALTANDO** |
| 7 Depoimentos individuais (Mariana-Bruna) | ✅ | Cards no grid |
| **Camila ZL / Fernanda Interior (Destaque)** | ⚠️ | Camila presente mas Fernanda+blocos "Percebeu o padrão" não |
| **Seção "Percebeu o padrão?" com checkmarks** | ⚠️ | Existe mas simplificado |
| **Débora, 32 anos - Brasília** | ❌ | **FALTANDO** |
| **Tatiane, 38 anos - Florianópolis** | ❌ | **FALTANDO** (card ausente do grid) |
| **Bruna, 27 anos - Recife** | ❌ | **FALTANDO** (card ausente do grid) |

**Nota: O componente `Historias.tsx` EXISTE mas NÃO está sendo usado em `page.tsx`.**

---

## SEÇÃO 3: "VOCÊ NÃO ESTÁ SOZINHA" (Historias.tsx)
**Status: 🔄 Existe mas NÃO está na page.tsx**

| Elemento da Copy | Status | Observação |
|---|---|---|
| Título "Você Não Está Sozinha" | 🔄 | Em Historias.tsx (não renderizado) |
| Mariana, Carla, Jéssica - depoimentos completos | 🔄 | Em Historias.tsx |
| Fernanda + Camila "Mina de Ouro" | 🔄 | Em Historias.tsx |
| "Percebeu o padrão?" com Periferia/Interior | 🔄 | Em Historias.tsx |

---

## SEÇÃO 4: "O QUE NINGUÉM TE CONTOU" (OQueNinguemTeContou.tsx)
**Status: ✅ Completo**

| Elemento da Copy | Status | Observação |
|---|---|---|
| "O Que Ninguém Te Contou" | ✅ | OK |
| "TODO MUNDO te ensinou ERRADO" | ✅ | OK |
| Caos do YouTube (47 vídeos) | ✅ | Visual com cards empilhados |
| Curso Presencial R$800 | ✅ | Before/After visual |
| Lista "Nenhum curso te ensina" (5 itens) | ✅ | Grid com ícones X |
| "É aí que você trava" | ✅ | OK |
| Transição "algo completamente diferente" | ✅ | OK |

---

## SEÇÃO 5: "A HISTÓRIA DE MARIANA" (HistoriaMariana.tsx)
**Status: ✅ Completo**

| Elemento da Copy | Status | Observação |
|---|---|---|
| ANTES/DEPOIS visual | ✅ | Split com imagens |
| Quote inicial da Mariana | ✅ | OK |
| "As unhas dela NÃO são perfeitas" | ✅ | OK |
| Diálogo Cliente/Antes/Depois | ✅ | Chat bubbles visuais |
| "Autoridade se constrói" | ✅ | OK |
| 3 mini-exemplos (Carla, Jéssica, Ana) | ✅ | Grid cards |
| "NÃO é sobre dom. É SISTEMA CERTO" | ✅ | OK |

---

## SEÇÃO 6: "EU SEI O QUE VOCÊ TÁ PENSANDO" (AntiClimax.tsx)
**Status: ✅ Completo**

| Elemento da Copy | Status | Observação |
|---|---|---|
| 3 objeções ("E se eu não conseguir?") | ✅ | OK |
| Empatia ("Eu entendo") | ✅ | OK |
| "Isso aqui NÃO é milagre" | ✅ | Visual destacado |
| Checklist (4 itens) | ✅ | OK |
| "+ de 48 MIL mulheres" | ✅ | OK |
| "Não é milagre. É método." | ✅ | OK |

---

## SEÇÃO 7: MÓDULOS DO CURSO (Modulos.tsx)
**Status: ⚠️ Parcial**

| Elemento da Copy | Status | Observação |
|---|---|---|
| "O Nail Designer - Escola de Unhas Profissionais" | ✅ | OK |
| Módulo 1: Base Técnica | ✅ | OK |
| Módulo 2: Alongamento Premium | ⚠️ | **Itens reduzidos** - Faltam: Naturalidade, Redondo, Almond, Bailarina, Banho de Gel, Blindagem, Manutenção Natural/Reposição |
| Módulo 3: Acabamentos | ⚠️ | **Itens reduzidos** - Falta: Decoração Trass |
| Módulo 4: Atendimento | ✅ | OK |
| Módulo 5: Negócio em Casa | ✅ | OK |
| **Seção "BÔNUS EXCLUSIVOS: Técnicas Extras"** | ❌ | **FALTANDO** - Spa dos Pés, Manicure Masculina, Técnicas Especiais (lista entre Módulos e Bônus) |
| **"Isso são 27+ técnicas profissionais"** | ❌ | **FALTANDO** |
| **"Mais de 130 aulas completas"** | ❌ | **FALTANDO** (transição entre módulos e bônus) |

---

## SEÇÃO 8: BÔNUS (Bonus.tsx)
**Status: ⚠️ Parcial**

| Elemento da Copy | Status | Observação |
|---|---|---|
| Bônus 1: Extensão de Cílios | ✅ | OK |
| Bônus 2: Manicure & Pedicure | ✅ | OK |
| Bônus 3: Cutilagem em Laranja | ✅ | OK |
| Bônus 4: Polygel | ✅ | OK |
| Bônus 5: Manicure Masculina | ✅ | OK |
| Bônus 6: Ferramentas Prontas | ✅ | OK |
| Bônus 7: Sorteio Mensal | ✅ | OK |
| **Certificados (25 certificados, Lei 9.394/96)** | ❌ | **FALTANDO - seção inteira sobre como funcionam os certificados** |
| **"Recapitulando..." (lista final resumo)** | ❌ | **FALTANDO** |

---

## SEÇÃO 9: WALL OF LOVE (WallOfLove.tsx)
**Status: ⚠️ Parcial (significativamente incompleto)**

| Elemento da Copy | Status | Observação |
|---|---|---|
| Stats (48k, 4.8/5, 87%, R$1.2k-3.5k) | ✅ | OK |
| Carrossel de quotes curtos (15 frases) | ✅ | Marquee duplo |
| **CONQUISTAS FINANCEIRAS (Amanda, Lívia, Rafaela)** | ❌ | **FALTANDO INTEIRO** |
| **CONQUISTAS TÉCNICAS (Juliana, Thaís, Gabriela)** | ❌ | **FALTANDO INTEIRO** |
| **CONQUISTAS EMOCIONAIS (Bianca, Priscila, Cláudia)** | ❌ | **FALTANDO INTEIRO** |
| **CONQUISTAS FAMILIARES (Kelly, Simone, Laura)** | ❌ | **FALTANDO INTEIRO** |
| **CONQUISTAS DE RECONHECIMENTO (Eduarda, Natália, Vanessa)** | ❌ | **FALTANDO INTEIRO** |
| **CONQUISTAS IMPROVÁVEIS (Carolina, Andréia, Roberta)** | ❌ | **FALTANDO INTEIRO** |
| **GALERIA DE UNHAS feitas por alunas** | ❌ | **FALTANDO** |
| **ANTES & DEPOIS: Transformação Visual** | ❌ | **FALTANDO** |
| **"A Realização Mais Importante" (fecho emocional)** | ❌ | **FALTANDO** |
| **CTA intermediário "Quero Fazer Parte"** | ❌ | **FALTANDO** |

---

## SEÇÃO 10: OFERTA + PREÇO (FinalCTA.tsx)
**Status: ⚠️ Parcial**

| Elemento da Copy | Status | Observação |
|---|---|---|
| "Um Último Recado" | ✅ | OK |
| "Não vou colocar SÓ 3 VAGAS" | ✅ | OK |
| Emocional sobre adiar | ✅ | OK |
| **"Quanto Vale Sua Independência?"** | ❌ | **FALTANDO - seção inteira de ancoragem de preço** (R$997 riscado, R$297 riscado) |
| **"Isso é MENOS que:" (comparações de preço)** | ❌ | **FALTANDO** - meia unha, açaí, Uber |
| Preço: 12x R$9,74 ou R$97 à vista | ✅ | OK |
| Features list (5 itens) | ✅ | OK |
| CTA "QUERO COMEÇAR AGORA" | ✅ | OK |
| Trust badges (Hotmart, SSL) | ✅ | OK |
| Assinatura "Com carinho" | ✅ | OK |
| **"Atualizações GRÁTIS para sempre"** | ❌ | **FALTANDO** |
| **"Acesso IMEDIATO após pagamento"** | ❌ | **FALTANDO - descrição detalhada** |
| **P.S. final "Daqui a 6 meses"** | ❌ | **FALTANDO** |

---

## SEÇÃO 11: GARANTIA (Garantia.tsx)
**Status: ✅ Quase completo**

| Elemento da Copy | Status | Observação |
|---|---|---|
| "Garantia Incondicional de 7 Dias" | ✅ | OK |
| "Basta enviar 1 e-mail" | ✅ | OK |
| "100% do seu dinheiro" | ✅ | OK |
| "Sem letras miúdas" (lista) | ✅ | OK |
| "O risco é TODO meu" | ✅ | OK |

---

## SEÇÃO 12: FAQ (FAQ.tsx)
**Status: ⚠️ Parcial**

| Elemento da Copy | Status | Observação |
|---|---|---|
| 16 perguntas na copy | ⚠️ | **Apenas 10 implementadas** |
| **FAQ 7: "Sou muito perfeccionista"** | ❌ | **FALTANDO** |
| **FAQ 10: "Terei suporte após a compra?"** | ❌ | **FALTANDO** |
| **FAQ 11: "O curso tem atualização?"** | ❌ | **FALTANDO** |
| **FAQ 12: "Como faço para acessar?"** | ❌ | **FALTANDO** |
| **FAQ 13: "Como solicito os certificados?"** | ❌ | **FALTANDO** |
| **FAQ 15: "Precisa de material caro?"** | ❌ | **FALTANDO** |
| CTA final pós-FAQ | ✅ | OK |

---

## SEÇÃO 13: CTA PRIMÁRIO (Primeiro CTA grande)
**Status: ❌ FALTANDO**

| Elemento da Copy | Status | Observação |
|---|---|---|
| **Bloco CTA rosa/dourado "SIM, QUERO MINHA INDEPENDÊNCIA AGORA"** | ❌ | **O primeiro CTA grande entre Garantia e FAQ na copy NÃO existe como componente separado** |
| Preço: 7x R$8,16 ou R$49,90 à vista | ❌ | **NOTA: A copy tem DOIS preços diferentes!** |

---

## SEÇÃO 14: FOOTER (Footer.tsx)
**Status: ✅ Completo**

---

## 📋 RESUMO EXECUTIVO

### ✅ Implementado (8 de 14 seções completas)
1. Hero
2. O Que Ninguém Te Contou
3. História da Mariana
4. Anti-Climax ("Eu sei o que você tá pensando")
5. Garantia
6. Footer

### ⚠️ Parcialmente Implementado (5 seções)
1. **DorDaManicure** - Falta narrativa emocional detalhada + depoimentos Débora/Tatiane/Bruna
2. **Modulos** - Falta itens detalhados de cada módulo + seção "27+ técnicas"
3. **Bonus** - Falta seção certificados + recapitulação
4. **WallOfLove** - MUITO incompleto: faltam 6 categorias de conquistas + galeria
5. **FinalCTA** - Falta ancoragem de preço + comparações + P.S.
6. **FAQ** - Faltam 6 perguntas

### ❌ NÃO Implementado (conteúdo crítico)
1. **Historias.tsx** existe mas NÃO está na page.tsx (deveria ser integrado)
2. **"Você Não Está Sozinha"** como seção separada
3. **Seção de Conquistas detalhadas** (Financeiras, Técnicas, Emocionais, Familiares, Reconhecimento, Improváveis)
4. **Galeria de Unhas por alunas**
5. **Before/After transformações visuais**
6. **"Quanto Vale Sua Independência?"** (ancoragem de preço)
7. **P.S. final emocional**

---

## 🎯 PRIORIDADE DE IMPLEMENTAÇÃO

### P0 - Crítico (Impacto direto na conversão)
1. Integrar `Historias.tsx` na page.tsx
2. Completar WallOfLove com conquistas categorizadas
3. Adicionar seção "Quanto Vale Sua Independência" (ancoragem de preço)
4. Adicionar P.S. final emocional
5. Completar FAQ (6 perguntas faltantes)

### P1 - Alto (Conteúdo emocional importante)
6. Expandir DorDaManicure com narrativa emocional completa
7. Adicionar seção Certificados + Recapitulação nos Bônus
8. Completar detalhes dos módulos (itens faltantes)

### P2 - Médio (Polish e completude)
9. Adicionar depoimentos faltantes (Débora, Tatiane, Bruna)
10. Galeria de Unhas por alunas
11. "Atualizações GRÁTIS" + "Acesso IMEDIATO" detalhados

---

## ⚠️ INCONSISTÊNCIA DE PREÇO DETECTADA

A copy contém **DOIS blocos de preço diferentes**:

1. **Primeiro CTA:** `7x de R$ 8,16` ou `R$ 49,90 à vista`
2. **CTA Final:** `12x de R$ 9,74` ou `R$ 97,00 à vista`

O componente FinalCTA.tsx implementa apenas o segundo (R$97). **Qual é o preço correto?** Isso precisa ser resolvido pelo USER antes da implementação.

---
