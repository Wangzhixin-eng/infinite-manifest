const stories = [
  {
    id: "jim-carrey",
    celebrity: "Jim Carrey",
    tag: "💰 Wealth Manifestation",
    thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=640&q=80",
    title: "How Jim Carrey Manifested $10 Million",
    desc: "Before his acting career took off, Jim Carrey wrote himself a $10 million check for 'acting services rendered' with a future date. Years later, he earned exactly that amount from 'Dumb and Dumber.' This is the power of writing your desires as if they're already true.",
    quote: "You can fail at what you don't want, so you might as well take a chance at doing what you love.",
    views: "2.4M",
    videoUrl: "https://www.youtube.com/embed/n_AJ2TJ4Yo8",
  },
  {
    id: "arnold-schwarzenegger",
    celebrity: "Arnold Schwarzenegger",
    tag: "🏆 Visualization Power",
    thumbnail: "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=640&q=80",
    title: "Arnold's Secret: Visualize Then Realize",
    desc: "Before becoming Mr. Universe, Arnold Schwarzenegger visualized his bodybuilding wins in vivid detail every night before sleep. He saw the trophy, felt the肌肉, heard the applause. He used the same technique to visualize his acting career and political future.",
    quote: "Strength does not come from winning. Your struggles develop your strengths.",
    views: "1.8M",
    videoUrl: "https://www.youtube.com/embed/g-jwWYX7Jlo",
  },
  {
    id: "oprah Winfrey",
    celebrity: "Oprah Winfrey",
    tag: "🌟 Mindset & Abundance",
    thumbnail: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=640&q=80",
    title: "Oprah: The Power of Gratitude & Visualization",
    desc: "From poverty to becoming the most influential woman in media, Oprah attributes her success to visualization, gratitude, and speaking her desires into existence. She kept a vision board at age 14 and never stopped using the power of focused intention.",
    quote: "The more you praise and celebrate your life, the more there is in life to celebrate.",
    views: "3.1M",
    videoUrl: "https://www.youtube.com/embed/FmA-vdwJ_0A",
  },
  {
    id: "will-smith",
    celebrity: "Will Smith",
    tag: "🔥 Belief & Big Goals",
    thumbnail: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=640&q=80",
    title: "Will Smith on Thinking & Becoming Your Vision",
    desc: "Will Smith repeatedly emphasizes that the secret to success is thinking BIG and refusing to let your current circumstances limit your imagination. He shares how he visualized his rap career and movie stardom from childhood.",
    quote: "Shut your mouth, get out the way, get paid, and go to sleep.",
    views: "5.2M",
    videoUrl: "https://www.youtube.com/embed/w3juDVsA2YI",
  },
  {
    id: "jennifer-lopez",
    celebrity: "Jennifer Lopez",
    tag: "💕 Love & Career Manifestation",
    thumbnail: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=640&q=80",
    title: "JLo's Vision Board at Age 19",
    desc: "At 19, Jennifer Lopez created a vision board with images of herself performing on stage. She manifested not only her music career but also specific roles and the life she dreamed of. She still uses vision boards today.",
    quote: "I never thought I could achieve what I achieved, but I always believed I would.",
    views: "1.5M",
    videoUrl: "https://www.youtube.com/embed/8SBDnKjBfJs",
  },
  {
    id: "jim-rohn",
    celebrity: "Jim Rohn",
    tag: "📚 Philosophy of Success",
    thumbnail: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=640&q=80",
    title: "Jim Rohn: You Are the Average of 5 People",
    desc: "The legendary motivational speaker Jim Rohn taught that you become the embodiment of the 5 people you spend the most time with. He manifested wealth through reading 5 books per week and applying what he learned.",
    quote: "You are the average of the five people you spend the most time with.",
    views: "8.7M",
    videoUrl: "https://www.youtube.com/embed/XnNBDwVBsOI",
  },
];

export default function SuccessStories() {
  return (
    <main className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-5xl mb-4">🎬</div>
          <h1 className="text-4xl font-bold mb-4">Celebrity Manifestation Stories</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Real stories from world-famous celebrities who used the law of attraction and visualization to manifest extraordinary lives. 
            These aren't just coincidences — it's the power of focused intention.
          </p>
        </div>

        {/* Featured Story */}
        <div className="glass rounded-3xl overflow-hidden mb-12 glow-purple">
          <div className="grid md:grid-cols-2">
            <div className="aspect-video">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/n_AJ2TJ4Yo8"
                title="Jim Carrey Manifestation"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="p-8 flex flex-col justify-center">
              <div className="text-xs text-yellow-400 font-bold mb-3">⭐ FEATURED STORY</div>
              <div className="text-sm text-purple-300 mb-2">💰 Wealth • 🎬 Hollywood</div>
              <h2 className="text-2xl font-bold mb-3">Jim Carrey: The $10 Million Check</h2>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                Before becoming one of the highest-paid actors in Hollywood, Jim Carrey wrote himself a check for $10 million 
                for 'acting services rendered.' He dated it 5 years in the future, visualized using it, then释放 it. 
                Years later, he earned exactly that amount from a single movie.
              </p>
              <blockquote className="border-l-2 border-yellow-400 pl-4 italic text-gray-300 text-sm mb-4">
                "You can fail at what you don't want, so you might as well take a chance at doing what you love."
              </blockquote>
              <div className="flex items-center gap-3 text-xs text-gray-500">
                <span>👁 2.4M views</span>
                <span>•</span>
                <span>🏆 Hollywood Legend</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {stories.slice(1).map((story) => (
            <div key={story.id} className="glass rounded-2xl overflow-hidden card-hover">
              {/* Video Thumbnail */}
              <div className="aspect-video relative cursor-pointer group">
                <img
                  src={story.thumbnail}
                  alt={story.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/30 transition-colors">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                    ▶
                  </div>
                </div>
                <div className="absolute top-3 right-3 bg-black/70 text-xs px-2 py-1 rounded text-gray-300">
                  ▶ Watch Video
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs text-purple-300 bg-purple-500/20 px-2 py-1 rounded-full">{story.tag}</span>
                </div>
                <h3 className="font-bold mb-2 leading-snug">{story.title}</h3>
                <p className="text-gray-400 text-xs mb-4 leading-relaxed">{story.desc}</p>
                <blockquote className="border-l-2 border-yellow-400/50 pl-3 italic text-gray-400 text-xs mb-4">
                  "{story.quote}"
                </blockquote>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">👁 {story.views} views</span>
                  <span className="text-xs text-yellow-400 font-semibold">{story.celebrity}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* How They Did It */}
        <div className="glass rounded-3xl p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">🔑 The Common Patterns in Their Success</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: "✍️", title: "Written Goals", desc: "They wrote down their desires as if already true — checks, letters, vision boards." },
              { icon: "🎯", title: "Daily Visualization", desc: "Every day they spent 5-15 minutes visualizing their desired outcome in vivid detail." },
              { icon: "💭", title: "Positive Belief", desc: "They refused to entertain doubt. They acted as if it was already done." },
              { icon: "⚡", title: "Inspired Action", desc: "They took massive action aligned with their vision, not random desperate effort." },
              { icon: "🙏", title: "Gratitude Practice", desc: "They daily gratitude'd as if their desires were already manifested." },
              { icon: "🤲", title: "Letting Go", desc: "They didn't obsess — they set the intention, then trusted the universe." },
              { icon: "📖", title: "Constant Learning", desc: "They read, studied, and surrounded themselves with growth-minded people." },
              { icon: "🌅", title: "Morning Rituals", desc: "They started each day with visualization, affirmations, or meditation." },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="text-3xl mb-2">{item.icon}</div>
                <h3 className="font-bold text-sm mb-1">{item.title}</h3>
                <p className="text-xs text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Your Turn CTA */}
        <div className="glass rounded-3xl p-10 text-center glow-gold">
          <div className="text-5xl mb-4">🚀</div>
          <h2 className="text-2xl font-bold mb-3">Your Story Starts Now</h2>
          <p className="text-gray-400 mb-6 max-w-md mx-auto">
            If these world-famous celebrities could manifest extraordinary lives, so can you. 
            You have the same universal laws at your disposal. Start today — for free.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="btn-primary">Create Your Vision Board</button>
            <button className="btn-secondary">Generate Affirmations</button>
          </div>
        </div>
      </div>
    </main>
  );
}
