// Dependencies
import { Helmet } from "react-helmet";

// Component
import Home from "../component/home/";
import Load from "../component/Load";

// Styles
import "./index.css";

const Homeless = () => (
  <>
    <Helmet>
      <title>EstefanoC | Desarrollador de Software Full-Stack Senior</title>
      <link rel="canonical" href="https://estefanoc.github.io/EstefanoC" />
      <meta
        property="og:title"
        content="EstefanoC | Senior Full-Stack & AI Developer"
      />
      <meta
        name="twitter:title"
        content="EstefanoC | Senior Full-Stack & AI Developer"
      />
      <meta
        name="description"
        content="Portafolio de EstefanoC, Desarrollador de Software Full-Stack Senior. Experto en JavaScript, React, Node.js y en la integración de Inteligencia Artificial (IA) para crear soluciones de software a medida."
      />
      <meta
        property="og:site_name"
        content="EstefanoC | Portafolio de Desarrollador Full-Stack"
      />
      <meta
        property="og:description"
        content="Desarrollador de Software Full-Stack Senior especializado en aplicaciones web, móviles y soluciones con IA. Conoce mis proyectos y experiencia."
      />
      <meta
        name="twitter:description"
        content="Desarrollador de Software Full-Stack Senior especializado en aplicaciones web, móviles y soluciones con IA. Conoce mis proyectos y experiencia."
      />
      <meta property="og:url" content="https://estefanoc.github.io/EstefanoC" />
      <meta
        name="twitter:url"
        content="https://estefanoc.github.io/EstefanoC"
      />
      <meta
        property="og:image"
        itemProp="image"
        content="https://estefanoc.github.io/logo512.png"
      />
      <meta property="og:type" content="website" />
      <link
        rel="apple-touch-icon"
        sizes="60x60"
        href="https://estefanoc.github.io/logo60.png"
      />
      <meta name="robots" content="index,nofollow" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Helmet>
    <Load />
    <main className="mainHome">
      <Home />
    </main>
  </>
);

export default Homeless;
