
import React, { useState } from 'react';
import { FinancialInfrastructureBlueprint } from '../types';
import { SectionTitle } from './Common';

export const VisualizationLayer: React.FC<{ blueprint: FinancialInfrastructureBlueprint }> = ({ blueprint }) => {
  const [activeLayer, setActiveLayer] = useState<keyof typeof blueprint.dataLayers | 'main'>('main');

  const layers = [
    { id: 'main', label: 'Global Architecture', icon: '🏛️' },
    { id: 'digitalAssetDistributionMap', label: 'Asset Density', icon: '💎' },
    { id: 'programmableValueRailsMap', label: 'Value Rails', icon: '⚡' },
    { id: 'esgInvestmentOverlayMap', label: 'ESG Impact', icon: '🌿' },
    { id: 'realTimeSettlementFlowMap', label: 'Settlement Flow', icon: '🌊' },
    { id: 'cyberSecurityRiskMap', label: 'Security Risk', icon: '🛡️' },
  ];

  const getCurrentImage = () => {
    if (activeLayer === 'main') return blueprint.architectureDiagramUrl;
    return blueprint.dataLayers[activeLayer as keyof typeof blueprint.dataLayers];
  };

  return (
    <div className="space-y-8 animate-in zoom-in duration-500">
      <div className="flex justify-between items-center">
        <SectionTitle title="Network Visualizer" subtitle="Interactive logical and spatial data overlays" />
        <div className="flex space-x-2">
           <button className="bg-slate-800 hover:bg-slate-700 p-2 px-4 rounded-xl text-xs font-bold border border-slate-700">PRINT SPECIFICATION</button>
           <button className="bg-cyan-600 hover:bg-cyan-700 p-2 px-4 rounded-xl text-xs font-bold shadow-lg shadow-cyan-500/20">EXPORT BINARY</button>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
        <div className="xl:col-span-3 space-y-4">
          <div className="bg-slate-900 border-4 border-slate-800 rounded-3xl overflow-hidden shadow-2xl relative aspect-video">
            <img 
              src={getCurrentImage()} 
              alt="Network Visualization" 
              className="w-full h-full object-cover transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent pointer-events-none"></div>
            
            <div className="absolute bottom-8 left-8 p-6 bg-slate-900/80 backdrop-blur-md border border-slate-700 rounded-2xl max-w-sm">
               <h3 className="text-xl font-bold mb-1">{layers.find(l => l.id === activeLayer)?.label}</h3>
               <p className="text-xs text-slate-400 font-medium">REAL-TIME DATA OVERLAY VERSION 4.2.0-BLUE</p>
               <div className="mt-4 flex space-x-4">
                 <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-500 animate-ping"></span>
                    <span className="text-[10px] font-bold text-slate-300 mono uppercase">Live Sync</span>
                 </div>
                 <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    <span className="text-[10px] font-bold text-slate-300 mono uppercase">Encrypted</span>
                 </div>
               </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="text-xs font-bold text-slate-500 uppercase tracking-[0.2em] mb-4">View Selection</h4>
          {layers.map(layer => (
            <button
              key={layer.id}
              onClick={() => setActiveLayer(layer.id as any)}
              className={`w-full p-4 rounded-2xl border transition-all flex items-center space-x-4 ${
                activeLayer === layer.id 
                  ? 'bg-cyan-600 border-cyan-400 shadow-xl shadow-cyan-500/20 text-white' 
                  : 'bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-600'
              }`}
            >
              <span className="text-2xl">{layer.icon}</span>
              <span className="text-sm font-bold tracking-tight">{layer.label}</span>
            </button>
          ))}

          <div className="mt-8 pt-8 border-t border-slate-800">
             <h4 className="text-xs font-bold text-slate-500 uppercase tracking-[0.2em] mb-4">Active Statistics</h4>
             <div className="space-y-4">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-400">Node Density</span>
                  <span className="font-bold text-slate-200">{blueprint.infrastructure.agenticNetworkConnectivity.agentNodeDensityPerSqKm}/sqkm</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-400">Mesh Latency</span>
                  <span className="font-bold text-slate-200">{blueprint.infrastructure.digitalTransactionRails.highFrequencyRails[0].latencyMs}ms</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-400">Sovereignty Boundary</span>
                  <span className="font-bold text-slate-200">{blueprint.regulatoryZoning.digitalSovereigntyBoundaryKm}km</span>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};
