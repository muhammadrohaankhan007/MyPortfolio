'use client';

import { useState, useEffect } from 'react';
import PixelAvatar from '@/components/PixelAvatar';
import GithubIcon from '@/components/icons/GithubIcon';
import LinkedinIcon from '@/components/icons/LinkedinIcon';
import { 
  Sun, 
  Moon, 
  Terminal, 
  ArrowUpRight, 
  Layers, 
  Database, 
  Cpu, 
  CheckCircle2, 
  Sparkles, 
  GitBranch, 
  Code2 
} from 'lucide-react';

export default function About() {
  const [isDark, setIsDark] = useState<boolean>(true);

  // Synchronize light/dark theme toggle
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    } else {
      document.documentElement.classList.remove('dark');
      setIsDark(false);
    }
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
    <section 
      id="about" 
      className="relative py-28 px-6 bg-[#f6f7fb] dark:bg-[#0a0c14] text-[#0a0c14] dark:text-[#f3f4f8] transition-colors duration-300 overflow-hidden font-sora"
    >
      {/* Faint 34px Grid Pattern Overlay in Low-Opacity Violet */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.05] dark:opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(to right, #a880f5 1px, transparent 1px), linear-gradient(to bottom, #a880f5 1px, transparent 1px)`,
          backgroundSize: '34px 34px',
        }}
      />

      {/* Subtle Studio Violet Radial Glows */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-[#a880f5]/10 dark:bg-[#a880f5]/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 -right-40 w-96 h-96 bg-[#c9aeff]/10 dark:bg-[#c9aeff]/6 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-12 relative z-10">
        
        {/* Top Header Bar: Status Badge, Section Tag & Top-Right Light/Dark Toggle */}
        <div className="flex items-center justify-between border-b border-[#a880f5]/15 dark:border-[#a880f5]/10 pb-5">
          <div className="flex items-center gap-3">
            {/* Pill Shape Status Tag */}
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-white dark:bg-[#10131f] border border-[#a880f5]/20 text-[#a880f5] shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#a880f5] animate-pulse" />
              <span>01 // ABOUT HERO</span>
            </span>

            <span className="hidden sm:inline-block text-xs font-mono text-[#4e556e] dark:text-[#949ab2]">
              SYSTEM ARCHITECTURE &amp; EMPIRICAL DATA SCIENCE
            </span>
          </div>

          {/* Sun/Moon Theme Toggle (Top Right) */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme Mode"
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white dark:bg-[#10131f] border border-[#a880f5]/20 hover:border-[#a880f5] text-[#0a0c14] dark:text-[#f3f4f8] hover:text-[#a880f5] dark:hover:text-[#c9aeff] transition-all duration-200 text-xs font-mono shadow-xs group"
          >
            {isDark ? (
              <>
                <Sun className="w-3.5 h-3.5 text-[#c9aeff] group-hover:rotate-45 transition-transform" />
                <span className="hidden md:inline">Light Mode</span>
              </>
            ) : (
              <>
                <Moon className="w-3.5 h-3.5 text-[#8b5cf6] group-hover:-rotate-12 transition-transform" />
                <span className="hidden md:inline">Dark Mode</span>
              </>
            )}
          </button>
        </div>

        {/* Two-Column Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column: Sticky Card (Roughly 290px Wide) */}
          <div className="lg:col-span-4 w-full lg:max-w-[290px] lg:sticky lg:top-28">
            <div className="rounded-[14px] bg-white dark:bg-[#10131f] border border-[#a880f5]/20 p-5 shadow-xl shadow-black/5 dark:shadow-black/40 space-y-5 transition-all">
              
              {/* Illustrated 32-Bit Pixel-Art Avatar */}
              <div className="w-full flex justify-center">
                <PixelAvatar className="w-full" />
              </div>

              {/* Developer Metadata & Pill Badges */}
              <div className="space-y-3 pt-1 border-t border-[#a880f5]/15">
                <div className="space-y-0.5">
                  <h3 className="text-base font-bold tracking-tight text-[#0a0c14] dark:text-white font-sora">
                    Muhammad Rohaan Khan
                  </h3>
                  <p className="text-xs font-mono text-[#a880f5] font-medium">
                    @muhammadrohaankhan007
                  </p>
                </div>

                {/* Pill Status Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-mono bg-[#f0f2f9] dark:bg-[#161a2b] border border-[#a880f5]/20 text-[#0a0c14] dark:text-[#f3f4f8]">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  <span>Available for Architecture</span>
                </div>

                {/* Core Stack Pills in JetBrains Mono */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {['Next.js', 'C++', 'Python', 'PySpark', '.NET'].map((tag, tIdx) => (
                    <span 
                      key={tIdx}
                      className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-[#f0f2f9] dark:bg-[#161a2b] border border-[#a880f5]/15 text-[#4e556e] dark:text-[#949ab2]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Quick Profile Pill Links */}
                <div className="grid grid-cols-2 gap-2 pt-2">
                  <a
                    href="https://github.com/muhammadrohaankhan007"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-full border border-[#a880f5]/25 hover:border-[#a880f5] bg-transparent hover:bg-[#a880f5]/10 text-xs font-mono font-medium text-[#0a0c14] dark:text-[#f3f4f8] hover:text-[#a880f5] dark:hover:text-[#c9aeff] transition-all duration-200"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/muhammadrohaankhan/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-full border border-[#a880f5]/25 hover:border-[#a880f5] bg-transparent hover:bg-[#a880f5]/10 text-xs font-mono font-medium text-[#0a0c14] dark:text-[#f3f4f8] hover:text-[#a880f5] dark:hover:text-[#c9aeff] transition-all duration-200"
                  >
                    <LinkedinIcon className="w-3.5 h-3.5" />
                    <span>LinkedIn</span>
                  </a>
                </div>

              </div>

            </div>
          </div>

          {/* Right Column: Refined Typography, Headline, Primary Exposition & Technical Pillars */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Main Headline & Badge */}
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-semibold bg-[#a880f5]/10 border border-[#a880f5]/30 text-[#a880f5] dark:text-[#c9aeff]">
                <Sparkles className="w-3.5 h-3.5 text-[#a880f5]" />
                <span>EXPOSITION // PRACTICE</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-[800] tracking-tight leading-[1.15] text-[#0a0c14] dark:text-white font-sora">
                Software Engineering &amp;{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8b5cf6] via-[#a880f5] to-[#c9aeff]">
                  Applied Data Analytics
                </span>
              </h1>
            </div>

            {/* Primary Exposition (Sora regular, max-width ~64ch, line-height 1.65+) */}
            <div className="space-y-5 max-w-[64ch] font-sora font-normal text-base sm:text-[17px] leading-[1.75] text-[#4e556e] dark:text-[#949ab2]">
              <p>
                &ldquo;My technical practice centers on full-stack system architecture and empirical data science. Leveraging software enginerring, Data SCience &amp; Machine learning, I construct high-throughput applications designed for computational efficiency and long-term maintainability. My work spans the development of responsive web ecosystems, the implementation of predictive machine learning models, and the optimization of digital logic components. By grounding software design in fundamental computer science principles, I bridge raw algorithmic logic with dependable, production-grade tools.&rdquo;
              </p>
            </div>

            {/* Secondary Paragraph / Resilient Infrastructure Callout (14px Radius Card, #10131f) */}
            <div className="max-w-[64ch] rounded-[14px] bg-white dark:bg-[#10131f] border-l-4 border-l-[#a880f5] border border-[#a880f5]/20 p-5 shadow-md">
              <p className="font-sora text-sm sm:text-base leading-[1.7] text-[#0a0c14] dark:text-[#f3f4f8] font-medium">
                The objective is not merely code that executes, but resilient infrastructure and structured data pipelines that remain performant under operational load.
              </p>
            </div>

            {/* Rounded Pill Buttons for GitHub and LinkedIn */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="https://github.com/muhammadrohaankhan007"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full border border-[#a880f5]/40 dark:border-[#a880f5]/30 hover:border-[#a880f5] text-[#0a0c14] dark:text-[#f3f4f8] hover:text-[#8b5cf6] dark:hover:text-[#c9aeff] hover:bg-[#a880f5]/10 text-sm font-mono font-semibold transition-all duration-200 shadow-xs hover:shadow-md hover:-translate-y-0.5 group"
              >
                <GithubIcon className="w-4 h-4 text-[#a880f5] group-hover:scale-110 transition-transform" />
                <span>GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-stone-400 group-hover:text-[#a880f5] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>

              <a
                href="https://www.linkedin.com/in/muhammadrohaankhan/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full border border-[#a880f5]/40 dark:border-[#a880f5]/30 hover:border-[#a880f5] text-[#0a0c14] dark:text-[#f3f4f8] hover:text-[#8b5cf6] dark:hover:text-[#c9aeff] hover:bg-[#a880f5]/10 text-sm font-mono font-semibold transition-all duration-200 shadow-xs hover:shadow-md hover:-translate-y-0.5 group"
              >
                <LinkedinIcon className="w-4 h-4 text-[#a880f5] group-hover:scale-110 transition-transform" />
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-stone-400 group-hover:text-[#a880f5] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
