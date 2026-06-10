import { useInView } from '../hooks/useInView';
import { ArrowRightIcon } from './Icons';
import './Contact.css';

export default function Contact() {
  const [ref, isInView] = useInView();

  return (
    <section className="contact" id="contact">
      <div className="container" ref={ref}>
        <div className={`contact__card ${isInView ? 'contact__card--visible' : ''}`}>
          {/* Background decoration */}
          <div className="contact__bg-pattern" />
          <div className="contact__bg-glow" />

          <div className="contact__content">
            <span className="contact__label">Contacto</span>
            <h2 className="contact__title">
              ¿Listo para construir
              <br />
              sobre infraestructura real?
            </h2>
            <p className="contact__subtitle">
              Si tu operación necesita prospección inteligente, comercio digital o
              infraestructura financiera, hablemos. Estamos construyendo el futuro
              del negocio digital.
            </p>

            <div className="contact__actions">
              <a
                href="mailto:hello@blueskygroup.io"
                className="contact__btn contact__btn--primary"
                id="contact-cta"
              >
                Contactar al equipo
                <ArrowRightIcon size={18} color="#FFFFFF" />
              </a>
              <span className="contact__email">hello@blueskygroup.io</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
