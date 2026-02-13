import { PortfolioContent } from '../types/models';

export const content: PortfolioContent = {
    home: {
        title: "Corentin FANIC",
        subtitle: "Développeur full stack"
    },
    about: {
        timeline: [
            {
                id: "past",
                title: "Qui j'étais",
                content: `Né aux Sables d'Olonne, j'ai grandi à la campagne. J'ai toujours été attiré par les activités qui stimulent mon raisonnement et ma logique. Que ce soient les sciences, la cinématographie, les échecs ou les jeux vidéo, ces passions ont façonné mon esprit analytique. Mon entourage familial et amical a été important pour moi et m'a aidé à garder les pieds sur terre.
Passionné par les sports, à l'âge de 12 ans j'ai commencé à pratiquer le rugby à XV au [Rugby Club Sablais (R.C.S)](https://rc-sablais.ffr.fr/). Cette expérience au niveau national m'a enseigné la discipline, la cohésion d'équipe et la persévérance, des valeurs qui m'accompagnent encore aujourd'hui.
Après avoir obtenu un baccalauréat général scientifique, j'ai exploré diverses voies professionnelles. J'ai entamé une formation en école d'ergothérapie puis j'ai finalement travaillé comme serveur et barman dans l'hôtellerie-restauration puis j'ai mûri mon projet actuel.`
            },
            {
                id: "present",
                title: "Qui je suis",
                content: `Actuellement, je suis étudiant à Cholet (49) dans le domaine de la programmation informatique, en cycle BTS SIO. Je souhaite poursuivre vers une troisième année de bachelor en alternance. Je consacre la majeure partie de mon temps à travailler et à acquérir un maximum de compétences dans ce domaine.
En parallèle, je réalise des missions rémunérées pour financer ma vie étudiante. Une vie que je partage avec ma compagne infirmière qui me soutient énormément dans mon projet. Retrouvez mon parcours sur [LinkedIn](http://www.linkedin.com/in/corentin-fanic-832630293).`
            },
            {
                id: "future",
                title: "Qui je serai",
                content: `Une fois mon cursus terminé et mon niveau de programmation au top, je me lancerai dans une carrière de [développeur informatique full stack](https://anakine.io/fiches-metiers-tech/tout-savoir-sur-le-metier-de-developpeur-full-stack/). Ce domaine me permet de m'éclater ce qui me donne la détermination nécessaire pour atteindre mon objectif. Bien que mon niveau d'étude restera à BAC+3, je compte accumuler de l'expérience et maîtriser les subtilités du monde du travail pour gravir les échelons autant que possible.
Mon objectif à long terme est d'avoir une fonction de responsable comme product owner.`
            }
        ]
    },
    skills: {
        intro: `Au cours de ma formation, je me suis familiarisé avec divers outils et technologies à travers des cours théoriques et pratiques, des PPE et des stages en milieu professionnel.
J'ai acquis une expertise diversifiée en développement web, couvrant à la fois le frontend et le backend. J'ai maîtrisé des technologies pour créer des interfaces utilisateur interactives et responsives (SCSS, JavaScript, TypeScript, Bootstrap, etc.) J'ai appris à utiliser des langages et frameworks (PHP, Java, Symfony, Doctrine) pour créer des interfaces dynamiques avec une base de données.
J'ai développé des compétences solides en gestion de bases de données, tant relationnelles (SQL, phpMyAdmin, SQL Server) que non relationnelles (MongoDB). J'ai appliqué des méthodologies Agile et DevOps pour gérer efficacement le versioning et la collaboration (Git/GitHub, Jira, Trello). J'ai mis en œuvre des bonnes pratiques de sécurité OWASP et travaillé sur le développement d'API RESTful. J'ai utilisé Docker, des outils de diagrammes/MCD et WordPress.`,
        categories: [
            {
                id: "frontend",
                title: "Frontend",
                skills: [
                    { name: "React / Vite", level: 85 },
                    { name: "TypeScript", level: 80 },
                    { name: "SCSS / Modules", level: 90 },
                    { name: "JavaScript", level: 85 },
                    { name: "Bootstrap / Tailwind", level: 80 }
                ]
            },
            {
                id: "backend",
                title: "Backend",
                skills: [
                    { name: "Node.js", level: 75 },
                    { name: "PHP / Symfony", level: 80 },
                    { name: "SQL (MySQL)", level: 85 },
                    { name: "API REST", level: 80 }
                ]
            },
            {
                id: "tools",
                title: "Outils & DevOps",
                skills: [
                    { name: "Git / GitHub", level: 85 },
                    { name: "Docker", level: 60 },
                    { name: "Figma", level: 70 },
                    { name: "VS Code", level: 95 }
                ]
            }
        ]
    },

    projects: {
        list: [
            {
                id: "ifto",
                title: "Site IFTO",
                description: "Refonte complète du site de l'Institut de Formation en Thérapies Manuelles. Gestion de contenu dynamique et administration.",
                demoLink: "https://www.ifto.fr/",
                tags: ["Symfony", "PHP", "MySQL", "Bootstrap"],
                featured: true,
                color: "#ffaa00"
            },
            {
                id: "memory",
                title: "Memory Game",
                description: "Jeu de mémoire classique développé en JavaScript pur. Travail sur la logique DOM et les animations CSS.",
                demoLink: "https://cocofafa85.github.io/ANG/Memory.html",
                tags: ["JavaScript", "HTML/CSS", "DOM"],
                repoLink: "https://github.com/cocofafa85/ANG",
                color: "#bc13fe"
            },
            {
                id: "solar",
                title: "Système Solaire",
                description: "Simulation interactive du système solaire en HTML/CSS/JS. Exploration des animations orbitales.",
                demoLink: "https://cocofafa85.github.io/SolarSystem/index.html",
                tags: ["HTML", "CSS Animations", "JavaScript"],
                color: "#0aff0a"
            },
            {
                id: "first-portfolio",
                title: "First Portfolio",
                description: "La genèse. Mon tout premier portfolio développé en HTML/CSS pur. Une archive précieuse de mes débuts.",
                demoLink: "https://cocofafa85.github.io/Portfolio/index.html",
                repoLink: "https://github.com/CocoFafa85/Portfolio",
                tags: ["HTML5", "CSS3", "Legacy"],
                color: "#2962ff"
            },
            {
                id: "demineur",
                title: "Démineur 2.0",
                description: "Réinterprétation moderne du célèbre jeu Démineur avec des niveaux de difficulté progressifs.",
                tags: ["React", "TypeScript", "Vite"],
                featured: true,
                color: "#ff0055"
            }
        ]
    },
    links: [
        { label: "RCS (Rugby)", url: "https://rc-sablais.ffr.fr/", context: "About Me — étape 1" },
        { label: "LinkedIn", url: "http://www.linkedin.com/in/corentin-fanic-832630293", context: "About Me — étape 2" },
        { label: "Logo Dev", url: "https://anakine.io/fiches-metiers-tech/tout-savoir-sur-le-metier-de-developpeur-full-stack/", context: "About Me — étape 3" },
        { label: "CV (Drive)", url: "https://drive.google.com/file/d/1ybGdg18FpvSujVRr3X_gaF04kyUevnxl/view?usp=sharing", context: "Skills — anneau rotatif" },
        { label: "Compétences (Sheets)", url: "https://docs.google.com/spreadsheets/d/1Ii-8VC9w8osA8PfR65HRA1Mz1Ori7YOQ/edit?...", context: "Skills — texte" }
    ]
};
