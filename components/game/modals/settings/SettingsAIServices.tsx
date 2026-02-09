
import React, { useState, useEffect } from 'react';
import { Cpu, RefreshCw, X, List, Save, Check } from 'lucide-react';
import { AIEndpointConfig, GlobalAISettings } from '../../../../types';

interface SettingsAIServicesProps {
    settings: GlobalAISettings;
    onUpdate: (newSettings: GlobalAISettings) => void;
    onSave?: (newSettings: GlobalAISettings) => void;
}

export const SettingsAIServices: React.FC<SettingsAIServicesProps> = ({ settings, onUpdate }) => {
    const [activeTab, setActiveTab] = useState<'SOCIAL' | 'WORLD' | 'PHONE' | 'NPC_SYNC' | 'NPC_BRAIN'>('SOCIAL');

    // Helper to update settings immediately
    const updateSettings = (newSettings: GlobalAISettings) => {
        onUpdate(newSettings);
    };

    const handleConfigChange = (newConfig: AIEndpointConfig, path: string) => {
        const nextState = JSON.parse(JSON.stringify(settings));
        if (path === 'unified') {
            nextState.unified = newConfig;
        } else {
            nextState.services[path] = newConfig;
        }
        updateSettings(nextState);
    };

    const handleOverrideToggle = (enabled: boolean) => {
        updateSettings({ ...settings, useServiceOverrides: enabled });
    };

    const handleServiceOverrideToggle = (key: keyof GlobalAISettings['services'], enabled: boolean) => {
        const nextState = JSON.parse(JSON.stringify(settings));
        if (!nextState.serviceOverridesEnabled) nextState.serviceOverridesEnabled = {};
        nextState.serviceOverridesEnabled[key] = enabled;
        updateSettings(nextState);
    };

    return (
        <div className="space-y-6 h-full flex flex-col">
            <div className="flex justify-between items-center border-b border-steel-gray pb-4">
                <div className="flex items-center gap-3">
                    <Cpu className="text-cta" />
                    <h3 className="text-2xl font-display uppercase italic text-cta">API CONFIGURATION</h3>
                </div>
            </div>
            
            <div className="panel p-6 border border-steel-gray shadow-sm flex-1 overflow-y-auto custom-scrollbar bg-black/20">
                <div className="mb-6">
                    <label className="block text-xs font-bold uppercase mb-2 text-gray">MAIN API (DEFAULT)</label>
                    <AIConfigForm 
                        label="MAIN API CONFIG"
                        config={settings.unified}
                        onChange={(c) => handleConfigChange(c, 'unified')}
                    />
                </div>

                <div className="mb-6 flex items-center gap-3">
                    <input
                        type="checkbox"
                        id="enableServiceOverrides"
                        checked={settings.useServiceOverrides === true}
                        onChange={e => handleOverrideToggle(e.target.checked)}
                        className="w-4 h-4 text-cta border-steel-gray rounded focus:ring-cta bg-void"
                    />
                    <label htmlFor="enableServiceOverrides" className="text-xs font-bold uppercase text-gray select-none cursor-pointer">
                        ENABLE INDEPENDENT SERVICE APIS (USE MAIN API IF DISABLED)
                    </label>
                </div>

                <div className="mb-6 flex items-center gap-3">
                    <input
                        type="checkbox"
                        id="nativeThinkingChain"
                        checked={settings.nativeThinkingChain !== false}
                        onChange={e => {
                            updateSettings({ ...settings, nativeThinkingChain: e.target.checked });
                        }}
                        className="w-4 h-4 text-cta border-steel-gray rounded focus:ring-cta bg-void"
                    />
                    <label htmlFor="nativeThinkingChain" className="text-xs font-bold uppercase text-gray select-none cursor-pointer">
                        NATIVE THINKING CHAIN
                    </label>
                </div>
                <div className="mb-6 flex items-center gap-3">
                    <input
                        type="checkbox"
                        id="multiStageThinking"
                        checked={settings.multiStageThinking === true}
                        onChange={e => {
                            updateSettings({ ...settings, multiStageThinking: e.target.checked });
                        }}
                        className="w-4 h-4 text-cta border-steel-gray rounded focus:ring-cta bg-void"
                    />
                    <label htmlFor="multiStageThinking" className="text-xs font-bold uppercase text-gray select-none cursor-pointer">
                        MULTI-STEP THINKING (PLAN / DRAFT / FULL)
                    </label>
                </div>

                {settings.useServiceOverrides === true ? (
                    <div>
                        <div className="flex border-b border-steel-gray mb-4 overflow-x-auto">
                            {(['SOCIAL', 'WORLD', 'PHONE', 'NPC_SYNC', 'NPC_BRAIN'] as const).map(tab => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`px-4 py-2 text-xs font-bold uppercase border-b-2 transition-colors whitespace-nowrap ${activeTab === tab ? 'border-cta text-cta' : 'border-transparent text-gray'}`}
                                >
                                    {tab.replace('_', ' ')}
                                </button>
                            ))}
                        </div>

                        {activeTab === 'SOCIAL' && (
                            <ServiceOverridePanel
                                label="SOCIAL"
                                enabled={settings.serviceOverridesEnabled?.social === true}
                                onToggle={(enabled) => handleServiceOverrideToggle('social', enabled)}
                            >
                                <AIConfigForm config={settings.services.social} onChange={(c) => handleConfigChange(c, 'social')} disabled={settings.serviceOverridesEnabled?.social !== true} />
                            </ServiceOverridePanel>
                        )}
                        {activeTab === 'WORLD' && (
                            <ServiceOverridePanel
                                label="WORLD"
                                enabled={settings.serviceOverridesEnabled?.world === true}
                                onToggle={(enabled) => handleServiceOverrideToggle('world', enabled)}
                            >
                                <AIConfigForm config={settings.services.world} onChange={(c) => handleConfigChange(c, 'world')} disabled={settings.serviceOverridesEnabled?.world !== true} />
                            </ServiceOverridePanel>
                        )}
                        {activeTab === 'PHONE' && (
                            <ServiceOverridePanel
                                label="PHONE"
                                enabled={settings.serviceOverridesEnabled?.phone === true}
                                onToggle={(enabled) => handleServiceOverrideToggle('phone', enabled)}
                            >
                                <AIConfigForm config={settings.services.phone || settings.unified} onChange={(c) => handleConfigChange(c, 'phone')} disabled={settings.serviceOverridesEnabled?.phone !== true} />
                            </ServiceOverridePanel>
                        )}
                        {activeTab === 'NPC_SYNC' && (
                            <ServiceOverridePanel
                                label="NPC SYNC"
                                enabled={settings.serviceOverridesEnabled?.npcSync === true}
                                onToggle={(enabled) => handleServiceOverrideToggle('npcSync', enabled)}
                            >
                                <AIConfigForm config={settings.services.npcSync} onChange={(c) => handleConfigChange(c, 'npcSync')} disabled={settings.serviceOverridesEnabled?.npcSync !== true} />
                            </ServiceOverridePanel>
                        )}
                        {activeTab === 'NPC_BRAIN' && (
                            <ServiceOverridePanel
                                label="NPC BRAIN"
                                enabled={settings.serviceOverridesEnabled?.npcBrain === true}
                                onToggle={(enabled) => handleServiceOverrideToggle('npcBrain', enabled)}
                            >
                                <AIConfigForm config={settings.services.npcBrain} onChange={(c) => handleConfigChange(c, 'npcBrain')} disabled={settings.serviceOverridesEnabled?.npcBrain !== true} />
                            </ServiceOverridePanel>
                        )}
                    </div>
                ) : (
                    <div className="text-xs text-gray italic">
                        Independent APIs are disabled. All modules use the Main API configuration.
                    </div>
                )}
            </div>
        </div>
    );
};

const ServiceOverridePanel = ({ label, enabled, onToggle, children }: { label: string; enabled: boolean; onToggle: (enabled: boolean) => void; children: React.ReactNode }) => (
    <div className="space-y-3">
        <div className="flex items-center justify-between">
            <div className="text-xs font-bold uppercase text-gray">MODULE: {label}</div>
            <div className="flex items-center gap-2">
                <input
                    type="checkbox"
                    checked={enabled}
                    onChange={e => onToggle(e.target.checked)}
                    className="w-4 h-4 text-cta border-steel-gray rounded focus:ring-cta bg-void"
                />
                <span className="text-xs font-bold uppercase text-gray">{enabled ? 'INDEPENDENT API' : 'USE MAIN API'}</span>
            </div>
        </div>
        {children}
    </div>
);

const AIConfigForm = ({ config, onChange, label, disabled }: { config: AIEndpointConfig, onChange: (c: AIEndpointConfig) => void, label?: string; disabled?: boolean }) => {
    const [isFetchingModels, setIsFetchingModels] = useState(false);
    const [showModelList, setShowModelList] = useState(false);
    const [fetchedModels, setFetchedModels] = useState<string[]>([]);
    const isDisabled = disabled === true;

    const handleFetchModels = async () => {
        if (isDisabled) return;
        if (!config.apiKey) {
            alert("Please enter API Key");
            return;
        }
        setIsFetchingModels(true);
        setFetchedModels([]);
        try {
            let models: string[] = [];
            if (config.provider === 'gemini') {
                const url = `https://generativelanguage.googleapis.com/v1beta/models?key=${config.apiKey}`;
                const res = await fetch(url);
                const data = await res.json();
                if (data.models) {
                    models = data.models.map((m: any) => m.name.replace('models/', ''));
                } else if (data.error) {
                    throw new Error(data.error.message);
                }
            } else if (config.provider === 'deepseek') {
                models = ['deepseek-chat', 'deepseek-reasoner'];
                setFetchedModels(models);
                setShowModelList(true);
                setIsFetchingModels(false);
                return;
            } else {
                const url = `${config.baseUrl.replace(/\/$/, '')}/models`;
                const res = await fetch(url, {
                    headers: { 'Authorization': `Bearer ${config.apiKey}` }
                });
                const data = await res.json();
                if (data.data) {
                    models = data.data.map((m: any) => m.id);
                } else if (data.error) {
                    throw new Error(data.error.message);
                }
            }
            setFetchedModels(models.sort());
            setShowModelList(true);
        } catch (e: any) {
            alert(`Failed to fetch models: ${e.message}`);
        } finally {
            setIsFetchingModels(false);
        }
    };

    return (
        <div className={`space-y-4 bg-black/20 p-4 border border-steel-gray relative ${isDisabled ? 'opacity-50 pointer-events-none' : ''}`}>
            {label && <h4 className="font-display uppercase text-lg text-cta">{label}</h4>}
            
            <div>
                 <label className="block text-xs font-bold uppercase mb-1 text-gray">Provider</label>
                 <div className="flex flex-wrap gap-2">
                     {['gemini', 'openai', 'deepseek', 'custom'].map(p => (
                         <button 
                            key={p}
                            onClick={() => onChange({...config, provider: p as any, baseUrl: p === 'gemini' ? 'https://generativelanguage.googleapis.com' : p === 'openai' ? 'https://api.openai.com/v1' : p === 'deepseek' ? 'https://api.deepseek.com/v1' : ''})}
                            disabled={isDisabled}
                            className={`px-4 py-2 text-sm font-bold uppercase border-2 transition-colors ${config.provider === p ? 'bg-cta text-black border-cta' : 'bg-transparent text-gray border-steel-gray hover:border-cta hover:text-cta'} ${isDisabled ? 'cursor-not-allowed' : ''}`}
                         >
                            {p}
                         </button>
                     ))}
                 </div>
            </div>
            <div>
                <label className="block text-xs font-bold uppercase mb-1 text-gray">Base URL</label>
                <input 
                    type="text" 
                    value={config.baseUrl}
                    onChange={e => onChange({...config, baseUrl: e.target.value})}
                    className="w-full bg-void border-b border-steel-gray p-2 font-mono text-sm text-cta focus:border-cta outline-none"
                    placeholder={config.provider === 'custom' ? "Enter custom base URL..." : "Default URL"}
                    disabled={isDisabled || config.provider !== 'custom'}
                />
            </div>
            <div>
                <label className="block text-xs font-bold uppercase mb-1 text-gray">API Key</label>
                <input 
                    type="password" 
                    value={config.apiKey}
                    onChange={e => onChange({...config, apiKey: e.target.value})}
                    className="w-full bg-void border-b border-steel-gray p-2 font-mono text-sm text-cta focus:border-cta outline-none"
                    placeholder="sk-..."
                    disabled={isDisabled}
                />
            </div>
            <div className="relative">
                <label className="block text-xs font-bold uppercase mb-1 text-gray">Model ID</label>
                <div className="flex gap-2">
                    <input 
                        type="text" 
                        value={config.modelId}
                        onChange={e => onChange({...config, modelId: e.target.value})}
                        className="flex-1 bg-void border-b border-steel-gray p-2 font-mono text-sm text-cta focus:border-cta outline-none"
                        placeholder="model-id"
                        disabled={isDisabled}
                    />
                    <button 
                        onClick={handleFetchModels} 
                        disabled={isFetchingModels || isDisabled}
                        className="bg-steel-gray text-white px-3 py-1 hover:bg-cta hover:text-black transition-colors disabled:opacity-50"
                        title="Fetch Models"
                    >
                        {isFetchingModels ? <RefreshCw className="animate-spin" size={16} /> : <List size={16} />}
                    </button>
                </div>
                
                <div className="mt-2 flex items-center gap-2">
                    <input 
                        type="checkbox" 
                        id={`force-json-${label || 'config'}`} 
                        checked={config.forceJsonOutput || false}
                        onChange={e => onChange({...config, forceJsonOutput: e.target.checked})}
                        className="w-4 h-4 text-cta border-steel-gray rounded focus:ring-cta bg-void"
                        disabled={isDisabled}
                    />
                    <label htmlFor={`force-json-${label || 'config'}`} className="text-xs font-bold uppercase text-gray select-none cursor-pointer">
                        FORCE JSON OUTPUT
                    </label>
                </div>

                {showModelList && fetchedModels.length > 0 && (
                    <div className="absolute top-full right-0 w-full md:w-64 bg-black border-2 border-cta z-50 shadow-xl mt-1 max-h-60 overflow-y-auto custom-scrollbar animate-in fade-in slide-in-from-top-2">
                        <div className="flex justify-between items-center bg-cta text-black p-2 text-xs font-bold sticky top-0">
                            <span>AVAILABLE MODELS</span>
                            <button onClick={() => setShowModelList(false)}><X size={12}/></button>
                        </div>
                        {fetchedModels.map(model => (
                            <button 
                                key={model}
                                onClick={() => { onChange({...config, modelId: model}); setShowModelList(false); }}
                                className={`w-full text-left px-3 py-2 text-xs font-mono hover:bg-steel-gray/50 hover:text-cta border-b border-steel-gray/30 ${config.modelId === model ? 'bg-steel-gray/30 font-bold text-cta' : 'text-gray'}`}
                            >
                                {model}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};
