import React, { Fragment } from "react";
import PropTypes from "prop-types";

const Cancion = ({ letra, busquedaletra }) => {
  const { artista, cancion } = busquedaletra;

  return (
    <Fragment>
      <h2>{`${artista} - ${cancion}`}</h2>
      <p className="letra">{letra}</p>
    </Fragment>
  );
};

Cancion.propTypes = {
  letra: PropTypes.string.isRequired,
  busquedaletra: PropTypes.object.isRequired,
};

export default Cancion;
