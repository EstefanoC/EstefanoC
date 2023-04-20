import React, { useState } from "react";
import BgNavTop from "./bg-navtop";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { HomeVariantTop } from "../helpers/animation";
import { Container, Button } from "react-bootstrap/";
import { useTranslation } from "react-i18next";

const NavTop = () => {
  const [stop, setStop] = useState(null);
  const [start, setStart] = useState(null);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const [t, i18n] = useTranslation("global");

  const handleOnClick = () => {
    setOpen(true);

    setTimeout(() => {
      navigate("/About");
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
        variants={HomeVariantTop}
        animate={open ? "finish" : "static"}
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
