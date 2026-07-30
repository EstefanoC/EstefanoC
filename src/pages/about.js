// Dependencies
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

// Components
import Abouts from "../component/about/";
import BgNavTop from "../component/home/bg-navtop";
import { pageVariant2, pageTransition } from "../component/helpers/animation";

// Styles
import "./index.css";
import { Container } from "react-bootstrap";

const About = () => {
  const [t, i18n] = useTranslation("global");

  return (
    <>
      <Helmet>
        <title>EstefanoC - Desarrollador Full-Stack Senior</title>
        <link rel="canonical" href="https://estefanoc.github.io/EstefanoC" />
        <meta
          property="og:title"
          content="EstefanoC - Desarrollador Full-Stack Senior"
        />
        <meta
          name="twitter:title"
          content="EstefanoC - Desarrollador Full-Stack Senior"
        />
        <meta
          name="description"
          content="Conoce a EstefanoC, un Desarrollador de Software Full-Stack Senior con experiencia en desarrollo web, móvil y soluciones de IA. Descubre su trayectoria, conocimientos y certificados."
        />
        <meta
          property="og:site_name"
          content="EstefanoC | Portafolio de Desarrollador Full-Stack"
        />
        <meta
          property="og:description"
          content="EstefanoC, un Desarrollador de Software Full-Stack Senior con experiencia en desarrollo web, móvil y soluciones de IA. Descubre su trayectoria, conocimientos y certificados."
        />
        <meta
          name="twitter:description"
          content="EstefanoC, un Desarrollador de Software Full-Stack Senior con experiencia en desarrollo web, móvil y soluciones de IA. Descubre su trayectoria, conocimientos y certificados."
        />
        <meta
          property="og:url"
          content="https://estefanoc.github.io/EstefanoC/about"
        />
        <meta
          name="twitter:url"
          content="https://estefanoc.github.io/EstefanoC/about"
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
      <motion.div
        exit="out"
        animate="in"
        initial="out"
        variants={pageVariant2}
        transition={pageTransition}
        className="grid-area-main"
      >
        <header>
          <Container fluid className="headerAbout p-0">
            <div className="headerTitle text-center d-flex justify-content-center w-100">
              <h1 className="px-3 py-1">{t("about.title")}</h1>
            </div>
            <BgNavTop WithoutStop={true} />
          </Container>
        </header>
        <main className="about">
          <Abouts />
        </main>
      </motion.div>
    </>
  );
};

export default About;
