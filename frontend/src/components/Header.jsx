import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, Download, House } from 'lucide-react';
import { Button } from './ui/button';
import { portfolioData } from '../data/mock';
import { useToast } from '../hooks/use-toast';
import { triggerResumeDownload } from '../lib/resumeDownload';

const BACKEND_URL = (import.meta.env.VITE_BACKEND_URL || '').replace(/\/$/, '');
const API = BACKEND_URL ? `${BACKEND_URL}/api` : '';

const iconLinkClass =
  'inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200/90 bg-white text-slate-600 shadow-sm transition-all hover:border-emerald-200 hover:text-emerald-600 hover:shadow-md';

const Header = () => {
  const { personal } = portfolioData;
  const { toast } = useToast();
  const initials = personal.name
    .split(/\s+/)
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const handleDownloadResume = () =>
    triggerResumeDownload(personal, { toast, api: API || undefined });

  const navItems = [
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Education', id: 'education' },
    { label: 'Contact', id: 'contact' },
  ];

  const socialLinks = (
    <>
      <a
        href={personal.github}
        target="_blank"
        rel="noopener noreferrer"
        className={iconLinkClass}
        aria-label="GitHub"
      >
        <Github size={18} />
      </a>
      <a
        href={personal.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className={iconLinkClass}
        aria-label="LinkedIn"
      >
        <Linkedin size={18} />
      </a>
      <a href={`mailto:${personal.email}`} className={iconLinkClass} aria-label="Email">
        <Mail size={18} />
      </a>
    </>
  );

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'border-b border-slate-200/80 bg-white/80 py-3 shadow-sm backdrop-blur-md supports-[backdrop-filter]:bg-white/70'
          : 'bg-transparent py-5 md:py-6'
      }`}
    >
      <div className="container mx-auto max-w-6xl px-6">
        <div className="flex items-center justify-between gap-3">
          {/* Home */}
          <button
            type="button"
            onClick={() => scrollToSection('hero')}
            className="group flex min-w-0 shrink-0 items-center gap-2 rounded-xl text-left transition-transform hover:scale-[1.02] active:scale-[0.98] sm:gap-3"
            aria-label={`Home — ${personal.name}`}
            title="Back to home"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-600 to-teal-600 text-sm font-bold tracking-tight text-white shadow-md shadow-emerald-600/25 ring-2 ring-white">
              {initials}
            </span>
            <span className="hidden min-w-0 flex-col sm:flex">
              <span className="flex items-center gap-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-700">
                <House className="h-3 w-3" aria-hidden />
                Home
              </span>
              <span className="truncate text-sm font-semibold text-slate-800">{personal.name}</span>
            </span>
          </button>

          {/* Desktop: center nav */}
          <nav className="mx-2 hidden min-w-0 flex-1 items-center justify-center gap-0.5 md:flex lg:gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
                className="whitespace-nowrap rounded-full px-2.5 py-2 text-xs font-medium text-slate-600 transition-colors hover:bg-emerald-50 hover:text-emerald-700 lg:px-4 lg:text-sm"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop: social + resume + CTA */}
          <div className="hidden shrink-0 items-center gap-1.5 md:flex lg:gap-2">
            <div className="flex items-center gap-1 border-r border-slate-200/80 pr-2 lg:gap-1.5 lg:pr-3">
              {socialLinks}
            </div>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={handleDownloadResume}
              className="hidden rounded-full border-emerald-200 bg-white/90 text-emerald-800 shadow-sm hover:bg-emerald-50 lg:inline-flex"
            >
              <Download className="mr-1.5 h-4 w-4" />
              Resume
            </Button>
            <Button
              type="button"
              variant="outline"
              size="icon"
              onClick={handleDownloadResume}
              className="rounded-full border-emerald-200 bg-white/90 text-emerald-800 hover:bg-emerald-50 lg:hidden"
              aria-label="Download resume"
            >
              <Download className="h-4 w-4" />
            </Button>
            <Button
              type="button"
              onClick={() => scrollToSection('contact')}
              className="rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 px-4 text-sm text-white shadow-md shadow-emerald-600/20 hover:from-emerald-700 hover:to-teal-700 lg:px-5"
            >
              Get in Touch
            </Button>
          </div>

          <button
            type="button"
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-800 shadow-sm md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <nav className="mt-4 flex flex-col gap-1 rounded-2xl border border-slate-200/80 bg-white/95 p-3 shadow-lg backdrop-blur-md md:hidden">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
                className="rounded-xl px-4 py-3 text-left text-sm font-medium text-slate-700 transition-colors hover:bg-emerald-50 hover:text-emerald-800"
              >
                {item.label}
              </button>
            ))}
            <div className="flex justify-center gap-2 border-t border-slate-100 py-3">
              {socialLinks}
            </div>
            <Button
              type="button"
              variant="outline"
              onClick={() => {
                handleDownloadResume();
                setIsMobileMenuOpen(false);
              }}
              className="w-full rounded-full border-emerald-200 text-emerald-800 hover:bg-emerald-50"
            >
              <Download className="mr-2 h-4 w-4" />
              Download resume
            </Button>
            <Button
              type="button"
              onClick={() => scrollToSection('contact')}
              className="w-full rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white"
            >
              Get in Touch
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
