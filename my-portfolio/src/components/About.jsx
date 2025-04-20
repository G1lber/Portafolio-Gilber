
const About = () => {
    return (
      <section 
        id="about"
        className="about py-20 bg-gray-900 text-white px-6 ">
        <h2 className="text-4xl font-bold text-center mb-3">Sobre mí</h2>
        <div className="w-32 h-1.5 bg-green-400 mx-auto mb-10 rounded"></div>
        <p className="text-lg max-w-3xl mx-auto text-gray-300 leading-relaxed text-center">
        ¡Hola! Soy <span className="font-semibold text-white">Gilber Martínez</span>, un apasionado desarrollador de software enfocado en construir soluciones digitales modernas, limpias y funcionales.
        Me <span className="text-green-400 font-medium">especializo</span> en crear interfaces centradas en la experiencia de usuario, con un fuerte enfoque en rendimiento, accesibilidad y buenas prácticas de desarrollo.
        Disfruto enfrentar nuevos desafíos, resolver problemas reales y aprender constantemente. Mi objetivo es contribuir a proyectos significativos que generen impacto, mientras sigo creciendo profesionalmente en entornos colaborativos y dinámicos.
        </p>
      </section>

    );
  };
  
  export default About;