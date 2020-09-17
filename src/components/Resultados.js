import React from "react";
import Cancion from "./Cancion";

const Resultados = ({ letra, busquedaletra }) => {
  if (letra.length === 0) {
    return null;
  }
  return (
    <div className="container mb-5">
      <div className="row">
        <div className="col-md-6">infor artista</div>
        <div className="col-md-6">
          <Cancion letra={letra} busquedaletra={busquedaletra} />
        </div>
      </div>
    </div>
  );
};

export default Resultados;
