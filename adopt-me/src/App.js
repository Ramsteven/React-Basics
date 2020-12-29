import React from "react";
import { render } from "react-dom";
import Pet from "./Pets.js"

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, { name: "Luna", animal: "Dog", breed: "Hanesse" }),
    React.createElement(Pet, {
      name: "Pepper",
      animal: "Bird",
      breed: "Cockatail",
    }),
    React.createElement(Pet, { name: "Doink", animal: "Cat", breed: "Mixed" }),
  ]);
};

render(React.createElement(App), document.getElementById("root"));
