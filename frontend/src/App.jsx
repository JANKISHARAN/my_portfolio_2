import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AdminMessages from './components/AdminMessages';
import DownloadPage from './components/DownloadPage';
import { Toaster } from './components/ui/toaster';
import './App.css';

const HomePage = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </>
  );
};

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin/messages" element={<AdminMessages />} />
        <Route path="/download" element={<DownloadPage />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;