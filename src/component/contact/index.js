import React from 'react'
import { Container } from 'react-bootstrap'
import Form from './form'
import EmailIcon from '@material-ui/icons/Email';
import MarkunreadMailboxIcon from '@material-ui/icons/MarkunreadMailbox';
import './index.css'

const ContactIndex = () => (
    <>
        <h1 className='text-center'>Enviame un correo llenando este sencillo formulario <EmailIcon /></h1>
        <p className='text-center text-sec'>
            O abre tú gestor de correo predeterminado presionando el ícono 
            <a href="mailto:estefano.jesus6@gmail.com?Subject=Quisiera%20contactarme%20contigo" title='Abre tú gestor de correo'> <MarkunreadMailboxIcon style={{ color: '#4081B3', fontSize: '2rem'}} /></a>
        </p>
        <Container className='my-5'>
            <Form />
        </Container>
    </>
)

export default ContactIndex