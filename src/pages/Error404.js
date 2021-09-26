import React from "react";
import { Container, Row } from "react-bootstrap/";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Error404 = () => {
  const [t, i18n] = useTranslation("global");

  return (
    <div className="Error404">
      <Container>
        <Row>
          <h1 className="text-center text-uppercase d-block w-100 pt-5 t-b">
            {t('error404.title')}
          </h1>
          <Link to="/" className="Link404 w-100 pb-5">
            <h2>{t('error404.h2')}</h2>
          </Link>
        </Row>
      </Container>
    </div>
  );
};

export default Error404;
