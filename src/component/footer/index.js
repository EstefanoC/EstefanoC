import React, { useState} from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useLocation, Link } from 'react-router-dom'
import {animateScroll as scroll } from 'react-scroll'
import { MenuItems } from '../../data/menuItems'
import { IconButton, Tooltip } from '@material-ui/core'
import Zoom from '@material-ui/core/Zoom';
import ArrowDropDownCircleIcon from '@material-ui/icons/ArrowDropDownCircle';
import CopyrightIcon from '@material-ui/icons/Copyright';
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
                    <Col xs={12} md={4}>
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
                    <Col xs={12} md={4} className='footer-up text-center mt-3 mt-md-0'>
                        <IconButton onClick={handleClick} aria-label="Subir">
                            <Tooltip title='SUBIR' aria-label="Subir" TransitionComponent={Zoom}  placement="top">
                                <ArrowDropDownCircleIcon  style={{ color: '#1e1e1e', fontSize: '5rem'}}/>
                            </Tooltip>
                        </IconButton>
                        <strong className='d-block'>Regresar al inicio</strong>
                    </Col>
                </Row>
            </Container>
            <small className='text-center d-block w-100'>Derechos reservados Copyright <CopyrightIcon style={{ color: '#6c757dad', fontSize: '1rem'}}/> 2021 Estefano Chacón</small>
        </footer>
    )
}

export default Footer