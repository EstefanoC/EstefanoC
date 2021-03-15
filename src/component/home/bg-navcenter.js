import React from 'react'

// Component
import TypedReact from '../helpers/typed'

// Icons
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import RefreshIcon from '@material-ui/icons/Refresh';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MoreVertIcon from '@material-ui/icons/MoreVert';

// img
import BgNavCenter from '../../media/bg-browser.jpg'


const NavRight = (props) => {
    const typedString = ['https://es.reactjs.org/', 'https://github.com/', 'https://firebase.google.com/', 'https://estefanoc.github.io/UrbanStyle/', 'https://developers.google.com/speed/pagespeed/', 'Ingresa a mi portafolio y mira de lo que soy capaz', 'Haré lo imposible para que tú sitio web se vea lo mejor posible']
    return (
        <div className="bg-navCenter">
            <img src={BgNavCenter} alt="background portafolio" className='bg-fluid'/>
            <div className="bg-browser d-flex justify-content-start align-items-start">
                <ArrowBackIcon style={{ color: '#babcbe', fontSize: '3vw'}} className='d-none d-md-inline-block'/>
                <ArrowForwardIcon style={{ color: '#babcbe', fontSize: '3vw'}} className='d-none d-md-inline-block'/>
                <RefreshIcon style={{ color: '#5f6368', fontSize: '3vw'}} className='d-none d-md-inline-block'/>
                <div className="bg-browserSearch d-inline-block">
                    <input type="text" name="searchBrowser" disabled/>
                    <SearchIcon style={{ color: '#babcbe', fontSize: '2.5vw'}} />
                    <TypedReact
                        speed={80}
                        typedString={typedString}
                        typeSpeed={90}
                        backSpeed={40}
                        backDelay={15000}
                        cursor='|'
                        stop={props.stop}
                        start={props.start}
                        WithoutStop={props.WithoutStop}
                    />
                    <div className="bg-browserAccount d-none d-md-inline-block">
                        <AccountCircleIcon style={{ color: '#9aa0a6', fontSize: '3vw'}} />
                        <span>Invitado</span>
                    </div>
                    <MoreVertIcon style={{ color: '#5f6368', fontSize: '3vw'}} className='d-none d-md-inline-block'/>
                </div>
            </div>
        </div>
    )
}

export default NavRight