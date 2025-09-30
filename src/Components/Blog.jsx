/**
 * Blog component
 *
 * Sección informativa que muestra artículos y contenido técnico
 * basado en la experiencia del desarrollador
 */

import React from "react";

/**
 * Lista de artículos y contenido técnico
 */
const blogPosts = [
  {
    title: "AvisOnline: Plataforma de Avisos Clasificados 🚀",
    description: "Desarrollo completo de una plataforma web para avisos clasificados con sistema de categorías, búsqueda avanzada, panel de administración y gestión de usuarios. Tecnologías: Angular (Frontend), Laravel + PHP (Backend), MySQL (Base de Datos).",
    category: "Proyecto Destacado",
    readTime: "15 min",
    date: "2024",
    url: "https://www.avisonline.store/"
  },
  {
    title: "Desarrollo Full Stack con Laravel y Angular",
    description: "Guía completa para crear aplicaciones web modernas utilizando Angular en el frontend y Laravel + PHP en el backend.",
    category: "Desarrollo Web",
    readTime: "12 min",
    date: "2024",
    url: "#"
  },
  {
    title: "Optimización de APIs RESTful con Laravel",
    description: "Mejores prácticas para crear APIs eficientes y escalables utilizando el framework Laravel de PHP.",
    category: "Backend",
    readTime: "10 min",
    date: "2024",
    url: "#"
  }
];

const Blog = () => {
  return (
    <section className="padding" id="blog" style={{ backgroundColor: "#f8f9fa" }}>
      <h2 style={{ textAlign: "center", marginBottom: "3rem" }}>Blog Técnico</h2>
      <div style={{ 
        display: "grid", 
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", 
        gap: "1.5rem", 
        maxWidth: "1000px", 
        margin: "0 auto",
        padding: "0 1rem"
      }}>
        {blogPosts.map((post, index) => (
          <article 
            key={index}
            style={{
              backgroundColor: post.category === "Proyecto Destacado" ? "#f8f9ff" : "white",
              borderRadius: "12px",
              padding: "2rem",
              boxShadow: post.category === "Proyecto Destacado" ? "0 8px 25px rgba(78, 86, 126, 0.15)" : "0 4px 6px rgba(0, 0, 0, 0.1)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              cursor: "pointer",
              border: post.category === "Proyecto Destacado" ? "2px solid #4E567E" : "none"
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "translateY(-5px)";
              e.target.style.boxShadow = "0 8px 25px rgba(0, 0, 0, 0.15)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
            }}
          >
            <div style={{ 
              display: "flex", 
              justifyContent: "space-between", 
              alignItems: "center", 
              marginBottom: "1rem" 
            }}>
              <span style={{
                backgroundColor: post.category === "Proyecto Destacado" ? "#ff6b35" : "#4E567E",
                color: "white",
                padding: "0.25rem 0.75rem",
                borderRadius: "20px",
                fontSize: "0.875rem",
                fontWeight: "500"
              }}>
                {post.category}
              </span>
              <span style={{ 
                color: "#666", 
                fontSize: "0.875rem" 
              }}>
                {post.readTime}
              </span>
            </div>
            
            <h3 style={{ 
              marginBottom: "1rem", 
              color: "#333",
              fontSize: "1.25rem",
              lineHeight: "1.4"
            }}>
              {post.title}
            </h3>
            
            <p style={{ 
              color: "#666", 
              lineHeight: "1.6",
              marginBottom: "1.5rem"
            }}>
              {post.description}
            </p>
            
            <div style={{ 
              display: "flex", 
              justifyContent: "space-between", 
              alignItems: "center" 
            }}>
              <span style={{ 
                color: "#999", 
                fontSize: "0.875rem" 
              }}>
                {post.date}
              </span>
              <a 
                href={post.url}
                style={{
                  color: "#4E567E",
                  textDecoration: "none",
                  fontWeight: "500",
                  fontSize: "0.875rem"
                }}
                onMouseEnter={(e) => {
                  e.target.style.textDecoration = "underline";
                }}
                onMouseLeave={(e) => {
                  e.target.style.textDecoration = "none";
                }}
              >
                Leer más →
              </a>
            </div>
          </article>
        ))}
      </div>
      
      <div style={{ 
        textAlign: "center", 
        marginTop: "3rem" 
      }}>
        <p style={{ 
          color: "#666", 
          fontSize: "1rem",
          marginBottom: "1rem"
        }}>
          ¿Interesado en colaborar o tienes alguna pregunta técnica?
        </p>
        <a 
          href="mailto:nolberto.sumaran@gmail.com"
          style={{
            backgroundColor: "#4E567E",
            color: "white",
            padding: "0.75rem 2rem",
            borderRadius: "25px",
            textDecoration: "none",
            fontWeight: "500",
            display: "inline-block",
            transition: "background-color 0.3s ease"
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#3a4159";
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "#4E567E";
          }}
        >
          Contactar
        </a>
      </div>
    </section>
  );
};

export default Blog;
