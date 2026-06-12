import Link from "next/link";

const categories = [
  { id: "wealth", icon: "💰", title: "Wealth & Abundance", color: "from-yellow-500 to-orange-500" },
  { id: "health", icon: "💪", title: "Health & Vitality", color: "from-green-500 to-emerald-500" },
  { id: "love", icon: "💕", title: "Love & Relationships", color: "from-pink-500 to-rose-500" },
  { id: "career", icon: "🚀", title: "Career & Success", color: "from-blue-500 to-indigo-500" },
  { id: "confidence", icon: "🦁", title: "Confidence & Self-Worth", color: "from-purple-500 to-violet-500" },
  { id: "peace", icon: "🧘", title: "Peace & Mindfulness", color: "from-cyan-500 to-teal-500" },
];

const sampleAffirmations: Record<string, string[]> = {
  wealth: [
    "Money flows to me effortlessly and abundantly.",
    "I am a magnetic force for wealth and prosperity.",
    "I deserve infinite abundance in all areas of my life.",
    "The universe supports my financial freedom.",
    "I release all resistance to receiving wealth.",
  ],
  health: [
    "My body is healthy, strong, and full of energy.",
    "Every cell in my body radiates perfect health.",
    "I nourish my body with love and healthy choices.",
    "I am grateful for my body's incredible healing power.",
  ],
  love: [
    "I am worthy of deep, unconditional love.",
    "My heart is open to giving and receiving love.",
    "I attract soulmate relationships into my life.",
    "I am a love magnet — love flows to me from all directions.",
  ],
  career: [
    "I am destined for extraordinary success in my career.",
    "Opportunities for growth align perfectly with my path.",
    "I am confident in my unique gifts and talents.",
    "Success follows me everywhere I go.",
  ],
  confidence: [
    "I am enough, just as I am, right now.",
    "I stand in my power and own my magnificence.",
    "I release comparison and embrace my unique journey.",
    "I am worthy of all my dreams and desires.",
  ],
  peace: [
    "I am at peace with what was, what is, and what will be.",
    "Inner calm flows through me in every moment.",
    "I choose peace over worry, trust over fear.",
    "The universe has my back — I am safe.",
  ],
};

export default function Affirmations() {
  return (
    <main className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-5xl mb-4">🔮</div>
          <h1 className="text-4xl font-bold mb-4">Affirmation Generator</h1>
          <p className="text-gray-400 max-w-xl mx-auto">
            AI-powered personalized affirmations aligned with your goals. 
            Reprogram your subconscious mind with the power of intentional words.
          </p>
        </div>

        {/* Category Selection */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`glass rounded-2xl p-6 text-left card-hover hover:border-yellow-400/30`}
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center text-2xl mb-3`}>
                {cat.icon}
              </div>
              <h3 className="font-bold text-sm">{cat.title}</h3>
            </button>
          ))}
        </div>

        {/* Sample Affirmations */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">🔥 Popular Affirmations</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {categories.flatMap((cat) =>
              sampleAffirmations[cat.id].map((aff, i) => (
                <div key={`${cat.id}-${i}`} className="glass rounded-xl p-5 hover:border-yellow-400/30 transition-colors cursor-pointer">
                  <p className="text-gray-200 text-sm leading-relaxed">{aff}</p>
                  <div className="flex items-center gap-2 mt-3">
                    <span className={`text-xs px-2 py-1 rounded-full bg-gradient-to-r ${cat.color} text-white font-semibold`}>
                      {cat.icon} {cat.title}
                    </span>
                    <button className="text-xs text-gray-500 hover:text-yellow-400 ml-auto">📋 Copy</button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* AI Generator CTA */}
        <div className="glass rounded-3xl p-10 mb-12 text-center glow-purple">
          <div className="text-4xl mb-4">🤖✨</div>
          <h2 className="text-2xl font-bold mb-3">AI Affirmation Generator</h2>
          <p className="text-gray-400 mb-6 max-w-md mx-auto">
            Enter your specific desire and our AI will craft personalized affirmations 
            uniquely designed for your subconscious mind.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="btn-primary">Generate My Affirmations</button>
            <button className="btn-secondary">View All Categories</button>
          </div>
        </div>

        {/* How to Use */}
        <div className="glass rounded-3xl p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">📝 How to Use Affirmations Effectively</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Morning Routine", desc: "Say your affirmations first thing in the morning before your day begins." },
              { title: "Mirror Work", desc: "Look yourself in the eyes and speak your affirmations aloud. This is powerful." },
              { title: "Write It Down", desc: "Journaling affirmations 3x strengthens neural pathways in your brain." },
              { title: "Before Sleep", desc: "The subconscious is most receptive as you drift off to sleep." },
              { title: "Feel the Words", desc: "Don't just repeat — FEEL the emotion behind each affirmation." },
              { title: "Be Consistent", desc: "Do them daily for 30 days minimum. Consistency is the key." },
            ].map((item) => (
              <div key={item.title} className="flex gap-3">
                <div className="text-2xl">✨</div>
                <div>
                  <h3 className="font-bold text-sm mb-1">{item.title}</h3>
                  <p className="text-xs text-gray-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button className="btn-primary text-lg !px-12 !py-4">
            Generate Personalized Affirmations
          </button>
          <p className="text-sm text-gray-500 mt-4">Powered by AI • 100% Free • Instant Results</p>
        </div>
      </div>
    </main>
  );
}
