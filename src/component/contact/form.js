import React, { useState } from 'react'
import { Form, Alert } from 'react-bootstrap'
import ButtonSend from '../helpers/buttonSend'
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';


const emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);


export default function Formu() {
    const [ alert, setAlert ] = useState({success: false, danger: false})
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = (data, e) => {
        data = {...data, Mensaje:'Hola, ¿como te encuentras?.   Me gusta tú trabajo y quisiera contactarme contigo.'}
        emailjs.sendForm('PortfolioContact', 'portfolioMenssage', e.target, 'user_qsv0lLXmEOGVIlQLSMiWO')
        .then((result) => {
            setAlert({success: true, danger: false})
        }, (error) => {
            setAlert({success: false, danger: true})
        });
        
        setTimeout(() => {
            setAlert({success: false, danger: false})
            e.target.reset();
        }, 5000);
    };
  
    return (
        <>
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group controlId='Name'>
                <Form.Label>Ingrese su nombre</Form.Label>
                <Form.Control type="text" placeholder="Nombre" name='Name' ref={register({ required: true, maxLength: 80, minLength:3 })} />
                {errors.Name && <p>Por favor, coloca tú nombre (Mínimo 3 caracteres)</p>}
            </Form.Group>
            <Form.Group controlId="Email">
                <Form.Label>Ingrese su correo electrónico</Form.Label>
                <Form.Control type="email" name='Email' placeholder="Ejemplo: correo@correo.com" ref={register({ required: true, pattern: emailRegex })} />
                {errors.Email && <p>Por favor, verifica que tú email sea correcto</p>}
            </Form.Group>
            <Form.Group controlId="Mensaje">
                <Form.Label>Ingrese su mensaje</Form.Label>
                <Form.Control as="textarea" name='Mensaje' rows={3} placeholder="Hola, ¿como te encuentras?.   Me gusta tú trabajo y quisiera contactarme contigo." ref={register({ required: true, minLength:4 })} />
                {errors.Mensaje && <p>Por favor, coloca mínimo 4 caracteres</p>}
            </Form.Group>
            <ButtonSend type='submit' />
        </Form>
        <Alert variant={'success'} show={alert.success}>
            El mensaje me ha llegado con exito!, espera mi respuesta.
        </Alert>
        <Alert variant={'danger'} show={alert.danger}>
            Ha ocurrido un error, vuelve a intentar por favor
        </Alert>
      </>
    );
  }