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
                                    <i class="material-icons">
                                        home
                                    </i>
                                    <p>HOME</p>
                                </Link>
                            </li>
                            <li>
                                <i class="material-icons">
                                    note_add
                                </i>
                                <p>CREATE CONTACT</p>
                            </li>
                            <li>
                                <i class="material-icons">
                                    compare_arrows
                                </i>
                                <p>IMPORT</p>
                            </li>
                            <li>
                                <i class="material-icons">
                                    create_new_folder
                                </i>
                                <p>CREATE REPORT</p>
                            </li>
                            <li>
                                <i class="material-icons">
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
                <div className="menuContainer" style={{width: "0px"}}>
                </div>
            );
        }

        
    }
}

export default Menu; 