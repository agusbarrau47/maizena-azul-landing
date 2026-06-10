import { ArrowRightIcon } from './Icons';
import './CtaFinal.css';

export default function CtaFinal() {
  return (
    <section className="cta-final" id="contacto">
      <div className="container">
        <div className="cta-final__inner">
          <div className="cta-final__card">
            <span className="section-label section-label--center">07 — CONTACTO</span>
            <div className="section-divider section-divider--center" />

            <h2 className="cta-final__title">
              COORDINEMOS UNA<br/>REUNIÓN PARA CONVERSAR<br/>SOBRE TU PROCESO COMERCIAL.
            </h2>
            <p className="cta-final__text">
              Si tu empresa necesita ordenar la prospección, mejorar la búsqueda de oportunidades
              o entender cómo Blue Sky Prospect puede acompañar su proceso comercial, coordinemos una conversación.
            </p>
            <div className="cta-final__actions">
              <a href="https://api.whatsapp.com/send/?phone=5491171008349&text&type=phone_number&app_absent=0" className="cta-final__btn cta-final__btn--primary" target="_blank" rel="noopener noreferrer">
                Coordinar reunión
                <ArrowRightIcon size={18} />
              </a>
              <a href="https://www.blueskyprospect.com.ar/login" className="cta-final__btn cta-final__btn--secondary" target="_blank" rel="noopener noreferrer">
                Conocer Blue Sky Prospect
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
