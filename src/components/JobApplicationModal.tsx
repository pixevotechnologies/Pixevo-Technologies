import React, { useState } from 'react';
import { JobPosition } from '../types';
import {
  X,
  Briefcase,
  MapPin,
  Clock,
  CheckCircle2,
  Upload,
  Send,
  Sparkles,
} from 'lucide-react';

interface JobApplicationModalProps {
  job: JobPosition | null;
  onClose: () => void;
}

export const JobApplicationModal: React.FC<JobApplicationModalProps> = ({
  job,
  onClose,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [portfolioUrl, setPortfolioUrl] = useState('');
  const [coverNote, setCoverNote] = useState('');
  const [fileName, setFileName] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  if (!job) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-slate-950 border border-slate-800 rounded-2xl shadow-2xl p-6 sm:p-8 space-y-6"
        role="dialog"
        aria-modal="true"
        aria-labelledby="job-application-title"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-900 transition-all cursor-pointer"
          aria-label="Close application modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-12 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold font-['Outfit'] text-white">
              Application Submitted Successfully!
            </h3>
            <p className="text-slate-400 text-sm max-w-md mx-auto">
              Thank you for your interest in joining Pixevo Technologies as a{' '}
              <span className="text-blue-400 font-semibold">{job.title}</span>.
              Our engineering leadership will review your profile and contact you shortly.
            </p>
            <div className="pt-4">
              <button
                onClick={onClose}
                className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-full text-sm font-semibold shadow-md shadow-blue-900/20 transition-all cursor-pointer"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <>
            {/* Header */}
            <div className="space-y-2 pr-8">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  {job.department}
                </span>
                <span className="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  {job.type}
                </span>
                <span className="text-xs text-slate-400 flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-slate-400" />
                  <span>{job.location}</span>
                </span>
              </div>

              <h2
                id="job-application-title"
                className="text-2xl sm:text-3xl font-bold font-['Outfit'] text-white"
              >
                Apply for {job.title}
              </h2>
              <p className="text-xs text-slate-400">
                Join our international engineering team building modern technology solutions.
              </p>
            </div>

            {/* Application Form */}
            <form onSubmit={handleSubmit} className="space-y-4 pt-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Full Name <span className="text-blue-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Alex Morgan"
                    className="w-full px-3.5 py-2.5 text-sm bg-slate-900/40 border border-slate-800 rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:border-slate-700"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Email Address <span className="text-blue-400">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="alex@example.com"
                    className="w-full px-3.5 py-2.5 text-sm bg-slate-900/40 border border-slate-800 rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:border-slate-700"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+1 (555) 000-0000"
                    className="w-full px-3.5 py-2.5 text-sm bg-slate-900/40 border border-slate-800 rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:border-slate-700"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Portfolio / GitHub / LinkedIn URL
                  </label>
                  <input
                    type="url"
                    value={portfolioUrl}
                    onChange={(e) => setPortfolioUrl(e.target.value)}
                    placeholder="https://github.com/yourhandle"
                    className="w-full px-3.5 py-2.5 text-sm bg-slate-900/40 border border-slate-800 rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:border-slate-700"
                  />
                </div>
              </div>

              {/* Resume Upload Drag & Drop / File Input */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Resume / CV (PDF or DOCX) <span className="text-blue-400">*</span>
                </label>
                <label className="flex flex-col items-center justify-center p-4 border-2 border-dashed border-slate-800 hover:border-slate-700 bg-slate-900/40 rounded-xl cursor-pointer transition-all">
                  <Upload className="w-6 h-6 text-blue-400 mb-1" />
                  <span className="text-xs font-medium text-slate-300">
                    {fileName ? fileName : 'Click to select or drag and drop your resume file'}
                  </span>
                  <span className="text-[10px] text-slate-500 mt-0.5">
                    Max size: 10MB (PDF, DOCX)
                  </span>
                  <input
                    type="file"
                    required
                    accept=".pdf,.docx,.doc"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                </label>
              </div>

              {/* Brief Cover Note */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Brief Note on Experience & Availability
                </label>
                <textarea
                  rows={3}
                  value={coverNote}
                  onChange={(e) => setCoverNote(e.target.value)}
                  placeholder="Share a short summary of relevant projects and when you are available to start..."
                  className="w-full px-3.5 py-2.5 text-sm bg-slate-900/40 border border-slate-800 rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:border-slate-700"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-3 border-t border-slate-800 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-5 py-2.5 text-sm font-medium text-slate-300 hover:bg-slate-900 rounded-full transition-all cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-full shadow-md shadow-blue-900/20 transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Job Application</span>
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};
