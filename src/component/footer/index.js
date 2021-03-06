import React, { useState} from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useLocation, Link } from 'react-router-dom'
import {animateScroll as scroll } from 'react-scroll'
import { MenuItems } from '../../data/menuItems'
import ArrowDropDownCircleIcon from '@material-ui/icons/ArrowDropDownCircle';
import CopyrightIcon from '@material-ui/icons/Copyright';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import Logo from '../../media/LogoEc.svg'
import './index.css'


const Footer = () => {
    const [ path, setPath ] = useState()

    const handleClick = () => {
        scroll.scrollToTop();
    }

    const usePageViews = () => {
        let location = useLocation();
        React.useEffect(() => {
          setPath(location.pathname);
        }, [location]);
    }

    usePageViews()


    return (
        <footer className='footer'>
            <Container fluid className='py-5 px-4'>
                <Row className='d-flex flex-column flex-md-row justify-content-between align-items-center'>
                    <Col xs={12} md={3}>
                        <div className="footerBrand text-center">
                            <Link to='/'><img src={Logo} alt='Logo' className='img-logo' /></Link>
                        </div>
                    </Col>
                    <Col xs={12} md={4}>
                        <ul className='footer-menu p-0 text-center mt-4 mt-md-0'>
                            {MenuItems.map((item, index) => {
                                return (
                                    <li key={index} className='py-2'>
                                        <Link className={`${path === item.url ? 'active' : ''} ${item.cName}`} to={item.url}>
                                        {item.title}
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </Col>
                    <Col xs={12} md={2} className="text-center mt-3 mt-md-0">
                        <a href="https://www.linkedin.com/in/estefano-chacon/" target='_blank' rel="noopener noreferrer" title="Linkedin"><LinkedInIcon style={{ color: 'var(--comple1)', fontSize: '5rem'}} /></a>
                        <a href="https://github.com/EstefanoC" target='_blank' rel="noopener noreferrer" title="Github"><GitHubIcon style={{ color: 'var(--comple1)', fontSize: '5rem'}} /></a>
                    </Col>
                    <Col xs={12} md={2} className='footer-up text-center mt-4 mt-md-0'>
                        <ArrowDropDownCircleIcon onClick={handleClick} aria-label="Subir" title="Subir" style={{ color: '#1e1e1e', fontSize: '5rem'}}/>
                        <strong className='d-block'>Regresar al inicio</strong>
                    </Col>
                </Row>
            </Container>
            <small className='text-center d-block w-100 pb-2'>Derechos reservados Copyright <CopyrightIcon style={{ color: '#6c757dad', fontSize: '1rem'}}/> 2021 Estefano Chac??n</small>
        </footer>
    )
}

export default Footer