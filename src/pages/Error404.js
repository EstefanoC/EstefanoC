// Dependencies
import LazyLoad from "react-lazy-load";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

// Image
import ErrorImg from "../media/Error404.png";

// Styles
import { Container, Row } from "react-bootstrap/";

const Error404 = () => {
  const [t, i18n] = useTranslation("global");

  return (
    <div className="Error404">
      <Container>
        <Row className="py-5 justify-content-center">
          <h1 className="text-center text-uppercase d-block w-100 pt-5 t-b">
            {t("error404.title")}
          </h1>
          <Link to="/EstefanoC" className="Link404 w-100 pb-5">
            <h2>{t("error404.h2")}</h2>
          </Link>
          <LazyLoad height={450} width={426}>
            <img
              src={ErrorImg}
              alt="FrontEnd Developer Senior EstefanoC Estefano Chacon"
              className="img-fluid"
            />
          </LazyLoad>
        </Row>
      </Container>
    </div>
  );
};

export default Error404;
