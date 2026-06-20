function ProjectCard({ title, description, tech, link }) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((item) => (
          <span key={item} className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded">
            {item}
          </span>
        ))}
      </div>
      <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-600 font-medium hover:underline">
        View on GitHub →
      </a>
    </div>
  )
}

export default ProjectCard
