/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Lista de proyectos reales basados en tu experiencia y repositorios de GitHub
 */
const projectList = [
  {
    title: "AvisOnline - Plataforma de Avisos 📢",
    description:
      "Plataforma web completa para avisos clasificados (trabajo, ventas, servicios) desarrollada con Angular (Frontend), Laravel + PHP (Backend) y MySQL (Base de Datos). Sistema completo de gestión de anuncios con categorías, búsqueda avanzada y panel de administración.",
    url: "https://www.avisonline.store/",
  },
  {
    title: "SumaranDevs - Portfolio Personal 🚀",
    description:
      "Sitio web personal desarrollado con React, mostrando mi experiencia como desarrollador full-stack y mis proyectos destacados.",
    url: "https://github.com/LuisNol/sumarandevs",
  },
  {
    title: "Gestión de Alumnos - Sistema Java 👨‍🎓",
    description:
      "Sistema de gestión estudiantil desarrollado en Java con interfaz gráfica para administración académica.",
    url: "https://github.com/LuisNol/Gestion_Alumno",
  },
  {
    title: "Admin Clínica - Sistema Médico 🏥",
    description:
      "Administrador de clínica para gestión de citas médicas desarrollado con HTML, CSS y JavaScript.",
    url: "https://github.com/LuisNol/admin_clinica",
  },
  {
    title: "Estructura de Datos y Algoritmos 📊",
    description:
      "Proyectos académicos implementando estructuras de datos y algoritmos en Java para optimización de procesos.",
    url: "https://github.com/LuisNol/2022_1_IS030303B-ESTRUCTURA-DE-DATOS-Y-ALGORITMOS",
  },
  {
    title: "Algoritmos de Números Primos 🔢",
    description:
      "Implementación de diferentes métodos algorítmicos para la identificación y cálculo de números primos en Java.",
    url: "https://github.com/LuisNol/MetodosAlgorimoNumeroPrimos",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Proyectos Destacados</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
