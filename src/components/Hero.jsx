import heroImage from "../assets/images/hero-image.png";
import { motion } from "framer-motion";

function Hero() {
  return (
    <motion.section
  id="inicio"
  className="hero"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="hero-content">

        <h1>Convertí una idea
  <span>en un proyecto listo para fabricar.</span>
  </h1>

        <p>Diseños técnicos para carpinteros y fabricantes de muebles.
  Recibí planos, lista de cortes y materiales optimizados,
  listos para comenzar a fabricar.
</p>

        <a href="#precios">
  <button>Solicitar Proyecto</button>
</a>

        <ul className="hero-benefits">
          <li>✅ Medidas exactas para fabricar</li>
          <li>✅ Lista de cortes optimizada</li>
          <li>✅ Menor desperdicio de material</li>
          <li>✅ Entrega en PDF lista para producción</li>
        </ul>

      </div>

      <div className="hero-image">
        <img src={heroImage} alt="Render de un mueble" />
      </div>

    </motion.section>
  );
}

export default Hero;