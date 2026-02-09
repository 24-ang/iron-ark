# Iron Ark: Wasteland Chronicles

> **🏆 Built for Gemini 3 Global Hackathon | Google DeepMind**

> **A post-apocalyptic text-based RPG powered by Google Gemini 3**

**Iron Ark** is an immersive AI-driven text adventure game set in a wasteland world. Built with a "narrative-instruction separation" architecture, it leverages the advanced context window of **Gemini 1.5 Pro/Flash** to deliver dynamic storytelling, complex state management, and emergent gameplay.

---

## 🌟 Gemini 3 Hackathon Highlights

This project showcases the power of **Gemini 3 API** through:

- **🧠 Advanced Chain-of-Thought Reasoning**: Multi-stage thinking process for narrative consistency
- **📚 Long-Context Utilization**: Managing 100K+ token game states with Gemini's extended context window
- **🎭 Dynamic World Simulation**: Real-time NPC behavior, faction dynamics, and emergent storytelling
- **🔄 Adaptive Difficulty**: AI-driven challenge scaling based on player performance
- **💬 Natural Language Understanding**: Complex command parsing and intent recognition

**Why Gemini 3?** The extended context window and improved reasoning capabilities enable persistent, coherent narratives across hundreds of player turns while maintaining complex game state, NPC memories, and world dynamics.

## 🎮 Game Features

- **AI-Powered Narrative Engine**: Dynamic story generation utilizing Gemini's long-context capabilities.
- **Strict Narrative-Instruction Separation**: Logs for storytelling, Tavern Commands for state changes.
- **Chain-of-Thought Reasoning**: Pre-planning and post-validation ensure logical consistency in the wasteland.
- **Modular Prompt System**: World-building, rules, writing style, and loot systems based on specialized system instructions.
- **Immersive Terminal UI**: Wasteland-themed green terminal interface with AI thinking process visualization.

## 🛠️ Tech Stack

- **AI Engine**: Google Gemini 3 API (Gemini 1.5 Pro/Flash)
- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS + Lucide Icons
- **State Management**: Custom hooks with React Context
- **Architecture**: Modular prompt system with narrative-instruction separation

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- Google Gemini API Key (Get one in Google AI Studio)

### Installation

1. Clone the repository:
   ```bash
   git clone [https://github.com/24-ang/iron-ark.git](https://github.com/24-ang/iron-ark.git)
   cd iron-ark
   ```

````

2. Install dependencies:
```bash
npm install

````

3. Configure environment:
   Create a `.env.local` file and add your API key:

```env
VITE_GEMINI_API_KEY=your_gemini_key_here

```

4. Start development server:

```bash
npm run dev

```

## 🎯 Game Mechanics

- **Survival System**: Manage HP, stamina, and mental state in a harsh wasteland.
- **Dynamic World**: AI-generated events and encounters based on user choices.
- **NPC Memory System**: NPCs remember your actions and relationships evolve.
- **Faction Dynamics**: Your choices affect relationships with different wasteland factions.
- **Inventory Management**: Collect and use items strategically.
- **Story Branches**: Your choices shape the narrative in real-time with Gemini's adaptive storytelling.

## 🎬 Demo & Screenshots

> **Live Demo**: [Try Iron Ark](https://github.com/24-ang/iron-ark) _(Installation required)_

### Key Features in Action

- **Immersive Terminal UI**: Wasteland-themed green terminal with real-time AI thinking visualization
- **Dynamic Storytelling**: Every playthrough is unique thanks to Gemini's generative capabilities
- **Complex State Management**: Persistent world state across sessions

## 🏗️ Technical Architecture

### Gemini Integration Highlights

```typescript
// Modular Prompt System
- System Instructions: World rules, combat mechanics, loot systems
- Chain-of-Thought: Pre-planning → Execution → Validation
- Context Management: Efficient token usage with tiered memory system
- Streaming Responses: Real-time narrative generation
```

### Why This Architecture?

1. **Narrative-Instruction Separation**: Clean separation between story output and game state changes
2. **Modular Prompts**: Easy to extend and customize game mechanics
3. **Long-Context Optimization**: Efficient use of Gemini's 100K+ token window
4. **Scalable Design**: Can support multiple game modes and difficulty levels

## 🤝 Contributing & Credits

### 📢 Acknowledgments

> **Core Logic based on:** [DXC](https://github.com/MikuLXK/DXC) by **MikuLXK**

**My Contribution:**
This project is a **UI/UX Redesign Variant** focused on immersive storytelling. While retaining the excellent Gemini narrative engine from the original DXC project, I have:

- Redesigned the entire interface into a **"Wasteland Terminal"** style.
- Optimized the visual hierarchy for better player immersion.
- Refined the prompt engineering for a darker, post-apocalyptic tone.

---

**Made with ❤️ for the wasteland survivors**
