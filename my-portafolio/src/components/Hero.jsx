import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useState } from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaDownload, FaArrowDown, FaCode } from "react-icons/fa";
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

  // Navegar suavemente a la sección About
  const scrollToAbout = () => {
    const el = document.getElementById("about");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="relative flex flex-col md:flex-row justify-center items-center min-h-screen px-6 md:px-12 gap-12 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center items-start gap-8 max-w-2xl">
        <motion.div
          className="text-green-400 text-sm md:text-base font-mono mb-4 px-4 py-2 bg-green-400/10 rounded-lg border border-green-400/30"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="border-r-2 border-green-400 pr-3">
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
          className="text-gray-300 text-lg max-w-lg leading-relaxed text-justify"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          custom={3}
        >
          Desarrollador especializado en crear aplicaciones web modernas con 
          tecnologías como React, Node.js, Python y Django. Apasionado por soluciones innovadoras y código de calidad.
        </motion.p>

        {/* Action buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          {/* Download CV button */}
          <motion.a
            href="/Cv- Gilber Martinez.pdf"
            download="Gilber-Martinez-CV.pdf"
            className="px-8 py-4 bg-gradient-to-r from-green-500 to-green-400 text-gray-950 rounded-lg font-semibold shadow-lg shadow-green-500/50 hover:shadow-xl hover:shadow-green-500/70 transition duration-300 flex items-center gap-2 justify-center border border-green-400"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Descargar CV de Gilber Martínez"
            title="Descargar CV"
          >
            <FaDownload size={18} />
            Descargar CV
          </motion.a>
        </motion.div>

        {/* Social links */}
        <motion.div
          className="flex items-center gap-8 mt-8"
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
              className="text-gray-400 hover:text-green-400 p-2 rounded-full hover:bg-green-400/10 transition duration-300"
              whileHover={{ scale: 1.3, y: -3 }}
              whileTap={{ scale: 0.9 }}
              title={item.label}
            >
              {item.icon}
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Animated Monogram Logo */}
      <div className="relative z-10 flex-1 w-full max-w-md flex justify-center items-center mt-12 md:mt-0">
        <motion.div
          className="relative w-72 h-72 md:w-96 md:h-96 flex justify-center items-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.8 }}
        >
          {/* Background Glows */}
          <div className="absolute inset-0 bg-green-500/20 rounded-full blur-[80px] animate-pulse"></div>
          <div className="absolute inset-20 bg-blue-500/10 rounded-full blur-[60px] animate-pulse" style={{ animationDelay: '1s' }}></div>

          {/* Rotating Rings */}
          <motion.div 
            className="absolute inset-0 border-2 border-dashed border-green-400/30 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <motion.div 
            className="absolute inset-8 border border-dotted border-blue-400/20 rounded-full"
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          />

          {/* Main Logo Container */}
          <motion.div 
            className="relative w-48 h-48 md:w-64 md:h-64 bg-gray-900/80 backdrop-blur-xl rounded-2xl border-2 border-green-400/50 shadow-[0_0_50px_rgba(74,222,128,0.2)] flex flex-col justify-center items-center overflow-hidden"
            whileHover={{ 
              scale: 1.05, 
              borderColor: 'rgba(74,222,128,1)',
              boxShadow: '0_0_70px_rgba(74,222,128,0.4)'
            }}
          >
            {/* Animated Background Code Snippets */}
            <div className="absolute inset-0 opacity-10 font-mono text-[10px] p-4 pointer-events-none select-none overflow-hidden leading-tight">
              {`const profile = { name: "Gilber", role: "FullStack", status: "coding" };\nfunction build() { return "success"; }\nconsole.log("Hello World");\nwhile(true) { innovate(); }`}
            </div>

            {/* Initial G */}
            <motion.div 
              className="relative z-10 flex items-center justify-center"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="text-8xl md:text-[11rem] font-black text-transparent bg-clip-text bg-gradient-to-br from-white via-green-400 to-green-600 drop-shadow-[0_0_20px_rgba(74,222,128,0.6)]">
                G
              </span>
            </motion.div>

            {/* Sub-label */}
            <div className="absolute bottom-6 flex items-center gap-2 text-green-400/80 font-mono text-xs tracking-widest uppercase">
              <FaCode size={14} />
              <span>Full Stack</span>
            </div>
            
            {/* Scanning line animation */}
            <motion.div 
              className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-green-400 to-transparent z-20 opacity-30"
              animate={{ top: ['0%', '100%'] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>

          {/* Floating Particles */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-green-400/40 rounded-full blur-[1px]"
              initial={{ 
                x: Math.random() * 200 - 100, 
                y: Math.random() * 200 - 100,
                opacity: 0 
              }}
              animate={{ 
                x: [null, Math.random() * 300 - 150], 
                y: [null, Math.random() * 300 - 150],
                opacity: [0, 1, 0]
              }}
              transition={{ 
                duration: 4 + Math.random() * 4, 
                repeat: Infinity,
                delay: i * 0.5
              }}
            />
          ))}
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
          role="button"
          tabIndex={0}
          onClick={scrollToAbout}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              scrollToAbout();
            }
          }}
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2.5, repeat: Infinity }}
          className="text-gray-400 hover:text-green-400 cursor-pointer focus:outline-none p-2 rounded-full hover:bg-green-400/10 transition duration-300"
          aria-label="Ir a la sección Sobre"
          title="Ir a la sección Sobre"
        >
          <FaArrowDown size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
