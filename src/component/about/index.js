import React from "react";
import { Container, Row, Col, Tabs, Tab } from "react-bootstrap";
import Portrait from "../../media/portrait.jpg";
import CloudDownloadIcon from "@material-ui/icons/CloudDownload";
import AboutKnowledge from "./AboutKnowledge";
import { Button } from "react-bootstrap";
import AboutList from "./aboutList";
import { useTranslation } from "react-i18next";
import "./index.css";

const IndexAbout = () => {
  const [t, i18n] = useTranslation("global");

  return (
    <>
      <section className="firstSection mb-5">
        <Container fluid>
          <Row noGutters>
            <Col md={6} className="tab align-items-center">
              <Tabs defaultActiveKey='autobiography' id="tab" className="pt-3">
                <Tab eventKey='autobiography' title={t('about.autobiography.title')}>
                  <div className="tabBio p-3">
                    <p>
                      {t('about.autobiography.name')}&nbsp;
                      <strong>{t('about.autobiography.strong')}</strong>&nbsp;
                      {t('about.autobiography.p')}
                    </p>
                    <a
                      href={`../../media/${t('about.autobiography.cv-pdf')}`}
                      target="_blank"
                      rel="noreferrer"
                      download="Cv Front-End Estefano Chacon"
                    >
                      <Button
                        type="download"
                        className="p-3 m-3 button-download"
                      >
                        {t('about.button-download')}&nbsp;
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
                <Tab eventKey="Knowledge" title={t('about.knowledge.title')}>
                  <AboutList />
                </Tab>
                <Tab eventKey="Certificados" title={t('about.certificate.titles')}>
                  <AboutKnowledge />
                </Tab>
              </Tabs>
            </Col>
            <Col md={12} lg={{ span: 3 }}>
              <h1 className="text-lg-right text-center mb-4 mb-lg-0 shadown-text">
                <span>Junior</span> <span>Web</span> <span>Developer</span>
              </h1>
            </Col>
            <Col
              md={12}
              lg={3}
              className="portrait text-center text-lg-left h-100"
            >
              <header>
                <h1 className="text-left d-none d-lg-block mb-0">
                  <span>Junior</span> <span>Web</span> <span>Developer</span>
                </h1>
                <img
                  src={Portrait}
                  alt="Estefano Chacón"
                  className="img-fluid"
                />
              </header>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default IndexAbout;
