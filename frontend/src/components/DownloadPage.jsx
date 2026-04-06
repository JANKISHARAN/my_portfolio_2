import React from 'react';
import { Download, Package, FileCode, Book, FileText } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { portfolioData } from '../data/mock';

const DownloadPage = () => {
  const { personal } = portfolioData;
  const resumeHref = personal.resumeUrl || '/resume.pdf';
  const resumeFileName = `${personal.name.replace(/\s+/g, '_')}_Resume.pdf`;
  const resumeIsExternal = /^https?:\/\//i.test(resumeHref);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-emerald-50/30 px-6 py-24">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-14 text-center">
          <p className="section-kicker mb-3">Downloads</p>
          <Package className="mx-auto mb-4 h-14 w-14 text-emerald-600" />
          <h1 className="mb-3 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            Portfolio <span className="gradient-text">package</span>
          </h1>
          <div className="section-rule" />
          <p className="mx-auto mt-6 max-w-xl text-lg text-slate-600">
            Source bundle, docs, and your resume in one place
          </p>
        </div>

        <Card className="mb-8 rounded-2xl border border-slate-100/90 p-8 shadow-lg shadow-slate-200/30">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">
            📄 Resume (PDF)
          </h2>
          <p className="text-slate-600 mb-4">
            Download your CV directly from the site. Replace <code className="text-sm bg-slate-100 px-1 rounded">public/resume.pdf</code> with your real file, or set <code className="text-sm bg-slate-100 px-1 rounded">resumeUrl</code> in <code className="text-sm bg-slate-100 px-1 rounded">mock.js</code> to a hosted link.
          </p>
          <Button
            asChild
            className="mb-8 w-full rounded-full bg-gradient-to-r from-slate-800 to-slate-900 py-6 text-lg text-white shadow-md hover:from-slate-900 hover:to-black"
          >
            <a
              href={resumeHref}
              {...(resumeIsExternal
                ? { target: '_blank', rel: 'noopener noreferrer' }
                : { download: resumeFileName })}
            >
              <FileText className="mr-2" size={20} />
              Download resume PDF
            </a>
          </Button>

          <h2 className="text-2xl font-bold text-slate-800 mb-4">
            📦 Complete Package
          </h2>
          <div className="bg-emerald-50 p-6 rounded-lg mb-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="font-semibold text-slate-800">janki_sharan_portfolio_complete.zip</p>
                <p className="text-sm text-slate-600">152 KB • 80 files</p>
              </div>
              <Download className="text-emerald-600" size={32} />
            </div>
            <Button
              onClick={() => (window.location.href = '/janki_sharan_portfolio_complete.zip')}
              className="w-full rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 py-6 text-lg text-white shadow-md shadow-emerald-600/20 hover:from-emerald-700 hover:to-teal-700"
            >
              <Download className="mr-2" size={20} />
              Download ZIP File
            </Button>
          </div>

          <h3 className="font-semibold text-slate-800 mb-3">📋 Package Contents:</h3>
          <ul className="space-y-2 text-slate-600">
            <li className="flex items-center gap-2">
              <FileCode size={16} className="text-emerald-600" />
              Complete backend code (FastAPI + MongoDB)
            </li>
            <li className="flex items-center gap-2">
              <FileCode size={16} className="text-emerald-600" />
              Complete frontend code (React + Tailwind)
            </li>
            <li className="flex items-center gap-2">
              <FileCode size={16} className="text-emerald-600" />
              All 40+ Shadcn UI components
            </li>
            <li className="flex items-center gap-2">
              <FileCode size={16} className="text-emerald-600" />
              Your resume PDF (73KB)
            </li>
            <li className="flex items-center gap-2">
              <Book size={16} className="text-emerald-600" />
              7 documentation files
            </li>
            <li className="flex items-center gap-2">
              <Book size={16} className="text-emerald-600" />
              Setup guides & README
            </li>
          </ul>
        </Card>

        <Card className="rounded-2xl border border-sky-200/80 bg-sky-50/80 p-8 backdrop-blur-sm">
          <h3 className="font-semibold text-blue-900 mb-3">🚀 Quick Start After Download</h3>
          <ol className="list-decimal list-inside space-y-2 text-blue-800">
            <li>Extract the ZIP file</li>
            <li>Read README.md for quick overview</li>
            <li>Follow SETUP_GUIDE.txt for detailed instructions</li>
            <li>Edit frontend/src/data/mock.js to update your info</li>
            <li>Run backend and frontend (commands in README)</li>
          </ol>
        </Card>

        <div className="mt-8 text-center">
          <Button
            variant="outline"
            onClick={() => window.location.href = '/'}
            className="border-slate-300 text-slate-700 hover:bg-slate-100"
          >
            ← Back to Portfolio
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DownloadPage;
