import React from 'react';

import Service from "./Service";
import ContractOwnerPanel from "./ContractOwnerPanel";

import "./Contract.css";

import profileImage1 from "./images/profile-images/profile-image-placeholder1.png";
import profileImage2 from "./images/profile-images/profile-image-placeholder2.png";
import profileImage3 from "./images/profile-images/profile-image-placeholder3.png";
import profileImage4 from "./images/profile-images/profile-image-placeholder4.png";
import profileImage5 from "./images/profile-images/profile-image-placeholder5.jpg";
import profileImage6 from "./images/profile-images/profile-image-placeholder6.jpg";
import profileImage7 from "./images/profile-images/profile-image-placeholder7.jpg";
import profileImage8 from "./images/profile-images/profile-image-placeholder8.jpg";

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

const contractOwnerPanelListDummyData = [
    {
        dateCreated: "00/00/00",
        dateModified: "00/00/00",
        id: "1",
        image: profileImage1,
        name: "Lorem Ipsum",
        title: "Lorem Ipsum Dolor Sit Amet",
    },
    {
        dateCreated: "00/00/00",
        dateModified: "00/00/00",
        id: "2",
        image: profileImage6,
        name: "Lorem Ipsum",
        title: "Lorem Ipsum Dolor Sit Amet",
    },
    {
        dateCreated: "00/00/00",
        dateModified: "00/00/00",
        id: "3",
        image: profileImage7,
        name: "Lorem Ipsum",
        title: "Lorem Ipsum Dolor Sit Amet",
    },
    {
        dateCreated: "00/00/00",
        dateModified: "00/00/00",
        id: "4",
        image: profileImage8,
        name: "Lorem Ipsum",
        title: "Lorem Ipsum Dolor Sit Amet",
    },
    {
        dateCreated: "00/00/00",
        dateModified: "00/00/00",
        id: "5",
        image: profileImage5,
        name: "Lorem Ipsum",
        title: "Lorem Ipsum Dolor Sit Amet",
    },
    {
        dateCreated: "00/00/00",
        dateModified: "00/00/00",
        id: "6",
        image: profileImage4,
        name: "Lorem Ipsum",
        title: "Lorem Ipsum Dolor Sit Amet",
    },
    {
        dateCreated: "00/00/00",
        dateModified: "00/00/00",
        id: "7",
        image: profileImage1,
        name: "Lorem Ipsum",
        title: "Lorem Ipsum Dolor Sit Amet",
    },
    {
        dateCreated: "00/00/00",
        dateModified: "00/00/00",
        id: "8",
        image: profileImage2,
        name: "Lorem Ipsum",
        title: "Lorem Ipsum Dolor Sit Amet",
    },
]

class Contract extends React.Component {

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

        const contractPageUpperHeight = window.screen.height * 0.61;

        const services = [
            "one",
            "two"
        ];
        
        return (
            <div className="App-body">
                <div className="contract-page">
                    <div className="contract-page-upper" style={{height: contractPageUpperHeight}}>
                        <ContractOwnerPanel 
                            owners={contractOwnerPanelListDummyData}
                        />
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
