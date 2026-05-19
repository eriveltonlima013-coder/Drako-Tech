# Drako Tech — Design System (system.md)

Este documento define as fundações visuais, diretrizes de interface (UI), tokens de design e componentes para todos os projetos da **Drako Tech**. O objetivo é garantir consistência de marca, desenvolvimento ágil e uma experiência digital premium com apelo futurista e tecnológico.

---

## 1. Visual Concept: The Cyber-Dragon

Nossa marca é inspirada na figura mística do **Dragão**, reinventada através de uma lente tecnológica e futurista (**Cyberpunk/Tech/Premium**). A identidade visual deve traduzir as seguintes características conceituais:

*   **Poder e Impacto:** Uso de vermelho profundo e vibrante, contrastado com fundos extremamente escuros.
*   **Precisão Digital:** Linhas nítidas, bordas técnicas, fontes de largura fixa parcial (*monospace feeling*) e acentos cromáticos.
*   **Inteligência e Adaptabilidade:** Gradientes fluidos que unem o frio do ciano com a energia do vermelho através de tons roxos enigmáticos.
*   **Misticismo Tecnológico:** Efeitos sutis de luminescência (*glow*), desfoques de fundo (*glassmorphism*) e sombras de neon neon-glow controladas para evitar poluição visual.

---

## 2. Color Palette (Tokens de Cor)

A paleta de cores foi desenvolvida para criar um contraste dinâmico de altíssimo nível, perfeito para interfaces Dark Mode por padrão.

### Variáveis de Cores (CSS Custom Properties)

```css
:root {
  /* Brand Colors */
  --color-primary: #FF1A40;       /* Dragon Red (CTAs, Destaques) */
  --color-secondary: #00F0FF;     /* Tech Cyan (Tecnologia, Acoplamentos) */
  --color-tertiary: #9D00FF;      /* Cyber Purple (Transição, Inovação) */

  /* Neutral Dark (Fundo - Modo Escuro) */
  --color-bg-base: #06080F;       /* Deep Obsidian (Preto profundo com tom azulado) */
  --color-bg-surface: #0C0F17;    /* Obsidian Slate (Containers, Cards, Menus) */
  --color-bg-elevated: #121724;   /* Cyber Slate (Inputs, Modais, Dropdowns) */

  /* Borders & Dividers */
  --color-border: #1B2234;        /* Dark Slate Border */
  --color-border-hover: #29344F;  /* Medium Slate Border para hover */
  --color-border-glow: rgba(255, 26, 64, 0.25); /* Glow sutil de borda primária */

  /* Neutral Light (Textos) */
  --color-text-primary: #F8FAFC;  /* Cyber White (Máxima legibilidade e brilho) */
  --color-text-secondary: #94A3B8;/* Cool Slate (Textos secundários e descrições) */
  --color-text-muted: #64748B;    /* Muted Slate (Informações de apoio, placeholders) */

  /* Status Colors */
  --color-success: #10B981;       /* Emerald Green */
  --color-warning: #F59E0B;       /* Amber Gold */
  --color-error: #EF4444;         /* Neon Rose */
}
```

---

## 3. Typography (Tipografia)

Trabalhamos com duas fontes importadas diretamente do Google Fonts, criando um balanço perfeito entre a estética técnica cibernética e a leitura fluida.

*   **Heading Font:** `Space Grotesk` (Google Fonts) — Fonte sem serifa, de proporções generosas, com cortes geométricos que remetem a estruturas de código e hardware de alta performance.
*   **Body Font:** `Plus Jakarta Sans` (Google Fonts) — Fonte limpa, geométrica, extremamente legível em qualquer escala e otimizada para longos períodos de leitura em telas escuras.

### Escala Tipográfica (Rem & Pixels)

| Elemento | Font-Family | Size (rem) | Size (px) | Line-Height | Weight | Descrição |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **H1 (Hero)** | Space Grotesk | `3.5rem` | 56px | 1.15 | `700` (Bold) | Headings principais e títulos de impacto hero. |
| **H2 (Section)**| Space Grotesk | `2.25rem` | 36px | 1.2 | `600` (SemiBold)| Títulos de seções de conteúdo. |
| **H3 (Card)** | Space Grotesk | `1.5rem` | 24px | 1.3 | `600` (SemiBold)| Títulos de cartões, sub-seções e modais. |
| **Body (Main)** | Plus Jakarta | `1.0rem` | 16px | 1.6 | `400` (Regular) | Corpo de texto principal e parágrafos. |
| **Body (Bold)** | Plus Jakarta | `1.0rem` | 16px | 1.6 | `600` (SemiBold)| Destaques importantes em parágrafos. |
| **Small/Label** | Plus Jakarta | `0.875rem`| 14px | 1.4 | `500` (Medium)  | Legendas, rodapés, badges e tags de status. |
| **Code/Mono** | JetBrains Mono | `0.9rem`  | 14.4px| 1.5 | `400` (Regular) | Snippets de código, valores de tokens, dados técnicos. |

---

## 4. UI Components & Tokens (Componentes de UI)

Abaixo estão os padrões estéticos definidos para nossos botões, gradientes e regras estruturais em Tailwind CSS.

### A. Botões (Interactive Buttons)

Nossos botões possuem uma sensação tátil premium, respondendo com animações e variações de brilho no hover.

#### 1. Primary Button: **Dragon Crimson Glow**
*   **Estilo:** Fundo sólido vermelho neon (`--color-primary`), texto preto escuro para máximo contraste em botões ativos, e borda sutil.
*   **Hover state:** Expansão leve de escala (1.02) e um efeito de sombra neon vermelha.
*   **Tailwind:**
    ```html
    <button class="px-6 py-3 font-semibold text-slate-950 bg-[#FF1A40] rounded-xl hover:bg-[#FF3355] transition-all duration-300 transform hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(255,26,64,0.4)] cursor-pointer">
      Iniciar Projeto
    </button>
    ```

#### 2. Secondary Button: **Tech Cyan Outline**
*   **Estilo:** Borda em ciano neon (`--color-secondary`), fundo transparente e texto ciano.
*   **Hover state:** Fundo preenche levemente com ciano a 10% de opacidade e um glow ciano delicado.
*   **Tailwind:**
    ```html
    <button class="px-6 py-3 font-semibold text-[#00F0FF] bg-transparent border border-[#00F0FF] rounded-xl hover:bg-[#00F0FF]/10 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-[0_0_15px_rgba(0,240,255,0.25)] cursor-pointer">
      Nossos Serviços
    </button>
    ```

#### 3. Ghost Button: **Minimal Slate**
*   **Estilo:** Sem fundo ou borda inicial, apenas texto cinza claro (`--color-text-secondary`).
*   **Hover state:** Fundo cinza escuro sutil e texto em branco absoluto (`--color-text-primary`).
*   **Tailwind:**
    ```html
    <button class="px-6 py-3 font-semibold text-slate-400 bg-transparent rounded-xl hover:bg-slate-900 hover:text-slate-100 transition-all duration-300">
      Saiba Mais
    </button>
    ```

---

### B. Gradientes de Assinatura (Signature Gradients)

Nossos gradientes unem a força do fogo com a fluidez cibernética, criando transições suaves e impactantes.

#### 1. **"Dragon's Breath" (O Gradiente Principal)**
Mistura de Ciano Neon, Roxo Inovador e Vermelho do Dragão de forma balanceada. Usado em títulos gigantes, ícones principais de serviço e faixas decorativas de fluxo de tela.
*   **CSS:**
    ```css
    background: linear-gradient(135deg, #00F0FF 0%, #9D00FF 50%, #FF1A40 100%);
    ```
*   **Tailwind:**
    ```html
    <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] via-[#9D00FF] to-[#FF1A40]">
      Drako Tech
    </span>
    ```

#### 2. **"Cyber Flow" (Fundo e Containers)**
Uma transição de fundo sutil para dar profundidade espacial a seções extensas da landing page.
*   **Tailwind:**
    ```html
    <section class="bg-gradient-to-b from-[#06080F] to-[#0C0F17]">
      <!-- Conteúdo -->
    </section>
    ```

---

### C. Tokens de Estrutura & Efeitos

#### 1. Espaçamento (Spacing Grid)
*   Seguimos a escala baseada em 4px (Grid de 8px padrão de UI comercial).
*   **Micro-espaços:** `4px (1)`, `8px (2)`, `12px (3)`, `16px (4)`.
*   **Layout Spaces:** `24px (6)`, `32px (8)`, `48px (12)`, `64px (16)`, `96px (24)`.

#### 2. Bordas e Arredondamento (Border Radius)
*   Para manter um visual Premium que se afasta do cyberpunk bruto "quadrado e sujo", usamos cantos suavizados e elegantes:
    *   **Cards & Painéis:** `16px` (`rounded-2xl`) para containers grandes de conteúdo.
    *   **Inputs & Botões:** `12px` (`rounded-xl`) para itens clicáveis de tamanho padrão.
    *   **Badges & Avatares:** `9999px` (`rounded-full`) para cápsulas informativas e elementos circulares.

#### 3. Efeito Glassmorphism Premium (Desfoque de Fundo)
Utilizado em barras de navegação (headers) fixas no topo da página e cartões flutuantes para criar sensação de profundidade 3D futurista.
*   **Tailwind:**
    ```html
    <div class="bg-[#0C0F17]/70 backdrop-blur-md border border-slate-800/50 rounded-2xl shadow-2xl">
      <!-- Conteúdo do card flutuante -->
    </div>
    ```

#### 4. Glow Shadows (Efeito Neon)
Efeitos de luminescência calculados para não estourar a legibilidade dos textos:
*   **Red Glow:** `box-shadow: 0 0 25px rgba(255, 26, 64, 0.2);`
*   **Cyan Glow:** `box-shadow: 0 0 25px rgba(0, 240, 255, 0.15);`
*   **Purple Glow:** `box-shadow: 0 0 25px rgba(157, 0, 255, 0.15);`
