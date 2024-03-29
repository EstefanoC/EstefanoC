import { useState, useEffect } from "react";

// Dependencies
import LazyLoad from "react-lazy-load";
import { useTranslation } from "react-i18next";
import { useLocation, Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";

// Images / Icons
import Logo from "../../media/LogoEc.svg";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CopyrightIcon from "@mui/icons-material/Copyright";
import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";

// Styles
import "./index.css";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  const [path, setPath] = useState();
  const [t, i18n] = useTranslation("global");

  const handleClick = () => {
    scroll.scrollToTop();
  };

  const usePageViews = () => {
    let location = useLocation();

    useEffect(() => {
      setPath(location.pathname);
    }, [location]);
  };

  usePageViews();

  return (
    <footer className="footer">
      <Container fluid className="py-5 px-4">
        <Row className="d-flex flex-column flex-md-row justify-content-between align-items-center">
          <Col xs={12} md={3}>
            <div className="footerBrand text-center">
              <Link to="/EstefanoC">
                <LazyLoad height={160} width={160} className="small">
                  <img
                    alt="FrontEnd Developer Senior EstefanoC Estefano Chacon"
                    src={Logo}
                    className="img-logo"
                  />
                </LazyLoad>
              </Link>
            </div>
          </Col>
          <Col xs={12} md={4}>
            <ul className="footer-menu p-0 text-center mt-4 mt-md-0">
              {t("navbar.nav-menu-li", { returnObjects: true }).map(
                ({ url, cName, title }, index) => {
                  return (
                    <li key={index} className="py-2">
                      <Link
                        className={`${path === url ? "active" : ""} ${cName}`}
                        to={url}
                      >
                        {title}
                      </Link>
                    </li>
                  );
                }
              )}
            </ul>
          </Col>
          <Col xs={12} md={2} className="text-center mt-3 mt-md-0">
            <a
              href="https://www.linkedin.com/in/estefano-chacon/"
              target="_blank"
              rel="noopener noreferrer"
              title="Linkedin"
            >
              <LinkedInIcon
                style={{ color: "var(--comple1)", fontSize: "5rem" }}
              />
            </a>
            <a
              href="https://github.com/EstefanoC"
              target="_blank"
              rel="noopener noreferrer"
              title="Github"
            >
              <GitHubIcon
                style={{ color: "var(--comple1)", fontSize: "5rem" }}
              />
            </a>
          </Col>
          <Col xs={12} md={2} className="footer-up text-center mt-4 mt-md-0">
            <ArrowDropDownCircleIcon
              onClick={handleClick}
              aria-label="Subir"
              title="Subir"
              style={{ color: "#1e1e1e", fontSize: "5rem" }}
            />
            <strong className="d-block">{t("footer.go-up")}</strong>
          </Col>
        </Row>
      </Container>
      <small className="text-center d-block w-100 pb-2">
        {t("footer.copyright")}&nbsp;
        <CopyrightIcon style={{ color: "#6c757dad", fontSize: "1rem" }} />{" "}
        {`${new Date().getFullYear()} `}
        Estefano Chacón
      </small>
    </footer>
  );
};

export default Footer;
