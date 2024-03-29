// Dependencies
import { useTranslation } from "react-i18next";

// Icons
import EmailIcon from "@mui/icons-material/Email";

// Styles
import "./index.css";
import { Container, Row } from "react-bootstrap";

const ContactIndex = () => {
  const [t, i18n] = useTranslation("global");

  return (
    <Container>
      <Row className="pt-md-5 pb-5">
        <h1 className="text-center">
          {t("contact.h1")}
          <a href={t("contact.email-href")}>
            {t("contact.email-title")}
            <EmailIcon style={{ color: "#4081B3", fontSize: "2rem" }} />
          </a>
        </h1>
        <p className="text-center text-sec">{t("contact.p1")}</p>
      </Row>
    </Container>
  );
};

export default ContactIndex;
