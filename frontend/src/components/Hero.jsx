import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { portfolioData } from '../data/mock';

const Hero = () => {
  const { personal } = portfolioData;

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-slate-50 via-white to-emerald-50/40 pt-24 pb-16 md:pt-28">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: `linear-gradient(to right, rgb(148 163 184 / 0.12) 1px, transparent 1px), linear-gradient(to bottom, rgb(148 163 184 / 0.12) 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }}
      />
      {/* Animated background circles */}
      <div className="absolute top-20 left-10 h-72 w-72 animate-float rounded-full bg-emerald-300/40 blur-3xl mix-blend-multiply" />
      <div
        className="absolute top-40 right-10 h-96 w-96 animate-float rounded-full bg-sky-300/40 blur-3xl mix-blend-multiply"
        style={{ animationDelay: '1s' }}
      />
      <div
        className="absolute -bottom-20 left-1/3 h-80 w-80 animate-float rounded-full bg-violet-300/30 blur-3xl mix-blend-multiply"
        style={{ animationDelay: '2s' }}
      />

      <div className="container relative z-10 mx-auto max-w-6xl px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left animate-slide-in-left">
            <div className="mb-6 inline-flex animate-pulse-slow items-center gap-2 rounded-full border border-emerald-200/80 bg-white/90 px-4 py-2 text-sm font-medium text-emerald-800 shadow-sm backdrop-blur-sm">
              <Sparkles className="text-emerald-600" size={16} aria-hidden />
              <span>Available for opportunities</span>
            </div>
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl md:text-6xl lg:text-7xl lg:leading-[1.05]">
              Hi, I&apos;m{' '}
              <span className="gradient-text">{personal.name}</span>
            </h1>
            <p className="mb-6 text-lg font-medium text-slate-600 md:text-xl lg:text-2xl">
              {personal.title}
            </p>
            <p className="mb-10 max-w-2xl text-base leading-relaxed text-slate-600 md:text-lg">
              Crafting intuitive interfaces and data-driven solutions that bridge design, development, and analytics.
            </p>

            {/* CTA Buttons */}
            <div className="mb-10 flex flex-col justify-center gap-4 sm:flex-row md:justify-start">
              <Button
                onClick={() => scrollToSection('projects')}
                className="rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 px-8 py-6 text-base text-white shadow-lg shadow-emerald-600/25 transition-all hover:scale-[1.02] hover:from-emerald-700 hover:to-teal-700 hover:shadow-xl md:text-lg"
              >
                View My Work
                <ArrowRight className="ml-2 animate-pulse" size={20} />
              </Button>
              <Button
                onClick={() => scrollToSection('contact')}
                variant="outline"
                className="rounded-full border-2 border-slate-200 bg-white/80 px-8 py-6 text-base text-slate-800 backdrop-blur-sm transition-all hover:border-emerald-300 hover:bg-emerald-50/90 md:text-lg"
              >
                Contact Me
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex flex-1 animate-slide-in-right justify-center md:justify-end">
            <div className="relative">
              <div className="absolute inset-4 rounded-full bg-gradient-to-br from-emerald-400 via-teal-400 to-sky-500 opacity-50 blur-2xl animate-pulse-slow" />
              <div className="absolute -right-2 -top-2 h-20 w-20 animate-float rounded-full bg-emerald-400/30 blur-xl" />
              <div
                className="absolute -bottom-2 -left-4 h-28 w-28 animate-float rounded-full bg-sky-400/25 blur-xl"
                style={{ animationDelay: '1s' }}
              />
              <div className="relative rounded-full bg-gradient-to-br from-white to-slate-100 p-1.5 shadow-2xl shadow-slate-400/30 ring-4 ring-white/80">
                <img
                  src={personal.profileImage}
                  alt={personal.name}
                  className="h-72 w-72 cursor-pointer rounded-full object-cover ring-4 ring-emerald-100/80 transition-transform duration-500 hover:scale-[1.02] md:h-96 md:w-96"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;