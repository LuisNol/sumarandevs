/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React from "react";

import About from "./Components/About";
import Blog from "./Components/Blog";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";
import FloatingWhatsApp from "./Components/FloatingWhatsApp";

import "./styles.css";

/**
 * This object represents your information. The project is set so that you
 * only need to update these here, and values are passed a properties to the
 * components that need that information.
 *
 * Update the values below with your information.
 *
 * If you don't have one of the social sites listed, leave it as an empty string.
 */
const siteProps = {
  name: "Nolberto Luis Sumaran Pimentel",
  title: "Full Stack Developer | Cloud & DevOps Engineer",
  email: "nolberto.sumaran@gmail.com",
  whatsapp: "51940078299",
  telegram: "LuisNol",
  gitHub: "LuisNol",
  linkedIn: "nolberto-luis-sumaran-pimentel-65419a221",
  tiktok: "luisnol30",
  youTube: "nolbertoluissumaranpimente2506",
  facebook: "luis.nol.sumaran",
};

const primaryColor = "#4E567E";
const secondaryColor = "#D2F1E4";

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Portfolio />
      <Blog />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
      <FloatingWhatsApp phoneNumber={siteProps.whatsapp} />
    </div>
  );
};

export default App;
