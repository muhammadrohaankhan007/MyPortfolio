'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, Trash2, PlusCircle, Eye, ShieldAlert, CheckCircle, ExternalLink, Lock } from 'lucide-react';
import GithubIcon from '@/components/icons/GithubIcon';

interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string;
  githubUrl?: string | null;
  liveUrl?: string | null;
  createdAt: string;
}

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [pinInput, setPinInput] = useState<string>('');
  const [pinError, setPinError] = useState<string | null>(null);

  const [projects, setProjects] = useState<Project[]>([]);
  const [views, setViews] = useState<number>(0);
  const [form, setForm] = useState({
    title: '',
    description: '',
    techStack: '',
    githubUrl: '',
    liveUrl: '',
  });
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [statusMsg, setStatusMsg] = useState<string | null>(null);

  useEffect(() => {
    // Check if session has stored admin authentication
    const auth = sessionStorage.getItem('portfolio_admin_auth');
    if (auth === 'true') {
      setIsAuthenticated(true);
      fetchData();
    }
  }, []);

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setPinError(null);
    try {
      const res = await fetch('/api/admin/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ pin: pinInput }),
      });
      const data = await res.json();
      if (res.ok && data.authenticated) {
        setIsAuthenticated(true);
        sessionStorage.setItem('portfolio_admin_auth', 'true');
        fetchData();
      } else {
        setPinError(data.error || 'Invalid passcode. Default is "admin123"');
      }
    } catch {
      setPinError('Authentication error');
    }
  };

  const fetchData = async () => {
    try {
      const resProjects = await fetch('/api/projects');
      const projData = await resProjects.json();
      if (Array.isArray(projData)) {
        setProjects(projData);
      }

      const resAnalytics = await fetch('/api/analytics');
      const analyticsData = await resAnalytics.json();
      if (Array.isArray(analyticsData) && analyticsData.length > 0) {
        setViews(analyticsData[0].views);
      }
    } catch (err) {
      console.error('Failed to load admin data:', err);
    }
  };

  const handleAddProject = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setStatusMsg(null);
    try {
      const res = await fetch('/api/projects', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Failed to create project');
      setForm({ title: '', description: '', techStack: '', githubUrl: '', liveUrl: '' });
      setStatusMsg('Project published successfully!');
      setTimeout(() => setStatusMsg(null), 4000);
      fetchData();
    } catch (err: any) {
      alert(err.message || 'Error publishing project');
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this project?')) return;
    try {
      const res = await fetch('/api/projects', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id }),
      });
      if (!res.ok) throw new Error('Failed to delete project');
      fetchData();
    } catch (err: any) {
      alert(err.message || 'Error deleting project');
    }
  };

  // Lock Screen Modal if unauthenticated
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-slate-900 border border-slate-800 p-8 rounded-2xl shadow-2xl space-y-6">
          <div className="text-center space-y-2">
            <div className="w-12 h-12 rounded-full bg-amber-500/10 text-amber-400 flex items-center justify-center mx-auto border border-amber-500/20">
              <Lock className="w-6 h-6" />
            </div>
            <h1 className="text-2xl font-bold">Admin Portal</h1>
            <p className="text-xs text-slate-400">
              Enter your passcode to manage projects and telemetry. Default: <span className="font-mono text-amber-400 font-bold">admin123</span>
            </p>
          </div>

          <form onSubmit={handleAuth} className="space-y-4">
            <div>
              <input
                type="password"
                placeholder="Enter Admin PIN"
                value={pinInput}
                onChange={(e) => setPinInput(e.target.value)}
                required
                className="w-full p-3 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white font-mono placeholder:text-slate-600 focus:outline-hidden focus:border-amber-500"
              />
            </div>

            {pinError && (
              <div className="p-3 rounded-lg bg-red-950/40 border border-red-900 text-xs text-red-400 flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 shrink-0" />
                <span>{pinError}</span>
              </div>
            )}

            <button
              type="submit"
              className="w-full py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl text-sm transition shadow-lg shadow-amber-500/20 cursor-pointer"
            >
              Unlock Dashboard
            </button>
          </form>

          <div className="text-center pt-2">
            <Link href="/" className="text-xs text-slate-500 hover:text-slate-300 transition inline-flex items-center gap-1">
              <ArrowLeft className="w-3.5 h-3.5" />
              Return to Portfolio
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-6 sm:p-10 max-w-5xl mx-auto space-y-10">
      
      {/* Top Header Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-800 pb-6">
        <div>
          <div className="flex items-center gap-3">
            <Link 
              href="/" 
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 transition"
              title="Return to Portfolio"
            >
              <ArrowLeft className="w-4 h-4" />
            </Link>
            <h1 className="text-2xl font-bold tracking-tight">Admin Control Panel</h1>
          </div>
          <p className="text-xs text-slate-400 mt-1 pl-11">
            Dynamic CMS & Real-Time Prisma Engine
          </p>
        </div>

        <div className="flex items-center gap-3">
          {/* Live Page Views Counter */}
          <div className="bg-slate-900 border border-slate-800 px-4 py-2 rounded-xl text-xs flex items-center gap-2.5 shadow-xs">
            <Eye className="w-4 h-4 text-amber-400 animate-pulse" />
            <span className="text-slate-400">Total Page Views:</span>
            <span className="font-mono font-bold text-amber-400 text-sm">{views.toLocaleString()}</span>
          </div>

          <button
            onClick={() => {
              sessionStorage.removeItem('portfolio_admin_auth');
              setIsAuthenticated(false);
            }}
            className="px-3 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 text-xs font-mono transition"
          >
            Lock
          </button>
        </div>
      </div>

      {statusMsg && (
        <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-800/80 text-emerald-300 text-sm flex items-center gap-2">
          <CheckCircle className="w-4 h-4 text-emerald-400" />
          <span>{statusMsg}</span>
        </div>
      )}

      {/* Add Project Form */}
      <form onSubmit={handleAddProject} className="bg-slate-900 border border-slate-800 p-6 sm:p-8 rounded-2xl space-y-5 shadow-xl">
        <div className="flex items-center gap-2 border-b border-slate-800/80 pb-4">
          <PlusCircle className="w-5 h-5 text-amber-400" />
          <h2 className="text-lg font-semibold text-slate-100">Add New Project</h2>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-xs font-mono text-slate-400 mb-1.5 uppercase">Project Title *</label>
            <input 
              type="text" 
              placeholder="e.g. Distributed Cache Engine" 
              required
              value={form.title} 
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              className="w-full p-2.5 bg-slate-950 border border-slate-800 rounded-lg text-sm text-white focus:border-amber-500 focus:outline-hidden"
            />
          </div>

          <div>
            <label className="block text-xs font-mono text-slate-400 mb-1.5 uppercase">Description *</label>
            <textarea 
              placeholder="Brief architectural overview and technical achievements..." 
              required
              value={form.description} 
              onChange={(e) => setForm({ ...form, description: e.target.value })}
              className="w-full p-2.5 bg-slate-950 border border-slate-800 rounded-lg text-sm text-white h-24 focus:border-amber-500 focus:outline-hidden"
            />
          </div>

          <div>
            <label className="block text-xs font-mono text-slate-400 mb-1.5 uppercase">Tech Stack (comma-separated) *</label>
            <input 
              type="text" 
              placeholder="e.g. TypeScript, Rust, Next.js, Redis, Prisma" 
              required
              value={form.techStack} 
              onChange={(e) => setForm({ ...form, techStack: e.target.value })}
              className="w-full p-2.5 bg-slate-950 border border-slate-800 rounded-lg text-sm text-white focus:border-amber-500 focus:outline-hidden"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono text-slate-400 mb-1.5 uppercase">GitHub URL (optional)</label>
              <input 
                type="text" 
                placeholder="https://github.com/..." 
                value={form.githubUrl} 
                onChange={(e) => setForm({ ...form, githubUrl: e.target.value })}
                className="w-full p-2.5 bg-slate-950 border border-slate-800 rounded-lg text-sm text-white focus:border-amber-500 focus:outline-hidden"
              />
            </div>
            <div>
              <label className="block text-xs font-mono text-slate-400 mb-1.5 uppercase">Live Demo URL (optional)</label>
              <input 
                type="text" 
                placeholder="https://..." 
                value={form.liveUrl} 
                onChange={(e) => setForm({ ...form, liveUrl: e.target.value })}
                className="w-full p-2.5 bg-slate-950 border border-slate-800 rounded-lg text-sm text-white focus:border-amber-500 focus:outline-hidden"
              />
            </div>
          </div>
        </div>

        <button 
          type="submit" 
          disabled={submitting}
          className="px-6 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-lg text-sm transition shadow-lg shadow-amber-500/10 cursor-pointer disabled:opacity-50"
        >
          {submitting ? 'Publishing...' : 'Publish Project'}
        </button>
      </form>

      {/* Manage Projects List */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-slate-200">
            Active Projects ({projects.length})
          </h2>
          <span className="text-xs font-mono text-slate-500">Live Database Records</span>
        </div>

        {projects.length === 0 ? (
          <div className="p-8 text-center bg-slate-900 border border-slate-800 rounded-xl text-slate-400 text-sm">
            No projects found in database. Use the form above to add one.
          </div>
        ) : (
          <div className="space-y-3">
            {projects.map((p) => (
              <div 
                key={p.id} 
                className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-slate-900 border border-slate-800 p-5 rounded-xl hover:border-slate-700 transition"
              >
                <div className="space-y-1 max-w-2xl">
                  <div className="flex items-center gap-3">
                    <h3 className="font-bold text-white text-base">{p.title}</h3>
                    <span className="text-[11px] font-mono text-slate-500">
                      {new Date(p.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 line-clamp-1">{p.description}</p>
                  <p className="text-xs font-mono text-amber-400/90">{p.techStack}</p>
                </div>

                <div className="flex items-center gap-2 self-end sm:self-center shrink-0">
                  {p.githubUrl && (
                    <a 
                      href={p.githubUrl} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="p-2 text-slate-400 hover:text-white border border-slate-800 rounded-lg hover:bg-slate-800 transition"
                      title="GitHub"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                    </a>
                  )}
                  {p.liveUrl && (
                    <a 
                      href={p.liveUrl} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="p-2 text-slate-400 hover:text-white border border-slate-800 rounded-lg hover:bg-slate-800 transition"
                      title="Demo"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                  <button 
                    onClick={() => handleDelete(p.id)} 
                    className="flex items-center gap-1 text-red-400 hover:text-red-300 text-xs px-3 py-1.5 border border-red-900/80 bg-red-950/30 rounded-lg transition hover:bg-red-950/60"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>Delete</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  );
}
