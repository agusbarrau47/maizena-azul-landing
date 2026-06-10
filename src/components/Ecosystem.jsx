import { useInView } from '../hooks/useInView';
import './Ecosystem.css';

const pillars = [
  {
    label: 'Prospección',
    description: 'Identificar oportunidades de negocio con inteligencia de datos.',
    icon: '🔍',
  },
  {
    label: 'Comercio',
    description: 'Conectar oferta y demanda en canales digitales.',
    icon: '🛒',
  },
  {
    label: 'Finanzas',
    description: 'Mover capital e infraestructura financiera digital.',
    icon: '📊',
  },
];

export default function Ecosystem() {
  const [ref, isInView] = useInView();

  return (
    <section className="ecosystem" id="ecosystem">
      <div className="container" ref={ref}>
        <div className={`ecosystem__header ${isInView ? 'ecosystem__header--visible' : ''}`}>
          <span className="section-label">Ecosistema</span>
          <h2 className="section-title">
            Un ecosistema, <br />tres dimensiones
          </h2>
          <p className="section-subtitle">
            Blue Sky Group no es una app aislada. Es la convergencia de tres capas tecnológicas
            que operan de forma independiente pero se potencian en conjunto.
          </p>
        </div>

        <div className={`ecosystem__visual ${isInView ? 'ecosystem__visual--visible' : ''}`}>
          {/* Central hub */}
          <div className="ecosystem__hub">
            <div className="ecosystem__hub-ring ecosystem__hub-ring--outer" />
            <div className="ecosystem__hub-ring ecosystem__hub-ring--middle" />
            <div className="ecosystem__hub-core">
              <span className="ecosystem__hub-label">BSG</span>
            </div>
          </div>

          {/* Pillar cards */}
          <div className="ecosystem__pillars">
            {pillars.map((pillar, index) => (
              <div
                key={pillar.label}
                className="ecosystem__pillar"
                style={{ animationDelay: `${0.2 + index * 0.15}s` }}
              >
                <div className="ecosystem__pillar-icon">{pillar.icon}</div>
                <h3 className="ecosystem__pillar-title">{pillar.label}</h3>
                <p className="ecosystem__pillar-desc">{pillar.description}</p>
                <div className="ecosystem__pillar-connector" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
