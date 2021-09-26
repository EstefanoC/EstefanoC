import React from "react";
import { Container } from "react-bootstrap";
import Form from "./form";
import EmailIcon from "@material-ui/icons/Email";
import MarkunreadMailboxIcon from "@material-ui/icons/MarkunreadMailbox";
import { useTranslation } from "react-i18next";
import "./index.css";

const ContactIndex = () => {
  const [t, i18n] = useTranslation("global");

  return (
    <>
      <h1 className="text-center">
        {t("contact.h1")} <EmailIcon />
      </h1>
      <p className="text-center text-sec">
        {t("contact.p1")}
        <a href={t("contact.email-href")} title={t("contact.email-title")}>
          {" "}
          <MarkunreadMailboxIcon
            style={{ color: "#4081B3", fontSize: "2rem" }}
          />
        </a>
      </p>
      <Container className="my-5">
        <Form />
      </Container>
    </>
  );
};

export default ContactIndex;
