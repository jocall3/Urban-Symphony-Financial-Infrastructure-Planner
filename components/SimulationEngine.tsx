
import React, { useState } from 'react';
import { FinancialInfrastructureBlueprint } from '../types';
import { SectionTitle } from './Common';
import { runStrategicSimulation, SimulationResult } from '../services/geminiService';

export const SimulationEngine: React.FC<{ blueprint: FinancialInfrastructureBlueprint }> = ({ blueprint }) => {
  const [simType, setSimType] = useState('Systemic Shock Audit');
  const [isSimulating, setIsSimulating] = useState(false);
  const [result, setResult] = useState<SimulationResult | null>(null);

  const simulationOptions = [
    'Systemic Shock Audit',
    'Cyber-Security Breach Scenario',
    'Regulatory Compliance Stress Test',
    'Hyper-Scale Transaction Load',
    'ESG & Carbon Offset Integrity Audit'
  ];

  const handleStartSim = async () => {
    setIsSimulating(true);
    setResult(null);
    try {
      const data = await runStrategicSimulation(blueprint, simType);
      setResult(data);
    } catch (e) {
      alert("Simulation failed due to node congestion.");
    } finally {
      setIsSimulating(false);
    }
  };

  return (
    <div className="space-y-8 animate-in slide-in-from-left duration-500">
      <SectionTitle title="Strategic Simulation Engine" subtitle="Execute AI-driven stress tests and impact audits" />

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1 space-y-4">
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl shadow-xl">
            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Select Protocol</h4>
            <div className="space-y-2">
              {simulationOptions.map(opt => (
                <button
                  key={opt}
                  onClick={() => setSimType(opt)}
                  className={`w-full text-left p-3 rounded-lg text-xs font-bold transition-all border ${
                    simType === opt ? 'bg-cyan-600 border-cyan-400 text-white' : 'bg-slate-800 border-slate-700 text-slate-400 hover:border-slate-500'
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
            <button
              onClick={handleStartSim}
              disabled={isSimulating}
              className="w-full mt-8 bg-cyan-600 hover:bg-cyan-700 disabled:bg-slate-800 py-4 rounded-xl font-bold text-white shadow-xl shadow-cyan-500/20 transition-all flex items-center justify-center space-x-2"
            >
              {isSimulating ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>PROCESSING...</span>
                </>
              ) : 'INITIALIZE SIMULATION'}
            </button>
          </div>
        </div>

        <div className="lg:col-span-3">
          {isSimulating ? (
            <div className="h-[500px] bg-slate-900/50 border border-slate-800 rounded-3xl flex flex-col items-center justify-center text-center p-12 space-y-6">
               <div className="w-24 h-24 relative">
                  <div className="absolute inset-0 border-4 border-cyan-500/20 rounded-full"></div>
                  <div className="absolute inset-0 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>
               </div>
               <div>
                 <h3 className="text-xl font-bold text-white mb-2">Engaging Neural Simulation Core</h3>
                 <p className="text-slate-400 max-w-sm mx-auto">Gemini is processing systemic risk factors and multi-rail throughput bottlenecks for the current architecture...</p>
               </div>
               <div className="w-full max-w-xs h-1 bg-slate-800 rounded-full overflow-hidden">
                 <div className="h-full bg-cyan-500 animate-[loading_2s_infinite]"></div>
               </div>
            </div>
          ) : result ? (
            <div className="space-y-6 animate-in zoom-in duration-300">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 <div className="bg-slate-900 border border-slate-700 p-6 rounded-2xl">
                    <p className="text-xs font-bold text-slate-500 uppercase mb-1">Scenario Risk Level</p>
                    <p className={`text-4xl font-bold mono ${result.riskScore > 70 ? 'text-rose-400' : result.riskScore > 30 ? 'text-amber-400' : 'text-emerald-400'}`}>
                      {result.riskScore}%
                    </p>
                 </div>
                 <div className="bg-slate-900 border border-slate-700 p-6 rounded-2xl">
                    <p className="text-xs font-bold text-slate-500 uppercase mb-1">Projected ROI Delta</p>
                    <p className="text-4xl font-bold mono text-cyan-400">{result.projectedROI}</p>
                 </div>
              </div>

              <div className="bg-slate-800/40 border border-slate-700 p-8 rounded-2xl">
                 <h4 className="text-lg font-bold text-white mb-4">Neural Audit Log: {simType}</h4>
                 <p className="text-slate-300 leading-relaxed whitespace-pre-wrap mb-8 italic">
                   "{result.executiveSummary}"
                 </p>
                 
                 <div className="space-y-4 pt-6 border-t border-slate-700">
                    <h5 className="text-xs font-bold text-slate-500 uppercase tracking-widest">Recommended Mitigation Protocols</h5>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                       {result.mitigationSteps.map((step, idx) => (
                         <div key={idx} className="bg-slate-900 p-4 rounded-xl border border-slate-700 text-xs text-slate-300 font-medium">
                           <span className="text-cyan-400 block mb-2 font-bold mono">STEP 0{idx+1}</span>
                           {step}
                         </div>
                       ))}
                    </div>
                 </div>
              </div>
            </div>
          ) : (
            <div className="h-[500px] border-2 border-dashed border-slate-800 rounded-3xl flex flex-col items-center justify-center text-slate-600 p-12 text-center">
               <span className="text-6xl mb-4 opacity-20">🧬</span>
               <h3 className="text-xl font-bold mb-2">Simulation Engine Idle</h3>
               <p className="max-w-xs mx-auto text-sm">Select a strategic scenario from the sidebar and initialize the simulation to analyze blueprint performance.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
