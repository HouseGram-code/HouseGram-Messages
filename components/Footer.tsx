import React from 'react';
import { Send, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Content } from '../types';

interface FooterProps {
  content: Content['footer'];
}

export default function Footer({ content }: FooterProps) {
  return (
    <footer className="bg-slate-50 pt-20 pb-10 border-t border-slate-200">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10 mb-16">
          
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-red-600 p-2 rounded-xl text-white">
                <Send size={20} fill="currentColor" className="ml-0.5 mt-0.5" />
              </div>
              <span className="text-xl font-bold text-slate-900">HouseGram</span>
            </div>
            <p className="text-slate-500 max-w-xs">
               Redefining how the world connects, one message at a time.
            </p>
          </div>

          <div className="flex gap-4">
            {[Twitter, Instagram, Linkedin].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-red-600 hover:border-red-200 transition-all hover:-translate-y-1">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-400">{content.copyright}</p>
          <div className="flex gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-xs text-slate-500 font-medium uppercase tracking-wider">All Systems Operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}