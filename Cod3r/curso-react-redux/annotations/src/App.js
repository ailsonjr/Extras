import './App.css';
import Card from './components/layout/Card';
import Desafio1 from './components/basicos/Desafio1';
import Fragmento from './components/basicos/Fragmento';
import ComParametro from './components/basicos/ComParametro';
import Primeiro from './components/basicos/Primeiro';

export default function App() {
  return (
    <div className='App'>
      <h1>Fundamentos React</h1>

      <div className='Cards'>
        <Card titulo='#04 - Desafio Aleatório' color='#FA6900'>
          <Desafio1 max={60} min={1} />
        </Card>

        <Card titulo='#03 - Fragmento' color='#E94C6F'>
          <Fragmento />
        </Card>

        <Card titulo='#02 - Com Parâmetro' color='#E8B71A'>
          <ComParametro
            titulo='Situação do aluno'
            aluno='Pedro'
            nota={8}
          />
        </Card>

        <Card titulo='#01 - Primeiro Componente' color='#588C73'>
          <Primeiro />
        </Card>
      </div>
    </div>
  );
}
