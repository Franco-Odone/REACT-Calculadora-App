import "./botonClear.css";

const BotonClear = (props) => {
  return (
    <button className="boton-clear" onClick={props.handleClear}>
      {props.children}
    </button>
  );
};

export { BotonClear };
