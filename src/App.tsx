import "./App.css";

const services = [
  {
    id: "01",
    title: "Automatizaciones operativas",
    description:
      "Eliminamos tareas repetitivas y conectamos herramientas para que tu equipo gane tiempo real.",
    items: [
      "Flujos entre formularios, CRM, planillas y correo",
      "Alertas internas, aprobaciones y seguimiento automatico",
      "Carga y sincronizacion de datos entre sistemas",
    ],
  },
  {
    id: "02",
    title: "Software interno a medida",
    description:
      "Diseñamos portales, paneles y herramientas internas para ordenar procesos y centralizar informacion.",
    items: [
      "Dashboards para operacion y direccion",
      "Paneles de administracion y backoffice",
      "Sistemas internos para ventas, soporte o logistica",
    ],
  },
  {
    id: "03",
    title: "Integraciones y mejoras",
    description:
      "Tomamos software que ya existe y lo hacemos trabajar mejor con nuevos modulos, APIs y automatizaciones.",
    items: [
      "Integraciones con servicios externos y APIs",
      "Optimizacion de procesos lentos o manuales",
      "Auditoria tecnica y roadmap de mejoras",
    ],
  },
  {
    id: "04",
    title: "Desarrollo web",
    description:
      "Creamos sitios, landings y plataformas web con foco en conversion, velocidad y una operacion simple.",
    items: [
      "Landing pages y sitios corporativos",
      "Portales para clientes, vendedores o equipos",
      "Ecommerce y flujos digitales de compra",
    ],
  },
  {
    id: "05",
    title: "Integraciones de IA",
    description:
      "Sumamos inteligencia artificial donde realmente aporta: asistencia interna, clasificacion y generacion de contenido util.",
    items: [
      "Asistentes para soporte interno o comercial",
      "Clasificacion automatica de consultas y documentos",
      "Respuestas, resumenes y tareas repetitivas asistidas",
    ],
  },
  {
    id: "06",
    title: "Dashboards y control",
    description:
      "Convertimos datos dispersos en paneles claros para seguir ventas, operaciones y performance en tiempo real.",
    items: [
      "KPIs comerciales, operativos y financieros",
      "Tableros para direccion y seguimiento diario",
      "Alertas y reportes automaticos para decision rapida",
    ],
  },
];

const process = [
  {
    step: "01",
    title: "Entender",
    text: "Mapeamos el proceso actual, detectamos cuellos de botella y priorizamos lo que mas impacto genera.",
  },
  {
    step: "02",
    title: "Disenar",
    text: "Proponemos una solucion concreta, simple de operar y alineada a como trabaja tu empresa.",
  },
  {
    step: "03",
    title: "Implementar",
    text: "Construimos, integramos y validamos rapido para que veas avances sin esperar meses.",
  },
  {
    step: "04",
    title: "Acompanar",
    text: "Dejamos la solucion funcionando, documentada y lista para evolucionar con tu equipo.",
  },
];

const highlights = [
  "Automatizacion de tareas administrativas y comerciales",
  "Portales internos para equipos y operaciones",
  "Procesos más eficientes que impulsan mejores resultados",
  "Sistemas pensados para ahorrar tiempo y mejorar la rentabilidad",
];

const projects = [
  {
    id: "01",
    title: "Automatizacion de procesos operativos",
    description:
      "Eliminamos tareas manuales y repetitivas para que tu equipo gane tiempo y foco.",
    detail:
      "Automatizamos procesos como carga de datos, generacion de reportes, envios de informacion y tareas administrativas que hoy consumen horas y generan errores.",
    items: [
      "Automatizacion de tareas en Excel, sistemas y portales",
      "Integracion entre herramientas que hoy no se comunican",
      "Generacion automatica de reportes y envios",
      "Reduccion de errores y retrabajo",
    ],
  },
  {
    id: "02",
    title: "Centralizacion de datos y dashboards",
    description:
      "Ordenamos tu informacion y la convertimos en herramientas claras para decidir mejor.",
    detail:
      "Unificamos datos que hoy estan dispersos y creamos dashboards simples y accionables para que tengas visibilidad real del negocio.",
    items: [
      "Integracion de datos desde multiples fuentes",
      "Bases de datos centralizadas y estructuradas",
      "Dashboards en Power BI u otras herramientas",
      "Indicadores claros para seguimiento y gestion",
    ],
  },
  {
    id: "03",
    title: "Sistemas de alertas y monitoreo",
    description:
      "Te avisamos lo importante en el momento justo, sin depender de revisiones manuales.",
    detail:
      "Implementamos sistemas que detectan eventos clave y envian alertas automaticas para que puedas actuar rapido.",
    items: [
      "Alertas automaticas por mail, WhatsApp o Teams",
      "Monitoreo de variables criticas del negocio",
      "Deteccion temprana de problemas o desvios",
      "Seguimiento en tiempo real",
    ],
  },
];

const contactCards = [
  {
    title: "WhatsApp",
    value: "Coordinemos una llamada corta",
    note: "Ideal si ya tenes un proceso puntual que queres mejorar.",
    href: "https://wa.me/59894402339",
  },
  {
    title: "Email",
    value: "Contanos tu situacion",
    note: "Respondemos con una propuesta o siguiente paso concreto.",
    href: "mailto:baller.uuy@gmail.com",
  },
  {
    title: "Proyecto a medida",
    value: "Automatizacion, sistema interno o integracion",
    note: "Podemos empezar con una mejora especifica y escalar desde ahi.",
    href: "#contacto",
  },
];

const footerContacts = [
  {
    label: "WhatsApp",
    href: "https://wa.me/59894402339",
  },
  {
    label: "Instagram",
    href: "https://instagram.com/baller.uy",
  },
  {
    label: "Email",
    href: "mailto:baller.uuy@gmail.com",
  },
];

function App() {
  return (
    <div className="site-shell">
      <header className="topbar">
        <div className="container topbar__inner">
          <a className="brand" href="#inicio" aria-label="Ir al inicio">
            <span className="brand__mark" aria-hidden="true">
              <img src="/favicon.svg" alt="" />
            </span>
            <span className="brand__text">
              <strong>Baller</strong>
              <span>Software & AI Products from Uruguay</span>
            </span>
          </a>

          <nav className="topbar__nav" aria-label="Navegacion principal">
            <a href="#servicios">Servicios</a>
            <a href="#proceso">Proceso</a>
            <a href="#proyectos">Proyectos</a>
            <a href="#contacto">Contacto</a>
          </nav>

          <a className="topbar__cta" href="#contacto">
            Hablemos
          </a>
        </div>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="container hero__grid">
            <div className="hero__content">
              <div className="eyebrow-pill">Abiertos a nuevos proyectos • Uruguay</div>
              <p className="section-kicker">Automatizaciones, software interno y mejoras reales</p>
              <h1>
                Automatiza procesos.
                <span>Hace tu empresa mas rentable.</span>
              </h1>
              <p className="hero__lead">
                Ayudamos a empresas a ordenar procesos, automatizar operaciones y construir herramientas internas que ahorran tiempo, reducen errores y mejoran la rentabilidad.
              </p>

              <div className="hero__actions">
                <a className="button button--primary" href="#contacto">
                  Quiero una propuesta
                </a>
                <a className="button button--ghost" href="#servicios">
                  Ver servicios
                </a>
              </div>

              <ul className="hero__highlights" aria-label="Puntos destacados">
                {highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="hero__panel" aria-label="Vista previa del proceso">
              <div className="showcase-card">
                <div className="showcase-card__topbar">
                  <div className="showcase-card__dots" aria-hidden="true">
                    <span />
                    <span />
                    <span />
                  </div>
                  <p>Panel operativo</p>
                </div>

                <div className="showcase-card__body">
                  <div className="showcase-card__headline">
                    <strong>Automatizacion en marcha</strong>
                    <span>Visibilidad clara del proceso y del impacto.</span>
                  </div>

                  <div className="showcase-card__metrics">
                    <div className="metric-card">
                      <strong>12 hs</strong>
                      <span>ahorradas por semana</span>
                    </div>
                    <div className="metric-card">
                      <strong>3 areas</strong>
                      <span>conectadas en un flujo</span>
                    </div>
                  </div>

                  <div className="showcase-flow">
                    <div className="showcase-step">
                      <span className="showcase-step__label">Entrada</span>
                      <strong>Pedidos y formularios</strong>
                    </div>
                    <div className="showcase-flow__arrow" aria-hidden="true" />
                    <div className="showcase-step">
                      <span className="showcase-step__label">Proceso</span>
                      <strong>Validacion y asignacion automatica</strong>
                    </div>
                    <div className="showcase-flow__arrow" aria-hidden="true" />
                    <div className="showcase-step">
                      <span className="showcase-step__label">Salida</span>
                      <strong>Seguimiento y control en un solo lugar</strong>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        <section className="section" id="servicios">
          <div className="container">
            <div className="section-heading">
              <p className="section-kicker">Que hacemos</p>
              <h2>Servicios para empresas que quieren operar mejor.</h2>
              <p>
                Resolvemos lo que frena a tu equipo: tareas repetitivas, información dispersa, herramientas desconectadas y procesos ineficientes.
              </p>
            </div>

            <div className="services-grid">
              {services.map((service) => (
                <article className="service-card" key={service.title}>
                  <div className="service-card__badge">{service.id}</div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <ul>
                    {service.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--framed" id="proceso">
          <div className="container">
            <div className="section-heading section-heading--centered">
              <p className="section-kicker">Nuestro proceso</p>
              <h2>Implementamos con foco en impacto, no en complejidad.</h2>
            </div>

            <div className="process-grid">
              {process.map((item) => (
                <article className="process-card" key={item.step}>
                  <div className="process-card__step">{item.step}</div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section projects" id="proyectos">
          <div className="container">
            <div className="section-heading section-heading--centered">
              <p className="section-kicker">Proyectos</p>
              <h2>Soluciones reales aplicadas a problemas concretos.</h2>
              <p>
                Algunos de los tipos de proyectos que ya implementamos para mejorar operacion,
                visibilidad y capacidad de respuesta en empresas.
              </p>
            </div>

            <div className="projects-grid">
              {projects.map((project) => (
                <article className="project-card" key={project.title}>
                  <div className="project-card__badge">{project.id}</div>
                  <h3>{project.title}</h3>
                  <p className="project-card__lead">{project.description}</p>
                  <p className="project-card__detail">{project.detail}</p>
                  <ul>
                    {project.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section contact" id="contacto">
          <div className="container">
            <div className="section-heading section-heading--centered">
              <p className="section-kicker">Trabajemos juntos</p>
              <h2>Si hay un proceso que hoy te hace perder tiempo, lo podemos mejorar.</h2>
              <p>
                Podemos empezar por una automatizacion puntual, una integracion concreta o una herramienta
                interna que ordene una parte critica del negocio.
              </p>
            </div>

            <div className="contact-grid">
              {contactCards.map((card) => (
                <a className="contact-card" href={card.href} key={card.title}>
                  <p className="contact-card__title">{card.title}</p>
                  <h3>{card.value}</h3>
                  <span>{card.note}</span>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer__inner">
          <div>
            <a className="brand brand--footer" href="#inicio">
              <span className="brand__mark" aria-hidden="true">
                <img src="/favicon.svg" alt="" />
              </span>
              <span className="brand__text">
                <strong>Baller</strong>
                <span>Software & AI Products from Uruguay</span>
              </span>
            </a>
            <p className="footer__copy">Automatizaciones, herramientas internas e integraciones para empresas.</p>
          </div>

          <div className="footer__meta">
            <div className="footer__links">
              <a href="#servicios">Servicios</a>
              <a href="#proceso">Proceso</a>
              <a href="#proyectos">Proyectos</a>
              <a href="#contacto">Contacto</a>
            </div>

            <div className="footer__contact">
              <p className="footer__heading">Contactanos</p>
              <div className="footer__contact-links">
                {footerContacts.map((item) => (
                  <a href={item.href} key={item.label} target="_blank" rel="noreferrer">
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
