import TestimonialCard from "./TestimonialCard";
import testimonials from "../data/testimonials";

function Testimonials() {
  return (
    <section className="testimonials">

      <h2>Lo que dicen nuestros clientes</h2>

      <div className="testimonials-container">

        {testimonials.map((testimonial) => (

          <TestimonialCard
            key={testimonial.id}
            nombre={testimonial.nombre}
            empresa={testimonial.empresa}
            comentario={testimonial.comentario}
          />

        ))}

      </div>

    </section>
  );
}

export default Testimonials;