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
