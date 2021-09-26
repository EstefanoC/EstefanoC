import React, { useState } from "react";
import { Form, Alert, Button } from "react-bootstrap";
import SendIcon from "@material-ui/icons/Send";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { useTranslation } from "react-i18next";

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

export default function Formu() {
  const [alert, setAlert] = useState({ success: false, danger: false });
  const { register, handleSubmit, errors } = useForm();
  const [t, i18n] = useTranslation("global");

  const onSubmit = (data, e) => {
    emailjs
      .sendForm(
        "Portfolio-contact",
        "portfolioMenssage",
        e.target,
        "user_qsv0lLXmEOGVIlQLSMiWO"
      )
      .then(
        (result) => {
          setAlert({ success: true, danger: false });
        },
        (error) => {
          setAlert({ success: false, danger: true });
        }
      );

    setTimeout(() => {
      setAlert({ success: false, danger: false });
      e.target.reset();
    }, 5000);
  };

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group controlId="Name">
          <Form.Label>{t("contact.form-name-label")}</Form.Label>
          <Form.Control
            type="text"
            placeholder={t("contact.form-name-placeholder")}
            name="Name"
            ref={register({ required: true, maxLength: 80, minLength: 3 })}
          />
          {errors.Name && <p>{t("contact.form-name-error")}</p>}
        </Form.Group>
        <Form.Group controlId="Email">
          <Form.Label>{t("contact.form-email-label")}</Form.Label>
          <Form.Control
            type="email"
            name="Email"
            placeholder={t("contact.form-email-placeholder")}
            ref={register({ required: true, pattern: emailRegex })}
          />
          {errors.Email && <p>{t("contact.form-email-error")}</p>}
        </Form.Group>
        <Form.Group controlId="Message">
          <Form.Label>{t("contact.form-message-label")}</Form.Label>
          <Form.Control
            as="textarea"
            name="Message"
            rows={3}
            placeholder={t("contact.form-message-placeholder")}
            ref={register({ required: true, minLength: 4 })}
          />
          {errors.Message && <p>{t("contact.form-message-error")}</p>}
        </Form.Group>
        <Button type="submit" className="p-3 m-3">
          {t("contact.form-button")}&nbsp;
          <SendIcon style={{ color: "var(--comple1)", fontSize: "1.3rem" }} />
        </Button>
      </Form>
      <Alert variant={"success"} show={alert.success}>
        {t("contact.form-success")}
      </Alert>
      <Alert variant={"danger"} show={alert.danger}>
        {t("contact.form-error")}
      </Alert>
    </>
  );
}
