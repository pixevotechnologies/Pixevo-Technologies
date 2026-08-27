import React from 'react';
import { PageId } from '../types';
import { COMPANY_INFO } from '../data/siteData';
import { PageHeader } from '../components/PageHeader';
import { ShieldCheck, Lock, Eye, FileText, CheckCircle2 } from 'lucide-react';

interface PrivacyPolicyPageProps {
  onNavigate: (page: PageId) => void;
}

export const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({
  onNavigate,
}) => {
  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      <PageHeader
        category="Legal & Compliance"
        title="Privacy Policy"
        description="Effective Date: January 1, 2026. How Pixevo Technologies collects, uses, protects, and handles your data across our digital platforms and client engagements."
        currentPageName="Privacy Policy"
        onNavigateHome={() => onNavigate('home')}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-slate-300 text-sm sm:text-base leading-relaxed">
        {/* Intro */}
        <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 space-y-3">
          <div className="flex items-center gap-2 text-blue-400 font-mono text-xs uppercase font-bold">
            <ShieldCheck className="w-4 h-4" />
            <span>Commitment to Data Privacy</span>
          </div>
          <p className="text-slate-400 text-sm">
            Pixevo Technologies ("we", "us", or "our") respects your privacy and is committed to protecting the personal and proprietary information you provide when using our website ({COMPANY_INFO.website}) or engaging our custom software engineering services.
          </p>
        </div>

        {/* Section 1 */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold font-['Outfit'] text-white">
            1. Information We Collect
          </h2>
          <p>We may collect information directly from you when you submit a project inquiry, request a discovery consultation, apply for a job position, or subscribe to our technical newsletter:</p>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-400 text-sm">
            <li><strong className="text-slate-200">Contact Data:</strong> Full name, company name, corporate email address, phone number, and physical region.</li>
            <li><strong className="text-slate-200">Project Scoping Data:</strong> Technical specifications, functional requirements, architectural documents, estimated budgets, and project timelines.</li>
            <li><strong className="text-slate-200">Career Applicant Data:</strong> Resumes, portfolios, GitHub/LinkedIn links, and professional experience notes.</li>
            <li><strong className="text-slate-200">Technical Analytics Data:</strong> IP address, browser type, operating system, and anonymous interaction metrics collected through standard privacy-preserving telemetry.</li>
          </ul>
        </section>

        {/* Section 2 */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold font-['Outfit'] text-white">
            2. How We Use Your Information
          </h2>
          <p>We use the collected information strictly for legitimate commercial and engineering purposes, including:</p>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-400 text-sm">
            <li>Evaluating technical feasibility and preparing project proposals and architectural estimates.</li>
            <li>Communicating directly regarding your project inquiries or scheduling technical discovery meetings.</li>
            <li>Processing employment applications and verifying professional qualifications.</li>
            <li>Maintaining the security, performance, and operational integrity of our web infrastructure.</li>
          </ul>
          <p className="text-xs text-slate-400 italic">
            Note: Pixevo Technologies does NOT sell, rent, or trade your personal data or project specifications to third-party advertising networks.
          </p>
        </section>

        {/* Section 3 */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold font-['Outfit'] text-white">
            3. Non-Disclosure & Confidentiality (NDA)
          </h2>
          <p>
            We treat all client business concepts, workflows, codebases, and databases as strictly confidential. Prior to reviewing proprietary software systems or trade secrets, we execute a mutual Non-Disclosure Agreement (NDA) with your authorized representative.
          </p>
        </section>

        {/* Section 4 */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold font-['Outfit'] text-white">
            4. Data Retention & Security
          </h2>
          <p>
            We employ industry-standard encryption (TLS 1.3 in transit, AES-256 at rest) and strict role-based access controls to safeguard data against unauthorized access, loss, or alteration. We retain project inquiry records only as long as necessary to fulfill commercial and legal obligations.
          </p>
        </section>

        {/* Section 5 */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold font-['Outfit'] text-white">
            5. Your Data Rights
          </h2>
          <p>
            Depending on your jurisdiction (e.g., GDPR, CCPA/CPRA), you have the right to request access to, correction of, or deletion of your personal information stored in our systems. To exercise these rights, please contact our data team at <a href={`mailto:${COMPANY_INFO.email}`} className="text-blue-400 hover:underline">{COMPANY_INFO.email}</a>.
          </p>
        </section>

        {/* Section 6 Contact */}
        <section className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
          <h3 className="text-base font-bold font-['Outfit'] text-white">
            Questions Regarding Our Privacy Practices?
          </h3>
          <p className="text-xs text-slate-400">
            For inquiries regarding this Privacy Policy, contact Pixevo Technologies via email at{' '}
            <a href={`mailto:${COMPANY_INFO.email}`} className="text-blue-400 font-semibold">{COMPANY_INFO.email}</a> or phone at{' '}
            <span className="text-slate-300 font-semibold">{COMPANY_INFO.phone}</span>.
          </p>
        </section>
      </div>
    </div>
  );
};
