import { useState } from "react";

// Dependencies
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

// Helpers
import { HomeVariantBottom } from "../helpers/animation";

// Components
import BgNavBottom from "./bg-navbottom";

// Styles
import { Container, Button } from "react-bootstrap/";

const NavBottom = ({ leaveTop, leaveCenter }) => {
  const [stop, setStop] = useState(null);
  const [start, setStart] = useState(null);
  const [open, setOpen] = useState(false);
  const [t, i18n] = useTranslation("global");

  const navigate = useNavigate();

  const handleOnClick = () => {
    setOpen(true);
    leaveTop();
    leaveCenter();

    setTimeout(() => {
      navigate("/Contact");
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
