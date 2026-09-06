'use client';

import { useState } from 'react';
import AnalyticsTracker from '@/components/AnalyticsTracker';
import { ArrowUpRight, ChevronRight, Terminal, Cpu, Database, ShieldCheck } from 'lucide-react';

export default function Hero() {
  const [activeTab, setActiveTab] = useState<'sys' | 'db' | 'rt'>('sys');

  return (
    <section 
      id="hero" 
      className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 px-6 overflow-hidden bg-white dark:bg-slate-950 transition-colors duration-300"
    >
      {/* Precision Background Aesthetics: Subtle Studio Lighting & Grid Vector */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Crisp subtle micro-dot blueprint grid */}
        <div 
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
          style={{
            backgroundImage: `radial-gradient(currentColor 1px, transparent 1px)`,
            backgroundSize: '24px 24px',
          }}
        />
        {/* Soft Studio Lighting Gradients */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-amber-200/30 via-orange-100/20 to-transparent dark:from-amber-500/10 dark:via-blue-500/5 dark:to-transparent rounded-full blur-3xl" />
        <div className="absolute -top-10 right-10 w-96 h-96 bg-stone-200/40 dark:bg-slate-800/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl w-full mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Left Side: Clean Typography & Bold Intro */}
        <div className="lg:col-span-7 space-y-8">
          
          {/* Status & Analytics Badge */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-stone-100 dark:bg-slate-900 text-stone-800 dark:text-slate-300 border border-stone-200 dark:border-slate-800 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for high-scale builds</span>
            </div>
            <AnalyticsTracker />
          </div>

          {/* Main Title & Intro text */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-stone-950 dark:text-white leading-[1.12]">
              Architecting systems with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-stone-950 via-stone-700 to-amber-700 dark:from-white dark:via-stone-200 dark:to-amber-400">
                absolute rigor.
              </span>
            </h1>

            <p className="text-lg sm:text-xl font-normal text-stone-700 dark:text-slate-300 max-w-2xl leading-relaxed border-l-2 border-amber-500/80 pl-4 py-1">
              &ldquo;A builder by instinct, a Computer Scientist by discipline. I create systems that are deliberately precise and quietly theatrical.&rdquo;
            </p>
          </div>

          {/* Architectural Pillars Pill Group */}
          <div className="flex flex-wrap gap-2 text-xs font-mono text-stone-600 dark:text-slate-400">
            <span className="px-2.5 py-1 rounded-md bg-stone-100 dark:bg-slate-900 border border-stone-200/80 dark:border-slate-800">
              ⚡ Distributed Systems
            </span>
            <span className="px-2.5 py-1 rounded-md bg-stone-100 dark:bg-slate-900 border border-stone-200/80 dark:border-slate-800">
              🛡️ Fault-Tolerant DBs
            </span>
            <span className="px-2.5 py-1 rounded-md bg-stone-100 dark:bg-slate-900 border border-stone-200/80 dark:border-slate-800">
              💎 Microsecond Latency
            </span>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#websites"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-stone-950 hover:bg-stone-800 text-white dark:bg-white dark:text-slate-950 dark:hover:bg-stone-100 font-medium text-sm transition-all duration-200 shadow-md shadow-stone-950/10 hover:shadow-lg hover:-translate-y-0.5"
            >
              Explore Websites
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <a
              href="#about"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-stone-100 hover:bg-stone-200/80 dark:bg-slate-900 dark:hover:bg-slate-800 text-stone-800 dark:text-slate-200 font-medium text-sm border border-stone-200 dark:border-slate-800 transition-all duration-200"
            >
              System Philosophy
              <ChevronRight className="w-4 h-4 text-stone-400" />
            </a>
          </div>
        </div>

        {/* Right Side: Ultra-Sharp Vector Aesthetic & Studio Lighting Console */}
        <div className="lg:col-span-5 relative">
          <div className="relative mx-auto max-w-md lg:max-w-none rounded-2xl bg-white/90 dark:bg-slate-900/90 border border-stone-300/80 dark:border-slate-800 p-6 shadow-2xl shadow-stone-300/40 dark:shadow-black/60 backdrop-blur-xl transition-all">
            
            {/* Header / Studio Lighting Bar */}
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-stone-200 dark:border-slate-800 text-xs font-mono">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400/80 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80 inline-block" />
                <span className="ml-2 text-stone-400 dark:text-slate-500">core.sys // runtime</span>
              </div>
              <span className="text-amber-600 dark:text-amber-400 font-bold tracking-wider">SYNCED</span>
            </div>

            {/* Interactive Vector Architecture Inspector */}
            <div className="space-y-4">
              {/* Tab Selector */}
              <div className="grid grid-cols-3 gap-1 p-1 bg-stone-100 dark:bg-slate-950 rounded-lg text-xs font-mono">
                <button
                  onClick={() => setActiveTab('sys')}
                  className={`py-1.5 px-2 rounded-md transition-all flex items-center justify-center gap-1.5 ${
                    activeTab === 'sys'
                      ? 'bg-white dark:bg-slate-800 text-stone-900 dark:text-white font-bold shadow-xs'
                      : 'text-stone-500 hover:text-stone-900 dark:text-slate-400'
                  }`}
                >
                  <Cpu className="w-3.5 h-3.5" />
                  Kernel
                </button>
                <button
                  onClick={() => setActiveTab('db')}
                  className={`py-1.5 px-2 rounded-md transition-all flex items-center justify-center gap-1.5 ${
                    activeTab === 'db'
                      ? 'bg-white dark:bg-slate-800 text-stone-900 dark:text-white font-bold shadow-xs'
                      : 'text-stone-500 hover:text-stone-900 dark:text-slate-400'
                  }`}
                >
                  <Database className="w-3.5 h-3.5" />
                  Prisma
                </button>
                <button
                  onClick={() => setActiveTab('rt')}
                  className={`py-1.5 px-2 rounded-md transition-all flex items-center justify-center gap-1.5 ${
                    activeTab === 'rt'
                      ? 'bg-white dark:bg-slate-800 text-stone-900 dark:text-white font-bold shadow-xs'
                      : 'text-stone-500 hover:text-stone-900 dark:text-slate-400'
                  }`}
                >
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Security
                </button>
              </div>

              {/* Dynamic Vector Details */}
              <div className="rounded-xl bg-stone-50 dark:bg-slate-950 p-4 border border-stone-200 dark:border-slate-800/80 font-mono text-xs space-y-3">
                {activeTab === 'sys' && (
                  <>
                    <div className="flex justify-between items-center text-stone-600 dark:text-slate-400">
                      <span>Architecture</span>
                      <span className="text-stone-900 dark:text-white font-bold">Event-Driven Microservices</span>
                    </div>
                    <div className="flex justify-between items-center text-stone-600 dark:text-slate-400">
                      <span>Concurrency Target</span>
                      <span className="text-emerald-600 dark:text-emerald-400 font-bold">50k+ req/sec</span>
                    </div>
                    <div className="flex justify-between items-center text-stone-600 dark:text-slate-400">
                      <span>P99 Query Latency</span>
                      <span className="text-amber-600 dark:text-amber-400 font-bold">&lt; 4.8 ms</span>
                    </div>
                    <div className="w-full bg-stone-200 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden mt-2">
                      <div className="bg-gradient-to-r from-amber-500 to-emerald-500 h-full w-[94%]" />
                    </div>
                  </>
                )}

                {activeTab === 'db' && (
                  <>
                    <div className="flex justify-between items-center text-stone-600 dark:text-slate-400">
                      <span>ORM Engine</span>
                      <span className="text-stone-900 dark:text-white font-bold">Prisma Client v7</span>
                    </div>
                    <div className="flex justify-between items-center text-stone-600 dark:text-slate-400">
                      <span>Schema State</span>
                      <span className="text-emerald-600 dark:text-emerald-400 font-bold">Migrated & Clean</span>
                    </div>
                    <div className="flex justify-between items-center text-stone-600 dark:text-slate-400">
                      <span>Dynamic Storage</span>
                      <span className="text-blue-600 dark:text-blue-400 font-bold">Zero-Downtime Hot Sync</span>
                    </div>
                    <div className="w-full bg-stone-200 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden mt-2">
                      <div className="bg-gradient-to-r from-blue-500 to-emerald-500 h-full w-[99%]" />
                    </div>
                  </>
                )}

                {activeTab === 'rt' && (
                  <>
                    <div className="flex justify-between items-center text-stone-600 dark:text-slate-400">
                      <span>Admin Shield</span>
                      <span className="text-emerald-600 dark:text-emerald-400 font-bold">Encrypted Passkey Auth</span>
                    </div>
                    <div className="flex justify-between items-center text-stone-600 dark:text-slate-400">
                      <span>Telemetry Path</span>
                      <span className="text-stone-900 dark:text-white font-bold">/api/analytics</span>
                    </div>
                    <div className="flex justify-between items-center text-stone-600 dark:text-slate-400">
                      <span>Integrity Check</span>
                      <span className="text-emerald-600 dark:text-emerald-400 font-bold">Verified 100%</span>
                    </div>
                    <div className="w-full bg-stone-200 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden mt-2">
                      <div className="bg-gradient-to-r from-emerald-500 to-amber-500 h-full w-[100%]" />
                    </div>
                  </>
                )}
              </div>

              {/* Vector Studio Lighting Accent Footer */}
              <div className="p-3 rounded-lg bg-stone-100/80 dark:bg-slate-800/40 border border-stone-200 dark:border-slate-800 text-[11px] text-stone-600 dark:text-slate-400 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5 text-amber-500" />
                  <span>runtime.status</span>
                </div>
                <span className="font-mono text-stone-800 dark:text-slate-200 font-semibold">99.999% SLA // Production</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
