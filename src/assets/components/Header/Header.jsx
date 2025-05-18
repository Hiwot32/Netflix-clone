import React from 'react'
import './header.css'
import Netflixlogo from '../../images/NetflixLogo.png'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
function Header() {
  return (
    <div className="header">
      <div className="outer-container">
            <div className="header-lists">
                <ul className="nav-lists">
                    <li ><img className="logo" src={Netflixlogo} alt="netflixLogo" width="100" /></li>
                    <li>Home</li>
                    <li>TV Shows</li>
                    <li>Movies</li>
                    <li>Games</li>
                    <li>News&Popular</li>
                    <li>My List</li>
                    <li>Browse by Languages</li>
                </ul>
                <ul className="second-nav">
                    <li><SearchIcon /></li>
                    <li><NotificationsNoneIcon /></li>
                    <li><AccountBoxIcon /></li>
                    <li><ArrowDropDownIcon /></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Header
