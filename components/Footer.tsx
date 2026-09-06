'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-stone-50 dark:bg-slate-950 text-stone-600 dark:text-slate-400 py-14 px-6 border-t border-stone-200 dark:border-slate-800/80 text-sm transition-colors duration-300">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
        
        {/* Philosophy */}
        <div className="space-y-2">
          <p className="text-stone-900 dark:text-slate-100 font-semibold tracking-tight text-base">A builder, not a spectator.</p>
          <p className="text-stone-500 dark:text-slate-400 italic text-sm">Instinct for design, discipline for CS.</p>
          <div className="pt-2 flex gap-3 text-xs tracking-widest text-amber-600 dark:text-amber-400 uppercase font-semibold">
            <span>Precise</span> • <span>Calm</span> • <span>Deliberate</span>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-stone-900 dark:text-slate-200 font-semibold mb-3 tracking-wide">Contact</h4>
          <ul className="space-y-2">
            <li>
              <a 
                href="mailto:contact@rohaan.dev" 
                className="hover:text-stone-900 dark:hover:text-white transition flex items-center gap-2 group"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 opacity-60 group-hover:scale-125 transition-transform" />
                Email
              </a>
            </li>
            <li>
              <a 
                href="https://www.linkedin.com/in/muhammadrohaankhan/" 
                target="_blank" 
                rel="noreferrer" 
                className="hover:text-stone-900 dark:hover:text-[#c9aeff] transition flex items-center gap-2 group"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#a880f5] opacity-80 group-hover:scale-125 transition-transform" />
                LinkedIn
              </a>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="text-stone-900 dark:text-slate-200 font-semibold mb-3 tracking-wide">Social</h4>
          <ul className="space-y-2">
            <li>
              <a 
                href="https://github.com/muhammadrohaankhan007" 
                target="_blank" 
                rel="noreferrer" 
                className="hover:text-stone-900 dark:hover:text-[#c9aeff] transition flex items-center gap-2 group"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#a880f5] opacity-80 group-hover:scale-125 transition-transform" />
                GitHub
              </a>
            </li>
            <li>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noreferrer" 
                className="hover:text-stone-900 dark:hover:text-white transition flex items-center gap-2 group"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 opacity-60 group-hover:scale-125 transition-transform" />
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto pt-6 border-t border-stone-200 dark:border-slate-900 flex justify-between items-center text-xs">
        <p className="text-stone-500 dark:text-slate-500">© 2026 Rohaan. All rights reserved. Crafted with precision & intent.</p>
        
        {/* Working Admin Portal Trigger */}
        <Link 
          href="/admin/dashboard" 
          className="text-stone-400 hover:text-amber-500 dark:text-slate-600 dark:hover:text-amber-400 transition-all transform hover:scale-110 p-1.5 rounded-md hover:bg-stone-200/50 dark:hover:bg-slate-800/60"
          title="Admin Control Panel"
          id="admin-portal-trigger"
        >
          <span className="text-base" role="img" aria-label="Admin Access">🔑</span>
        </Link>
      </div>
    </footer>
  );
}
