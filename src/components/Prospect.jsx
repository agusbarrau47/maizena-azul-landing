import { PROSPECT_BENEFITS } from '../constants/theme';
import { BenefitIcon, ArrowRightIcon } from './Icons';
import './Prospect.css';

function BenefitCard({ benefit }) {
  return (
    <div className="benefit-card">
      <div className="benefit-card__icon">
        <BenefitIcon type={benefit.icon} size={24} />
      </div>
      <h3 className="benefit-card__title">{benefit.title}</h3>
      <p className="benefit-card__desc">{benefit.description}</p>
    </div>
  );
}

export default function Prospect() {
  return (
    <section className="prospect" id="blue-sky-prospect">
      <div className="container">
        <div className="prospect__header">
          <span className="section-label">02 — SERVICIOS</span>
          <div className="section-divider" />

          <span className="prospect__badge">Servicio activo</span>

          <h2 className="section-heading">
            BLUE SKY<br/>PROSPECT.
          </h2>

          <div className="prospect__intro">
            <p className="prospect__tagline">
              Agentic-as-a-Service para prospección B2B.
            </p>
            <p className="section-body">
              Blue Sky Prospect es el primer servicio activo de Blue Sky Group: una solución
              Agentic-as-a-Service diseñada para ayudar a empresas B2B a identificar prospectos,
              encontrar contactos relevantes, organizar oportunidades y activar conversaciones comerciales con mayor precisión.
            </p>
            <p className="section-body" style={{ marginTop: '16px' }}>
              Combina lógica de CRM comercial, criterios de segmentación y agentes diseñados para asistir el proceso
              de prospección, seguimiento y priorización de oportunidades de forma continua.
            </p>
            <p className="section-body" style={{ marginTop: '16px' }}>
              El objetivo no es reemplazar al equipo comercial, sino darle una infraestructura más clara para trabajar
              mejor: mejores datos, más foco, seguimiento ordenado y agentes disponibles para asistir tareas comerciales clave.
            </p>
          </div>
        </div>

        <div className="prospect__grid">
          {PROSPECT_BENEFITS.map((benefit) => (
            <BenefitCard key={benefit.id} benefit={benefit} />
          ))}
        </div>

        <div className="prospect__cta-wrap">
          <a href="#contacto" className="prospect__cta" id="prospect-cta">
            Explorar Blue Sky Prospect
            <ArrowRightIcon size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
