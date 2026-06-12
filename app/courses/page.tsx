const courses = [
  {
    id: "manifesting-masterclass",
    title: "28-Day Complete Manifestation Masterclass",
    desc: "The ultimate step-by-step guide to manifesting your dream life. From mindset to action — a proven system used by 10,000+ students worldwide.",
    price: "$97",
    originalPrice: "$297",
    rating: 4.9,
    students: 8420,
    level: "Beginner → Advanced",
    duration: "28 days",
    lessons: 42,
    badge: "Bestseller",
    color: "from-yellow-500 to-orange-500",
    icon: "🏆",
  },
  {
    id: "vision-board-mastery",
    title: "Vision Board Mastery: Attract Your Dream Life",
    desc: "Learn the science and art of vision boarding. Create boards that actually work and manifest results.",
    price: "$47",
    originalPrice: "$97",
    rating: 4.8,
    students: 3210,
    level: "Beginner",
    duration: "14 days",
    lessons: 18,
    badge: "Popular",
    color: "from-purple-500 to-pink-500",
    icon: "✨",
  },
  {
    id: "affirmation-mastery",
    title: "Affirmation Mastery: Rewire Your Subconscious",
    desc: "Go beyond basic affirmations. Learn advanced subconscious reprogramming techniques used by peak performers.",
    price: "$67",
    originalPrice: "$147",
    rating: 4.9,
    students: 5180,
    level: "Intermediate",
    duration: "21 days",
    lessons: 31,
    badge: "",
    color: "from-blue-500 to-cyan-500",
    icon: "🧠",
  },
  {
    id: "money-manifesting",
    title: "Wealth Manifesting Intensive",
    desc: "Specifically designed for those ready to attract financial abundance. Remove money blocks and attract wealth.",
    price: "$127",
    originalPrice: "$297",
    rating: 4.9,
    students: 2960,
    level: "Intermediate → Advanced",
    duration: "14 days",
    lessons: 24,
    badge: "New",
    color: "from-yellow-400 to-amber-500",
    icon: "💰",
  },
  {
    id: "love-manifesting",
    title: "Love Manifesting: Attract Your Soulmate",
    desc: "Clear relationship blocks, raise your vibration, and manifest a loving partnership that lights you up.",
    price: "$97",
    originalPrice: "$197",
    rating: 4.8,
    students: 4100,
    level: "Beginner → Intermediate",
    duration: "21 days",
    lessons: 28,
    badge: "",
    color: "from-pink-500 to-rose-500",
    icon: "💕",
  },
  {
    id: "subconscious-mastery",
    title: "Subconscious Mind Mastery",
    desc: "Deep-dive into subconscious reprogramming. NLP, hypnosis scripts, and proven psychology techniques.",
    price: "$197",
    originalPrice: "$397",
    rating: 4.9,
    students: 1840,
    level: "Advanced",
    duration: "30 days",
    lessons: 50,
    badge: "Premium",
    color: "from-indigo-500 to-purple-600",
    icon: "🔮",
  },
];

export default function Courses() {
  return (
    <main className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-5xl mb-4">📚</div>
          <h1 className="text-4xl font-bold mb-4">Courses & Programs</h1>
          <p className="text-gray-400 max-w-xl mx-auto">
            Expert-designed manifestation courses for every level. From beginners to advanced practitioners — 
            transform your reality through proven teachings.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-3 mb-10 flex-wrap justify-center">
          {["All Courses", "Bestsellers", "For Beginners", "Advanced", "Wealth", "Love"].map((tab, i) => (
            <button
              key={tab}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${i === 0 ? 'btn-primary' : 'glass hover:border-yellow-400/30'}`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Course Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {courses.map((course) => (
            <div key={course.id} className="glass rounded-2xl overflow-hidden card-hover group">
              {/* Card Header */}
              <div className={`h-32 bg-gradient-to-br ${course.color} flex items-center justify-center relative`}>
                <div className="text-5xl">{course.icon}</div>
                {course.badge && (
                  <div className="absolute top-3 right-3 bg-white text-black text-xs font-bold px-3 py-1 rounded-full">
                    {course.badge}
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-yellow-400 text-sm">★ {course.rating}</span>
                  <span className="text-gray-500 text-sm">•</span>
                  <span className="text-gray-500 text-sm">{course.students.toLocaleString()} students</span>
                </div>
                <h3 className="font-bold mb-2 leading-snug group-hover:text-yellow-400 transition-colors">{course.title}</h3>
                <p className="text-gray-400 text-xs mb-4 leading-relaxed">{course.desc}</p>
                <div className="flex gap-3 text-xs text-gray-500 mb-5">
                  <span>📚 {course.lessons} lessons</span>
                  <span>⏱ {course.duration}</span>
                  <span>📊 {course.level}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-gray-500 line-through text-sm">{course.originalPrice}</span>
                    <span className="text-2xl font-bold ml-2 gradient-text">{course.price}</span>
                  </div>
                  <button className="btn-primary !py-2 !px-5 text-sm">Enroll</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Guarantee */}
        <div className="glass rounded-3xl p-10 text-center mb-12">
          <div className="text-5xl mb-4">🛡️</div>
          <h2 className="text-2xl font-bold mb-3">30-Day Money-Back Guarantee</h2>
          <p className="text-gray-400 max-w-lg mx-auto">
            We are so confident in our courses that we offer a full refund within 30 days if you're not completely satisfied. 
            No questions asked.
          </p>
        </div>
      </div>
    </main>
  );
}
