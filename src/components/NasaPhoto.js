import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";

const NasaPhoto = (props) => {

  const explanationStyles = {
    fontWeight: 'bold',
    textShadow: 'navy 1px 1px'
  }

  const titleStyles = {
    textShadow: '1px 1px darkred',
    textAlign: 'center'
  }

  function renderContentType() {
    if (props.photo.media_type === 'image') {
      return (
          <img
              style={{ marginBottom: '20px' }}
              className="img-fluid rounded"
              src={props.photo.url}
              alt={props.photo.title}
          />
      )
    } else if (props.photo.media_type === 'video') {
      return (
          <iframe
              style={{ marginBottom: '20px' }}
              title="nasa video of the day"
              className="img-fluid rounded"
              src={props.photo.url}
              alt={props.photo.title}
          ></iframe>
      )
    } else {
      return
    }
  }
  return (
      <div className="card card-body bg-light">
        <NavBar />
        <h4 style={titleStyles}>{props.photo.title}</h4>
        {renderContentType()}
        <p style={explanationStyles}>{props.photo.explanation}</p>
      </div>
  )
}

export default NasaPhoto;