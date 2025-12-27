import React from "react";

const FloatingWhatsApp = ({ phoneNumber = "51940078299", message = "Hola, tengo una consulta" }) => {
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a href={whatsappURL} target="_blank" rel="noopener noreferrer" className="floating-whatsapp" title="Contáctame por WhatsApp">
      <svg viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 2C8.3 2 2 8.3 2 16c0 2.5.6 4.9 1.8 7l-1.9 7.1 7.3-1.9c2 1.1 4.3 1.8 6.8 1.8 7.7 0 14-6.3 14-14S23.7 2 16 2zm0 26c-2.2 0-4.3-.6-6.1-1.6l-.4-.2-4.2 1.1 1.1-4.1-.3-.4C4 21.3 3.5 18.7 3.5 16 3.5 9.1 9.1 3.5 16 3.5S28.5 9.1 28.5 16 22.9 28 16 28z"/>
        <path d="M11.3 9.5c-.3-.7-1.1-.9-1.7-.8-.6.1-1.3.6-1.6 1.4-.4 1.2-.1 3 1.4 5.1 1.8 2.5 4.8 5.1 8.1 6.2.7.2 1.4.3 2 .2.8-.1 1.6-.5 1.9-1.2.2-.4.3-.9.3-1.4 0-.5-.2-.9-.4-1.1l-1.5-1c-.3-.2-.7-.2-1 0l-.7.5c-.2.1-.4.1-.6 0-.6-.3-1.5-.8-2.3-1.7-.7-.8-1.1-1.6-1.4-2.2-.1-.3-.2-.5-.3-.7-.2-.3-.4-.5-.7-.6l-.8-.6c-.3-.2-.3-.6 0-.9l.6-.8c.2-.2.3-.5.1-.8-.1-.3-.7-1.6-1-2.1z"/>
      </svg>
    </a>
  );
};

export default FloatingWhatsApp;
