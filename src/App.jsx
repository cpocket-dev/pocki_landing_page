import Aos from 'aos'
import Header from './components/Header/Header'
import Inicio from './components/Inicio/Inicio';

function App() {
  Aos.init();

  
  return (
    <>
      <Header />
      <Inicio />
    </>
  )
}

export default App
