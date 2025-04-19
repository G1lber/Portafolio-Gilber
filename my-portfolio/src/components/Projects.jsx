
const Projects = () => {
    return (
      <section className="py-20 bg-white text-center text-gray-800 px-4" >
        <h2 className="text-3xl font-semibold">Mis Proyectos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Carnetizacion</h3>
            <p className="text-gray-600">Proyecto para crear carnet "Identificadores" para la empresa SENA Tecnologias"Python, Django, Javascript, Mysql"</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Control de entradas</h3>
            <p className="text-gray-600">Sistema de tecnologia para el ingreso y salida de los usuarios del Sena Tecnologias"Python, Django, Javascript, Mysql"</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Gestor de Tareas</h3>
            <p className="text-gray-600">Un sistema para gestionar tareas "Arquitectura MERN (Mongo db,Express JS,React JS,Node.JS )"</p>
          </div>
          {/* Agrega más proyectos si deseas */}
        </div>
      </section>
    );
  };
  
  export default Projects;