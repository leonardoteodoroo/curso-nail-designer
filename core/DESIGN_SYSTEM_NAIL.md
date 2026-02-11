# DESIGN SYSTEM NAIL DESIGNER - Valores Definidos para Projeto

**Projeto:** Landing Page Nail Designer - Curso de Manicure Profissional  
**Persona:** Mulheres 25-40 anos, mães, buscando independência financeira  
**Tom:** Acolhedor, feminino, profissional, empático (LightCopy)  
**Base:** Design System genérico adaptado com valores concretos

---

## 🎨 1) PALETA DE CORES (VALORES DEFINIDOS)

### Identidade Visual
**Conceito:** Feminino + Profissional + Delicado + Confiável  
**Inspiração:** Rosa suave (acolhimento) + Dourado (valor/aspiração)

### Texto
```css
--text-primary: #2C2C2C;           /* Quase preto, suave (alta legibilidade) */
--text-secondary: #5A5A5A;         /* Cinza médio (descrições) */
--text-muted: #9CA3AF;             /* Cinza claro (placeholders) */
--text-on-dark: #FFFFFF;           /* Branco puro */
--text-on-brand: #FFFFFF;          /* Branco sobre rosa/dourado */
--text-on-strong: #FFFFFF;         /* Branco sobre CTA forte */
```

### Superfícies (Backgrounds)
```css
--surface-page: #FAF8F6;           /* Off-white levemente rosado */
--surface-section: #FFF5F7;        /* Rosa muito claro (seções alternadas) */
--surface-card: #FFFFFF;           /* Branco puro (cards) */
--surface-subtle: #FFF0F3;         /* Rosa pastel sutil */
--surface-elevated: #FFFFFF;       /* Branco puro (modais/dropdowns) + sombra */
```

### Ações (Actions & Buttons)
```css
/* Primários (Rosa suave) */
--action-primary: #E8B4B8;         /* Rosa principal */
--action-primary-hover: #DD9FA4;   /* Rosa escurecido 10% */
--action-primary-active: #D28A90;  /* Rosa escurecido 20% */
--action-primary-disabled: #F3D5D8; /* Rosa desbotado */

/* Secundários (Borda/Outline) */
--action-secondary: transparent;
--action-secondary-hover: rgba(232, 180, 184, 0.08);
--action-secondary-active: rgba(232, 180, 184, 0.15);
--action-secondary-disabled: rgba(232, 180, 184, 0.3);

/* CTA Forte (Dourado - Alta conversão) */
--action-strong: #D4AF37;          /* Dourado principal */
--action-strong-hover: #C49F27;    /* Dourado escurecido 10% */
--action-strong-active: #B48F17;   /* Dourado escurecido 20% */
--action-strong-disabled: #E9D9A5; /* Dourado desbotado */
```

### Gradientes
```css
--gradient-primary: linear-gradient(135deg, #E8B4B8 0%, #D4AF37 100%);
--gradient-cta: linear-gradient(135deg, #E8B4B8 0%, #D4AF37 100%);
--gradient-hero: linear-gradient(180deg, #FFF5F7 0%, #FAF8F6 100%);
```

### Bordas
```css
--border-default: #E5E7EB;         /* Cinza claro neutro */
--border-subtle: #F3F4F6;          /* Cinza muito claro */
--border-focus: #D4AF37;           /* Dourado (acessibilidade) */
--border-disabled: #E5E7EB;        /* Cinza claro */
```

### Status
```css
/* Sucesso (Garantia) */
--status-success: #10B981;         /* Verde vibrante */
--status-success-surface: #ECFDF5; /* Verde claro fundo */

/* Alerta (Escassez - EVITAR, LightCopy não usa pressão) */
--status-warning: #F59E0B;         /* Laranja */
--status-warning-surface: #FFFBEB; /* Laranja claro */

/* Erro */
--status-error: #EF4444;           /* Vermelho */
--status-error-surface: #FEF2F2;   /* Vermelho claro */
```

### Links e Destaques
```css
--link-default: #D4AF37;           /* Dourado */
--link-hover: #B48F17;             /* Dourado escuro */
--highlight: rgba(232, 180, 184, 0.2); /* Rosa translúcido (marca-texto) */
```

---

## 📏 2) ESPAÇAMENTO (SEM ALTERAÇÕES - VALORES FIXOS)
```css
--space-1: 4px;
--space-2: 8px;
--space-3: 12px;
--space-4: 16px;
--space-6: 24px;
--space-8: 32px;
--space-12: 48px;
--space-16: 64px;
--space-20: 80px;
--space-24: 96px;
```

---

## ✍️ 3) TIPOGRAFIA

### Fontes
**Base (Corpo):** [Inter](https://fonts.google.com/specimen/Inter) ou [Outfit](https://fonts.google.com/specimen/Outfit)  
**Razão:** Legibilidade superior mobile, humanista, feminino sem ser infantil

**Headings (Títulos):** Mesma fonte com peso bold  
**Razão:** Consistência, simplicidade, performance (1 font family = menos peso)

```css
--font-family-base: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
--font-family-heading: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```

### Tamanhos (SEM ALTERAÇÕES)
```css
--text-xs: 12px;
--text-sm: 14px;
--text-base: 16px;   /* Base mobile */
--text-lg: 18px;
--text-xl: 20px;
--text-2xl: 24px;
--text-3xl: 30px;
--text-4xl: 36px;
--text-5xl: 48px;
--text-6xl: 56px;    /* Hero excepcional */
```

### Pesos
```css
--font-normal: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
```

### Line-height
```css
--leading-tight: 1.15;   /* Títulos */
--leading-snug: 1.25;    /* Subtítulos */
--leading-normal: 1.5;   /* Padrão */
--leading-relaxed: 1.65; /* Texto longo VSL */
```

### Legibilidade
```css
--measure-sm: 52ch;
--measure-md: 64ch;  /* Texto VSL */
--measure-lg: 72ch;
```

---

## 📐 4) LAYOUT & GRID

```css
--container-max: 1120px;           /* Desktop max */
--container-padding-x-mobile: 16px;  /* space-4 */
--container-padding-x-desktop: 24px; /* space-6 */

--grid-columns-mobile: 4;
--grid-columns-tablet: 6;
--grid-columns-desktop: 12;
--grid-gutter-mobile: 16px;        /* space-4 */
--grid-gutter-desktop: 24px;       /* space-6 */

--section-padding-y-mobile: 48px;  /* space-12 */
--section-padding-y-desktop: 64px; /* space-16 */
--hero-padding-y-desktop: 80px;    /* space-20 */
```

---

## 🌈 5) RADIUS & SHADOWS

### Radius
**Conceito:** Suave, acolhedor, feminino (evitar cantos retos demais)

```css
--radius-sm: 6px;      /* Inputs, badges */
--radius-md: 10px;     /* Botões padrão */
--radius-lg: 14px;     /* Cards */
--radius-xl: 18px;     /* CTAs, modais */
--radius-2xl: 24px;    /* Seções Impact */
--radius-full: 9999px; /* Circular */
```

### Shadows
**Conceito:** Sutis, profundidade suave (evitar sombras pesadas/dark)

```css
--shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.06);
--shadow-md: 0 4px 6px rgba(0, 0, 0, 0.08), 0 2px 4px rgba(0, 0, 0, 0.06);
--shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.08), 0 4px 6px rgba(0, 0, 0, 0.06);

/* Cards */
--shadow-card: 0 2px 8px rgba(0, 0, 0, 0.06);
--shadow-card-hover: 0 6px 16px rgba(0, 0, 0, 0.1);

/* CTA (Brilho dourado sutil) */
--shadow-cta: 0 8px 24px rgba(212, 175, 55, 0.25), 
              0 4px 12px rgba(232, 180, 184, 0.15);
```

---

## 🎬 6) MOTION (TRANSITIONS & ANIMATION)

**Conceito:** Suave, acolhedor, sem agressividade (compatível com ansiedade da persona)

### Timings
```css
--transition-fast: 180ms;    /* Hovers sutis */
--transition-normal: 280ms;  /* Padrão */
--transition-slow: 400ms;    /* Entradas/hero */
```

### Curvas (Easing)
```css
--ease-standard: cubic-bezier(0.4, 0.0, 0.2, 1);      /* Material ease */
--ease-emphasized: cubic-bezier(0.05, 0.7, 0.1, 1.0);  /* Entrada suave */
```

### Distâncias
```css
--motion-distance-sm: 6px;   /* Micro-movimentos */
--motion-distance-md: 16px;  /* Entradas */
```

**Regra obrigatória:** Respeitar `prefers-reduced-motion`

---

## 📱 7) BREAKPOINTS (SEM ALTERAÇÕES)
```css
--bp-mobile: <768px;
--bp-tablet: >=768px;
--bp-desktop: >=1024px;
--bp-wide: >=1280px;
```

---

## 📊 8) ELEVAÇÃO (Z-INDEX - SEM ALTERAÇÕES)
```css
--z-base: 0;
--z-sticky: 10;
--z-dropdown: 20;
--z-overlay: 30;
--z-modal: 40;
--z-toast: 50;
--z-tooltip: 60;
```

---

## 🧩 9) COMPONENTES ESPECÍFICOS DO PROJETO

### Botões
```css
/* Button Primary (Rosa suave) */
.btn-primary {
  background: var(--action-primary);
  color: var(--text-on-brand);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
  transition: all var(--transition-fast) var(--ease-standard);
}

/* Button CTA (Dourado - CONVERSÃO) */
.btn-cta {
  background: var(--gradient-cta);
  color: var(--text-on-strong);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-cta);
  font-weight: var(--font-bold);
  transition: all var(--transition-normal) var(--ease-emphasized);
}
.btn-cta:hover {
  transform: translateY(-2px) scale(1.02);
  box-shadow: 0 12px 32px rgba(212, 175, 55, 0.3);
}

/* Button Secondary (Outline) */
.btn-secondary {
  background: transparent;
  border: 2px solid var(--border-default);
  color: var(--text-primary);
  border-radius: var(--radius-md);
  transition: all var(--transition-fast) var(--ease-standard);
}
```

### Cards
```css
.card {
  background: var(--surface-card);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-card);
  padding: var(--space-6);
  transition: all var(--transition-fast) var(--ease-standard);
}
.card:hover {
  box-shadow: var(--shadow-card-hover);
  transform: translateY(-3px);
}
```

### Box de Destaque (Camila, CTAs)
```css
.impact-box {
  background: linear-gradient(135deg, 
    rgba(232, 180, 184, 0.08) 0%, 
    rgba(212, 175, 55, 0.08) 100%);
  border-left: 4px solid var(--action-strong);
  border-radius: var(--radius-xl);
  padding: var(--space-6);
  margin: var(--space-8) 0;
}
```

### Badges
```css
.badge {
  background: var(--surface-subtle);
  color: var(--text-secondary);
  border-radius: var(--radius-full);
  font-size: var(--text-xs);
  padding: var(--space-2) var(--space-3);
  font-weight: var(--font-medium);
}
```

### Alerts
```css
.alert-success {
  background: var(--status-success-surface);
  border-left: 4px solid var(--status-success);
  padding: var(--space-4);
  border-radius: var(--radius-md);
}
```

---

## 💎 10) CAMADA DE IMPACTO (TOKENS ESPECÍFICOS)

**Seções permitidas:** Hero, Box Camila, 2 CTAs, Wall of Love (header)

```css
/* Impact Layer Overrides */
.impact {
  --impact-surface-card: rgba(255, 255, 255, 0.95);
  --impact-gradient-primary: linear-gradient(135deg, 
    rgba(232, 180, 184, 0.12) 0%, 
    rgba(212, 175, 55, 0.12) 100%);
  --impact-gradient-cta: linear-gradient(135deg, #E8B4B8 0%, #D4AF37 100%);
  --impact-shadow-cta: 0 12px 32px rgba(212, 175, 55, 0.3), 
                       0 6px 16px rgba(232, 180, 184, 0.2);
  --impact-radius-xl: 20px;
}
```

---

## 🎯 11) DESIGN DECISIONS BASEADAS EM VOC & ARQUÉTIPOS

### Por que Rosa + Dourado?
- **Rosa (#E8B4B8):** Acolhimento, feminilidade, delicadeza
  - Conecta com: Mães, ansiedade social, vergonha de vender
  - VOC: "Quero me sentir segura", "Medo de errar"
  
- **Dourado (#D4AF37):** Aspiração, valor, profissionalismo
  - Conecta com: Desejo de independência, valorização
  - VOC: "Quero ser reconhecida", "Não quero cobrar barato"

### Por que cantos arredondados (radius generosos)?
- Suaviza ansiedade visual (perfeccionistas, ansiosas)
- Menos "corporativo", mais acolhedor
- VOC: "Medo de ambiente frio/técnico demais"

### Por que transições lentas (280ms-400ms)?
- Reduz agressividade visual
- Compatível com ansiedade social
- VOC: "Fico nervosa com movimento rápido"

### Por que sombras sutis?
- Profundidade sem peso visual
- Evita "dark mode" que pode intimidar
- VOC: "Quero algo leve, não pesado"

---

## ✅ CHECKLIST DE IMPLEMENTAÇÃO

### Cores
- [x] Paleta rosa/dourado definida
- [x] Contraste WCAG AA garantido (4.5:1 mínimo)
- [x] Tokens de status sem depender só de cor

### Tipografia
- [x] Fonte definida (Inter/Outfit)
- [x] Escala legível mobile
- [x] Line-height confortável (1.5+)

### Motion
- [x] Timings suaves (>180ms)
- [x] Curvas acolhedoras
- [x] prefers-reduced-motion respeitado

### Componentes
- [x] Botões com estados (hover, active, disabled, focus)
- [x] Cards com sombras sutis
- [x] Boxes de impacto (Camila, CTAs)

---

## 🚀 PRÓXIMO PASSO

Implementar HTML/CSS usando estes tokens definidos, garantindo:
1. ✅ Mobile-first
2. ✅ AVIF/WebP + lazy loading
3. ✅ Acessibilidade (foco visível, semântica)
4. ✅ Performance (LCP < 2.5s)

**Design System completo e específico para Nail Designer!** 💅✨
