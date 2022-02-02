import React from "react";
import { Link } from "react-router-dom";

const divStyle = {
  textDecoration: "none",
  };

export default function LandingPage () {
    return (
      <div >
          <h1 > La PUTA pagina de Countries </h1>
          <Link  to = "/home">
             <div > <button  > Inicio </button></div>
          </Link>
      </div>
    )
}