import React, { Fragment } from "react";

const Cancion = ({ letra, busquedaletra }) => {
  const { artista, cancion } = busquedaletra;

  return (
    <Fragment>
      <h2>{`${artista} - ${cancion}`}</h2>
      <p className="letra">{letra}</p>
    </Fragment>
  );
};

export default Cancion;
