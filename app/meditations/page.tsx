import Link from "next/link";

const meditations = [
  { id: "morning-abundance", icon: "🌅", title: "Morning Abundance Flow", duration: "15 min", category: "Wealth", desc: "Start your day by aligning with infinite abundance. Set a prosperous tone for the entire day." },
  { id: "evening-release", icon: "🌙", title: "Evening Release & Restore", duration: "20 min", category: "Sleep", desc: "Let go of the day's tension. Clear your mind and prepare for deep, restful sleep." },
  { id: "confidence-boost", icon: "🦁", title: "Confidence Activation", duration: "12 min", category: "Confidence", desc: "Feel the power of self-love and confidence flowing through every cell in your body." },
  { id: "heart-opening", icon: "💕", title: "Heart Chakra Opening", duration: "18 min", category: "Love", desc: "Open your heart to receive and give unconditional love. Attract soulmate energy." },
  { id: " visualization", icon: "🌟", title: "Future Self Visualization", duration: "25 min", category: "Manifesting", desc: "Meet your future self who has already manifested your dreams. Powerful connection." },
  { id: "money-clearing", icon: "💎", title: "Money Block Clearing", duration: "14 min", category: "Wealth", desc: "Identify and clear deep-seated money blocks. Reprogram your wealth mindset." },
];

export default function Meditations() {
  return (
    <main className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-5xl mb-4">🌙</div>
          <h1 className="text-4xl font-bold mb-4">Guided Meditations</h1>
          <p className="text-gray-400 max-w-xl mx-auto">
            Audio-guided meditations to raise your vibration, clear energy blocks, 
            and align you with your manifestations. Press play. Let go. Trust the universe.
          </p>
        </div>

        {/* Featured */}
        <div className="glass rounded-3xl p-8 mb-10 glow-purple">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-4xl flex-shrink-0">
              ✨
            </div>
            <div className="text-center md:text-left flex-1">
              <div className="text-xs text-yellow-400 font-bold mb-2">⭐ FEATURED TODAY</div>
              <h2 className="text-2xl font-bold mb-2">Universal Alignment Meditation</h2>
              <p className="text-gray-400 text-sm mb-4">A powerful 20-minute journey to align every cell in your body with the frequency of your dreams. Trusted by 15,000+ practitioners.</p>
              <button className="btn-primary">▶ Play Now — 20 min</button>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="flex gap-3 mb-10 flex-wrap justify-center">
          {["All", "Wealth", "Love", "Confidence", "Sleep", "Manifesting", "Health"].map((cat, i) => (
            <button
              key={cat}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${i === 0 ? 'btn-primary' : 'glass hover:border-yellow-400/30'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Meditation List */}
        <div className="space-y-4 mb-12">
          {meditations.map((m) => (
            <div key={m.id} className="glass rounded-2xl p-5 flex items-center gap-5 card-hover cursor-pointer">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center text-2xl flex-shrink-0">
                {m.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-bold">{m.title}</h3>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300">{m.category}</span>
                </div>
                <p className="text-gray-400 text-xs truncate">{m.desc}</p>
              </div>
              <div className="flex items-center gap-3 flex-shrink-0">
                <span className="text-gray-500 text-sm">⏱ {m.duration}</span>
                <button className="btn-primary !py-2 !px-4 text-sm">▶ Play</button>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits */}
        <div className="glass rounded-3xl p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Why Meditate Daily?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: "🧬", title: "Reprogram Subconscious", desc: "Meditation bypasses the conscious mind and speaks directly to the subconscious, rewriting limiting beliefs." },
              { icon: "📡", title: "Raise Your Frequency", desc: "Your emotional state determines your attraction frequency. Higher vibration = stronger manifestation power." },
              { icon: "😴", title: "Better Sleep = More Manifesting", desc: "The subconscious is most receptive during sleep. Nightly meditations supercharge your results." },
              { icon: "💡", title: "Receive Divine Guidance", desc: "Stillness creates space for inspired ideas and intuitive nudges from the universe." },
              { icon: "🧘", title: "Reduce Stress & Resistance", desc: "Stress creates resistance to your manifestations. Meditation dissolves that resistance." },
              { icon: "⏰", title: "Build Consistency", desc: "Daily practice compounds. Even 10 minutes a day creates dramatic shifts over 30 days." },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="text-3xl mb-2">{item.icon}</div>
                <h3 className="font-bold text-sm mb-1">{item.title}</h3>
                <p className="text-xs text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button className="btn-primary text-lg !px-12 !py-4">
            Access All Meditations — Premium
          </button>
          <p className="text-sm text-gray-500 mt-4">Includes 50+ guided meditations • New ones added weekly</p>
        </div>
      </div>
    </main>
  );
}
