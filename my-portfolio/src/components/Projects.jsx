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

<div className="flex gap-3 mt-4 text-green-400 text-xl">
  <SiPython title="Python" />
  <SiDjango title="Django" />
  <SiJavascript title="JavaScript" />
  <SiMysql title="MySQL" />
  <SiMongodb title="Mongodb"/>
  <SiExpress title="Express"/>
  <SiReact title="React"/>
  <SiNodedotjs title="Nodejs"/>
</div>

const Projects = () => {
    return (
      <section className="py-20 bg-gray-900 text-white px-4">
        <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-3">Mis Proyectos</h2>
              <div className="w-24 h-1.5 bg-green-400 mx-auto mb-12 rounded"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
            {/* Proyecto 1 */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition duration-300">
              {/* <img src="/icons/carnet.svg" alt="Carnetización" className="w-12 h-12 mb-4" /> */}
              <h3 className="text-2xl font-semibold mb-2 text-white">Carnetización</h3>
              <p className="text-gray-300 mb-3">
                Sistema de generación de carnets "Identificadores" para los usuarios de la empresa SENA
              </p>
              <p className="text-sm text-green-400 font-medium">
                Tecnologías:
              </p>
              {/* Logos de tecnologías */}
              <div className="flex gap-3 mt-4 text-green-400 text-xl">
                <SiPython title="Python" />
                <SiDjango title="Django" />
                <SiJavascript title="JavaScript" />
                <SiMysql title="MySQL" />
              </div>
              <a
                href="https://github.com/G1lber/Carnetizacion-Django"
                target="_blank"
                className="inline-block mt-4 text-green-400 hover:underline text-sm"
              >
                Ver repositorio →
              </a>
            </div>

            {/* Proyecto 2 */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition duration-300">
              {/* <img src="/icons/entrada.svg" alt="Control Entradas" className="w-12 h-12 mb-4" /> */}
              <h3 className="text-2xl font-semibold mb-2 text-white">Control de Entradas</h3>
              <p className="text-gray-300 mb-3">
                Aplicación para el registro de ingreso y salida de usuarios del SENA.
              </p>
              <p className="text-sm text-green-400 font-medium">
                Tecnologías:
              </p>
              {/* Logos de tecnologías */}
              <div className="flex gap-3 mt-4 text-green-400 text-xl">
                <SiPython title="Python" />
                <SiDjango title="Django" />
                <SiJavascript title="JavaScript" />
                <SiMysql title="MySQL" />
              </div>
              <a
                href="https://github.com/G1lber/Proyecto-ControldeEntrada"
                target="_blank"
                className="inline-block mt-4 text-green-400 hover:underline text-sm"
              >
                Ver repositorio →
              </a>
            </div>

            {/* Proyecto 3 */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition duration-300">
              {/* <img src="/icons/tasks.svg" alt="Gestor de Tareas" className="w-12 h-12 mb-4" /> */}
              <h3 className="text-2xl font-semibold mb-2 text-white">Gestor de Tareas</h3>
              <p className="text-gray-300 mb-3">
                Sistema completo para crear, editar y eliminar tareas. Arquitectura MERN.
              </p>
              <p className="text-sm text-green-400 font-medium">
                Tecnologías:
              </p>
              {/* Logos de tecnologías */}
              <div className="flex gap-3 mt-4 text-green-400 text-xl">
                <SiMongodb title="Mongodb"/>
                <SiExpress title="Express"/>
                <SiReact title="React"/>
                <SiNodedotjs title="Nodejs"/>
              </div>
              <a
                href="https://github.com/G1lber/UpTask-MERN"
                target="_blank"
                className="inline-block mt-4 text-green-400 hover:underline text-sm"
              >
                Ver repositorio →
              </a>
            </div>
        </div>
      </div>
  </section>


    );
  };
  
  export default Projects;