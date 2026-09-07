'use client';

import { useState, useEffect } from 'react';
import { ExternalLink, RefreshCw, ArrowUpRight, Globe } from 'lucide-react';
import GithubIcon from '@/components/icons/GithubIcon';

interface ProjectItem {
  id: string;
  title: string;
  description: string;
  techStack: string;
  githubUrl?: string | null;
  liveUrl?: string | null;
  createdAt: string;
}

/* ─── Static featured projects rendered with browser mockup ─────────────────── */
const FEATURED = [
  {
    id: 'thermorail',
    slug: 'THERMORAIL',
    title: 'ThermoRail',
    url: 'thermo-rail.vercel.app',
    description:
      'Real-time railway thermal-risk analytics platform. Ingests live telemetry from 45,955 track segments across the Southwest US, renders heatmap overlays, and surfaces segment-level buckle-risk scores through a high-fidelity data console.',
    tags: ['Next.js', 'Prisma', 'Mapbox GL', 'Python', 'PySpark'],
    liveUrl: 'https://thermorail.vercel.app',
    githubUrl: 'https://github.com/muhammadrohaankhan007',
    visual: 'thermorail',
  },
  {
    id: 'learn3d',
    slug: 'LEARN3D',
    title: 'Learn3D Engine',
    url: 'learn3d.vercel.app',
    description:
      "Gamified physics-education platform rendering an interactive billiards simulation in full 3D. Mission-select driven curriculum teaches Newton's three laws via real cue-ball dynamics, friction vectors, momentum transfer, and chain collisions.",
    tags: ['React', 'Three.js', 'WebGL', 'Physics Engine', 'TypeScript'],
    liveUrl: 'https://learn3d.vercel.app',
    githubUrl: 'https://github.com/muhammadrohaankhan007',
    visual: 'learn3d',
  },
  {
    id: 'deeptech',
    slug: 'DEEPTECH',
    title: 'DeepTech Global',
    url: 'deeptech.vercel.app',
    description:
      "Premium corporate landing page for a deep-technology venture studio. Built to catalyze the transition of Pakistan's complex scientific research into scalable industrial reality — connecting patient capital with frontier engineering.",
    tags: ['Next.js', 'Three.js', 'Framer Motion', 'TypeScript', 'CSS'],
    liveUrl: 'https://deeptech.vercel.app',
    githubUrl: 'https://github.com/muhammadrohaankhan007',
    visual: 'deeptech',
  },
];

/* ─── Browser Mockup Visuals ────────────────────────────────────────────────── */
function ThermoRailVisual() {
  return (
    <div className="w-full h-full overflow-hidden bg-[#f0f2f7]">
      <img
        src="/projects/thermorail.png"
        alt="ThermoRail Dashboard"
        className="w-full h-full object-cover object-top"
        draggable={false}
      />
    </div>
  );
}

function Learn3DVisual() {
  return (
    <div className="w-full h-full overflow-hidden bg-[#0d1117]">
      <img
        src="/projects/learn3d.png"
        alt="LEARN3D Physics Engine"
        className="w-full h-full object-cover object-top"
        draggable={false}
      />
    </div>
  );
}

function DeepTechVisual() {
  return (
    <div className="w-full h-full overflow-hidden bg-black">
      <img
        src="/projects/deeptech.png"
        alt="DeepTech Global Landing Page"
        className="w-full h-full object-cover object-top"
        draggable={false}
      />
    </div>
  );
}


/* ─── Browser Window Wrapper ────────────────────────────────────────────────── */
function BrowserWindow({ url, children }: { url: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl overflow-hidden border border-[#2a2d3e] bg-[#13151f] shadow-2xl shadow-black/60 flex flex-col w-full h-full">
      {/* Chrome bar */}
      <div className="flex items-center gap-2 px-3 py-2 bg-[#0f1117] border-b border-[#1e2130] shrink-0">
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        </div>
        <div className="flex-1 mx-2 px-2.5 py-1 rounded-md bg-[#1a1d2e] border border-[#2a2d3e] flex items-center gap-1.5 max-w-[280px]">
          <svg viewBox="0 0 16 16" fill="none" className="w-2.5 h-2.5 shrink-0 text-emerald-400">
            <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5"/>
          </svg>
          <span className="text-[10px] font-mono text-slate-400 truncate">{url}</span>
        </div>
      </div>
      {/* Content */}
      <div className="flex-1 overflow-hidden min-h-0">
        {children}
      </div>
    </div>
  );
}

/* ─── Individual Project Card ───────────────────────────────────────────────── */
function ProjectCard({ project, index }: { project: typeof FEATURED[0]; index: number }) {
  return (
    <div className="group relative flex flex-col lg:flex-row items-start gap-8 lg:gap-14 py-16 border-b border-[#1e2130] last:border-0 transition-all duration-500">
      {/* Subtle ambient glow */}
      <div className="absolute -inset-4 rounded-3xl bg-[#a880f5]/0 group-hover:bg-[#a880f5]/[0.03] transition-all duration-700 pointer-events-none" />

      {/* LEFT: Typography */}
      <div className="lg:w-[380px] xl:w-[420px] shrink-0 space-y-5 relative z-10">
        <div className="inline-flex items-center gap-2 text-[10px] font-mono font-semibold text-[#a880f5]/70 tracking-[0.2em] uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-[#a880f5] animate-pulse" />
          <span>ID: {project.slug}</span>
        </div>

        <h3 className="text-3xl sm:text-4xl lg:text-[40px] font-black tracking-tight text-white leading-[1.1] font-sora">
          {project.title}
        </h3>

        <p className="text-sm sm:text-[15px] leading-[1.75] text-[#7a8099] max-w-[46ch]">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="px-2.5 py-0.5 rounded-full text-[10px] font-mono border border-[#2a2d3e] bg-[#0f1117] text-[#949ab2] hover:border-[#a880f5]/40 hover:text-[#c9aeff] transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>

        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-lg border border-[#2a2d3e] hover:border-[#a880f5]/60 text-[#949ab2] hover:text-white bg-transparent hover:bg-[#a880f5]/8 text-[11px] font-mono font-semibold uppercase tracking-widest transition-all duration-300 group/btn"
          >
            <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
            LAUNCH DEPLOYED INSTANCE
          </a>
        )}
      </div>

      {/* RIGHT: Browser mockup */}
      <div className="w-full lg:flex-1 relative z-10" style={{ height: '340px', minHeight: '280px' }}>
        <BrowserWindow url={project.url}>
          {project.visual === 'thermorail' && <ThermoRailVisual />}
          {project.visual === 'learn3d' && <Learn3DVisual />}
          {project.visual === 'deeptech' && <DeepTechVisual />}
        </BrowserWindow>
      </div>
    </div>
  );
}

/* ─── Dynamic Projects from DB ──────────────────────────────────────────────── */
function DynamicProjects() {
  const [projects, setProjects] = useState<ProjectItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProjects = async () => {
    try {
      setLoading(true);
      const res = await fetch('/api/projects');
      if (!res.ok) throw new Error('Failed to load projects');
      const data = await res.json();
      setProjects(data);
      setError(null);
    } catch (err: any) {
      setError(err.message || 'Error fetching projects');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchProjects(); }, []);

  if (loading) return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-4">
      {[1,2,3].map(i => (
        <div key={i} className="h-48 rounded-xl bg-[#0f1117] border border-[#1e2130] animate-pulse" />
      ))}
    </div>
  );

  if (error) return (
    <div className="mt-4 p-4 rounded-xl border border-red-900/60 bg-red-950/20 text-red-400 text-sm font-mono">
      {error}
    </div>
  );

  if (projects.length === 0) return null;

  return (
    <div className="mt-10 pt-10 border-t border-[#1e2130]">
      <div className="flex items-center justify-between mb-6">
        <span className="text-xs font-mono text-[#a880f5]/60 tracking-widest uppercase">From the CMS</span>
        <button
          onClick={fetchProjects}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#2a2d3e] text-xs font-mono text-[#7a8099] hover:border-[#a880f5]/40 hover:text-[#c9aeff] transition-all"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          Sync
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((project) => {
          const tags = project.techStack.split(',').map(t => t.trim()).filter(Boolean);
          return (
            <div
              key={project.id}
              className="flex flex-col justify-between p-5 rounded-xl bg-[#0f1117] border border-[#1e2130] hover:border-[#a880f5]/30 transition-all duration-300 group"
            >
              <div className="space-y-3">
                <h4 className="text-sm font-bold text-white group-hover:text-[#c9aeff] transition-colors">{project.title}</h4>
                <p className="text-xs text-[#7a8099] leading-relaxed line-clamp-3">{project.description}</p>
              </div>
              <div className="pt-4 mt-4 border-t border-[#1e2130] space-y-3">
                <div className="flex flex-wrap gap-1">
                  {tags.map((tag, i) => (
                    <span key={i} className="px-2 py-0.5 rounded-full text-[10px] font-mono border border-[#2a2d3e] text-[#7a8099]">{tag}</span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-[#4a4d5e]">
                    {new Date(project.createdAt).toLocaleDateString(undefined, { month: 'short', year: 'numeric' })}
                  </span>
                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noreferrer" className="text-[#4a4d5e] hover:text-[#a880f5] transition-colors">
                        <GithubIcon className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noreferrer" className="text-[#4a4d5e] hover:text-[#a880f5] transition-colors">
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ─── Main Export ───────────────────────────────────────────────────────────── */
export default function ProjectsSection() {
  return (
    <section
      id="websites"
      className="relative py-24 px-6 bg-[#080a12] overflow-hidden transition-colors duration-300"
    >
      {/* Grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(to right, #a880f5 1px, transparent 1px), linear-gradient(to bottom, #a880f5 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />
      {/* Ambient glows */}
      <div className="absolute top-1/3 -left-60 w-[500px] h-[500px] bg-[#a880f5]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-60 w-[500px] h-[500px] bg-[#06b6d4]/4 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Section header */}
        <div className="mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-[10px] font-mono font-semibold uppercase tracking-[0.2em] text-[#a880f5]">
            <Globe className="w-3 h-3" />
            <span>03 // Selected Builds &amp; Websites</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight font-sora">
            Engineered with intent.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8b5cf6] via-[#a880f5] to-[#06b6d4]">
              Delivered with polish.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[#7a8099] max-w-[52ch] leading-relaxed">
            Three flagship systems — each purpose-built, production-deployed, and driven by real engineering constraints.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="divide-y divide-[#1e2130]">
          {FEATURED.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* CMS-driven projects */}
        <DynamicProjects />

      </div>
    </section>
  );
}
