import React, { useRef, useState } from "react";
import NavBar from "../Components/NavBar";
import "./inicioStyle.css";
import Projects from "./Projects";

const Inicio = () => {
  return (
    <div>
        <img
        className="imagenPortada"
        src="https://res.cloudinary.com/dsjsbp6qy/image/upload/v1677937361/Diamela_Lares_3_zcpyod.png"
        alt="Portada"
      />
      <NavBar />
      <div className="parrafo">
        <img src="https://res.cloudinary.com/dsjsbp6qy/image/upload/v1677945463/diame-removebg-preview_yte99z.png" />
        <p>
          ¡Hola! Soy un full stack developer, mi enfoque en el desarrollo de
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
      <div class="iconos-container">
        <div class="iconos" id="contacto">
          <a className="icInicio" href="mailto:diame.cjs@gmail.com">
            <img className="icInicio" src="https://cdn-icons-png.flaticon.com/512/2875/2875394.png" />
          </a>
          <a className="icInicio" href="https://www.linkedin.com/in/diamela-lares-">
            <img className="icInicio"  src="https://cdn-icons-png.flaticon.com/512/1383/1383262.png" />
          </a>
          <a className="icInicio" href="https://www.github.com/diamecjs">
            <img className="icInicio"  src="https://cdn-icons-png.flaticon.com/512/2504/2504911.png" />
          </a>
          <a className="icInicio" href="https://wa.me/573148880850">
            <img className="icInicio"  src="https://cdn-icons-png.flaticon.com/512/1383/1383269.png" />
          </a>
        </div>
        <div class="buttonC">
          <a class="buttonCV"
            href="https://drive.google.com/file/d/1nPRjsKDq7ePcKWk6fbiAXzMMb7b4Jv94/view?usp=share_link"
            download="CV Diamela"
          >
            Descarga CV
          </a>
        </div>
      </div>
      <div className="projects" id="projects">
        <h1>Projects</h1>
        <Projects />
      </div>
    </div>
  );
};

export default Inicio;
