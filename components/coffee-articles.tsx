import Link from "next/link"
import { Coffee, Droplets, Thermometer, Clock, Zap, Heart } from "lucide-react"

const articles = [
  {
    id: "perfect-espresso-guide",
    title: "The Ultimate Guide to Pulling the Perfect Espresso Shot",
    excerpt:
      "Master the art of espresso with our comprehensive guide covering grind size, tamping pressure, extraction time, and temperature control for café-quality shots at home.",
    image: "/articles/espresso-shot-extraction.jpg",
    category: "Brewing Techniques",
    date: "October 12, 2025",
    readTime: "8 min read",
    icon: Coffee,
  },
  {
    id: "coffee-machine-maintenance",
    title: "Essential Coffee Machine Maintenance: Keep Your Equipment Running Smoothly",
    excerpt:
      "Learn the critical maintenance tasks that will extend your coffee machine's lifespan, prevent costly repairs, and ensure consistently delicious coffee every time.",
    image: "/articles/coffee-machine-cleaning.jpg",
    category: "Maintenance",
    date: "October 12, 2025",
    readTime: "6 min read",
    icon: Zap,
  },
  {
    id: "water-quality-matters",
    title: "Why Water Quality Matters: The Secret Ingredient in Great Coffee",
    excerpt:
      "Discover how water composition affects coffee flavor, which minerals enhance extraction, and how to optimize your water for the best-tasting brew.",
    image: "/articles/water-quality-coffee.jpg",
    category: "Coffee Science",
    date: "October 10, 2025",
    readTime: "5 min read",
    icon: Droplets,
  },
  {
    id: "temperature-control",
    title: "Temperature Control: The Key to Unlocking Coffee's Full Potential",
    excerpt:
      "Explore the science of brewing temperature and learn how precise temperature control can dramatically improve your coffee's flavor profile and consistency.",
    image: "/articles/temperature-control-brewing.jpg",
    category: "Brewing Science",
    date: "October 8, 2025",
    readTime: "7 min read",
    icon: Thermometer,
  },
  {
    id: "coffee-grinder-comparison",
    title: "Burr vs Blade Grinders: Which One Should You Choose?",
    excerpt:
      "A detailed comparison of burr and blade grinders, examining grind consistency, particle size distribution, and how each affects your coffee's taste.",
    image: "/articles/coffee-grinder-comparison.jpg",
    category: "Equipment Guide",
    date: "October 5, 2025",
    readTime: "6 min read",
    icon: Coffee,
  },
  {
    id: "extraction-timing",
    title: "Mastering Extraction Time: From Under to Over-Extracted",
    excerpt:
      "Learn to identify the signs of under and over-extraction, understand the ideal extraction windows for different brewing methods, and troubleshoot common issues.",
    image: "/articles/extraction-timing.jpg",
    category: "Brewing Techniques",
    date: "October 3, 2025",
    readTime: "9 min read",
    icon: Clock,
  },
  {
    id: "coffee-bean-storage",
    title: "The Science of Coffee Bean Storage: Preserving Freshness and Flavor",
    excerpt:
      "Understand how oxygen, light, moisture, and temperature affect coffee beans, and discover the best storage methods to keep your beans fresh longer.",
    image: "/articles/coffee-bean-storage.jpg",
    category: "Coffee Care",
    date: "October 1, 2025",
    readTime: "5 min read",
    icon: Heart,
  },
  {
    id: "espresso-machine-buying-guide",
    title: "2024 Espresso Machine Buying Guide: Find Your Perfect Match",
    excerpt:
      "Navigate the world of espresso machines with our comprehensive buying guide covering features, price points, and recommendations for every skill level.",
    image: "/articles/espresso-machine-buying-guide.jpg",
    category: "Buying Guides",
    date: "October 28, 2025",
    readTime: "10 min read",
    icon: Coffee,
  },
  {
    id: "milk-frothing-techniques",
    title: "Professional Milk Frothing Techniques for Barista-Quality Lattes",
    excerpt:
      "Master the art of milk frothing with step-by-step techniques for creating silky microfoam, perfect for latte art and delicious cappuccinos.",
    image: "/articles/milk-frothing-techniques.jpg",
    category: "Barista Skills",
    date: "October 25, 2025",
    readTime: "7 min read",
    icon: Coffee,
  },
]

export function CoffeeArticles() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-[#24150D] via-[#3b2417] to-[#24150D]">
      <div className="max-w-6xl mx-auto space-y-12">
        {articles.slice(0, 9).map((article, index) => {
          const IconComponent = article.icon
          const isEven = index % 2 === 0

          return (
            <Link key={article.id} href={`/articles/${article.id}`} className="group block">
              <div
                className={`flex flex-col ${
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                } gap-8 items-center hover:opacity-90 transition-opacity duration-300`}
              >
                {/* Image Section */}
                <div className="w-full md:w-1/2 relative">
                  <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden bg-white shadow-xl">
                    <img
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Category Badge */}
                    <div className="absolute top-6 left-6 bg-[#ff7b00] text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 shadow-lg">
                      <IconComponent className="w-4 h-4" />
                      {article.category}
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="w-full md:w-1/2 space-y-4">
                  <h2 className="font-serif text-3xl md:text-4xl font-bold text-amber-50 leading-tight group-hover:text-[#ff7b00] transition-colors">
                    {article.title}
                  </h2>
                  <p className="text-amber-100/80 text-lg leading-relaxed">{article.excerpt}</p>
                  {/* Meta Information */}
                  <div className="flex items-center gap-6 text-amber-100/60 text-sm pt-2">
                    <span>{article.date}</span>
                    <span className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {article.readTime}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </section>
  )
}