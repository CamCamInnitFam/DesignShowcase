import { type Project, type InsertProject, type Experience, type InsertExperience, type Skill, type InsertSkill, type Document, type InsertDocument } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getProjects(): Promise<Project[]>;
  getProject(id: string): Promise<Project | undefined>;
  createProject(project: InsertProject): Promise<Project>;
  
  getExperience(): Promise<Experience[]>;
  createExperience(experience: InsertExperience): Promise<Experience>;
  
  getSkills(): Promise<Skill[]>;
  createSkill(skill: InsertSkill): Promise<Skill>;
  
  getDocuments(): Promise<Document[]>;
  getDocument(id: string): Promise<Document | undefined>;
  getDocumentsByType(type: string): Promise<Document[]>;
  createDocument(document: InsertDocument): Promise<Document>;
}

export class MemStorage implements IStorage {
  private projects: Map<string, Project>;
  private experience: Map<string, Experience>;
  private skills: Map<string, Skill>;
  private documents: Map<string, Document>;

  constructor() {
    this.projects = new Map();
    this.experience = new Map();
    this.skills = new Map();
    this.documents = new Map();
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
        projectUrl: "/project/collision-game-engine-subsystem",
        status: "completed",
        featured: "true"
      },
      {
        title: "Castle Rescue",
        description: "Action-adventure game developed in Unity featuring puzzle-solving mechanics and medieval-themed gameplay.",
        technologies: ["Unity", "Game Design"],
        category: "Complete Games",
        imageUrl: "http://cc1501.brighton.domains/blog/wp-content/uploads/2023/01/castleRescueStart.png",
        projectUrl: "/project/castle-rescue",
        status: "completed",
        featured: "true"
      },
      {
        title: "RTS Game with AI",
        description: "Real-time strategy game featuring advanced AI behaviors, pathfinding, and strategic decision-making systems.",
        technologies: ["C++", "AI"],
        category: "Complete Games",
        imageUrl: "http://cc1501.brighton.domains/blog/wp-content/uploads/2023/01/GamesAI.png",
        projectUrl: "/project/rts-game-with-ai",
        status: "completed",
        featured: "true"
      },
      {
        title: "Pig Elimination Simulator",
        description: "Simulation game demonstrating object-oriented programming principles and game state management in C++.",
        technologies: ["C++", "Simulation"],
        category: "Complete Games",
        imageUrl: "http://cc1501.brighton.domains/blog/wp-content/uploads/2023/01/pigelimsim.png",
        projectUrl: "/project/pig-elimination-simulator",
        status: "completed",
        featured: "false"
      },
      {
        title: "Battle of The Tanks",
        description: "Browser-based tank combat game built with JavaScript and HTML5 Canvas, featuring real-time multiplayer action.",
        technologies: ["JavaScript", "Web"],
        category: "Web Games",
        imageUrl: "http://cc1501.brighton.domains/blog/wp-content/uploads/2021/12/image-1.png",
        projectUrl: "/project/battle-of-the-tanks",
        status: "completed",
        featured: "true"
      },
      {
        title: "Wizz",
        description: "3D adventure game developed in Unreal Engine featuring magic-based gameplay mechanics and immersive environments.",
        technologies: ["Unreal Engine", "3D"],
        category: "Complete Games",
        imageUrl: "http://cc1501.brighton.domains/blog/wp-content/uploads/2021/12/image-2.png",
        projectUrl: "/project/wizz",
        status: "completed",
        featured: "false"
      },
      {
        title: "Underwater Platformer",
        description: "Aquatic-themed platformer game built with JavaScript, featuring fluid physics and underwater exploration mechanics.",
        technologies: ["JavaScript", "Platformer"],
        category: "Web Games",
        imageUrl: "http://cc1501.brighton.domains/blog/wp-content/uploads/2021/12/image-3.png",
        projectUrl: "/project/underwater-platformer",
        status: "completed",
        featured: "false"
      },
      {
        title: "Riot Rush",
        description: "Collaborative Unity project developed as part of an integrated group assignment, featuring fast-paced action gameplay.",
        technologies: ["Unity", "Team Project"],
        category: "Complete Games",
        imageUrl: "http://cc1501.brighton.domains/blog/wp-content/uploads/2023/05/riotRush-2.png",
        projectUrl: "/project/riot-rush",
        status: "completed",
        featured: "false"
      },
      {
        title: "The Tale of Captain Rogers",
        description: "Interactive narrative adventure created with Twine, featuring branching storylines and character-driven storytelling.",
        technologies: ["Twine", "Narrative Design"],
        category: "Narrative Design",
        imageUrl: "http://cc1501.brighton.domains/blog/wp-content/uploads/2023/05/nelly.jpg",
        projectUrl: "/project/the-tale-of-captain-rogers",
        status: "completed",
        featured: "false"
      },
      {
        title: "When The Devil Takes Hold",
        description: "Atmospheric horror game developed in Unreal Engine 5.1, showcasing advanced lighting and environmental storytelling.",
        technologies: ["Unreal Engine 5.1", "Horror"],
        category: "Complete Games",
        imageUrl: "http://cc1501.brighton.domains/blog/wp-content/uploads/2023/01/thumbnail-1.png",
        projectUrl: "/project/when-the-devil-takes-hold",
        status: "completed",
        featured: "true"
      },
      {
        title: "Compression Algorithm",
        description: "Custom data compression algorithm implementation showcasing algorithmic problem-solving skills. Project documentation coming soon.",
        technologies: ["Java", "Algorithms"],
        category: "Algorithms",
        projectUrl: "/project/compression-algorithm",
        status: "coming-soon",
        featured: "false"
      },
      {
        title: "Tankz - Multiplayer Game",
        description: "Network-based multiplayer tank combat game demonstrating networked gameplay programming. Built using Java and C++.",
        technologies: ["Java", "C++", "Networking"],
        category: "Complete Games",
        projectUrl: "/project/tankz-multiplayer-game",
        status: "in-progress",
        featured: "false"
      },
      {
        title: "VR Game",
        description: "Virtual reality experience developed in Unity, exploring immersive interaction design and 3D spatial programming.",
        technologies: ["Unity", "VR", "3D"],
        category: "Complete Games",
        projectUrl: "/project/vr-game",
        status: "coming-soon",
        featured: "false"
      }
    ];

    const experienceData: InsertExperience[] = [
      {
        title: "Software Developer - Placement Year",
        company: "Clarksons Research",
        description: "Full-time placement position developing maritime industry software solutions and data management systems",
        technologies: ["C#", "XAML", "VBA", "SQL"],
        responsibilities: [
          "Developed desktop applications for maritime data analysis",
          "Designed and optimized database structures for shipping information",
          "Created user interfaces using XAML for enhanced user experience", 
          "Automated data processing workflows using VBA",
          "Collaborated with maritime industry professionals to understand business requirements"
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
        description: "Proficient with game engines and design",
        technologies: ["Unity", "Unreal Engine", "Game Design"],
        icon: "fas fa-gamepad"
      },
      {
        category: "Web Development",
        title: "Web Development",
        description: "Proficient in modern web technologies",
        technologies: ["HTML5", "CSS3", "Canvas API"],
        icon: "fas fa-globe"
      },
      {
        category: "Database & Tools",
        title: "Database & Tools",
        description: "Proficient with data management and development tools",
        technologies: ["SQL", "XAML", "VBA"],
        icon: "fas fa-database"
      },
      {
        category: "Creative Tools",
        title: "Creative Tools",
        description: "Proficient in interactive storytelling and design",
        technologies: ["Twine", "Narrative Design", "UI/UX"],
        icon: "fas fa-pen-fancy"
      },
      {
        category: "Specializations",
        title: "Specializations",
        description: "Proficient in computer science concepts",
        technologies: ["AI", "Algorithms", "Physics"],
        icon: "fas fa-brain"
      }
    ];

    const documentsData: InsertDocument[] = [
      {
        title: "Cameron Crook - CV",
        description: "Comprehensive curriculum vitae highlighting education, technical skills, and professional experience",
        type: "cv",
        filename: "Cameron_Crook_CV.pdf",
        fileUrl: "/documents/cameron-crook-cv.pdf"
      },
      {
        title: "Collision Detection System - Technical Report",
        description: "Detailed technical writeup covering the implementation of spatial partitioning algorithms and collision optimization",
        type: "project-writeup",
        filename: "Collision_Detection_Technical_Report.pdf",
        fileUrl: "/documents/collision-detection-report.pdf",
        projectId: "collision-engine"
      },
      {
        title: "Castle Rescue - Game Design Document",
        description: "Complete game design document including mechanics, level design, and development process",
        type: "project-writeup",
        filename: "Castle_Rescue_Design_Document.pdf",
        fileUrl: "/documents/castle-rescue-design-doc.pdf",
        projectId: "castle-rescue"
      },
      {
        title: "RTS AI Implementation - Research Paper",
        description: "Academic paper detailing AI decision-making algorithms and pathfinding implementations",
        type: "project-writeup",
        filename: "RTS_AI_Research_Paper.pdf",
        fileUrl: "/documents/rts-ai-research-paper.pdf",
        projectId: "rts-game"
      }
    ];

    // Initialize projects
    projectsData.forEach(project => {
      const id = randomUUID();
      const projectWithId: Project = { ...project, id };
      this.projects.set(id, projectWithId);
    });

    // Initialize experience
    experienceData.forEach(exp => {
      const id = randomUUID();
      const expWithId: Experience = { ...exp, id };
      this.experience.set(id, expWithId);
    });

    // Initialize skills
    skillsData.forEach(skill => {
      const id = randomUUID();
      const skillWithId: Skill = { ...skill, id };
      this.skills.set(id, skillWithId);
    });

    // Initialize documents
    documentsData.forEach(document => {
      const id = randomUUID();
      const documentWithId: Document = { ...document, id };
      this.documents.set(id, documentWithId);
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

  async getDocuments(): Promise<Document[]> {
    return Array.from(this.documents.values());
  }

  async getDocument(id: string): Promise<Document | undefined> {
    return this.documents.get(id);
  }

  async getDocumentsByType(type: string): Promise<Document[]> {
    return Array.from(this.documents.values()).filter(doc => doc.type === type);
  }

  async createDocument(insertDocument: InsertDocument): Promise<Document> {
    const id = randomUUID();
    const document: Document = { ...insertDocument, id };
    this.documents.set(id, document);
    return document;
  }
}

export const storage = new MemStorage();
