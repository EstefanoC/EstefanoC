import React from 'react'

// Bootstrap
import { Container, Row, Col, Tabs, Tab } from 'react-bootstrap'

// Img
import Portrait from '../../media/portrait.jpg'

// Component
import AboutList from './aboutList'

// Css
import './index.css'


const IndexAbout = () => {
    return(
        <>
            <section className='firstSection mb-5'>
                <Container fluid>
                    <Row noGutters>
                    <Col md={6} className='tab align-items-center'>
                        <Tabs defaultActiveKey="autobiografia" id="tab" className='pt-3' >
                            <Tab eventKey="autobiografia" title="Autobiografía">
                                <div className="tabBio p-3">
                                    <p>Mi nombre es Estefano Chacón, soy <strong>web developer front-end junior</strong> y tengo 21 años, desde hace un par de años me he enamorado de la programación y en especial del desarrollo web.</p>
                                </div>
                            </Tab>
                            <Tab eventKey="Conocimiento" title="Conocimiento">
                                <AboutList />
                            </Tab>
                        </Tabs>
                        </Col>
                        <Col md={12} lg={{ span:3}}>
                            <h1 className='text-lg-right text-center mb-4 mb-lg-0 shadown-text'><span>Junior</span> <span>Web</span> <span>Developer</span></h1>
                        </Col>
                        <Col md={12} lg={3} className='portrait text-center text-lg-left h-100'>
                            <header>
                                <h1 className='text-left d-none d-lg-block mb-0 opacity-0'><span>Junior</span> <span>Web</span> <span>Developer</span></h1>
                                <img src={Portrait} alt="Estefano Chacón" className='img-fluid'/>
                            </header>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default IndexAbout