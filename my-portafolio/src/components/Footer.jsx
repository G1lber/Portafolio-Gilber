import { motion } from "framer-motion";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { FaGithub, FaLinkedin, FaInstagram, FaHeart, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <FaGithub />,
      url: "https://github.com/G1lber",
      label: "GitHub"
    },
    {
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/in/gilber-martinez-6b7964320/",
      label: "LinkedIn"
    },
    {
      icon: <FaInstagram />,
      url: "https://www.instagram.com/g1lber_/?hl=es-la",
      label: "Instagram"
    }
  ];

  const quickLinks = [
    { name: "Inicio", href: "#home" },
    { name: "Sobre mí", href: "#about" },
    { name: "Proyectos", href: "#projects" },
    { name: "Contacto", href: "#contact" }
  ];

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold text-white">
              Gilber <span className="text-green-400">Martínez</span>
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Desarrollador Full Stack apasionado por crear soluciones digitales 
              innovadoras y experiencias de usuario excepcionales.
            </p>
            <div className="flex items-center gap-2 text-gray-400">
              <MdLocationOn />
              <span>Colombia</span>
            </div>
          </motion.div>

          {/* Quick links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-white">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-green-400 transition duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-white">Conectemos</h4>
            <div className="space-y-3">
              <a
                href="mailto:martinezfrancogilber@gmail.com"
                className="flex items-center gap-3 text-gray-400 hover:text-green-400 transition duration-200"
              >
                <MdEmail />
                <span className="text-sm">martinezfrancogilber@gmail.com</span>
              </a>
              
              {/* Social media */}
              <div className="flex gap-4 pt-2">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center w-10 h-10 bg-gray-800 text-gray-400 rounded-lg hover:text-green-400 hover:bg-gray-700 transition duration-300"
                    title={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability status */}
            <div className="p-3 bg-green-400/10 border border-green-400/20 rounded-lg">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 text-sm font-medium">
                  Disponible para nuevos proyectos
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800 py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-gray-400 text-sm flex items-center gap-1"
          >
            © {currentYear} Gilber Martínez. Hecho con{" "}
            <FaHeart className="text-red-400 text-xs" /> en Colombia
          </motion.p>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="flex items-center justify-center w-10 h-10 bg-green-400 text-gray-900 rounded-lg hover:bg-green-300 transition duration-300"
            title="Volver arriba"
          >
            <FaArrowUp />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;