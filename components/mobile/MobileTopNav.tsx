import React, { useState } from 'react';
import { Clock, MapPin, CloudRain, Sun, Maximize2, Minimize2, Menu } from 'lucide-react';
import { GameState, Difficulty } from '../../types';

interface MobileTopNavProps {
    gameState: GameState;
    onExit: () => void;
    onOpenMenu: () => void;
}

export const MobileTopNav: React.FC<MobileTopNavProps> = ({ gameState, onExit, onOpenMenu }) => {
    const [isFullscreen, setIsFullscreen] = useState(false);

    const { 
        游戏时间: time = "第1日 00:00", 
        当前地点: location = "Unknown", 
        天气: weather = "Clear", 
        当前楼层: floor = 0, 
        世界坐标: coords,
        游戏难度: difficulty
    } = gameState;

    const isHellMode = difficulty === Difficulty.HELL;

    const toggleFullscreen = () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().catch((e) => {
                console.log(`Error attempting to enable fullscreen: ${e.message}`);
            });
            setIsFullscreen(true);
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
                setIsFullscreen(false);
            }
        }
    };

    // Parse time string "第X日 HH:MM"
    let dayStr = "DAY 1";
    let timeStr = "00:00";
    let fullDateStr = "1000-01-01";
    
    // Safety check for time string
    if (time && typeof time === 'string') {
        const match = time.match(/第(\d+)日\s+(\d{2}:\d{2})/);
        if (match) {
            dayStr = `DAY ${match[1]}`;
            timeStr = match[2];
            const start = new Date("1000-01-01");
            start.setDate(start.getDate() + (parseInt(match[1]) - 1));
            // fullDateStr = start.toISOString().split('T')[0]; // Optional: Keep formatting simple
        } else if (time.includes(' ')) {
            const p = time.split(' ');
            if (p.length >= 2) {
                dayStr = p[0];
                timeStr = p[1];
            }
        }
    }

    const coordsString = coords ? `X:${Math.round(coords.x)} Y:${Math.round(coords.y)}` : "X:0 Y:0";

    // Theme Constants
    const borderColor = isHellMode ? 'border-red-600' : 'border-blue-600';
    const textColor = isHellMode ? 'text-red-600' : 'text-blue-600';
    const iconColor = isHellMode ? 'text-red-600' : 'text-blue-600';
    const accentBg = isHellMode ? 'bg-red-600' : 'bg-blue-600';

    return (
        <div className="h-14 bg-zinc-950 border-b border-zinc-800 flex items-center justify-between px-3 shrink-0 z-50 overflow-hidden relative">
             {/* Decorative Top Border */}
            <div className={`absolute top-0 left-0 w-full h-[2px] ${accentBg} opacity-50`} />

            {/* Left: Menu Button & Time */}
            <div className="flex items-center gap-3">
                <button 
                    onClick={onOpenMenu}
                    className="p-1.5 text-zinc-400 hover:text-white border border-zinc-800 rounded bg-zinc-900/50"
                >
                    <Menu size={16} />
                </button>
                
                <div className="flex flex-col gap-0.5">
                    <div className="flex items-center gap-2">
                         <span className={`text-xs font-display font-bold ${textColor}`}>{dayStr}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <Clock size={10} className="text-zinc-400" />
                        <span className="text-sm font-display tracking-widest text-white leading-none">{timeStr}</span>
                    </div>
                </div>
            </div>

            {/* Center: Location */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center pointer-events-none">
                <div className="flex items-center gap-1">
                    <MapPin size={10} className={iconColor} />
                    <span className={`text-sm font-display font-bold uppercase tracking-wide text-white truncate max-w-[100px] text-center`}>
                        {location}
                    </span>
                </div>
                <div className="flex items-center gap-2 text-[9px] font-mono text-zinc-500">
                    <span>{floor > 0 ? `B${floor}F` : 'SURFACE'}</span>
                </div>
            </div>

            {/* Right: Weather & Fullscreen */}
            <div className="flex items-center gap-2">
                <div className={`flex items-center justify-center w-8 h-8 rounded bg-zinc-900 border ${borderColor}`}>
                    {weather.includes('雨') ? <CloudRain size={16} className="text-white" /> : <Sun size={16} className="text-white" />}
                </div>
                <button 
                    onClick={toggleFullscreen}
                    className="p-1.5 text-zinc-400 hover:text-white"
                >
                    {isFullscreen ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
                </button>
            </div>
        </div>
    );
};
