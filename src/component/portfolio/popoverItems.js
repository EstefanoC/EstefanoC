import React from 'react'
import { Popover, OverlayTrigger, Button } from 'react-bootstrap'
import GitHubIcon from '@material-ui/icons/GitHub';
import HttpIcon from '@material-ui/icons/Http';


const PopoverItems = (props) => {

    const popover = (
        <Popover id="popover-basic" className='popoverRepository pb-2'>
        <Popover.Title as="h3" className='text-center'>Repositorio</Popover.Title>
        <Popover.Content>
            <a href={props.url.git} target='_blank' rel="noopener noreferrer" className='mr-3' title='Github'><GitHubIcon style={{ color: 'var(--comple1)', fontSize: '2rem'}} /></a>
            o
            <a href={props.url.web} target='_blank' rel="noopener noreferrer" className='ml-3' title='Web'><HttpIcon style={{ color: 'var(--comple1)', fontSize: '2rem'}} /></a>
        </Popover.Content>
        </Popover>
    );

    return (
        <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
            <Button variant="light" size='lg' block className='text-center'>¡Mira el proyecto aqui!</Button>
        </OverlayTrigger>
    )
}


export default PopoverItems