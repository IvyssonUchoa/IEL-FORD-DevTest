import { AvgsalaryBar } from './components/AvgSalaryBar';
import { UniqueRolesPie } from './components/UniqueRolesPie';
import { BiggerSalariesBar } from './components/BiggerSalariesBar';
import { LowerSalariesBar } from './components/LowerSalariesBar';
import { HighestPerRoleBar } from './components/HighestPerRole/HighestPerRoleBar';
import logo from './assets/IEL_log.png';
import './App.css'

function App() {
  return (
      <>
        {/* Cabeçalho do Dashboard */}
        <header className="app-header">
          <img src={logo} alt="Logo" className="app-logo" />
          <h1 className="app-title">Dashboard IEL de Dados Salariais</h1>
        </header>

        {/* Renderização dos gráficos */}
        <div className="grid-container">
          <section>
            <h3>Acompanhamento de Cargos Existentes</h3>
            <div className="small-chart">
              <UniqueRolesPie />
            </div>
          </section>
          
          <section>
            <h3>Valor Médio do Salário por Cargo</h3>
            <AvgsalaryBar />
          </section>

          <section>
            <h3>5 Maiores Salários</h3>
            <BiggerSalariesBar />
          </section>

          <section>
            <h3>5 Menores Salários</h3>
            <LowerSalariesBar />
          </section>
          <div className="full-width">
            <section >
              <h3>Maiores Salários de Funcionários por Função</h3>
              <HighestPerRoleBar />
            </section>
          </div>
        </div>

        {/* Rodapé do Dashboard */}
        <footer className="app-footer">
          <div className="footer-content">
            <p>© 2025 IEL Dashboard. Todos os direitos reservados.</p>
            <p>Produzido por <a href="https://www.linkedin.com/in/ivyssonuchoa/"><strong>Ivysson Fernandes</strong></a>.</p>
          </div>
        </footer>
      </>
  );
}

export default App
