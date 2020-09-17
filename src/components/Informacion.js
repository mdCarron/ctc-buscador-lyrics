import React from "react";
import PropTypes from "prop-types";

const Informacion = ({ info }) => {
  const { strArtistThumb, strBiographyES } = info;
  return (
    <div className="card border-light">
      <div className="card-header bg-primary text-light font-weight-bold">
        Artista
      </div>
      <div className="card-body">
        <img
          src={strArtistThumb}
          alt="Portaretrato de los miembros de la banda"
        />
        <h2 className="card-text">Biografía</h2>
        <p className="card-text">{strBiographyES}</p>
        <p className="card-text">
          <a
            href={`https://${info.strFacebook}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook"></i>
          </a>
          <a
            href={`https://${info.strTwitter}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href={`${info.strLastFMChart}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-lastfm"></i>
          </a>
        </p>
      </div>
    </div>
  );
};

Informacion.propTypes = {
  info: PropTypes.object.isRequired,
};

export default Informacion;
