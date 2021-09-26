import React from "react";
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";
import { pageVariant1, pageTransition } from "../component/helpers/animation";
import BgNavBottom from "../component/home/bg-navbottom";
import ContactIndex from "../component/contact/";
import { useTranslation } from "react-i18next";
import "./index.css";

const Contact = () => {
  const [t, i18n] = useTranslation("global");

  return (
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
  );
};

export default Contact;
