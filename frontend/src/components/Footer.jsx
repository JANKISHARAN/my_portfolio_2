import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { portfolioData } from '../data/mock';

const Footer = () => {
  const { personal } = portfolioData;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-emerald-500/20 bg-slate-950 text-white">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/60 to-transparent"
        aria-hidden
      />
      <div className="container mx-auto max-w-6xl px-6 py-14">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:items-start">
          <div className="text-center md:text-left">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400/90">
              Portfolio
            </p>
            <h3 className="mb-2 text-2xl font-bold tracking-tight">{personal.name}</h3>
            <p className="flex items-center justify-center gap-2 text-sm text-slate-400 md:justify-start">
              © {currentYear} · Crafted with{' '}
              <Heart className="text-rose-400" size={16} fill="currentColor" aria-hidden /> ·{' '}
              {personal.name}
            </p>
          </div>

          <div className="flex gap-3">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-slate-700/80 bg-slate-900/50 p-3 text-slate-300 transition-all hover:border-emerald-500/50 hover:bg-emerald-600/20 hover:text-white hover:shadow-lg hover:shadow-emerald-900/40"
            >
              <Github size={20} />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-slate-700/80 bg-slate-900/50 p-3 text-slate-300 transition-all hover:border-emerald-500/50 hover:bg-emerald-600/20 hover:text-white hover:shadow-lg hover:shadow-emerald-900/40"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="rounded-xl border border-slate-700/80 bg-slate-900/50 p-3 text-slate-300 transition-all hover:border-emerald-500/50 hover:bg-emerald-600/20 hover:text-white hover:shadow-lg hover:shadow-emerald-900/40"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-800/80 pt-8 text-center">
          <p className="text-sm leading-relaxed text-slate-500">
            React · Tailwind · UI/UX · Frontend · Data
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;