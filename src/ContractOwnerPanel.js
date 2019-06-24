import React from 'react';
import profileImage from "./images/profile-image-placeholder.png";

import Slider from "react-slick";

import "./ContractOwners.css"

class ContractOwnerPanel extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            listView: false,
        }

        this.getListView = this.getListView.bind(this);
        this.handleListViewClick = this.handleListViewClick.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    getIndividualContractOwnerInfo() {
        return (
            <div className="contract-page-upper-column-content" id="contract-page-upper-column-content-profile-image">
                <img alt="Profle" className="contract-page-upper-column-content-profile-image" src={profileImage} style={{display: "inline"}}/>
                <i className="material-icons" id="contract-page-upper-column-content-image-edit">
                    edit
                </i>
                <div className="contract-page-upper-column-left-info" id="contract-page-upper-column-left-info-top">
                    <div className="contract-page-upper-column-left-info-top-name">
                        <p>NAME:</p>
                        <p>Lorem Ipsum</p>
                    </div>
                    <div className="contract-page-upper-column-left-info-top-job-title">
                        <p>JOB TITLE:</p>
                        <p>Lorem Ipsum Dolor Sit Amet</p>
                    </div>
                </div>
                <div className="contract-page-upper-column-left-info" id="contract-page-upper-column-left-info-bottom">
                    <div className="contract-page-upper-column-left-info-bottom-dates">
                        <i className="material-icons">
                            date_range
                        </i>
                        <p>CREATED:</p>
                        <p>00/00/00</p>
                    </div>
                    <div className="contract-page-upper-column-left-info-bottom-dates" id="contract-page-upper-column-left-info-bottom-dates-right">
                        <i className="material-icons">
                            date_range
                        </i>
                        <p>MODIFIED:</p>
                        <p>00/00/00</p>
                    </div>
                </div>
            </div>    
        );
    }

    handleListViewClick() {
        this.setState({
            listView: !this.state.listView,
        })
    }

    getContractOwnerListItem() {
        return (
            <li className="contract-owner-list-item">
                <div className="contract-owner-list-container-contract-details-container">
                    <h5>Lorem Ipsum</h5>
                    <p>Lorem Ipsum Dolor Sit Amet</p>
                </div>
                <div className="contract-owner-list-container-contract-image-container">
                    <img alt="Profle" className="contract-page-upper-column-content-profile-image" id="contract-owner-list-image" src={profileImage}/>
                </div>
            </li>
        );
    }
 
    getListView(visible) {
        let listViewStyle;

        if (visible) {
            listViewStyle = {
                backgroundColor: "#2b2b2b",
                height: "100%",
                overflow: "hidden",
                width: "100%",
            }
        } else {
            listViewStyle = {
                marginTop: "800px",
                overflow: "hidden",
                width: "0",
                height: "0",
            }
        }

        return (
            <div className="contract-owner-list-container" style={listViewStyle}>
                <ul>
                    {this.getContractOwnerListItem()}
                    {this.getContractOwnerListItem()}
                    {this.getContractOwnerListItem()}
                    {this.getContractOwnerListItem()}
                </ul>
            </div>
        );
    }

    getSliderView() {

        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };

        let sliderStyle = {
        };

        if (this.state.listView) {
            sliderStyle["marginTop"] = "-550px";
        }

        return (
            <div style={sliderStyle}>
                <Slider {...settings}>
                    {this.getIndividualContractOwnerInfo()}
                    {this.getIndividualContractOwnerInfo()}
                    {this.getIndividualContractOwnerInfo()}
                    {this.getIndividualContractOwnerInfo()}
                </Slider>
            </div>
        );
    }

    getPanel() {
        const listView = this.getListView(this.state.listView);
        const sliderView = this.getSliderView();

        return (
            <div className="contract-page-upper-column" id="contract-page-upper-column-left">
                <div className="contract-page-upper-column-header" id="contract-page-upper-column-header-left">
                    <h4>KEY PEOPLE</h4>
                    <i className="material-icons" id="list-view-icon" onClick={this.handleListViewClick}>
                        list
                    </i>
                </div>
                {sliderView}
                {listView}
            </div>
        );
    }

    handleClick(e) {
        if (e.target.id !== "list-view-icon") {
            if (this.state.listView) {
                this.setState({
                    listView: !this.state.listView,
                })
            }
        }
    }

    componentDidMount() {
        window.addEventListener('click', this.handleClick);
    }

    componentWillUnmount() {
        window.removeEventListener('click', this.handleClick);
    }

    render() {
        return this.getPanel();
    }
}

export default ContractOwnerPanel;