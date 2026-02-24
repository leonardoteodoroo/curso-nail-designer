# GTM Setup — Rastreamento por Seção (`data-section`)
> Referência rápida para configurar o Google Tag Manager para a landing page Curso Nail Designer

---

## 1. Variável — Seção Atual (`{{Section Name}}`)

**GTM → Variáveis → Nova Variável**

| Campo | Valor |
|---|---|
| Nome | `Section Name` |
| Tipo | **JavaScript personalizado** |

```js
function() {
  var el = document.activeElement || document.body;
  var section = el.closest('[data-section]');
  if (!section) {
    // fallback: pega a seção mais visível na viewport
    var sections = document.querySelectorAll('[data-section]');
    var best = null;
    var bestRatio = 0;
    sections.forEach(function(s) {
      var rect = s.getBoundingClientRect();
      var visible = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);
      var ratio = visible / rect.height;
      if (ratio > bestRatio) { bestRatio = ratio; best = s; }
    });
    return best ? best.getAttribute('data-section') : 'unknown';
  }
  return section.getAttribute('data-section');
}
```

---

## 2. Variável — Seção do Clique (`{{Click Section}}`)

**GTM → Variáveis → Nova Variável**

| Campo | Valor |
|---|---|
| Nome | `Click Section` |
| Tipo | **JavaScript personalizado** |

```js
function() {
  var el = {{Click Element}};
  if (!el) return 'unknown';
  var section = el.closest('[data-section]');
  return section ? section.getAttribute('data-section') : 'unknown';
}
```

---

## 3. Trigger — Clique em Botão de Compra (`Clique Compra`)

**GTM → Acionadores → Novo**

| Campo | Valor |
|---|---|
| Nome | `Clique - Botão Compra` |
| Tipo | **Clique – Todos os elementos** |
| Dispara em | Alguns cliques |
| Condição | `Click URL` **contém** `go.hotmart.com` |

---

## 4. Tag — GA4 Event: `cta_click`

**GTM → Tags → Nova**

| Campo | Valor |
|---|---|
| Nome | `GA4 - CTA Click` |
| Tipo | **Evento do Google Analytics: GA4** |
| ID de medição | `G-CX8VDZBR85` |
| Nome do evento | `cta_click` |
| Acionador | `Clique - Botão Compra` |

**Parâmetros do evento:**
| Parâmetro | Valor |
|---|---|
| `section` | `{{Click Section}}` |
| `button_text` | `{{Click Text}}` |
| `destination_url` | `{{Click URL}}` |

---

## 5. Tag — FB Pixel: `InitiateCheckout`

**GTM → Tags → Nova**

| Campo | Valor |
|---|---|
| Nome | `FB Pixel - InitiateCheckout` |
| Tipo | **HTML personalizado** |
| Acionador | `Clique - Botão Compra` |

```html
<script>
  fbq('track', 'InitiateCheckout', {
    content_name: 'Curso Nail Designer',
    content_category: 'section: ' + {{Click Section}},
    currency: 'BRL',
    value: 49.90
  });
</script>
```

---

## 6. Tag — dataLayer Push: Scroll por Seção

Adicionar ao `index.html`, ANTES do `</body>`, para capturar scroll por seção automaticamente:

```html
<script>
(function() {
  var observed = {};
  var sections = document.querySelectorAll('[data-section]');
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      var name = entry.target.getAttribute('data-section');
      if (entry.isIntersecting && !observed[name]) {
        observed[name] = true;
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: 'section_view',
          section_name: name,
          scroll_depth: Math.round((window.scrollY + window.innerHeight) / document.body.scrollHeight * 100) + '%'
        });
      }
    });
  }, { threshold: 0.4 });
  sections.forEach(function(s) { observer.observe(s); });
})();
</script>
```

**Tag GTM correspondente:**

| Campo | Valor |
|---|---|
| Nome | `GA4 - Section View` |
| Tipo | Evento GA4 |
| Nome do evento | `section_view` |
| Acionador | **Evento personalizado** = `section_view` |
| Parâmetros | `section_name` → `{{dataLayer - section_name}}` |

---

## 7. Checklist para Publicação GTM

- [ ] Publicar container GTM após configurar todas as tags acima
- [ ] Testar com **GTM Preview Mode** na URL de produção
- [ ] Confirmar `section_view` disparando ao scrollar cada seção
- [ ] Confirmar `cta_click` disparando ao clicar em "QUERO MINHA VAGA"
- [ ] Verificar no **GA4 DebugView** os eventos chegando com parâmetro `section`
- [ ] Verificar no **Meta Pixel Helper** o `InitiateCheckout` disparando
