import Aos from 'aos'
import Header from './components/Header/Header'
import Inicio from './components/Inicio/Inicio';
import Conocenos from './components/Conocenos/Conocenos';
import { Servicios } from './components/Servicios/Servicios';
import { Equipo } from './components/Equipo/Equipo';
import { Footer } from './components/Footer/Footer';

function App() {
  Aos.init();

  
  return (
    <>
      <Header />
      <Inicio />
      <section className="content-cont overflow-visible">
        <Conocenos />
        <Servicios />
        <Equipo />
        <Footer />
      </section>
    </>
  )
}

export default App
