# 📘 PRODUCT BLUEPRINT — PortfolioV2 Refonte

> **Phase BMAD :** B (Blueprint)  
> **Auteur :** Product Owner (Agent PO)  
> **Date :** 2026-02-10  
> **Destinataire :** Agent Phase M (Making)  
> **Révision :** v2 — Intégration feedback utilisateur  

---

## 1. Vision & Objectif

**Refondre** le portfolio de Corentin FANIC — développeur full stack — pour le transformer en une vitrine professionnelle **impressionnante** capable d'intriguer les recruteurs du domaine informatique. Le portfolio actuel possède une identité cyberpunk forte et originale qu'il faut **amplifier**, pas remplacer.

### Philosophie 
> « Améliorer pour bluffer, pas rebouter pour perdre l'âme. »

Le contenu textuel, les références culturelles (Star Wars, Matrix, Retour vers le futur, Mario) et l'esprit cyberpunk sont le **cœur du projet** et doivent être conservés. La refonte porte sur la **qualité technique et l'expérience utilisateur**.

---

## 2. Audit de l'existant

### 2.1 Architecture actuelle

| Aspect | État actuel |
|---|---|
| **Stack** | HTML/CSS/JS vanilla + jQuery 3.6 |
| **Pages** | 5 pages HTML + 2 écrans de loading (iframe) |
| **Animations** | Canvas grid, orbiting buttons, fly-in text, neon blink, cyber-tubes |
| **Polices** | Orbitron, Montserrat Alternates, MedievalSharp (self-hosted woff2) |
| **Responsive** | Media queries basiques (550px / 1365px breakpoints) |
| **SEO** | Titres basiques, pas de meta description, pas d'OpenGraph |
| **Sécurité** | CSP en place (meta tag), `rel="noopener noreferrer"` |
| **Performance** | Images PNG non compressées (total ~7 Mo), pas de lazy loading |
| **Accessibilité** | Aucun aria-label, pas de prefers-reduced-motion, alts partiels |
| **Git/CI** | Aucun repo Git initialisé |

### 2.2 Pages existantes

| Page | Fichiers | Contenu clé |
|---|---|---|
| **Home** | `index.html`, `index.css`, `grid.js`, `orbit.js`, `flytext.js` | Nom animé fly-in, sous-titre wave-color, 4 boutons Stargate orbitants, grille perspective rose |
| **About Me** | `aboutMe.html`, `aboutMe.css`, `aboutMe.js` | Convecteur temporel (3 étapes passé/présent/futur), liens RCS/LinkedIn/LogoDev, neon title |
| **Skills** | `skills.html`, `skills.css` | Compétences détaillées, anneau SVG rotatif "Un CV pour les convaincre tous", lien CV Google Drive |
| **Searching** | `searching.html`, `searching.css`, `searching.js` | Veille technologique (Green AI), bloc Mario interactif, pilules Matrix rouge/bleue (Pull/Push) |
| **Projects** | `projects.html`, `projects.css`, `projects.js` | Projets terminés (IFTO, Memory Game, Solar System) et en cours (Démineur 2.0) |
| **Loading** | `loading.html`, `loadingBack.html` | Transition page avec le Millennium Falcon, iframe overlay |

### 2.3 Références culturelles (à conserver)

- 🚀 **Star Wars** : Millennium Falcon (loading), Stargate (boutons de nav)
- 💊 **Matrix** : Pilule rouge/bleue pour Pull/Push
- ⚡ **Retour vers le futur** : Convecteur temporel (3 étapes de vie)
- 🍄 **Mario** : Bloc ? interactif (veille techno)
- 💍 **LOTR** : "Un CV pour les convaincre tous" (anneau rotatif)
- 🔮 **Minority Report** : Texture présente dans les assets

### 2.4 Points forts à préserver

1. L'identité cyberpunk (grille perspective, néons, tubes lumineux)
2. Les références pop-culture comme fil conducteur narratif
3. Le contenu textuel autobiographique (modifiable par Corentin mais pas par nous)
4. La palette néon (rose `#ff379b` / magenta `#ff0080` / cyan `#00bfff` / violet `#54214B`) — le orange n'est pas sacré, les néons roses sont le cœur
5. La typographie Orbitron (principale) et Montserrat Alternates (corps)
6. Les animations fly-in du nom et l'orbite des boutons

---

## 3. Améliorations proposées

### 3.1 🎨 Design & UI

| # | Amélioration | Impact | Priorité |
|---|---|---|---|
| D1 | **Palette cyberpunk élargie** : Ajouter des secondaires (violet `#54214B`, magenta `#ff379b`, jaune néon `#fffb23`) avec variables CSS custom properties | Cohérence visuelle | P1 |
| D2 | **Glassmorphism** sur les conteneurs (LED, blocs texte) : `backdrop-filter: blur()` + bords translucides | Modernité, profondeur | P1 |
| D3 | **Gradients dynamiques animés** sur le background body (au lieu du linear static) | WOW factor | P2 |
| D4 | **Micro-animations hover** sur tous les éléments interactifs (scale, glow, cursor custom) | Engagement | P1 |
| D5 | **Typographie améliorée** : Ajouter des Google Fonts modernes en complément (Rajdhani, Space Mono) pour la diversité | Lisibilité | P2 |
| D6 | **Scroll-based animations** : Intersection Observer pour les entrées en scène progressives | Dynamisme | P2 |
| D7 | **Curseur personnalisé cyberpunk** (dot + follower animé) | Immersion | P3 |
| D8 | **Favicon SVG animé** au lieu du PNG | Modernité | P3 |

### 3.2 🖥 UX & Navigation

| # | Amélioration | Impact | Priorité |
|---|---|---|---|
| U1 | **Multi-page avec transitions immersives** : Conserver des pages séparées mais remplacer les iframes par des transitions plein-écran cinématiques (warp, glitch, fondu néon, hyperespace...). Chaque navigation doit donner l'impression de **voyager** | Immersion, WOW | P1 |
| U2 | **Navbar cyberpunk** : Navigation fixe (barre ou latérale) avec indicateurs visuels néon de la page active | Navigation claire | P1 |
| U3 | **Transitions variées** : Chaque page peut avoir son propre style de transition (hyperespace pour Home→Skills, glitch Matrix pour →Searching, etc.) | Surprise, voyage | P1 |
| U4 | **Skip liens d'accessibilité** et navigation clavier complète | Accessibilité | P2 |
| U5 | **Section Hero améliorée** : Garder le fly-in + orbite mais ajouter une particule/glow ambiance en fond | WOW first impression | P1 |
| U6 | **Coordonnées accessibles** : LinkedIn, email et CV visibles à travers les pages (About Me, Skills, liens) — pas de section Contact dédiée | Conversion recruteur | P1 |

### 3.3 ⚡ Performance

| # | Amélioration | Impact | Priorité |
|---|---|---|---|
| P1 | **Convertir les PNG en WebP/AVIF** avec fallback | -60% poids images | P1 |
| P2 | **Lazy loading** (`loading="lazy"`) pour toutes les images hors viewport | Temps de chargement | P1 |
| P3 | **Supprimer jQuery** et remplacer par du JS natif moderne (querySelector, classList, fetch) | -87 Ko gzip, modernité | P1 |
| P4 | **Minifier CSS/JS** pour la production et concaténer | Performance | P2 |
| P5 | **Preload** des polices critiques avec `<link rel="preload">` | First paint plus rapide | P2 |
| P6 | **Optimiser le canvas grid** : Utiliser `OffscreenCanvas` ou réduire le nombre de segments dessinés | GPU/CPU | P3 |

### 3.4 🔒 Sécurité

| # | Amélioration | Impact | Priorité |
|---|---|---|---|
| S1 | **CSP renforcée** : Supprimer `'unsafe-inline'` et utiliser des nonces ou hashes | Sécurité XSS | P1 |
| S2 | **Subresource Integrity** (SRI) pour les scripts externes | Intégrité | P2 |
| S3 | **Headers de sécurité** : Préparer un fichier `.htaccess` ou `_headers` pour Netlify/Vercel avec `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy` | Sécurité réseau | P2 |
| S4 | **Sanitisation des liens** : Vérifier que tous les liens externes utilisent `rel="noopener noreferrer"` | Sécurité | P1 |

### 3.5 ♿ Accessibilité

| # | Amélioration | Impact | Priorité |
|---|---|---|---|
| A1 | **Aria labels** sur tous les boutons et liens interactifs | Conformité WCAG | P1 |
| A2 | **`prefers-reduced-motion`** : Désactiver/réduire les animations pour les utilisateurs concernés | Accessibilité | P1 |
| A3 | **Contraste couleurs** : Vérifier et ajuster les ratios (texte sur fond) pour WCAG AA | Lisibilité | P1 |
| A4 | **Alt text descriptifs** sur toutes les images | Conformité | P1 |
| A5 | **Focus states visibles** sur tous les éléments interactifs | Navigation clavier | P2 |
| A6 | **Rôles ARIA** pour les composants interactifs (convecteur temporel, pilules) | Sémantique | P2 |

### 3.6 🔍 SEO & Métadonnées

| # | Amélioration | Impact | Priorité |
|---|---|---|---|
| SE1 | **Meta descriptions** uniques par section/page | Référencement | P1 |
| SE2 | **Open Graph / Twitter Cards** avec preview images | Partage social | P1 |
| SE3 | **Schema.org** structured data (Person, WebSite) | Rich snippets | P2 |
| SE4 | **Sitemap.xml** et **robots.txt** | Indexation | P2 |
| SE5 | **Balises sémantiques** HTML5 (`<header>`, `<main>`, `<section>`, `<footer>`, `<nav>`) | Structure SEO | P1 |
| SE6 | **URL canonique** | Anti-duplication | P3 |

---

## 4. Architecture cible

### 4.1 Proposition structurelle : Multi-page avec transitions immersives

> ⚡ **Décision utilisateur** : Conserver des pages séparées mais avec des transitions cinématiques plein-écran entre chaque page. L'utilisateur doit avoir l'impression de **voyager** à chaque changement de page.

```
PortfolioV2/
├── index.html        → Home (fly-in + orbite + grille, améliorée)
├── about.html        → About Me (convecteur temporel, amélioré)
├── skills.html       → Skills (compétences + anneau CV, amélioré)
├── searching.html    → Veille techno (Matrix pills + Mario, amélioré)
├── projects.html     → Projets (cartes améliorées, hover effects)
│
│   Chaque page contient :
│   ├── <header>   → Navbar cyberpunk fixe (commune)
│   ├── <main>     → Contenu spécifique à la page
│   ├── <footer>   → Crédits, liens (commun)
│   └── <canvas>   → Grille perspective (fond global)
│
└── Système de transitions :
    ├── Overlay plein-écran animé au clic sur un lien
    ├── Transitions variées (warp, glitch, fondu néon, hyperespace...)
    └── Impression de voyage entre les pages
```

### 4.2 Arborescence fichiers cible

```
PortfolioV2/
├── index.html                 # Page Home (hero)
├── about.html                 # Page About Me
├── skills.html                # Page Skills
├── searching.html             # Page Veille Techno
├── projects.html              # Page Projects
├── css/
│   ├── variables.css          # Custom properties (palette, spacing, timing)
│   ├── reset.css              # Modern CSS reset
│   ├── main.css               # Layout global, navbar, footer, commun
│   ├── transitions.css        # Animations de transition inter-pages
│   ├── hero.css               # Styles page home
│   ├── about.css              # Styles page about
│   ├── skills.css             # Styles page skills
│   ├── search.css             # Styles page veille
│   ├── projects.css           # Styles page projects
│   ├── animations.css         # Animations communes (neon, fly-in, etc.)
│   └── responsive.css         # Media queries centralisées
├── js/
│   ├── main.js                # Navbar, transitions inter-pages, commun
│   ├── transitions.js         # Moteur de transitions cinématiques
│   ├── hero.js                # Fly-in text, orbit buttons
│   ├── grid.js                # Canvas grid (optimisé)
│   ├── about.js               # Convecteur temporel
│   ├── search.js              # Pilules, bloc Mario
│   ├── projects.js            # Animations projets
│   ├── cursor.js              # Curseur custom (optionnel)
│   ├── scroll-animations.js   # Intersection Observer pour les entrées
│   └── utils.js               # Helpers (throttle, debounce, etc.)
├── fonts/                     # Inchangé (polices self-hosted)
├── textures/                  # Images (converties en WebP)
├── specs/                     # Documents BMAD
├── .gitignore
├── robots.txt
├── sitemap.xml
└── README.md
```

### 4.3 Stack technologique cible

> 🔓 **Décision utilisateur** : L'Agent M a **libre choix** sur les langages et technologies. Les suggestions ci-dessous sont des recommandations, pas des contraintes. Un framework (React, Vite, Astro...) ou du vanilla sont tous acceptables.

| Aspect | Suggestion | Justification |
|---|---|---|
| **Base** | Au choix de l'Agent M (vanilla, Vite, Astro, etc.) | Libre choix technologique |
| **CSS** | Variables CSS (Custom Properties) ou framework CSS | Maintenabilité, thème cohérent |
| **JS** | ES6+ natif ou framework au choix | Modernité, suppression de jQuery |
| **Animations** | CSS @keyframes + Web Animations API + requestAnimationFrame (ou GSAP) | Performance GPU-optimisée |
| **Transitions** | Système de transition plein-écran custom (CSS + JS) | Impression de voyage |
| **Images** | WebP (avec PNG fallback `<picture>`) | Performance |
| **Hébergement** | GitHub Pages ou Vercel (gratuit) | Simplicité |

---

## 5. Design System — Palette cyberpunk étendue

### 5.1 Couleurs

```css
:root {
  /* Base — Fond sombre cyberpunk */
  --bg-primary: #0a0a0f;
  --bg-secondary: #12121a;
  --bg-deep: #060610;

  /* Néons — Cœur de l'identité (ROSE = couleur dominante) */
  --neon-pink: #ff379b;       /* ⭐ Accent principal */
  --neon-magenta: #ff0080;    /* ⭐ Glow principal */
  --neon-cyan: #00bfff;       /* Accent secondaire */
  --neon-violet: #7b2ff2;     /* Profondeur */
  --neon-purple: #54214B;     /* Ombres néon */
  --neon-yellow: #fffb23;     /* Accent tertiaire */
  --neon-green: #39ff14;      /* Détails, accents rares */
  --neon-orange: #D85912;     /* Heritage — usage modéré */

  /* Texte */
  --text-primary: #ffffff;
  --text-secondary: #c0c0d0;
  --text-accent: #ffa9d4;     /* Rose pâle — liens, highlights */

  /* Glassmorphism */
  --glass-bg: rgba(18, 18, 26, 0.7);
  --glass-border: rgba(255, 255, 255, 0.08);
  --glass-blur: 20px;

  /* Spacing */
  --space-xs: 0.5rem;
  --space-sm: 1rem;
  --space-md: 2rem;
  --space-lg: 4rem;
  --space-xl: 8rem;

  /* Timing */
  --transition-fast: 150ms ease;
  --transition-normal: 300ms ease;
  --transition-slow: 600ms ease;
  --transition-page: 800ms cubic-bezier(0.77, 0, 0.175, 1);  /* Transitions inter-pages */
}
```

> 🎨 **Note palette** : Le rose néon (`--neon-pink`, `--neon-magenta`) est la couleur dominante. L'orange est conservé en tant qu'accent secondaire mais n'est plus l'identité visuelle principale. Les néons roses, cyan et violet forment le triangle chromatique cyberpunk du portfolio.

### 5.2 Typographie

| Usage | Police | Taille | Poids |
|---|---|---|---|
| Titres H1 (néon) | Orbitron | 3rem–5rem | 700–900 |
| Titres H2/H3 | Orbitron | 1.5rem–2.5rem | 500–700 |
| Corps | Montserrat Alternates | 1rem–1.125rem | 400 |
| Code/Accents | Space Mono (optionnel) | 0.875rem | 400 |

### 5.3 Composants réutilisables

- **Glass Card** : Conteneur glassmorphism avec bordure néon subtile
- **Neon Title** : Titre avec text-shadow néon + blink animation
- **Cyber Button** : Bouton avec glow hover + border animated
- **Cyber Tubes** : Lignes lumineuses décoratives (heritage)
- **Nav Dot** : Indicateur de section actuelle
- **Project Card** : Carte projet avec hover reveal + glow

---

## 6. Contenu textuel (à conserver verbatim)

> ⚠️ **INSTRUCTION POUR L'AGENT M** : Le contenu textuel ci-dessous provient du travail original de Corentin. Il **DOIT** être conservé tel quel (corrections orthographiques mineures autorisées). Ne pas réécrire ces textes.

### 6.1 Home
- Titre : **"Corentin FANIC"**
- Sous-titre : **"Développeur full stack"**

### 6.2 About Me — 3 étapes du convecteur temporel

**Étape 1 — Qui j'étais :**
> Né aux Sables d'Olonne, j'ai grandi à la campagne. J'ai toujours été attiré par les activités qui stimulent mon raisonnement et ma logique. Que ce soient les sciences, la cinématographie, les échecs ou les jeux vidéo, ces passions ont façonné mon esprit analytique. Mon entourage familial et amical a été important pour moi et m'a aidé à garder les pieds sur terre.
> Passionné par les sports, à l'âge de 12 ans j'ai commencé à pratiquer le rugby à XV au rugby club sablais (R.C.S). Cette expérience au niveau national m'a enseigné la discipline, la cohésion d'équipe et la persévérance, des valeurs qui m'accompagnent encore aujourd'hui.
> Après avoir obtenu un baccalauréat général scientifique, j'ai exploré diverses voies professionnelles. J'ai entamé une formation en école d'ergothérapie puis j'ai finalement travaillé comme serveur et barman dans l'hôtellerie-restauration puis j'ai mûri mon projet actuel.

**Étape 2 — Qui je suis :**
> Actuellement, je suis étudiant à Cholet (49) dans le domaine de la programmation informatique, en cycle BTS SIO. Je souhaite poursuivre vers une troisième année de bachelor en alternance. Je consacre la majeure partie de mon temps à travailler et à acquérir un maximum de compétences dans ce domaine.
> En parallèle, je réalise des missions rémunérées pour financer ma vie étudiante. Une vie que je partage avec ma compagne infirmière qui me soutient énormément dans mon projet.

**Étape 3 — Qui je serai :**
> Une fois mon cursus terminé et mon niveau de programmation au top, je me lancerai dans une carrière de développeur informatique full stack. Ce domaine me permet de m'éclater ce qui me donne la détermination nécessaire pour atteindre mon objectif. Bien que mon niveau d'étude restera à BAC+3, je compte accumuler de l'expérience et maîtriser les subtilités du monde du travail pour gravir les échelons autant que possible.
> Mon objectif à long terme est d'avoir une fonction de responsable comme product owner.

### 6.3 Skills
> Au cours de ma formation, je me suis familiarisé avec divers outils et technologies à travers des cours théoriques et pratiques, des PPE et des stages en milieu professionnel.
> J'ai acquis une expertise diversifiée en développement web, couvrant à la fois le frontend et le backend. J'ai maîtrisé des technologies pour créer des interfaces utilisateur interactives et responsives (SCSS, JavaScript, TypeScript, Bootstrap, etc.) J'ai appris à utiliser des langages et frameworks (PHP, Java, Symfony, Doctrine) pour créer des interfaces dynamiques avec une base de données.
> J'ai développé des compétences solides en gestion de bases de données, tant relationnelles (SQL, phpMyAdmin, SQL Server) que non relationnelles (MongoDB). J'ai appliqué des méthodologies Agile et DevOps pour gérer efficacement le versioning et la collaboration (Git/GitHub, Jira, Trello). J'ai mis en œuvre des bonnes pratiques de sécurité OWASP et travaillé sur le développement d'API RESTful. J'ai utilisé Docker, des outils de diagrammes/MCD et WordPress.

### 6.4 Searching (Veille Techno)
- Explication de la veille technologique (bloc Mario)
- Méthode Pull (pilule rouge) / Push (pilule bleue)
- Thème : **Green AI** — L'utilisation de l'IA pour optimiser la planification, la production et l'utilisation des énergies

### 6.5 Projects
- **Terminés** : Site IFTO, Memory Game, Système Solaire
- **En cours** : Démineur 2.0
- *(Lien CV Google Drive à conserver)*

---

## 7. Liens externes (à conserver)

| Lien | URL | Contexte |
|---|---|---|
| RCS (Rugby) | https://rc-sablais.ffr.fr/ | About Me — étape 1 |
| LinkedIn | http://www.linkedin.com/in/corentin-fanic-832630293 | About Me — étape 2 |
| Logo Dev | https://anakine.io/fiches-metiers-tech/tout-savoir-sur-le-metier-de-developpeur-full-stack/ | About Me — étape 3 |
| CV (Drive) | https://drive.google.com/file/d/1ybGdg18FpvSujVRr3X_gaF04kyUevnxl/view?usp=sharing | Skills — anneau rotatif |
| Compétences (Sheets) | https://docs.google.com/spreadsheets/d/1Ii-8VC9w8osA8PfR65HRA1Mz1Ori7YOQ/edit?... | Skills — texte |
| Green AI (DOE) | https://www.energy.gov/topics/artificial-intelligence-energy | Searching — thème |
| Projet IFTO | https://www.ifto.fr/ | Projects |
| Memory Game | https://cocofafa85.github.io/ANG/Memory.html | Projects |
| Solar System | https://cocofafa85.github.io/SolarSystem/index.html | Projects |

---

## 8. User Stories (pour l'Agent M)

### Must Have (P1)

| ID | En tant que... | Je veux... | Afin de... |
|---|---|---|---|
| US1 | Visiteur | voir une page d'accueil avec mon nom animé et des boutons de navigation immersifs | être immédiatement captivé par l'identité cyberpunk |
| US2 | Recruteur | naviguer facilement entre les sections du portfolio | trouver rapidement les informations qui m'intéressent |
| US3 | Visiteur mobile | voir un portfolio responsive et fluide | avoir la même qualité d'expérience sur tous les appareils |
| US4 | Recruteur | accéder au CV et aux projets en 1-2 clics | gagner du temps et évaluer le candidat |
| US5 | Visiteur | voir des animations fluides et performantes | avoir une expérience immersive sans lag |
| US6 | Utilisateur | avoir un site accessible (clavier, lecteur d'écran) | pouvoir naviguer quelles que soient mes capacités |
| US7 | Moteur de recherche | trouver des métadonnées structurées et du HTML sémantique | référencer correctement le portfolio |

### Should Have (P2)

| ID | En tant que... | Je veux... | Afin de... |
|---|---|---|---|
| US8 | Visiteur | voir des animations au scroll (entrées progressives) | sentir le dynamisme du site |
| US9 | Visiteur | voir un curseur personnalisé cyberpunk | renforcer l'immersion |
| US10 | Visiteur | vivre des transitions de page variées et spectaculaires | avoir l'impression de voyager dans l'univers cyberpunk |

### Could Have (P3)

| ID | En tant que... | Je veux... | Afin de... |
|---|---|---|---|
| US11 | Visiteur | voir une section "témoignages" ou "recommandations" | évaluer la fiabilité du développeur |

---

## 9. Critères d'acceptation globaux

- [ ] Le portfolio conserve 100% du contenu textuel original
- [ ] Toutes les références culturelles sont présentes et fonctionnelles
- [ ] Le site est multi-page avec des transitions cinématiques immersives (pas d'iframes de loading)
- [ ] Chaque transition de page donne une impression de **voyage**
- [ ] Pas de section Contact dédiée — les coordonnées sont disséminées dans les pages (About Me, Skills, liens)
- [ ] Le site obtient un score Lighthouse ≥ 90 sur Performance, Accessibilité, Best Practices, SEO
- [ ] Le site est responsive sur mobile (< 480px), tablette (480–1024px), desktop (> 1024px)
- [ ] Toutes les animations respectent `prefers-reduced-motion`
- [ ] jQuery est supprimé (tech stack au libre choix de l'Agent M)
- [ ] Les images sont en WebP avec fallback
- [ ] Le HTML est sémantique (`<header>`, `<main>`, `<section>`, `<nav>`, `<footer>`)
- [ ] Les couleurs suivent le design system établi (variables CSS)
- [ ] Le repo Git est propre avec des commits descriptifs
- [ ] Un README.md décrit le projet et comment le lancer

---

## 10. Risques & points d'attention

| Risque | Probabilité | Impact | Mitigation |
|---|---|---|---|
| Perte de "l'âme" cyberpunk en modernisant | Moyenne | Élevé | Conserver palette, fonts, références — améliorer, pas remplacer |
| Performance canvas sur mobile | Moyenne | Moyen | Réduire segments canvas ou désactiver sur mobile |
| Trop d'animations = fatigue visuelle | Moyenne | Moyen | Respecter prefers-reduced-motion + ne pas tout animer |
| Images non converties (WebP) | Faible | Moyen | Script de conversion batch avant déploiement |
| Liens Google Drive cassés | Faible | Moyen | Tester tous les liens externes |

---

## 11. Priorité de réalisation (ordonnancement pour Phase M)

### Sprint 1 — Fondations
1. Choisir la stack technique et initialiser le projet
2. Créer le design system CSS (variables, reset, animations de base)
3. Construire le squelette multi-page (HTML sémantique pour chaque page)
4. Implémenter la navbar commune + système de transitions inter-pages

### Sprint 2 — Pages principales
5. Page Home / Hero (fly-in text, orbiting buttons, canvas grid)
6. Page About Me (convecteur temporel, liens, coordonnées)
7. Page Skills (compétences, anneau CV)
8. Page Searching (Matrix pills, Mario bloc, Green AI)
9. Page Projects (cartes projets avec hover effects)

### Sprint 3 — Polish & qualité
10. Transitions cinématiques variées entre les pages
11. Responsive design complet (mobile → desktop)
12. Accessibilité (ARIA, prefers-reduced-motion, contraste)
13. SEO (meta tags, OpenGraph, Schema.org, sitemap)
14. Performance (WebP, lazy loading, minification)
15. Sécurité (CSP, headers)

### Sprint 4 — Finalisation
16. Tests cross-browser (Chrome, Firefox, Safari, Edge)
17. Tests Lighthouse (cible ≥ 90)
18. README.md final
19. Déploiement

---

## 12. Assets existants (à migrer/convertir)

### Images à conserver et optimiser

| Fichier | Usage | Action |
|---|---|---|
| `stargate.png` | Boutons de navigation home | → WebP |
| `convecteurTemporel[1-3].png` | About Me — 3 étapes | → WebP |
| `redPill.png` / `bluePill.png` | Searching — pilules Matrix | → WebP |
| `blocMario.png` / `blocMario2.png` | Searching — bloc interactif | → WebP |
| `millenium.png` | Loading (à repenser si SPA) | → WebP ou abandonner |
| `rcs.png` | About Me — lien rugby | → WebP |
| `linkedin.webp` | About Me — lien LinkedIn | Déjà optimisé |
| `logoDev.png` | About Me — lien dev | → WebP |
| `carteSiteIfto.png` | Projects | → WebP |
| `carteMemoryGame.png` | Projects | → WebP |
| `carteSystemeSolaire.png` | Projects | → WebP |
| `carteDemineur2.0.png` | Projects | → WebP |
| `backArrow1.png` | Navigation retour | → SVG icon |
| `favicone.png` | Favicon | → SVG ou ICO optimisé |

### Polices (inchangées)
- Orbitron (regular à 900) — woff2 ✅
- Montserrat Alternates (100 à 900) — woff2 ✅
- MedievalSharp — woff2 ✅ (usage à déterminer)

---

## 13. Glossaire BMAD

| Terme | Définition |
|---|---|
| **Phase B** | Blueprint — Analyse, vision produit, spécifications (ce document) |
| **Phase M** | Making — Développement, implémentation, tests |
| **Phase A** | Architect — Architecture technique détaillée |
| **Phase D** | Deploy — Déploiement, CI/CD, mise en production |
| **SPA** | Single Page Application |
| **CSP** | Content Security Policy |
| **WCAG** | Web Content Accessibility Guidelines |

---

> 📦 **Ce document est le livrable de la Phase B.**  
> Il doit être lu par l'Agent Phase M comme la source de vérité pour le développement.  
> Toute question ou ambiguïté doit être remontée à l'utilisateur (Corentin).

