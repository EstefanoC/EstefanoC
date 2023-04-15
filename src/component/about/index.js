// Dependencies
import { useTranslation } from "react-i18next";

// Components
import List from "./List";
import Knowledge from "./Knowledge";

// Image / Icon
import Portrait from "../../media/portrait.jpg";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";

// Style
import "./index.css";
import { Button } from "react-bootstrap";
import { Container, Row, Col, Tabs, Tab } from "react-bootstrap";
import Experience from "./Experience";

const IndexAbout = () => {
  const [t, i18n] = useTranslation("global");

  function getAge() {
    var birthday = new Date(1999, 10, 22);
    var ageDifMs = Date.now() - birthday.getTime();
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  return (
    <section className="firstSection mb-5">
      <Container>
        <Row>
          <Col md={6} className="tab align-items-center">
            <Tabs defaultActiveKey="autobiography" id="tab" className="pt-3">
              <Tab
                eventKey="autobiography"
                title={t("about.autobiography.title")}
              >
                <div className="tabBio p-3">
                  <p>
                    {t("about.autobiography.name")}&nbsp;
                    <strong>{t("about.autobiography.strong")}</strong>&nbsp;
                    {t("about.autobiography.p", {
                      returnObjects: true,
                      age: getAge(),
                    })}
                  </p>
                  <a
                    href={
                      process.env.PUBLIC_URL +
                      `/pdf/${t("about.autobiography.cv-pdf")}`
                    }
                    target="_blank"
                    rel="noreferrer"
                    download="Cv Front-End Estefano Chacon"
                  >
                    <Button type="download" className="p-3 m-3 button-download">
                      {t("about.button-download")}&nbsp;
                      <CloudDownloadIcon
                        style={{
                          color: "var(--comple1)",
                          fontSize: "1.3rem",
                        }}
                      />
                    </Button>
                  </a>
                </div>
              </Tab>
              <Tab eventKey="Knowledge" title={t("about.knowledge.title")}>
                <List />
              </Tab>
              <Tab eventKey="Certificate" title={t("about.certificate.titles")}>
                <Knowledge />
              </Tab>
              <Tab eventKey="Experience" title={t("about.experience.title")}>
                <Experience />
              </Tab>
            </Tabs>
          </Col>
          <Col md={12} lg={{ span: 3 }} className="p-0">
            <h1 className="text-sm-left mb-4 mb-lg-0 shadown-text">
              <span>Mid</span> <span>Web</span> <span>Developer</span>
            </h1>
          </Col>
          <Col md={12} lg={3} className="portrait text-center text-lg-left p-0">
            <div>
              <img
                src={Portrait}
                alt="Estefano Chacón Frontend Developer"
                className="img-fluid"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default IndexAbout;
