import React, { Fragment, useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import axios from "axios";

function App() {
  const [busquedaletra, guardarBusquedaLetra] = useState({});
  const [letra, guardarLetra] = useState("");

  useEffect(() => {
    if (Object.keys(busquedaletra).length === 0) {
      return;
    }
    // Fetch a las APIs
    const consultarApiLetras = async () => {
      const { artista, cancion } = busquedaletra;
      const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;
      const letra = await axios.get(url);
      guardarLetra(letra.data.lyrics);
    };
    consultarApiLetras();
  }, [busquedaletra]);
  return (
    <Fragment>
      <Formulario guardarBusquedaLetra={guardarBusquedaLetra} />
    </Fragment>
  );
}

export default App;
