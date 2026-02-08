# Iron Ark: Wasteland Chronicles

<<<<<<< HEAD

> **A post-apocalyptic text-based RPG powered by AI**

# **Iron Ark** is an immersive AI-driven text adventure game set in a wasteland world. Built with a "narrative-instruction separation" architecture, it leverages advanced AI to deliver dynamic storytelling and complex state management.

# iron-ark- - Wasteland Chronicles

**iron-ark-** 是一个以废土世界为背景的沉浸式 AI 文字冒险/游戏主持系统。项目以"叙事-指令分离"的 JSON 协议为核心，结合完整的世界观、判定规则与写作约束，生成一致且可追溯的剧情与状态更新，并提供战斗面板、记忆系统、战利品管理等完整游玩闭环。

> > > > > > > ca887da957658f3307021b36ee89268a96684180

## 🎮 Game Features

- **AI-Powered Narrative Engine**: Dynamic story generation with context-aware responses
- **Strict Narrative-Instruction Separation**: Logs for storytelling, Tavern Commands for state changes
- **Chain-of-Thought Reasoning**: Pre-planning and post-validation ensure logical consistency
- **Modular Prompt System**: World-building, rules, writing style, and loot systems
- **Immersive Terminal UI**: Wasteland-themed green terminal interface with AI thinking process visualization

## 🛠️ Tech Stack

- **Frontend**: React + TypeScript + Vite
- **Styling**: Tailwind CSS + Lucide Icons
- **AI Integration**: Gemini API (current version)
- **State Management**: Custom hooks and context

## 📁 Project Structure

```
├── components/          # UI components (combat panels, terminal logs, etc.)
├── prompts/            # Core prompt modules
├── types/              # TypeScript type definitions
├── utils/              # API adapters and data mapping
└── public/             # Static assets
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- Gemini API key

### Installation

1. Clone the repository:

```bash
git clone https://github.com/24-ang/iron-ark.git
cd iron-ark
```

2. Install dependencies:

```bash
npm install
```

3. Configure environment:
   Create a `.env.local` file and add your API key:

```env
VITE_GEMINI_API_KEY=your_key_here
```

4. Start development server:

```bash
npm run dev
```

## 🎯 Game Mechanics

- **Survival System**: Manage HP, stamina, and mental state
- **Dynamic World**: AI-generated events and encounters
- **Inventory Management**: Collect and use items in the wasteland
- **Character Progression**: Level up and develop your character
- **Story Branches**: Your choices shape the narrative

## 📝 Development Status

This project is actively being developed. Current features include:

- ✅ Core narrative engine
- ✅ Combat system
- ✅ Inventory management
- ✅ Character stats and progression
- ✅ Mobile-responsive UI
- ✅ Localized UI (English)

## 🤝 Contributing

This is a personal project, but suggestions and feedback are welcome!

## 📄 License & Attribution

> **⚠️ Important Notice**
>
> This project is a **derivative work** based on the original concept and core architecture shared by **MikuLXK** in a community forum for feedback and suggestions. The original work was shared without an explicit open-source license.
>
> **Modifications in this version:**
>
> - Complete UI/UX localization (Chinese → English)
> - Refactored component architecture
> - Enhanced mobile responsiveness
> - Updated styling and visual design
> - Prepared for AI platform migration (Gemini → Azure OpenAI)
>
> This derivative work is created for **educational purposes** and participation in the **Microsoft Azure Hackathon 2026**. It demonstrates:
>
> - Cross-platform AI integration capabilities
> - Localization and internationalization practices
> - Modern React/TypeScript development patterns

## 🙏 Acknowledgments

- **Original Core Architecture**: Based on the foundational work by **MikuLXK** (DXC project)
- **Inspiration**: Classic text-based RPGs and interactive fiction
- **UI Design**: Influenced by retro terminal aesthetics and cassette futurism
- **Community**: Thanks to the forum community for feedback and suggestions on the original project

## 🤝 Contributing

This is a personal educational project. If you're interested in the original concept, please seek out MikuLXK's work in the community forums.

---

**Made with ❤️ for the wasteland survivors**
