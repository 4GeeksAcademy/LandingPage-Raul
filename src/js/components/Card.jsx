 import React from "react";

const Card = ({ title, text, imgUrl, buttonUrl, buttonLabel }) => {
  return (
    <div className="col-12 col-sm-6 col-md-3">
      <div className="card" style={{ width: "18rem" }}>
        <img src={imgUrl} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{text}</p>
          <a href={buttonUrl} className="btn btn-primary">
            {buttonLabel}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
