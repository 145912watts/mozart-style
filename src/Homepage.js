import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSlidersH } from '@fortawesome/free-solid-svg-icons';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Homepage extends React.Component {

    getTableRow(key) {
        return (
            <tr key={key}>
                <td>
                    <i className="material-icons">
                        file_copy
                    </i>
                    <i className="material-icons">
                        edit
                    </i>
                    <i className="material-icons">
                        add
                    </i>
                    <i className="material-icons" id="table-item-view-contract">
                        remove_red_eye
                    </i>
                    <i className="material-icons">
                        settings
                    </i>
                </td>
                <td>Lorem Ipsum</td>
                <td>Lorem Ipsum</td>
                <td>Lorem Ipsum</td>
                <td>Lorem Ipsum</td>
                <td className="home-page-table-money-cell">£XXX,XXX,XXX</td>
                <td className="home-page-table-money-cell">£XXX,XXX,XXX</td>
                <td>Lorem Ipsum</td>
                <td>Lorem Ipsum</td>
                <td>Lorem Ipsum</td>
                <td>Lorem Ipsum</td>
            </tr>
        );
    }

    getRowsForTable(numRows) {
        let i = 0;
        let tableRow;
        let tableRowsArray = [];
        while (i < numRows) {
            tableRow = this.getTableRow(i);
            tableRowsArray.push(tableRow)
            i++;
        }
        return tableRowsArray;
    }

    render() {
        const numRows = 10;
        let rows = this.getRowsForTable(numRows);
        
        return (
            <div className="App-body">
                <div className="table-and-filters">
                    <div className="main-table-filters">
                    <div className="main-table-filters-row" id="main-table-filters-one">
                        <div className="filter-buttons-container">
                        <button className="filter-buttons">LIVE CONTRACTS</button>
                        <button className="filter-buttons">MY CONTRACTS</button>
                        <button className="filter-buttons">MY SERVICES</button>
                        <button className="filter-buttons">2018</button>
                        <button className="filter-buttons">2019</button>
                        <button className="filter-buttons">ARCHIVED</button>
                        </div>
                    </div>
                    <div className="main-table-filters-row" id="main-table-filters-two">
                        <div className="main-table-filters-menu-row">
                        <div className="main-table-filters-menu-refine-container">
                            <div className="main-table-filters-menu-refine">
                            <FontAwesomeIcon 
                            icon={faSlidersH}
                            style={
                                {width: "16px",}
                            } 
                            /><h5>REFINE</h5>
                            </div>
                        </div>
                        <div className="main-table-filters-menu-dropdown-container">
                            <div className="main-table-filters-menu-dropdown-filter" id="main-table-filters-menu-dropdown-filter-one">
                            <h5>Region ></h5>
                            </div>
                            <div className="main-table-filters-menu-dropdown-filter" id="main-table-filters-menu-dropdown-filter-two">
                            <h5>Market ></h5>
                            </div>
                            <div className="main-table-filters-menu-dropdown-filter" id="main-table-filters-menu-dropdown-filter-three">
                            <h5>Media Owner ></h5>
                            </div>
                            <div className="main-table-filters-menu-dropdown-filter" id="main-table-filters-menu-dropdown-filter-four">
                            <h5>End Date ></h5>
                            </div>
                            <div className="main-table-filters-menu-dropdown-filter" id="main-table-filters-menu-dropdown-filter-clear">
                            <div className="main-table-filters-menu-dropdown-filter-text-icon-container">
                                <h5>CLEAR FILTERS</h5><i className="material-icons" id="main-table-filters-menu-dropdown-filter-close-icon">close</i>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="main-table">
                    <table className="home-page-table">
                        <thead>
                            <tr className="home-page-table-header-row">
                                <th className="home-page-table-header-edit-column">EDIT</th>
                                <th className="home-page-table-text-column">
                                    <p className="home-page-table-column-header-text">Region</p>
                                </th>
                                <th className="home-page-table-text-column">
                                    <p className="home-page-table-column-header-text">Market</p>
                                </th>
                                <th className="home-page-table-text-column">
                                    <p className="home-page-table-column-header-text">Media Owner</p>
                                </th>
                                <th className="home-page-table-text-column">
                                    <p className="home-page-table-column-header-text">Contract Name</p>
                                </th>
                                <th className="home-page-table-money-column">
                                    <p className="home-page-table-column-header-text">Total Fee</p>
                                </th>
                                <th className="home-page-table-money-column">
                                    <p className="home-page-table-column-header-text">Services Total</p>
                                </th>
                                <th className="home-page-table-text-column">
                                    <p className="home-page-table-column-header-text">Underdelivered</p>
                                </th>
                                <th className="home-page-table-text-column">
                                    <p className="home-page-table-column-header-text">Contract End Date</p>
                                </th>
                                <th className="home-page-table-text-column">
                                    <p className="home-page-table-column-header-text">Relationship Owners</p>
                                </th>
                                <th className="home-page-table-text-column">
                                    <p className="home-page-table-column-header-text">Status</p>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows}
                        </tbody>
                    </table>
                    </div>
                    <div className="table-nav-container">
                    <div className="table-nav-container-left">
                        <h5>Showing <strong>1</strong> to <strong>{numRows}</strong> of <strong>{numRows} entries</strong></h5>
                    </div>
                    <div className="table-nav-container-right">
                        <h5><strong>next ></strong></h5>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Homepage; 