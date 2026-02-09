import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';

type Language = 'en' | 'zh';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
    toggleLanguage: () => void;
}

const translations: Record<Language, Record<string, string>> = {
    en: {
        // TopNav
        "DAY": "DAY",
        "LOCATION_DEFAULT": "Iron Ark - Outskirts",
        "WEATHER_DEFAULT": "Radiation Dust Storm (Light)",
        
        // LeftPanel
        "MENTAL_HEALTH": "MENTAL HEALTH",
        "FATIGUE": "FATIGUE",
        "COMBAT_STATS": "COMBAT STATS",
        "LOADOUT": "LOADOUT",
        "PERKS_ABILITIES": "PERKS / ABILITIES",
        "HEAD": "HEAD",
        "CHEST": "CHEST",
        "CORE": "CORE",
        "L_ARM": "L.ARM",
        "R_ARM": "R.ARM",
        "L_LEG": "L.LEG",
        "R_LEG": "R.LEG",
        "HP": "HP",
        "MP": "MP",
        "SP": "SP",
        "SAN": "SAN", // Sanity

        // Combat Stats (Acronyms)
        "PWR": "PWR",
        "STR": "STR",
        "MOB": "MOB",
        "NRG": "NRG",
        "VALIS": "VALIS",
        "EXCELIA": "EXCELIA",
        
        "PHYSIOLOGY": "PHYSIOLOGY",
        "NO_DATA": "NO DATA",
        "MAIN_HAND": "MAIN",
        "SUB_HAND": "SUB",
        "BODY_SLOT": "BODY",
        "ACC_SLOT": "ACC",

        // RightPanel
        "INVENTORY": "INVENTORY",
        "VAULT": "VAULT",
        "BONDS": "BONDS",
        "CACHE": "CACHE",
        "GEAR": "GEAR",
        "TECH": "TECH",
        "SQUAD": "SQUAD",
        "SCAN": "SCAN",
        "MAP": "MAP",
        "LOGS": "LOGS",
        "COMMS": "COMMS",
        "WORLD": "WORLD",
        "SOCIAL": "SOCIAL",
        "HOME": "HOME",
        "TASKS": "TASKS",
        "DATA": "DATA",
        "STORY": "STORY",
        "CONFIG": "CONFIG",

        // GameInput
        "USER_COMMS": "USER COMMS",
        "REMOVE_COMMAND": "Remove Command",
        "REROLL_SYSTEM": "REROLL SYSTEM",
        "PROCESSING": "PROCESSING...",
        "COMBAT_FREE_ACTION": "COMBAT ACTIVE | FREE ACTION...",
        "COMBAT_AWAITING": "COMBAT MODE | AWAITING COMMAND...",
        "INPUT_PLACEHOLDER": "WHAT WILL YOU DO?", // Renamed from WHAT_WILL_YOU_DO
        "PROCESSING_INDICATOR": "/// PROCESSING ///",
        "SEND": "SEND",
        "ACTION": "ACTION",
        
        // CombatPanel
        "SCANNING_ENEMIES": "Scanning Hostiles...",
        "HOSTILES": "HOSTILES",
        "COUNT": "COUNT",
        "LEVEL": "LVL",
        "ATK": "ATK",
        "LOCKED_TARGET": "LOCKED TARGET",
        "DEFAULT_ENEMY_DESC": "Hostility is gathering.",
        "SKILL_ARCHIVE": "SKILL ARCHIVE",
        "NO_SKILLS": "No identifiable skills",
        "COMBAT_IN_PROGRESS": "COMBAT IN PROGRESS",
        "COMBAT_LOG": "LOG",
        "COMBAT_START": "Combat Started",
        "TARGET": "TARGET",
        "CMD_ATTACK": "ATTACK",
        "CMD_SKILL": "SKILL",
        "CMD_ITEM": "ITEM",
        "CMD_GUARD": "GUARD",
        "CMD_TALK": "ACTION",
        "CMD_ESCAPE": "ESCAPE",
        "SELECT_SKILL_MAGIC": "SELECT SKILL / MAGIC",
        "SELECT_ITEM": "SELECT ITEM",
        "DESCRIBE_ACTION": "DESCRIBE FREE ACTION",
        "SKILLS": "SKILLS",
        "MAGIC": "MAGIC",
        "NO_SKILLS_MAGIC": "No available skills/magic",
        "NO_ITEMS": "No items in inventory",
        "ACTION_PLACEHOLDER": "Describe your special action (e.g., Jump using terrain, Throw sand, Persuade...)",
        "EXECUTE_ACTION": "EXECUTE",
        "BACK": "BACK",

        // CenterPanel
        "TURN": "Turn",
        "AI_ANALYSIS": "AI ANALYSIS",
        "RETURN": "RETURN",
        "PROCESSING_DOTS": "Processing...",
        "ZONE_JUMP": "ZONE JUMP",
        "CURRENT_ZONE": "Current Zone",
        "ZONE_JUMP_HINT": "Enter zone ID to warp",
        "GO": "GO",
        "INCOMING_STREAM": "Incoming Data Stream...",
        "AI_ANALYSIS_STREAM": "AI ANALYSIS (Streaming)",
        "INIT_STREAM": "Initializing Stream...",
        "ENGAGE": "ENGAGE",

        // GameInterface Actions
        "EQUIP_ITEM": "Equip Item",
        "UNEQUIP_ITEM": "Unequip Item",
        "USE_ITEM": "Use Item",
        
        // Generic
        "CONFIRM": "CONFIRM",
        "CANCEL": "CANCEL",
        "CLOSE": "CLOSE",
    },
    zh: {
        // TopNav
        "DAY": "第", // Special handling might be needed for "DAY X" vs "第X日"
        "LOCATION_DEFAULT": "钢铁方舟 - 外围",
        "WEATHER_DEFAULT": "辐射尘暴 (轻微)",
        
        // LeftPanel
        "MENTAL_HEALTH": "精神状态",
        "FATIGUE": "疲劳度",
        "COMBAT_STATS": "战斗属性",
        "LOADOUT": "装备",
        "PERKS_ABILITIES": "天赋 / 能力",
        "HEAD": "头部",
        "CHEST": "胸部",
        "CORE": "核心",
        "L_ARM": "左臂",
        "R_ARM": "右臂",
        "L_LEG": "左腿",
        "R_LEG": "右腿",
        "HP": "生命",
        "MP": "法力",
        "SP": "体力",
        "SAN": "理智",

        // RightPanel
        "CACHE": "仓库",
        "GEAR": "装备",
        "TECH": "科技",
        "SQUAD": "小队",
        "SCAN": "扫描",
        "MAP": "地图",
        "LOGS": "日志",
        "COMMS": "通讯",
        "WORLD": "世界",
        "SOCIAL": "社交",
        "HOME": "家园",
        "TASKS": "任务",
        "DATA": "数据",
        "STORY": "剧情",
        "CONFIG": "设置",

        // BottomBanner
        "GUILD_BROADCAST": "公会广播",
        "NEWS_TICKER_DEFAULT": "今日辐射指数较高，请幸存者减少外出。",
        
        // GameInput
        "INPUT_PLACEHOLDER": "你要做什么？",
        "SEND": "发送",
        "ACTION": "行动",

        // Generic
        "CONFIRM": "确认",
        "CANCEL": "取消",
        "CLOSE": "关闭",
    }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    // Default to English ('en') if no preference found
    const [language, setLanguage] = useState<Language>(() => {
        const saved = localStorage.getItem('app_language');
        return (saved === 'en' || saved === 'zh') ? saved : 'en';
    });

    useEffect(() => {
        localStorage.setItem('app_language', language);
    }, [language]);

    const toggleLanguage = () => {
        setLanguage(prev => prev === 'en' ? 'zh' : 'en');
    };

    const t = (key: string): string => {
        return translations[language][key] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
