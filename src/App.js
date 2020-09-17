import React, { Fragment, useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import axios from "axios";
import Resultados from "./components/Resultados";

function App() {
  const [busquedaletra, guardarBusquedaLetra] = useState({});
  const [letra, guardarLetra] = useState("");
  const [info, guardarInfo] = useState({});

  useEffect(() => {
    if (Object.keys(busquedaletra).length === 0) {
      return;
    }
    const consultarApis = async () => {
      const { artista, cancion } = busquedaletra;

      const urlLetra = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;
      const urlInfo = `https://theaudiodb.com/api/v1/json/1/search.php?s=${artista}`;

      const [info, letra] = await Promise.all([
        axios.get(urlInfo),
        axios.get(urlLetra),
      ]);
      guardarLetra(letra.data.lyrics);
      guardarInfo(info.data.artists[0]);
    };
    consultarApis();
  }, [busquedaletra]);

  return (
    <Fragment>
      <Formulario guardarBusquedaLetra={guardarBusquedaLetra} />
      <Resultados busquedaletra={busquedaletra} letra={letra} info={info} />
    </Fragment>
  );
}

export default App;
