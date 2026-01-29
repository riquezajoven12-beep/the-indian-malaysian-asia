const timelineItems = [
  {
    year: '1786',
    title: 'Early Indian Traders',
    description: 'Indian merchants from Tamil Nadu and other regions establish trade connections with Penang, laying the foundation for permanent settlements.',
  },
  {
    year: '1840s',
    title: 'The Kangani System',
    description: 'Large-scale migration begins as Tamil workers are recruited to work on rubber plantations, sugar estates, and the railway construction projects.',
  },
  {
    year: '1910s',
    title: 'Building Temples & Communities',
    description: 'Hindu temples, Tamil schools, and community organizations are established, preserving cultural identity across the Malay states.',
  },
  {
    year: '1957',
    title: 'Merdeka',
    description: 'Indians become citizens of independent Malaya, contributing to nation-building while maintaining their distinct cultural heritage.',
  },
  {
    year: 'Today',
    title: 'A Thriving Community',
    description: 'Over 2 million Indian Malaysians contribute to every sector of society — medicine, law, business, arts, sports, and politics.',
  },
];

export default function RootsSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-cream to-warm-white relative">
      {/* Top Border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-saffron via-gold to-maroon" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-charcoal mb-5">
            Our Roots in Malaysia
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            The story of Indians in Malaysia spans over two centuries, beginning with traders, followed by waves of migration during the British colonial period. Today, we are an integral part of Malaysia's multicultural fabric.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative py-10">
          {/* Center Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-gold to-maroon transform -translate-x-1/2 hidden lg:block" />
          <div className="absolute left-5 top-0 bottom-0 w-1 bg-gradient-to-b from-gold to-maroon lg:hidden" />

          {/* Timeline Items */}
          <div className="space-y-16">
            {timelineItems.map((item, index) => (
              <div
                key={item.year}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'lg:justify-end lg:pr-[calc(50%+40px)]' : 'lg:justify-start lg:pl-[calc(50%+40px)]'
                } pl-16 lg:pl-0`}
              >
                {/* Marker */}
                <div className="absolute left-5 lg:left-1/2 w-5 h-5 bg-gold border-4 border-cream rounded-full shadow-lg transform lg:-translate-x-1/2 z-10" />

                {/* Content Card */}
                <div className="bg-white p-8 border-l-4 border-saffron shadow-lg max-w-md w-full">
                  <div className="font-display text-3xl lg:text-4xl font-bold text-saffron mb-3">
                    {item.year}
                  </div>
                  <h3 className="font-display text-xl font-semibold text-charcoal mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
