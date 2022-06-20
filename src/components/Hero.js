import React from "react";

export default function Hero() {
    return (
      <section className="hero">
       
          <img
            className="hero__img--1"
            src="https://images.unsplash.com/photo-1601919051950-bb9f3ffb3fee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YWlyYm5ifGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt="hero 1"
          />

        <h1 className="hero__header">Online Experiences</h1>
        <p className="hero__text">
          Join unique interactive activities led by one-of-a-kind hosts-all
          without leaving home
        </p>
      </section>
    );
}