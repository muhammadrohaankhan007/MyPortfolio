'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Moon, Sun, Terminal } from 'lucide-react';

export default function Navbar() {
  const [isDark, setIsDark] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    // Check initial dark mode from system or local storage
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    } else {
      document.documentElement.classList.remove('dark');
      setIsDark(false);
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = ['websites', 'achievements', 'about'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(section);
          return;
        }
      }
      setActiveSection('hero');
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  return (
    <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <nav 
        className={`pointer-events-auto flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-2 rounded-full border transition-all duration-300 ${
          scrolled
            ? 'bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl border-stone-300/80 dark:border-slate-800 shadow-lg shadow-black/5 dark:shadow-black/40'
            : 'bg-white/95 dark:bg-slate-900/90 backdrop-blur-md border-stone-200 dark:border-slate-800/80 shadow-md shadow-stone-200/50 dark:shadow-black/30'
        }`}
        aria-label="Main Navigation"
      >
        {/* Brand Icon / Rounded Pill Avatar Mark */}
        <Link 
          href="/" 
          className="flex items-center gap-2 pl-1.5 pr-3 py-1 text-[#0a0c14] dark:text-[#f3f4f8] font-mono text-xs font-semibold tracking-wider hover:opacity-90 transition-opacity"
          title="Rohaan Khan // SWE & Applied Data Analyst"
        >
          <span className="w-6 h-6 rounded-full bg-[#a880f5] text-[#0a0c14] flex items-center justify-center font-bold text-[11px] shadow-xs shadow-[#a880f5]/40">
            R
          </span>
          <span className="hidden md:inline font-mono text-xs text-[#0a0c14] dark:text-[#f3f4f8]">
            rohaan.dev
          </span>
        </Link>

        <div className="h-4 w-px bg-[#a880f5]/20 mx-1 hidden sm:block" />

        {/* Nav Links in JetBrains Mono */}
        <div className="flex items-center gap-1 text-xs font-mono font-medium">
          <a
            href="#about"
            className={`px-3 py-1.5 rounded-full transition-all duration-200 ${
              activeSection === 'about'
                ? 'bg-[#a880f5] text-[#0a0c14] font-bold shadow-xs shadow-[#a880f5]/30'
                : 'text-[#4e556e] dark:text-[#949ab2] hover:text-[#0a0c14] dark:hover:text-[#c9aeff] hover:bg-[#a880f5]/10'
            }`}
          >
            About
          </a>

          <a
            href="#achievements"
            className={`px-3 py-1.5 rounded-full transition-all duration-200 ${
              activeSection === 'achievements'
                ? 'bg-[#a880f5] text-[#0a0c14] font-bold shadow-xs shadow-[#a880f5]/30'
                : 'text-[#4e556e] dark:text-[#949ab2] hover:text-[#0a0c14] dark:hover:text-[#c9aeff] hover:bg-[#a880f5]/10'
            }`}
          >
            Achievements
          </a>

          <a
            href="#websites"
            className={`px-3 py-1.5 rounded-full transition-all duration-200 ${
              activeSection === 'websites'
                ? 'bg-[#a880f5] text-[#0a0c14] font-bold shadow-xs shadow-[#a880f5]/30'
                : 'text-[#4e556e] dark:text-[#949ab2] hover:text-[#0a0c14] dark:hover:text-[#c9aeff] hover:bg-[#a880f5]/10'
            }`}
          >
            Websites
          </a>
        </div>

        <div className="h-4 w-px bg-[#a880f5]/20 mx-1" />

        {/* Dark Mode Toggle */}
        <button
          onClick={toggleTheme}
          aria-label="Toggle theme"
          id="dark-mode-toggle"
          className="p-2 rounded-full text-[#4e556e] dark:text-[#949ab2] hover:text-[#0a0c14] dark:hover:text-[#c9aeff] hover:bg-[#a880f5]/10 transition-colors"
          title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        >
          {isDark ? (
            <Sun className="w-4 h-4 transition-transform rotate-0 scale-100 text-[#c9aeff]" />
          ) : (
            <Moon className="w-4 h-4 transition-transform rotate-0 scale-100 text-[#8b5cf6]" />
          )}
        </button>
      </nav>
    </header>
  );
}
