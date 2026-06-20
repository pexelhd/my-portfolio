import { Code2, Palette, Rocket } from 'lucide-react'

const highlights = [
  {
    icon: Code2,
    title: 'Clean Code',
    description: 'Writing maintainable, scalable, and efficient code that stands the test of time',
  },
  {
    icon: Palette,
    title: 'Design Focus',
    description: 'Creating beautiful, user-centric interfaces with attention to every detail',
  },
  {
    icon: Rocket,
    title: 'Fast Delivery',
    description: 'Turning ideas into reality with agile development and quick iterations',
  },
]

function About() {
  return (
    <section id="about" className="py-24 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">About Me</h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            I'm an aspiring developer with a Computer Engineering background, passionate about building full-stack web applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img src="/myphoto.jpg" alt="Peter Justine Canico" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-lg text-gray-600 dark:text-gray-300">
              I recently graduated with a degree in Computer Engineering and am now growing my skills in full-stack web
              development using React, Node.js, and PostgreSQL. My interest in tech started
              with curiosity about how things work, and has grown into a passion for building
              real, working applications.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              I enjoy solving problems through code and turning ideas into functional projects,
              from full-stack systems with role-based access control to simple, clean interfaces.
              I'm always looking to learn new tools and improve my craft.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((item, index) => (
            <div key={index} className="border-2 border-gray-200 dark:border-gray-700 rounded-xl hover:border-blue-400 dark:hover:border-blue-500 transition-colors p-6 space-y-4">
              <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center">
                <item.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
