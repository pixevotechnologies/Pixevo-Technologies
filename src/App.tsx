/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageId, ProjectItem, JobPosition, BlogPost, ContactFormData } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ProjectEstimatorModal } from './components/ProjectEstimatorModal';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { JobApplicationModal } from './components/JobApplicationModal';
import { ArticleModal } from './components/ArticleModal';
import { PixevoChatbot } from './components/PixevoChatbot';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { SolutionsPage } from './pages/SolutionsPage';
import { IndustriesPage } from './pages/IndustriesPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { ProcessPage } from './pages/ProcessPage';
import { CareersPage } from './pages/CareersPage';
import { BlogPage } from './pages/BlogPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsPage } from './pages/TermsPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [isEstimatorOpen, setIsEstimatorOpen] = useState<boolean>(false);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [selectedJob, setSelectedJob] = useState<JobPosition | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<BlogPost | null>(null);
  const [contactPrefill, setContactPrefill] = useState<Partial<ContactFormData> | undefined>(undefined);

  // Scroll to top on navigation
  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // When estimator finishes, navigate to contact with prefill
  const handleEstimatorProceed = (estimateData: {
    service: string;
    budget: string;
    details: string;
  }) => {
    setContactPrefill({
      serviceRequired: estimateData.service,
      budget: estimateData.budget,
      projectDetails: estimateData.details,
    });
    setIsEstimatorOpen(false);
    handleNavigate('contact');
  };

  // Inquire specific service
  const handleInquireService = (serviceName: string) => {
    setContactPrefill({
      serviceRequired: serviceName,
      projectDetails: `Inquiry regarding ${serviceName}. We would like to discuss technical scope and timelines.`,
    });
    handleNavigate('contact');
  };

  // Inquire specific solution
  const handleInquireSolution = (solutionTitle: string) => {
    setContactPrefill({
      serviceRequired: 'Business Software Solutions',
      projectDetails: `Interested in implementing a custom ${solutionTitle} for our business operations.`,
    });
    handleNavigate('contact');
  };

  // Inquire specific industry
  const handleInquireIndustry = (industryName: string) => {
    setContactPrefill({
      serviceRequired: 'Custom Software Development',
      projectDetails: `We operate in the ${industryName} industry and are exploring custom software solutions.`,
    });
    handleNavigate('contact');
  };

  // Start similar project from project modal
  const handleStartSimilarProject = (projectName: string) => {
    setContactPrefill({
      serviceRequired: 'Custom Software Development',
      projectDetails: `We are interested in building a solution similar in architecture to "${projectName}".`,
    });
    setSelectedProject(null);
    handleNavigate('contact');
  };

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 flex flex-col font-sans selection:bg-blue-500/30 selection:text-blue-200">
      {/* Header */}
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenEstimator={() => setIsEstimatorOpen(true)}
      />

      {/* Main Content View Container */}
      <main id="main-content" className="flex-grow">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenEstimator={() => setIsEstimatorOpen(true)}
            onSelectProject={(project) => setSelectedProject(project)}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage onNavigate={handleNavigate} />
        )}

        {currentPage === 'services' && (
          <ServicesPage
            onNavigate={handleNavigate}
            onInquireService={handleInquireService}
          />
        )}

        {currentPage === 'solutions' && (
          <SolutionsPage
            onNavigate={handleNavigate}
            onInquireSolution={handleInquireSolution}
          />
        )}

        {currentPage === 'industries' && (
          <IndustriesPage
            onNavigate={handleNavigate}
            onInquireIndustry={handleInquireIndustry}
          />
        )}

        {currentPage === 'portfolio' && (
          <PortfolioPage
            onNavigate={handleNavigate}
            onSelectProject={(project) => setSelectedProject(project)}
            onOpenEstimator={() => setIsEstimatorOpen(true)}
          />
        )}

        {currentPage === 'process' && (
          <ProcessPage onNavigate={handleNavigate} />
        )}

        {currentPage === 'careers' && (
          <CareersPage
            onNavigate={handleNavigate}
            onApplyJob={(job) => setSelectedJob(job)}
          />
        )}

        {currentPage === 'blog' && (
          <BlogPage
            onNavigate={handleNavigate}
            onSelectArticle={(article) => setSelectedArticle(article)}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage
            onNavigate={handleNavigate}
            prefill={contactPrefill}
          />
        )}

        {currentPage === 'privacy' && (
          <PrivacyPolicyPage onNavigate={handleNavigate} />
        )}

        {currentPage === 'terms' && (
          <TermsPage onNavigate={handleNavigate} />
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenEstimator={() => setIsEstimatorOpen(true)}
      />

      {/* Global Interactive Modals */}
      <ProjectEstimatorModal
        isOpen={isEstimatorOpen}
        onClose={() => setIsEstimatorOpen(false)}
        onProceedToContact={handleEstimatorProceed}
      />

      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onStartSimilarProject={handleStartSimilarProject}
      />

      <JobApplicationModal
        job={selectedJob}
        onClose={() => setSelectedJob(null)}
      />

      <ArticleModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
      />

      {/* Pixevo AI Assistant Chatbot */}
      <PixevoChatbot
        onNavigate={handleNavigate}
        onOpenEstimator={() => setIsEstimatorOpen(true)}
        onInquireService={handleInquireService}
      />
    </div>
  );
}
