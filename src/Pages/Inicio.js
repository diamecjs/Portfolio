import React from "react";
import NavBar from "../Components/NavBar";
import Tecnologias from "../Components/Tecnologias";
import "./inicioStyle.css";
import Projects from "./Projects";

const Inicio = () => {
  return (
    <div className="principal">
      <img
        className="imagenPortada"
        src="https://res.cloudinary.com/dsjsbp6qy/image/upload/v1677954917/Diamela_Lares_4_vbofn6.png"
        alt="Portada"
      />
      <NavBar />
      <div className="parrafo">
        <img src="https://res.cloudinary.com/dsjsbp6qy/image/upload/v1677955461/diame__1_-removebg-preview_iblgkx.png" />
        <p>
          ¡Hola! Soy full stack developer, mi enfoque en el desarrollo de
          software se basa en metodologías ágiles, lo que me permite adaptarme a
          los cambios y trabajar de manera colaborativa en equipo. Me gusta
          trabajar en proyectos emocionantes y desafiantes que me permitan
          aprender y mejorar constantemente mis habilidades. Cuando no estoy
          trabajando en proyectos de software, me gusta explorar nuevas
          tecnologías y aprender sobre las últimas tendencias en el desarrollo
          web. También me encanta compartir mis conocimientos y experiencia con
          la comunidad de desarrolladores a través de blogs, charlas y otros
          medios. Si estás interesado en mi trabajo o quieres saber más sobre mi
          experiencia y habilidades, no dudes en ponerse en contacto conmigo a
          través de:
        </p>
      </div>
      <div className="iconos-container">
        <div className="iconos" id="contacto">
          <a className="icInicio" href="mailto:diame.cjs@gmail.com">
            <img
              className="icInicio"
              src="https://cdn-icons-png.flaticon.com/512/2875/2875394.png"
            />
          </a>
          <a
            className="icInicio"
            href="https://www.linkedin.com/in/diamela-lares-"
          >
            <img
              className="icInicio"
              src="https://cdn-icons-png.flaticon.com/512/1383/1383262.png"
            />
          </a>
          <a className="icInicio" href="https://www.github.com/diamecjs">
            <img
              className="icInicio"
              src="https://cdn-icons-png.flaticon.com/512/2504/2504911.png"
            />
          </a>
          <a className="icInicio" href="https://wa.me/573148880850">
            <img
              className="icInicio"
              src="https://cdn-icons-png.flaticon.com/512/1383/1383269.png"
            />
          </a>
        </div>
        <div>
          <a
            href="https://drive.google.com/file/d/1nPRjsKDq7ePcKWk6fbiAXzMMb7b4Jv94/view?usp=share_link"
            download="CV Diamela"
          >
            {" "}
            <button class="buttonCV">Descarga CV</button>
          </a>
        </div>
      </div>
      <div className="tec-container">
        <Tecnologias />
      </div>
      <div className="projects" id="projects">
        <div class="ball">
        </div>
        <img
          className="proy"
          src="https://res.cloudinary.com/dsjsbp6qy/image/upload/v1678062643/Dshop/huge-removebg-preview_watild.png" width={500}
          />
      </div>
          <Projects />
    </div>
  );
};

export default Inicio;
