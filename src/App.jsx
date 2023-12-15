import Aos from 'aos'
import Header from './components/Header/Header'
import Inicio from './components/Inicio/Inicio';
import Conocenos from './components/Conocenos/Conocenos';

function App() {
  Aos.init();

  
  return (
    <>
      <Header />
      <Inicio />
      <section className="content-cont overflow-visible">
        <Conocenos />
      </section>
    </>
  )
}

export default App
