import escritorioImage from "../assets/images/escritoriol.jpg";
import cocinaImage from "../assets/images/cocinachica.jpeg";
import panelTvImage from "../assets/images/paneltvvinoteca.jpeg";

function Projects() {
  return (
    <section id="proyectos" className="projects">
      <h2>Proyectos realizados</h2>

      <p className="projects-intro">
        Algunos de nuestros trabajos de diseño y desarrollo
        de muebles a medida.
      </p>

      <div className="projects-container">

        <article className="project-card">
          <img
            src={escritorioImage}
            alt="Diseño de escritorio"
          />

          <h3>Escritorio</h3>

          <p>
            Diseño y desarrollo técnico de escritorio
            para fabricación.
          </p>
        </article>

        <article className="project-card">
          <img
            src={cocinaImage}
            alt="Diseño de cocina"
          />

          <h3>Cocina</h3>

          <p>
            Desarrollo del diseño y planificación
            de los módulos para fabricación.
          </p>
        </article>

        <article className="project-card">
          <img
            src={panelTvImage}
            alt="Panel de TV con vinoteca"
          />

          <h3>Panel TV + Vinoteca</h3>

          <p>
            Diseño de panel de TV integrado con
            espacio para vinoteca.
          </p>
        </article>

      </div>
    </section>
  );
}

export default Projects;