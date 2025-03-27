import React from "react"
import Button from "../components/button";

function DeckView() {
    const handleClick = () => {
        alert('¡Botón clickeado!');
      };

  return (
    <div>
            <h1>dasdadasdasdss</h1>
            <Button text="Botón Azul" onClick={handleClick} color="primary" size="large" />
        {/* El contenido de tu vista Boosters */}
      </div>

  );
};

export default DeckView
