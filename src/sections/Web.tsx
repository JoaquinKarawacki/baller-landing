export default function Web() {
  const wa = "https://wa.me/59894402339";
  const msgWeb = encodeURIComponent("Hola, quiero mi página web a medida.");
  const msgEj = encodeURIComponent("Hola, quiero ver ejemplos de páginas.");

  return (
    <section className="section web" id="web">
      <div className="container">
        <div className="grid-2">
          {/* Columna izquierda: texto */}
          <div className="web__text">
            <h2 className="h2">Desarrollamos tu web a medida</h2>
            <p>
              Diseñamos sitios a medida, optimizados y responsivos,
              siguiendo buenas prácticas para rendimiento (Core Web Vitals), SEO básico y
              medición end-to-end. Tu web lista para convertir desde el día uno.
            </p>

            <ul className="list">
              <li>Carga veloz y diseño mobile-first</li>
              <li>CTAs a WhatsApp y formularios en Google Sheets</li>
              <li>Métricas integradas: GA4 y Meta Pixel</li>
            </ul>

            <div className="badges" aria-label="Integraciones disponibles">
              <span className="badge">IG DM</span>
              <span className="badge">WhatsApp</span>
              <span className="badge">Google Sheets</span>
              <span className="badge">n8n</span>
              <span className="badge">Meta Pixel</span>
            </div>

            <div className="cta-row">
              <a
                className="btn btn--primary"
                href={`${wa}?text=${msgWeb}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Quiero mi web
              </a>
              <a
                className="btn btn--secondary"
                href={`${wa}?text=${msgEj}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver ejemplos
              </a>
            </div>
          </div>

          {/* Columna derecha: mockup/imagen */}
          <div className="web__visual">
            <div className="mockup card">
              <div className="mockup__bar" />
              <div className="mockup__body">
                <div className="line w-8" />
                <div className="line w-6" />
                <div className="line w-5" />
                <div className="line w-4" />
                <div className="line w-3" />
                <div className="btns">
                  <span className="pill" />
                  <span className="pill" />
                </div>
              </div>
            </div>
          </div>
        </div>{/* /grid-2 */}
      </div>{/* /container */}
    </section>
  );
}
