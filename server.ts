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
      // High-intelligence offline/free knowledge engine when GEMINI_API_KEY is not supplied
      const lower = userMessage.toLowerCase();
      let fallbackText = "";

      if (lower.includes("price") || lower.includes("cost") || lower.includes("budget") || lower.includes("rate") || lower.includes("how much") || lower.includes("quote")) {
        fallbackText = `### 💰 Project Scoping & Investment Framework

At **Pixevo Technologies**, project budgets are tailored to your architecture requirements, technical complexity, and target velocity:

- **Rapid MVP & Clickable Prototype** (2–4 weeks): Starts from **$1,500 – $3,500** for high-priority product validation.
- **Custom Web / Mobile Application** (4–8 weeks): Typically **$4,000 – $9,500** including full-stack APIs, database, and admin portals.
- **Enterprise SaaS & AI Systems** (8–16 weeks): Custom milestones starting at **$10,000+** for high-concurrency microservices, LLM vectorization, and DevOps pipelines.

💡 *Use our interactive **Project Estimator** on this website for an instant breakdown, or message us on WhatsApp for a dedicated formal proposal!*`;
      } else if (lower.includes("service") || lower.includes("what do you do") || lower.includes("offer") || lower.includes("capabilities")) {
        fallbackText = `### 🛠️ Core Engineering Services at Pixevo Technologies

We deliver end-to-end software, mobile, and AI solutions:

1. **Custom Software & SaaS Engineering**: Scalable multi-tenant platforms, clean REST/GraphQL APIs, microservices.
2. **Web Applications**: High-performance React, Next.js, Node.js, TypeScript, PostgreSQL.
3. **Cross-Platform Mobile Apps**: Flutter & React Native applications for iOS and Android with native performance.
4. **AI & Intelligent Automation**: Custom LLM agents, RAG document search, computer vision, automated workflow pipelines.
5. **UI/UX & Product Design**: Interactive Figma prototypes, design systems, conversion-driven user interfaces.
6. **Cloud & DevOps**: AWS, GCP, Docker, Kubernetes, CI/CD automated deployments, and 99.9% uptime architectures.`;
      } else if (lower.includes("mobile") || lower.includes("flutter") || lower.includes("react native") || lower.includes("ios") || lower.includes("android") || lower.includes("app")) {
        fallbackText = `### 📱 Mobile App Engineering

Yes! We engineer cross-platform and native mobile apps using **Flutter** and **React Native**:

- **Unified Single Codebase**: Save up to 40% in engineering costs while delivering 60fps native performance on both iOS & Android.
- **Key Capabilities**: Offline database sync, secure biometric authentication, push notifications, Stripe/Apple Pay integrations, and real-time WebSockets.
- **Store Launch Guarantee**: Complete submission handling for the Apple App Store and Google Play Store.`;
      } else if (lower.includes("ai") || lower.includes("agent") || lower.includes("llm") || lower.includes("rag") || lower.includes("machine learning")) {
        fallbackText = `### 🧠 AI & Intelligent Solutions

We integrate intelligent capabilities into modern business systems:

- **Custom AI Agents**: Automated customer support bots, data extractors, and workflow co-pilots.
- **RAG & Vector Search**: Private document search over internal PDFs, knowledge bases, and corporate databases using embeddings.
- **Computer Vision & OCR**: Automated document inspection, license plate recognition, and invoice extraction.
- **Smart Analytics**: Predictive demand forecasting and anomaly detection algorithms.`;
      } else if (lower.includes("process") || lower.includes("how it works") || lower.includes("step") || lower.includes("timeline") || lower.includes("methodology")) {
        fallbackText = `### 🚀 Our 5-Stage Agile Development Process

1. **Discovery & Architecture Scoping** (Week 1): Requirements workshop, tech stack selection, milestone roadmapping.
2. **UI/UX & Prototyping** (Weeks 1–2): Figma wireframes, design system, interactive click-through demo.
3. **Sprint Development** (Weeks 3–8): 2-week agile sprints, continuous CI/CD preview builds, transparent progress.
4. **Rigorous QA & Security Testing**: Unit, integration, automated stress testing, and vulnerability scans.
5. **Production Deployment & Post-Launch Support**: Zero-downtime cloud migration, analytics setup, and SLA maintenance.`;
      } else if (lower.includes("contact") || lower.includes("email") || lower.includes("whatsapp") || lower.includes("phone") || lower.includes("reach") || lower.includes("location") || lower.includes("hours")) {
        fallbackText = `### 📞 Direct Contact & Working Hours

- **WhatsApp / Phone**: [+92 314 5138009](https://wa.me/923145138009) *(Instant replies)*
- **Email**: [pixevotechnologies@gmail.com](mailto:pixevotechnologies@gmail.com)
- **GitHub**: [github.com/pixevotechnologies](https://github.com/pixevotechnologies/Pixevo-Technologies)
- **LinkedIn**: [Pixevo Technologies](https://www.linkedin.com/company/pixevo-technologies/)
- **Working Hours**: 9:00 AM – 7:00 PM (PKT) / 7:00 AM – 5:00 PM (KSA), Saturday through Thursday.`;
      } else if (lower.includes("tech") || lower.includes("stack") || lower.includes("language") || lower.includes("react") || lower.includes("python") || lower.includes("node")) {
        fallbackText = `### ⚡ Technology Stack & Frameworks

- **Frontend**: React 19, Next.js 15, TypeScript, Tailwind CSS, Redux/Zustand.
- **Mobile**: Flutter (Dart), React Native, Swift (iOS), Kotlin (Android).
- **Backend & APIs**: Node.js, Express, Python (FastAPI/Django), Go, REST & GraphQL.
- **Databases**: PostgreSQL, MySQL, Redis, MongoDB, Supabase, Firebase.
- **Cloud & DevOps**: AWS (ECS, Lambda, S3), GCP, Docker, Kubernetes, GitHub Actions CI/CD.`;
      } else {
        fallbackText = `### 👋 Pixevo Technologies AI Consultant

Thank you for your message! We build world-class digital products, custom web & mobile apps, enterprise SaaS, and AI automation for global startups and enterprises.

**Here are quick ways we can assist right now:**
- 💡 **Scope a Project**: Describe your vision, target features, or tech stack.
- 📊 **Instant Pricing**: Click the **Project Estimator** button to calculate a custom timeline and cost.
- 💬 **Live Architect Chat**: Message our engineering leads directly on **WhatsApp at +92 314 5138009** or email **pixevotechnologies@gmail.com**.`;
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

// IN-MEMORY INQUIRIES STORE (Preserved during server uptime)
interface LeadInquiry {
  id: string;
  createdAt: string;
  type: string;
  fullName: string;
  email: string;
  company?: string;
  phone?: string;
  serviceRequired?: string;
  budget?: string;
  timeline?: string;
  projectDetails?: string;
  callDate?: string;
  callTime?: string;
  jobTitle?: string;
  portfolioUrl?: string;
  coverNote?: string;
  emailDispatched: boolean;
  status: "new" | "reviewed" | "contacted";
}

const inquiriesLog: LeadInquiry[] = [];

// Helper: send email via nodemailer if SMTP credentials configured
async function attemptSmtpEmail(inquiry: LeadInquiry, receiverEmail: string): Promise<boolean> {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const port = parseInt(process.env.SMTP_PORT || "587", 10);
  const secure = process.env.SMTP_SECURE === "true";
  const fromEmail = process.env.SMTP_FROM_EMAIL || user || "no-reply@pixevotechnologies.com";

  if (!host || !user || !pass) {
    return false;
  }

  try {
    const nodemailer = await import("nodemailer");
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: { user, pass },
    });

    const isCareer = inquiry.type === "career";
    const subject = isCareer
      ? `[New Job Application] ${inquiry.fullName} - ${inquiry.jobTitle || "Engineering Role"}`
      : `[New Project Lead] ${inquiry.fullName} - ${inquiry.serviceRequired || "Project Inquiry"} (${inquiry.budget || "Needs Scoping"})`;

    const htmlContent = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background-color: #0b0f19; color: #f1f5f9; border-radius: 12px; border: 1px solid #1e293b;">
        <div style="border-bottom: 1px solid #1e293b; padding-bottom: 16px; margin-bottom: 20px;">
          <h2 style="color: #38bdf8; margin: 0 0 6px 0; font-size: 22px;">Pixevo Technologies • New Submission</h2>
          <p style="color: #94a3b8; font-size: 13px; margin: 0;">Inquiry Reference: <strong>${inquiry.id}</strong> • Received: ${new Date().toLocaleString()}</p>
        </div>

        <div style="background-color: #111827; padding: 18px; border-radius: 8px; margin-bottom: 20px; border: 1px solid #1f2937;">
          <h3 style="color: #f8fafc; margin: 0 0 12px 0; font-size: 16px; border-bottom: 1px solid #374151; padding-bottom: 8px;">Client Information</h3>
          <p style="margin: 6px 0; font-size: 14px;"><strong style="color: #94a3b8;">Full Name:</strong> ${inquiry.fullName}</p>
          <p style="margin: 6px 0; font-size: 14px;"><strong style="color: #94a3b8;">Email:</strong> <a href="mailto:${inquiry.email}" style="color: #38bdf8; text-decoration: none;">${inquiry.email}</a></p>
          <p style="margin: 6px 0; font-size: 14px;"><strong style="color: #94a3b8;">Company:</strong> ${inquiry.company || "N/A"}</p>
          <p style="margin: 6px 0; font-size: 14px;"><strong style="color: #94a3b8;">Phone / WhatsApp:</strong> ${inquiry.phone ? `<a href="https://wa.me/${inquiry.phone.replace(/[^0-9]/g, '')}" style="color: #34d399; text-decoration: none;">${inquiry.phone}</a>` : "N/A"}</p>
        </div>

        <div style="background-color: #111827; padding: 18px; border-radius: 8px; margin-bottom: 20px; border: 1px solid #1f2937;">
          <h3 style="color: #f8fafc; margin: 0 0 12px 0; font-size: 16px; border-bottom: 1px solid #374151; padding-bottom: 8px;">${isCareer ? "Application Details" : "Project Scope & Requirements"}</h3>
          ${!isCareer ? `
            <p style="margin: 6px 0; font-size: 14px;"><strong style="color: #94a3b8;">Service Required:</strong> ${inquiry.serviceRequired || "N/A"}</p>
            <p style="margin: 6px 0; font-size: 14px;"><strong style="color: #94a3b8;">Budget Range:</strong> <span style="color: #34d399; font-weight: bold;">${inquiry.budget || "N/A"}</span></p>
            <p style="margin: 6px 0; font-size: 14px;"><strong style="color: #94a3b8;">Target Timeline:</strong> ${inquiry.timeline || "N/A"}</p>
            ${inquiry.callDate ? `<p style="margin: 6px 0; font-size: 14px;"><strong style="color: #94a3b8;">Requested Call Time:</strong> ${inquiry.callDate} at ${inquiry.callTime || "UTC"}</p>` : ""}
            <div style="margin-top: 12px; padding-top: 10px; border-top: 1px solid #374151;">
              <strong style="color: #94a3b8; display: block; margin-bottom: 6px;">Project Scope & Specifications:</strong>
              <div style="white-space: pre-wrap; font-size: 13px; line-height: 1.6; color: #e2e8f0; background: #0b0f19; padding: 12px; border-radius: 6px;">${inquiry.projectDetails || "No additional text provided."}</div>
            </div>
          ` : `
            <p style="margin: 6px 0; font-size: 14px;"><strong style="color: #94a3b8;">Applied Position:</strong> ${inquiry.jobTitle || "N/A"}</p>
            <p style="margin: 6px 0; font-size: 14px;"><strong style="color: #94a3b8;">Portfolio / GitHub:</strong> ${inquiry.portfolioUrl ? `<a href="${inquiry.portfolioUrl}" style="color: #38bdf8;">${inquiry.portfolioUrl}</a>` : "N/A"}</p>
            <div style="margin-top: 12px; padding-top: 10px; border-top: 1px solid #374151;">
              <strong style="color: #94a3b8; display: block; margin-bottom: 6px;">Cover Note:</strong>
              <div style="white-space: pre-wrap; font-size: 13px; line-height: 1.6; color: #e2e8f0; background: #0b0f19; padding: 12px; border-radius: 6px;">${inquiry.coverNote || "N/A"}</div>
            </div>
          `}
        </div>

        <div style="text-align: center; font-size: 12px; color: #64748b; padding-top: 12px; border-top: 1px solid #1e293b;">
          Pixevo Technologies Auto-Dispatcher • Delivered to ${receiverEmail}
        </div>
      </div>
    `;

    await transporter.sendMail({
      from: `"Pixevo Web Lead" <${fromEmail}>`,
      to: receiverEmail,
      replyTo: inquiry.email,
      subject,
      html: htmlContent,
    });

    console.log(`[Email Dispatch] Successfully sent inquiry ${inquiry.id} to ${receiverEmail}`);
    return true;
  } catch (smtpErr) {
    console.warn("[Email Dispatch] SMTP attempt failed or not configured:", smtpErr);
    return false;
  }
}

// CONTACT & LEAD SUBMISSION ENDPOINT
app.post("/api/contact", async (req: Request, res: Response) => {
  try {
    const {
      type = "inquiry",
      fullName,
      email,
      company = "",
      phone = "",
      serviceRequired = "Custom Software Engineering",
      budget = "Undetermined",
      timeline = "Flexible",
      projectDetails = "",
      callDate = "",
      callTime = "",
      jobTitle = "",
      portfolioUrl = "",
      coverNote = "",
    } = req.body;

    if (!fullName || !email) {
      return res.status(400).json({ error: "fullName and email are required fields" });
    }

    const recipientEmail = process.env.CONTACT_RECEIVER_EMAIL || "pixevotechnologies@gmail.com";
    const inquiryId = `PIX-${Math.floor(100000 + Math.random() * 900000)}`;

    const newInquiry: LeadInquiry = {
      id: inquiryId,
      createdAt: new Date().toISOString(),
      type,
      fullName: String(fullName).trim(),
      email: String(email).trim(),
      company: String(company).trim(),
      phone: String(phone).trim(),
      serviceRequired: String(serviceRequired).trim(),
      budget: String(budget).trim(),
      timeline: String(timeline).trim(),
      projectDetails: String(projectDetails).trim(),
      callDate: String(callDate).trim(),
      callTime: String(callTime).trim(),
      jobTitle: String(jobTitle).trim(),
      portfolioUrl: String(portfolioUrl).trim(),
      coverNote: String(coverNote).trim(),
      emailDispatched: false,
      status: "new",
    };

    // Attempt direct SMTP email dispatch
    const emailSent = await attemptSmtpEmail(newInquiry, recipientEmail);
    newInquiry.emailDispatched = emailSent;

    // Log to memory array
    inquiriesLog.unshift(newInquiry);

    console.log(`[Pixevo Lead] Received inquiry ${inquiryId} from ${fullName} (${email}) for service "${serviceRequired}". Email dispatched: ${emailSent}`);

    return res.status(200).json({
      success: true,
      inquiryId,
      emailSent,
      recipient: recipientEmail,
      message: `Inquiry successfully recorded and queued for ${recipientEmail}.`,
      data: {
        id: inquiryId,
        receivedAt: newInquiry.createdAt,
      },
    });
  } catch (error: any) {
    console.error("Error processing contact submission:", error);
    return res.status(500).json({
      error: "Internal server error processing inquiry",
      details: error?.message || "Unknown error",
    });
  }
});

// RETRIEVE INQUIRIES (Admin / Lead Viewer Endpoint)
app.get("/api/inquiries", (_req: Request, res: Response) => {
  res.json({
    total: inquiriesLog.length,
    recipient: process.env.CONTACT_RECEIVER_EMAIL || "pixevotechnologies@gmail.com",
    inquiries: inquiriesLog,
  });
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
