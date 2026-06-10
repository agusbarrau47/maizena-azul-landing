# IntroSplash horizontal en una línea (iteración 5)

Mejora puntual del splash inicial para acercarlo a la referencia original: `BLUE SKY GROUP` en **una sola línea** en desktop, más ancho y dominante, con sombra sutil. Solo se tocó IntroSplash. No se hizo push ni deploy.

## Archivos modificados

- `src/components/IntroSplash.css` (único archivo). El JSX no necesitó cambios; la clase real del título es `.intro-splash__text`.

## Valores CSS finales del título

Desktop:
```css
.intro-splash__text {
  font-size: min(9.3vw, 210px);   /* escala con el ancho, tope 210px */
  line-height: 0.88;
  letter-spacing: -0.075em;
  white-space: nowrap;            /* fuerza una sola línea */
  max-width: calc(100vw - 48px);
  text-align: center;
  text-shadow: 0 18px 38px rgba(0, 0, 0, 0.18);
}
```

Mobile (`max-width: 768px`):
```css
.intro-splash__text {
  font-size: clamp(64px, 19vw, 118px);
  line-height: 0.9;
  letter-spacing: -0.065em;
  white-space: normal;            /* permite dos líneas equilibradas */
  max-width: min(92vw, 640px);
  text-shadow: 0 12px 28px rgba(0, 0, 0, 0.16);
}
```

Decisión técnica: en desktop usé `min(9.3vw, 210px)` con `white-space: nowrap` en lugar de un `clamp(72px, 11vw, 210px)`. Con `11vw` el texto (~14 caracteres en Inter 900) se desbordaba en anchos angostos de desktop; `9.3vw` garantiza una línea desde 769px hasta ultra-wide sin overflow, manteniendo presencia.

## Confirmaciones (medidas reales con Puppeteer)

- **Desktop una línea:** ✅ a 769 / 820 / 1024 / 1280 / 1366 / 1440 / 1600 / 1920px el título queda en **1 línea**. Ej.: 1440px → texto 1030px de ancho en viewport de 1440px; 1920px → 1374px. Font-size escala 71px → 178px.
- **Mobile dos líneas:** ✅ a 768 / 430 / 390px parte en `BLUE SKY` / `GROUP`, equilibrado.
- **Sin overflow horizontal** en ninguno de los anchos probados.
- **Sin errores de consola.**
- El hero aparece correctamente después del splash (sin pantalla gris/vacía).
- Animación, duración, fade out, desmontaje y `prefers-reduced-motion` sin cambios.

## Captura del splash

El sistema de capturas **sí** captura el splash: en `capture.cjs` se hace `reload({waitUntil:'domcontentloaded'})` + espera de 400ms (antes de que se oculte a ~1.2s) y se toma la captura. `desktop-splash.png` y `mobile-splash.png` fueron regeneradas y reflejan el cambio.

![Desktop Splash](./review-screenshots/desktop-splash.png)
![Mobile Splash](./review-screenshots/mobile-splash.png)

## `npm run build`

OK — 247ms, 0 errores.

---

# Mejora del menú mobile (iteración 4)

Mejora visual puntual del overlay de navegación mobile. Sin tocar paleta, fuente ni estructura de navegación. No se hizo push ni deploy.

## Diagnóstico del menú anterior

- Overlay con `justify-content: center`: todo flotaba en el medio, mucho espacio vacío sin intención.
- No había estructura header/cuerpo/footer: ni marca ni botón cerrar dedicado dentro del overlay.
- El "cerrar" era el propio hamburger transformado en X (24px, poco integrado, sin área táctil cómoda ni hover claro).
- Subitems de Servicios con guiones "—" básicos, sin bloque visual ni jerarquía.
- CTA en el medio de la lista, sin sensación de cierre.
- Sin tecla Escape; `aria-label="Toggle menu"` genérico.

## Archivos modificados

- `src/components/Navbar.jsx` — overlay mobile reescrito como `.mobile-menu` con composición header / cuerpo / footer; botón cerrar dedicado con SVG; `aria-controls`, `aria-label="Abrir menú"` / `"Cerrar menú"`; cierre con Escape; `tabIndex` condicional en los links del overlay.
- `src/components/Navbar.css` — nuevo bloque `.mobile-menu` (header, links numerados, grupo Servicios con borde izquierdo y labels de estado, footer CTA); hamburger a 44×44px; eliminados los estilos del overlay viejo; `prefers-reduced-motion` y fallback para pantallas bajas (`max-height: 680px`).

## Cambios aplicados

- **Composición:** header (marca "Blue Sky Group" izq. + botón cerrar der.), cuerpo central con los 3 links, footer con CTA anclado abajo.
- **Botón cerrar:** 44×44px, cuadrado redondeado con borde blanco translúcido, ícono X SVG centrado, hover/focus visible. Sin estilos de navegador.
- **Links principales:** numeración discreta `01/02/03`, uppercase, peso 800, divisores sutiles, line-height equilibrado.
- **Subitems Servicios:** bloque con borde izquierdo e indentación; menor tamaño que los principales; "Blue Sky Prospect · Servicio activo" y "Blue Sky Commerce · En desarrollo".
- **CTA:** blanco/texto azul, full-width, anclado al footer como cierre natural; respeta `safe-area-inset-bottom`.
- **Espacio vertical:** cuerpo centrado con `100dvh`; en pantallas bajas pasa a `flex-start` con scroll para que todo entre.

## Accesibilidad

- `aria-expanded` en el hamburger; `aria-controls="mobile-menu"`; `aria-hidden` en el overlay según estado.
- `aria-label="Cerrar menú"` en el botón cerrar; focus visible en cerrar y CTA.
- Cierre con tecla **Escape**.
- Áreas táctiles ≥ 44px (hamburger y cerrar).
- `tabIndex={-1}` en los links del overlay cuando está cerrado (no son tabbables ocultos).

## Validaciones

- `npm run build`: **OK, 141ms, 0 errores.**
- 390 / 430 / 768px: **sin overflow horizontal**, sin errores de consola.
- Abrir → `body overflow: hidden`, menú `visible`, `aria-expanded="true"`.
- Cerrar → `body overflow` restaurado, menú `hidden`.
- Capturas regeneradas: `mobile-menu-servicios`, `mobile-hero`, `mobile-full-page`.

![Mobile Menú Servicios](./review-screenshots/mobile-menu-servicios.png)

## Pendientes reales

- El menú mobile no atrapa el foco (focus trap) mientras está abierto; se podría agregar si se quiere a11y estricta, pero no es bloqueante.

---

# Ajuste puntual — IntroSplash + Hero (iteración 2)

Mejora puntual sobre la landing aprobada. Sin rediseño global, sin cambios de paleta/fuente/identidad, sin tocar la arquitectura narrativa. No se hizo push ni deploy.

## A. IntroSplash agrandado

- **Archivo:** `src/components/IntroSplash.css`.
- Tamaño desktop: `clamp(64px, 15vw, 220px)` → **`clamp(80px, 19vw, 300px)`**. Ahora `BLUE SKY GROUP` domina la pantalla como golpe de marca.
- `letter-spacing` -0.05em → -0.06em, `line-height` 0.85 → 0.86, `max-width` 90vw → 94vw.
- **Media query mobile nueva** (`max-width: 768px`): `clamp(56px, 18vw, 120px)`, `line-height: 0.9`, sin overflow ni cortes (verificado en 390/430px).
- `prefers-reduced-motion` explícito: anula la animación del texto (el componente ya se desmonta del DOM y respeta reduced-motion en el JSX).
- Sin spinner, sin logo B, sin efectos nuevos. Fondo azul, texto blanco, uppercase, peso 900, centrado.

## B. Hero con más presencia

- **Archivos:** `src/components/Hero.jsx` / `Hero.css`.
- Título: `clamp(52px, 9.5vw, 128px)` → **`clamp(56px, 10.5vw, 148px)`**, rhythm vertical más ajustado (menos azul muerto).
- **Módulo de ecosistema rediseñado** de tira inline a **banda premium full-width** con overline "El ecosistema" y tres nodos en card propia, conectados por flechas:
  - Holding · Blue Sky Group (marca madre).
  - **Servicio activo · Blue Sky Prospect** — destacado en superficie blanca, texto azul/oscuro.
  - Próxima implementación · Blue Sky Commerce (atenuado, futuro).
- Grid `1fr auto 1fr auto 1fr` en desktop; se apila a 1 columna con flechas rotadas en mobile. Breakpoint intermedio 769–980px para que no se apriete en tablet.
- Copy del hero sin cambios (título, bajada, texto, CTAs).

## C. Ajuste en Blue Sky Commerce

- **Archivo:** `src/components/Commerce.jsx`.
- Se agregó el chip **C2C** a la grilla de modelos de intercambio.
- Se actualizó el texto descriptivo inferior para incluir explícitamente "C2C".
- El nodo de C2C se integró perfectamente al flujo `display: flex; flex-wrap: wrap;` preexistente, por lo que NO rompe la grilla visual ni genera overflow horizontal en ningún viewport (el salto de línea ocurre naturalmente cuando falta espacio).
- Se mantiene el badge "En desarrollo" y la estructura visual de la tarjeta central.

## Validaciones (iteraciones 2 y 3)

- `npm run build`: **OK, 211ms, 0 errores.**
- Sin overflow horizontal en **390 / 430 / 768 / 932 / 1440 px**. Sin errores de consola.
- **No se reintrodujo `opacity: 0` dependiente de JS:** `Hero.css` sin `opacity: 0`; el Hero renderiza contenido estático (sin `useInView`). El único `opacity:0` del splash es de transición/keyframe y el componente se desmonta.
- Capturas nuevas: `desktop-splash`, `mobile-splash`, hero y full-page desktop/mobile regenerados.

### Splash
![Desktop Splash](./review-screenshots/desktop-splash.png)
![Mobile Splash](./review-screenshots/mobile-splash.png)

---

# Revisión Visual Integral — Blue Sky Group Landing (iteración 1)

Iteración de mejora visual integral manteniendo identidad aprobada: azul institucional `#066fee`, fondo gris claro `#eef0f4`, tipografía Inter, títulos masivos uppercase y sistema de secciones numeradas.

## 1. Diagnóstico inicial

- **Bug crítico confirmado por capturas:** la sección 03 "Qué resuelve Blue Sky Prospect" (`Problem`) estaba **invisible** en producción. `Problem.css` definía `opacity: 0` + `translateY` por defecto y dependía de IntersectionObserver para mostrarse — exactamente el error prohibido. En el full-page desktop aparecía un bloque vacío gigante entre Prospect y el Proceso.
- Link roto: el CTA de Prospect apuntaba a `#contact` (la sección es `#contacto`).
- Variable CSS inexistente: `var(--bg-soft)` en `AgentSystem.css` (no definida en `:root`).
- Card de Commerce rota en mobile: `padding: 0 0 0 20px` eliminaba todo el padding interno.
- Orden narrativo invertido: el Proceso (04) aparecía antes que el Sistema de Agentes (05); la cadencia esperada es Prospect → qué resuelve → agentes → proceso.
- Las 6 cards del sistema de agentes usaban el mismo ícono "target" repetido.
- Exceso de centrado: Qué es, Prospect, Agentes y Proceso eran todos bloques centrados idénticos, sin cadencia editorial.
- Dropdown de Servicios con gap de hover (se podía cortar al mover el mouse hacia el panel).

## 2. Alternativa elegida para el hero

**Alternativa B — Hero con arquitectura de ecosistema** (sobre la base masiva de la Alternativa A):

- `BLUE SKY GROUP` dominante (clamp 52px → 128px), fondo azul sólido, alineado a la izquierda.
- Bajada y subtexto en bloque con borde lateral semitransparente.
- CTAs "Conocer servicios" / "Coordinar reunión".
- **Nuevo módulo de ecosistema** debajo: `Holding (Blue Sky Group) → Servicio activo (Blue Sky Prospect) → Próxima implementación (Blue Sky Commerce)`, en un contenedor sobrio con borde translúcido. En mobile se apila verticalmente con flechas rotadas.

Razón: comunica en el primer fold la arquitectura holding → servicio activo → futura implementación sin sacrificar el impacto institucional de la marca, y lee bien en desktop y mobile.

## 3. Archivos modificados

- `src/App.jsx` — reorden: AgentSystem antes de HowItWorks.
- `src/components/Hero.jsx` / `Hero.css` — módulo ecosistema, sin observer, padding mobile corregido.
- `src/components/AboutGroup.jsx` / `AboutGroup.css` — layout editorial 2 columnas (texto + módulo Prospect/Commerce vertical).
- `src/components/Prospect.jsx` / `Prospect.css` — badge "Servicio activo", header editorial izquierda, tagline "Agentic-as-a-Service para prospección B2B.", CTA `#contacto`.
- `src/components/Problem.jsx` / `Problem.css` — **eliminado `opacity: 0` dependiente de observer** (sección era invisible).
- `src/components/AgentSystem.jsx` / `AgentSystem.css` — renumerada 04, banda blanca de cadencia, íconos variados del set existente, fix `--bg-soft`, TODO de iconografía conservado.
- `src/components/HowItWorks.jsx` / `HowItWorks.css` — renumerada 05, título más contenido, pasos como timeline con línea superior; cards verticales en mobile.
- `src/components/Commerce.jsx` / `Commerce.css` — copy completo (B2B/B2C/C2B), chip "Oportunidades" agregado, fix padding mobile, mapa de chips con fondo sólido.
- `src/components/CtaFinal.jsx` / `CtaFinal.css` — título mejor proporcionado, padding responsive de la card azul, `<br/>` removidos en mobile.
- `src/components/Navbar.jsx` / `Navbar.css` — puente de hover del dropdown, `aria-expanded` en hamburger.
- `capture.cjs` — espera del dropdown aumentada (la captura salía a mitad del fade).

## 4. Cambios por sección

| Sección | Cambio |
|---|---|
| Intro splash | Sin cambios: ya cumplía spec (~1.8s total, respeta `prefers-reduced-motion`, se desmonta del DOM). |
| Hero | Alternativa B: título masivo + módulo de arquitectura del ecosistema. |
| 01 Qué es | Editorial a la izquierda; módulo Prospect/Commerce como card lateral en desktop. |
| 02 Prospect | Badge "Servicio activo", subtítulo oficial, más peso visual, grid 3 col intacta. |
| 03 Qué resuelve | **Ahora visible** (antes invisible por opacity 0). |
| 04 Sistema de agentes | Antes del proceso; banda blanca; cards grises; íconos diferenciados. |
| 05 Proceso | Subordinado a Prospect: título más chico, timeline horizontal desktop / cards mobile. |
| 06 Commerce | Card central con mapa de chips completo (8 nodos), badge "En desarrollo", tono futuro. |
| 07 Contacto | Card azul premium, título contenido, sin superposiciones en mobile. |

## 5. Navegación

- Estructura confirmada: Qué es / Servicios (dropdown: Blue Sky Prospect, Blue Sky Commerce) / Contacto + CTA "Coordinar reunión →" a `#contacto`.
- "Proceso" y "Commerce" no aparecen como ítems principales.
- Dropdown desktop: puente invisible de hover (no se corta al mover el mouse al panel).
- Mobile: menú full-screen azul, subitems de Servicios visibles, body se desbloquea al cerrar.
- `scroll-margin-top: 96px` activo en todas las secciones; el header sticky no tapa títulos.

## 6. Responsive

Validado por captura y por script en 390 / 430 / 768 / 1440 px:

- **Sin overflow horizontal en ningún viewport** (scrollWidth == clientWidth en los 4).
- Hero mobile: padding superior reducido (180→140px), CTAs full-width, ecosistema apilado vertical.
- Commerce mobile: padding de card restaurado (32/24px).
- Contacto mobile: card 56/28px, título sin `<br/>` forzados.
- Sin errores de consola.

## 7. Confirmaciones

- ✅ Paleta intacta (`#066fee`, `#eef0f4`, blancos y grises existentes) y tipografía Inter sin cambios.
- ✅ **No existe ningún `opacity: 0` dependiente de JS/IntersectionObserver en secciones renderizadas.** Se eliminó `useInView` de todos los componentes montados; los únicos `opacity: 0` restantes son keyframes decorativos, estados de interacción del navbar y el splash (que se desmonta). Los archivos legacy no montados (Contact, Ecosystem, Units, Vision) no se renderizan.
- ✅ SEO/metadata sin cambios (`lang="es"`, title, description, OG, theme-color, favicon ya correctos).
- ✅ `npm run build`: OK en 148ms, 0 errores.

## 8. Screenshots (re-generados, rutas relativas)

### Desktop
![Desktop Full Page](./review-screenshots/desktop-full-page.png)
![Desktop Hero](./review-screenshots/desktop-hero.png)
![Qué es](./review-screenshots/desktop-que-es.png)
![Prospect](./review-screenshots/desktop-prospect.png)
![Sistema de agentes](./review-screenshots/desktop-agent-system.png)
![Commerce](./review-screenshots/desktop-commerce.png)
![Contacto](./review-screenshots/desktop-contacto.png)
![Dropdown Servicios](./review-screenshots/desktop-dropdown-servicios.png)

### Mobile
![Mobile Full Page](./review-screenshots/mobile-full-page.png)
![Mobile Hero](./review-screenshots/mobile-hero.png)
![Mobile Qué es](./review-screenshots/mobile-que-es.png)
![Mobile Prospect](./review-screenshots/mobile-prospect.png)
![Mobile Agentes](./review-screenshots/mobile-agent-system.png)
![Mobile Commerce](./review-screenshots/mobile-commerce.png)
![Mobile Contacto](./review-screenshots/mobile-contacto.png)
![Mobile Menú Servicios](./review-screenshots/mobile-menu-servicios.png)

## 9. Pendientes reales

- `TODO` (en `AgentSystem.jsx`): reemplazar iconografía del sistema de agentes por íconos más precisos y consistentes con prospección, CRM y agentes 24/7. Por ahora se mapearon íconos distintos del set existente por card.
- Los componentes legacy no usados (`Contact`, `Ecosystem`, `Units`, `Vision`) podrían eliminarse del repo en una limpieza futura.
- Aprobación visual final antes de push/deploy.
