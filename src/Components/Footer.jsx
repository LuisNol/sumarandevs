/**
 * Footer component
 *
 * Displays avenues to contact you.
 * Contact information is passed in from the App component that
 * renders the Footer.
 *
 * If a social value has an empty string it will not be displayed.
 */
import React from "react";
import PropTypes from "prop-types";

import envelopeIcon from "../images/socials/envelope.svg";
import facebookIcon from "../images/socials/facebook.svg";
import gitHubIcon from "../images/socials/github.svg";
import linkedInIcon from "../images/socials/linkedin.svg";
import telegramIcon from "../images/socials/telegram.svg";
import tiktokIcon from "../images/socials/tiktok.svg";
import whatsappIcon from "../images/socials/whatsapp.svg";
import youTubeIcon from "../images/socials/youtube.svg";

/**
 * 💡 Learning resources
 *
 *  HTML hyperlinks: https://www.w3schools.com/html/html_links.asp
 *  Opening links in new tabs: https://www.freecodecamp.org/news/how-to-use-html-to-open-link-in-new-tab/
 */

const Footer = (props) => {
  const {
    email,
    facebook,
    gitHub,
    linkedIn,
    name,
    primaryColor,
    telegram,
    tiktok,
    whatsapp,
    youTube,
  } = props;

  return (
    <div
      id="footer"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "2.5rem",
        padding: "5rem 0 3rem",
        backgroundColor: primaryColor,
        width: "100vw",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "2rem",
          flexWrap: "wrap",
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        <h3 style={{ 
          color: "white", 
          textAlign: "center", 
          marginBottom: "2rem",
          fontSize: "1.5rem",
          fontWeight: "300"
        }}>
          ¡Conectemos! 🚀
        </h3>
        
        {email && (
          <a href={`mailto:${email}`} title="Enviar email">
            <img src={envelopeIcon} alt="Email" className="socialIcon" />
          </a>
        )}
        
        {whatsapp && (
          <a href={`https://wa.me/${whatsapp}`} target="_blank" rel="noopener noreferrer" title="WhatsApp">
            <img src={whatsappIcon} alt="WhatsApp" className="socialIcon" />
          </a>
        )}
        
        {telegram && (
          <a href={`https://t.me/${telegram}`} target="_blank" rel="noopener noreferrer" title="Telegram">
            <img src={telegramIcon} alt="Telegram" className="socialIcon" />
          </a>
        )}
        
        {gitHub && (
          <a href={`https://github.com/${gitHub}`} target="_blank" rel="noopener noreferrer" title="GitHub">
            <img src={gitHubIcon} alt="GitHub" className="socialIcon" />
          </a>
        )}
        
        {linkedIn && (
          <a
            href={`https://www.linkedin.com/in/${linkedIn}`}
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
          >
            <img src={linkedInIcon} alt="LinkedIn" className="socialIcon" />
          </a>
        )}
        
        {tiktok && (
          <a href={`https://www.tiktok.com/@${tiktok}`} target="_blank" rel="noopener noreferrer" title="TikTok">
            <img src={tiktokIcon} alt="TikTok" className="socialIcon" />
          </a>
        )}
        
        {youTube && (
          <a
            href={`https://www.youtube.com/@${youTube}`}
            target="_blank"
            rel="noopener noreferrer"
            title="YouTube"
          >
            <img src={youTubeIcon} alt="YouTube" className="socialIcon" />
          </a>
        )}
        
        {facebook && (
          <a
            href={`https://web.facebook.com/${facebook}`}
            target="_blank"
            rel="noopener noreferrer"
            title="Facebook"
          >
            <img src={facebookIcon} alt="Facebook" className="socialIcon" />
          </a>
        )}
      </div>
      <p className="small" style={{ 
        marginTop: "2rem", 
        color: "rgba(255, 255, 255, 0.8)",
        textAlign: "center",
        fontSize: "0.9rem"
      }}>
        Desarrollado con ❤️ por {name} | © 2024
      </p>
    </div>
  );
};

Footer.defaultProps = {
  name: "",
};

Footer.propTypes = {
  email: PropTypes.string,
  facebook: PropTypes.string,
  gitHub: PropTypes.string,
  linkedIn: PropTypes.string,
  name: PropTypes.string.isRequired,
  primaryColor: PropTypes.string,
  telegram: PropTypes.string,
  tiktok: PropTypes.string,
  whatsapp: PropTypes.string,
  youTube: PropTypes.string,
};

export default Footer;
