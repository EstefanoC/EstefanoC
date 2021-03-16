import React from 'react';
import { Container, Row } from 'react-bootstrap/'
import { Link } from 'react-router-dom';

const Error404 = () => (
    <div className="Error404">
        <Container>
            <Row>
                <h1 className='text-center text-uppercase d-block w-100 pt-5'>No se ha encontrado la página</h1>
                <Link to='/' className='Link404 w-100 pb-5'>
                    <h2>Regresa al inicio</h2>
                </Link>
            </Row>
        </Container>
    </div>
);

export default Error404