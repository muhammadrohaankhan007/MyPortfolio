'use client';

import { Trophy, Award, Star, Activity, CheckCircle2, GitPullRequest } from 'lucide-react';

export default function Achievements() {
  const highlights = [
    {
      metric: '99.99%',
      label: 'System Uptime',
      desc: 'Architected high-availability services serving mission-critical customer workflows.',
      badge: 'Infrastructure',
    },
    {
      metric: '< 5ms',
      label: 'P99 Latency',
      desc: 'Engineered memory-caching and database query optimizations across distributed nodes.',
      badge: 'Performance',
    },
    {
      metric: '10k+',
      label: 'Commits & Reviews',
      desc: 'Active contributor across production repositories and open-source developer tooling.',
      badge: 'Open Source',
    },
    {
      metric: '#1 Tier',
      label: 'Hackathon Finalist',
      desc: 'Won top computational system architecture and UX design honors.',
      badge: 'Excellence',
    },
  ];

  const milestones = [
    {
      year: '2026',
      title: 'Full-Stack Portfolio & Telemetry Architecture',
      detail: 'Engineered zero-latency Prisma SQLite/PostgreSQL dynamic CMS with live analytics engine.',
      icon: Activity,
    },
    {
      year: '2025',
      title: 'Distributed Compute Pipeline Design',
      detail: 'Built event-driven workers handling parallel asynchronous data extraction pipelines.',
      icon: GitPullRequest,
    },
    {
      year: '2024',
      title: 'Dean’s Honors & Research in Algorithms',
      detail: 'Honored for exceptional scholastic output and published study on cache-friendly tree indexing.',
      icon: Award,
    },
  ];

  return (
    <section 
      id="achievements" 
      className="py-24 px-6 bg-white dark:bg-slate-950 border-t border-stone-200 dark:border-slate-800 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-widest text-amber-600 dark:text-amber-400">
            <Trophy className="w-3.5 h-3.5" />
            <span>02 // Track Record & Metrics</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-stone-900 dark:text-white">
            Demonstrated impact through measurable outcomes.
          </h2>
          <p className="text-base sm:text-lg text-stone-600 dark:text-slate-300 max-w-2xl leading-relaxed">
            Every architectural decision is evaluated against quantifiable standards: speed, resilience, and elegance under load.
          </p>
        </div>

        {/* 4 Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, idx) => (
            <div 
              key={idx}
              className="p-6 rounded-2xl bg-stone-50 dark:bg-slate-900/60 border border-stone-200/80 dark:border-slate-800 hover:border-amber-500/50 transition-all duration-300 group"
            >
              <span className="inline-block px-2 py-0.5 rounded text-[11px] font-mono font-semibold bg-stone-200/80 dark:bg-slate-800 text-stone-700 dark:text-slate-300 mb-4">
                {item.badge}
              </span>
              <div className="text-3xl sm:text-4xl font-black font-mono text-stone-900 dark:text-amber-400 mb-2 group-hover:translate-x-1 transition-transform">
                {item.metric}
              </div>
              <div className="text-sm font-bold text-stone-900 dark:text-slate-200 mb-1">{item.label}</div>
              <p className="text-xs text-stone-600 dark:text-slate-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Timeline Milestones */}
        <div className="rounded-2xl bg-stone-50 dark:bg-slate-900/60 border border-stone-200/80 dark:border-slate-800 p-8">
          <h3 className="text-lg font-bold text-stone-900 dark:text-white mb-6 flex items-center gap-2">
            <Star className="w-4 h-4 text-amber-500" />
            Key Milestones & Honors
          </h3>
          <div className="space-y-6">
            {milestones.map((m, idx) => {
              const Icon = m.icon;
              return (
                <div key={idx} className="flex items-start gap-4 pb-6 last:pb-0 border-b last:border-0 border-stone-200 dark:border-slate-800">
                  <div className="w-8 h-8 rounded-lg bg-amber-50 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs font-bold text-amber-600 dark:text-amber-400">{m.year}</span>
                      <h4 className="font-bold text-stone-900 dark:text-white text-sm sm:text-base">{m.title}</h4>
                    </div>
                    <p className="text-xs sm:text-sm text-stone-600 dark:text-slate-400">{m.detail}</p>
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
