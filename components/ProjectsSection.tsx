'use client';

import { ExternalLink, ArrowUpRight, Globe, FileText } from 'lucide-react';
import GithubIcon from '@/components/icons/GithubIcon';

interface FlagshipProject {
  id: string;
  slug: string;
  title: string;
  url: string;
  description: string;
  tags: string[];
  liveUrl?: string | null;
  githubUrl: string;
  imageSrc: string;
  imageClasses?: string;
  buttonText?: string;
  hideButton?: boolean;
  hideOverlay?: boolean;
}

/* ─── Flagship Projects ───────────────────────────────────────────────────────── */
const FLAGSHIP_PROJECTS: FlagshipProject[] = [
  {
    id: 'thermorail',
    slug: 'THERMORAIL',
    title: 'ThermoRail',
    url: 'thermo-rail.vercel.app',
    description:
      'Real-time railway thermal-risk analytics platform. Ingests live telemetry from 45,955 track segments across the Southwest US, renders heatmap overlays, and surfaces segment-level buckle-risk scores through a high-fidelity data console.',
    tags: ['Next.js', 'Prisma', 'Mapbox GL', 'Python', 'PySpark'],
    liveUrl: 'https://thermo-rail.vercel.app/',
    githubUrl: 'https://github.com/muhammadrohaankhan007',
    imageSrc: '/projects/thermorail.png',
    imageClasses: 'w-full h-full object-cover object-top transition-transform duration-500 group-hover/img:scale-[1.03]',
    buttonText: 'LAUNCH DEPLOYED INSTANCE',
  },
  {
    id: 'learn3d',
    slug: 'LEARN3D',
    title: '3D Learning Engine',
    url: '3d-learning-engine.vercel.app',
    description:
      "Gamified physics-education platform rendering an interactive billiards simulation in full 3D. Mission-select driven curriculum teaches Newton's three laws via real cue-ball dynamics, friction vectors, momentum transfer, and chain collisions.",
    tags: ['React', 'Three.js', 'WebGL', 'Physics Engine', 'TypeScript'],
    liveUrl: 'https://3d-learning-engine.vercel.app/',
    githubUrl: 'https://github.com/muhammadrohaankhan007',
    imageSrc: '/projects/learn3d.png',
    imageClasses: 'w-full h-full object-cover object-top transition-transform duration-500 group-hover/img:scale-[1.03]',
    buttonText: 'LAUNCH DEPLOYED INSTANCE',
  },
  {
    id: 'deeptech',
    slug: 'DEEPTECH',
    title: 'DeepTech Global',
    url: 'deeptech-global.vercel.app',
    description:
      "Premium corporate landing page for a deep-technology venture studio. Built to catalyze the transition of Pakistan's complex scientific research into scalable industrial reality — connecting patient capital with frontier engineering.",
    tags: ['Next.js', 'Three.js', 'Framer Motion', 'TypeScript', 'CSS'],
    liveUrl: 'https://deeptech-global.vercel.app/',
    githubUrl: 'https://github.com/muhammadrohaankhan007',
    imageSrc: '/projects/deeptech.png',
    imageClasses: 'w-full h-full object-cover object-top transition-transform duration-500 group-hover/img:scale-[1.03]',
    buttonText: 'LAUNCH DEPLOYED INSTANCE',
  },
  {
    id: 'anti-sleep-glasses',
    slug: 'SAFETY-VISION',
    title: 'Smart Anti-Sleep Driver Safety Glasses',
    url: 'hardware-telemetry / arduino-nano',
    description:
      'An intelligent wearable hardware-software system designed for real-time driver drowsiness detection and road safety enhancement. Utilizing an eye-mounted IR sensor paired with an Arduino Nano, the system continuously tracks ocular blink cycles and triggers immediate audible alerts via a piezo buzzer upon detecting fatigue.',
    tags: ['Arduino Nano', 'IR Sensor', 'Embedded C++', 'Digital Logic Design'],
    liveUrl: null,
    githubUrl: 'https://github.com/muhammadrohaankhan007',
    imageSrc: '/anti-sleep-fixed.jpg',
    imageClasses: 'w-full h-full object-cover object-center transition-transform duration-500',
    hideButton: true,
    hideOverlay: true, // Clean static visual without blocking buttons/overlays
  },
  {
    id: 'hospital-operations-portal',
    slug: 'MED-PORTAL',
    title: 'Centralized Hospital Operations Management Portal',
    url: 'terminal://hospital-cli-operations',
    description:
      'A high-performance command-line operations portal engineered entirely in pure C++. It manages the full spectrum of clinical administration, including real-time patient admissions, bed listing, doctor task scheduling, inventory and stock management, and daily cash flow financial telemetry.',
    tags: ['C++', 'CLI Architecture', 'Data Structures', 'File I/O'],
    liveUrl: null,
    githubUrl: 'https://github.com/muhammadrohaankhan007/Centralized-Hospital-Operations-Management-Portal',
    imageSrc: '/hospital-clean-terminal.png',
    imageClasses: 'w-full h-full object-cover object-center transition-transform duration-500 group-hover/img:scale-[1.03]',
    buttonText: 'VIEW GITHUB REPOSITORY',
  },
];

/* ─── More Projects (Strictly 2 Specified Cards) ─────────────────────────────── */
const MORE_PROJECTS = [
  {
    id: 'personal-portfolio',
    title: 'Personal Portfolio — Full Stack',
    description:
      'A modern, responsive engineering portfolio showcasing interactive systems, technical case studies, and telemetry applications built with Next.js and Tailwind CSS.',
    tags: ['Next.js', 'Framer Motion', 'Tailwind CSS'],
    link: 'https://github.com/muhammadrohaankhan007/MyPortfolio',
    badge: 'Open Source',
    actionText: 'View Repository',
    icon: GithubIcon,
    thumbnail: '/portfolio-preview.png',
    isDownload: false,
  },
  {
    id: 'agripack-bmc',
    title: 'AgriPack Solutions Pakistan — Circular Economy',
    description:
      "A comprehensive business model canvas for a circular economy startup that converts Pakistan's agricultural waste (rice husk and wheat straw) into premium 100% biodegradable packaging. Engineered to simultaneously combat plastic pollution and the seasonal smog crisis caused by crop burning, utilizing a scalable B2B/B2G revenue model.",
    tags: ['Business Strategy', 'Circular Economy', 'Sustainability'],
    link: '/projects/Agripack-Business-BMC.pdf',
    badge: 'Case Study (PDF)',
    actionText: 'Download BMC Case Study (PDF)',
    icon: FileText,
    thumbnail: '/agripack-cover.png',
    isDownload: true,
  },
];

/* ─── Browser / Terminal Window Wrapper ──────────────────────────────────────── */
function WindowFrame({ url, children }: { url: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl overflow-hidden border border-stone-200 dark:border-[#2a2d3e] bg-stone-100 dark:bg-[#13151f] shadow-xl shadow-stone-200/50 dark:shadow-2xl dark:shadow-black/60 flex flex-col w-full h-full transition-colors duration-300">
      {/* Chrome bar */}
      <div className="flex items-center gap-2 px-3 py-2 bg-stone-200/80 dark:bg-[#0f1117] border-b border-stone-200 dark:border-[#1e2130] shrink-0 transition-colors duration-300">
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        </div>
        <div className="flex-1 mx-2 px-2.5 py-1 rounded-md bg-white dark:bg-[#1a1d2e] border border-stone-300/70 dark:border-[#2a2d3e] flex items-center gap-1.5 max-w-[340px] transition-colors duration-300">
          <svg viewBox="0 0 16 16" fill="none" className="w-2.5 h-2.5 shrink-0 text-emerald-500 dark:text-emerald-400">
            <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5" />
          </svg>
          <span className="text-[10px] font-mono text-stone-600 dark:text-slate-400 truncate">{url}</span>
        </div>
      </div>
      {/* Full-width and full-height content window */}
      <div className="flex-1 w-full h-full overflow-hidden min-h-0 bg-stone-100 dark:bg-[#0a0c14] relative transition-colors duration-300">
        {children}
      </div>
    </div>
  );
}

/* ─── Flagship Project Card ─────────────────────────────────────────────────── */
function FlagshipProjectCard({ project }: { project: FlagshipProject }) {
  const destinationUrl = project.liveUrl || project.githubUrl;

  return (
    <div className="group relative flex flex-col lg:flex-row items-stretch gap-8 lg:gap-14 py-16 border-b border-stone-200 dark:border-[#1e2130] last:border-0 transition-all duration-500">
      {/* Subtle ambient hover glow */}
      <div className="absolute -inset-4 rounded-3xl bg-[#a880f5]/0 group-hover:bg-[#a880f5]/[0.03] transition-all duration-700 pointer-events-none" />

      {/* LEFT: Project Details */}
      <div className="lg:w-[380px] xl:w-[420px] shrink-0 space-y-5 relative z-10 flex flex-col justify-between">
        <div className="space-y-5">
          <div className="inline-flex items-center gap-2 text-[10px] font-mono font-semibold text-[#8b5cf6] dark:text-[#a880f5]/80 tracking-[0.2em] uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8b5cf6] dark:bg-[#a880f5] animate-pulse" />
            <span>ID: {project.slug}</span>
          </div>

          <h3 className="text-2xl sm:text-3xl lg:text-[34px] font-black tracking-tight text-stone-900 dark:text-white leading-[1.15] font-sora transition-colors duration-300">
            {project.title}
          </h3>

          <p className="text-sm sm:text-[15px] leading-[1.75] text-stone-600 dark:text-[#8e95ac] max-w-[46ch] transition-colors duration-300">
            {project.description}
          </p>

          {/* Tech Stack Tags */}
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className="px-2.5 py-0.5 rounded-full text-[10px] font-mono border border-stone-200 dark:border-[#2a2d3e] bg-stone-100 dark:bg-[#0f1117] text-stone-700 dark:text-[#949ab2] hover:border-[#8b5cf6]/50 dark:hover:border-[#a880f5]/40 hover:text-[#8b5cf6] dark:hover:text-[#c9aeff] transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons (Completely omitted for Anti-Sleep project per request) */}
        {!project.hideButton && (
          <div className="pt-4 flex items-center gap-3">
            <a
              href={destinationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-lg border border-stone-300 dark:border-[#2a2d3e] hover:border-[#8b5cf6] dark:hover:border-[#a880f5]/60 text-stone-700 dark:text-[#b5bac9] hover:text-stone-900 dark:hover:text-white bg-stone-50 dark:bg-[#0f1117] hover:bg-stone-100 dark:hover:bg-[#a880f5]/10 text-[11px] font-mono font-semibold uppercase tracking-widest transition-all duration-300 group/btn shadow-xs"
            >
              {project.liveUrl ? (
                <ArrowUpRight className="w-3.5 h-3.5 text-[#8b5cf6] dark:text-[#a880f5] group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              ) : (
                <GithubIcon className="w-3.5 h-3.5 text-[#8b5cf6] dark:text-[#a880f5] group-hover/btn:scale-110 transition-transform" />
              )}
              {project.buttonText || (project.liveUrl ? 'LAUNCH DEPLOYED INSTANCE' : 'VIEW GITHUB REPOSITORY')}
            </a>

            {project.liveUrl && project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg border border-stone-300 dark:border-[#2a2d3e] hover:border-[#8b5cf6] dark:hover:border-[#a880f5]/60 text-stone-600 dark:text-[#7a8099] hover:text-stone-900 dark:hover:text-white bg-stone-50 dark:bg-[#0f1117] hover:bg-stone-100 dark:hover:bg-[#a880f5]/10 transition-all duration-300"
                title="View GitHub Repository"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            )}
          </div>
        )}
      </div>

      {/* RIGHT: Image / Screen Mockup spanning full width with consistent aspect ratio */}
      <div className="w-full lg:flex-1 relative z-10 aspect-[16/10] sm:aspect-video lg:aspect-[16/10] min-h-[280px] sm:min-h-[320px] lg:min-h-[340px] flex flex-col">
        <WindowFrame url={project.url}>
          {project.hideOverlay ? (
            /* Clean static visual without button overlays blocking view */
            <div className="w-full h-full relative overflow-hidden">
              <img
                src={project.imageSrc}
                alt={project.title}
                className={project.imageClasses || 'w-full h-full object-cover object-center'}
                draggable={false}
              />
            </div>
          ) : (
            <a
              href={destinationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full h-full relative group/img overflow-hidden cursor-pointer"
              title={`Open ${project.title} in a new tab`}
            >
              <img
                src={project.imageSrc}
                alt={project.title}
                className={
                  project.imageClasses ||
                  'w-full h-full object-cover object-center transition-transform duration-500 group-hover/img:scale-[1.03]'
                }
                draggable={false}
              />

              {/* Hover overlay indicating clickability */}
              <div className="absolute inset-0 bg-black/0 group-hover/img:bg-[#8b5cf6]/10 dark:group-hover/img:bg-[#a880f5]/15 transition-all duration-300 flex items-center justify-center opacity-0 group-hover/img:opacity-100">
                <span className="px-3.5 py-1.5 rounded-full bg-stone-900/90 dark:bg-[#0a0c14]/90 border border-stone-700/60 dark:border-[#a880f5]/60 text-white text-xs font-mono font-medium flex items-center gap-2 shadow-2xl backdrop-blur-md">
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#c9aeff]" />
                  <span>{project.liveUrl ? 'Visit Live Instance' : 'Open Repository'}</span>
                </span>
              </div>
            </a>
          )}
        </WindowFrame>
      </div>
    </div>
  );
}

/* ─── Main Export ───────────────────────────────────────────────────────────── */
export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative py-24 px-6 bg-white dark:bg-[#080a12] text-stone-900 dark:text-[#f3f4f8] transition-colors duration-300 overflow-hidden font-sora"
    >
      {/* Target anchor for backward compatibility */}
      <div id="websites" className="sr-only" />

      {/* Background grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04] dark:opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(to right, #8b5cf6 1px, transparent 1px), linear-gradient(to bottom, #8b5cf6 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Ambient glows */}
      <div className="absolute top-1/4 -left-60 w-[500px] h-[500px] bg-[#8b5cf6]/10 dark:bg-[#a880f5]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 -right-60 w-[500px] h-[500px] bg-[#06b6d4]/8 dark:bg-[#06b6d4]/4 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Section Header */}
        <div className="mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-[10px] font-mono font-semibold uppercase tracking-[0.2em] text-[#8b5cf6] dark:text-[#a880f5]">
            <Globe className="w-3.5 h-3.5" />
            <span>02 // Selected Builds &amp; Systems</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-stone-900 dark:text-white leading-tight font-sora transition-colors duration-300">
            Engineered with intent.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7c3aed] via-[#8b5cf6] to-[#06b6d4] dark:from-[#8b5cf6] dark:via-[#a880f5] dark:to-[#06b6d4]">
              Delivered with polish.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-stone-600 dark:text-[#8e95ac] max-w-[54ch] leading-relaxed transition-colors duration-300">
            Flagship computational systems — spanning full-stack web platforms, embedded hardware safety rigs, and high-throughput command-line software.
          </p>
        </div>

        {/* Flagship Projects List */}
        <div className="divide-y divide-stone-200 dark:divide-[#1e2130]">
          {FLAGSHIP_PROJECTS.map((project) => (
            <FlagshipProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* ─── More Projects Section (Strictly Two Cards with Thumbnails) ───────── */}
        <div className="mt-28 pt-16 border-t border-stone-200 dark:border-[#1e2130]">
          {/* Section Header */}
          <div className="mb-10 space-y-3">
            <div className="inline-flex items-center gap-2 text-[10px] font-mono font-semibold uppercase tracking-[0.2em] text-[#8b5cf6] dark:text-[#a880f5]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8b5cf6] dark:bg-[#a880f5]" />
              <span>More Projects &amp; Case Studies</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-stone-900 dark:text-white font-sora transition-colors duration-300">
              More Projects
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 dark:text-[#8e95ac] max-w-2xl leading-relaxed font-sans transition-colors duration-300">
              Specialized engineering initiatives, technical architecture, and circular economy startup frameworks.
            </p>
          </div>

          {/* Strict 2-Card Responsive Grid with Image Thumbnails */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {MORE_PROJECTS.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.id}
                  className="rounded-2xl bg-stone-50 dark:bg-[#0e1019] border border-stone-200 dark:border-[#1e2130] overflow-hidden flex flex-col justify-between hover:border-[#8b5cf6]/50 dark:hover:border-[#a880f5]/50 transition-all duration-300 shadow-md shadow-stone-200/50 dark:shadow-xl dark:shadow-black/30 group"
                >
                  <div>
                    {/* Card Image Thumbnail */}
                    <a
                      href={card.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      {...(card.isDownload ? { download: 'Agripack-Business-BMC.pdf' } : {})}
                      className="block w-full h-48 overflow-hidden bg-stone-200 dark:bg-[#141624] relative cursor-pointer group/thumb"
                    >
                      <img
                        src={card.thumbnail}
                        alt={card.title}
                        className="w-full h-48 object-cover rounded-t-lg group-hover/thumb:scale-[1.03] transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover/thumb:bg-[#8b5cf6]/10 dark:group-hover/thumb:bg-[#a880f5]/10 transition-colors duration-300" />
                    </a>

                    {/* Content Section */}
                    <div className="p-6 sm:p-7 space-y-4">
                      {/* Top Meta Bar */}
                      <div className="flex items-center justify-between">
                        <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold bg-stone-100 dark:bg-[#1a1d2e] border border-stone-200 dark:border-[#2a2d3e] text-purple-700 dark:text-[#c9aeff]">
                          {card.badge}
                        </span>
                        <a
                          href={card.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          {...(card.isDownload ? { download: 'Agripack-Business-BMC.pdf' } : {})}
                          className="text-stone-500 dark:text-[#7a8099] hover:text-[#8b5cf6] dark:hover:text-[#a880f5] transition-colors p-1"
                          title={card.title}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>

                      {/* Card Title */}
                      <h4 className="text-lg sm:text-xl font-bold text-stone-900 dark:text-white group-hover:text-[#8b5cf6] dark:group-hover:text-[#c9aeff] transition-colors font-sora leading-snug">
                        <a
                          href={card.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          {...(card.isDownload ? { download: 'Agripack-Business-BMC.pdf' } : {})}
                        >
                          {card.title}
                        </a>
                      </h4>

                      {/* Card Description */}
                      <p className="text-xs sm:text-sm text-stone-600 dark:text-[#8e95ac] leading-relaxed transition-colors duration-300">
                        {card.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {card.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="px-2 py-0.5 rounded-full text-[10px] font-mono border border-stone-200 dark:border-[#2a2d3e] bg-stone-100 dark:bg-[#141624] text-stone-600 dark:text-[#949ab2]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Bottom Action Button */}
                  <div className="px-6 pb-6 sm:px-7 sm:pb-7 pt-2">
                    <div className="pt-4 border-t border-stone-200 dark:border-[#1a1d2e]">
                      <a
                        href={card.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        {...(card.isDownload ? { download: 'Agripack-Business-BMC.pdf' } : {})}
                        className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-xl border border-stone-200 dark:border-[#2a2d3e] hover:border-[#8b5cf6] dark:hover:border-[#a880f5]/60 bg-stone-100 dark:bg-[#141624] hover:bg-stone-200/70 dark:hover:bg-[#a880f5]/10 text-xs font-mono font-semibold text-purple-700 dark:text-[#c9aeff] hover:text-[#8b5cf6] dark:hover:text-white transition-all duration-300 group/btn"
                      >
                        <span className="flex items-center gap-2">
                          <Icon className="w-3.5 h-3.5 text-[#8b5cf6] dark:text-[#a880f5]" />
                          <span>{card.actionText}</span>
                        </span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-[#8b5cf6] dark:text-[#a880f5] group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
