import React from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Github, ExternalLink } from 'lucide-react';
import { portfolioData } from '../data/mock';
import { SectionHeading } from './SectionHeading';

const Projects = () => {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="relative overflow-hidden bg-white py-24 md:py-10">
      <div className="pointer-events-none absolute -right-20 top-0 h-72 w-72 rounded-full bg-emerald-100/80 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-96 w-96 rounded-full bg-sky-100/70 blur-3xl" />

      <div className="container relative z-10 mx-auto max-w-6xl px-6">
        <SectionHeading
          //kicker="Portfolio"
          className="animate-fade-in"
          description="Recent work across frontend, UI/UX, and data"
        >
          My <span className="gradient-text">Projects</span>
        </SectionHeading>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className="group relative overflow-hidden rounded-2xl border border-slate-100/90 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-emerald-100 hover:shadow-2xl"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="p-6 relative z-10 flex h-full flex-col">
                <h3 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-emerald-600 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-slate-600 mb-4 leading-relaxed line-clamp-4">
                  {project.description}
                </p>

                {project.duration && (
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full animate-pulse"></div>
                    <p className="text-sm text-slate-500 font-medium">
                      {project.duration}
                    </p>
                  </div>
                )}

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="text-xs border-emerald-600 text-emerald-700 bg-emerald-50 hover:bg-emerald-100 transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="mt-auto pt-4">
                  <div className="flex gap-3">
                    {project.github && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 border-slate-300 hover:bg-emerald-50 hover:border-emerald-600 hover:text-emerald-700 transition-all group/btn"
                        onClick={() => window.open(project.github, '_blank')}
                      >
                        <Github size={16} className="mr-2 group-hover/btn:rotate-12 transition-transform" />
                        Code
                      </Button>
                    )}
                    {project.liveUrl && (
                      <Button
                        size="sm"
                        className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white hover:scale-105 transition-all"
                        onClick={() => window.open(project.liveUrl, '_blank')}
                      >
                        <ExternalLink size={16} className="mr-2" />
                        Live Demo
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
