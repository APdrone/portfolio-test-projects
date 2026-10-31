// src/components/Footer.tsx
import React from 'react';
import { Terminal, Github, Linkedin, Mail, ArrowUp, Heart } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-850 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-900">
          
          {/* Brand & Mission (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-600 flex items-center justify-center text-white shadow-md">
                <Terminal className="h-4 w-4 stroke-[2.2]" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">Scriptcrux</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Portfolio and engineering practice of Aman Patwal — Lead SDET & QA Automation Architect.
              Engineering zero-flake test architectures, high-concurrency performance benchmarks, and GenAI guardrails.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com/APdrone"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white flex items-center justify-center border border-slate-800 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/aman-patwal-376bb173/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white flex items-center justify-center border border-slate-800 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="mailto:amanpatwalfor@gmail.com"
                className="w-9 h-9 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white flex items-center justify-center border border-slate-800 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-4">Navigation</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#hero" className="hover:text-indigo-400 transition-colors">Overview</a>
              </li>
              <li>
                <a href="#services" className="hover:text-indigo-400 transition-colors">Services</a>
              </li>
              <li>
                <a href="#technologies" className="hover:text-indigo-400 transition-colors">Tech Stack</a>
              </li>
              <li>
                <a href="#experience" className="hover:text-indigo-400 transition-colors">Experience</a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-indigo-400 transition-colors">Portfolio</a>
              </li>
              <li>
                <a href="#principles" className="hover:text-indigo-400 transition-colors">Engineering Standards</a>
              </li>
            </ul>
          </div>

          {/* Core Frameworks */}
          <div>
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-4">Core Frameworks</h4>
            <ul className="space-y-2.5 text-sm font-mono text-xs">
              <li className="text-slate-400 hover:text-slate-200">Playwright E2E</li>
              <li className="text-slate-400 hover:text-slate-200">Cypress Web/API</li>
              <li className="text-slate-400 hover:text-slate-200">Pytest + RAGAS</li>
              <li className="text-slate-400 hover:text-slate-200">Artillery 10k RPS</li>
              <li className="text-slate-400 hover:text-slate-200">Appium Mobile</li>
              <li className="text-slate-400 hover:text-slate-200">GitHub Actions CI</li>
            </ul>
          </div>

          {/* Availability / Contact */}
          <div>
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-4">Engagement</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Open for Consulting & Contracts</span>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Available for advisory roles, enterprise framework audits, and Lead SDET engagements worldwide.
              </p>
              <a
                href="#contact"
                className="inline-block mt-2 text-xs font-bold text-indigo-400 hover:text-indigo-300 underline underline-offset-4"
              >
                Schedule Consultation →
              </a>
            </div>
          </div>

        </div>

        {/* Bottom row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Scriptcrux • Aman Patwal. Built for high-velocity software quality.</p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
