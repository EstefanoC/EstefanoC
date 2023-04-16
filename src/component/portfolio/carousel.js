import { useState } from "react";

// Dependencies
import { useTranslation } from "react-i18next";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";

// Style
import { Row, Col } from "react-bootstrap";
import "pure-react-carousel/dist/react-carousel.es.css";

const Carousel = ({ img, title, mobile }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const [t, i18n] = useTranslation("global");

  return (
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={mobile > currentSlide ? 150 : 50}
      totalSlides={img.quantity}
      className={`h-100 ${mobile > currentSlide && "mobile-img"}`}
    >
      <Slider>
        {img.url.map((value, index) => (
          <Slide index={index} key={`${index}${title}`}>
            <img
              src={require(`../../media/${value.toString()}`)}
              alt={`${title} ${index}`}
              className="img-fluid"
            />
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
