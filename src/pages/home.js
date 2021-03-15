import React from 'react'

// Component
import Home from '../component/home/'
import Load from '../component/Load'

// Css
import './index.css';

const Homeless = () => {

    return (
        <>
        <Load />
        <main className='mainHome'>
            <Home />
        </main>
        </>
    )
}

export default Homeless;