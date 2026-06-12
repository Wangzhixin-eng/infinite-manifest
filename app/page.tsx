import Link from "next/link";

const tools = [
  {
    icon: "✨",
    title: "Vision Board Generator",
    desc: "Create stunning vision boards with drag & drop. Upload images, add affirmations, and manifest your dreams visually.",
    href: "/vision-board",
    color: "from-purple-600 to-pink-500",
  },
  {
    icon: "🎬",
    title: "Celebrity Success Stories",
    desc: "Watch real manifestation case studies from Jim Carrey, Oprah, Arnold & more. Learn the exact techniques they used.",
    href: "/success-stories",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: "🔮",
    title: "Affirmation Creator",
    desc: "Generate personalized affirmations powered by AI. Align your thoughts with your desired reality.",
    href: "/affirmations",
    color: "from-blue-600 to-cyan-500",
  },
  {
    icon: "🌙",
    title: "Guided Meditations",
    desc: "Audio meditations to align your vibration. Reprogram your subconscious for abundance and success.",
    href: "/meditations",
    color: "from-indigo-600 to-purple-600",
  },
];

const testimonials = [
  {
    quote: "I manifested my dream job within 30 days of using the vision board tool. The universe truly responds to clarity!",
    name: "Sarah M.",
    role: "Entrepreneur",
    avatar: "👩‍💼",
  },
  {
    quote: "The affirmation generator helped me overcome my limiting beliefs. I'm now running my own business.",
    name: "James L.",
    role: "Business Owner",
    avatar: "👨‍💻",
  },
  {
    quote: "Daily meditations shifted my entire perspective. My relationships have transformed completely.",
    name: "Priya K.",
    role: "Wellness Coach",
    avatar: "🧘‍♀️",
  },
];

const stats = [
  { value: "50,000+", label: "Active Users" },
  { value: "2M+", label: "Visions Created" },
  { value: "4.9★", label: "User Rating" },
  { value: "30+", label: "Countries" },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass py-4 px-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="text-2xl font-bold gradient-text">∞ Infinite Manifest</div>
          <div className="hidden md:flex items-center gap-8 text-sm">
            <Link href="/vision-board" className="hover:text-yellow-400 transition-colors">Vision Board</Link>
            <Link href="/affirmations" className="hover:text-yellow-400 transition-colors">Affirmations</Link>
            <Link href="/meditations" className="hover:text-yellow-400 transition-colors">Meditations</Link>
            <Link href="/courses" className="hover:text-yellow-400 transition-colors">Courses</Link>
            <Link href="/success-stories" className="hover:text-yellow-400 transition-colors">Success Stories</Link>
            <Link href="/blog" className="hover:text-yellow-400 transition-colors">Blog</Link>
          </div>
          <div className="flex items-center gap-3">
            <button className="btn-secondary !py-2 !px-5 text-sm">Log In</button>
            <button className="btn-primary !py-2 !px-5 text-sm">Start Free</button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20">
        <div className="inline-flex items-center gap-2 glass rounded-full px-5 py-2 mb-8">
          <span className="text-yellow-400">✨</span>
          <span className="text-sm">The #1 Manifestation Platform for English-Speaking Souls</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 max-w-4xl leading-tight">
          Your Dream Life<br />
          <span className="gradient-text">Starts With a Thought</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-10 leading-relaxed">
          Powerful manifestation tools, guided meditations, and courses to help you 
          align with abundance, attract your desires, and create the life you truly want.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <button className="btn-primary text-lg !px-10 !py-4">
            Create Your Vision Board — Free
          </button>
          <button className="btn-secondary text-lg !px-10 !py-4">
            Explore Courses
          </button>
        </div>

        <div className="mt-16 flex items-center gap-3 text-gray-400 text-sm">
          <span>No credit card required</span>
          <span>•</span>
          <span>Free forever plan available</span>
          <span>•</span>
          <span>Cancel anytime</span>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="text-center glass rounded-2xl p-6">
              <div className="text-3xl font-bold gradient-text mb-1">{s.value}</div>
              <div className="text-sm text-gray-400">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Tools */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Tools to <span className="gradient-text">Transform</span> Your Reality</h2>
            <p className="text-gray-400 max-w-xl mx-auto">Everything you need to manifest abundance, love, and success — backed by science and ancient wisdom.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-5">
            {tools.map((tool) => (
              <Link
                key={tool.title}
                href={tool.href}
                className="glass rounded-3xl p-8 card-hover group cursor-pointer"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${tool.color} flex items-center justify-center text-3xl mb-6`}>
                  {tool.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-yellow-400 transition-colors">{tool.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{tool.desc}</p>
                <div className="mt-6 text-yellow-400 text-sm font-semibold group-hover:underline">Start now →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How <span className="gradient-text">Infinite Manifest</span> Works</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Clarify Your Desire", desc: "Use our tools to get crystal clear about what you want. Vague desires create vague results." },
              { step: "02", title: "Align Your Vibration", desc: "Daily affirmations and meditations raise your frequency to match your desires." },
              { step: "03", title: "Receive & Take Action", desc: "The universe will open doors. Stay open, trust the process, and take inspired action." },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="text-5xl font-bold gradient-text mb-4">{item.step}</div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Real People, <span className="gradient-text">Real Manifestations</span></h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="glass rounded-2xl p-8 card-hover">
                <div className="text-4xl mb-4">{t.avatar}</div>
                <p className="text-gray-300 italic mb-6 leading-relaxed">"{t.quote}"</p>
                <div>
                  <div className="font-bold">{t.name}</div>
                  <div className="text-sm text-gray-400">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center glass rounded-3xl p-16">
          <h2 className="text-4xl font-bold mb-4">Your Dream Life Is Waiting</h2>
          <p className="text-gray-400 mb-10 text-lg">Join 50,000+ people who are actively manifesting their best lives. Start for free today.</p>
          <button className="btn-primary text-lg !px-12 !py-4">
            Begin Your Manifestation Journey
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="text-xl font-bold gradient-text mb-4">∞ Infinite Manifest</div>
              <p className="text-sm text-gray-400">Align with abundance. Manifest your dreams. Transform your reality.</p>
            </div>
            <div>
              <div className="font-bold mb-3 text-sm">Tools</div>
              <div className="space-y-2 text-sm text-gray-400">
                <Link href="/vision-board" className="block hover:text-yellow-400">Vision Board</Link>
                <Link href="/affirmations" className="block hover:text-yellow-400">Affirmation Creator</Link>
                <Link href="/meditations" className="block hover:text-yellow-400">Guided Meditations</Link>
              </div>
            </div>
            <div>
              <div className="font-bold mb-3 text-sm">Learn</div>
              <div className="space-y-2 text-sm text-gray-400">
                <Link href="/blog" className="block hover:text-yellow-400">Manifestation Blog</Link>
                <Link href="/success-stories" className="block hover:text-yellow-400">Celebrity Stories</Link>
                <Link href="/courses" className="block hover:text-yellow-400">All Courses</Link>
                <Link href="/about" className="block hover:text-yellow-400">About Us</Link>
              </div>
            </div>
            <div>
              <div className="font-bold mb-3 text-sm">Legal</div>
              <div className="space-y-2 text-sm text-gray-400">
                <Link href="/privacy" className="block hover:text-yellow-400">Privacy Policy</Link>
                <Link href="/terms" className="block hover:text-yellow-400">Terms of Service</Link>
                <Link href="/refund" className="block hover:text-yellow-400">Refund Policy</Link>
              </div>
            </div>
          </div>
          <div className="text-center text-sm text-gray-500 border-t border-white/5 pt-8">
            © 2025 Infinite Manifest. All rights reserved. Manifest responsibly. ✨
          </div>
        </div>
      </footer>
    </main>
  );
}
