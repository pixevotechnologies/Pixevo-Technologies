import React, { useState, useEffect, useRef } from 'react';
import Markdown from 'react-markdown';
import {
  MessageSquare,
  X,
  Send,
  Sparkles,
  Bot,
  User,
  RotateCcw,
  Copy,
  Check,
  Calculator,
  ArrowRight,
  ExternalLink,
  MessageCircle,
  Minimize2,
  ChevronDown,
} from 'lucide-react';
import { PixevoMark } from './PixevoLogo';
import { COMPANY_INFO } from '../data/siteData';
import { PageId } from '../types';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
  isFallback?: boolean;
}

interface PixevoChatbotProps {
  onNavigate: (page: PageId) => void;
  onOpenEstimator: () => void;
  onInquireService?: (serviceName: string) => void;
}

const STARTER_PROMPTS = [
  'What services does Pixevo Technologies provide?',
  'How do you handle custom SaaS MVP development?',
  'Can you build mobile apps in Flutter / React Native?',
  'How do we start a project & get a proposal?',
];

export const PixevoChatbot: React.FC<PixevoChatbotProps> = ({
  onNavigate,
  onOpenEstimator,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isMinimized, setIsMinimized] = useState<boolean>(false);
  const [input, setInput] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [showTooltip, setShowTooltip] = useState<boolean>(true);

  const [messages, setMessages] = useState<Message[]>(() => {
    return [
      {
        id: 'welcome-1',
        role: 'assistant',
        content: `👋 **Welcome to Pixevo Technologies!**\n\nI am **Pixevo AI**, your dedicated technical solutions consultant. I can help you scope software architectures, explore our engineering services, estimate project timelines, and guide you through our development lifecycle.\n\nHow can we help power your digital vision today?`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      },
    ];
  });

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto scroll to bottom of messages
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen && !isMinimized) {
      scrollToBottom();
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [messages, isOpen, isMinimized]);

  // Hide initial teaser tooltip after 10 seconds or on open
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(false);
    }, 12000);
    return () => clearTimeout(timer);
  }, []);

  const handleOpenChat = () => {
    setIsOpen(true);
    setIsMinimized(false);
    setShowTooltip(false);
  };

  const handleSendMessage = async (textToSend?: string) => {
    const messageContent = (textToSend || input).trim();
    if (!messageContent || isLoading) return;

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: messageContent,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);

    try {
      // Send chat history to backend proxy
      const historyPayload = newMessages.map((m) => ({
        role: m.role,
        content: m.content,
      }));

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: historyPayload.slice(0, -1),
          userMessage: messageContent,
        }),
      });

      if (!res.ok) {
        throw new Error(`Server returned ${res.status}`);
      }

      const data = await res.json();
      const assistantMessage: Message = {
        id: `assistant-${Date.now()}`,
        role: 'assistant',
        content: data.reply || data.fallbackReply || 'Thank you for reaching out. How else can we assist your software development roadmap?',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isFallback: data.isFallback,
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (err: any) {
      console.warn('AI Chat request, using intelligent local engine:', err);
      const lower = messageContent.toLowerCase();
      let smartReply = '';

      if (lower.includes('price') || lower.includes('cost') || lower.includes('budget') || lower.includes('how much') || lower.includes('quote')) {
        smartReply = `### 💰 Project Scoping & Pricing\n\n- **Rapid MVP / Prototype** (2–4 weeks): **$1,500 – $3,500**\n- **Custom Web & Mobile App** (4–8 weeks): **$4,000 – $9,500**\n- **Enterprise SaaS & AI Systems** (8–16 weeks): **$10,000+**\n\n👉 *Click the **Interactive Estimator** button below for an instant custom calculation!*`;
      } else if (lower.includes('service') || lower.includes('offer') || lower.includes('what do you do')) {
        smartReply = `### 🛠️ Pixevo Technologies Services\n\n1. **Custom Software & SaaS** (Next.js, Node.js, Python, microservices)\n2. **Mobile Development** (Flutter & React Native cross-platform apps)\n3. **AI & Automation** (Custom agents, LLM pipelines, RAG document search)\n4. **Cloud & DevOps** (AWS, GCP, Docker, Kubernetes, CI/CD pipelines)\n5. **UI/UX Design** (Figma prototypes, design systems)`;
      } else if (lower.includes('mobile') || lower.includes('flutter') || lower.includes('react native') || lower.includes('app')) {
        smartReply = `### 📱 Mobile App Engineering\n\nWe build high-performance mobile apps with **Flutter** and **React Native** for both iOS and Android from a single codebase, saving you up to 40% in cost with native 60fps performance and App Store submission support.`;
      } else if (lower.includes('contact') || lower.includes('email') || lower.includes('whatsapp') || lower.includes('phone')) {
        smartReply = `### 📞 Reach Our Team Directly\n\n- **WhatsApp**: [+92 314 5138009](${COMPANY_INFO.whatsappUrl})\n- **Email**: ${COMPANY_INFO.email}\n- **Hours**: 9:00 AM – 7:00 PM PKT / 7:00 AM – 5:00 PM KSA (Sat–Thu)`;
      } else {
        smartReply = `### 👋 Pixevo Technologies Assistant\n\nThank you for reaching out! We build modern full-stack web platforms, mobile apps, and AI solutions.\n\n- 📊 **Calculate Cost**: Click **Interactive Estimator** below\n- 💬 **Live Chat**: Connect with our architects on [WhatsApp (+92 314 5138009)](${COMPANY_INFO.whatsappUrl}) or via email at ${COMPANY_INFO.email}`;
      }

      const fallbackMessage: Message = {
        id: `assistant-smart-${Date.now()}`,
        role: 'assistant',
        content: smartReply,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isFallback: false,
      };
      setMessages((prev) => [...prev, fallbackMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleCopyMessage = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleResetChat = () => {
    setMessages([
      {
        id: `welcome-${Date.now()}`,
        role: 'assistant',
        content: `👋 Chat reset. I am ready to help you explore architectures, technologies, and software solutions for your business. What are you building?`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      },
    ]);
  };

  return (
    <>
      {/* Floating Launcher Trigger */}
      {!isOpen && (
        <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 select-none">
          {showTooltip && (
            <div
              onClick={handleOpenChat}
              className="group cursor-pointer max-w-xs flex items-center gap-3 bg-slate-900/95 border border-blue-500/30 text-white px-4 py-2.5 rounded-2xl shadow-xl shadow-black/50 backdrop-blur-md transition-all hover:border-blue-400 hover:scale-[1.02] animate-bounce duration-1000"
            >
              <div className="w-2 h-2 rounded-full bg-blue-400 animate-ping" />
              <div className="text-xs">
                <span className="font-semibold block text-slate-100">Need technical consultation?</span>
                <span className="text-slate-400 text-[11px]">Chat with Pixevo AI Assistant</span>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setShowTooltip(false);
                }}
                className="text-slate-500 hover:text-slate-300 p-1"
                aria-label="Dismiss tooltip"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          )}

          <button
            id="pixevo-ai-chat-launcher"
            onClick={handleOpenChat}
            className="group relative flex items-center gap-3 px-5 py-3.5 rounded-full bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 text-white font-semibold text-sm shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer border border-blue-300/30"
            aria-label="Open Pixevo AI Assistant Chatbot"
          >
            <div className="relative">
              <PixevoMark size={22} variant="white-badge" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 border-2 border-slate-900 rounded-full" />
            </div>
            <span className="tracking-tight font-['Outfit']">Pixevo AI</span>
            <Sparkles className="w-4 h-4 text-cyan-200 group-hover:rotate-12 transition-transform" />
          </button>
        </div>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div
          id="pixevo-ai-chat-panel"
          className={`fixed z-50 transition-all duration-200 ease-out flex flex-col bg-[#070D1D]/95 backdrop-blur-xl border border-slate-800 shadow-2xl shadow-black/80 rounded-2xl overflow-hidden ${
            isMinimized
              ? 'bottom-6 right-6 w-80 h-14'
              : 'bottom-4 right-4 sm:bottom-6 sm:right-6 w-[calc(100vw-32px)] sm:w-[410px] h-[580px] max-h-[85vh]'
          }`}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-slate-900/80 border-b border-slate-800/80 shrink-0">
            <div className="flex items-center gap-3 min-w-0">
              <div className="relative shrink-0">
                <PixevoMark size={28} />
                <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-400 border-2 border-slate-900 rounded-full animate-pulse" />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-1.5 font-['Outfit']">
                  <span className="text-sm font-bold text-white tracking-tight uppercase">
                    Pixevo AI
                  </span>
                  <span className="text-[10px] px-1.5 py-0.2 rounded bg-blue-500/20 text-blue-300 font-mono font-semibold uppercase">
                    Architect
                  </span>
                </div>
                <span className="text-[10px] text-slate-400 block truncate">
                  AI Solutions & Architecture Consultant
                </span>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={handleResetChat}
                title="Restart conversation"
                className="p-1.5 text-slate-400 hover:text-slate-200 hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
                aria-label="Restart conversation"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => setIsMinimized(!isMinimized)}
                title={isMinimized ? 'Expand' : 'Minimize'}
                className="p-1.5 text-slate-400 hover:text-slate-200 hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
                aria-label={isMinimized ? 'Expand' : 'Minimize'}
              >
                {isMinimized ? (
                  <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                ) : (
                  <Minimize2 className="w-3.5 h-3.5" />
                )}
              </button>

              <button
                onClick={() => setIsOpen(false)}
                title="Close chat"
                className="p-1.5 text-slate-400 hover:text-rose-400 hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
                aria-label="Close chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Body (Messages & Quick Action Chips) */}
          {!isMinimized && (
            <>
              <div className="flex-1 overflow-y-auto p-4 space-y-4 text-xs scrollbar-thin scrollbar-thumb-slate-700">
                {messages.map((msg) => {
                  const isUser = msg.role === 'user';
                  return (
                    <div
                      key={msg.id}
                      className={`flex gap-2.5 ${isUser ? 'justify-end' : 'justify-start'}`}
                    >
                      {!isUser && (
                        <div className="w-6 h-6 rounded-lg bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0 mt-0.5">
                          <Bot className="w-3.5 h-3.5" />
                        </div>
                      )}

                      <div
                        className={`max-w-[84%] rounded-2xl px-3.5 py-2.5 relative group ${
                          isUser
                            ? 'bg-blue-600 text-white rounded-br-xs shadow-md shadow-blue-600/20'
                            : 'bg-slate-900/90 text-slate-200 border border-slate-800 rounded-bl-xs shadow-sm'
                        }`}
                      >
                        <div className="prose prose-invert prose-xs max-w-none break-words leading-relaxed space-y-2">
                          <Markdown
                            components={{
                              p: ({ children }) => <p className="mb-1.5 last:mb-0">{children}</p>,
                              ul: ({ children }) => <ul className="list-disc pl-4 space-y-1 my-1">{children}</ul>,
                              ol: ({ children }) => <ol className="list-decimal pl-4 space-y-1 my-1">{children}</ol>,
                              li: ({ children }) => <li className="text-slate-300">{children}</li>,
                              strong: ({ children }) => <strong className="font-semibold text-white">{children}</strong>,
                              a: ({ href, children }) => (
                                <a
                                  href={href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-cyan-400 hover:text-cyan-300 underline font-medium inline-flex items-center gap-1"
                                >
                                  {children}
                                </a>
                              ),
                              code: ({ children }) => (
                                <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-blue-300 font-mono text-[11px]">
                                  {children}
                                </code>
                              ),
                            }}
                          >
                            {msg.content}
                          </Markdown>
                        </div>

                        <div
                          className={`flex items-center justify-between gap-2 mt-1.5 pt-1 border-t ${
                            isUser ? 'border-blue-500/30 text-blue-200' : 'border-slate-800/80 text-slate-500'
                          } text-[10px]`}
                        >
                          <span>{msg.timestamp}</span>
                          {!isUser && (
                            <button
                              onClick={() => handleCopyMessage(msg.id, msg.content)}
                              className="opacity-0 group-hover:opacity-100 transition-opacity hover:text-slate-300 p-0.5"
                              title="Copy message"
                            >
                              {copiedId === msg.id ? (
                                <Check className="w-3 h-3 text-emerald-400" />
                              ) : (
                                <Copy className="w-3 h-3" />
                              )}
                            </button>
                          )}
                        </div>
                      </div>

                      {isUser && (
                        <div className="w-6 h-6 rounded-lg bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-blue-300 shrink-0 mt-0.5">
                          <User className="w-3.5 h-3.5" />
                        </div>
                      )}
                    </div>
                  );
                })}

                {/* Loading indicator */}
                {isLoading && (
                  <div className="flex gap-2.5 justify-start items-center">
                    <div className="w-6 h-6 rounded-lg bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
                      <Bot className="w-3.5 h-3.5" />
                    </div>
                    <div className="bg-slate-900 border border-slate-800 rounded-2xl rounded-bl-xs px-4 py-3 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-bounce" style={{ animationDelay: '0ms' }} />
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce" style={{ animationDelay: '150ms' }} />
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Action shortcuts */}
              <div className="px-3 pt-2 pb-1 bg-slate-950/60 border-t border-slate-800/80 shrink-0">
                {/* Starter suggestions if few messages */}
                {messages.length <= 2 && (
                  <div className="mb-2 space-y-1">
                    <span className="text-[10px] font-mono uppercase text-slate-500 tracking-wider block">
                      Suggested Inquiries
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {STARTER_PROMPTS.map((prompt, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleSendMessage(prompt)}
                          disabled={isLoading}
                          className="text-[11px] text-left px-2.5 py-1 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-all cursor-pointer truncate max-w-full"
                        >
                          {prompt}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Direct quick action buttons */}
                <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none text-[11px]">
                  <button
                    onClick={() => {
                      onOpenEstimator();
                      setIsOpen(false);
                    }}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-blue-500/10 hover:bg-blue-500/20 text-blue-300 border border-blue-500/30 whitespace-nowrap transition-colors cursor-pointer"
                  >
                    <Calculator className="w-3 h-3" />
                    <span>Project Estimator</span>
                  </button>

                  <a
                    href={COMPANY_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 whitespace-nowrap transition-colors cursor-pointer"
                  >
                    <MessageCircle className="w-3 h-3" />
                    <span>WhatsApp</span>
                  </a>

                  <button
                    onClick={() => {
                      onNavigate('contact');
                      setIsOpen(false);
                    }}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 whitespace-nowrap transition-colors cursor-pointer"
                  >
                    <span>Contact Form</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>

              {/* Input Form */}
              <div className="p-3 bg-slate-950 border-t border-slate-800 shrink-0">
                <div className="flex items-center gap-2 bg-slate-900 border border-slate-800 focus-within:border-blue-500/70 rounded-xl px-3 py-2 transition-colors">
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    disabled={isLoading}
                    placeholder="Ask about tech stacks, pricing, architectures..."
                    className="flex-1 bg-transparent text-xs text-white placeholder:text-slate-500 focus:outline-none"
                  />
                  <button
                    onClick={() => handleSendMessage()}
                    disabled={!input.trim() || isLoading}
                    className={`p-1.5 rounded-lg transition-all cursor-pointer ${
                      input.trim() && !isLoading
                        ? 'bg-blue-600 text-white hover:bg-blue-500 shadow-md shadow-blue-600/30'
                        : 'text-slate-600 bg-slate-800/40 cursor-not-allowed'
                    }`}
                    aria-label="Send message"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
                <div className="flex items-center justify-between text-[9px] font-mono text-slate-500 mt-1 px-1">
                  <span>Powered by Gemini AI</span>
                  <span>Pixevo Technologies Architecture Core</span>
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
};
