

# Iron Ark: Wasteland Chronicles

> **A post-apocalyptic text-based RPG powered by Google Gemini**

**Iron Ark** is an immersive AI-driven text adventure game set in a wasteland world. Built with a "narrative-instruction separation" architecture, it leverages the advanced context window of **Gemini 1.5 Pro** to deliver dynamic storytelling and complex state management.

## 🎮 Game Features

- **AI-Powered Narrative Engine**: Dynamic story generation utilizing Gemini's long-context capabilities.
- **Strict Narrative-Instruction Separation**: Logs for storytelling, Tavern Commands for state changes.
- **Chain-of-Thought Reasoning**: Pre-planning and post-validation ensure logical consistency in the wasteland.
- **Modular Prompt System**: World-building, rules, writing style, and loot systems based on specialized system instructions.
- **Immersive Terminal UI**: Wasteland-themed green terminal interface with AI thinking process visualization.

## 🛠️ Tech Stack

- **Frontend**: React + TypeScript + Vite
- **Styling**: Tailwind CSS + Lucide Icons
- **AI Integration**: Google Gemini API
- **State Management**: Custom hooks and context

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

2. Install dependencies:
```bash
npm install

```


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

* **Survival System**: Manage HP, stamina, and mental state.
* **Dynamic World**: AI-generated events and encounters based on user choices.
* **Inventory Management**: Collect and use items in the wasteland.
* **Story Branches**: Your choices shape the narrative in real-time.

## 🤝 Contributing & Credits

### 📢 Acknowledgments

> **Core Logic based on:** [DXC](https://github.com/MikuLXK/DXC) by **MikuLXK**

**My Contribution:**
This project is a **UI/UX Redesign Variant** focused on immersive storytelling. While retaining the excellent Gemini narrative engine from the original DXC project, I have:

* Redesigned the entire interface into a **"Wasteland Terminal"** style.
* Optimized the visual hierarchy for better player immersion.
* Refined the prompt engineering for a darker, post-apocalyptic tone.

---

**Made with ❤️ for the wasteland survivors**

