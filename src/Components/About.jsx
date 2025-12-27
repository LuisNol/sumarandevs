/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/motion-background.jpg";

const imageAltText = "purple and blue abstract background";

/**
 * Professional description that expands on your title on the Home component.
 */
const description = "Estudiante de Ingeniería en Informática y Sistemas, con interés en la mejora continua, la eficiencia operativa y la toma de decisiones basada en datos. He desarrollado habilidades y conocimientos en desarrollo de software, arquitectura de sistemas, metodologías ágiles y aseguramiento de la calidad, y el uso de herramientas como entornos de desarrollo (IDEs, Git, frameworks como Angular/Laravel), gestión de proyectos (Jira, Azure), diagramación (UML, Visio), bases de datos (MySQL), servicios cloud (AWS, Azure, Google Cloud) y software de sistemas de información geográfica. Mi experiencia en proyectos académicos y trabajo en equipos multidisciplinarios me ha permitido fortalecer mi comunicación, capacidad analítica y orientación a resultados.";


/**
 * Lista de tecnologías y habilidades técnicas basadas en tu experiencia real
 */
const skillsList = [
  "Laravel & PHP",
  "Angular & TypeScript",
  "React & Vue.js",
  "Node.js & Express",
  "MySQL & SQLite",
  "Docker & DevOps",
  "AWS & Cloud Computing",
  "Git & GitHub",
  "JavaScript & ES6+",
  "HTML5 & CSS3",
  "RESTful APIs",
  "Microservicios",
];

/**
 * Información adicional sobre tu enfoque profesional y pasiones
 */
const detailOrQuote =
  "Me apasiona resolver problemas complejos utilizando las mejores prácticas de desarrollo y arquitecturas escalables. Especializado en crear aplicaciones full-stack robustas, optimización de sistemas y automatización de procesos. Siempre busco aprender nuevas tecnologías y compartir conocimiento a través de contenido educativo en YouTube.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>Sobre Mí</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
