import { useState } from "react";

// Dependencies
import LazyLoad from "react-lazy-load";
import { useTranslation } from "react-i18next";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";

// Helpers
import UseWidth from "../helpers/UseWidth";

// Style
import { Row, Col } from "react-bootstrap";
import "pure-react-carousel/dist/react-carousel.es.css";

const Carousel = ({ img, title, mobile }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const [t, i18n] = useTranslation("global");

  const { width } = UseWidth();

  const getSize = (w = 1, h, mob) => {
    if (w >= 1400 && h && mob) {
      return 978;
    } else if (w >= 1400 && h) {
      return 365;
    } else if (w >= 1400) {
      return 652;
    } else if (w >= 1200 && h && mob) {
      return 843;
    } else if (w >= 1200 && h) {
      return 315;
    } else if (w >= 1200) {
      return 562;
    } else if (w >= 992 && h && mob) {
      return 1416;
    } else if (w >= 992 && h) {
      return 528;
    } else if (w >= 992) {
      return 944;
    } else if (w >= 768 && h && mob) {
      return 1020;
    } else if (w >= 768 && h) {
      return 380;
    } else if (w >= 768) {
      return 680;
    } else if (w >= 575 && h && mob) {
      return 750;
    } else if (w >= 575 && h) {
      return 280;
    } else if (w >= 575) {
      return 500;
    } else if (h && mob) {
      return w * 1.4 - 24;
    } else if (h) {
      return w / 2.1 + 10;
    } else {
      return w - 40;
    }
  };

  return (
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={mobile > currentSlide ? 150 : 56}
      totalSlides={img.quantity}
      className={`h-100 ${mobile > currentSlide && "mobile-img"}`}
    >
      <Slider>
        {img.url.map((value, index) => (
          <Slide index={index} key={`${index}${title}`}>
            <LazyLoad
              height={getSize(width, true, mobile > index - 1)}
              width={getSize(width)}
              offset={200}
            >
              <img
                src={require(`../../media/${value.toString()}`)}
                alt="FrontEnd Developer Senior EstefanoC Estefano Chacon"
                className="img-fluid"
              />
            </LazyLoad>
          </Slide>
        ))}
      </Slider>
      <Row className="d-flex justify-content-between no-gutters">
        <Col xs={6}>
          <ButtonBack
            onClick={() => setCurrentSlide(currentSlide - 1)}
            className="w-100 h-100 back"
          >
            {t("portfolio.carrousel-back")}
          </ButtonBack>
        </Col>
        <Col xs={6}>
          <ButtonNext
            onClick={() => setCurrentSlide(currentSlide + 1)}
            className="w-100 h-100 next"
          >
            {t("portfolio.carrousel-next")}
          </ButtonNext>
        </Col>
      </Row>
    </CarouselProvider>
  );
};

export default Carousel;
