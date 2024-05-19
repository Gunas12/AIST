import React, { useState } from "react";

function Navbar() {
    const brandimg = '/images/brand.png';
    const search_icon = 'images/search.png';
    const notification_icon = 'images/notification.png';
    const [menuActive, setMenuActive] = useState(false);

    const navToggle = () => {
        setMenuActive(!menuActive);
    };

    return (
        <nav className="navbar">
            <div className="nav__brand"><img src={brandimg} alt="brand" /></div>
            <div className={`nav_ul_2 ${menuActive ? 'nav__active' : ''}`}>
                <ul className={`nav__menu ${menuActive ? 'nav__active' : ''}`}>
                    <li className="nav__item">
                        <button>Home</button>
                    </li>
                    <li className="nav__item">
                        <button className="nav_active">Movies & Shows</button>
                    </li>
                    <li className="nav__item">
                        <button>Support</button>
                    </li>
                    <li className="nav__item">
                        <button>Subscriptions</button>
                    </li>
                </ul>
            </div>
            <ul className="icons">
                <li className="nav__item">
                    <a href="#"><img src={search_icon} alt="search" /></a>
                </li>
                <li className="nav__item">
                    <a href="#"><img src={notification_icon} alt="notification" /></a>
                </li>
            </ul>
            <div onClick={navToggle} className={`nav__toggler ${menuActive ? 'toggle' : ''}`}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </nav>
    );
}

export default Navbar;
