import Aos from "aos";
import Header from "./components/Header/Header";
import Inicio from "./components/Inicio/Inicio";
import Conocenos from "./components/Conocenos/Conocenos";
import { Servicios } from "./components/Servicios/Servicios";
import { Equipo } from "./components/Equipo/Equipo";
import { Footer } from "./components/Footer/Footer";

function App() {
  Aos.init();

  return (
    <>
      <Header />
      <Inicio />
      <section className="w-screen h-max my-12 overflow-visible flex flex-col justify-center items-center content-center">
        <div className="bg-">
          <Conocenos />
          <Servicios />
        </div>
      </section>
      <Equipo />
      <Footer />
    </>
  );
}

export default App;
