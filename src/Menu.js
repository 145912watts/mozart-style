import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Menu extends React.Component {
    render() {
        if(this.props.open) {
            return (
                <div className="menuContainer">
                    <div className="menuContainer-close-icon-container">
                        <i className="material-icons" id="menuContainer-close-icon">
                            close
                        </i>
                    </div>
                    <div className="navContainer">
                        <ul className="navList">
                            <li>
                                <Link to="/">
                                    <i className="material-icons">
                                        home
                                    </i>
                                    <p>HOME</p>
                                </Link>
                            </li>
                            <li>
                                <i className="material-icons">
                                    note_add
                                </i>
                                <p>CREATE CONTACT</p>
                            </li>
                            <li>
                                <i className="material-icons">
                                    compare_arrows
                                </i>
                                <p>IMPORT</p>
                            </li>
                            <li>
                                <i className="material-icons">
                                    create_new_folder
                                </i>
                                <p>CREATE REPORT</p>
                            </li>
                            <li>
                                <i className="material-icons">
                                    help
                                </i>
                                <p>HELP CENTRE</p>
                            </li>
                        </ul>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="menuContainer" style={{display: "none", opacity: "0", marginLeft: "303px", width: "0px"}}>
                    <div className="menuContainer-close-icon-container" style={{display: "none", opacity: "0"}}>
                        <i className="material-icons" id="menuContainer-close-icon">
                            close
                        </i>
                    </div>
                    <div className="navContainer">
                        <ul className="navList" style={{padding: "0"}}>
                            <li style={{opacity: "0"}}>
                                <Link to="/">
                                    <i className="material-icons">
                                        home
                                    </i>
                                    <p>HOME</p>
                                </Link>
                            </li>
                            <li style={{opacity: "0"}}>
                                <i className="material-icons">
                                    note_add
                                </i>
                                <p>CREATE CONTACT</p>
                            </li>
                            <li style={{opacity: "0"}}>
                                <i className="material-icons">
                                    compare_arrows
                                </i>
                                <p>IMPORT</p>
                            </li>
                            <li style={{opacity: "0"}}>
                                <i className="material-icons">
                                    create_new_folder
                                </i>
                                <p>CREATE REPORT</p>
                            </li>
                            <li style={{opacity: "0"}}>
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
}

export default Menu; 