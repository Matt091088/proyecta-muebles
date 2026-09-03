import escritorioReal from "../assets/images/escritoriol.jpg";
import cocinaReal from "../assets/images/cocinachica.jpeg";
import panelReal from "../assets/images/paneltvvinoteca.jpeg";

function FinishedProjects() {
  return (
    <section className="finished-projects">

      <h2>Proyectos terminados</h2>

      <p className="finished-projects-intro">
        Fotos reales de trabajos realizados a partir de nuestros diseños.
      </p>

      <div className="finished-projects-container">

        <article className="finished-project-card">
          <img
            src={escritorioReal}
            alt="Escritorio terminado"
          />

          <h3>Escritorio</h3>
        </article>

        <article className="finished-project-card">
          <img
            src={cocinaReal}
            alt="Cocina terminada"
          />

          <h3>Cocina</h3>
        </article>

        <article className="finished-project-card">
          <img
            src={panelReal}
            alt="Panel de TV y vinoteca terminado"
          />

          <h3>Panel TV + Vinoteca</h3>
        </article>

      </div>

    </section>
  );
}

export default FinishedProjects;