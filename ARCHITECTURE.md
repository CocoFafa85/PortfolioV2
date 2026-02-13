# ARCHITECTURE.md - PortfolioV2

> **Version**: 1.0 (Sprint 2)
> **Role**: Architecture Reference
> **Status**: APPROVED for Sprint 2 Execution

## 1. Vue d'ensemble

Le projet **PortfolioV2** est une application **React (Vite)** structurée selon les principes de l'**Atomic Design**.
L'objectif est de créer une expérience immersive ("Voyage Temporel / Cyberpunk") avec une séparation stricte entre la **UI** (Composants), la **Data** (Contenu statique/typé) et la **Logique** (Hooks custom).

---

## 2. Structure des Dossiers (Atomic Design)

```
src/
├── components/          # Composants UI
│   ├── atoms/           # Éléments indivisibles (Button, Icon, Logo)
│   ├── molecules/       # Groupes fonctionnels (OrbitButton, SectionTitle)
│   ├── organisms/       # Sections complexes (Hero, TimeConvector, Navbar)
│   └── templates/       # Mises en page globales (MainLayout)
├── data/                # Source de vérité du contenu (content.ts)
├── hooks/               # Logique réutilisable (useTimeTravel, useOrbit)
├── pages/               # Points d'entrée des routes (Home, About)
├── styles/              # Global SASS & Mixins
└── types/               # Murs porteurs (interfaces TS partagées)
```

## 3. Flux de Données

1.  **Source Unique** : Tout le contenu textuel/fixe reside dans `src/data/content.ts`.
2.  **Injection** : Les pages (`pages/Home.tsx`, `pages/About.tsx`) importent `content` et distribuent les données via **props** aux organismes/molécules.
3.  **Strict Typing** : Chaque composant doit définir une interface `Props` explicite. Pas de `any`.

## 4. Choix Techniques Structurants

-   **Styling** : **SCSS Modules** (`.module.scss`) pour chaque composant afin d'éviter les collisions et garantir la modularité.
-   **Animations** : **Framer Motion** pour les transitions complexes (Fly-in, Orbit, Time Travel).
-   **Routing** : `react-router-dom` v6+.
-   **Icons** : `lucide-react`.

## 5. Décisions Irréversibles (Sprint 2)

-   L'état "Temporel" (Passé/Présent/Futur) de la page About sera géré par un **State local** (ou un custom hook) au niveau de la page/organisme, pas de Redux/Context global nécessaire pour l'instant (scope limité).
-   La palette **Neon Pink (#ff379b)** est la couleur primaire d'accentuation impérative.
