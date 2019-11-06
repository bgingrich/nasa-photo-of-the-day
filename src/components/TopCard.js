import React from "react";

const TopCard = ({title, image}) => {
  return (
    <div className ="title-card">
      <h2>{title}</h2>
      <img src = {image} alt="apod"/>
    </div>
  )
}

export default TopCard