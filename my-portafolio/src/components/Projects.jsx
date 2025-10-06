import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaCalendarAlt } from "react-icons/fa";
import {
  SiPython,
  SiDjango,
  SiJavascript,
  SiMysql,
  SiMongodb,
  SiExpress,
  SiReact,
  SiNodedotjs,
} from "react-icons/si";

const projectsData = [
  {
    title: "Carnetización SENA",
    description:
      "Sistema completo de generación de carnets identificadores para usuarios del SENA. Incluye gestión de usuarios, generación automática de códigos QR y exportación a PDF.",
    technologies: [
      { icon: <SiPython />, name: "Python" },
      { icon: <SiDjango />, name: "Django" },
      { icon: <SiJavascript />, name: "JavaScript" },
      { icon: <SiMysql />, name: "MySQL" },
    ],
    github: "https://github.com/G1lber/Carnetizacion-Django",
    demo: null,
    date: "2024",
    status: "Completado",
    features: [
      "Generación automática de carnets",
      "Códigos QR integrados",
      "Panel de administración",
      "Exportación PDF",
    ],
  },
  {
    title: "Control de Entradas",
    description:
      "Aplicación web para el registro y control de ingreso y salida de usuarios del SENA. Sistema de autenticación robusto y reportes en tiempo real.",
    technologies: [
      { icon: <SiPython />, name: "Python" },
      { icon: <SiDjango />, name: "Django" },
      { icon: <SiJavascript />, name: "JavaScript" },
      { icon: <SiMysql />, name: "MySQL" },
    ],
    github: "https://github.com/G1lber/Proyecto-ControldeEntrada",
    demo: null,
    date: "2024",
    status: "Completado",
    features: [
      "Control de acceso",
      "Reportes en tiempo real",
      "Autenticación segura",
      "Dashboard administrativo",
    ],
  },
  {
    title: "Gestor de Tareas MERN",
    description:
      "Aplicación full-stack para gestión de tareas y proyectos. Arquitectura MERN completa con autenticación JWT, estado global y diseño responsivo.",
    technologies: [
      { icon: <SiMongodb />, name: "MongoDB" },
      { icon: <SiExpress />, name: "Express" },
      { icon: <SiReact />, name: "React" },
      { icon: <SiNodedotjs />, name: "Node.js" },
    ],
    github: "https://github.com/G1lber/UpTask-MERN",
    demo: null,
    date: "2024",
    status: "En desarrollo",
    features: [
      "CRUD completo",
      "Autenticación JWT",
      "Estado global",
      "Diseño responsivo",
    ],
  },
];

const Projects = () => {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Mis{" "}
            <span className="text-green-400">Proyectos</span>
          </h2>
          <div className="w-24 h-1 bg-green-400 mx-auto rounded mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Una selección de proyectos que demuestran mis habilidades y experiencia
            en desarrollo full-stack
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-700 hover:border-green-400/30"
            >
              {/* Project header */}
              <div className="p-6 pb-4">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.status === "Completado"
                        ? "bg-green-400/20 text-green-400"
                        : "bg-yellow-400/20 text-yellow-400"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
                  <FaCalendarAlt size={12} />
                  <span>{project.date}</span>
                </div>

                <p className="text-gray-300 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-green-400 mb-3">
                    Características principales:
                  </h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="text-gray-400 text-sm flex items-center gap-2"
                      >
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-green-400 mb-3">
                    Tecnologías utilizadas:
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech, techIndex) => (
                      <div
                        key={techIndex}
                        className="flex items-center gap-2 bg-gray-700 px-3 py-2 rounded-lg"
                        title={tech.name}
                      >
                        <div className="text-green-400 text-lg">{tech.icon}</div>
                        <span className="text-xs text-gray-300">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action buttons */}
                <div className="flex gap-3">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 flex items-center justify-center gap-2 bg-gray-700 hover:bg-green-400 text-white hover:text-gray-900 py-3 rounded-lg transition duration-300 font-medium"
                  >
                    <FaGithub size={16} />
                    Código
                  </motion.a>

                  {project.demo && (
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 flex items-center justify-center gap-2 bg-green-400 hover:bg-green-300 text-gray-900 py-3 rounded-lg transition duration-300 font-medium"
                    >
                      <FaExternalLinkAlt size={14} />
                      Demo
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 text-lg mb-6">
            ¿Te interesa ver más de mi trabajo o colaborar en un proyecto?
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-green-400 text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-green-300 transition duration-300"
          >
            Trabajemos juntos
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;