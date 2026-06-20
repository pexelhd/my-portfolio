import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { Mail, ArrowDown } from 'lucide-react'

function Hero() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 -z-10" />

      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 dark:text-white">
            Hi, I'm <span className="text-blue-600 dark:text-blue-400">Peter Justine Canico</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Computer Engineering student building full-stack web applications with
            React, Node.js, and PostgreSQL.
          </p>
        </div>

        <div className="flex items-center justify-center gap-4 flex-wrap">
          <button onClick={() => scrollToSection('projects')} className="px-6 py-3 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors">
            View My Work
          </button>
          <button onClick={() => scrollToSection('contact')} className="px-6 py-3 rounded-md border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
            Contact Me
          </button>
        </div>

        <div className="flex items-center justify-center gap-6 pt-4">
          <a href="https://github.com/pexelhd" target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
            <FaGithub className="w-6 h-6" />
            <span className="sr-only">GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/peter-justine-canico-996a54215/" target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
            <FaLinkedin className="w-6 h-6" />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a href="mailto:peterjust1998@gmail.com" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
            <Mail className="w-6 h-6" />
            <span className="sr-only">Email</span>
          </a>
        </div>

        <div className="pt-12 animate-bounce">
          <button onClick={() => scrollToSection('about')} className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
            <ArrowDown className="w-8 h-8 mx-auto" />
            <span className="sr-only">Scroll down</span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero
