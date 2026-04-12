import React from 'react';
import { Card } from './ui/card';
import { Code, Palette, BarChart3, Lightbulb } from 'lucide-react';
import { portfolioData } from '../data/mock';
import { SectionHeading } from './SectionHeading';

const About = () => {
  const { about } = portfolioData;

  const highlights = [
    {
      icon: Code,
      title: "Software Development",
      description: "Building scalable and high-performance applications using modern technologies and clean architecture.",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: Palette,
      title: "Machine Learning",
      description: "Developing, training, and optimizing machine learning models for prediction, classification, and intelligent decision-making.",
      color: "from-sky-500 to-blue-500"
    },
    {
      icon: BarChart3,
      title: "Data Analysis",
      description: "Analyzing and interpreting complex datasets using Python to extract meaningful insights and support data-driven decisions.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Lightbulb,
      title: "Problem Solving",
      description: "Applying analytical thinking and logical reasoning to design efficient and innovative solutions to complex challenges.",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="about" className="relative overflow-hidden bg-white py-24 md:py-10">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(16, 185, 129) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      <div className="container relative z-10 mx-auto max-w-6xl px-6">
        <SectionHeading  className="animate-fade-in">
          About <span className="gradient-text">Me</span>
        </SectionHeading>

        <div className="mx-auto max-w-4xl">
          <div className="animate-fade-in mb-14 text-center">
            <p className="text-lg leading-relaxed text-slate-600 md:text-xl">
              {about.summary}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {highlights.map((item, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden rounded-2xl border border-slate-100/80 bg-white/90 p-6 shadow-sm backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-emerald-100 hover:shadow-xl"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                }}
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <div className="flex items-start gap-4 relative z-10">
                  <div className={`p-3 bg-gradient-to-br ${item.color} rounded-lg shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                    <item.icon className="text-white" size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-2 group-hover:text-emerald-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-600">{item.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
