import React from "react";
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";
import { pageVariant3, pageTransition } from "../component/helpers/animation";
import BgNavCenter from "../component/home/bg-navcenter";
import PortfolioIndex from "../component/portfolio/";
import { useTranslation } from "react-i18next";
import "./index.css";

const Portfolio = () => {
  const [t, i18n] = useTranslation("global");

  return (
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
  );
};

export default Portfolio;
