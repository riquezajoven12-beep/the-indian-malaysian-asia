const faithData = [
  {
    name: 'Hinduism',
    symbol: '🕉️',
    description: 'The majority faith of Indian Malaysians, with over 3,000 temples across the nation. From the iconic Batu Caves to village kovils, Hindu traditions remain vibrant.',
    gradient: 'from-saffron to-maroon',
    stats: [
      { number: '3,000+', label: 'Temples' },
      { number: '1.6M', label: 'Devotees' },
    ],
  },
  {
    name: 'Sikhism',
    symbol: '☬',
    description: 'The Sikh community in Malaysia, though small, plays a significant role in business, security forces, and community service through their gurdwaras.',
    gradient: 'from-deep-green to-teal',
    stats: [
      { number: '120+', label: 'Gurdwaras' },
      { number: '100K', label: 'Members' },
    ],
  },
  {
    name: 'Christianity',
    symbol: '✝️',
    description: 'Indian Christians in Malaysia trace their roots to early conversions and colonial-era missions, maintaining a strong presence in education and healthcare.',
    gradient: 'from-gray-700 to-maroon',
    stats: [
      { number: '200+', label: 'Churches' },
      { number: '150K', label: 'Members' },
    ],
  },
];

export default function ReligionSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-warm-white to-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-charcoal mb-4">
            Faith & Culture
          </h2>
          <p className="text-tamil text-xl text-maroon mb-5">
            நம்பிக்கை மற்றும் கலாச்சாரம்
          </p>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            The Indian Malaysian community is diverse in faith, united in heritage. From ancient temples to modern gurdwaras and churches, our spiritual traditions enrich Malaysia's multicultural tapestry.
          </p>
        </div>

        {/* Faith Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {faithData.map((faith, index) => (
            <div
              key={faith.name}
              className="card overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Banner */}
              <div className={`h-44 bg-gradient-to-br ${faith.gradient} flex items-center justify-center`}>
                <span className="text-6xl">{faith.symbol}</span>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="font-display text-2xl font-semibold text-charcoal mb-4">
                  {faith.name}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {faith.description}
                </p>

                {/* Stats */}
                <div className="flex gap-8 pt-5 border-t border-gold/30">
                  {faith.stats.map((stat) => (
                    <div key={stat.label} className="text-center">
                      <div className="font-display text-2xl font-bold text-saffron">
                        {stat.number}
                      </div>
                      <div className="text-xs text-gray-500 uppercase tracking-wider">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
