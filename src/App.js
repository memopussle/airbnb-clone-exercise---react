import Navbar from "./components/Navbar";
import "./App.css";
import React from "react";
import Hero from "./components/Hero"
import Card from "./components/Card";

//.map() method: convert JS array to JSX

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Card img="portrait.jpg"
        rating="5.0"
        reviewCount={6}
        country="USA"
        title="Life lessons with Katie Zaferes"
        price={136}
      />
    </div>
  );
}

export default App;
