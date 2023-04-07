import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";

let userImage;

const Carousel = (props) => {
  const [t, i18n] = useTranslation("global");

  return (
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={50}
      totalSlides={props.img.quantity}
      className="h-100"
    >
      <Slider>
        {props.img.url.map((value, index) => (
          <Slide index={index} key={`${index}${props.title}`}>
            <img
              src={require(`../../media/${value.toString()}`)}
              alt={`${props.title} ${index}`}
              className="img-fluid"
            />
          </Slide>
        ))}
      </Slider>
      <Row className="d-flex justify-content-between no-gutters">
        <Col xs={6}>
          <ButtonBack className="w-100 h-100 back">
            {t("portfolio.carrousel-back")}
          </ButtonBack>
        </Col>
        <Col xs={6}>
          <ButtonNext className="w-100 h-100 next">
            {t("portfolio.carrousel-next")}
          </ButtonNext>
        </Col>
      </Row>
    </CarouselProvider>
  );
};

export default Carousel;
