
const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white text-center py-8">
        <p>&copy; 2025 Gilber. Todos los derechos reservados.</p>
        <div className="mt-4 space-x-4">
          <a
            href="https://github.com/tu-usuario"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400 transition"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/tu-usuario"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400 transition"
          >
            LinkedIn
          </a>
          {/* Puedes agregar más redes si quieres */}
        </div>
      </footer>
    );
  };
  
  export default Footer;