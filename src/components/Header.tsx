// src/components/Header.tsx
import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, Github, Linkedin, Sparkles } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  const goToSection = (id: string) => {
    closeMenu();

    // If on home page already
    if (location.pathname === '/' || location.pathname === '') {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      return;
    }

    // Otherwise navigate to home, then scroll
    navigate('/', { replace: false });
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 150);
  };

  const navItems = [
    { label: 'Services', id: 'services' },
    { label: 'Tech Stack', id: 'technologies' },
    { label: 'Experience', id: 'experience' },
    { label: 'Portfolio', id: 'portfolio' },
    { label: 'Engineering Standards', id: 'principles' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/85 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3'
          : 'bg-white/70 backdrop-blur-sm border-b border-slate-100/60 py-4'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <button
            onClick={() => goToSection('hero')}
            className="flex items-center gap-3 group text-left focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-700 to-violet-600 flex items-center justify-center shadow-md shadow-indigo-200 group-hover:scale-105 transition-transform duration-200">
              <Terminal className="h-5 w-5 text-white stroke-[2.2]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold tracking-tight text-slate-900 group-hover:text-indigo-600 transition-colors">
                  Scriptcrux
                </span>
                <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200/60">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse mr-1"></span>
                  Lead SDET
                </span>
              </div>
              <p className="text-[11px] text-slate-500 font-medium -mt-0.5 tracking-tight hidden sm:block">
                Aman Patwal • Test Automation Architect
              </p>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => goToSection(item.id)}
                className="px-3.5 py-1.5 text-sm font-medium text-slate-600 hover:text-indigo-600 hover:bg-slate-100/70 rounded-lg transition-all duration-150"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center gap-2">
            <a
              href="https://github.com/APdrone"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2.5 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-xl transition-colors border border-transparent hover:border-slate-200"
              title="GitHub Profile"
            >
              <Github className="w-5 h-5" />
            </a>

            <a
              href="https://www.linkedin.com/in/aman-patwal-376bb173/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2.5 text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-colors border border-transparent hover:border-blue-200"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>

            <button
              onClick={() => goToSection('contact')}
              className="relative inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 rounded-xl shadow-sm hover:shadow-indigo-200/80 hover:shadow-md transition-all duration-200 active:scale-95 ml-1"
            >
              <Sparkles className="w-4 h-4 text-indigo-200" />
              <span>Let's Connect</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              aria-label="Toggle navigation menu"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 focus:outline-none transition-colors border border-slate-200"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 pb-4 border-t border-slate-100 animate-in fade-in duration-200">
            <div className="flex flex-col space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => goToSection(item.id)}
                  className="px-3 py-2.5 text-sm font-medium text-slate-700 hover:text-indigo-600 hover:bg-indigo-50/60 rounded-lg text-left transition-colors"
                >
                  {item.label}
                </button>
              ))}

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                <a
                  href="https://github.com/APdrone"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs text-slate-700 px-3 py-2 rounded-lg hover:bg-slate-100 border border-slate-200"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/aman-patwal-376bb173/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs text-blue-700 bg-blue-50 px-3 py-2 rounded-lg hover:bg-blue-100 border border-blue-200"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>

                <button
                  onClick={() => goToSection('contact')}
                  className="flex-1 bg-indigo-600 text-white text-xs font-semibold py-2 px-3 rounded-lg text-center hover:bg-indigo-700 transition-colors shadow-sm"
                >
                  Get in Touch
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

