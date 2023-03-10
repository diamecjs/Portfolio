import React from "react";
import "./projectsStyle.css";

const Projects = () => {
  return (
    <ul class="cards">
      <li class="card">
        <img
          src="https://res.cloudinary.com/dsjsbp6qy/image/upload/v1677876777/Dise%C3%B1o_sin_t%C3%ADtulo_18_fwu3aw.png"
          class="card__image"
          alt=""
        />
        <div class="card__overlay">
          <div class="card__header">
            <div class="card__header-text">
              <a href="https://pi-videogames-pearl-seven.vercel.app/">
                <h3 class="card__title">Proyecto individual</h3>{" "}
              </a>
              <span class="card__status">Soy Henry</span>
            </div>
          </div>
          <p class="card__description">
            {" "}
            Proyeto individual del bootcamp "Soy Henry". Fue realizado con
            Node.js, Express.js, PostgreSQL, React, Redux y Css
          </p>
        </div>
      </li>
      <li class="card">
        <img
          src="https://res.cloudinary.com/dsjsbp6qy/image/upload/v1677969287/Dise%C3%B1o_sin_t%C3%ADtulo_16_nwfosp.png"
          class="card__image"
          alt=""
        />
        <div class="card__overlay">
          <div class="card__header">
            <div class="card__header-text">
              <a href="https://dondesuena-front.vercel.app/">
                <h3 class="card__title">Proyecto grupal</h3>{" "}
              </a>
              <span class="card__status">Soy Henry</span>
            </div>
          </div>
          <p class="card__description">
            Proyecto final de "Soy Henry", se utilizó: JavaScipt, HTML,
            TailwindCSS, React.js, Redux/Toolkit, Chart.js, Node.js, Express.js,
            Auth Google, JWT, Nodemailer, PostgreSQL, SQL, Sequelize.js
          </p>
        </div>
      </li>
      <li class="card">
        <img
          src="https://res.cloudinary.com/dsjsbp6qy/image/upload/v1677876778/Dise%C3%B1o_sin_t%C3%ADtulo_19_jdrxfe.png"
          class="card__image"
          alt=""
        />
        <div class="card__overlay">
          <div class="card__header">
            <div class="card__header-text">
              <a href="https://cpjferreteria.vercel.app/">
                <h3 class="card__title">E-commerce</h3>
              </a>
              <span class="card__status">Proyecto personal</span>
            </div>
          </div>
          <p class="card__description">
            E-commerce básico con login que permite al adminisrador crear,editar
            y eliminar productos.
          </p>
        </div>
      </li>
    </ul>
  );
};

export default Projects;
