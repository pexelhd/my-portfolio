import {
  FaHtml5,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDocker,
} from 'react-icons/fa'
import { SiExpress, SiPostgresql, SiTailwindcss, SiKeycloak, SiTypescript, SiExpo, SiPrisma, SiJsonwebtokens, SiZod } from 'react-icons/si'

const skillCategories = [
  {
    category: 'Frontend',
    skills: [
      { name: 'React', level: 80 },
      { name: 'TypeScript', level: 82 },
      { name: 'Expo', level: 75 },
      { name: 'NativeWind', level: 75 },
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
      { name: 'Prisma', level: 75 },
      { name: 'JWT', level: 75 },
      { name: 'Zod', level: 70 },
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
  { name: 'HTML5', icon: FaHtml5, color: 'text-orange-600' },
  { name: 'JavaScript', icon: FaJs, color: 'text-yellow-500' },
  { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-600' },
  { name: 'React', icon: FaReact, color: 'text-sky-500' },
  { name: 'Node.js', icon: FaNodeJs, color: 'text-green-600' },
  { name: 'Express', icon: SiExpress, color: 'text-gray-700 dark:text-gray-300' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-700' },
  { name: 'Prisma', icon: SiPrisma, color: 'text-gray-900 dark:text-gray-100' },
  { name: 'JWT', icon: SiJsonwebtokens, color: 'text-pink-600' },
  { name: 'Zod', icon: SiZod, color: 'text-blue-500' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-500' },
  { name: 'Expo', icon: SiExpo, color: 'text-gray-900 dark:text-gray-100' },
  { name: 'Keycloak', icon: SiKeycloak, color: 'text-red-500' },
  { name: 'Git', icon: FaGitAlt, color: 'text-orange-500' },
  { name: 'Docker', icon: FaDocker, color: 'text-blue-500' },
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
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
            Technologies I Use
          </h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="flex flex-col items-center gap-2 text-center">
                <tech.icon className={`w-10 h-10 ${tech.color}`} />
                <span className="text-sm text-gray-700 dark:text-gray-300">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
