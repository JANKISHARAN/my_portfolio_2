import React from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Code, Palette, Database, Brain } from 'lucide-react';
import { portfolioData } from '../data/mock';
import { SectionHeading } from './SectionHeading';

const Skills = () => {
  const { skills } = portfolioData;

  const categoryIcons = {
    'Programming Languages': Code,
    'Web Development': Palette,
    'Machine Learning': Brain,
    'Data Analysis': Database
  };

  return (
    <section id="skills" className="relative overflow-hidden bg-gradient-to-b from-slate-50/90 via-white to-emerald-50/30 py-24 md:py-10">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-sky-100 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-emerald-100 rounded-full blur-3xl opacity-40"></div>
      
      <div className="container relative z-10 mx-auto max-w-6xl px-6">
        <SectionHeading
          //kicker="Capabilities"
          className="animate-fade-in"
          description="My technical toolkit for building exceptional digital experiences"
        >
          Skills & <span className="gradient-text">Technologies</span>
        </SectionHeading>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
          {skills.map((skillCategory, index) => {
            const IconComponent = categoryIcons[skillCategory.category] || Code;
            
            return (
              <Card
                key={index}
                className="group relative overflow-hidden rounded-2xl border border-slate-100/90 bg-white/85 p-8 shadow-sm backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-emerald-100 hover:shadow-xl"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.15}s both`
                }}
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-gradient-to-br from-emerald-100 to-sky-100 rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="text-emerald-600 w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-semibold text-slate-800 group-hover:text-emerald-600 transition-colors">
                      {skillCategory.category}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {skillCategory.items.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        className="px-4 py-2 bg-gradient-to-r from-emerald-100 to-sky-100 text-emerald-700 hover:from-emerald-200 hover:to-sky-200 text-sm font-medium transition-all hover:scale-110 cursor-pointer"
                        style={{
                          animation: `fadeIn 0.4s ease-out ${(index * 0.15) + (skillIndex * 0.05)}s both`
                        }}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;