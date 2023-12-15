import { useState, useEffect } from "react";
import "../components/Header/Header.css";
import { useTranslationHook } from "../hooks/useI18nTranslation";


function useLocalStorage(key, initialValue) {
  // Obtenemos el valor del almacenamiento local y luego
  // analizamos el json almacenado o, si no hay ninguno, devolvemos el valor inicial
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      // Si el item existe, lo convertimos a número, si no, usamos el valor inicial
      return item ? Number(item) : initialValue;
    } catch (error) {
      console.log(error);
      // En caso de error, también devolvemos el valor inicial
      return initialValue;
    }
  });

  // Devolvemos una versión envuelta de la función setter de useState que ...
  // ... persiste el nuevo valor en el almacenamiento local.
  const setValue = (value) => {
    try {
      // Guardamos el estado
      setStoredValue(value);
      // Guardamos el valor en el almacenamiento local
      window.localStorage.setItem(key, value);
    } catch (error) {
      console.log(error);
      // En caso de error, simplemente lo registramos en la consola
    }
  };

  // Devolvemos el valor almacenado y la función para establecer el valor
  return [storedValue, setValue];
}

export function Counter() {
  const { t } = useTranslationHook(); 

  // Usamos el hook useLocalStorage para almacenar y recuperar el número de visitas
  const [visits, setVisits] = useLocalStorage("visitCounter", 26540);

  // Cuando el componente se monta, incrementamos el número de visitas
  useEffect(() => {
    setVisits(visits + 1);
  }, []);

  // Renderizamos el número de visitas
  return (
    <div className="visit-counter text-center overflow-hidden flex flex-col justify-center items-center mt-2">
      <p className="interactions z-[2] bg-white h-[0.8rem] overflow-visible text-center justify-center flex items-center">{t("header.contador")}</p>
      <p className="overflow-hidden counter0 text-3xl z-[1] flex content">{visits}</p>
    </div>
  );
}
