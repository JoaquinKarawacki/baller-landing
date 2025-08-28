import ChatSnippet from "../components/ChatSnippet";
import { useState } from "react";

export default function Demos() {
  const wa = "https://wa.me/59894402339";
  const msgA = encodeURIComponent(
    'Hola, quiero el flujo "Reservas y listas de espera" para Gimnasios y Estudios.'
  );
  const msgB = encodeURIComponent(
    'Hola, quiero el flujo "Turnos y promociones" para Peluquerías y Centros de Estética.'
  );
const msgC = encodeURIComponent(
    'Hola, quiero el flujo "Venta inmediata y seguimiento" para Comercios.'
  );
const msgD = encodeURIComponent(
    'Hola, quiero el flujo "Venta inmediata y seguimiento" para eventos.'
  );

  const [replayA, setReplayA] = useState(0);
  const [replayB, setReplayB] = useState(0);
  const [replayC, setReplayC] = useState(0);
  const [replayD, setReplayD] = useState(0);

  return (
    <section id="demos" className="section demos">
      <div className="container">
        <h2 className="h2">Baller se adapta a todos los negocios</h2>
        <p className="subtitle">Elegí tu rubro y mirá lo que podemos automatizar.</p>

        {/* DOS RUBROS LADO A LADO */}
        <div className="grid-2">
          {/* Columna 1 — Gimnasios y Estudios, Peluqerias y Centros de Estetica*/}
          <div className="rubro">
            <div className="tabs" role="tablist" aria-label="Rubro">
              <button
                className="tab tab--active"
                data-rubro="gimnasios"
                role="tab"
                aria-selected="true"
                type="button"
              >
                Gimnasios y Estudios
              </button>
            </div>

            <div className="demos__content">
              <article
                className="card card--clickable"
                role="button"
                tabIndex={0}
                onMouseEnter={() => setReplayA((v) => v + 1)}
                onFocus={() => setReplayA((v) => v + 1)}
              >
                <h3 className="h3">Reservas y listas de espera</h3>
                <p>Gestionamos cupos, listas de espera y recordatorios automáticos.</p>

                {replayA === 0 ? (
                  <div className="demo-snippet demo-snippet--lg demo-snippet--empty">
                    Pasá el mouse para ver el chat
                  </div>
                ) : (
                  <ChatSnippet
                    key={`A-${replayA}`}
                    lines={[
                      {
                        role: "Cliente",
                        text: "Hola, quiero arrancar Pilates, ¿necesito experiencia previa?",
                      },
                      {
                        role: "Bot",
                        text: "¡Hola 👋! No hace falta experiencia. Adaptamos ejercicios a tu ritmo.",
                      },
                      { role: "Cliente", text: "Perfecto, tengo pase libre. ¿Cómo puedo reservar?" },
                      {
                        role: "Bot",
                        text:
                          "Pasame tu nombre y mail y te doy de alta. Luego reservás desde el link.",
                      },
                      { role: "Cliente", text: "María López — maria@gmail.com" },
                      {
                        role: "Bot",
                        text: "¡Listo, María! Quedaste registrada ✅. Te llega recordatorio 1 h antes.",
                      },
                    ]}
                    lineDelay={800}
                    startOnView={false}
                  />
                )}

                <div className="demo-cta-row">
                  <a
                    className="btn btn--secondary"
                    href="#"
                    aria-disabled="true"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Ver demo
                  </a>
                  <a
                    className="link-whatsapp"
                    href={`${wa}?text=${msgA}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Quiero esto en mi estudio
                  </a>
                </div>
              </article>
            </div>
          </div>

          {/* Columna 2 — Peluquerías y Centros de Estética */}
          <div className="rubro">
            <div className="tabs" role="tablist" aria-label="Rubro">
              <button
                className="tab tab--active"
                data-rubro="peluquerias"
                role="tab"
                aria-selected="true"
                type="button"
              >
                Peluquerías y Centros de Estética
              </button>
            </div>

            <div className="demos__content">
              <article
                className="card card--clickable"
                role="button"
                tabIndex={0}
                onMouseEnter={() => setReplayB((v) => v + 1)}
                onFocus={() => setReplayB((v) => v + 1)}
              >
                <h3 className="h3">Turnos y promociones</h3>
                {/* Párrafo recomendado para este rubro */}
                <p>Tomamos turnos, reprogramamos y enviamos recordatorios y promos automáticamente.</p>

                {replayB === 0 ? (
                  <div className="demo-snippet demo-snippet--lg demo-snippet--empty">
                    Pasá el mouse para ver el chat
                  </div>
                ) : (
                  <ChatSnippet
                    key={`B-${replayB}`}
                    lines={[
                      {
                        role: "Cliente",
                        text: "Hola, quiero hacerme color y corte. ¿Tienen promociones esta semana?",
                      },
                      {
                        role: "Bot",
                        text:
                          "¡Hola!✂️ Sí, esta semana tenemos 15% off en color si sumás corte y brushing.",
                      },
                      { role: "Cliente", text: "Genial, ¿hay turno con Ana?" },
                      {
                        role: "Bot",
                        text:
                          "Ana está completa, pero Gabriela tiene cupos este jueves a las 15:00 o a las 17:00. ¿Te sirve?",
                      },
                      { role: "Cliente", text: "Sí, no hay problema. Reservame el turno de las 17:00." },
                      {
                        role: "Bot",
                        text:
                          "¡Reservado, Patricia! ⏰ Te recuerdo 24 h antes. Si no podés venir, avisame y te reprogramo.",
                      },
                    ]}
                    lineDelay={800}
                    startOnView={false}
                  />
                )}

                <div className="demo-cta-row">
                  <a
                    className="btn btn--secondary"
                    href="#"
                    aria-disabled="true"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Ver demo
                  </a>
                  <a
                    className="link-whatsapp"
                    href={`${wa}?text=${msgB}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Quiero esto en mi peluquería
                  </a>
                </div>
              </article>
            </div>
          </div>
        </div>
        
      <div className="grid-2">
         {/* Columna 2 — Comercios y */}
        <div className="rubro">
            <div className="tabs" role="tablist" aria-label="Rubro">
              <button
                className="tab tab--active"
                data-rubro="comercios"
                role="tab"
                aria-selected="true"
                type="button"
              >
                Comercios
              </button>
            </div>

            <div className="demos__content">
              <article
                className="card card--clickable"
                role="button"
                tabIndex={0}
                onMouseEnter={() => setReplayC((v) => v + 1)}
                onFocus={() => setReplayC((v) => v + 1)}
              >
                <h3 className="h3">Venta inmediata y seguimiento</h3>
                <p>Preguntas frecuentas y ventas de productos.</p>

                {replayC === 0 ? (
                  <div className="demo-snippet demo-snippet--lg demo-snippet--empty">
                    Pasá el mouse para ver el chat
                  </div>
                ) : (
                  <ChatSnippet
                    key={`A-${replayC}`}
                    lines={[
                      {
                        role: "Cliente",
                        text: "Hola, ¿tienen stock del set Glow?",
                      },
                      {
                        role: "Bot",
                        text: "¡Hola! Sí, tenemos stock. Sale $1.990 y tiene envío gratis en Montevideo.",
                      },
                      { role: "Cliente", text: "Buenísimo, ¿cómo hago para comprar?" },
                      {
                        role: "Bot",
                        text:
                          "Pasame dirección y barrio y te envío el link de Mercado Pago.",
                      },
                      { role: "Cliente", text: "Luis A. de Herrera 1234, Buceo." },
                      {
                        role: "Bot",
                        text: "Listo 💳. Aquí va el link. Una vez que pagues, te envío la confirmación y el número de seguimiento.",
                      },
                    ]}
                    lineDelay={800}
                    startOnView={false}
                  />
                )}

                <div className="demo-cta-row">
                  <a
                    className="btn btn--secondary"
                    href="#"
                    aria-disabled="true"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Ver demo
                  </a>
                  <a
                    className="link-whatsapp"
                    href={`${wa}?text=${msgC}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Quiero esto en mi tienda.
                  </a>
                </div>
              </article>
            </div>
          </div>

          <div className="rubro">
            <div className="tabs" role="tablist" aria-label="Rubro">
              <button
                className="tab tab--active"
                data-rubro="eventos"
                role="tab"
                aria-selected="true"
                type="button"
              >
                Eventos
              </button>
            </div>

            <div className="demos__content">
              <article
                className="card card--clickable"
                role="button"
                tabIndex={0}
                onMouseEnter={() => setReplayD((v) => v + 1)}
                onFocus={() => setReplayD((v) => v + 1)}
              >
                <h3 className="h3">Invitación, depósito y QR de acceso</h3>
                <p>Reservas y confirmacoin de asistenencia.</p>

                {replayD === 0 ? (
                  <div className="demo-snippet demo-snippet--lg demo-snippet--empty">
                    Pasá el mouse para ver el chat
                  </div>
                ) : (
                  <ChatSnippet
                    key={`A-${replayD}`}
                    lines={[
                      {
                        role: "Cliente",
                        text: "Hola, quiero confirmar la fecha y dirección del evento del sábado.",
                      },
                      {
                        role: "Bot",
                        text: "Claro 📅. Es el sábado 18 de mayo, en Salón Atlántico, 21:00 hs. ¿Querés que te pase la cuenta para el depósito del regalo grupal?",
                      },
                      { role: "Cliente", text: "Sí, pasame." },
                      {
                        role: "Bot",
                        text:
                          "Cuenta BROU: 123-456-789. A nombre de María Pérez.",
                      },
                      {
                        role: "Bot",
                        text: "Listo ✅. Invitación generada. Te mando el QR de acceso y te recuerdo un día antes.",
                      },
                    ]}
                    lineDelay={800}
                    startOnView={false}
                  />
                )}

                <div className="demo-cta-row">
                  <a
                    className="btn btn--secondary"
                    href="#"
                    aria-disabled="true"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Ver demo
                  </a>
                  <a
                    className="link-whatsapp"
                    href={`${wa}?text=${msgD}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Quiero esto en mis eventos.
                  </a>
                </div>
              </article>
            </div>
          </div>


































































































































        </div>
      </div>
    </section>
  );
}
