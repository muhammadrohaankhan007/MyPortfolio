'use client';

import { useState, useEffect } from 'react';
import { ExternalLink, Globe, RefreshCw, FolderGit2 } from 'lucide-react';
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

export default function ProjectsSection() {
  const [projects, setProjects] = useState<ProjectItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
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

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <section 
      id="websites" 
      className="py-24 px-6 bg-stone-50 dark:bg-slate-900/50 border-t border-stone-200 dark:border-slate-800 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-widest text-amber-600 dark:text-amber-400">
              <Globe className="w-3.5 h-3.5" />
              <span>03 // Selected Builds & Websites</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-stone-900 dark:text-white">
              Engineered with intent. Delivered with polish.
            </h2>
            <p className="text-base sm:text-lg text-stone-600 dark:text-slate-300 max-w-2xl leading-relaxed">
              Every system here is driven dynamically from the Prisma ORM database and configured through the Admin Control Panel.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={fetchProjects}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-stone-300 dark:border-slate-700 text-xs font-mono text-stone-600 dark:text-slate-300 hover:bg-stone-100 dark:hover:bg-slate-800 transition"
              title="Refresh project list"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
              <span>Sync</span>
            </button>
          </div>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div 
                key={i} 
                className="h-64 rounded-2xl bg-stone-200/60 dark:bg-slate-800/50 animate-pulse border border-stone-300/60 dark:border-slate-700/60"
              />
            ))}
          </div>
        )}

        {/* Error State */}
        {error && !loading && (
          <div className="p-6 rounded-xl bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900/60 text-red-700 dark:text-red-400 text-sm">
            <p className="font-semibold">Unable to fetch projects:</p>
            <p className="text-xs font-mono mt-1">{error}</p>
          </div>
        )}

        {/* Empty State */}
        {!loading && !error && projects.length === 0 && (
          <div className="text-center py-16 px-4 rounded-2xl bg-white dark:bg-slate-900 border border-stone-200 dark:border-slate-800 space-y-4">
            <FolderGit2 className="w-12 h-12 text-stone-400 dark:text-slate-600 mx-auto" />
            <h3 className="text-lg font-bold text-stone-900 dark:text-white">No Projects Published Yet</h3>
            <p className="text-sm text-stone-600 dark:text-slate-400 max-w-md mx-auto">
              Use the secret admin key 🔑 in the footer to access the Admin Control Panel and publish your first project.
            </p>
            <a
              href="/admin/dashboard"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition"
            >
              Open Admin Dashboard
            </a>
          </div>
        )}

        {/* Projects Grid */}
        {!loading && projects.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => {
              const tags = project.techStack
                .split(',')
                .map((t) => t.trim())
                .filter(Boolean);

              return (
                <div 
                  key={project.id}
                  className="flex flex-col justify-between p-6 rounded-2xl bg-white dark:bg-slate-900 border border-stone-200/90 dark:border-slate-800 shadow-xs hover:shadow-xl hover:border-stone-300 dark:hover:border-slate-700 transition-all duration-300 group"
                >
                  <div className="space-y-4">
                    {/* Top Row */}
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-lg font-bold text-stone-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-2 text-stone-400">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="p-1.5 rounded-lg hover:bg-stone-100 dark:hover:bg-slate-800 hover:text-stone-900 dark:hover:text-white transition"
                            title="View Source Code"
                          >
                            <GithubIcon className="w-4 h-4" />
                          </a>
                        )}
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="p-1.5 rounded-lg hover:bg-stone-100 dark:hover:bg-slate-800 hover:text-stone-900 dark:hover:text-white transition"
                            title="Launch Live Project"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-stone-600 dark:text-slate-400 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack Tags & Actions */}
                  <div className="pt-6 mt-6 border-t border-stone-100 dark:border-slate-800/80 space-y-4">
                    <div className="flex flex-wrap gap-1.5">
                      {tags.map((tag, idx) => (
                        <span 
                          key={idx}
                          className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-stone-100 dark:bg-slate-800 text-stone-700 dark:text-slate-300 border border-stone-200/80 dark:border-slate-700/60"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between text-xs pt-1">
                      <span className="font-mono text-[11px] text-stone-400 dark:text-slate-500">
                        {new Date(project.createdAt).toLocaleDateString(undefined, {
                          month: 'short',
                          year: 'numeric',
                        })}
                      </span>
                      {project.liveUrl && (
                        <a 
                          href={project.liveUrl} 
                          target="_blank" 
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 font-semibold text-amber-600 dark:text-amber-400 hover:underline"
                        >
                          <span>Demo</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
}
