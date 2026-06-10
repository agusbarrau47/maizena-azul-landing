# Blue Sky Group — Landing Institucional

Landing institucional de **Blue Sky Group**, el holding tecnológico que integra prospección, comercio y finanzas en un ecosistema digital cohesivo.

## Stack

- **Vite** — Build tool
- **React 19** — UI library
- **Vanilla CSS** — Design system con custom properties
- **Inter** — Tipografía principal (Google Fonts)

## Estructura

```
src/
├── components/          # Componentes de la landing
│   ├── Navbar.jsx/css   # Navegación con glassmorphism
│   ├── Hero.jsx/css     # Hero section con gradientes animados
│   ├── Ecosystem.jsx/css# Sección ecosistema con hub visual
│   ├── Units.jsx/css    # Cards de unidades de negocio
│   ├── Vision.jsx/css   # Propuesta de valor
│   ├── Contact.jsx/css  # CTA de contacto
│   ├── Footer.jsx/css   # Footer
│   └── Icons.jsx        # Librería de iconos SVG
├── constants/
│   └── theme.js         # Paleta, unidades de negocio
├── hooks/
│   └── useInView.js     # Hook para animaciones on-scroll
├── index.css            # Design system global
├── main.jsx             # Entry point
└── App.jsx              # Composición de secciones
```

## Comandos

```bash
npm install      # Instalar dependencias
npm run dev      # Dev server en localhost
npm run build    # Build de producción
npm run preview  # Preview del build
```

## Unidades de negocio

| Unidad | Foco |
|--------|------|
| **BlueSky Prospect** | Prospección B2B, inteligencia comercial, CRM |
| **Blue Sky Commerce** | Comercio digital, catálogos, multicanalidad |
| **Blue Sky Financial** | Infraestructura financiera, activos digitales |

## Deploy

Preparado para Vercel. El build genera `dist/` con assets optimizados.

---

© Blue Sky Group
