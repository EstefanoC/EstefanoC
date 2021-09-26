/* eslint-disable react/prop-types */
import React, { useState } from "react";
import BgNavBottom from "./bg-navbottom";
import { useHistory } from "react-router-dom";
import { motion, useCycle } from "framer-motion";
import { HomeVariantBottom } from "../helpers/animation";
import { Container, Button } from "react-bootstrap/";
import { useTranslation } from "react-i18next";

const NavBottom = (props) => {
  const [stop, setStop] = useState(null);
  const [start, setStart] = useState(null);
  const [animateFinish, cycleAnimation] = useCycle("static", "finish");
  const history = useHistory();
  const [t, i18n] = useTranslation("global");

  const handleOnClick = () => {
    cycleAnimation();
    props.leaveTop();
    props.leaveCenter();

    setTimeout(() => {
      history.push("/ContactMe");
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
        variants={HomeVariantBottom}
        className="navBottom"
        onMouseEnter={MouseMove}
        onMouseLeave={MouseMove}
      >
        <BgNavBottom stop={stop} start={start} />

        <Container
          fluid
          className="navBottom-link d-flex align-items-center justify-content-center"
        >
          <Button
            variant="primary"
            className="text-uppercase"
            onClick={handleOnClick}
          >
            {t("home.button-contact")}
          </Button>
        </Container>
      </motion.li>
    </>
  );
};

export default NavBottom;
