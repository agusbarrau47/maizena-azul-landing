import './AboutGroup.css';

export default function AboutGroup() {
  return (
    <section className="about" id="que-es">
      <div className="container">
        <div className="about__inner">
          <span className="section-label">01 — QUÉ ES BLUE SKY GROUP</span>
          <div className="section-divider" />

          <h2 className="section-heading">
            BLUE SKY GROUP<br/>
            ES UN HOLDING<br/>
            DE SOLUCIONES<br/>
            COMERCIALES.
          </h2>

          <div className="about__grid">
            <div className="about__content">
              <p className="section-body">
                Blue Sky Group desarrolla empresas y servicios orientados a resolver
                problemas comerciales concretos para organizaciones que buscan crecer,
                ordenar sus procesos y conectar mejor con sus mercados.
              </p>
              <p className="section-body" style={{ marginTop: '16px' }}>
                El ecosistema comienza con <strong>Blue Sky Prospect</strong>, nuestro primer
                servicio activo, y evolucionará con <strong>Blue Sky Commerce</strong> y nuevas
                soluciones comerciales en desarrollo.
              </p>
            </div>

            <div className="about__markers">
              <div className="about__marker">
                <div className="about__marker-dot about__marker-dot--active" />
                <div className="about__marker-content">
                  <span className="about__marker-label">Servicio activo</span>
                  <span className="about__marker-name">Blue Sky Prospect</span>
                </div>
              </div>
              <div className="about__marker-line" />
              <div className="about__marker">
                <div className="about__marker-dot about__marker-dot--future" />
                <div className="about__marker-content">
                  <span className="about__marker-label">Próxima implementación</span>
                  <span className="about__marker-name">Blue Sky Commerce</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
