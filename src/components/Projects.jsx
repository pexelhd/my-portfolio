import { useState } from 'react'
import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'

const projects = [
  {
    title: 'Multi-Tenant Task Manager',
    description:
      'A full-stack task management system with role-based access control, Keycloak SSO, and an AI-powered chat assistant.',
    tags: ['React', 'Express', 'PostgreSQL', 'Keycloak'],
    image: '/taskmanager.png',
    liveUrl: '#',
    githubUrl: 'https://github.com/pexelhd/multi-tenant-task-manager',
  },
  {
    title: 'Project Two',
    description: 'Placeholder description — add details about this project soon.',
    tags: ['React', 'Node.js'],
    image: null,
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Project Three',
    description: 'Placeholder description — add details about this project soon.',
    tags: ['React', 'Tailwind CSS'],
    image: null,
    liveUrl: '#',
    githubUrl: '#',
  },
]

function ProjectCard({ project }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col w-full hover:shadow-md transition-shadow">
      <div className="aspect-video bg-gray-200 dark:bg-gray-700 flex items-center justify-center overflow-hidden">
        {project.image ? (
          <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-300 hover:scale-110" />
        ) : (
          <span className="text-gray-400 dark:text-gray-500 text-sm">Image coming soon</span>
        )}
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 flex-1">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag, tagIndex) => (
            <span key={tagIndex} className="px-3 py-1 bg-blue-50 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-2">
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
            <ExternalLink className="w-4 h-4" />
            Live Demo
          </a>
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
            <FaGithub className="w-4 h-4" />
            Code
          </a>
        </div>
      </div>
    </div>
  )
}

function Projects() {
  const [current, setCurrent] = useState(0)

  const goPrev = () => {
    setCurrent((prev) => (prev === 0 ? projects.length - 1 : prev - 1))
  }

  const goNext = () => {
    setCurrent((prev) => (prev === projects.length - 1 ? 0 : prev + 1))
  }

  return (
    <section id="projects" className="py-24 px-4 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Featured Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            A selection of my recent work showcasing various technologies and problem-solving approaches
          </p>
        </div>

        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

        <div className="md:hidden">
          <div className="flex items-center justify-center gap-3">
            <button onClick={goPrev} aria-label="Previous project" className="flex items-center justify-center w-9 h-9 rounded-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors shrink-0">
              <ChevronLeft className="w-5 h-5 text-gray-700 dark:text-gray-200" />
            </button>

            <div className="w-full max-w-sm">
              <ProjectCard project={projects[current]} />
            </div>

            <button onClick={goNext} aria-label="Next project" className="flex items-center justify-center w-9 h-9 rounded-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors shrink-0">
              <ChevronRight className="w-5 h-5 text-gray-700 dark:text-gray-200" />
            </button>
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {projects.map((_, index) => (
              <button key={index} onClick={() => setCurrent(index)} aria-label={`Go to project ${index + 1}`} className={`w-2.5 h-2.5 rounded-full transition-colors ${index === current ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-600'}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
