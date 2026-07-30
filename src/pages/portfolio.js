// Dependencies
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

// Components
import PortfolioIndex from "../component/portfolio/";
import BgNavCenter from "../component/home/bg-navcenter";
import { pageVariant3, pageTransition } from "../component/helpers/animation";

// Styles
import "./index.css";
import { Container } from "react-bootstrap";

const Portfolio = () => {
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
          content="Explora el portafolio de EstefanoC, Ingeniero de Software Full-Stack. Proyectos destacados en desarrollo web, móvil, e-commerce e integración con IA."
        />
        <meta
          property="og:site_name"
          content="EstefanoC | Portafolio de Desarrollador Full-Stack"
        />
        <meta
          property="og:description"
          content="Explora el portafolio de EstefanoC, Ingeniero de Software Full-Stack. Proyectos destacados en desarrollo web, móvil, e-commerce e integración con IA."
        />
        <meta
          name="twitter:description"
          content="Explora el portafolio de EstefanoC, Ingeniero de Software Full-Stack. Proyectos destacados en desarrollo web, móvil, e-commerce e integración con IA."
        />
        <meta
          property="og:url"
          content="https://estefanoc.github.io/EstefanoC/portfolio"
        />
        <meta
          name="twitter:url"
          content="https://estefanoc.github.io/EstefanoC/portfolio"
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
        variants={pageVariant3}
        transition={pageTransition}
        className="grid-area-main"
      >
        <header className="mb-5">
          <Container fluid className="headerPortfolio p-0">
            <div className="headerTitle text-center d-flex justify-content-center w-100">
              <h1 className="px-3 py-1">{t("portfolio.title")}</h1>
            </div>
            <BgNavCenter WithoutStop={true} />
          </Container>
        </header>
        <main className="portfolio">
          <PortfolioIndex />
        </main>
      </motion.div>
    </>
  );
};

export default Portfolio;
