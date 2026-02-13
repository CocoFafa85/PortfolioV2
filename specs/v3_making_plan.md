# PHASE M — MAKING / MANUFACTURING (BMAD v3+)

> **Rôle principal :** Lead Developer / Tech Lead
> **Objectif :** Transformer le Blueprint (Phase B) en produit réel, stable et livrable
> **Principe clé :** ZÉRO improvisation — tout découle du Blueprint

---

## 0. RÉSUMÉ OPÉRATIONNEL

### 0.1 Référence Blueprint
- **Lien vers Blueprint Phase B :** `specs/product-blueprint.md`
- **Version :** v2
- **Date de gel :** 2026-02-10

### 0.2 Portée de la Phase M
- **Inclus :** Refonte complète (Rebuild), Stack React/Vite/TS, Animations Framer Motion, Contenu verbatim.
- **Exclu :** Backend (API), CMS (Hardcoded content), Login/Admin.

---

## 1. STRATÉGIE DE DELIVERY

### 1.1 Type de delivery
- [x] **Rebuild technique**
> Justification : Passage de jQuery/Vanilla à React/Vite pour performance, maintenabilité et animations complexes ("Voyage").

### 1.2 Cadence
- **Mode :** Sprints
- **Durée d’un cycle :** Variable (basé sur les lots)

---

## 2. DÉCOUPAGE FONCTIONNEL

| ID | Feature | Priorité | Dépendances | Source |
|----|---------|----------|-------------|--------|
| F1 | Structure Multi-page & Routing | P1 | - | A.1.2 |
| F2 | Design System (Colors, Typos) | P1 | - | B.5 |
| F3 | Home Page (Hero, Grid, Orbit) | P1 | F2 | B.6.1 |
| F4 | About Me (Convecteur Temporel) | P1 | F2, F3 | B.6.2 |
| F5 | Skills (Ring, Categories) | P2 | F2 | B.6.3 |
| F6 | Searching (Matrix/Green AI) | P2 | F2 | B.6.4 |
| F7 | Projects (Cards) | P2 | F2 | B.6.5 |
| F8 | Système de Transitions "Voyage" | P1 | F1 | B.4.1 |

---

## 3. DÉCOUPAGE TECHNIQUE

### 3.1 Stack validée (Source: ARCHITECTURE.md)
- **Front :** React 19, TypeScript 5.7+
- **Build :** Vite 6
- **Styling :** SCSS Modules + CSS Variables (Design System)
- **Animations :** Framer Motion (Transitions inter-pages, Micro-interactions)
- **Data :** TypeScript Static files (`src/data/content.ts`)

---

## 4. ARCHITECTURE TECHNIQUE

### 4.1 Vue d’ensemble
- **Flux :** SPA avec React Router v7.
- **Transitions :** `<AnimatePresence mode="wait">` encadrant les routes pour simuler le voyage.
- **Data :** Import direct de `src/data/content.ts` dans les composants (pas de fetch runtime nécessaire pour le contenu statique).

---

## 5. PLAN DE DÉVELOPPEMENT

### Sprint 1 : Fondations & Structure
**Objectif :** Avoir une navigation fonctionnelle avec le Design System en place.
- [ ] Initialisation Vite + config TS/Eslint.
- [ ] Setup `src/` (assets, components, styles, data types).
- [ ] Implémentation du Design System (Variables CSS, Fonts, Reset).
- [ ] Création du Layout Global (Navbar, Footer, Background Grid).
- [ ] Router Setup (Routes vides pour l'instant).

### Sprint 2 : Pages Cœur (Home & About)
**Objectif :** Implémenter le cœur de l'identité et le storytelling.
- [ ] **Home** : Composant `Hero` avec texte animé (Fly-in) et boutons orbitants (Stargate).
- [ ] **About** : Composant `TimeConvector` (Logique des 3 états Passé/Présent/Futur).
- [ ] Intégration des textes finaux depuis `content.ts`.

### Sprint 3 : Contenu Riche (Skills, Search, Projects)
**Objectif :** Finaliser les sections contenu.
- [ ] **Skills** : Liste des compétences + Introduction textuelle.
- [ ] **Searching** : Page "Matrix" avec choix Pilule Rouge/Bleue + Contenu Green AI.
- [ ] **Projects** : Galerie de cartes projets avec liens et images.

### Sprint 4 : Polish & "Voyage"
**Objectif :** L'effet WOW et la qualité finale.
- [ ] Implémentation des transitions de page cinématiques (Framer Motion).
- [ ] Micro-interactions (Hover, Cursor).
- [ ] Optimisation Images (WebP) & Lazy Loading.
- [ ] SEO (Helmet/Meta tags) & Accessibilité (Aria, Focus).

---

## 6. CONTRATS & INTERFACES

### 6.1 Données
- Fichier maître : `src/data/content.ts`
- Interfaces : `src/types/models.ts`
- **Statut :** Créé et pré-rempli avec le contenu du Blueprint v2.

---

## 12. CRITÈRES DE FIN — PHASE M

La phase M est terminée si :
- [ ] `content.ts` est fidèlement représenté sur l'UI.
- [ ] Les transitions de pages donnent une sensation de voyage fluide.
- [ ] Le site est responsive et performant (Lighthouse > 90).
- [ ] Aucune régression par rapport au contenu original.

---
