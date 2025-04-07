import { motion } from 'framer-motion';
import './App.css';
import BlockchainBackground from './components/BlockchainBackground';
import Navigation from './components/Navigation';
import { Button } from './components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './components/ui/card';

function App() {
  return (
    <div className="min-h-screen text-white relative">
      <BlockchainBackground />
      <Navigation />
      
      {/* Hero Section */}
      <section id="home" className="h-screen flex items-center justify-center relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center relative z-10 max-w-4xl mx-auto px-4"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl blur-3xl" />
            <div className="relative bg-black/15 backdrop-blur-sm p-12 rounded-3xl border border-blue-500/10">
              <h1 className="text-7xl font-bold mb-6">
                University of Alberta
                <span className="block mt-2 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Blockchain Club
                </span>
              </h1>
              <p className="text-2xl text-gray-300/90 mb-8 max-w-2xl mx-auto">
                Empowering the next generation of blockchain innovators through education, research, and community building.
              </p>
              <div className="flex gap-4 justify-center">
                <Button variant="gradient" size="lg" className="text-lg">
                  Join Us
                </Button>
                <Button variant="outline" size="lg" className="text-lg border-blue-400 text-blue-400 hover:bg-blue-400/10">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <div className="space-y-6">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                About UABC
              </h2>
              <p className="text-lg text-gray-300">
                The University of Alberta Blockchain Club (UABC) is a student-led organization
                dedicated to exploring and promoting blockchain technology. We provide a platform
                for students to learn, collaborate, and innovate in the blockchain space.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Education</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300/90">Workshops, seminars, and hands-on learning opportunities</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Research</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300/90">Cutting-edge blockchain research and development</p>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl blur-3xl" />
              <div className="relative bg-black/15 backdrop-blur-sm p-8 rounded-3xl border border-blue-500/10">
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <ul className="space-y-4">
                  {[
                    "Foster blockchain education and awareness",
                    "Support blockchain research and innovation",
                    "Build a strong blockchain community",
                    "Connect students with industry opportunities"
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center space-x-3 text-gray-300"
                    >
                      <span className="text-blue-400">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Upcoming Events
            </h2>
            <p className="text-gray-300 mt-4">Join us for exciting blockchain events and workshops</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((event) => (
              <Card key={event}>
                <CardHeader>
                  <CardTitle>Blockchain Workshop {event}</CardTitle>
                  <CardDescription>Learn about blockchain fundamentals</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">Join us for an interactive workshop on blockchain technology and its applications.</p>
                </CardContent>
                <CardFooter>
                  <Button variant="gradient" className="w-full">
                    Register Now
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Our Team
            </h2>
            <p className="text-gray-300 mt-4">Meet the passionate individuals behind UABC</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((member) => (
              <Card key={member}>
                <CardHeader>
                  <div className="w-24 h-24 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-4 relative">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl" />
                  </div>
                  <CardTitle>Team Member {member}</CardTitle>
                  <CardDescription>Position</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">Brief description of the team member's role and expertise.</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl blur-3xl" />
            <div className="relative bg-black/15 backdrop-blur-sm p-8 rounded-3xl border border-blue-500/10 max-w-2xl mx-auto">
              <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Get in Touch
              </h2>
              <form className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-2 rounded-lg bg-black/30 backdrop-blur-sm border border-blue-500/20 focus:outline-none focus:border-blue-500 text-white placeholder-gray-400"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-2 rounded-lg bg-black/30 backdrop-blur-sm border border-blue-500/20 focus:outline-none focus:border-blue-500 text-white placeholder-gray-400"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Your Message"
                    rows="4"
                    className="w-full px-4 py-2 rounded-lg bg-black/30 backdrop-blur-sm border border-blue-500/20 focus:outline-none focus:border-blue-500 text-white placeholder-gray-400"
                  ></textarea>
                </div>
                <Button variant="gradient" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/15 backdrop-blur-sm py-8 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                UABC
              </h3>
              <p className="text-gray-400">
                Empowering the next generation of blockchain innovators.
              </p>
            </div>
      <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {['Home', 'About', 'Events', 'Team', 'Contact'].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-gray-400 hover:text-blue-400 transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
              <div className="flex space-x-4">
                {['Twitter', 'Discord', 'GitHub'].map((platform) => (
                  <a
                    key={platform}
                    href="#"
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {platform}
                  </a>
                ))}
              </div>
            </div>
      </div>
          <div className="mt-8 pt-8 border-t border-blue-500/20 text-center">
            <p className="text-gray-400">
              © {new Date().getFullYear()} University of Alberta Blockchain Club. All rights reserved.
        </p>
      </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
