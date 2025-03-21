import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] bg-gradient-to-r from-blue-900 to-purple-900 flex items-center">
        <div className="absolute inset-0 opacity-30 bg-[url('/arcade-bg.jpg')] bg-cover bg-center"></div>
        <div className="container mx-auto px-4 z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Lucky Roll Arcade</h1>
            <p className="text-xl md:text-2xl mb-8">The Ultimate Gaming Experience</p>
            <Link href="/games" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300">
              Explore Games
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Games */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Featured Games</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredGames.map((game, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="h-64 relative">
                  <div className="absolute inset-0 bg-blue-900 opacity-20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-2xl font-bold text-white">{game.name}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-4">{game.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-600 font-semibold">{game.type}</span>
                    <Link href="/games" className="text-blue-600 hover:text-blue-800 font-medium">Learn More →</Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Summary */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="md:w-1/2 mb-8 md:mb-0 md:pr-12"
            >
              <h2 className="text-4xl font-bold mb-6">About Lucky Roll</h2>
              <p className="text-lg text-gray-700 mb-4">
                Lucky Roll Arcade is the premier destination for gaming enthusiasts of all ages. 
                Our state-of-the-art facility features the latest arcade games, immersive experiences, 
                and a vibrant atmosphere that keeps players coming back for more.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Whether you&apos;re a casual gamer looking for some weekend fun or a competitive player 
                seeking new challenges, Lucky Roll Arcade offers something for everyone.
              </p>
              <Link href="/about" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded transition duration-300">
                Learn More About Us
              </Link>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="md:w-1/2"
            >
              <div className="bg-gray-200 h-80 rounded-lg flex items-center justify-center">
                <span className="text-gray-500 text-lg">Arcade Image Placeholder</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Events Preview */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {events.map((event, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row"
              >
                <div className="md:w-1/3 bg-blue-600 text-white p-6 flex flex-col items-center justify-center">
                  <span className="text-2xl font-bold">{event.date}</span>
                  <span className="text-lg">{event.month}</span>
                </div>
                <div className="md:w-2/3 p-6">
                  <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  <Link href="/events" className="text-blue-600 hover:text-blue-800 font-medium">View Details →</Link>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/events" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded transition duration-300">
              View All Events
            </Link>
          </div>
        </div>
      </section>

      {/* Location Preview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="md:w-1/2 mb-8 md:mb-0 md:pr-12"
            >
              <h2 className="text-4xl font-bold mb-6">Find Us</h2>
              <p className="text-lg text-gray-700 mb-4">
                Located in the heart of Arcade City, Lucky Roll Arcade is easily accessible 
                with plenty of parking and nearby amenities.
              </p>
              <div className="mb-6">
                <p className="text-gray-700"><strong>Address:</strong> 123 Game Street, Arcade City, AC 12345</p>
                <p className="text-gray-700"><strong>Phone:</strong> (555) 123-4567</p>
                <p className="text-gray-700"><strong>Email:</strong> info@luckyrollarcade.com</p>
              </div>
              <Link href="/location" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded transition duration-300">
                Get Directions
              </Link>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="md:w-1/2"
            >
              <div className="bg-gray-200 h-80 rounded-lg flex items-center justify-center">
                <span className="text-gray-500 text-lg">Map Placeholder</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

const featuredGames = [
  {
    name: "Virtual Reality Racing",
    description: "Experience high-speed racing in our immersive VR setup with motion feedback.",
    type: "Virtual Reality"
  },
  {
    name: "Zombie Apocalypse",
    description: "Team up with friends to survive waves of zombies in this thrilling shooter game.",
    type: "Multiplayer Shooter"
  },
  {
    name: "Dance Revolution Pro",
    description: "Show off your moves on our premium dance platform with hundreds of songs.",
    type: "Rhythm & Dance"
  }
];

const events = [
  {
    date: "15",
    month: "Apr",
    title: "Weekend Tournament: Racing Challenge",
    description: "Compete against other players in our monthly racing tournament with prizes for top performers."
  },
  {
    date: "22",
    month: "Apr",
    title: "Family Fun Day: Special Discounts",
    description: "Bring the whole family for special package deals and exclusive game access."
  }
];
