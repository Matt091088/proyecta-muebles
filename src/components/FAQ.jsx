import FAQItem from "./FAQItem";
import faqs from "../data/faqs";

function FAQ() {
  return (
    <section id="faq" className="faq">
      <h2>Preguntas Frecuentes</h2>

      <div className="faq-container">
        {faqs.map((faq) => (
          <FAQItem
            key={faq.id}
            pregunta={faq.question}
            respuesta={faq.answer}
          />
        ))}
      </div>
    </section>
  );
}

export default FAQ;