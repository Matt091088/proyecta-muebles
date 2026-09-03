import { useState } from "react";

function FAQItem(props) {
  const [abierto, setAbierto] = useState(false);

  return (
    <article className="faq-item">
      <h3 onClick={() => setAbierto(!abierto)}>
        {abierto ? "▼" : "▶"} {props.pregunta}
      </h3>

      {abierto && (
        <p>{props.respuesta}</p>
      )}
    </article>
  );
}

export default FAQItem;