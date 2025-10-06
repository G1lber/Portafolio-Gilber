import { motion } from "framer-motion";
import { FaCode, FaServer, FaDatabase, FaTools } from "react-icons/fa";

const About = () => {
  const skills = [
    {
      icon: <FaCode className="text-2xl" />,
      title: "Frontend Development",
      description: "React, JavaScript, HTML/CSS, TailwindCSS",
      color: "text-blue-400"
    },
    {
      icon: <FaServer className="text-2xl" />,
      title: "Backend Development", 
      description: "Node.js, Python, Django, Express.js",
      color: "text-green-400"
    },
    {
      icon: <FaDatabase className="text-2xl" />,
      title: "Base de Datos",
      description: "MySQL, MongoDB, PostgreSQL",
      color: "text-purple-400"
    },
    {
      icon: <FaTools className="text-2xl" />,
      title: "Herramientas",
      description: "Git, Docker, VS Code, Postman",
      color: "text-orange-400"
    }
  ];

  const achievements = [
    { number: "15+", label: "Proyectos Completados" },
    { number: "2+", label: "Años de Experiencia" },
    { number: "10+", label: "Tecnologías Dominadas" },
    { number: "100%", label: "Compromiso" }
  ];

  return (
    <section 
      id="about"
      className="py-20 bg-gray-900 text-white px-6"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Sobre <span className="text-green-400">Mí</span>
          </h2>
          <div className="w-24 h-1 bg-green-400 mx-auto rounded"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-green-400 mb-4">
              Desarrollador Full Stack Apasionado
            </h3>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              Soy <span className="font-semibold text-white">Gilber Martínez</span>, 
              un desarrollador full stack con experiencia en la creación de aplicaciones 
              web modernas y escalables. Mi pasión por la tecnología me impulsa a estar 
              siempre actualizado con las últimas tendencias del desarrollo.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
              Me especializo en tecnologías como <span className="text-green-400 font-medium">
              React, Node.js, Python y Django</span>, creando soluciones que no solo 
              funcionan bien, sino que también ofrecen una excelente experiencia de usuario.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
              Mi objetivo es seguir creciendo profesionalmente mientras contribuyo a 
              proyectos que generen impacto real. Busco oportunidades para aplicar mis 
              habilidades en un entorno colaborativo y dinámico.
            </p>

            <div className="flex flex-wrap gap-3 mt-6">
              {["Trabajo en equipo", "Resolución de problemas", "Aprendizaje continuo", "Comunicación efectiva"].map((skill, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-gray-800 text-green-400 rounded-full text-sm border border-green-400/20"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Skills grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-green-400/30 transition duration-300"
              >
                <div className={`${skill.color} mb-3`}>
                  {skill.icon}
                </div>
                <h4 className="font-semibold text-white mb-2">{skill.title}</h4>
                <p className="text-gray-400 text-sm">{skill.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 bg-gray-800 rounded-2xl p-8"
        >
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">
                {achievement.number}
              </div>
              <div className="text-gray-400 text-sm md:text-base">
                {achievement.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;