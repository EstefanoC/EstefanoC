import React, { useState } from 'react'

// Component
import BgNavBottom from './bg-navbottom'

// React Router
import { useHistory } from 'react-router-dom'

// Animation
import { motion, useCycle } from 'framer-motion'
import { HomeVariantBottom } from '../helpers/animation'

// Bootstrap
import { Container, Button } from 'react-bootstrap/'


const NavBottom = (props) => {
    const [ stop, setStop ] = useState(null)
    const [ start, setStart ] = useState(null)
    const [ animateFinish, cycleAnimation ] = useCycle("static", "finish")
    const history = useHistory()

    const handleOnClick = () => {
        cycleAnimation()
        props.leaveTop()
        props.leaveCenter()

        setTimeout(() => {
            history.push('/Contactame')
        }, 500);
    }

    const MouseMove = () => {
        if (stop === false) {
            setStop(true)
            setStart(false)
        } else if (stop === true) {
            setStop(false)
            setStart(true)
        } else {
            setStop(true)
            setStart(false)
        }
    }

    return (
        <>
            <motion.li animate={animateFinish} variants={HomeVariantBottom} className="navBottom" onMouseEnter={MouseMove} onMouseLeave={MouseMove}>
                <BgNavBottom 
                    stop={stop}
                    start={start}
                 />

                <Container fluid className="navBottom-link d-flex align-items-center justify-content-center">
                    <Button variant="primary" className="text-uppercase" onClick={handleOnClick} >Contáctame</Button>
                </Container>
                
            </motion.li>
        </>
    )
}

export default NavBottom