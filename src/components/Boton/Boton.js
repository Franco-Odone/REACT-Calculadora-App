import "./boton.css";

const Boton = (props) => {
  const esOperador = (valor) => {
    return isNaN(valor) && valor !== "." && valor !== "=";
  };

  const handleClick = () => {
    props.mostrarEnPantalla(props.children);
  };

  return (
    <button
      onClick={handleClick}
      className={`boton-contenedor ${
        esOperador(props.children) ? "operador" : null
      }`}
    >
      {props.children}
    </button>
  );
};

export { Boton };
