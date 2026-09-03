import logo from "../assets/images/logo2.png";
function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
  <img src={logo} alt="Proyecta Mueble" />
</div>

      <ul className="nav-links">
        <li>
          <a href="#inicio">Inicio</a>
        </li>

        <li>
          <a href="#proyectos">Proyectos</a>
        </li>

        <li>
          <a href="#servicios">Servicios</a>
        </li>

        <li>
          <a href="#precios">Precios</a>
        </li>

        <li>
          <a href="#faq">FAQ</a>
        </li>

        <li>
          <a
            href="https://wa.me/5493765253186?text=Hola%2C%20quiero%20solicitar%20un%20presupuesto%20para%20un%20proyecto"
            target="_blank"
            rel="noopener noreferrer"
          >
            Solicitar presupuesto
          </a>
        </li>
      </ul>

    </nav>
  );
}

export default Navbar;