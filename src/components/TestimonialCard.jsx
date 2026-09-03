function TestimonialCard(props) {
  return (
    <article className="testimonial-card">

      <p>⭐⭐⭐⭐⭐</p>

      <p>{props.comentario}</p>

      <h3>{props.nombre}</h3>

      <p>{props.empresa}</p>

    </article>
  );
}

export default TestimonialCard;