import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useState } from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";



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
  const fullText = "Hola, mi nombre es";
  const [displayedText, setDisplayedText] = useState("");
  const controls = useAnimationControls();

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      setDisplayedText(fullText.slice(0, currentIndex + 1));
      currentIndex++;
      if (currentIndex === fullText.length) clearInterval(typingInterval);
    }, 50); // Velocidad de escritura (ms por letra)

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section className="flex flex-col md:flex-row justify-center items-center h-[90vh] px-9 gap-4 bg-gray-900">
      {/* Columna izquierda: Texto */}
      <div className="flex-1 flex flex-col justify-center items-start gap-4 ml-19">
        <motion.h1
          className="text-green-400 text-sm md:text-2xl font-mono whitespace-pre"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          {displayedText}
        </motion.h1>

        <motion.h2
          className="text-5xl sm:text-7xl font-bold text-white"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          custom={4}
        >
          Gilber Martinez
        </motion.h2>

        <motion.h3
          className="text-3xl sm:text-5xl text-gray-400"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          custom={5}
        >
          Analista y Desarrollador de Software
        </motion.h3>

        <div className="flex items-center justify-center gap-6 mt-6">
          {[ 
            { href: "https://github.com/G1lber", icon: <FaGithub size={28} /> },
            { href: "https://www.instagram.com/g1lber_/?hl=es-la", icon: <FaInstagram size={28} /> },
            { href: "https://www.linkedin.com/in/gilber-martinez-6b7964320/", icon: <FaLinkedin size={28} /> },
          ].map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
              variants={iconVariants}
              initial="hidden"
              animate="visible"
              custom={index + 1}
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.icon}
            </motion.a>
          ))}
        </div>
        <motion.a
          href="#about"
          className="mt-9 px-6 py-3 border border-green-400 text-green-400 rounded hover:bg-green-400 hover:text-gray-900 transition duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          Mi perfil
        </motion.a>
      </div>

      {/* Columna derecha: Imagen animada */}
      <div className="flex-1 w-full h-full flex justify-center items-center">
        <motion.div
          className="w-75 h-75 bg-green-400 rounded-full shadow-lg overflow-hidden"
          initial={{ scale: 0.9, rotate: -5, opacity: 0 }}
          animate={{ scale: 1, rotate: 0, opacity: 1 }}
          transition={{ duration: 1.4, ease: "easeOut", delay: 1 }}
          whileHover={{ scale: 1.05 }}
        >
          <span className="text-gray-900 font-bold text-center w-full h-full flex items-center justify-center">
            <img src="/principal.svg" alt="imagen" className="w-full h-full" />

          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
