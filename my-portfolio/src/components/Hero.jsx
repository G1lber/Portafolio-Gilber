import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useState } from "react";

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
    }, 60); // Velocidad de escritura (ms por letra)

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section className="flex flex-col md:flex-row justify-center items-center h-[80vh] px-9 gap-4 bg-gray-900">
      {/* Columna izquierda: Texto */}
      <div className="flex-1 flex flex-col justify-center items-start gap-4">
        <motion.h1
          className="text-green-400 text-sm md:text-base font-mono whitespace-pre"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          {displayedText}
        </motion.h1>

        <motion.h2
          className="text-4xl sm:text-6xl font-bold text-white"
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

        <motion.p
          className="text-gray-400 max-w-xl mt-4"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          custom={6}
        >
          Me apasiona diseñar y construir experiencias digitales modernas, limpias y altamente funcionales,
          centradas en la simplicidad, la eficiencia y una excelente experiencia de usuario.
        </motion.p>

        <motion.a
          href="#projects"
          className="mt-8 px-6 py-3 border border-green-400 text-green-400 rounded hover:bg-green-400 hover:text-gray-900 transition duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          Ver proyectos
        </motion.a>
      </div>

      {/* Columna derecha: Imagen animada */}
      <div className="flex-1 flex justify-center items-center">
        <motion.div
          className="w-64 h-64 bg-green-400 rounded-full shadow-lg overflow-hidden"
          initial={{ scale: 0.9, rotate: -5, opacity: 0 }}
          animate={{ scale: 1, rotate: 0, opacity: 1 }}
          transition={{ duration: 1.4, ease: "easeOut", delay: 0.8 }}
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
