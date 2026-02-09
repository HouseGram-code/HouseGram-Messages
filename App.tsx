import React, { useState } from 'react';
import Navbar from './components/Navbar';
// Hero removed as per request to remove the text section
import Features from './components/Features';
import Footer from './components/Footer';
import { Language } from './types';
import { TRANSLATIONS } from './constants';

export default function App() {
  const [lang, setLang] = useState<Language>('en');
  const content = TRANSLATIONS[lang];

  return (
    <div className="min-h-screen text-slate-900 bg-[#FAFAFA] selection:bg-blue-100 selection:text-blue-900">
      <Navbar lang={lang} setLang={setLang} content={content.nav} />
      <main className="pt-20">
        <Features content={content.features} />
      </main>
      <Footer content={content.footer} />
    </div>
  );
}