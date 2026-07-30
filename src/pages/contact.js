// Dependencies
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

// Components
import ContactIndex from "../component/contact/";
import BgNavBottom from "../component/home/bg-navbottom";
import { pageVariant1, pageTransition } from "../component/helpers/animation";

// Styles
import "./index.css";
import { Container } from "react-bootstrap";

const Contact = () => {
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
          content="EstefanoC - proyectos de desarrollo de software, aplicaciones web, móviles o consultoría en IA. Disponible para colaboraciones y nuevos desafíos."
        />
        <meta
          property="og:site_name"
          content="EstefanoC | Portafolio de Desarrollador Full-Stack"
        />
        <meta
          property="og:description"
          content="EstefanoC - proyectos de desarrollo de software, aplicaciones web, móviles o consultoría en IA. Disponible para colaboraciones y nuevos desafíos."
        />
        <meta
          name="twitter:description"
          content="EstefanoC - proyectos de desarrollo de software, aplicaciones web, móviles o consultoría en IA. Disponible para colaboraciones y nuevos desafíos."
        />
        <meta
          property="og:url"
          content="https://estefanoc.github.io/EstefanoC/contact"
        />
        <meta
          name="twitter:url"
          content="https://estefanoc.github.io/EstefanoC/contact"
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
        variants={pageVariant1}
        transition={pageTransition}
        className="grid-area-main"
      >
        <header className="mb-5">
          <Container fluid className="headerContact p-0">
            <div className="headerTitle text-center d-flex justify-content-center w-100">
              <h1 className="px-3 py-1">{t("contact.title")}</h1>
            </div>
            <BgNavBottom WithoutStop={true} />
          </Container>
        </header>
        <main className="contact">
          <ContactIndex />
        </main>
      </motion.div>
    </>
  );
};

export default Contact;
