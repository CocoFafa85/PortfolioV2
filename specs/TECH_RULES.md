# 📏 TECH RULES & CODING STANDARDS — PortfolioV2

> **Phase BMAD :** A (Architect)
> **Statut :** DRAFT

---

## 1. General Principles
*   **KISS (Keep It Simple, Stupid)**: Pas d'over-engineering. Si une librairie résout un problème simple, préférez une fonction custom.
*   **DRY (Don't Repeat Yourself)**: Extraire la logique dupliquée dans des hooks (`use...`) ou des utilitaires.
*   **Composition over Inheritance**: React favorise la composition.

## 2. TypeScript Guidelines
*   **NO `any`**: L'usage de `any` est interdit sauf justification explicite via commentaire `// eslint-disable-next-line`.
*   **Interfaces over Types**: Pour les objets/props, préférez `interface`.
*   **Explicit Returns**: Toujours typer le retour des fonctions complexes.

## 3. React Components
*   **Function Components**: Uniquement. Pas de `class components`.
*   **PascalCase**: Pour les fichiers composants (`UserProfile.tsx`).
*   **Named Exports**: Préférer `export const UserProfile = ...` plutôt que `export default`.
    *   *Raison*: Facilite le refactoring et l'auto-import dans IDE.
*   **Props Interface**: Toujours définir `interface UserProfileProps` au-dessus du composant.

## 4. Styling (SCSS Modules)
*   **Naming**: `Component.module.scss`.
*   **Variables**: Utiliser les variables CSS globales (`var(--neon-pink)`) définie dans `src/styles/_variables.scss`.
*   **Nesting**: Limiter le nesting à 3 niveaux maximum pour éviter la complexité.

## 5. Directory Structure
*   **Colocation**: Les tests (`.test.tsx`) et styles (`.module.scss`) vivent à côté du composant.
    ```
    components/
      Button/
        Button.tsx
        Button.module.scss
        Button.test.tsx
    ```

## 6. Git & Commits
*   **Conventional Commits**: `feat:`, `fix:`, `docs:`, `style:`, `refactor:`, `test:`, `chore:`.
*   **English**: Messages de commit en anglais impératif (`Add new feature`, pas `Added...`).

## 7. Security (OWASP)
*   **No Dangerous HTML**: Éviter `dangerouslySetInnerHTML`. Si nécessaire, utiliser `dompurify`.
*   **Dependencies**: Vérifier régulièrement via `npm audit`.
*   **Secrets**: Jamais de clés API dans le code client. Utiliser `.env`.
