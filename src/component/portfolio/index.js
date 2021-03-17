import React, { useState } from 'react'
import { Container, Row, Col, Tab, ListGroup, Button } from 'react-bootstrap'
import Carousel from './carousel'
import TabTecnology from './tabTecnology'
import TabObjective from './tabObjective'
import { Proyect } from '../../data/portfolioProyect'
import GitHubIcon from '@material-ui/icons/GitHub';
import './index.css'


const IndexPortfolio = () => {
    const [ linkStatus, setLinkStatus ] = useState([
        {
            name: 'Urban Style',
            link: "link1"
        },
        {
            name: 'Caroline Spa',
            link: "link1"
        },
        {
            name: 'Arquitectura Bosque',
            link: "link1"
        },
        {
            name: 'RealState GDl',
            link: "link1"
        },
    ])

    const handleClickLink = (links, title) => {
        setLinkStatus(
            linkStatus.map(item => 
                item.name === title 
                ? {...item, link: links} 
                : item 
        ))
    }

    return (
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
                                            <a href={value.url.git} target='_blank' rel="noopener noreferrer" className='mr-3' title={`Github de ${value.title}`}><GitHubIcon style={{ color: 'var(--comple1)', fontSize: '2rem'}} /></a>
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
                                                            <ListGroup.Item action eventKey="#link1" onClick={() => handleClickLink(`link1`, value.title)}>
                                                                <h2>Descripción</h2>
                                                            </ListGroup.Item>
                                                            <ListGroup.Item action eventKey="#link2" onClick={() => handleClickLink(`link2`, value.title)} >
                                                                <h2>Tecnologías</h2>
                                                            </ListGroup.Item>
                                                            <ListGroup.Item action eventKey="#link3" onClick={() => handleClickLink(`link3`, value.title)} >
                                                                <h2>Objetivos</h2>
                                                            </ListGroup.Item>
                                                        </ListGroup>
                                                    </Col>
                                                    <Col xl={8} className='h-100'>
                                                        <Tab.Content className={`h-100 d-flex justify-content-center align-items-start t-b ${(linkStatus[index].name === value.title) ? linkStatus[index].link : 'Link1'}`}>
                                                            <Tab.Pane eventKey="#link1" className='tabDes h-100'>
                                                                <p className='mb-0 d-block'>{value.description}</p>
                                                                    <a href={value.url.web} target='_blank' rel="noopener noreferrer"><Button size="lg" block>¡Mira aqui el proyecto!</Button></a>
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