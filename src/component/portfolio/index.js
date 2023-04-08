import React, { useState } from "react";
import { Container, Row, Col, Tab, ListGroup, Button } from "react-bootstrap";
import Carousel from "./carousel";
import TabTecnology from "./tabTecnology";
import TabObjective from "./tabObjective";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useTranslation } from "react-i18next";
import "./index.css";

const IndexPortfolio = () => {
  const [t, i18n] = useTranslation("global");
  const [linkStatus, setLinkStatus] = useState([
    {
      name: "RapiditoYa",
      link: "link1",
    },
    {
      name: "Beat PLace",
      link: "link1",
    },
    {
      name: "Urban Style",
      link: "link1",
    },
    {
      name: "Game Room",
      link: "link1",
    },
    {
      name: "Breaking Bad",
      link: "link1",
    },
    {
      name: "Arquitectura Bosque",
      link: "link1",
    },
    {
      name: "RealState GDl",
      link: "link1",
    },
  ]);

  const handleClickLink = (links, title) => {
    setLinkStatus(
      linkStatus.map((item) =>
        item.name === title ? { ...item, link: links } : item
      )
    );
  };

  return (
    <section className="firstSection mb-5">
      <Container>
        <Row>
          <Col xs={12}>
            {t("portfolio.data", { returnObjects: true }).map(
              (
                { title, url, img, description, tecnology, objectives },
                index
              ) => (
                <article className="portfolioCard p-2 mb-5" key={index}>
                  <header className="cardHeader text-center py-2">
                    <h1 className="mb-0 text-uppercase shadown-text">
                      {title}
                    </h1>

                    {/* Hidden if this project don't have url */}
                    {url?.git ? (
                      <a
                        href={url.git}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mr-3"
                        title={t("portfolio.git-title", {
                          returnObjects: true,
                          title: title,
                        })}
                      >
                        <GitHubIcon style={{ fontSize: "2rem" }} />
                      </a>
                    ) : (
                      <p>{t("portfolio.without-git")}</p>
                    )}
                  </header>
                  <div className="cardImg">
                    <Carousel img={img} title={title} />
                  </div>
                  <div className="cardText">
                    <Tab.Container
                      id="list-group-tabs-example"
                      defaultActiveKey="#link1"
                    >
                      <Row className="h-100 d-flex justify-content-center align-items-center no-gutters">
                        <Col xl={4} className="h-100 text-center">
                          <ListGroup>
                            <ListGroup.Item
                              action
                              eventKey="#link1"
                              onClick={() => handleClickLink(`link1`, title)}
                            >
                              <h2>{t("portfolio.tab-description")}</h2>
                            </ListGroup.Item>
                            <ListGroup.Item
                              action
                              eventKey="#link2"
                              onClick={() => handleClickLink(`link2`, title)}
                            >
                              <h2>{t("portfolio.tab-technology")}</h2>
                            </ListGroup.Item>
                            <ListGroup.Item
                              action
                              eventKey="#link3"
                              onClick={() => handleClickLink(`link3`, title)}
                            >
                              <h2>{t("portfolio.tab-objectives")}</h2>
                            </ListGroup.Item>
                          </ListGroup>
                        </Col>
                        <Col xl={8} className="h-100">
                          <Tab.Content
                            className={`h-100 d-flex justify-content-center align-items-start t-b ${
                              linkStatus[index].name === title
                                ? linkStatus[index].link
                                : "Link1"
                            }`}
                          >
                            <Tab.Pane
                              eventKey="#link1"
                              className="tabDes h-100"
                            >
                              <p className="mb-0 d-block">{description}</p>

                              {/* Hidden if this project don't have url */}
                              {url?.web && (
                                <a
                                  href={url.web}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <Button size="lg" block>
                                    {t("portfolio.button-project")}
                                  </Button>
                                </a>
                              )}
                            </Tab.Pane>
                            <Tab.Pane
                              eventKey="#link2"
                              className="tabTec h-100 w-100 pb-2"
                            >
                              <TabTecnology items={tecnology} />
                            </Tab.Pane>
                            <Tab.Pane
                              eventKey="#link3"
                              className="tabObj w-100"
                            >
                              <TabObjective objectives={objectives} />
                            </Tab.Pane>
                          </Tab.Content>
                        </Col>
                      </Row>
                    </Tab.Container>
                  </div>
                </article>
              )
            )}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default IndexPortfolio;
