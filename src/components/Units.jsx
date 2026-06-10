import { UNITS } from '../constants/theme';
import { useInView } from '../hooks/useInView';
import { UnitIcon, CheckIcon, ArrowRightIcon } from './Icons';
import './Units.css';

function UnitCard({ unit, index }) {
  const [ref, isInView] = useInView();

  return (
    <div
      ref={ref}
      className={`unit-card ${isInView ? 'unit-card--visible' : ''}`}
      style={{ transitionDelay: `${index * 0.15}s` }}
      id={`unit-${unit.id}`}
    >
      <div className="unit-card__header">
        <div className="unit-card__icon-wrap">
          <UnitIcon type={unit.icon} size={28} />
        </div>
        <div>
          <h3 className="unit-card__name">{unit.name}</h3>
          <p className="unit-card__tagline">{unit.tagline}</p>
        </div>
      </div>

      <p className="unit-card__description">{unit.description}</p>

      <ul className="unit-card__features">
        {unit.features.map((feature) => (
          <li key={feature} className="unit-card__feature">
            <CheckIcon size={16} />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <div className="unit-card__footer">
        <a href="#contact" className="unit-card__link">
          Conocer más
          <ArrowRightIcon size={16} />
        </a>
      </div>

      <div className="unit-card__glow" />
    </div>
  );
}

export default function Units() {
  const [ref, isInView] = useInView();

  return (
    <section className="units" id="units">
      <div className="container" ref={ref}>
        <div className={`units__header ${isInView ? 'units__header--visible' : ''}`}>
          <span className="section-label">Unidades</span>
          <h2 className="section-title">Tres unidades, una plataforma</h2>
          <p className="section-subtitle">
            Cada unidad resuelve un eje crítico del negocio digital.
            Juntas, forman un ecosistema sin fricción.
          </p>
        </div>

        <div className="units__grid">
          {UNITS.map((unit, index) => (
            <UnitCard key={unit.id} unit={unit} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
