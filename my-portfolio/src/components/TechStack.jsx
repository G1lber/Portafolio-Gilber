import {
    FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaFigma,
    FaPhp, FaNodeJs, FaLaravel, FaDocker, FaGit, FaGithub, FaTerminal,
    FaWordpress,
  } from 'react-icons/fa'
import {
    SiTailwindcss, SiMysql, SiMongodb, SiExpress, SiDjango,
    SiPython,  SiTypescript,SiPostman
} from 'react-icons/si'
import { VscVscode } from "react-icons/vsc";
  
  const techCategories = [
    {
      title: "Frontend",
      technologies: [
        { icon: <FaHtml5 />, name: "HTML" },
        { icon: <FaCss3Alt />, name: "CSS" },
        { icon: <FaJs />, name: "JavaScript" },
        { icon: <FaReact />, name: "ReactJS" },
        { icon: <SiTailwindcss />, name: "TailwindCSS" },
        { icon: <FaBootstrap />, name: "Bootstrap" },
        { icon: <FaFigma />, name: "Figma" },
      ],
    },
    {
      title: "Backend",
      technologies: [
        { icon: <FaPhp />, name: "PHP" },
        { icon: <FaNodeJs />, name: "NodeJS" },
        { icon: <SiExpress />, name: "ExpressJS" },
        { icon: <SiPython />, name: "Python" },
        { icon: <SiDjango />, name: "Django" },
        { icon: <SiMysql />, name: "MySQL" },
        { icon: <SiMongodb />, name: "MongoDB" },
      ],
    },
    {
        title: "Herramientas",
        technologies: [
          { icon: <FaGit />, name: "Git" },
          { icon: <FaGithub />, name: "GitHub" },
          { icon: <FaTerminal />, name: "Terminal" },
          { icon: <SiPostman />, name: "Postman" },
          { icon: <VscVscode />, name: "Vscode" },
         
          
        ],
      },
    {
      title: "Aprendiendo",
      technologies: [
        { icon: <FaLaravel />, name: "Laravel" },
        { icon: <FaDocker />, name: "Docker" },
        { icon: <SiTypescript />, name: "TypeScript" },
        { icon: <FaWordpress />, name: "WordPress" },
      ],
    },
    
  ]
  
  const TechStack = () => {
    return (
      <section className="py-20 bg-gray-900 text-white">
        <h2 className="text-4xl font-bold text-center mb-3">Mi Stack Tecnológico</h2>
        <div className="w-80 h-1.5 bg-green-400 mx-auto mb-10 rounded"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto px-6">
          {techCategories.map((category) => (
            <div key={category.title} className="bg-gray-800 p-6 rounded-2xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-4 border-b border-gray-600 pb-2">{category.title}</h3>
              <div className="grid grid-cols-3 gap-4">
                {category.technologies.map((tech) => (
                  <div key={tech.name} className="flex flex-col items-center text-sm text-gray-300 hover:text-white">
                    <div className="text-3xl mb-1">{tech.icon}</div>
                    <span>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    )
  }
  
  export default TechStack