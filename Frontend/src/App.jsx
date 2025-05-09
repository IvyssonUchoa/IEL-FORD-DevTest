import { AvgsalaryBar } from './components/AvgSalaryBar';
import { UniqueRolesBar } from './components/UniqueRolesBar';
// import './App.css'

function App() {

  return (
    <>  
      <section>
        <h3>Acompanhamento de Cargos Existentes</h3>
        <UniqueRolesBar />
      </section>
      
      <section>
        <h3>Valor médio do salário por cargo</h3>
        <AvgsalaryBar />
      </section>
    </>
  )
}

export default App
