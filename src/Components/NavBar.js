import React, { useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";

import "./NavStyles.css";
import { Link, animateScroll as scroll } from "react-scroll";

export const NavBar = () => {
  const hamburguerRef = useRef(null);
  const navMenuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        navMenuRef.current &&
        !navMenuRef.current.contains(event.target) &&
        hamburguerRef.current &&
        !hamburguerRef.current.contains(event.target)
      ) {
        hamburguerRef.current.classList.remove("active");
        navMenuRef.current.classList.remove("active");
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [hamburguerRef, navMenuRef]);

  const handleHamburguerClick = () => {
    hamburguerRef.current.classList.toggle("active");
    navMenuRef.current.classList.toggle("active");
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <header>
      <nav className="navbar">
        <ul className="nav-menu" ref={navMenuRef}>
        <NavLink exact to="/" activeClassName="active">
            Inicio
          </NavLink>
          <NavLink exact to="/certifications" activeClassName="active">
            Certificaciones
          </NavLink>

          <Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Proyectos
          </Link>
          <Link
            activeClass="active"
            to="contacto"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            contacto
          </Link>
        </ul>
        <div
          className="hamburguer"
          ref={hamburguerRef}
          onClick={handleHamburguerClick}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
