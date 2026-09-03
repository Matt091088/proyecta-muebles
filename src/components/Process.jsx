import disenoImage from "../assets/images/diseno2.jpg";
import planosImage from "../assets/images/planodecortes.jpg";
import listaImage from "../assets/images/listadecortes.jpg";
import terminadoImage from "../assets/images/hero-image.png";

function Process () {
  return (
    <section id="proceso" className="process">

      <h2>De la idea a la fabricación</h2>

      <p className="process-intro">
        Convertimos tu idea en documentación técnica
        lista para fabricar.
      </p>

      <div className="process-container">

        <article className="process-step">

          <img
            src={disenoImage}
            alt="Diseño de un mueble"
          />

          <span>01</span>

          <h3>Diseño</h3>

          <p>
            Desarrollamos el diseño y definimos las medidas
            necesarias para fabricar el mueble.
          </p>

        </article>


        <article className="process-step">

          <img
            src={planosImage}
            alt="Planos técnicos de un mueble"
          />

          <span>02</span>

          <h3>Planos de corte</h3>

          <p>
            Preparamos los planos técnicos con las medidas
            necesarias para la fabricación.
          </p>

        </article>


        <article className="process-step">

          <img
            src={listaImage}
            alt="Lista de cortes de materiales"
          />

          <span>03</span>

          <h3>Lista de cortes</h3>

          <p>
            Organizamos las piezas y materiales para reducir
            desperdicios y facilitar la fabricación.
          </p>

        </article>


        <article className="process-step">

          <img
            src={terminadoImage}
            alt="Proyecto de mueble terminado"
          />

          <span>04</span>

          <h3>Listo para fabricar</h3>

<p>
  Recibís toda la documentación necesaria para
  comenzar a fabricar.
</p>

        </article>

      </div>

    </section>
  );
}

export default Process;