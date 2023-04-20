import { useState } from "react";

// Components
import NavTop from "./nav-top";
import NavBottom from "./nav-bottom";
import NavCenter from "./nav-center";

// Styles
import "./index.css";
import { Container, Row, Col } from "react-bootstrap/";

const Home = () => {
  const [animateFinishTop, setAnimateFinishTop] = useState("");
  const [animateFinishCenter, setAnimateFinishCenter] = useState("");

  const animateTop = () => {
    setAnimateFinishTop("leaveTop");
  };

  const animateCenter = () => {
    setAnimateFinishCenter("leaveCenter");
  };

  return (
    <Container fluid className="home p-0 m-0">
      <nav className="home-nav">
        <ul className="p-0 m-0">
          <Row fluid={"true"}>
            <Col xs={12} className={animateFinishTop}>
              <NavTop />
            </Col>
            <Col xs={12} className={`center ${animateFinishCenter}`}>
              <NavCenter leaveTop={animateTop} />
            </Col>
            <Col xs={12}>
              <NavBottom leaveTop={animateTop} leaveCenter={animateCenter} />
            </Col>
          </Row>
        </ul>
      </nav>
    </Container>
  );
};

export default Home;
