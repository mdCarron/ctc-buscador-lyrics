import React from "react";
import Cancion from "./Cancion";
import Informacion from "./Informacion";
import PropTypes from "prop-types";

const Resultados = ({ letra, busquedaletra, info }) => {
  if (letra.length === 0 || Object.keys(info).length === 0) return null;

  return (
    <div className="container mb-5">
      <div className="row">
        <div className="col-md-6">
          <Informacion info={info} />
        </div>
        <div className="col-md-6">
          <Cancion letra={letra} busquedaletra={busquedaletra} />
        </div>
      </div>
    </div>
  );
};

Resultados.propTypes = {
  busquedaletra: PropTypes.object.isRequired,
  letra: PropTypes.string.isRequired,
  info: PropTypes.object.isRequired,
};

export default Resultados;
