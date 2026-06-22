import { CheckCircle2, Rocket } from 'lucide-react';
import talismaLogo from './assets/talisma-logo.svg';
import { hubModules } from './modules/moduleData';
import './styles.css';

const statusClass = {
  Ativo: 'status status-active',
  'Em implantação': 'status status-progress',
  Planejado: 'status status-planned',
};

function App() {
  return (
    <main className="app-shell">
      <section className="hero">
        <div>
          <div className="brand-row">
            <img src={talismaLogo} alt="Talismã Seguros" className="brand-logo" />
            <p className="eyebrow"><Rocket size={18} /> Solent Hub</p>
          </div>
          <h1>Módulos prontos para operar o hub.</h1>
          <p className="hero-copy">
            Uma base React + Vite configurada para evoluir os módulos acadêmicos,
            eventos, comunicados e indicadores com segurança.
          </p>
        </div>
        <div className="hero-card">
          <CheckCircle2 size={36} />
          <strong>{hubModules.filter((module) => module.status === 'Ativo').length} módulos ativos</strong>
          <span>Estrutura inicial compilando e pronta para desenvolvimento.</span>
        </div>
      </section>

      <section className="module-grid" aria-label="Módulos do Solent Hub">
        {hubModules.map((module) => {
          const Icon = module.icon;
          return (
            <article className="module-card" key={module.title}>
              <div className="module-icon"><Icon size={28} /></div>
              <div>
                <span className={statusClass[module.status]}>{module.status}</span>
                <h2>{module.title}</h2>
                <p>{module.description}</p>
              </div>
              <strong>{module.metric}</strong>
            </article>
          );
        })}
      </section>
    </main>
  );
}

export default App;
