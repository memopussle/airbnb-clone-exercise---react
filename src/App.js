import Navbar from "./components/Navbar";
import "./App.css";
import React from "react";
import Hero from "./components/Hero"
import Card from "./components/Card";
import Data from "./Data";


//.map() method: convert JS array to JSX


function App() {
 
  //map over data array => return card components
  const cards = Data.map(item => {
    //when mapping, need to use key (unique property) to identify 

    return (
      <Card
        key = {item.id}
        item = {item}
      />
    );
  })
  //{cards} : display array has been mapped to screen
  return (
    <div>
      <Navbar />
      <Hero />
      <section className="card-parent">{cards}</section>
    </div>
  );
}

export default App;
