import './App.css';
import Home from './components/Home';
import { Provider } from 'react-redux';
import store from './_store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Gatos são fotos &hearts;</h1>
        <Home />
      </div>
    </Provider>
  );
}

export default App;
