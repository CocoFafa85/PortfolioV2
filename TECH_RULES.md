# TECH_RULES.md - PortfolioV2

> **Version**: 1.0 (Sprint 2)
> **Role**: Code Quality Enforcer

## 1. Conventions de Code

### TypeScript Strict
-   **Strict Mode** : Activé (`strict: true` dans tsconfig).
-   **No Any** : Interdiction d'utiliser `any`. Définir des interfaces ou `unknown` si nécessaire.
-   **Interfaces props** : Tout composant React doit exporter son interface `Props` (ex: `export interface HeroProps { ... }`).

### Styles (SCSS Modules)
-   **Structure** : Chaque composant a son fichier scss adjacent (ex: `Hero.module.scss`).
-   **Variables** : Import systématique de `@use '../../styles/variables' as *;` (ou chemin relatif adapté).
-   **Naming** : kebab-case pour les classes CSS (`.fly-in-title`), camelCase pour les références JS styles (`styles.flyInTitle`).

### React Components
-   **Function Components** : Utiliser `const Component: React.FC<Props> = ...`.
-   **Hooks Rules** : Hooks uniquement au top-level. Custom hooks commencent par `use`.

## 2. Règles Métier / Design

### Palette Cyberpunk
-   Utilisation obligatoire de `$neon-pink` (#ff379b) comme couleur principale d'action/focus.
-   Fonds sombres (`$bg-primary`, `$bg-secondary`) pour le contraste.

### Atomic Design
-   **Atoms** : Pas de logique métier complexe. Juste rendu UI.
-   **Molecules** : Combinaison d'atomes, logique locale simple (ex: hover).
-   **Organisms** : Logique métier et orchestration de molécules.
-   **Pages** : Récupération data (injection props), layout wrappers.

## 3. Sécurité (Phase Architect)
-   Pas de secrets en dur.
-   Validation des entrées si formulaires (Zod).

## 4. Seuils de Complexité
-   Un fichier composant ne devrait pas dépasser ~150 lignes (logique + JSX).
-   Si trop long -> Extraire en sous-composants ou custom hooks.
