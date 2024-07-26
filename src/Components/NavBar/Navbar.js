import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/OIP (1).jpeg'
import { Link } from 'react-scroll';
import { Link as RouterLink,useLocationgti  } from 'react-router-dom';
import menu_icon from '../../assets/menu_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png'


function Navbar({notHome}) {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
    const [mobileMenu, setMobileMenu] = useState(false);

    const [Sticky, setSticky] = useState(false);
    useEffect(
      () => {
        window.addEventListener('scroll', () => {
          window.scrollY > 50 ? setSticky(true) : setSticky(false)
        })
      },
    )
  
    const toggleMenu = () => {
      mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
    }
    return (
      <nav className={`container ${Sticky|notHome ? 'dark-nav' : ''}`}>
        <img src={logo} alt='' className='logo' />
        <ul className={mobileMenu ? '':'hide-mobile-menu'}>
        <li>
      {isHomePage ? (
        <Link to='home' smooth={true} offset={0} duration={500} activeClass="active">
          Home
        </Link>
      ) : (
        <RouterLink to='/'>
          Home
        </RouterLink>
      )}
      </li>
          <li><Link to='Types' smooth={true} offset={-260} duration={500} activeClass="active">Program</Link></li>
          <li><Link to='about' smooth={true} offset={-150} duration={500} activeClass="active">About us</Link></li>
          <li><Link to='results' smooth={true} offset={-260} duration={500 * 2} activeClass="active">Results</Link></li>
          <li><Link to='technology' smooth={true} offset={-260} duration={500 * 2} activeClass="active">Technology</Link></li>
          <li><Link to='contact' smooth={true} offset={-260} duration={500 * 3} className='btn' activeClass="active">Contact us</Link></li>
        </ul>
        < img src={menu_icon} alt='' className='menu-icon' onClick={toggleMenu} />
      </nav>)
}

export default Navbar