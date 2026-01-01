
import React, { useState } from 'react';
import { api } from '../services/apiService';
import { DesignConstraints, FinancialInfrastructureBlueprint } from '../types';
import { SectionTitle } from './Common';

export const ConstraintEditor: React.FC<{ 
  projectId: string, 
  onGenerated: (b: FinancialInfrastructureBlueprint) => void 
}> = ({ projectId, onGenerated }) => {
  const [loading, setLoading] = useState(false);
  const [constraints, setConstraints] = useState<DesignConstraints>({
    targetMarketEntities: { min: 500000, max: 1000000, targetDigitalAdoptionRatePercent: 75 },
    deploymentScopeSqKm: { min: 100, max: 200, preferredArchitectureTopology: 'decentralized' },
    esgInvestmentTargetPercent: 30,
    realTimeSettlementCoverageTargetPercent: 95,
    carbonNeutralityTargetYear: 2030,
    financialInclusionTargetIndex: 0.85,
    regulatoryPreferences: { digitalAssetClassificationPreference: 'security-token-focused', innovationHubFocus: 'regulatory-sandbox', complianceStrictness: 'high' },
    dlcOptimizationFocus: 'security',
    socioEconomicFinancialGoals: { financialLiteracyImprovementPercent: 10, microfinanceUptakeImprovementPercent: 15, defiIntegrationEmphasis: 'high', socialEquityInvestmentTargetIndex: 0.9 },
    totalInvestmentCapMillionsUSD: 15000,
    deploymentTimelineMonths: 240,
    criticalDeploymentZones: [],
    cyberResilienceTargetRating: 'critical',
    dataSovereigntyComplianceLevel: 'regional',
    agenticAutomationTargetPercent: 70,
    stakeholderEngagementStrategy: 'hybrid',
    disasterRecoveryStrategies: ['multi-region failover']
  });

  const handleGenerate = async () => {
    setLoading(true);
    try {
      const b = await api.generateBlueprint(projectId, constraints);
      onGenerated(b);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-8 animate-in slide-in-from-right duration-500">
      <SectionTitle title="Blueprint Studio" subtitle="Configure granular strategic constraints for the AI infrastructure engine" />
      
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        <div className="xl:col-span-2 space-y-8">
           <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl shadow-2xl">
              <h3 className="text-lg font-bold mb-6 text-cyan-400 mono tracking-tighter">1. NETWORK & SCALE</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-2 tracking-widest">Market Entities Range</label>
                  <div className="flex items-center space-x-2">
                    <input 
                      type="number" 
                      className="w-full bg-slate-800 border border-slate-700 p-3 rounded-lg text-white mono outline-none focus:border-cyan-500"
                      value={constraints.targetMarketEntities.min}
                      onChange={e => setConstraints(prev => ({ ...prev, targetMarketEntities: { ...prev.targetMarketEntities, min: parseInt(e.target.value) || 0 } }))}
                    />
                    <span className="text-slate-500">→</span>
                    <input 
                      type="number" 
                      className="w-full bg-slate-800 border border-slate-700 p-3 rounded-lg text-white mono outline-none focus:border-cyan-500"
                      value={constraints.targetMarketEntities.max}
                      onChange={e => setConstraints(prev => ({ ...prev, targetMarketEntities: { ...prev.targetMarketEntities, max: parseInt(e.target.value) || 0 } }))}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-2 tracking-widest">Digital Adoption Rate (%)</label>
                  <input 
                    type="range" min="0" max="100" step="1"
                    className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                    value={constraints.targetMarketEntities.targetDigitalAdoptionRatePercent}
                    onChange={e => setConstraints(prev => ({ ...prev, targetMarketEntities: { ...prev.targetMarketEntities, targetDigitalAdoptionRatePercent: parseInt(e.target.value) } }))}
                  />
                  <div className="flex justify-between text-[10px] text-slate-500 mt-2 font-bold mono">
                    <span>0%</span>
                    <span>{constraints.targetMarketEntities.targetDigitalAdoptionRatePercent}%</span>
                    <span>100%</span>
                  </div>
                </div>
              </div>
           </div>

           <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl shadow-2xl">
              <h3 className="text-lg font-bold mb-6 text-emerald-400 mono tracking-tighter">2. SUSTAINABILITY & INCLUSION</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-2 tracking-widest">ESG Investment Allocation (%)</label>
                  <input 
                    type="number" 
                    className="w-full bg-slate-800 border border-slate-700 p-3 rounded-lg text-white mono outline-none focus:border-emerald-500"
                    value={constraints.esgInvestmentTargetPercent}
                    onChange={e => setConstraints(prev => ({ ...prev, esgInvestmentTargetPercent: parseInt(e.target.value) || 0 }))}
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-2 tracking-widest">Carbon Neutrality Goal</label>
                  <select 
                    className="w-full bg-slate-800 border border-slate-700 p-3 rounded-lg text-white mono outline-none focus:border-emerald-500 appearance-none"
                    value={constraints.carbonNeutralityTargetYear}
                    onChange={e => setConstraints(prev => ({ ...prev, carbonNeutralityTargetYear: parseInt(e.target.value) }))}
                  >
                    <option value={2025}>2025</option>
                    <option value={2030}>2030</option>
                    <option value={2035}>2035</option>
                    <option value={2040}>2040</option>
                    <option value={2050}>2050</option>
                  </select>
                </div>
              </div>
           </div>

           <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl shadow-2xl">
              <h3 className="text-lg font-bold mb-6 text-amber-400 mono tracking-tighter">3. REGULATORY COMPLIANCE</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-2 tracking-widest">Asset Classification</label>
                  <select 
                    className="w-full bg-slate-800 border border-slate-700 p-3 rounded-lg text-white text-xs font-bold outline-none focus:border-amber-500 appearance-none"
                    value={constraints.regulatoryPreferences.digitalAssetClassificationPreference}
                    onChange={e => setConstraints(prev => ({ ...prev, regulatoryPreferences: { ...prev.regulatoryPreferences, digitalAssetClassificationPreference: e.target.value as any } }))}
                  >
                    <option value="security-token-focused">Security Tokens</option>
                    <option value="utility-token-focused">Utility Tokens</option>
                    <option value="nft-focused">Digital Art/NFT</option>
                    <option value="mixed">Mixed/Hybrid</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-2 tracking-widest">Innovation Hub</label>
                  <select 
                    className="w-full bg-slate-800 border border-slate-700 p-3 rounded-lg text-white text-xs font-bold outline-none focus:border-amber-500 appearance-none"
                    value={constraints.regulatoryPreferences.innovationHubFocus}
                    onChange={e => setConstraints(prev => ({ ...prev, regulatoryPreferences: { ...prev.regulatoryPreferences, innovationHubFocus: e.target.value as any } }))}
                  >
                    <option value="regulatory-sandbox">Regulatory Sandbox</option>
                    <option value="fintech-lab">Fintech Lab</option>
                    <option value="defi-focused">DeFi Ecosystem</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-2 tracking-widest">Compliance Mode</label>
                  <select 
                    className="w-full bg-slate-800 border border-slate-700 p-3 rounded-lg text-white text-xs font-bold outline-none focus:border-amber-500 appearance-none"
                    value={constraints.regulatoryPreferences.complianceStrictness}
                    onChange={e => setConstraints(prev => ({ ...prev, regulatoryPreferences: { ...prev.regulatoryPreferences, complianceStrictness: e.target.value as any } }))}
                  >
                    <option value="low">Standard</option>
                    <option value="medium">Enhanced</option>
                    <option value="high">Strict/High Integrity</option>
                  </select>
                </div>
              </div>
           </div>
        </div>

        <div className="space-y-6">
          <div className="bg-cyan-950/20 border border-cyan-500/30 p-8 rounded-3xl shadow-xl sticky top-24">
            <h3 className="text-xl font-bold mb-4 text-cyan-400">Blueprint Generator</h3>
            <p className="text-sm text-slate-400 mb-8 leading-relaxed">
              The AI engine will synthesize your constraints into a comprehensive 3D logical architecture. This process includes network topology optimization and regulatory risk simulation.
            </p>
            
            <div className="space-y-4 mb-10">
              <div className="flex justify-between items-center text-xs font-bold mono">
                <span className="text-slate-500">ESTIMATED INVESTMENT</span>
                <span className="text-white">${constraints.totalInvestmentCapMillionsUSD}M</span>
              </div>
              <div className="flex justify-between items-center text-xs font-bold mono">
                <span className="text-slate-500">DEPLOYMENT TIME</span>
                <span className="text-white">{constraints.deploymentTimelineMonths} MONTHS</span>
              </div>
              <div className="flex justify-between items-center text-xs font-bold mono">
                <span className="text-slate-500">SECURITY RATING</span>
                <span className="text-white uppercase">{constraints.cyberResilienceTargetRating}</span>
              </div>
            </div>

            <button 
              onClick={handleGenerate}
              disabled={loading}
              className={`w-full py-4 rounded-2xl font-bold text-lg transition-all shadow-xl ${
                loading ? 'bg-slate-800 cursor-wait' : 'bg-cyan-600 hover:bg-cyan-700 shadow-cyan-500/20'
              }`}
            >
              {loading ? (
                <div className="flex items-center justify-center space-x-3">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span className="animate-pulse">SYNTHESIZING...</span>
                </div>
              ) : 'GENERATE ARCHITECTURE'}
            </button>
            <p className="text-[10px] text-center text-slate-500 mt-4 uppercase tracking-widest font-bold">Verifying System Sovereignty Compliance</p>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-6 rounded-3xl">
            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Simulation Parameters</h4>
            <div className="space-y-3">
               <div className="flex items-center space-x-3 text-sm">
                 <input type="checkbox" checked readOnly className="rounded border-slate-700 bg-slate-800 text-cyan-500 focus:ring-cyan-500" />
                 <span className="text-slate-300">Run Cross-Chain Interop Test</span>
               </div>
               <div className="flex items-center space-x-3 text-sm">
                 <input type="checkbox" checked readOnly className="rounded border-slate-700 bg-slate-800 text-cyan-500 focus:ring-cyan-500" />
                 <span className="text-slate-300">Biometric Identity Verification</span>
               </div>
               <div className="flex items-center space-x-3 text-sm opacity-50">
                 <input type="checkbox" readOnly className="rounded border-slate-700 bg-slate-800 text-cyan-500 focus:ring-cyan-500" />
                 <span className="text-slate-300">Quantum Attack Simulation (Enterprise only)</span>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
