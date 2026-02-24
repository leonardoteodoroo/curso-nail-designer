# Backup de Tags — Curso Nail Designer
> Atualizado em: 2026-02-24 | Versão: 1.0

Este arquivo documenta todas as tags de rastreamento, IDs de ancoragem e atributos de dados dos 16 fragmentos da landing page. Use como referência para campanhas de anúncios, configuração de UTMs no GTM e qualquer auditoria futura.

---

## 1. Tags de Marketing Global (`index.html`)

| Tag | ID / Prop | Finalidade |
|---|---|---|
| Google Tag Manager | `GTM-M4CHW3MC` | Container central de tags. Gerencia todos os eventos de conversão |
| Google Analytics 4 | `G-CX8VDZBR85` | Análise de comportamento, funil de conversão, eventos de scroll |
| Facebook Pixel 1 | `4197145117266394` | Pixel principal — conversões e audiências de retargeting |
| Facebook Pixel 2 | `563316966782879` | Pixel secundário (provavelmente do afiliado/gerente de tráfego) |

**Como foi implementado:** Scripts no `<head>` do `index.html` com `PageView` disparando automaticamente no load.

---

## 2. IDs de Ancoragem — Mapeamento Completo

### Convenção adotada após auditoria (2026-02-24)
- **ID principal** = usado pelo `App.tsx` (ex: `data-section="hero"`) — para GTM e UTM
- **ID legado** = IDs anteriores mantidos como aliases invisíveis via `<span>` para não quebrar CTAs existentes

| Fragmento | ID Principal | ID Legado | `data-section` | Link Hotmart no CTA |
|---|---|---|---|---|
| Step01_Hero | `hero` | — | `hero` | CTA scrolls para `#modulos` |
| Step02_DorDaManicure | `dor-da-manicure` | — | `dor-da-manicure` | — |
| Step03_TimelineNailDesigner | `timeline` | — | `timeline` | — |
| Step04_HistoriaMariana | `historia-mariana` | — | `historia-mariana` | CTA scrolls para `#anti-climax-lp2` |
| Step05_AntiClimax | `anti-climax` | `anti-climax-lp2` | `anti-climax` | — |
| Step06_CarouselStitch | `carousel-stitch` | — | `carousel-stitch` | CTA scrolls para `#modulos` |
| Step07_Modulos | `modulos` | `oferta-lp2` | `modulos` | CTA scrolls internos |
| Step08_CertificatesStepper2 | `certificates-stepper` | — | `certificates-stepper` | — |
| Step09_OfertaInicial | `oferta-inicial` | `oferta-inicial` | `oferta-inicial` | — |
| Step10_PriceSpoilerV2 | `price-spoiler-v2` | — | `price-spoiler-v2` | `?src=price_spoiler` |
| Step11_Garantia | `garantia` | `garantia-lp2` | `garantia` | — |
| Step12_FAQ | `faq` | `faq-lp2` | `faq` | `?src=faq` |
| Step13_WallOfLove | `wall-of-love` | — | `wall-of-love` | `?src=wall_of_love` |
| Step14_FinalOfferStitch | `final-offer` | — | `final-offer` | `?src=final_offer` |
| Step15_ExitIntent | *(modal flutuante)* | — | *(modal, não section)* | `?src=exit_intent` |
| Step16_Footer | `footer` | — | `footer` | — |

---

## 3. Links de Checkout (Hotmart) — Parâmetros `src`

Todos os botões de compra usam a URL base:
```
https://go.hotmart.com/K104371220N?ap=5bc1&src=NOME_DA_SECAO
```

| Seção (src) | Fragmento | Observação |
|---|---|---|
| `price_spoiler` | Step10 | Botão principal do price spoiler revelado |
| `faq` | Step12 | CTA na seção de dúvidas frequentes |
| `wall_of_love` | Step13 | CTA do mural de depoimentos |
| `final_offer` | Step14 | Botão da oferta final sticky |
| `exit_intent` | Step15 | Modal de abandono de página |

---

## 4. Atributo `data-section` para GTM

Todos os fragmentos recebem `data-section="NOME"` na tag raiz (`<section>` ou `<div>`).

**Uso no GTM:** Crie variável de camada de dados que lê `.closest('[data-section]').dataset.section` nos eventos de clique. Use para rastrear em qual seção o usuário clicou no CTA.

**Exemplo de trigger no GTM:**
```js
// Regra de trigger: "Clique em qualquer botão de compra"
// Variável customizada: {{Section Name}}
// -> Corresponde a: element.closest('[data-section]')?.dataset.section
```

---

## 5. Parâmetros UTM para Anúncios

### Template padrão de URL de campanha
```
https://go.hotmart.com/K104371220N?ap=5bc1&src=SECAO&utm_source=FONTE&utm_medium=MIDIA&utm_campaign=CAMPANHA&utm_content=CRIATIVO
```

### Exemplos por canal
| Canal | `utm_source` | `utm_medium` | Exemplo `utm_campaign` |
|---|---|---|---|
| Facebook Ads | `facebook` | `paid_social` | `nail_dor_manicure_q1` |
| Instagram Ads | `instagram` | `paid_social` | `nail_historia_mariana` |
| Google Ads | `google` | `cpc` | `nail_comprar_curso` |
| Orgânico IG | `instagram` | `social` | `nail_organico` |
| WhatsApp | `whatsapp` | `direct` | `nail_grupos` |

---

## 6. Imagens com LCP (acima da dobra)

Estas imagens **NÃO devem ter `loading="lazy"`** — são críticas para o LCP:

| Imagem | Fragmento | Atributos corretos |
|---|---|---|
| `step01-hero-unha-simples.webp` | Step01 | `loading="eager" fetchPriority="high" decoding="sync"` |
| `step01-hero-unha-premium.webp` | Step01 | `loading="eager" fetchPriority="high" decoding="sync"` |
| `step15-exit-intent.webp` | Step15 (modal) | `loading="eager"` — carrega antecipado para o modal |

Todas as demais imagens (Step02–Step14, Step16): `loading="lazy" decoding="async"` ✅

---

## 7. Preload no `index.html`

```html
<!-- Hero LCP — NÃO REMOVER -->
<link rel="preload" href="/images/step01-hero-unha-simples.webp" as="image" type="image/webp" fetchpriority="high" />
<link rel="preload" href="/images/step01-hero-unha-premium.webp" as="image" type="image/webp" fetchpriority="high" />
```

---

## 8. Checklist de Pré-Lançamento de Campanha

- [ ] Confirmar GTM publicado com tags de conversão ativas
- [ ] Testar Facebook Pixel (Meta Pixel Helper) — ambos os IDs disparando
- [ ] Testar GA4 em tempo real — PageView + eventos de scroll
- [ ] Verificar todos os `?src=` nos links Hotmart correspondendo à tabela acima
- [ ] Verificar `data-section` em todos os 16 fragmentos (DevTools console: `document.querySelectorAll('[data-section]').length >= 15`)
- [ ] Build de produção sem erros (`npm run build`)
- [ ] Deploy + commit (`git add -A && git commit -m "feat: ancoragem e tags prontas para veiculacao"`)
