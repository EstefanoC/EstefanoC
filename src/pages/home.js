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
      <title>Estefano Chacon | EstefanoC</title>
      <link rel="canonical" href="https://estefanoc.github.io/EstefanoC/" />
      <meta property="og:title" content="EstefanoC FrontEnd Developer" />
      <meta name="twitter:title" content="EstefanoC FrontEnd Developer" />
      <meta
        name="description"
        content="FrontEnd Web developer EstefanoC Estefano Chacon"
      />
      <meta
        property="og:site_name"
        content="Web Development FrontEnd EstefanoC"
      />
      <meta
        property="og:description"
        content="Web Development FrontEnd and App Development | Desarrollador Web Front end | EstefanoC Estefano Chacon"
      />
      <meta
        name="twitter:description"
        content="Web Development FrontEnd and App Development | Desarrollador Web Front end | EstefanoC Estefano Chacon"
      />
      <meta
        property="og:url"
        content="https://estefanoc.github.io/EstefanoC/"
      />
      <meta
        name="twitter:url"
        content="https://estefanoc.github.io/EstefanoC/"
      />
      <meta
        property="og:image"
        itemprop="image"
        content="https://estefanoc.github.io/EstefanoC/logo512.png"
      />
      <meta property="og:type" content="website" />
      <link
        rel="apple-touch-icon"
        sizes="60x60"
        href="https://estefanoc.github.io/EstefanoC/logo60.png"
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
