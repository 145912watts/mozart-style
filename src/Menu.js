import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Menu extends React.Component {
    render() {
        const menuWidth = this.props.centerColumnWidth * 0.21;
        const navContainerMarginTop = window.screen.height * 0.27;

        const menuContainerClosedStyle = {
            display: "none",
            marginLeft: "303px",
            opacity: "0",
            width: "0px",
        }

        const menuContainerOpenStyle = {
            width: menuWidth,
        }

        const menuContainerCloseIconContainerClosedStyle = {
            display: "none",
            opacity: "0",
        }

        const navContainerOpenStyle = {
            marginTop: navContainerMarginTop
        }

        const navListClosedStyle = {
            padding: "0",
        }

        const navListLiClosedStyle = {
            opacity: "0",
        }

        let menuContainerStyle;
        let menuContainerCloseIconContainerStyle;
        let navContainerStyle;
        let navListStyle;
        let navListLiStyle;

        if (this.props.open) { 
            menuContainerStyle = menuContainerOpenStyle;
            menuContainerCloseIconContainerStyle = null;
            navContainerStyle = navContainerOpenStyle;
            navListStyle = null;
            navListLiStyle = null;
        } else {
            menuContainerStyle = menuContainerClosedStyle;
            menuContainerCloseIconContainerStyle = menuContainerCloseIconContainerClosedStyle;
            navContainerStyle = null;
            navListStyle = navListClosedStyle;
            navListLiStyle = navListLiClosedStyle;
        }

        return (
            <div className="menuContainer" style={menuContainerStyle}>
                <div className="menuContainer-close-icon-container" style={menuContainerCloseIconContainerStyle}>
                    <i className="material-icons" id="menuContainer-close-icon">
                        close
                    </i>
                </div>
                <div className="navContainer" style={navContainerStyle}>
                    <ul className="navList" style={navListStyle}>
                        <li style={navListLiStyle}>
                            <Link to="/">
                                <i className="material-icons">
                                    home
                                </i>
                                <p>HOME</p>
                            </Link>
                        </li>
                        <li style={navListLiStyle}>
                            <i className="material-icons">
                                note_add
                            </i>
                            <p>CREATE CONTACT</p>
                        </li>
                        <li style={navListLiStyle}>
                            <i className="material-icons">
                                compare_arrows
                            </i>
                            <p>IMPORT</p>
                        </li>
                        <li style={navListLiStyle}>
                            <i className="material-icons">
                                create_new_folder
                            </i>
                            <p>CREATE REPORT</p>
                        </li>
                        <li style={navListLiStyle}>
                            <i className="material-icons">
                                help
                            </i>
                            <p>HELP CENTRE</p>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Menu; 