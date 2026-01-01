
import React from 'react';

export const ScoreDisplay: React.FC<{ label: string; score: number }> = ({ label, score }) => {
  const scoreColor = score >= 0.9 ? 'text-emerald-400' : score >= 0.75 ? 'text-amber-400' : 'text-rose-400';
  const borderColor = score >= 0.9 ? 'border-emerald-500/20' : score >= 0.75 ? 'border-amber-500/20' : 'border-rose-500/20';
  const bgColor = score >= 0.9 ? 'bg-emerald-500/5' : score >= 0.75 ? 'bg-amber-500/5' : 'bg-rose-500/5';

  return (
    <div className={`text-center p-4 rounded-xl border ${borderColor} ${bgColor} backdrop-blur-sm transition-all hover:scale-[1.02]`}>
      <p className={`text-4xl font-bold mono ${scoreColor}`}>{score.toFixed(2)}</p>
      <p className="text-xs text-slate-400 mt-2 uppercase tracking-widest font-semibold">{label}</p>
    </div>
  );
};

export const MetricCard: React.FC<{ title: string; value: string | number; unit?: string; trend?: 'up' | 'down' | 'neutral' }> = ({ title, value, unit, trend }) => (
  <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700 shadow-lg group hover:border-slate-500 transition-colors">
    <div className="flex justify-between items-start mb-2">
      <h3 className="text-sm font-medium text-slate-400 group-hover:text-slate-300 transition-colors">{title}</h3>
      {trend && (
        <span className={`text-[10px] px-1.5 py-0.5 rounded font-bold mono ${trend === 'up' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-rose-500/10 text-rose-400'}`}>
          {trend === 'up' ? '▲' : '▼'}
        </span>
      )}
    </div>
    <p className="text-2xl font-bold text-slate-100 mono">
      {value} {unit && <span className="text-xs font-normal text-slate-500 ml-1">{unit}</span>}
    </p>
  </div>
);

export const LoadingOverlay: React.FC<{ message: string }> = ({ message }) => (
  <div className="fixed inset-0 bg-slate-900/80 backdrop-blur-md z-[100] flex flex-col items-center justify-center">
    <div className="w-16 h-16 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin mb-6"></div>
    <div className="text-2xl font-bold text-slate-100 animate-pulse mono">{message}</div>
    <p className="text-slate-400 mt-2">Initializing Digital Infrastructure AI...</p>
  </div>
);

export const SectionTitle: React.FC<{ title: string; subtitle?: string }> = ({ title, subtitle }) => (
  <div className="mb-6 border-l-4 border-cyan-500 pl-4">
    <h2 className="text-xl font-bold text-slate-100 tracking-tight">{title}</h2>
    {subtitle && <p className="text-sm text-slate-400 mt-1">{subtitle}</p>}
  </div>
);
