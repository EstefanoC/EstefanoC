import React from 'react'

// Bootstrap 
import { Container } from 'react-bootstrap'

// Frame motion
import { motion } from 'framer-motion'

// Helpers
import { pageVariant1, pageTransition } from '../component/helpers/animation'

// component
import BgNavBottom from '../component/home/bg-navbottom'
import ContactIndex from '../component/contact/'

// Css
import './index.css'

const Contact = () => (
    <motion.div 
    exit="out" 
    animate="in" 
    initial="out"
    variants={pageVariant1}
    transition={pageTransition}
    >
        <header className='mb-5'>
            <Container fluid className="headerContact p-0">
                <div className='headerTitle text-center d-flex justify-content-center w-100'>
                    <h1 className='px-3 py-1'>Contactáme</h1>
                </div>
                <BgNavBottom WithoutStop={true} />
            </Container>
        </header>
        <main className='contact'>
            <ContactIndex />
        </main>
    </motion.div>
)

export default Contact