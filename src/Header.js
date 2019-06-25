import React from 'react';

import danLogo from "./images/dan-logo.png";
import mozartLogo from "./images/mozart-logo.png";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";



class Header extends React.Component {
    render() {
        const menuOpenLogoStlye = {
            opacity: "0",
        };
        
        const menuClosedLogoStyle = {
            opacity: "0.4",
        }
        
        let logoStyle;

        if (this.props.menuOpen) {
            logoStyle = menuOpenLogoStlye;
        } else {
            logoStyle = menuClosedLogoStyle;
        }

        return (
            <header className="App-header">
                <div className="header-logo-span">
                    <div className="header-span-dan-logo-container">
                        <img src={danLogo} alt="Dentsu Aegis Network logo" style={logoStyle}/> 
                    </div>
                    <div className="header-span-dan-hero-message-container">
                        <h3>Dentsu Aegis Network’s site for Media Owner Services Agreements</h3>
                    </div>
                </div>
                <div className="headerSpanDivider"></div>
                <div className="menu-logo-search-span">
                    <div className="menu-logo-search-span-column" id="menu-logo-search-span-column-left">
                        <i className="material-icons" id="menu-logo-search-span-column-left-burger">
                            menu
                        </i>
                    </div>
                    <div className="menu-logo-search-span-column" id="menu-logo-search-span-column-middle">
                        <div className="menu-logo-search-span-column-middle-container" id="menu-logo-search-span-column-mozart-logo-container">
                            <img alt="mozart-logo" src={mozartLogo} />
                        </div>
                        <div className="menu-logo-search-span-column-middle-container" id="menu-logo-search-span-column-hero-message-container">
                            <h3>Upload signed contracts, capture key contractual terms & monitor and track service delivery</h3>
                        </div>
                    </div>
                    <div className="menu-logo-search-span-column" id="menu-logo-search-span-column-right">
                        <div className="menu-logo-search-span-column-right-search-icon-container">
                            <i className="material-icons" id="menu-logo-search-span-column-right-search">
                                search
                            </i>
                        </div>
                    </div>
                </div>
            </header>
        );

        /*
        return (
            <header className="App-header">
                <div className="header-logo-span">
                    <div className="header-span-dan-logo-container">
                        <img src={danLogo} alt="Dentsu Aegis Network logo" style={logoStyle}/> 
                    </div>
                    <div className="header-span-dan-hero-message-container">
                        <h3>Dentsu Aegis Network’s site for Media Owner Services Agreements</h3>
                    </div>
                </div>
                <div className="headerSpanDivider"></div>
                <div className="menu-logo-search-span">
                    <div className="menu-logo-search-span-column" id="menu-logo-search-span-column-left">
                        <i className="material-icons" id="menu-logo-search-span-column-left-burger">
                            menu
                        </i>
                    </div>
                    <div className="menu-logo-search-span-column" id="menu-logo-search-span-column-middle">
                        <div className="menu-logo-search-span-column-middle-container" id="menu-logo-search-span-column-mozart-logo-container">
                            <Link to="/">
                                <img alt="mozart-logo" src={mozartLogo} />
                            </Link>
                        </div>
                        <div className="menu-logo-search-span-column-middle-container" id="menu-logo-search-span-column-hero-message-container">
                            <h3>Upload signed contracts, capture key contractual terms & monitor and track service delivery</h3>
                        </div>
                    </div>
                    <div className="menu-logo-search-span-column" id="menu-logo-search-span-column-right">
                        <div className="menu-logo-search-span-column-right-search-icon-container">
                            <i className="material-icons" id="menu-logo-search-span-column-right-search">
                                search
                            </i>
                        </div>
                    </div>
                </div>
            </header>
        );
        */
    }
}

export default Header; 