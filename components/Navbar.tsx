import React, { useState, useEffect } from 'react';
import { Globe, Menu, X, Send } from 'lucide-react';
import { Language, Content } from '../types';

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
  content: Content['nav'];
}

export default function Navbar({ lang, setLang, content }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLang = () => {
    setLang(lang === 'en' ? 'ru' : 'en');
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/70 backdrop-blur-xl border-b border-white/20 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer group">
          <div className="bg-red-600 p-2 rounded-xl text-white shadow-lg shadow-red-500/30 transition-transform group-hover:scale-105">
            <Send size={24} fill="currentColor" className="ml-0.5 mt-0.5" />
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900">
            HouseGram
          </span>
        </div>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={toggleLang}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors uppercase"
          >
            <Globe size={14} />
            {lang}
          </button>
          
          <a
            href="https://house-gram-web.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900 hover:bg-red-600 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-lg hover:shadow-red-500/25 hover:-translate-y-0.5"
          >
            {content.cta}
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-slate-900"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-slate-100 p-6 flex flex-col gap-4 shadow-xl">
          <button onClick={toggleLang} className="flex items-center gap-2 text-slate-600 font-medium uppercase">
            <Globe size={18} /> {lang}
          </button>
          <a
            href="https://house-gram-web.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-slate-900 text-white font-bold uppercase tracking-wide"
          >
            {content.cta}
          </a>
        </div>
      )}
    </nav>
  );
}