'use client'

import { useInView } from '@/hooks/use-in-view'

export default function MenuSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  const menuItems = {
    'Small Plates': [
      { name: 'Fresh Oysters', description: 'Selection of premium oysters with artisanal sauces' },
      { name: 'Crudo Selection', description: 'Daily catch prepared with precision and care' },
      { name: 'Ceviche', description: 'Traditional preparation with seasonal ingredients' },
    ],
    'Main Courses': [
      { name: 'Signature Pasta', description: 'House-made pasta with seasonal sauce' },
      { name: 'Grilled Selection', description: 'Premium cuts prepared to perfection' },
      { name: 'Sharing Plates', description: 'Curated selections for memorable moments' },
    ],
    'Cocktails': [
      { name: 'House Signature', description: 'Chef Jyoti\'s innovative creations' },
      { name: 'Classic Reimagined', description: 'Traditional cocktails with a twist' },
      { name: 'Experimental Drinks', description: 'Bold flavors from our bartender\'s laboratory' },
    ],
    'Desserts': [
      { name: 'Seasonal Dessert', description: 'Chef\'s special sweet creations' },
      { name: 'Petit Fours', description: 'Delicate pastries and confections' },
      { name: 'Coffee & Digestif', description: 'Premium coffee and after-dinner drinks' },
    ],
  }

  return (
    <section
      id="menu"
      ref={ref}
      className="py-24 bg-primary text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="text-center mb-16"
          style={{
            animation: inView ? 'fadeInUp 0.8s ease-out' : 'none',
          }}
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Our Menu
          </h2>
          <div className="w-16 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Curated selections showcasing culinary mastery and innovative bartending
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {Object.entries(menuItems).map(([category, items], catIndex) => (
            <div
              key={category}
              style={{
                animation: inView
                  ? `fadeInUp 0.8s ease-out ${catIndex * 0.1}s both`
                  : 'none',
              }}
            >
              <h3 className="text-2xl font-serif font-bold mb-8 border-b border-secondary/30 pb-4">
                {category}
              </h3>
              <div className="space-y-6">
                {items.map((item, index) => (
                  <div
                    key={index}
                    className="hover:bg-white/5 p-4 rounded-lg transition-colors duration-300"
                  >
                    <h4 className="text-lg font-semibold mb-2">{item.name}</h4>
                    <p className="text-gray-300 text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div
          className="mt-16 text-center"
          style={{
            animation: inView ? 'fadeInUp 0.8s ease-out 0.4s both' : 'none',
          }}
        >
          <p className="text-gray-300 mb-6">
            View our complete menu or inquire about private dining experiences
          </p>
          <a
            href="#reserve"
            className="inline-block px-8 py-3 bg-secondary text-primary font-semibold rounded-sm hover:bg-secondary/90 transition-colors duration-300"
          >
            Plan Your Event
          </a>
        </div>
      </div>
    </section>
  )
}
