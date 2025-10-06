import { motion } from "framer-motion";
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
      <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Mi Stack <span className="text-green-400">Tecnológico</span>
          </h2>
          <div className="w-24 h-1 bg-green-400 mx-auto rounded mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Tecnologías y herramientas que domino para crear soluciones completas y escalables
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {techCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-green-400/30 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-green-400 mb-2 border-b border-gray-600 pb-3">
                  {category.title}
                </h3>
              </div>
              
              <div className="grid grid-cols-3 gap-4">
                {category.technologies.map((tech, techIndex) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      duration: 0.4, 
                      delay: categoryIndex * 0.1 + techIndex * 0.05 
                    }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="flex flex-col items-center p-3 rounded-lg hover:bg-gray-700/50 transition-all duration-200 group cursor-pointer"
                  >
                    <div className="text-3xl mb-2 text-gray-300 group-hover:text-green-400 transition-colors duration-200">
                      {tech.icon}
                    </div>
                    <span className="text-xs text-center text-gray-400 group-hover:text-white transition-colors duration-200 font-medium">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Category progress indicator */}
              <div className="mt-6 pt-4 border-t border-gray-700">
                <div className="flex justify-between items-center text-xs text-gray-400 mb-2">
                  <span>Nivel de competencia</span>
                  <span>
                    {category.title === "Frontend" ? "90%" : 
                     category.title === "Backend" ? "85%" :
                     category.title === "Herramientas" ? "80%" : "70%"}
                  </span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ 
                      width: category.title === "Frontend" ? "90%" : 
                            category.title === "Backend" ? "85%" :
                            category.title === "Herramientas" ? "80%" : "70%"
                    }}
                    transition={{ duration: 1, delay: categoryIndex * 0.2 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-green-400 to-blue-400 h-2 rounded-full"
                  ></motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 text-lg">
            Siempre aprendiendo nuevas tecnologías para mantenerme actualizado con las últimas tendencias del desarrollo
          </p>
        </motion.div>
      </div>
    </section>
    )
  }
  
  export default TechStack