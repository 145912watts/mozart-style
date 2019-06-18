import React from 'react';
import profileImage from "./images/profile-image-placeholder.png";

import "./ContractTEST.css"

import Service from "./Service";

const serviceDummyData = {
    attachments: ["Lorem-Ipsum-Dolor-Sit-Amet.Pdf"],
    brand: "Lorem Ipsum",
    deliveredValue: "£XXX XXX",
    market: "Lorem Ipsum",
    measureDescription: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Aliquam At Porttitor Sem.",
    mediaOwnerConfirmation: "Lorem Ipsum",
    mediaType: "Lorem Ipsum",
    region: "Lorem Ipsum",
    revenueRecognition: "Lorem Ipsum",
    serviceDeliveryMethod: "Lorem Ipsum",
    serviceDescription: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Aliquam At Porttitor Sem.",
    serviceOwner: "Lorem Ipsum",
    serviceStatus: "Lorem Ipsum",
    totalValue: "£XXX XXX",
    ytdMeasure: "Lorem Ipsum",
}

class Contract extends React.Component {

    getContractUpperLeftColumn() {
        return (
            <div className="contract-page-upper-column" id="contract-page-upper-column-left">
                <div className="contract-page-upper-column-header" id="contract-page-upper-column-header-left">
                    <h5>LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT​​​​​​</h5>
                </div>
                <div className="contract-page-upper-column-content" id="contract-page-upper-column-content-profile-image">
                    <img alt="Profle" className="contract-page-upper-column-content-profile-image" src={profileImage}/>
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
            </div>            
        );
    };

    getContractUpperMiddleColumn() {
        return (
            <div className="contract-page-upper-column" id="contract-page-upper-column-middle">
                <div className="contract-page-upper-column-header">
                    <h4>KEY INFORMATION</h4>
                    <i className="material-icons">
                        edit
                    </i>
                </div>
                <div className="contract-page-upper-column-content">
                    <div className="contract-page-upper-column-content-form-container">
                        <form>
                            <div className="contract-page-upper-column-content-form-container-upper">
                                <div className="contract-page-upper-column-content-form-container-upper-left">
                                    {this.getContractUpperItem("CONTRACT NAME", "Lorem Ipsum")}
                                    {this.getContractUpperItem("FEE BILLING", "Lorem Ipsum")}
                                    {this.getContractUpperItem("FEE", "£XXX XXX")}
                                    {this.getContractUpperItem("SERVICES TOTAL", "£XXX XXX")}
                                </div>
                                <div className="contract-page-upper-column-content-form-container-upper-right">
                                    {this.getContractUpperItem("MEDIA OWNER", "Lorem Ipsum")}
                                    {this.getContractUpperItem("MEDIA TYPE", "Lorem Ipsum")}
                                    {this.getContractUpperItem("CONTRACT SIGNED", "£XXX XXX")}
                                </div>
                            </div>
                            <div className="contract-page-upper-column-content-form-container-lower">
                                <div className="contract-page-upper-column-content-form-container-lower-left">
                                    <i className="material-icons">
                                        attachment
                                    </i>
                                    <p>ATTACHMENTS</p>
                                    <div className="contract-page-upper-column-content-form-container-lower-left-content">
                                        <p>Lorem-Ipsum-Dolor-Sit-Ament.pdf</p>
                                    </div>
                                </div>
                                <div className="contract-page-upper-column-content-form-container-lower-right">
                                    <div className="contract-page-upper-column-content-form-container-lower-left" id="contract-page-upper-column-content-form-container-lower-left-top">
                                        <div className="contract-page-upper-column-content-form-container-lower-left-top-left">
                                            <i className="material-icons">
                                                date_range
                                            </i>
                                            <p>CONTRACT START</p>
                                        </div>
                                        <div className="contract-page-upper-column-content-form-container-lower-left-top-right">
                                            <p>00/00/00</p>
                                        </div>
                                    </div>
                                    <div className="contract-page-upper-column-content-form-container-lower-left" id="contract-page-upper-column-content-form-container-lower-left-bottom">
                                        <div className="contract-page-upper-column-content-form-container-lower-left-bottom-left">
                                            <i className="material-icons">
                                                date_range
                                            </i>
                                            <p>CONTRACT END</p>
                                        </div>
                                        <div className="contract-page-upper-column-content-form-container-lower-left-bottom-right">
                                            <p>00/00/00</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            
        );
    };

    getContractUpperItem(formKey, formVal) {
        return (
            <div className="contract-page-upper-column-content-form-container-upper-item">
                <div className="contract-page-upper-column-content-form-container-upper-item-key-container">
                    <p className="contract-page-upper-column-content-form-container-upper-item-key"><strong>{formKey}</strong></p>
                </div>
                <div className="contract-page-upper-column-content-form-container-upper-item-value-container">
                    <p className="contract-page-upper-column-content-form-container-upper-item-value">{formVal}</p>
                </div>
            </div>
        );
    };

    getContractComments() {
        let comments = [];
        let i = 0;

        let comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."

        while (i < 6) {
            comments.push(comment)
            i++;
        }

        return comments;
    }

    getContractUpperRightColumn() {
        return (
            <div className="contract-page-upper-column" id="contract-page-upper-column-right">
                <div className="contract-page-upper-column-header">
                    <h4>IN PROGRESS</h4>
                    <i className="material-icons">
                        edit
                    </i>
                </div>
                <div className="contract-page-upper-right-column-content">
                    <h4>CONTRACT COMMENTS</h4>
                    {this.getContractComments().map((item,i) => <p className="contract-page-upper-right-column-content" key={i}>{item}</p>)}
                </div>
            </div>
        );
    };
    
    render() {

        const services = [
            "one",
            "two"
        ];

        /*return (
            <div className="App-body">
                <div className="contract-page">
                    <div className="contract-page-upper">
                            {this.getContractUpperLeftColumn()}
                            {this.getContractUpperMiddleColumn()}
                    </div>
                </div>
            </div>
        );*/
        
        return (
            <div className="App-body">
                <div className="contract-page">
                    <div className="contract-page-upper">
                            {this.getContractUpperLeftColumn()}
                            {this.getContractUpperMiddleColumn()}
                            {this.getContractUpperRightColumn()}
                    </div>
                    <div className="contract-page-lower">
                        {services.map((item, i) => <Service data={serviceDummyData} key={i}/>)}
                    </div>
                </div>
            </div>
        );
    }
}

export default Contract; 

/*

                        <div className="contract-page-upper-column-container">
                            {this.getContractUpperLeftColumn()}
                            {this.getContractUpperMiddleColumn()}
                            {this.getContractUpperRightColumn()}
                        </div>
*/