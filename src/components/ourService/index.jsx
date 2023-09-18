import React from "react";
import './ourService.css'; // Import the CSS file

export function OurService(props) {
  const { imgUrl, title, description, isReversed } = props;

  return (
    <div className={`service-container ${isReversed && "reversed"}`}>
      <div className="description-container">
        <h2 className="service-title">{title}</h2>
        <p className="service-description">{description}</p>
      </div>
      {imgUrl && <img src={imgUrl} alt={title} className="service-img" />}
    </div>
  );
}
