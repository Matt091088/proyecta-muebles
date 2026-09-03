import ServiceCard from "./ServiceCard";

function Services() {
  return (
    <section id="servicios" className="services">
      <h2>Servicios</h2>

      <div className="services-container">
        <ServiceCard
          titulo="Proyecto Técnico"
          descripcion="Planos completos con medidas exactas listos para fabricar."
        />

        <ServiceCard
  titulo="Lista de Cortes"
  descripcion="Optimización de materiales y distribución de piezas para reducir desperdicios."
/>

        <ServiceCard
          titulo="Render 3D"
          descripcion="Visualización realista del mueble antes de comenzar la fabricación."
        />
      </div>
    </section>
  );
}

export default Services;