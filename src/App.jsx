import Aos from 'aos'
import Header from './components/Header/Header'
import Inicio from './components/Inicio/Inicio';
import Conocenos from './components/Conocenos/Conocenos';
import { Servicios } from './components/Servicios/Servicios';

function App() {
  Aos.init();

  
  return (
    <>
      <Header />
      <Inicio />
      <section className="content-cont overflow-visible">
        <Conocenos />
        <Servicios />
      </section>
    </>
  )
}

export default App
