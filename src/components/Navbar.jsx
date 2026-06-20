import { useEffect, useState } from 'react'
import { Sun, Moon, Menu, X } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'

function Navbar() {
  const [isDark, setIsDark] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const shouldBeDark = stored === 'dark' || (!stored && prefersDark)
    setIsDark(shouldBeDark)
    document.documentElement.classList.toggle('dark', shouldBeDark)
  }, [])

  const toggleTheme = () => {
    const next = !isDark
    setIsDark(next)
    document.documentElement.classList.toggle('dark', next)
    localStorage.setItem('theme', next ? 'dark' : 'light')
  }

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  const navLinks = [
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 transition-colors">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        <button onClick={() => scrollToSection('home')} className="font-bold text-lg text-gray-900 dark:text-white">
          Peter Justine Canico
        </button>

        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <button key={link.id} onClick={() => scrollToSection(link.id)} className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              {link.label}
            </button>
          ))}
          <a href="https://github.com/pexelhd" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            <FaGithub className="w-4 h-4 text-gray-700 dark:text-gray-200" />
          </a>
          <button onClick={toggleTheme} aria-label="Toggle dark mode" className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            {isDark ? <Sun className="w-4 h-4 text-yellow-400" /> : <Moon className="w-4 h-4 text-gray-700" />}
          </button>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <a href="https://github.com/pexelhd" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-300 dark:border-gray-700">
            <FaGithub className="w-4 h-4 text-gray-700 dark:text-gray-200" />
          </a>
          <button onClick={toggleTheme} aria-label="Toggle dark mode" className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-300 dark:border-gray-700">
            {isDark ? <Sun className="w-4 h-4 text-yellow-400" /> : <Moon className="w-4 h-4 text-gray-700" />}
          </button>
          <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu" className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-300 dark:border-gray-700">
            {menuOpen ? <X className="w-4 h-4 text-gray-700 dark:text-gray-200" /> : <Menu className="w-4 h-4 text-gray-700 dark:text-gray-200" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
          <div className="flex flex-col px-4 py-3 gap-3">
            {navLinks.map((link) => (
              <button key={link.id} onClick={() => scrollToSection(link.id)} className="text-left text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
