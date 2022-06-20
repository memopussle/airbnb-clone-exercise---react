import React from "react";

export default function Card() {
    return (
      <div className="card">
        <img
          className="card--img"
          src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          alt="card 1"
        />
        <div className="card--stats">
          <i class="fa-solid fa-star"></i>
          <span>5.0</span>
          <span>(6) • </span>
          <span>USA</span>
        </div>
        <p>Life lesson with Katie zaferes</p>
        <p>
          <span className="bold">From $126 / person</span>
        </p>
      </div>
    );
}