
import React, { useEffect, useState } from 'react';
import { api } from '../services/apiService';
import { ProjectMetadata, DesignConstraints } from '../types';
import { SectionTitle } from './Common';

export const ProjectSelector: React.FC<{ 
  currentProject: ProjectMetadata | null, 
  onSelect: (p: ProjectMetadata) => void 
}> = ({ currentProject, onSelect }) => {
  const [projects, setProjects] = useState<ProjectMetadata[]>([]);
  const [isCreating, setIsCreating] = useState(false);
  const [newName, setNewName] = useState('');

  useEffect(() => {
    const fetch = async () => {
      const p = await api.getProjects();
      setProjects(p);
    };
    fetch();
  }, []);

  const handleCreate = async () => {
    if (!newName.trim()) return;
    const defaultConstraints: DesignConstraints = {
      targetMarketEntities: { min: 100000, max: 500000, targetDigitalAdoptionRatePercent: 50 },
      deploymentScopeSqKm: { min: 50, max: 100, preferredArchitectureTopology: 'hybrid' },
      esgInvestmentTargetPercent: 20,
      realTimeSettlementCoverageTargetPercent: 80,
      carbonNeutralityTargetYear: 2040,
      financialInclusionTargetIndex: 0.7,
      regulatoryPreferences: { digitalAssetClassificationPreference: 'mixed', innovationHubFocus: 'fintech-lab', complianceStrictness: 'medium' },
      dlcOptimizationFocus: 'throughput',
      socioEconomicFinancialGoals: { financialLiteracyImprovementPercent: 5, microfinanceUptakeImprovementPercent: 5, defiIntegrationEmphasis: 'low', socialEquityInvestmentTargetIndex: 0.6 },
      totalInvestmentCapMillionsUSD: 5000,
      deploymentTimelineMonths: 120,
      criticalDeploymentZones: [],
      cyberResilienceTargetRating: 'high',
      dataSovereigntyComplianceLevel: 'local',
      agenticAutomationTargetPercent: 30,
      stakeholderEngagementStrategy: 'online-platform',
      disasterRecoveryStrategies: []
    };

    const newProject = await api.createProject(newName, defaultConstraints, 'user-001');
    setProjects(prev => [...prev, newProject]);
    onSelect(newProject);
    setIsCreating(false);
    setNewName('');
  };

  return (
    <div className="space-y-8 animate-in slide-in-from-bottom duration-500">
      <div className="flex justify-between items-center">
        <SectionTitle title="Project Pipeline" subtitle="Manage high-value digital financial infrastructure deployments" />
        <button 
          onClick={() => setIsCreating(true)}
          className="bg-emerald-600 hover:bg-emerald-700 px-4 py-2 rounded-lg text-sm font-bold shadow-lg transition-all"
        >
          + Initialize New Project
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map(project => (
          <div 
            key={project.id} 
            className={`p-6 rounded-2xl border transition-all cursor-pointer relative group ${
              currentProject?.id === project.id 
                ? 'bg-cyan-900/20 border-cyan-500 shadow-xl shadow-cyan-500/10' 
                : 'bg-slate-900 border-slate-800 hover:border-slate-600'
            }`}
            onClick={() => onSelect(project)}
          >
            {currentProject?.id === project.id && (
              <div className="absolute top-4 right-4 text-[10px] font-bold text-cyan-400 border border-cyan-400/50 px-2 py-1 rounded bg-cyan-400/10 mono animate-pulse">
                ACTIVE FOCUS
              </div>
            )}
            <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">{project.name}</h3>
            <p className="text-sm text-slate-400 mb-6 line-clamp-2">{project.description}</p>
            
            <div className="grid grid-cols-2 gap-4 text-xs font-semibold mono">
              <div>
                <p className="text-slate-500 uppercase mb-1 tracking-tighter">Status</p>
                <p className={project.status === 'active' ? 'text-emerald-400' : 'text-amber-400'}>{project.status.toUpperCase()}</p>
              </div>
              <div>
                <p className="text-slate-500 uppercase mb-1 tracking-tighter">Approval</p>
                <p className={project.financialApprovalStatus === 'approved' ? 'text-emerald-400' : 'text-amber-400'}>{project.financialApprovalStatus.toUpperCase()}</p>
              </div>
              <div>
                <p className="text-slate-500 uppercase mb-1 tracking-tighter">Risk Level</p>
                <p className={project.riskRating === 'low' ? 'text-emerald-400' : project.riskRating === 'medium' ? 'text-amber-400' : 'text-rose-400'}>
                  {project.riskRating.toUpperCase()}
                </p>
              </div>
              <div>
                <p className="text-slate-500 uppercase mb-1 tracking-tighter">History</p>
                <p className="text-slate-300">{project.blueprintHistory.length} Blueprints</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {isCreating && (
        <div className="fixed inset-0 bg-slate-950/90 backdrop-blur-md z-[100] flex items-center justify-center p-6">
          <div className="bg-slate-900 border border-slate-700 p-8 rounded-3xl w-full max-w-lg shadow-2xl">
            <h3 className="text-2xl font-bold mb-4">Initialize New Infrastructure Project</h3>
            <p className="text-slate-400 text-sm mb-6">Enter a unique identifier for your new strategic financial infrastructure deployment. The system will auto-initialize base constraints.</p>
            
            <div className="space-y-4 mb-8">
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Strategic Project Name</label>
                <input 
                  type="text" 
                  className="w-full bg-slate-800 border border-slate-700 p-4 rounded-xl text-white outline-none focus:border-cyan-500 transition-all"
                  placeholder="e.g. Cross-Border Settle (Asia Core)"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                />
              </div>
            </div>

            <div className="flex space-x-4">
              <button 
                onClick={() => setIsCreating(false)}
                className="flex-1 px-6 py-3 rounded-xl border border-slate-700 text-slate-300 font-bold hover:bg-slate-800"
              >
                Cancel
              </button>
              <button 
                onClick={handleCreate}
                disabled={!newName.trim()}
                className="flex-1 px-6 py-3 rounded-xl bg-cyan-600 text-white font-bold hover:bg-cyan-700 shadow-xl shadow-cyan-500/20 disabled:opacity-50"
              >
                Launch Project
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
