import React, { useState } from 'react'
import { useLocation, Link } from 'react-router-dom'
import { MenuItems } from '../../data/menuItems'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import Logo from '../../media/LogoEc.svg' 
import './index.css'


const NavbarTop = () => {
    const [ path, setPath ] = useState()
    const [ click, setClick ] = useState(false)

    const usePageViews = () => {
        let location = useLocation();
        React.useEffect(() => {
          setPath(location.pathname);
        }, [location]);
    }

    const handleClick = () => {
        setClick(!click)
    }

    usePageViews()


    return (
        <nav className='navbar'>
            <div className="navbarBrand">
                <Link to='/'><img src={Logo} alt='Logo' className='img-logo' /></Link>
            </div>
            <div className="menu-icon" onClick={handleClick}>
                <MenuIcon style={{ color: '#1e1e1e', fontSize: '5rem'}} className={ click ? 'move' : 'move-out'}></MenuIcon>
                <CloseIcon style={{ color: '#1e1e1e', fontSize: '5rem'}} className={ click ? 'move-out' : 'move'}></CloseIcon>
            </div>
            <ul className={click ? 'nav-menu active p-0' : 'nav-menu p-0'}>
                {MenuItems.map((item, index) => {
                    return (
                        <li key={index}>

                                <Link className={`${path === item.url ? 'active' : ''} ${item.cName}`} to={item.url} onClick={handleClick}>
                                {item.title}
                                </Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default NavbarTop