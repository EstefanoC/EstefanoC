import React from 'react'
import { Container } from 'react-bootstrap'
import { motion } from 'framer-motion'
import { pageVariant2, pageTransition } from '../component/helpers/animation'
import BgNavTop from '../component/home/bg-navtop'
import Abouts from '../component/about/'
import './index.css'

const About = () => (
    <motion.div 
        exit="out" 
        animate="in" 
        initial="out"
        variants={pageVariant2}
        transition={pageTransition}
        className="heigh-ajust"
    >
        <header>
            <Container fluid className="headerAbout p-0">
                <div className='headerTitle text-center d-flex justify-content-center w-100'>
                    <h1 className='px-3 py-1'>Sobre Mi</h1>
                </div>
                <BgNavTop WithoutStop={true} />
            </Container>
        </header>
        <main className='about'>
            <Abouts/>
        </main>
    </motion.div>
)

export default About