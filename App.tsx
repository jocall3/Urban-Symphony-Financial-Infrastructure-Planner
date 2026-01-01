
import React, { useState, useEffect } from 'react';
import { api } from './services/apiService';
import { ProjectMetadata, FinancialInfrastructureBlueprint, UserProfile } from './types';
import { Dashboard } from './components/Dashboard';
import { LoadingOverlay } from './components/Common';
import { ProjectSelector } from './components/ProjectSelector';
import { ConstraintEditor } from './components/ConstraintEditor';
import { VisualizationLayer } from './components/VisualizationLayer';
import { SimulationEngine } from './components/SimulationEngine';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'projects' | 'design' | 'visualize' | 'simulation'>('dashboard');
  const [currentProject, setCurrentProject] = useState<ProjectMetadata | null>(null);
  const [activeBlueprint, setActiveBlueprint] = useState<FinancialInfrastructureBlueprint | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const init = async () => {
      setLoading(true);
      try {
        const projects = await api.getProjects();
        if (projects.length > 0) {
          const first = projects[0];
          setCurrentProject(first);
          if (first.currentBlueprintId) {
            const blueprint = await api.getBlueprintById(first.currentBlueprintId);
            setActiveBlueprint(blueprint || null);
          }
        }
      } catch (e) {
        console.error("Initialization failed", e);
      } finally {
        setLoading(false);
      }
    };
    init();
  }, []);

  const handleProjectSelect = async (p: ProjectMetadata) => {
    setLoading(true);
    setCurrentProject(p);
    if (p.currentBlueprintId) {
      const blueprint = await api.getBlueprintById(p.currentBlueprintId);
      setActiveBlueprint(blueprint || null);
    } else {
      setActiveBlueprint(null);
    }
    setLoading(false);
  };

  const navItems = [
    { id: 'dashboard', label: 'OVERVIEW', icon: '📊' },
    { id: 'projects', label: 'PIPELINE', icon: '📁' },
    { id: 'design', label: 'STUDIO', icon: '📐' },
    { id: 'simulation', label: 'SIMULATION', icon: '🧪' },
    { id: 'visualize', label: 'VISUALIZER', icon: '🌐' },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      {loading && <LoadingOverlay message="Synchronizing with Infrastructure Node..." />}
      
      <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur-xl sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-cyan-600 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-500/20">
              <span className="text-2xl">🏛️</span>
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tighter text-white">URBAN SYMPHONY</h1>
              <p className="text-[10px] text-cyan-500 font-bold mono tracking-[0.2em]">FINANCIAL INFRASTRUCTURE</p>
            </div>
          </div>
          
          <div className="hidden md:flex bg-slate-800/50 p-1 rounded-xl border border-slate-700">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id as any)}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all duration-300 flex items-center space-x-2 ${
                  activeTab === item.id ? 'bg-cyan-600 text-white shadow-lg' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-4">
             <div className="text-right hidden sm:block">
               <p className="text-xs font-bold text-white">A. Veldt</p>
               <p className="text-[10px] text-slate-500 uppercase">Quantum Financial Group</p>
             </div>
             <div className="w-8 h-8 rounded-full bg-slate-700 border border-slate-600 flex items-center justify-center text-xs font-bold">AV</div>
          </div>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-6 py-8">
        {!currentProject && activeTab !== 'projects' ? (
          <div className="flex flex-col items-center justify-center h-[60vh] text-center">
            <div className="text-6xl mb-6">📂</div>
            <h2 className="text-2xl font-bold mb-2">No Active Project</h2>
            <p className="text-slate-400 max-w-md mx-auto mb-8">Please initialize or select a strategic digital finance project to begin blueprinting.</p>
            <button 
              onClick={() => setActiveTab('projects')}
              className="bg-cyan-600 hover:bg-cyan-700 px-8 py-3 rounded-xl font-bold shadow-xl shadow-cyan-500/20 transition-all"
            >
              Enter Project Pipeline
            </button>
          </div>
        ) : (
          <>
            {activeTab === 'dashboard' && activeBlueprint && <Dashboard blueprint={activeBlueprint} />}
            {activeTab === 'projects' && (
              <ProjectSelector 
                currentProject={currentProject} 
                onSelect={handleProjectSelect} 
              />
            )}
            {activeTab === 'design' && currentProject && (
              <ConstraintEditor 
                projectId={currentProject.id} 
                onGenerated={(b) => { setActiveBlueprint(b); setActiveTab('dashboard'); }} 
              />
            )}
            {activeTab === 'simulation' && activeBlueprint && (
              <SimulationEngine blueprint={activeBlueprint} />
            )}
            {activeTab === 'visualize' && activeBlueprint && (
              <VisualizationLayer blueprint={activeBlueprint} />
            )}
          </>
        )}
      </main>

      <nav className="md:hidden sticky bottom-0 border-t border-slate-800 bg-slate-900/80 backdrop-blur-xl p-4 flex justify-between items-center z-50">
        {navItems.map(item => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id as any)}
            className={`flex flex-col items-center p-2 rounded-xl transition-all ${
              activeTab === item.id ? 'text-cyan-400' : 'text-slate-500'
            }`}
          >
            <span className="text-xl">{item.icon}</span>
          </button>
        ))}
      </nav>
    </div>
  );
};

export default App;
