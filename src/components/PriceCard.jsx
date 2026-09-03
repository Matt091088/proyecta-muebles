import { motion } from "framer-motion";

function PriceCard(props) {
  return (
    <motion.article
      className="price-card"
      whileHover={{ scale: 1.05 }}
    >
      {props.featured && (
        <p className="badge">⭐ Más elegido</p>
      )}

      <h3>{props.plan}</h3>

      <h2>{props.precio}</h2>

      <ul>
        {props.children}
      </ul>

      <a
  href={`https://wa.me/5493765253186?text=Hola,%20estoy%20interesado%20en%20el%20plan%20${props.plan}`}
  target="_blank"
  rel="noopener noreferrer"
>
  <button className={props.featured ? "featured-button" : ""}>
    Solicitar este plan
  </button>
</a>

    </motion.article>
  );
}

export default PriceCard;