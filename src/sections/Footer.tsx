export default function Footer() {
  const wa = "https://wa.me/59894402339";
  const msgWeb = encodeURIComponent("Hola, quiero trabajar con ustedes.");

  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer__grid">
          {/* Columna 1 — Marca */}
          <div className="footer__brand">
            <h2 className="h2">Baller</h2>
            <p className="footer__muted">Bots para IG/WhatsApp y webs a medida.</p>
            <address className="footer__muted" style={{ fontStyle: "normal" }}>
              Montevideo, UY
            </address>
          </div>

          {/* Columna 2 — Navegación */}
          <nav className="footer__nav" aria-label="Footer">
            <ul className="footer__links">
              <li><a className="footer__link" href="#como">Cómo funciona</a></li>
              <li><a className="footer__link" href="#demos">Demos</a></li>
              <li><a className="footer__link" href="#web">Web a medida</a></li>
            </ul>
          </nav>

          {/* Columna 3 — Contacto */}
          <div className="footer__contact">
            <a
              className="btn btn--primary"
              href={`${wa}?text=${msgWeb}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Escribime por WhatsApp
            </a>
            <p className="footer__muted" style={{ marginTop: "12px" }}>
              Email:{" "}
              <a className="footer__link" href="mailto:baller.uuy@gmail.com">
                baller.uuy@gmail.com
              </a>
            </p>
          </div>
        </div>

        {/* Franja legal */}
        <div className="footer__legal">
          <small className="footer__muted">
            © {new Date().getFullYear()} Baller — Hecho en Uruguay ·{" "}
            <a className="footer__link" href="#privacidad">Privacidad</a> ·{" "}
            <a className="footer__link" href="#terminos">Términos</a>
          </small>
        </div>
      </div>
    </footer>
  );
}
