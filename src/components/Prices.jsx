import PriceCard from "./PriceCard";
import prices from "../data/prices";

function Prices() {
  return (
    <section id="precios" className="prices">
      <h2>Elegí el plan ideal para tu proyecto</h2>

      <div className="prices-container">
        {prices.map((plan) => (
          <PriceCard
            key={plan.id}
            plan={plan.plan}
            precio={plan.price}
            featured={plan.featured}
          >
            {plan.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </PriceCard>
        ))}
      </div>
    </section>
  );
}

export default Prices;