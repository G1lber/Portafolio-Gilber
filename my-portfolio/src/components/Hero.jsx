import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useState } from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaDownload, FaArrowDown } from "react-icons/fa";
import { MdEmail } from "react-icons/md";



const textVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

const iconVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5 +  i * 0.7,
      duration: 0.7,
      ease: "easeOut",
    },
  }),
};

const Hero = () => {
  const fullText = "Hola, soy desarrollador Full Stack";
  const [displayedText, setDisplayedText] = useState("");
  const controls = useAnimationControls();

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      setDisplayedText(fullText.slice(0, currentIndex + 1));
      currentIndex++;
      if (currentIndex === fullText.length) clearInterval(typingInterval);
    }, 80);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section className="relative flex flex-col md:flex-row justify-center items-center min-h-screen px-6 md:px-12 gap-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center items-start gap-6 max-w-2xl">
        <motion.div
          className="text-green-400 text-sm md:text-lg font-mono mb-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="border-r-2 border-green-400 pr-1">
            {displayedText}
          </span>
        </motion.div>

        <motion.h1
          className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          custom={1}
        >
          Gilber <span className="text-green-400">Martínez</span>
        </motion.h1>

        <motion.h2
          className="text-xl sm:text-2xl lg:text-3xl text-gray-300 font-light"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          custom={2}
        >
          Transformando ideas en{" "}
          <span className="text-green-400 font-semibold">soluciones digitales</span>
        </motion.h2>

        <motion.p
          className="text-gray-400 text-lg max-w-lg leading-relaxed"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          custom={3}
        >
          Desarrollador especializado en crear aplicaciones web modernas con 
          tecnologías como React, Node.js, Python y Django.
        </motion.p>

        {/* Action buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          {/* Download CV button */} 
          <motion.a
            href="/cv-gilber-martinez.pdf"
            download
            className="px-8 py-4 border-2 border-green-400 text-green-400 rounded-lg font-semibold hover:bg-green-400 hover:text-gray-900 transition duration-300 flex items-center gap-2 justify-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaDownload size={18} />
            Descargar CV
          </motion.a>
        </motion.div>

        {/* Social links */}
        <motion.div
          className="flex items-center gap-6 mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
        >
          {[ 
            { href: "https://github.com/G1lber", icon: <FaGithub size={24} />, label: "GitHub" },
            { href: "https://www.linkedin.com/in/gilber-martinez-6b7964320/", icon: <FaLinkedin size={24} />, label: "LinkedIn" },
            { href: "https://www.instagram.com/g1lber_/?hl=es-la", icon: <FaInstagram size={24} />, label: "Instagram" },
          ].map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-green-400 transition duration-300"
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.95 }}
              title={item.label}
            >
              {item.icon}
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Profile image */}
      <div className="relative z-10 flex-1 w-full max-w-md flex justify-center items-center">
        <motion.div
          className="relative w-80 h-80 md:w-96 md:h-96"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.8 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-400 rounded-full blur-sm opacity-75"></div>
          <div className="relative w-full h-full bg-gray-800 rounded-full overflow-hidden border-4 border-green-400 shadow-2xl">
            <motion.img 
              src="/principal.svg" 
              alt="Gilber Martínez - Desarrollador Full Stack" 
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.6 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-gray-400 hover:text-green-400 cursor-pointer"
        >
          <FaArrowDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
