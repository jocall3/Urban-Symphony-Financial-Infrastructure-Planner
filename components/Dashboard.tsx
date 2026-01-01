
import React, { useEffect, useState } from 'react';
import { FinancialInfrastructureBlueprint } from '../types';
import { ScoreDisplay, MetricCard, SectionTitle } from './Common';
import { getBlueprintStrategicSummary } from '../services/geminiService';

export const Dashboard: React.FC<{ blueprint: FinancialInfrastructureBlueprint }> = ({ blueprint }) => {
  const [summary, setSummary] = useState<string>("Analyzing architecture with AI...");

  useEffect(() => {
    const fetchAIAnalysis = async () => {
      setSummary("Analyzing architecture with AI...");
      const text = await getBlueprintStrategicSummary(blueprint);
      setSummary(text);
    };
    fetchAIAnalysis();
  }, [blueprint]);

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        <ScoreDisplay label="Adaptability" score={blueprint.marketAdaptabilityScore} />
        <ScoreDisplay label="Efficiency" score={blueprint.operationalEfficiencyScore} />
        <ScoreDisplay label="Inclusion" score={blueprint.financialInclusionScore} />
        <ScoreDisplay label="Sustainability" score={blueprint.overallSustainabilityScore} />
        <ScoreDisplay label="Resilience" score={blueprint.systemicResilienceScore} />
        <ScoreDisplay label="Innovation" score={blueprint.innovationPotentialScore} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <SectionTitle title="Executive Intelligence" subtitle="AI-Driven Strategic Analysis of Infrastructure Network" />
          <div className="bg-slate-800/40 border border-slate-700 p-6 rounded-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-3">
              <span className="text-[10px] font-bold text-cyan-400 bg-cyan-400/10 px-2 py-1 rounded border border-cyan-400/20 mono">GEMINI-3.0 PRO ANALYST</span>
            </div>
            <div className="prose prose-invert max-w-none text-slate-300 leading-relaxed text-lg">
              {summary}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <SectionTitle title="Operational Audit Trail" />
              <div className="grid grid-cols-2 gap-4">
                <MetricCard title="Immutability" value={blueprint.operationalAudit.auditTrailImmutabilityScore * 100} unit="%" />
                <MetricCard title="Monitoring" value={blueprint.operationalAudit.realTimeMonitoringCoveragePercent} unit="%" />
                <MetricCard title="Policy Enforce" value={blueprint.operationalAudit.governancePolicyEnforcementRate} unit="%" />
                <MetricCard title="Anomaly Accuracy" value={blueprint.operationalAudit.anomalyDetectionAccuracyPercent} unit="%" />
              </div>
            </div>
            <div className="space-y-4">
              <SectionTitle title="Digital Flow Metrics" />
              <div className="grid grid-cols-2 gap-4">
                <MetricCard title="Peak TPS" value={blueprint.digitalValueFlow.peakTransactionVolumePerSec.toLocaleString()} />
                <MetricCard title="Settlement" value={blueprint.digitalValueFlow.realTimeSettlementRatePercent} unit="%" trend="up" />
                <MetricCard title="Routing Opt" value={blueprint.digitalValueFlow.multiRailRoutingEfficiencyIndex * 100} unit="%" />
                <MetricCard title="Fraud Blocking" value={blueprint.digitalValueFlow.fraudPreventionBlockingRatePercent * 100} unit="%" />
              </div>
            </div>
          </div>

          <SectionTitle title="Sustainable Finance Profile" />
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl grid grid-cols-2 md:grid-cols-4 gap-6">
             <div>
               <p className="text-[10px] font-bold text-slate-500 uppercase mb-1">Carbon Offset</p>
               <p className="text-xl font-bold text-emerald-400 mono">{blueprint.esgImpact.carbonOffsetPotentialTonsPerYear} <span className="text-xs">t/y</span></p>
             </div>
             <div>
               <p className="text-[10px] font-bold text-slate-500 uppercase mb-1">Sustainable Index</p>
               <p className="text-xl font-bold text-emerald-400 mono">{blueprint.esgImpact.sustainableFinanceIndex.toFixed(2)}</p>
             </div>
             <div>
               <p className="text-[10px] font-bold text-slate-500 uppercase mb-1">Ethics Compliance</p>
               <p className="text-xl font-bold text-emerald-400 mono">{blueprint.esgImpact.digitalEthicsComplianceScore.toFixed(2)}</p>
             </div>
             <div>
               <p className="text-[10px] font-bold text-slate-500 uppercase mb-1">Social Equity</p>
               <p className="text-xl font-bold text-emerald-400 mono">{blueprint.esgImpact.socialEquityInvestmentScore.toFixed(2)}</p>
             </div>
          </div>
        </div>

        <div className="space-y-6">
          <SectionTitle title="Regulatory Architecture" />
          <div className="bg-slate-900 p-6 rounded-2xl border border-slate-700/50 shadow-2xl space-y-6">
             <div className="space-y-2">
                <div className="flex justify-between text-xs font-bold text-slate-500">
                   <span>INNOVATION VELOCITY</span>
                   <span className="text-amber-400">{(blueprint.regulatoryZoning.financialInnovationHubs.innovationVelocityIndex * 100).toFixed(0)}%</span>
                </div>
                <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                   <div className="h-full bg-amber-500" style={{ width: `${blueprint.regulatoryZoning.financialInnovationHubs.innovationVelocityIndex * 100}%` }}></div>
                </div>
             </div>

             <div className="space-y-2">
                <div className="flex justify-between text-xs font-bold text-slate-500">
                   <span>COMPLIANCE EFFICIENCY</span>
                   <span className="text-cyan-400">{(blueprint.regulatoryZoning.complianceCorridors.amlKycIntegration.transactionMonitoringEfficiencyPercent * 100).toFixed(0)}%</span>
                </div>
                <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                   <div className="h-full bg-cyan-500" style={{ width: `${blueprint.regulatoryZoning.complianceCorridors.amlKycIntegration.transactionMonitoringEfficiencyPercent * 100}%` }}></div>
                </div>
             </div>

             <div className="pt-4 space-y-3 border-t border-slate-800">
                <h4 className="text-[10px] font-bold text-slate-500 uppercase">Registered Zone Capacity</h4>
                <div className="flex justify-between items-center text-sm font-medium">
                   <span className="text-slate-400">Security Token Area</span>
                   <span className="text-slate-200 mono">{blueprint.regulatoryZoning.digitalAssetZones.securityTokenZones.areaSqKm} km²</span>
                </div>
                <div className="flex justify-between items-center text-sm font-medium">
                   <span className="text-slate-400">Utility Token Area</span>
                   <span className="text-slate-200 mono">{blueprint.regulatoryZoning.digitalAssetZones.utilityTokenZones.areaSqKm} km²</span>
                </div>
                <div className="flex justify-between items-center text-sm font-medium">
                   <span className="text-slate-400">Autonomous Finance</span>
                   <span className="text-slate-200 mono">{blueprint.regulatoryZoning.agenticControlZones.autonomousFinanceZones.areaSqKm} km²</span>
                </div>
             </div>
          </div>

          <div className="bg-gradient-to-br from-indigo-900/40 to-slate-900 p-6 rounded-2xl border border-indigo-500/20 shadow-xl">
             <h4 className="text-xs font-bold text-indigo-300 uppercase mb-4 tracking-widest">System Resilience Audit</h4>
             <div className="flex items-end justify-between">
                <div>
                   <p className="text-3xl font-bold text-white mono uppercase">{blueprint.operationalSustainability.cyberResilienceRating}</p>
                   <p className="text-[10px] text-slate-500 mt-1">THREAT POSTURE LEVEL</p>
                </div>
                <div className="text-right">
                   <p className="text-xl font-bold text-emerald-400 mono">{blueprint.operationalSustainability.systemUptimePercent * 100}%</p>
                   <p className="text-[10px] text-slate-500 mt-1">SLA ADHERENCE</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};
