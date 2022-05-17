import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div>
      <h1 className="text-4xl font-bold my-5">Not Found</h1>
      <Link to="/" className="text-xl">
        {" "}
        No encontramos lo que buscabas,
        <span className="underline text-azul">
          ¿ por qué no regresas al inicio?
        </span>
      </Link>
    </div>
  );
}

export default NotFound;