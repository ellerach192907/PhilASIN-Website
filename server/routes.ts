import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contacts", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(validatedData);
      res.status(201).json({ message: "Contact form submitted successfully", contact });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Invalid form data", errors: error.errors });
      } else {
        res.status(500).json({ message: "Failed to submit contact form" });
      }
    }
  });

  // Get all contacts (for admin purposes)
  app.get("/api/contacts", async (req, res) => {
    try {
      const contacts = await storage.getContacts();
      res.json(contacts);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch contacts" });
    }
  });

  // Get all news articles
  app.get("/api/news", async (req, res) => {
    try {
      const news = await storage.getNews();
      res.json(news);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch news" });
    }
  });

  // Get featured news
  app.get("/api/news/featured", async (req, res) => {
    try {
      const featuredNews = await storage.getFeaturedNews();
      res.json(featuredNews);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch featured news" });
    }
  });

  // Get news by ID
  app.get("/api/news/:id", async (req, res) => {
    try {
      const news = await storage.getNewsById(req.params.id);
      if (!news) {
        res.status(404).json({ message: "News article not found" });
        return;
      }
      res.json(news);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch news article" });
    }
  });

  // Get all resources
  app.get("/api/resources", async (req, res) => {
    try {
      const { category } = req.query;
      let resources;
      
      if (category && typeof category === 'string') {
        resources = await storage.getResourcesByCategory(category);
      } else {
        resources = await storage.getResources();
      }
      
      res.json(resources);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch resources" });
    }
  });

  // Get resource by ID
  app.get("/api/resources/:id", async (req, res) => {
    try {
      const resource = await storage.getResourceById(req.params.id);
      if (!resource) {
        res.status(404).json({ message: "Resource not found" });
        return;
      }
      res.json(resource);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch resource" });
    }
  });

  // Get all members
  app.get("/api/members", async (req, res) => {
    try {
      const { type } = req.query;
      let members;
      
      if (type && typeof type === 'string') {
        members = await storage.getMembersByType(type);
      } else {
        members = await storage.getMembers();
      }
      
      res.json(members);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch members" });
    }
  });

  // Get member statistics
  app.get("/api/members/stats", async (req, res) => {
    try {
      const stats = await storage.getMemberStats();
      res.json(stats);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch member statistics" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
