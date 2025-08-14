import { type Project, type InsertProject, type Experience, type InsertExperience, type Skill, type InsertSkill } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getProjects(): Promise<Project[]>;
  getProject(id: string): Promise<Project | undefined>;
  createProject(project: InsertProject): Promise<Project>;
  
  getExperience(): Promise<Experience[]>;
  createExperience(experience: InsertExperience): Promise<Experience>;
  
  getSkills(): Promise<Skill[]>;
  createSkill(skill: InsertSkill): Promise<Skill>;
}

export class MemStorage implements IStorage {
  private projects: Map<string, Project>;
  private experience: Map<string, Experience>;
  private skills: Map<string, Skill>;

  constructor() {
    this.projects = new Map();
    this.experience = new Map();
    this.skills = new Map();
    this.initializeData();
  }

  private initializeData() {
    // Initialize with Cameron's actual project data
    const projectsData: InsertProject[] = [
      {
        title: "Collision Game Engine Subsystem",
        description: "Advanced collision detection and physics subsystem built in C++ with optimized spatial partitioning algorithms.",
        technologies: ["C++", "Game Engine"],
        category: "Game Engines",
        imageUrl: "http://cc1501.brighton.domains/blog/wp-content/uploads/2023/05/GEF-demo.png",
        projectUrl: "http://cc1501.brighton.domains/blog/collision-detection-subsystem/",
        status: "completed",
        featured: "true"
      },
      {
        title: "Castle Rescue",
        description: "Action-adventure game developed in Unity featuring puzzle-solving mechanics and medieval-themed gameplay.",
        technologies: ["Unity", "Game Design"],
        category: "Complete Games",
        imageUrl: "http://cc1501.brighton.domains/blog/wp-content/uploads/2023/01/castleRescueStart.png",
        projectUrl: "http://cc1501.brighton.domains/blog/castle-rescue/",
        status: "completed",
        featured: "true"
      },
      {
        title: "RTS Game with AI",
        description: "Real-time strategy game featuring advanced AI behaviors, pathfinding, and strategic decision-making systems.",
        technologies: ["C++", "AI"],
        category: "Complete Games",
        imageUrl: "http://cc1501.brighton.domains/blog/wp-content/uploads/2023/01/GamesAI.png",
        projectUrl: "http://cc1501.brighton.domains/blog/ci516-games-ai-rts/",
        status: "completed",
        featured: "true"
      },
      {
        title: "Pig Elimination Simulator",
        description: "Simulation game demonstrating object-oriented programming principles and game state management in C++.",
        technologies: ["C++", "Simulation"],
        category: "Complete Games",
        imageUrl: "http://cc1501.brighton.domains/blog/wp-content/uploads/2023/01/pigelimsim.png",
        projectUrl: "http://cc1501.brighton.domains/blog/games-programming-pig-elimination-simulator/",
        status: "completed",
        featured: "false"
      },
      {
        title: "Battle of The Tanks",
        description: "Browser-based tank combat game built with JavaScript and HTML5 Canvas, featuring real-time multiplayer action.",
        technologies: ["JavaScript", "Web"],
        category: "Web Games",
        imageUrl: "http://cc1501.brighton.domains/blog/wp-content/uploads/2021/12/image-1.png",
        projectUrl: "http://cc1501.brighton.domains/tanksJS/",
        status: "completed",
        featured: "true"
      },
      {
        title: "Wizz",
        description: "3D adventure game developed in Unreal Engine featuring magic-based gameplay mechanics and immersive environments.",
        technologies: ["Unreal Engine", "3D"],
        category: "Complete Games",
        imageUrl: "http://cc1501.brighton.domains/blog/wp-content/uploads/2021/12/image-2.png",
        projectUrl: "http://cc1501.brighton.domains/blog/wizz-unreal-engine-game/",
        status: "completed",
        featured: "false"
      },
      {
        title: "Underwater Platformer",
        description: "Aquatic-themed platformer game built with JavaScript, featuring fluid physics and underwater exploration mechanics.",
        technologies: ["JavaScript", "Platformer"],
        category: "Web Games",
        imageUrl: "http://cc1501.brighton.domains/blog/wp-content/uploads/2021/12/image-3.png",
        projectUrl: "http://cc1501.brighton.domains/Underwater-platformer/",
        status: "completed",
        featured: "false"
      },
      {
        title: "Riot Rush",
        description: "Collaborative Unity project developed as part of an integrated group assignment, featuring fast-paced action gameplay.",
        technologies: ["Unity", "Team Project"],
        category: "Complete Games",
        imageUrl: "http://cc1501.brighton.domains/blog/wp-content/uploads/2023/05/riotRush-2.png",
        projectUrl: "http://cc1501.brighton.domains/blog/riot-rush-ci536-integrated-group-project/",
        status: "completed",
        featured: "false"
      },
      {
        title: "The Tale of Captain Rogers",
        description: "Interactive narrative adventure created with Twine, featuring branching storylines and character-driven storytelling.",
        technologies: ["Twine", "Narrative Design"],
        category: "Narrative Design",
        imageUrl: "http://cc1501.brighton.domains/blog/wp-content/uploads/2023/05/nelly.jpg",
        projectUrl: "http://cc1501.brighton.domains/blog/the-tale-of-captain-rogers-and-the-golden-spyglass/",
        status: "completed",
        featured: "false"
      },
      {
        title: "When The Devil Takes Hold",
        description: "Atmospheric horror game developed in Unreal Engine 5.1, showcasing advanced lighting and environmental storytelling.",
        technologies: ["Unreal Engine 5.1", "Horror"],
        category: "Complete Games",
        imageUrl: "http://cc1501.brighton.domains/blog/wp-content/uploads/2023/01/thumbnail-1.png",
        projectUrl: "http://cc1501.brighton.domains/blog/when-the-devil-takes-hold/",
        status: "completed",
        featured: "true"
      },
      {
        title: "Compression Algorithm",
        description: "Custom data compression algorithm implementation in Java. Project documentation coming soon.",
        technologies: ["Java", "Algorithms"],
        category: "Algorithms",
        status: "coming-soon",
        featured: "false"
      },
      {
        title: "Tankz - Multiplayer Game",
        description: "Network-based multiplayer tank game using Java and C++. Development in progress.",
        technologies: ["Java", "C++", "Multiplayer"],
        category: "Complete Games",
        status: "in-progress",
        featured: "false"
      },
      {
        title: "VR Game",
        description: "Immersive virtual reality experience developed in Unity. Project details to be announced.",
        technologies: ["Unity", "VR"],
        category: "Complete Games",
        status: "coming-soon",
        featured: "false"
      }
    ];

    const experienceData: InsertExperience[] = [
      {
        title: "Software Developer - Placement Year",
        company: "Clarksons Research",
        description: "Full-time placement position developing maritime industry software solutions",
        technologies: ["C#", "XAML", "VBA", "SQL"],
        responsibilities: [
          "Desktop application development",
          "Database design and optimization",
          "User interface development",
          "Process automation"
        ]
      }
    ];

    const skillsData: InsertSkill[] = [
      {
        category: "Programming Languages",
        title: "Programming Languages",
        description: "Proficient in multiple programming paradigms",
        technologies: ["C++", "C#", "JavaScript", "Java"],
        icon: "fas fa-code"
      },
      {
        category: "Game Development",
        title: "Game Development",
        description: "Professional game engine experience",
        technologies: ["Unity", "Unreal Engine", "Game Design"],
        icon: "fas fa-gamepad"
      },
      {
        category: "Web Development",
        title: "Web Development",
        description: "Modern web technologies and frameworks",
        technologies: ["HTML5", "CSS3", "Canvas API"],
        icon: "fas fa-globe"
      },
      {
        category: "Database & Tools",
        title: "Database & Tools",
        description: "Data management and development tools",
        technologies: ["SQL", "XAML", "VBA"],
        icon: "fas fa-database"
      },
      {
        category: "Creative Tools",
        title: "Creative Tools",
        description: "Interactive storytelling and design",
        technologies: ["Twine", "Narrative Design", "UI/UX"],
        icon: "fas fa-pen-fancy"
      },
      {
        category: "Specializations",
        title: "Specializations",
        description: "Advanced computer science concepts",
        technologies: ["AI", "Algorithms", "Physics"],
        icon: "fas fa-brain"
      }
    ];

    // Initialize projects
    projectsData.forEach(project => {
      const id = randomUUID();
      this.projects.set(id, { ...project, id });
    });

    // Initialize experience
    experienceData.forEach(exp => {
      const id = randomUUID();
      this.experience.set(id, { ...exp, id });
    });

    // Initialize skills
    skillsData.forEach(skill => {
      const id = randomUUID();
      this.skills.set(id, { ...skill, id });
    });
  }

  async getProjects(): Promise<Project[]> {
    return Array.from(this.projects.values());
  }

  async getProject(id: string): Promise<Project | undefined> {
    return this.projects.get(id);
  }

  async createProject(insertProject: InsertProject): Promise<Project> {
    const id = randomUUID();
    const project: Project = { ...insertProject, id };
    this.projects.set(id, project);
    return project;
  }

  async getExperience(): Promise<Experience[]> {
    return Array.from(this.experience.values());
  }

  async createExperience(insertExperience: InsertExperience): Promise<Experience> {
    const id = randomUUID();
    const experience: Experience = { ...insertExperience, id };
    this.experience.set(id, experience);
    return experience;
  }

  async getSkills(): Promise<Skill[]> {
    return Array.from(this.skills.values());
  }

  async createSkill(insertSkill: InsertSkill): Promise<Skill> {
    const id = randomUUID();
    const skill: Skill = { ...insertSkill, id };
    this.skills.set(id, skill);
    return skill;
  }
}

export const storage = new MemStorage();
