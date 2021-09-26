import React, { useState } from "react";
import BgNavTop from "./bg-navtop";
import { useHistory } from "react-router-dom";
import { motion, useCycle } from "framer-motion";
import { HomeVariantTop } from "../helpers/animation";
import { Container, Button } from "react-bootstrap/";
import { useTranslation } from "react-i18next";

const NavTop = () => {
  const [stop, setStop] = useState(null);
  const [start, setStart] = useState(null);
  const [animateFinish, cycleAnimation] = useCycle("static", "finish");
  const history = useHistory();
  const [t, i18n] = useTranslation("global");

  const handleOnClick = () => {
    cycleAnimation();

    setTimeout(() => {
      history.push("/AboutMe");
    }, 500);
  };

  const MouseMove = () => {
    if (stop === false) {
      setStop(true);
      setStart(false);
    } else if (stop === true) {
      setStop(false);
      setStart(true);
    } else {
      setStop(true);
      setStart(false);
    }
  };

  return (
    <>
      <motion.li
        animate={animateFinish}
        variants={HomeVariantTop}
        className="navTop"
        onMouseEnter={MouseMove}
        onMouseLeave={MouseMove}
      >
        <BgNavTop stop={stop} start={start} />

        <Container
          fluid
          className="navTop-link d-flex align-items-center justify-content-center"
        >
          <Button
            variant="primary"
            className="text-uppercase"
            onClick={handleOnClick}
          >
            {t("home.button-about")}
          </Button>
        </Container>
      </motion.li>
    </>
  );
};

export default NavTop;
