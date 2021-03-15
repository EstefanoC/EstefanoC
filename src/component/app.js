import React from 'react'

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'

// React Router
import { Switch, Route } from 'react-router-dom';

// pages
import Home from '../pages/home.js'
import PageNav from '../pages/pageNav.js'

// Css
import './app.css';


const App = () => (
    <>
    <Switch>
        <Route path='/' exact>
            <Home />
        </Route>
    </Switch>
    <PageNav />
    </>
)

export default App;