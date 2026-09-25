'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { 
  Play, 
  Pause, 
  Maximize2, 
  ExternalLink, 
  Volume2, 
  VolumeX, 
  Award, 
  Radio, 
  Cpu, 
  Flame, 
  Globe2, 
  X, 
  ChevronRight,
  Sparkles,
  Layers
} from 'lucide-react';

/* ─── Media State Types ─── */
type FortyGuardSlide = 'video' | 'cert';
type RobofestSlide = 'photo' | 'cert';

export default function Achievements() {
  // Intersection Observer for lazy/instant scroll autoplay without buffering
  const podcastContainerRef = useRef<HTMLDivElement>(null);
  const fortyGuardContainerRef = useRef<HTMLDivElement>(null);
  
  const [podcastInView, setPodcastInView] = useState<boolean>(false);
  const [fortyGuardInView, setFortyGuardInView] = useState<boolean>(false);

  // FortyGuard Hackathon state: 6-second auto transition
  const [fortyGuardSlide, setFortyGuardSlide] = useState<FortyGuardSlide>('video');
  const [fortyGuardPaused, setFortyGuardPaused] = useState<boolean>(false);
  const [fortyGuardProgress, setFortyGuardProgress] = useState<number>(0);

  // Robofest '25 state: 5-second auto transition
  const [robofestSlide, setRobofestSlide] = useState<RobofestSlide>('photo');
  const [robofestPaused, setRobofestPaused] = useState<boolean>(false);
  const [robofestProgress, setRobofestProgress] = useState<number>(0);

  // Fullscreen Lightbox Modal state
  const [lightboxImage, setLightboxImage] = useState<{ src: string; title: string; subtitle: string } | null>(null);

  // Unmute notification state for podcast
  const [podcastMuted, setPodcastMuted] = useState<boolean>(true);

  /* ─── Intersection Observer for Seamless Autoplay ─── */
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '250px 0px', // Pre-load & trigger smoothly right before scrolling into view
      threshold: 0.15,
    };

    const podcastObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setPodcastInView(true);
        }
      });
    }, observerOptions);

    const fortyGuardObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setFortyGuardInView(true);
        }
      });
    }, observerOptions);

    if (podcastContainerRef.current) podcastObserver.observe(podcastContainerRef.current);
    if (fortyGuardContainerRef.current) fortyGuardObserver.observe(fortyGuardContainerRef.current);

    return () => {
      podcastObserver.disconnect();
      fortyGuardObserver.disconnect();
    };
  }, []);

  /* ─── FortyGuard Hackathon: 6-Second Smooth Transition Timer ─── */
  useEffect(() => {
    if (fortyGuardPaused) return;

    const intervalTime = 100; // Tick every 100ms for smooth progress bar
    const totalDuration = 6000; // 6 seconds per slide

    const timer = setInterval(() => {
      setFortyGuardProgress((prev) => {
        if (prev >= 100) {
          setFortyGuardSlide((curr) => (curr === 'video' ? 'cert' : 'video'));
          return 0;
        }
        return prev + (intervalTime / totalDuration) * 100;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [fortyGuardPaused]);

  /* ─── Robofest '25: 5-Second Smooth Transition Timer ─── */
  useEffect(() => {
    if (robofestPaused) return;

    const intervalTime = 100; // Tick every 100ms
    const totalDuration = 5000; // 5 seconds per slide

    const timer = setInterval(() => {
      setRobofestProgress((prev) => {
        if (prev >= 100) {
          setRobofestSlide((curr) => (curr === 'photo' ? 'cert' : 'photo'));
          return 0;
        }
        return prev + (intervalTime / totalDuration) * 100;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [robofestPaused]);

  return (
    <section 
      id="achievements" 
      className="w-full py-24 sm:py-32 px-4 sm:px-6 relative border-t border-stone-200 dark:border-[#1a1d2e] bg-[var(--background)] transition-colors duration-300"
    >
      {/* Background ambient subtle violet glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-96 bg-[#8b5cf6]/5 dark:bg-[#a880f5]/5 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* ─── Section Header ─── */}
        <div className="mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-mono font-semibold uppercase tracking-wider bg-[#8b5cf6]/10 dark:bg-[#a880f5]/10 text-[#8b5cf6] dark:text-[#c9aeff] border border-[#8b5cf6]/20 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Honors & Deployments</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-sora tracking-tight text-stone-900 dark:text-white leading-[1.15]">
            Achievements & Fieldwork
          </h2>
          
          <p className="mt-4 text-base sm:text-lg text-stone-600 dark:text-[#949ab2] max-w-2xl leading-relaxed">
            From technical keynotes with AI enterprise leaders to hackathons tackling continental rail thermodynamics, competitive autonomous robotics, and planetary climate modelling.
          </p>
        </div>

        {/* ─── Cards Container ─── */}
        <div className="space-y-24 sm:space-y-32">

          {/* ═════════════════════════════════════════════════════════════════════
              CARD 1: Podcast with Fian Febrian (Maleo AI)
             ═════════════════════════════════════════════════════════════════════ */}
          <article className="group" ref={podcastContainerRef}>
            {/* Top Meta Header */}
            <div className="flex items-center justify-between text-xs sm:text-sm font-mono tracking-wider mb-2.5">
              <span className="font-bold text-[#8b5cf6] dark:text-[#a880f5] uppercase flex items-center gap-1.5">
                <Radio className="w-3.5 h-3.5 animate-pulse" />
                FOUNDER PODCAST // AI SYSTEMS
              </span>
              <span className="text-stone-400 dark:text-stone-500 font-medium">
                NOVEMBER 2024
              </span>
            </div>

            {/* Title */}
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold font-sora text-stone-900 dark:text-white tracking-tight leading-snug">
              Strategic AI Deployment with Fian Febrian (Co-Founder, Maleo AI)
            </h3>

            {/* Top Divider */}
            <div className="w-full h-px bg-stone-200 dark:bg-[#202436] my-5 sm:my-6" />

            {/* Media Box */}
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-black border border-stone-200 dark:border-[#22273a] shadow-xl shadow-stone-900/5 dark:shadow-black/60 aspect-[16/9] sm:aspect-[16/9.2]">
              {/* YouTube Iframe with zero-buffer instant scroll autoplay */}
              {podcastInView ? (
                <iframe
                  className="w-full h-full object-cover"
                  src={`https://www.youtube.com/embed/ngNqBfvwyfs?autoplay=1&mute=1&playsinline=1&enablejsapi=1&rel=0`}
                  title="Podcast with Fian Febrian (Co-Founder, Maleo AI)"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              ) : (
                /* Pre-scroll placeholder */
                <div className="w-full h-full flex flex-col items-center justify-center bg-stone-950 text-stone-400">
                  <div className="w-16 h-16 rounded-full bg-[#8b5cf6]/20 border border-[#8b5cf6]/40 flex items-center justify-center text-[#c9aeff]">
                    <Play className="w-7 h-7 translate-x-0.5 fill-current" />
                  </div>
                  <span className="mt-4 text-xs font-mono text-stone-500">Buffering-Free Stream Ready</span>
                </div>
              )}

              {/* Floating Status & Direct Link Badge */}
              <div className="absolute top-4 right-4 z-20 flex items-center gap-2 pointer-events-auto">
                <a
                  href="https://www.youtube.com/watch?v=ngNqBfvwyfs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-medium bg-black/75 hover:bg-black/90 text-stone-200 hover:text-white backdrop-blur-md border border-white/10 transition-all shadow-lg hover:scale-105"
                  title="Open video on YouTube"
                >
                  <span>Watch on YouTube</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#a880f5]" />
                </a>
              </div>

              {/* Autoplay Active Notice */}
              <div className="absolute bottom-4 left-4 z-20 pointer-events-none">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-mono bg-black/70 backdrop-blur-md text-stone-300 border border-white/10 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  Auto-starts on scroll (Muted for autoplay compliance)
                </span>
              </div>
            </div>

            {/* Bottom Divider */}
            <div className="w-full h-px bg-stone-200 dark:bg-[#202436] my-5 sm:my-6" />

            {/* Description */}
            <p className="text-stone-700 dark:text-[#a1a8c0] text-sm sm:text-base leading-relaxed">
              Hosted an executive technical session with <strong className="text-stone-900 dark:text-white font-semibold">Fian Febrian</strong>, Co-founder of <strong className="text-[#8b5cf6] dark:text-[#c9aeff] font-semibold">Maleo AI</strong>: <em className="text-stone-800 dark:text-stone-200">&ldquo;The Market is Moving, Are You Keeping Pace?&rdquo;</em> Discussed deploying tailored enterprise AI architectures across US, European, and APAC enterprises to dismantle costly operational bottlenecks, automate high-friction workflows, and unlock measurable competitive advantage. Explored real-world migration from raw LLM prototypes into resilient production systems.
            </p>

            {/* Engineering Brief Tag Footer */}
            <div className="mt-5 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
              <span className="tracking-widest uppercase text-stone-400 dark:text-stone-500 font-semibold">
                ENGINEERING BRIEF
              </span>
              <div className="flex flex-wrap gap-2">
                <span className="px-2.5 py-1 rounded-md bg-stone-100 dark:bg-[#141726] border border-stone-200 dark:border-[#22273a] text-stone-600 dark:text-[#949ab2]">
                  Enterprise AI Systems
                </span>
                <span className="px-2.5 py-1 rounded-md bg-stone-100 dark:bg-[#141726] border border-stone-200 dark:border-[#22273a] text-stone-600 dark:text-[#949ab2]">
                  Workflow Automation
                </span>
                <span className="px-2.5 py-1 rounded-md bg-stone-100 dark:bg-[#141726] border border-stone-200 dark:border-[#22273a] text-stone-600 dark:text-[#949ab2]">
                  Maleo AI
                </span>
              </div>
            </div>
          </article>


          {/* ═════════════════════════════════════════════════════════════════════
              CARD 2: FortyGuard Hackathon — ThermoRail (6s Video <-> Cert Transition)
             ═════════════════════════════════════════════════════════════════════ */}
          <article className="group" ref={fortyGuardContainerRef}>
            {/* Top Meta Header */}
            <div className="flex items-center justify-between text-xs sm:text-sm font-mono tracking-wider mb-2.5">
              <span className="font-bold text-[#8b5cf6] dark:text-[#a880f5] uppercase flex items-center gap-1.5">
                <Flame className="w-3.5 h-3.5 text-amber-500" />
                GLOBAL HACKATHON // CLIMATE & INFRASTRUCTURE
              </span>
              <span className="text-stone-400 dark:text-stone-500 font-medium">
                AUGUST 2025
              </span>
            </div>

            {/* Title */}
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold font-sora text-stone-900 dark:text-white tracking-tight leading-snug">
              ThermoRail — FortyGuard Global Infrastructure Hackathon
            </h3>

            {/* Top Divider */}
            <div className="w-full h-px bg-stone-200 dark:bg-[#202436] my-5 sm:my-6" />

            {/* Media Box with 6s Smooth Transition & Interactive Controls */}
            <div 
              className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-black border border-stone-200 dark:border-[#22273a] shadow-xl shadow-stone-900/5 dark:shadow-black/60 aspect-[16/9] sm:aspect-[16/9.2]"
              onMouseEnter={() => setFortyGuardPaused(true)}
              onMouseLeave={() => setFortyGuardPaused(false)}
            >
              {/* Layer 1: Embedded YouTube Pitch Video (Plays Muted, loops/runs for 6s) */}
              <div 
                className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${
                  fortyGuardSlide === 'video' ? 'opacity-100 z-10 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'
                }`}
              >
                {fortyGuardInView ? (
                  <iframe
                    className="w-full h-full object-cover"
                    src={`https://www.youtube.com/embed/35yxaieE6Sw?autoplay=1&mute=1&playsinline=1&enablejsapi=1&rel=0`}
                    title="ThermoRail Pitch - FortyGuard Hackathon"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-stone-950 text-stone-500">
                    <span className="text-xs font-mono">Loading Pitch Telemetry...</span>
                  </div>
                )}
              </div>

              {/* Layer 2: FortyGuard Hackathon Certificate Image (Crisp, formatted, full display) */}
              <div 
                className={`absolute inset-0 w-full h-full bg-stone-950 flex items-center justify-center p-3 sm:p-5 transition-opacity duration-700 ease-in-out cursor-pointer ${
                  fortyGuardSlide === 'cert' ? 'opacity-100 z-10 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'
                }`}
                onClick={() => setLightboxImage({
                  src: '/fortyguard certificate.jpg',
                  title: 'FortyGuard Hackathon Certificate',
                  subtitle: 'Official Recognition for ThermoRail — Planetary Infrastructure Hackathon'
                })}
              >
                {/* Subtle blurred ambient backdrop */}
                <div 
                  className="absolute inset-0 bg-cover bg-center opacity-20 blur-xl scale-110"
                  style={{ backgroundImage: "url('/fortyguard certificate.jpg')" }}
                />
                
                <div className="relative max-w-full max-h-full flex items-center justify-center group/cert">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/fortyguard certificate.jpg"
                    alt="FortyGuard Hackathon Certificate - ThermoRail"
                    className="max-h-[82%] sm:max-h-[86%] w-auto object-contain rounded-lg shadow-2xl border border-white/10 transition-transform duration-300 group-hover/cert:scale-[1.02]"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/cert:opacity-100 transition-opacity bg-black/30 rounded-lg">
                    <span className="px-3 py-1.5 rounded-full bg-black/80 text-white text-xs font-mono flex items-center gap-1.5 backdrop-blur-md shadow-lg">
                      <Maximize2 className="w-3.5 h-3.5 text-[#a880f5]" />
                      Click to Expand Certificate
                    </span>
                  </div>
                </div>
              </div>

              {/* Top Controls: Interactive Switch Tabs & Timer Indicator */}
              <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between pointer-events-none">
                {/* Switch Pills */}
                <div className="flex items-center gap-1.5 bg-black/75 backdrop-blur-md p-1 rounded-full border border-white/10 pointer-events-auto shadow-lg">
                  <button
                    onClick={() => {
                      setFortyGuardSlide('video');
                      setFortyGuardProgress(0);
                    }}
                    className={`px-3 py-1 rounded-full text-xs font-mono font-medium transition-all ${
                      fortyGuardSlide === 'video'
                        ? 'bg-[#8b5cf6] text-white shadow-xs'
                        : 'text-stone-300 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    1. Video Pitch
                  </button>
                  <button
                    onClick={() => {
                      setFortyGuardSlide('cert');
                      setFortyGuardProgress(0);
                    }}
                    className={`px-3 py-1 rounded-full text-xs font-mono font-medium transition-all ${
                      fortyGuardSlide === 'cert'
                        ? 'bg-[#8b5cf6] text-white shadow-xs'
                        : 'text-stone-300 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    2. Certificate
                  </button>
                </div>

                {/* Pause / Play Auto-cycle toggle */}
                <div className="flex items-center gap-2 pointer-events-auto">
                  <button
                    onClick={() => setFortyGuardPaused(!fortyGuardPaused)}
                    className="p-1.5 rounded-full bg-black/75 hover:bg-black/90 text-stone-300 hover:text-white backdrop-blur-md border border-white/10 transition-colors shadow-lg"
                    title={fortyGuardPaused ? 'Resume 6s auto-cycle' : 'Pause 6s auto-cycle'}
                  >
                    {fortyGuardPaused ? (
                      <Play className="w-3.5 h-3.5 fill-current text-amber-400" />
                    ) : (
                      <Pause className="w-3.5 h-3.5" />
                    )}
                  </button>
                  <a
                    href="https://www.youtube.com/watch?v=35yxaieE6Sw"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-full bg-black/75 hover:bg-black/90 text-stone-300 hover:text-white backdrop-blur-md border border-white/10 transition-colors shadow-lg"
                    title="Watch pitch on YouTube"
                  >
                    <ExternalLink className="w-3.5 h-3.5 text-[#a880f5]" />
                  </a>
                </div>
              </div>

              {/* Bottom Smooth 6-Second Progress Bar */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10 z-20">
                <div 
                  className="h-full bg-gradient-to-r from-[#8b5cf6] to-[#c9aeff] transition-all duration-100 ease-linear"
                  style={{ width: `${fortyGuardProgress}%` }}
                />
              </div>

              {/* Bottom State Indicator Pill */}
              <div className="absolute bottom-3 left-4 z-20 pointer-events-none">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] font-mono bg-black/75 backdrop-blur-md text-stone-300 border border-white/10">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#a880f5]" />
                  {fortyGuardPaused ? 'Auto-transition paused' : `Transitioning in ${Math.ceil((6000 - (fortyGuardProgress / 100) * 6000) / 1000)}s`}
                </span>
              </div>
            </div>

            {/* Bottom Divider */}
            <div className="w-full h-px bg-stone-200 dark:bg-[#202436] my-5 sm:my-6" />

            {/* Description Narrative based on YouTube Script */}
            <p className="text-stone-700 dark:text-[#a1a8c0] text-sm sm:text-base leading-relaxed">
              In extreme summer heatwaves, railway steel tracks surge past 60°C, causing catastrophic buckling that leads to multi-million-dollar derailments. Built alongside co-presenter <strong className="text-stone-900 dark:text-white font-medium">Mubashir</strong>, <strong className="text-[#8b5cf6] dark:text-[#c9aeff] font-semibold">ThermoRail</strong> bridges the gap between regional meteorological data and track-level physical heat. By ingesting <strong className="text-stone-900 dark:text-white font-medium">FortyGuard&apos;s</strong> hyperlocal thermal feeds across 45,955 segments (125,000 miles of track), ThermoRail runs thermodynamic heat-transfer calculations to predict exact steel surface heat before critical buckling thresholds are crossed, automatically dispatching speed restrictions to railway operators with zero hardware overhead.
            </p>

            {/* Engineering Brief Tag Footer */}
            <div className="mt-5 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
              <span className="tracking-widest uppercase text-stone-400 dark:text-stone-500 font-semibold">
                ENGINEERING BRIEF
              </span>
              <div className="flex flex-wrap gap-2">
                <span className="px-2.5 py-1 rounded-md bg-stone-100 dark:bg-[#141726] border border-stone-200 dark:border-[#22273a] text-stone-600 dark:text-[#949ab2]">
                  Hyperlocal Thermal Telemetry
                </span>
                <span className="px-2.5 py-1 rounded-md bg-stone-100 dark:bg-[#141726] border border-stone-200 dark:border-[#22273a] text-stone-600 dark:text-[#949ab2]">
                  Thermodynamic Modeling
                </span>
                <span className="px-2.5 py-1 rounded-md bg-stone-100 dark:bg-[#141726] border border-stone-200 dark:border-[#22273a] text-stone-600 dark:text-[#949ab2]">
                  FortyGuard API
                </span>
              </div>
            </div>
          </article>


          {/* ═════════════════════════════════════════════════════════════════════
              CARD 3: Robofest '25 — Autonomous Robotics Championship (5s Photo <-> Cert)
             ═════════════════════════════════════════════════════════════════════ */}
          <article className="group">
            {/* Top Meta Header */}
            <div className="flex items-center justify-between text-xs sm:text-sm font-mono tracking-wider mb-2.5">
              <span className="font-bold text-[#8b5cf6] dark:text-[#a880f5] uppercase flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5" />
                ACADEMIC CHAMPIONSHIP // STEAM & ROBOTICS
              </span>
              <span className="text-stone-400 dark:text-stone-500 font-medium">
                JANUARY 2025
              </span>
            </div>

            {/* Title */}
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold font-sora text-stone-900 dark:text-white tracking-tight leading-snug">
              Robofest &apos;25 — Autonomous Robotics Championship Host &amp; Mentor
            </h3>

            {/* Top Divider */}
            <div className="w-full h-px bg-stone-200 dark:bg-[#202436] my-5 sm:my-6" />

            {/* Media Box with 5s Smooth Crossfade Transition */}
            <div 
              className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-black border border-stone-200 dark:border-[#22273a] shadow-xl shadow-stone-900/5 dark:shadow-black/60 aspect-[16/9] sm:aspect-[16/9.2]"
              onMouseEnter={() => setRobofestPaused(true)}
              onMouseLeave={() => setRobofestPaused(false)}
            >
              {/* Slide 1: Robofest Group Photo */}
              <div 
                className={`absolute inset-0 w-full h-full bg-stone-950 flex items-center justify-center p-3 sm:p-5 transition-opacity duration-700 ease-in-out cursor-pointer ${
                  robofestSlide === 'photo' ? 'opacity-100 z-10 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'
                }`}
                onClick={() => setLightboxImage({
                  src: '/robofest group photo.png',
                  title: "Robofest '25 — Organizing Committee & Participants",
                  subtitle: 'School, college & university robotics championship arena'
                })}
              >
                {/* Ambient blur backdrop */}
                <div 
                  className="absolute inset-0 bg-cover bg-center opacity-25 blur-xl scale-110"
                  style={{ backgroundImage: "url('/robofest group photo.png')" }}
                />

                <div className="relative max-w-full max-h-full flex items-center justify-center group/photo">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/robofest group photo.png"
                    alt="Robofest 2025 Group Photo"
                    className="max-h-[82%] sm:max-h-[86%] w-auto object-contain rounded-lg shadow-2xl border border-white/10 transition-transform duration-300 group-hover/photo:scale-[1.02]"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/photo:opacity-100 transition-opacity bg-black/30 rounded-lg">
                    <span className="px-3 py-1.5 rounded-full bg-black/80 text-white text-xs font-mono flex items-center gap-1.5 backdrop-blur-md shadow-lg">
                      <Maximize2 className="w-3.5 h-3.5 text-[#a880f5]" />
                      Click to Expand Photo
                    </span>
                  </div>
                </div>
              </div>

              {/* Slide 2: Robofest Certificate */}
              <div 
                className={`absolute inset-0 w-full h-full bg-stone-950 flex items-center justify-center p-3 sm:p-5 transition-opacity duration-700 ease-in-out cursor-pointer ${
                  robofestSlide === 'cert' ? 'opacity-100 z-10 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'
                }`}
                onClick={() => setLightboxImage({
                  src: '/robofest certificate.png',
                  title: "Robofest '25 Official Certificate",
                  subtitle: 'Recognition for organizing and mentoring autonomous robotics competitions'
                })}
              >
                {/* Ambient blur backdrop */}
                <div 
                  className="absolute inset-0 bg-cover bg-center opacity-25 blur-xl scale-110"
                  style={{ backgroundImage: "url('/robofest certificate.png')" }}
                />

                <div className="relative max-w-full max-h-full flex items-center justify-center group/rcert">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/robofest certificate.png"
                    alt="Robofest 2025 Certificate"
                    className="max-h-[82%] sm:max-h-[86%] w-auto object-contain rounded-lg shadow-2xl border border-white/10 transition-transform duration-300 group-hover/rcert:scale-[1.02]"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/rcert:opacity-100 transition-opacity bg-black/30 rounded-lg">
                    <span className="px-3 py-1.5 rounded-full bg-black/80 text-white text-xs font-mono flex items-center gap-1.5 backdrop-blur-md shadow-lg">
                      <Maximize2 className="w-3.5 h-3.5 text-[#a880f5]" />
                      Click to Expand Certificate
                    </span>
                  </div>
                </div>
              </div>

              {/* Top Controls: Interactive Switch Tabs & Timer Controls */}
              <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between pointer-events-none">
                {/* Switch Pills */}
                <div className="flex items-center gap-1.5 bg-black/75 backdrop-blur-md p-1 rounded-full border border-white/10 pointer-events-auto shadow-lg">
                  <button
                    onClick={() => {
                      setRobofestSlide('photo');
                      setRobofestProgress(0);
                    }}
                    className={`px-3 py-1 rounded-full text-xs font-mono font-medium transition-all ${
                      robofestSlide === 'photo'
                        ? 'bg-[#8b5cf6] text-white shadow-xs'
                        : 'text-stone-300 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    1. Delegation Photo
                  </button>
                  <button
                    onClick={() => {
                      setRobofestSlide('cert');
                      setRobofestProgress(0);
                    }}
                    className={`px-3 py-1 rounded-full text-xs font-mono font-medium transition-all ${
                      robofestSlide === 'cert'
                        ? 'bg-[#8b5cf6] text-white shadow-xs'
                        : 'text-stone-300 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    2. Certificate
                  </button>
                </div>

                {/* Pause / Play Auto-cycle toggle */}
                <div className="flex items-center gap-2 pointer-events-auto">
                  <button
                    onClick={() => setRobofestPaused(!robofestPaused)}
                    className="p-1.5 rounded-full bg-black/75 hover:bg-black/90 text-stone-300 hover:text-white backdrop-blur-md border border-white/10 transition-colors shadow-lg"
                    title={robofestPaused ? 'Resume 5s auto-cycle' : 'Pause 5s auto-cycle'}
                  >
                    {robofestPaused ? (
                      <Play className="w-3.5 h-3.5 fill-current text-amber-400" />
                    ) : (
                      <Pause className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Bottom Smooth 5-Second Progress Bar */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10 z-20">
                <div 
                  className="h-full bg-gradient-to-r from-[#8b5cf6] to-[#c9aeff] transition-all duration-100 ease-linear"
                  style={{ width: `${robofestProgress}%` }}
                />
              </div>

              {/* Bottom State Indicator Pill */}
              <div className="absolute bottom-3 left-4 z-20 pointer-events-none">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] font-mono bg-black/75 backdrop-blur-md text-stone-300 border border-white/10">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#a880f5]" />
                  {robofestPaused ? 'Auto-transition paused' : `Transitioning in ${Math.ceil((5000 - (robofestProgress / 100) * 5000) / 1000)}s`}
                </span>
              </div>
            </div>

            {/* Bottom Divider */}
            <div className="w-full h-px bg-stone-200 dark:bg-[#202436] my-5 sm:my-6" />

            {/* Description */}
            <p className="text-stone-700 dark:text-[#a1a8c0] text-sm sm:text-base leading-relaxed">
              Successfully hosted and led <strong className="text-stone-900 dark:text-white font-semibold">Robofest 2025</strong>, an extensive cross-academic robotics championship uniting school, college, and university engineering cohorts. Led competitions centered around designing, building, and programming fully autonomous robots grounded in STEAM and Computer Science principles—overseeing intensive challenges including <strong className="text-[#8b5cf6] dark:text-[#c9aeff] font-medium">autonomous line-following robotics</strong>, <strong className="text-stone-900 dark:text-white font-medium">Robo Sumo ring combats</strong>, and sensor-driven obstacle navigation systems.
            </p>

            {/* Engineering Brief Tag Footer */}
            <div className="mt-5 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
              <span className="tracking-widest uppercase text-stone-400 dark:text-stone-500 font-semibold">
                ENGINEERING BRIEF
              </span>
              <div className="flex flex-wrap gap-2">
                <span className="px-2.5 py-1 rounded-md bg-stone-100 dark:bg-[#141726] border border-stone-200 dark:border-[#22273a] text-stone-600 dark:text-[#949ab2]">
                  Autonomous Systems
                </span>
                <span className="px-2.5 py-1 rounded-md bg-stone-100 dark:bg-[#141726] border border-stone-200 dark:border-[#22273a] text-stone-600 dark:text-[#949ab2]">
                  Robo Sumo & Line Trackers
                </span>
                <span className="px-2.5 py-1 rounded-md bg-stone-100 dark:bg-[#141726] border border-stone-200 dark:border-[#22273a] text-stone-600 dark:text-[#949ab2]">
                  STEAM Championship
                </span>
              </div>
            </div>
          </article>


          {/* ═════════════════════════════════════════════════════════════════════
              CARD 4: Iterate '26 AI Startup Sprint — Global Climate Hub
             ═════════════════════════════════════════════════════════════════════ */}
          <article className="group">
            {/* Top Meta Header */}
            <div className="flex items-center justify-between text-xs sm:text-sm font-mono tracking-wider mb-2.5">
              <span className="font-bold text-[#8b5cf6] dark:text-[#a880f5] uppercase flex items-center gap-1.5">
                <Globe2 className="w-3.5 h-3.5" />
                STARTUP SPRINT // PREDICTIVE CLIMATE ML
              </span>
              <span className="text-stone-400 dark:text-stone-500 font-medium">
                FEBRUARY 2026
              </span>
            </div>

            {/* Title */}
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold font-sora text-stone-900 dark:text-white tracking-tight leading-snug">
              Iterate &apos;26 AI Startup Sprint — Global Climate Hub
            </h3>

            {/* Top Divider */}
            <div className="w-full h-px bg-stone-200 dark:bg-[#202436] my-5 sm:my-6" />

            {/* Media Box: Certificate Display with Click-to-Zoom */}
            <div 
              className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-stone-950 border border-stone-200 dark:border-[#22273a] shadow-xl shadow-stone-900/5 dark:shadow-black/60 aspect-[16/9] sm:aspect-[16/9.2] flex items-center justify-center p-3 sm:p-5 cursor-pointer group/itcert"
              onClick={() => setLightboxImage({
                src: '/iterate certifcate.png',
                title: "Iterate '26 AI Startup Sprint Certificate",
                subtitle: 'Global Climate Hub — Machine learning architecture for ecosystem modeling'
              })}
            >
              {/* Ambient blur backdrop */}
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-25 blur-xl scale-110"
                style={{ backgroundImage: "url('/iterate certifcate.png')" }}
              />

              <div className="relative max-w-full max-h-full flex items-center justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/iterate certifcate.png"
                  alt="Iterate '26 AI Startup Sprint Certificate"
                  className="max-h-[82%] sm:max-h-[86%] w-auto object-contain rounded-lg shadow-2xl border border-white/10 transition-transform duration-300 group-hover/itcert:scale-[1.02]"
                />
                
                {/* Hover overlay hint */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/itcert:opacity-100 transition-opacity bg-black/30 rounded-lg">
                  <span className="px-3.5 py-1.5 rounded-full bg-black/80 text-white text-xs font-mono flex items-center gap-1.5 backdrop-blur-md shadow-lg">
                    <Maximize2 className="w-3.5 h-3.5 text-[#a880f5]" />
                    Click to Expand Certificate
                  </span>
                </div>
              </div>

              {/* Top Badge */}
              <div className="absolute top-4 left-4 z-20 pointer-events-none">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-black/75 backdrop-blur-md text-emerald-400 border border-emerald-500/20 shadow-md">
                  <Award className="w-3.5 h-3.5" />
                  Official Sprint Participant
                </span>
              </div>
            </div>

            {/* Bottom Divider */}
            <div className="w-full h-px bg-stone-200 dark:bg-[#202436] my-5 sm:my-6" />

            {/* Description */}
            <p className="text-stone-700 dark:text-[#a1a8c0] text-sm sm:text-base leading-relaxed">
              Participant in the intensive <strong className="text-stone-900 dark:text-white font-semibold">Iterate &apos;26 AI Startup Sprint</strong>. Architected an enterprise-grade <strong className="text-[#8b5cf6] dark:text-[#c9aeff] font-semibold">Global Climate Hub</strong> engineered to map, simulate, and predict cascading downstream ramifications of global climate shifts across vulnerable ecosystems. Applied advanced predictive machine learning architectures to model agricultural crop yield volatility under thermal stress and forecast multi-decade glacier mass degradation metrics.
            </p>

            {/* Engineering Brief Tag Footer */}
            <div className="mt-5 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
              <span className="tracking-widest uppercase text-stone-400 dark:text-stone-500 font-semibold">
                ENGINEERING BRIEF
              </span>
              <div className="flex flex-wrap gap-2">
                <span className="px-2.5 py-1 rounded-md bg-stone-100 dark:bg-[#141726] border border-stone-200 dark:border-[#22273a] text-stone-600 dark:text-[#949ab2]">
                  Predictive ML
                </span>
                <span className="px-2.5 py-1 rounded-md bg-stone-100 dark:bg-[#141726] border border-stone-200 dark:border-[#22273a] text-stone-600 dark:text-[#949ab2]">
                  Glacier Degradation Modeling
                </span>
                <span className="px-2.5 py-1 rounded-md bg-stone-100 dark:bg-[#141726] border border-stone-200 dark:border-[#22273a] text-stone-600 dark:text-[#949ab2]">
                  Agricultural Volatility
                </span>
              </div>
            </div>
          </article>

        </div>
      </div>

      {/* ═════════════════════════════════════════════════════════════════════
          LIGHTBOX MODAL FOR HIGH-RESOLUTION CERTIFICATE & PHOTO INSPECTION
         ═════════════════════════════════════════════════════════════════════ */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-xl animate-in fade-in duration-200"
          onClick={() => setLightboxImage(null)}
        >
          {/* Modal Card */}
          <div 
            className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center bg-[#0d101d] border border-stone-800 rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header bar */}
            <div className="w-full flex items-center justify-between px-5 py-3.5 border-b border-stone-800 bg-[#121626]">
              <div>
                <h4 className="text-sm sm:text-base font-sora font-semibold text-white">
                  {lightboxImage.title}
                </h4>
                <p className="text-xs font-mono text-stone-400">
                  {lightboxImage.subtitle}
                </p>
              </div>

              <button
                onClick={() => setLightboxImage(null)}
                className="p-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white transition-colors"
                title="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Image Stage */}
            <div className="w-full flex-1 flex items-center justify-center p-4 sm:p-8 overflow-auto bg-black/60">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={lightboxImage.src}
                alt={lightboxImage.title}
                className="max-h-[72vh] max-w-full object-contain rounded-lg shadow-2xl border border-white/10"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
