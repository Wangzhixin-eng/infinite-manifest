import Link from "next/link";

export default function VisionBoard() {
  return (
    <main className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-5xl mb-4">✨</div>
          <h1 className="text-4xl font-bold mb-4">Vision Board Generator</h1>
          <p className="text-gray-400 max-w-xl mx-auto">
            Create a powerful visual representation of your dreams. The law of attraction responds to clarity — 
            show the universe exactly what you want to attract.
          </p>
        </div>

        {/* Tool Preview Placeholder */}
        <div className="glass rounded-3xl p-8 mb-12 text-center min-h-[400px] flex flex-col items-center justify-center">
          <div className="text-6xl mb-6">🎨</div>
          <h2 className="text-2xl font-bold mb-4">Interactive Vision Board Editor</h2>
          <p className="text-gray-400 mb-8 max-w-md">
            Drag & drop images, add text overlays, choose layouts, and export your board as HD wallpaper.
          </p>
          <div className="flex gap-4 flex-wrap justify-center">
            <button className="btn-primary">Launch Editor</button>
            <button className="btn-secondary">View Examples</button>
          </div>
          <p className="text-xs text-gray-500 mt-6">Image upload + Canvas API powered • Export up to 4K resolution</p>
        </div>

        {/* How to Use */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            { icon: "🎯", title: "Step 1: Set Your Intent", desc: "Choose categories — career, relationships, health, travel, finances. Get clear on what you truly desire." },
            { icon: "📸", title: "Step 2: Add Images & Text", desc: "Upload your photos or search our curated image library. Add affirmation text overlays." },
            { icon: "📱", title: "Step 3: Save & Visualize", desc: "Download your board and set it as wallpaper. Look at it daily for 5-10 minutes." },
          ].map((item) => (
            <div key={item.title} className="glass rounded-2xl p-6">
              <div className="text-3xl mb-3">{item.icon}</div>
              <h3 className="font-bold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Tips */}
        <div className="glass rounded-3xl p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">🔥 Pro Tips for Vision Boards</h2>
          <ul className="space-y-3 text-gray-300">
            <li>• <strong>Be specific:</strong> "Dream home in Costa Rica" beats "nice house"</li>
            <li>• <strong>Emotions matter:</strong> Choose images that make you feel the desire already fulfilled</li>
            <li>• <strong>Review daily:</strong> Set your vision board as phone/computer wallpaper</li>
            <li>• <strong>Update quarterly:</strong> As you manifest, evolve your board with new desires</li>
            <li>• <strong>Add affirmations:</strong> Overlay empowering text like "I am wealthy" or "I am loved"</li>
          </ul>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button className="btn-primary text-lg !px-12 !py-4">
            Create Your Vision Board Free
          </button>
          <p className="text-sm text-gray-500 mt-4">No signup required • Export immediately</p>
        </div>
      </div>
    </main>
  );
}
