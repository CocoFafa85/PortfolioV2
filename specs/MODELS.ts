export type TechStack =
    | "React" | "TypeScript" | "Node.js" | "PHP" | "Symfony"
    | "MySQL" | "MongoDB" | "Docker" | "AWS" | "SCSS" | "Tailwind";

export interface Project {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    demoUrl?: string; // Optional if not deployed
    repoUrl?: string; // Optional if private
    tags: TechStack[];
    featured: boolean;
}

export interface SkillCategory {
    title: string;
    skills: {
        name: string;
        level: number; // 1-100
        icon?: string; // Lucide icon name or svg path
    }[];
}

export interface CareerStep {
    id: string;
    period: string; // e.g. "2023 - Présent"
    title: string;
    description: string; // Markdown allowed
    type: "education" | "work" | "other";
}

export interface UserProfile {
    name: string;
    role: string;
    bio: {
        short: string;
        long: string; // Paragraphs
    };
    socials: {
        platform: "LinkedIn" | "GitHub" | "Twitter" | "Email" | "CV";
        url: string;
    }[];
}
