import { useInView } from '../hooks/useInView';
import './Vision.css';

const values = [
  {
    number: '01',
    title: 'Integración nativa',
    description: 'Cada unidad se diseña para operar en conjunto. Los datos fluyen, las acciones se conectan.',
  },
  {
    number: '02',
    title: 'Escalabilidad real',
    description: 'Arquitectura modular que crece con el negocio sin fricciones ni migraciones forzadas.',
  },
  {
    number: '03',
    title: 'Visión de largo plazo',
    description: 'Construimos infraestructura, no parches. Cada decisión técnica piensa en los próximos 10 años.',
  },
];

export default function Vision() {
  const [ref, isInView] = useInView();

  return (
    <section className="vision" id="vision">
      <div className="container" ref={ref}>
        <div className="vision__layout">
          <div className={`vision__left ${isInView ? 'vision__left--visible' : ''}`}>
            <span className="section-label">Visión</span>
            <h2 className="section-title">
              Tecnología que <br />trasciende productos
            </h2>
            <p className="section-subtitle">
              No vendemos software. Construimos la capa digital sobre la que se
              opera, se comercia y se capitaliza. Blue Sky Group es la infraestructura
              invisible que hace posible el negocio visible.
            </p>
          </div>

          <div className={`vision__right ${isInView ? 'vision__right--visible' : ''}`}>
            {values.map((value, index) => (
              <div
                key={value.number}
                className="vision__value"
                style={{ transitionDelay: `${0.3 + index * 0.12}s` }}
              >
                <span className="vision__value-number">{value.number}</span>
                <div className="vision__value-content">
                  <h3 className="vision__value-title">{value.title}</h3>
                  <p className="vision__value-desc">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
