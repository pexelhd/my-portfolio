const skillCategories = [
  {
    category: 'Frontend',
    skills: [
      { name: 'React', level: 80 },
      { name: 'JavaScript', level: 80 },
      { name: 'Tailwind CSS', level: 85 },
      { name: 'HTML/CSS', level: 90 },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', level: 75 },
      { name: 'Express', level: 75 },
      { name: 'PostgreSQL', level: 70 },
      { name: 'Keycloak', level: 65 },
    ],
  },
  {
    category: 'Tools & Others',
    skills: [
      { name: 'Git / GitHub', level: 85 },
      { name: 'Docker', level: 60 },
      { name: 'VS Code', level: 90 },
      { name: 'Figma', level: 60 },
    ],
  },
]

const technologies = [
  'JavaScript', 'React', 'Node.js', 'Express', 'PostgreSQL',
  'Tailwind CSS', 'Keycloak', 'Docker', 'Git', 'REST API',
]

function SkillBar({ name, level }) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="text-gray-800 dark:text-gray-200">{name}</span>
        <span className="text-gray-500 dark:text-gray-400">{level}%</span>
      </div>
      <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <div className="h-full bg-blue-600 rounded-full" style={{ width: `${level}%` }} />
      </div>
    </div>
  )
}

function Skills() {
  return (
    <section id="skills" className="py-24 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Skills & Expertise
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                {category.category}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar key={skillIndex} name={skill.name} level={skill.level} />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-8">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
            Technologies I Use
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <span key={index} className="text-sm px-4 py-2 rounded-full border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
