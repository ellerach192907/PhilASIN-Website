import { type User, type InsertUser, type Contact, type InsertContact, type News, type InsertNews, type Resource, type InsertResource, type Member, type InsertMember } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  // Users
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;

  // Contacts
  createContact(contact: InsertContact): Promise<Contact>;
  getContacts(): Promise<Contact[]>;

  // News
  getNews(): Promise<News[]>;
  getFeaturedNews(): Promise<News[]>;
  getNewsById(id: string): Promise<News | undefined>;
  createNews(news: InsertNews): Promise<News>;

  // Resources
  getResources(): Promise<Resource[]>;
  getResourcesByCategory(category: string): Promise<Resource[]>;
  getResourceById(id: string): Promise<Resource | undefined>;
  createResource(resource: InsertResource): Promise<Resource>;

  // Members
  getMembers(): Promise<Member[]>;
  getMembersByType(type: string): Promise<Member[]>;
  createMember(member: InsertMember): Promise<Member>;
  getMemberStats(): Promise<{ total: number; farmers: number; businesses: number; provinces: number }>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private contacts: Map<string, Contact>;
  private news: Map<string, News>;
  private resources: Map<string, Resource>;
  private members: Map<string, Member>;

  constructor() {
    this.users = new Map();
    this.contacts = new Map();
    this.news = new Map();
    this.resources = new Map();
    this.members = new Map();

    // Initialize with some sample data for demonstration
    this.initializeSampleData();
  }

  private initializeSampleData() {
    // Sample news articles
    const sampleNews: (News & { id: string })[] = [
      {
        id: randomUUID(),
        title: "Philippine Salt Production Reaches Record High in 2024",
        content: "The Philippine salt industry achieved unprecedented production levels this year, with output increasing by 25% compared to 2023. This growth is attributed to improved farming techniques, technological adoption, and favorable weather conditions across major salt-producing regions.",
        excerpt: "The Philippine salt industry achieved unprecedented production levels this year, with output increasing by 25% compared to 2023.",
        category: "FEATURED",
        imageUrl: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
        featured: true,
        publishedAt: new Date('2024-12-15'),
        createdAt: new Date('2024-12-15'),
      },
      {
        id: randomUUID(),
        title: "New Salt Quality Standards Implemented",
        content: "Government agencies introduce enhanced quality control measures for salt production to ensure consumer safety and product excellence.",
        excerpt: "Government agencies introduce enhanced quality control measures...",
        category: "POLICY",
        imageUrl: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
        featured: false,
        publishedAt: new Date('2024-12-10'),
        createdAt: new Date('2024-12-10'),
      },
      {
        id: randomUUID(),
        title: "Solar-Powered Salt Production Technology",
        content: "New sustainable production methods gain traction among farmers, reducing environmental impact while maintaining high productivity.",
        excerpt: "New sustainable production methods gain traction among farmers...",
        category: "INNOVATION",
        imageUrl: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
        featured: false,
        publishedAt: new Date('2024-12-08'),
        createdAt: new Date('2024-12-08'),
      },
    ];

    sampleNews.forEach(article => {
      this.news.set(article.id, article);
    });

    // Sample resources
    const sampleResources: (Resource & { id: string })[] = [
      {
        id: randomUUID(),
        title: "Salt Production Best Practices Manual",
        description: "Comprehensive guide covering modern salt production techniques, quality control, and sustainable practices.",
        category: "Technical Guide",
        fileUrl: "#",
        fileName: "salt-production-manual.pdf",
        fileSize: "2.5 MB",
        fileType: "PDF",
        downloadCount: 245,
        createdAt: new Date('2024-12-01'),
      },
      {
        id: randomUUID(),
        title: "Philippine Salt Industry Market Analysis 2024",
        description: "In-depth analysis of market trends, opportunities, and challenges facing the Philippine salt industry.",
        category: "Market Report",
        fileUrl: "#",
        fileName: "market-analysis-2024.pdf",
        fileSize: "4.1 MB",
        fileType: "PDF",
        downloadCount: 189,
        createdAt: new Date('2024-11-15'),
      },
    ];

    sampleResources.forEach(resource => {
      this.resources.set(resource.id, resource);
    });
  }

  // Users
  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  // Contacts
  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = randomUUID();
    const contact: Contact = {
      ...insertContact,
      organization: insertContact.organization || null,
      id,
      createdAt: new Date(),
    };
    this.contacts.set(id, contact);
    return contact;
  }

  async getContacts(): Promise<Contact[]> {
    return Array.from(this.contacts.values()).sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
    );
  }

  // News
  async getNews(): Promise<News[]> {
    return Array.from(this.news.values()).sort(
      (a, b) => b.publishedAt.getTime() - a.publishedAt.getTime()
    );
  }

  async getFeaturedNews(): Promise<News[]> {
    return Array.from(this.news.values())
      .filter(article => article.featured)
      .sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime());
  }

  async getNewsById(id: string): Promise<News | undefined> {
    return this.news.get(id);
  }

  async createNews(insertNews: InsertNews): Promise<News> {
    const id = randomUUID();
    const news: News = {
      ...insertNews,
      imageUrl: insertNews.imageUrl || null,
      featured: insertNews.featured || false,
      id,
      publishedAt: new Date(),
      createdAt: new Date(),
    };
    this.news.set(id, news);
    return news;
  }

  // Resources
  async getResources(): Promise<Resource[]> {
    return Array.from(this.resources.values()).sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
    );
  }

  async getResourcesByCategory(category: string): Promise<Resource[]> {
    return Array.from(this.resources.values())
      .filter(resource => resource.category === category)
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }

  async getResourceById(id: string): Promise<Resource | undefined> {
    return this.resources.get(id);
  }

  async createResource(insertResource: InsertResource): Promise<Resource> {
    const id = randomUUID();
    const resource: Resource = {
      ...insertResource,
      id,
      downloadCount: 0,
      createdAt: new Date(),
    };
    this.resources.set(id, resource);
    return resource;
  }

  // Members
  async getMembers(): Promise<Member[]> {
    return Array.from(this.members.values()).sort(
      (a, b) => b.joinedAt.getTime() - a.joinedAt.getTime()
    );
  }

  async getMembersByType(type: string): Promise<Member[]> {
    return Array.from(this.members.values())
      .filter(member => member.membershipType === type)
      .sort((a, b) => b.joinedAt.getTime() - a.joinedAt.getTime());
  }

  async createMember(insertMember: InsertMember): Promise<Member> {
    const id = randomUUID();
    const member: Member = {
      ...insertMember,
      organization: insertMember.organization || null,
      id,
      status: "active",
      joinedAt: new Date(),
    };
    this.members.set(id, member);
    return member;
  }

  async getMemberStats(): Promise<{ total: number; farmers: number; businesses: number; provinces: number }> {
    const members = Array.from(this.members.values());
    const farmers = members.filter(m => m.membershipType === "Individual").length;
    const businesses = members.filter(m => m.membershipType === "Business" || m.membershipType === "Corporate").length;
    const provinces = new Set(members.map(m => m.province)).size;
    
    return {
      total: members.length || 500, // Default values for demo
      farmers: farmers || 350,
      businesses: businesses || 85,
      provinces: provinces || 15,
    };
  }
}

export const storage = new MemStorage();
