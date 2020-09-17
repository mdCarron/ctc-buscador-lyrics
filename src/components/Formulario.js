import React, { useState } from "react";
import Error from "./Error";

const Formulario = ({ guardarBusquedaLetra }) => {
  const [busqueda, guardarBusqueda] = useState({
    artista: "",
    cancion: "",
  });

  const [error, guardarError] = useState(false);

  const { artista, cancion } = busqueda;

  const guardarState = (e) => {
    guardarBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value,
    });
  };

  const buscarInformacion = (e) => {
    e.preventDefault();
    if (artista.trim() === "" || cancion.trim() === "") {
      guardarError(true);
      return;
    }
    guardarError(false);
    guardarBusquedaLetra(busqueda);
  };

  return (
    <div className="bg-info">
      {error ? <Error mensaje="Todos los campos son obligatorios" /> : null}
      <div className="container">
        <div className="row">
          <form
            className="col card text-white bg-transparent mb-5 pt-5 pb-2"
            onSubmit={buscarInformacion}
          >
            <fieldset>
              <legend className="text-center">
                Buscador de Letras de Canciones
              </legend>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Artista</label>
                    <input
                      type="text"
                      name="artista"
                      value={artista}
                      placeholder="Nombre del Artista"
                      className="form-control"
                      onChange={guardarState}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Canción</label>
                    <input
                      type="text"
                      name="cancion"
                      value={cancion}
                      placeholder="Nombre de la canción"
                      className="form-control"
                      onChange={guardarState}
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary float-right mt-2"
                  >
                    Buscar
                  </button>
                </div>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Formulario;
