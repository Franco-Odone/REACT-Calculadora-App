import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer-contenedor">
      <h3 className="footer-titulo">
        Aplicación desarrollada por{" "}
        <a
          className="enlace-github"
          href="https://github.com/Franco-Odone"
          target={"_blank"}
          rel="noreferrer"
        >
          Franco Odone
        </a>
      </h3>
    </footer>
  );
};

export { Footer };
