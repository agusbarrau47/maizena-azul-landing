import './Commerce.css';

export default function Commerce() {
  return (
    <section className="commerce" id="blue-sky-commerce">
      <div className="container">
        <div className="commerce__inner">
          <span className="section-label">06 — PRÓXIMA IMPLEMENTACIÓN</span>
          <div className="section-divider" />

          <div className="commerce__header">
            <h2 className="section-heading">
              BLUE SKY COMMERCE.
            </h2>
          </div>

          <div className="commerce__content-center">
            <div className="commerce__card commerce__card--central">
              <div className="commerce__badge">En desarrollo</div>
              <h3 className="commerce__title">La próxima capa comercial del ecosistema Blue Sky Group.</h3>
              <p className="commerce__desc">
                Blue Sky Commerce será una futura infraestructura de comercio diseñada para conectar personas,
                empresas, productos, servicios y oportunidades comerciales dentro de un entorno digital más amplio.
              </p>

              <div className="commerce__map">
                <div className="commerce__map-item">B2B</div>
                <div className="commerce__map-item">B2C</div>
                <div className="commerce__map-item">C2B</div>
                <div className="commerce__map-item">C2C</div>
                <div className="commerce__map-item commerce__map-item--light">Empresas</div>
                <div className="commerce__map-item commerce__map-item--light">Personas</div>
                <div className="commerce__map-item commerce__map-item--light">Productos</div>
                <div className="commerce__map-item commerce__map-item--light">Servicios</div>
                <div className="commerce__map-item commerce__map-item--light">Oportunidades</div>
              </div>

              <p className="commerce__desc" style={{ marginTop: '24px' }}>
                La visión es construir una plataforma capaz de facilitar relaciones comerciales entre distintos modelos
                de intercambio: B2B, B2C, C2B, C2C y otros esquemas donde la oferta y la demanda puedan encontrarse de forma más ordenada.
              </p>
              <p className="commerce__desc">
                Mientras Blue Sky Prospect se enfoca en encontrar, organizar y activar oportunidades comerciales, Blue Sky
                Commerce buscará convertirse en la próxima capa del ecosistema: un espacio para conectar mercados,
                operaciones y relaciones comerciales.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
