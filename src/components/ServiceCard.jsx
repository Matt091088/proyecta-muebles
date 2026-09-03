function ServiceCard(props) {
  return (
    <article className="service-card">
      <h3>{props.titulo}</h3>
      <p>{props.descripcion}</p>
    </article>
  );
}

export default ServiceCard;