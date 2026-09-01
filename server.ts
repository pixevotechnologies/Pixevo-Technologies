import express, { Request, Response } from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Lazy-initialized GenAI client with required header
let aiClient: GoogleGenAI | null = null;

function getAIClient(): GoogleGenAI | null {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return null;
  }
  if (!aiClient) {
    aiClient = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });
  }
  return aiClient;
}

const PIXEVO_SYSTEM_INSTRUCTION = `You are Pixevo AI, the senior technical consultant and AI solutions architect for Pixevo Technologies.
Your role is to assist potential clients, technical leads, and founders who visit the Pixevo Technologies website.
You provide precise, articulate, and actionable consulting on software architecture, custom development, web & mobile applications, AI/ML integrations, cloud automation, and project scoping.

Key Information about Pixevo Technologies:
- Company Name: Pixevo Technologies
- Mission: Delivering modern software, AI, and automation solutions designed to help businesses grow, operate smarter, and compete globally.
- Primary Services:
  1. Custom Software Engineering (Enterprise applications, SaaS platforms, bespoke workflows, microservices).
  2. Web Application Development (High-performance React/Next.js, Node.js, TypeScript, scalable backends).
  3. Mobile App Development (Cross-platform Flutter & React Native, iOS & Android native solutions).
  4. AI & Cloud Automation (Custom LLM integrations, retrieval augmented generation / RAG, workflow automation, computer vision, data pipelines).
  5. UI/UX Product Design (Figma systems, rapid interactive prototyping, design audits, user journey mapping).
  6. Cloud Architecture & DevOps (AWS, GCP, Kubernetes, CI/CD pipelines, security hardening).
- Operational Model: Global Remote team with engineering teams working across Pakistan (PKT) and Middle East / Gulf (KSA) timezones, servicing clients in North America, Europe, Asia, and the Gulf.
- Working Hours: 9:00 AM – 7:00 PM (PKT) / 7:00 AM – 5:00 PM (KSA), Saturday through Thursday (Friday closed).
- Direct Contacts:
  - Email: pixevotechnologies@gmail.com
  - Phone / WhatsApp: +92 314 5138009 (https://wa.me/923145138009)
  - GitHub: https://github.com/pixevotechnologies/Pixevo-Technologies
  - LinkedIn: https://www.linkedin.com/company/pixevo-technologies/
  - Instagram: https://www.instagram.com/pixevotechnologies/
  - Facebook: Pixevo Technologies (Page ID: 1255953544265768)

Communication Guidelines:
- Tone: Professional, authoritative, highly competent, helpful, concise, and structured.
- Formatting: Use markdown (bullet points, bold text, clean paragraphs) for readability. When providing technical suggestions, propose clear architectures.
- Project Inquiries: If a user describes a project or asks for estimates, provide high-level architectural insight, recommend standard milestone phases (Discovery & Planning -> Prototyping -> Sprint Development -> QA & Deployment), and invite them to use the interactive Project Estimator or reach out directly on WhatsApp or Email for a dedicated proposal.
- Avoid hallucinating unreal pricing commitments; instead give realistic estimate frameworks or guide them to our interactive estimator.
- Maintain confidentiality and respect user specifications.`;

// API routes FIRST
app.get("/api/health", (_req: Request, res: Response) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// Chatbot endpoint
app.post("/api/chat", async (req: Request, res: Response) => {
  try {
    const { messages, userMessage } = req.body;

    if (!userMessage || typeof userMessage !== "string") {
      return res.status(400).json({ error: "userMessage is required" });
    }

    const ai = getAIClient();

    if (!ai) {
      // Fallback response if GEMINI_API_KEY is not configured yet in the environment
      const lower = userMessage.toLowerCase();
      let fallbackText = `Hello! I am Pixevo AI, technical consultant at **Pixevo Technologies**.\n\nWe specialize in custom full-stack software development, cloud architectures, AI automation, and mobile solutions.\n\n`;

      if (lower.includes("price") || lower.includes("cost") || lower.includes("budget") || lower.includes("rate")) {
        fallbackText += `Our project budgets are scoped based on architecture requirements, features, and timeline:\n- **MVP & Prototypes**: Typically 2–4 weeks sprint.\n- **Full-Stack SaaS / Apps**: 6–12 weeks structured development.\n- **Enterprise & AI Integration**: Tailored milestone roadmaps.\n\nYou can use our interactive **Project Estimator** on the site or contact us on WhatsApp at **+92 314 5138009** for a fast custom proposal.`;
      } else if (lower.includes("service") || lower.includes("what do you do") || lower.includes("offer")) {
        fallbackText += `Here are our core engineering capabilities:\n- **Custom Software Engineering** (Enterprise apps, SaaS platforms)\n- **Web & Mobile Development** (React, Node, TypeScript, Flutter)\n- **AI & Automation** (Custom agents, LLM pipelines, workflow tools)\n- **Cloud & DevOps** (AWS, GCP, Kubernetes, CI/CD)`;
      } else if (lower.includes("contact") || lower.includes("email") || lower.includes("whatsapp") || lower.includes("phone")) {
        fallbackText += `You can reach our engineering team directly via:\n- **Email**: pixevotechnologies@gmail.com\n- **WhatsApp**: [+92 314 5138009](https://wa.me/923145138009)\n- **Hours**: 9 AM – 7 PM PKT / 7 AM – 5 PM KSA (Sat–Thu)`;
      } else {
        fallbackText += `How can we assist with your product roadmap, custom software build, or technical architecture today? Feel free to describe your project or connect directly via WhatsApp at **+92 314 5138009**.`;
      }

      return res.json({
        reply: fallbackText,
        isFallback: true,
      });
    }

    // Build chat history for Gemini
    const contents: any[] = [];

    if (Array.isArray(messages)) {
      for (const msg of messages) {
        if (msg.role === "user") {
          contents.push({
            role: "user",
            parts: [{ text: msg.content }],
          });
        } else if (msg.role === "assistant" || msg.role === "model") {
          contents.push({
            role: "model",
            parts: [{ text: msg.content }],
          });
        }
      }
    }

    // Append current user message
    contents.push({
      role: "user",
      parts: [{ text: userMessage }],
    });

    const response = await ai.models.generateContent({
      model: "gemini-3.7-flash",
      contents,
      config: {
        systemInstruction: PIXEVO_SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });

    const text = response.text || "Thank you for reaching out to Pixevo Technologies. How else can we assist your software development roadmap?";

    return res.json({
      reply: text,
      isFallback: false,
    });
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    return res.status(500).json({
      error: "Failed to generate AI response",
      details: error?.message || "Unknown error",
      fallbackReply:
        "Thank you for contacting Pixevo Technologies. We received your message. You can also chat directly with our team on WhatsApp at +92 314 5138009 or email us at pixevotechnologies@gmail.com.",
    });
  }
});

async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req: Request, res: Response) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Pixevo server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
