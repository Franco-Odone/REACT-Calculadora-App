import { useState } from "react";

import { evaluate, isInteger } from "mathjs";

import "./App.css";
import { Boton } from "./components/Boton/Boton";
import { BotonClear } from "./components/BotonClear/BotonClear";
import { Logo } from "./components/Logo/Logo";
import { Pantalla } from "./components/Pantalla/Pantalla";
import { Footer } from "./components/Footer/Footer";

function App() {
  const [valorInput, setValorInput] = useState("");

  const mostrarEnPantalla = (value) => {
    setValorInput(valorInput + value);
  };

  // Función que muestra el resultado de la operación aritmética al hacer click en el botón igual
  const mostrarResultado = () => {
    let primerCaracter = valorInput.toString().slice(0, 1);
    let ultimoCaracter = valorInput.toString().slice(valorInput.length - 1);

    // La regex "\W" hace match con cualquier caracter no numérico ni alfabético
    // evaluate() devuelve un valor tipo number por lo que para usar el slice había que usar toString()
    if (
      valorInput &&
      primerCaracter !== "+" &&
      primerCaracter !== "-" &&
      // Con isNaN() se hace la evaluación de que el primer caracter NO tiene que ser un número para que retorne true
      isNaN(primerCaracter)
    ) {
      alert(
        "No puede haber operadores de multiplicación (*), división (/) o punto (.) sólo o al inicio de un número."
      );
      setValorInput("");
    } else if (
      valorInput &&
      // Evalúo que no haya sólo números en el input
      /.*\W/.test(valorInput) &&
      // Evalúo que si hay dos caractéres NO numéricos seguidos se retorne false
      !/(\W)\1+/.test(valorInput) &&
      // Evalúo que si el último caracter del input no es un número se retorne false
      !/.*\W/.test(ultimoCaracter)
    ) {
      isInteger(evaluate(valorInput))
        ? setValorInput(evaluate(valorInput))
        : setValorInput(evaluate(valorInput).toFixed(4));
    }
  };

  return (
    <div className="App">
      <Logo />
      <div className="contenedor-calculadora">
        <Pantalla valorInput={valorInput} />
        <div className="fila">
          <Boton mostrarEnPantalla={mostrarEnPantalla}>1</Boton>
          <Boton mostrarEnPantalla={mostrarEnPantalla}>2</Boton>
          <Boton mostrarEnPantalla={mostrarEnPantalla}>3</Boton>
          <Boton mostrarEnPantalla={mostrarEnPantalla}>+</Boton>
        </div>
        <div className="fila">
          <Boton mostrarEnPantalla={mostrarEnPantalla}>4</Boton>
          <Boton mostrarEnPantalla={mostrarEnPantalla}>5</Boton>
          <Boton mostrarEnPantalla={mostrarEnPantalla}>6</Boton>
          <Boton mostrarEnPantalla={mostrarEnPantalla}>-</Boton>
        </div>
        <div className="fila">
          <Boton mostrarEnPantalla={mostrarEnPantalla}>7</Boton>
          <Boton mostrarEnPantalla={mostrarEnPantalla}>8</Boton>
          <Boton mostrarEnPantalla={mostrarEnPantalla}>9</Boton>
          <Boton mostrarEnPantalla={mostrarEnPantalla}>*</Boton>
        </div>
        <div className="fila">
          <Boton mostrarEnPantalla={mostrarResultado}>=</Boton>
          <Boton mostrarEnPantalla={mostrarEnPantalla}>0</Boton>
          <Boton mostrarEnPantalla={mostrarEnPantalla}>.</Boton>
          <Boton mostrarEnPantalla={mostrarEnPantalla}>/</Boton>
        </div>
        <div className="fila">
          <BotonClear
            handleClear={() => {
              setValorInput("");
            }}
          >
            Clear
          </BotonClear>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
