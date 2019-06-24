import React from 'react';

import Slider from "react-slick";

import "./ContractOwners.css"

class ContractOwnerPanel extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            listView: true,
            slideIndex: 0,
        };

        this.getListView = this.getListView.bind(this);
        this.handleListViewClick = this.handleListViewClick.bind(this);
    }

    getIndividualContractOwnerInfo(owner, i) {
        return (
            <div className="contract-page-upper-column-content" id="contract-page-upper-column-content-profile-image" key={i}>
                <img alt="Profle" className="contract-page-upper-column-content-profile-image" src={owner.image} style={{display: "inline"}}/>
                <i className="material-icons" id="contract-page-upper-column-content-image-edit">
                    edit
                </i>
                <div className="contract-page-upper-column-left-info" id="contract-page-upper-column-left-info-top">
                    <div className="contract-page-upper-column-left-info-top-name">
                        <p className="contract-page-upper-column-left-info-top-name-paragraph">NAME:</p>
                        <p className="contract-page-upper-column-left-info-top-name-paragraph">{owner.name}</p>
                    </div>
                    <div className="contract-page-upper-column-left-info-top-job-title">
                        <p className="contract-page-upper-column-left-info-top-job-title-paragraph">JOB TITLE:</p>
                        <p className="contract-page-upper-column-left-info-top-job-title-paragraph">{owner.title}</p>
                    </div>
                </div>
                <div className="contract-page-upper-column-left-info" id="contract-page-upper-column-left-info-bottom">
                    <div className="contract-page-upper-column-left-info-bottom-dates">
                        <i className="material-icons" id="contract-page-upper-column-left-info-bottom-dates-icon">
                            date_range
                        </i>
                        <p className="contract-page-upper-column-left-info-bottom-dates-paragraph">CREATED:</p>
                        <p className="contract-page-upper-column-left-info-bottom-dates-paragraph">{owner.dateCreated}</p>
                    </div>
                    <div className="contract-page-upper-column-left-info-bottom-dates" id="contract-page-upper-column-left-info-bottom-dates-right">
                        <i className="material-icons" id="contract-page-upper-column-left-info-bottom-dates-icon">
                            date_range
                        </i>
                        <p className="contract-page-upper-column-left-info-bottom-dates-paragraph">MODIFIED:</p>
                        <p className="contract-page-upper-column-left-info-bottom-dates-paragraph">{owner.dateModified}</p>
                    </div>
                </div>
            </div>    
        );
    }

    handleListViewClick(e, i) {
        this.slider.slickGoTo(e.target.getAttribute('data-key'), true);
        this.setState({
            listView: !this.state.listView,
        })
    }

    getContractOwnerListItem(owner, i) {
        return (
            <li className="contract-owner-list-item" onClick={this.handleListViewClick} data-key={i} key={i}>
                <div className="contract-owner-list-container-contract-details-container" data-key={i} onClick={this.handleListViewClick}>
                    <h5 data-key={i} onClick={this.handleListViewClick}>{owner.name}</h5>
                    <p className="contract-owner-list-container-contract-details-container-paragraph" data-key={i} onClick={this.handleListViewClick}>{owner.title}</p>
                </div>
                <div className="contract-owner-list-container-contract-image-container" data-key={i} onClick={this.handleListViewClick}>
                    <img alt="Profle" className="contract-page-upper-column-content-profile-image" id="contract-owner-list-image" data-key={i} onClick={this.handleListViewClick} src={owner.image}/>
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
                    {
                        this.props.owners.map((owner, i) => {
                            return this.getContractOwnerListItem(owner, i);
                        })
                    }
                </ul>
            </div>
        );
    }

    getSliderView() {

        const settings = {
            dots: false,
            infinite: true,
            initialSlide: 1,
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 500,
        };

        let sliderStyle = {
        };

        if (this.state.listView) {
            sliderStyle["marginTop"] = "-550px";
        }

        return (
            <div style={sliderStyle}>
                <Slider ref={slider => (this.slider = slider)} {...settings}>
                    {
                        this.props.owners.map((owner, i) => {
                            return this.getIndividualContractOwnerInfo(owner, i);
                        })
                    }
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

    render() {
        return this.getPanel();
    }
}

export default ContractOwnerPanel;