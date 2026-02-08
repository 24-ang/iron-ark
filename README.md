# Iron Ark: Wasteland Chronicles

> **A post-apocalyptic text-based RPG powered by AI**

**Iron Ark** is an immersive AI-driven text adventure game set in a wasteland world. Built with a "narrative-instruction separation" architecture, it leverages advanced AI to deliver dynamic storytelling and complex state management.

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

## 📄 License

This project is for educational and demonstration purposes.

## 🙏 Acknowledgments

- Original concept inspired by classic text-based RPGs
- UI design influenced by retro terminal aesthetics
- Built with modern web technologies

---

**Made with ❤️ for the wasteland survivors**
