'use client';

import { useEffect, useState } from 'react';

export default function AnalyticsTracker() {
  const [views, setViews] = useState<number | null>(null);

  useEffect(() => {
    // Record page view on load
    const recordView = async () => {
      try {
        const hasTracked = sessionStorage.getItem('portfolio_view_logged');
        if (!hasTracked) {
          const res = await fetch('/api/analytics', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ path: window.location.pathname }),
          });
          const data = await res.json();
          if (data?.views !== undefined) {
            setViews(data.views);
            sessionStorage.setItem('portfolio_view_logged', 'true');
          }
        } else {
          // Just fetch the count without incrementing
          const res = await fetch('/api/analytics');
          const data = await res.json();
          if (Array.isArray(data) && data.length > 0) {
            setViews(data[0].views);
          }
        }
      } catch (err) {
        console.warn('Analytics tracking skipped:', err);
      }
    };

    recordView();
  }, []);

  if (views === null) return null;

  return (
    <div 
      id="live-views-badge"
      className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-stone-100 dark:bg-slate-900/90 text-stone-700 dark:text-slate-300 border border-stone-300 dark:border-slate-800 shadow-xs backdrop-blur-xs transition-all"
      title="Verified live visits logged via Prisma ORM"
    >
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
      </span>
      <span className="text-[11px] font-semibold text-stone-500 dark:text-slate-400 uppercase tracking-wider">Live Views</span>
      <span className="font-bold text-stone-900 dark:text-amber-400">{views.toLocaleString()}</span>
    </div>
  );
}
