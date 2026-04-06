import React from 'react';
import { Card } from './ui/card';
import { GraduationCap, Award, FileText } from 'lucide-react';
import { portfolioData } from '../data/mock';
import { SectionHeading } from './SectionHeading';

const Education = () => {
  const { education, certifications, research } = portfolioData;

  return (
    <section id="education" className="bg-gradient-to-b from-slate-50 to-white pt-24 pb-16 md:pt-20 md:pb-20">
      <div className="container mx-auto max-w-6xl px-6">
        <SectionHeading >
          Education & <span className="gradient-text">Achievements</span>
        </SectionHeading>

        <div className="mx-auto max-w-6xl">
          {/* Education */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="text-emerald-600" size={32} />
              <h3 className="text-3xl font-bold text-slate-800">Education</h3>
            </div>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="rounded-xl border border-slate-100/80 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                  <div className="flex flex-col gap-2">
                    <h4 className="text-xl font-semibold text-slate-800">
                      {edu.degree}
                    </h4>
                    <p className="text-slate-600">
                      {edu.institution}, {edu.location}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <Award className="text-emerald-600" size={32} />
              <h3 className="text-3xl font-bold text-slate-800">Certifications</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <Card key={index} className="rounded-xl border border-slate-100/80 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                  <h4 className="text-lg font-semibold text-slate-800 mb-2">
                    {cert.title}
                  </h4>
                  <p className="text-slate-600 mb-1">{cert.issuer}</p>
                  <p className="text-sm text-emerald-600 font-medium mb-3">{cert.year}</p>
                  {cert.description && (
                    <p className="text-sm text-slate-600 mb-4">{cert.description}</p>
                  )}
                  {cert.certificateFile && (
                    <a
                      href={cert.certificateFile}
                      download
                      className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white text-sm font-medium rounded-lg hover:bg-emerald-700 transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      Download
                    </a>
                  )}
                </Card>
              ))}
            </div>
          </div>

          {/* Research */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <FileText className="text-emerald-600" size={32} />
              <h3 className="text-3xl font-bold text-slate-800">Research</h3>
            </div>
            <div className="space-y-5">
              {research.map((paper, index) => (
                <Card key={index} className="rounded-xl border border-slate-100/80 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                  <h4 className="text-xl font-semibold text-slate-800 mb-3">
                    {paper.title}
                  </h4>
                  <p className="text-slate-600 mb-2">{paper.description}</p>
                  <p className="text-sm text-emerald-600 font-medium">{paper.year}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
