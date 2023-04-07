import React, { useState } from "react";
import BgNavCenter from "./bg-navcenter";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { HomeVariantCenter } from "../helpers/animation";
import { Container, Button } from "react-bootstrap/";
import { useTranslation } from "react-i18next";

const NavLeft = (props) => {
  const [stop, setStop] = useState(null);
  const [start, setStart] = useState(null);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const [t, i18n] = useTranslation("global");

  const handleOnClick = () => {
    setOpen(true);
    props.leaveTop();

    setTimeout(() => {
      navigate("/Portfolio");
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
        variants={HomeVariantCenter}
        animate={open ? "finish" : "static"}
        className="navCenter"
        onMouseEnter={MouseMove}
        onMouseLeave={MouseMove}
      >
        <BgNavCenter stop={stop} start={start} />

        <Container
          fluid
          className="navCenter-link d-flex align-items-center justify-content-center"
        >
          <Button
            variant="primary"
            className="text-uppercase"
            onClick={handleOnClick}
          >
            {t("home.button-portfolio")}
          </Button>
        </Container>
      </motion.li>
    </>
  );
};

export default NavLeft;
