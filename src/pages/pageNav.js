import React from 'react'

// React Router
import { Switch, Route, useLocation, } from 'react-router-dom';

// Frame motion
import { AnimatePresence } from 'framer-motion'

// pages
import About from '../pages/about.js'
import Portafolio from '../pages/portfolio.js'
import Contactame from '../pages/contact.js'
import Error404 from '../pages/Error404.js'

// Component
import Navbar from '../component/navbar'
import Footer from '../component/footer'



const PageNav = () => {
    const location = useLocation()

    return (
        <>
            <Navbar />
            <AnimatePresence exitBeforeEnter>
                <Switch location={location} key={location.pathname}>
                    <Route path='/SobreMi' exact>
                        <About />
                    </Route>
                    <Route path='/Contactame' exact>
                        <Contactame />
                    </Route>
                    <Route path='/Portafolio' exact>
                        <Portafolio />
                    </Route>
                    <Route component={Error404} />
                </Switch>
            </AnimatePresence>
            <Footer />
        </>
    )
}

export default PageNav