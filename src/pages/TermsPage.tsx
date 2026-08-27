import React from 'react';
import { PageId } from '../types';
import { COMPANY_INFO } from '../data/siteData';
import { PageHeader } from '../components/PageHeader';
import { FileText, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface TermsPageProps {
  onNavigate: (page: PageId) => void;
}

export const TermsPage: React.FC<TermsPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      <PageHeader
        category="Legal & Governance"
        title="Terms & Conditions"
        description="Effective Date: January 1, 2026. General terms governing website usage, software development agreements, intellectual property ownership, and commercial engagements."
        currentPageName="Terms & Conditions"
        onNavigateHome={() => onNavigate('home')}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-slate-300 text-sm sm:text-base leading-relaxed">
        {/* Intro */}
        <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 space-y-3">
          <div className="flex items-center gap-2 text-blue-400 font-mono text-xs uppercase font-bold">
            <FileText className="w-4 h-4" />
            <span>Master Service Terms</span>
          </div>
          <p className="text-slate-400 text-sm">
            These Terms & Conditions ("Terms") govern your use of the website operated by Pixevo Technologies ("Company", "we", "our") and define the standard commercial framework applicable to our custom software engineering, cloud integration, UI/UX design, and consulting engagements.
          </p>
        </div>

        {/* Section 1 */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold font-['Outfit'] text-white">
            1. Scope of Services & Statements of Work (SOW)
          </h2>
          <p>
            Specific project deliverables, milestones, tech stacks, sprint cadences, and budget commitments are formally defined in mutually executed Statements of Work (SOW) or Master Service Agreements (MSA). In the event of any conflict between these general Terms and an active SOW, the specific SOW shall prevail.
          </p>
        </section>

        {/* Section 2 */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold font-['Outfit'] text-white">
            2. Intellectual Property (IP) Ownership
          </h2>
          <div className="space-y-2 text-slate-400 text-sm">
            <p>
              <strong className="text-slate-200">Client Work Product:</strong> Upon full payment of all agreed project fees and milestone invoices, 100% of the custom source code, design assets, database schemas, and documentation created specifically for the Client shall be assigned exclusively to the Client.
            </p>
            <p>
              <strong className="text-slate-200">Open-Source & Pre-existing Frameworks:</strong> Open-source libraries (e.g. React, Node.js, standard npm dependencies) remain subject to their respective open-source licenses (such as MIT, Apache 2.0).
            </p>
          </div>
        </section>

        {/* Section 3 */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold font-['Outfit'] text-white">
            3. Client Responsibilities & Approvals
          </h2>
          <p>
            Timely delivery relies on mutual collaboration. The Client agrees to provide necessary access credentials, business specifications, API tokens, and sprint milestone approvals in a reasonable timeframe to avoid schedule delays.
          </p>
        </section>

        {/* Section 4 */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold font-['Outfit'] text-white">
            4. Payment Terms & Invoicing
          </h2>
          <p>
            Unless otherwise specified in an SOW:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-400 text-sm">
            <li>Fixed-price projects are invoiced based on agreed deliverable milestones.</li>
            <li>Dedicated engineering teams and staff augmentation are invoiced on a bi-weekly or monthly sprint basis.</li>
            <li>Invoices are due within 14 calendar days of issuance via bank wire, ACH, or major international credit/debit facilities.</li>
          </ul>
        </section>

        {/* Section 5 */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold font-['Outfit'] text-white">
            5. Limitation of Liability
          </h2>
          <p>
            To the maximum extent permitted by applicable law, neither party shall be liable for indirect, incidental, consequential, or punitive damages arising from the use of custom software solutions. The total aggregate liability of Pixevo Technologies shall not exceed the total fees paid by the Client under the relevant Statement of Work in the six (6) months preceding the claim.
          </p>
        </section>

        {/* Section 6 */}
        <section className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
          <h3 className="text-base font-bold font-['Outfit'] text-white">
            Legal & Governance Inquiries
          </h3>
          <p className="text-xs text-slate-400">
            For contractual or legal inquiries regarding our terms, please email{' '}
            <a href={`mailto:${COMPANY_INFO.email}`} className="text-blue-400 font-semibold">{COMPANY_INFO.email}</a>.
          </p>
        </section>
      </div>
    </div>
  );
};
