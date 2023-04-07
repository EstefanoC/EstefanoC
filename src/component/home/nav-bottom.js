import React, { useState } from "react";
import BgNavBottom from "./bg-navbottom";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { HomeVariantBottom } from "../helpers/animation";
import { Container, Button } from "react-bootstrap/";
import { useTranslation } from "react-i18next";

const NavBottom = (props) => {
  const [stop, setStop] = useState(null);
  const [start, setStart] = useState(null);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const [t, i18n] = useTranslation("global");

  const handleOnClick = () => {
    setOpen(true);
    props.leaveTop();
    props.leaveCenter();

    setTimeout(() => {
      navigate("/ContactMe");
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
        variants={HomeVariantBottom}
        animate={open ? "finish" : "static"}
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
