import React from 'react'

// Bootstrap
import { Container, Row, Col, Tab, ListGroup } from 'react-bootstrap'

// Component
import Carousel from './carousel'
import PopoverItems from './popoverItems'
import TabTecnology from './tabTecnology'
import TabObjective from './tabObjective'

// Data
import { Proyect } from '../../data/portfolioProyect'

// Css
import './index.css'


const IndexPortfolio = () => {
    return(
        <section className='firstSection mb-5'>
            <Container>
                <Row>
                    <Col xs={12} className='prueba'>
                        {
                            Proyect.map( (value, index) => {
                                return (
                                    <article className="portfolioCard p-2 mb-5" key={index}>
                                        <header className='cardHeader text-center py-2'>
                                            <h1 className='mb-0 text-uppercase shadown-text'>{value.title}</h1>
                                        </header>
                                        <div className="cardImg">
                                            <Carousel 
                                                img={value.img}
                                                title={value.title}
                                            />
                                        </div>
                                        <div className="cardText">
                                            <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
                                                <Row className='h-100 d-flex justify-content-center align-items-center no-gutters'>
                                                    <Col xl={4} className='h-100 text-center'>
                                                        <ListGroup>
                                                            <ListGroup.Item action href="#link1">
                                                                <h2>Descripción</h2>
                                                            </ListGroup.Item>
                                                            <ListGroup.Item action href="#link2">
                                                                <h2>Tecnologías</h2>
                                                            </ListGroup.Item>
                                                            <ListGroup.Item action href="#link3">
                                                                <h2>Objetivos</h2>
                                                            </ListGroup.Item>
                                                        </ListGroup>
                                                    </Col>
                                                    <Col xl={8} className='h-100'>
                                                        <Tab.Content className='h-100 d-flex justify-content-center align-items-start t-b'>
                                                            <Tab.Pane eventKey="#link1" className='tabDes h-100'>
                                                                <p className='mb-0 d-block'>{value.description}</p>
                                                                    <PopoverItems url={value.url}/>
                                                            </Tab.Pane>
                                                            <Tab.Pane eventKey="#link2" className='tabTec h-100 w-100 pb-2'>
                                                                <TabTecnology items={value.tecnology}/>
                                                            </Tab.Pane>
                                                            <Tab.Pane eventKey="#link3" className='tabObj'>
                                                                <TabObjective objectives={value.objectives}/>
                                                            </Tab.Pane>
                                                        </Tab.Content>
                                                    </Col>
                                                </Row>
                                            </Tab.Container>
                                        </div>
                                    </article>
                                )
                            })
                        }
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default IndexPortfolio