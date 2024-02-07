import './App.css';
import Contador from './components/Contador'
import Imagenes from './components/Imagenes'
import Fondo from './components/Fondo'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Contador texto="contador"></Contador>
        <br></br>
        <Imagenes></Imagenes>
        <br></br>
        <Fondo></Fondo>
      </header>
    </div>
  );
}

export default App;
