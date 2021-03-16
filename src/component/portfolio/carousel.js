import React from 'react'
import Ripples from 'react-ripples'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { Row, Col } from 'react-bootstrap'


let userImage


const Carousel = (props) => (
    <CarouselProvider
    naturalSlideWidth={100}
    naturalSlideHeight={50}
    totalSlides={props.img.quantity}
    className='h-100'
    >
        <Slider>
            {
            props.img.url.map( (value, index) => {
                userImage = require(`../../media/${value.toString()}`).default

                return (
                    <Slide index={index} key={`${index}${props.title}`}><img src={userImage} alt={`${props.title} ${index}`} className='img-fluid'/></Slide>
                )
            })
            }
        </Slider>
        <Row className='d-flex justify-content-between no-gutters'>
            <Col xs={6}>
                <Ripples color='#1e1e1e47' during={500} className='w-100'>
                    <ButtonBack className='w-100 h-100 back'>Atras</ButtonBack>
                </Ripples>
            </Col>
            <Col xs={6}>
                <Ripples color='#1e1e1e47' during={500} className='w-100'>
                    <ButtonNext className='w-100 h-100 next'>Siguiente</ButtonNext>
                </Ripples>
            </Col>
        </Row>
    </CarouselProvider>
)

export default Carousel