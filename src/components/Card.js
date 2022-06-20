import React from "react";

//pass props to img : src={`../path/to/img${img}`}
export default function Card({img, rating, reviewCount, country, title, price}) {
    return (
      <div className="card">
        <img className="card--img" src={`../img/${img}`} alt="card 1" />
        <div className="card--stats">
          <i class="fa-solid fa-star"></i>
          <span>{rating}</span>
          <span>{reviewCount} • </span>
          <span>{country}</span>
        </div>
        <p>{title}</p>
        <p>
          <span className="bold">From ${price} </span>/ person
        </p>
      </div>
    );
}