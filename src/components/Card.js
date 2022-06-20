import React from "react";

//pass props to img : src={`../path/to/img${img}`}
export default function Card(props) {
  
  // use plain JS to determine which div is displayed on screen
  let badgeText

  if (props.item.openSpots === 0) {
    badgeText = "SOLD OUT"
  } else if (props.item.location === "Online") {
    badgeText = "ONLINE"
  }

  //div openSpots = 0 => display sold out badge
  return (
    <div className="card">
      {badgeText && <div className="card__badge">{badgeText}</div>}
      <img className="card--img" src={`../img/${props.item.coverImg}`} alt="card 1" />
      <div className="card--stats">
        <i className="fa-solid fa-star"></i>
        <span>{props.item.stats.rating} </span>
        <span> - {props.item.stats.reviewCount} • </span>
        <span>{props.item.location}</span>
      </div>
      <p>{props.item.title}</p>
      <p>
        <span className="bold">From ${props.item.price} </span>/ person
      </p>
    </div>
  );
}