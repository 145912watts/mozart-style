import React from 'react';
import Collapsible from 'react-collapsible';

class Service extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
        }

        this.handleClick = this.handleClick.bind(this);
        this.getServiceTableItem = this.getServiceTableItem.bind(this);
        this.getServiceTableItemDescriptionAttachment = this.getServiceTableItemDescriptionAttachment.bind(this);
        this.getServiceCollapsibleContent = this.getServiceCollapsibleContent.bind(this);
    }

    getServiceTableItem(k, v) {
        return (
            <div className="serviceTableItem">
                <div className="collapsibleContainerContentColumnDivider" id="collapsibleContainerContentColumnDivider-left">
                    <p>{k}</p>
                </div>
                <div className="collapsibleContainerContentColumnDivider" id="collapsibleContainerContentColumnDivider-right">
                    <p>{v}</p>
                </div>
            </div>
        );
    }

    getServiceTableItemDescriptionAttachment(k, v) {
        return (
            <div className="serviceTableItem" id="getServiceTableItemDescriptionAttachment">
                <div className="collapsibleContainerContentColumnDivider" id="collapsibleContainerContentColumnDivider-top">
                    <p>{k}</p>
                </div>
                <div className="collapsibleContainerContentColumnDivider" id="collapsibleContainerContentColumnDivider-bottom">
                    <p>{v}</p>
                </div>
            </div>
        );
    }

    getServiceContainerHeader() {
        return(
            <div className="serviceContainerHeader">
                <div className="serviceContainerHeaderTitlesContainer">
                    <div className="serviceContainerHeaderColumn" id="serviceContainerHeaderColumnText">
                        <div className="serviceContainerHeaderColumnKeyLeft">SERVICE STATUS</div>
                        <div className="serviceContainerHeaderColumnValueRight">{this.props.data.serviceStatus}</div>
                    </div>
                    <div className="serviceContainerHeaderColumn" id="serviceContainerHeaderColumnText">
                        <div className="serviceContainerHeaderColumnKeyLeft">DELIVERED VALUE</div>
                        <div className="serviceContainerHeaderColumnValueRight">{this.props.data.deliveredValue}</div>
                    </div>
                    <div className="serviceContainerHeaderColumn" id="serviceContainerHeaderColumnText">
                        <div className="serviceContainerHeaderColumnKeyLeft">TOTAL VALUE</div>
                        <div className="serviceContainerHeaderColumnValueRight">{this.props.data.totalValue}</div>
                    </div>
                    <div className="serviceContainerHeaderColumn" id="serviceContainerHeaderColumnText">
                        <div className="serviceContainerHeaderColumnKeyLeft">SERVICE OWNER</div>
                        <div className="serviceContainerHeaderColumnValueRight">
                            {this.props.data.serviceOwner}
                        </div>
                    </div>
                    <div className="serviceContainerHeaderColumn" id="serviceContainerHeaderColumnIcons">
                        <i className="material-icons" id="service-container-header-column-edit-icon">
                            edit
                        </i>
                        <i className="material-icons" id="service-container-header-column-down-arrow-icon" onClick={this.handleClick}>
                            keyboard_arrow_down
                        </i>
                    </div>
                </div>
            </div>
        );
    }

    getServiceCollapsibleContentBUG() {
        console.log(this.props.data);
        return(
            <div className="collapsibleContainerContent">
                <div className="collapsibleContainerContentColumn" id="collapsibleContainerContentColumnLeft">
                    {this.getServiceTableItem("SERVICE STATUS", this.props.data.serviceStatus)}
                    {this.getServiceTableItem("DELIVERED VALUE", this.props.data.deliveredValue)}
                    {this.getServiceTableItem("TOTAL VALUE", this.props.data.totalValue)}
                    {this.getServiceTableItem("SERVICE OWNER", this.props.data.serviceOwner)}
                    {this.getServiceTableItemDescriptionAttachment("SERVICE DESCRIPTION", this.props.data.serviceDescription)}
                </div>
                <div className="collapsibleContainerContentColumn" id="collapsibleContainerContentColumnMiddle">
                    {this.getServiceTableItem("MEDIA TYPE", this.props.data.mediaType)}
                    {this.getServiceTableItem("MARKET", this.props.data.market)}
                    {this.getServiceTableItem("BRAND", this.props.data.brand)}
                    {this.getServiceTableItem("REGION", this.props.data.region)}
                    {this.getServiceTableItemDescriptionAttachment("MEASURE DESCRIPTION", this.props.data.measureDescription)}
                </div>
                <div className="collapsibleContainerContentColumn" id="collapsibleContainerContentColumnRight">
                    {this.getServiceTableItem("REVENUE RECOGNITION", "value")}
                    {this.getServiceTableItem("SERVICE DELIVERY METHOD", "value")}
                    {this.getServiceTableItem("YTD MEASURE", "value")}
                    {this.getServiceTableItem("MEDIA OWNER CONFIRMATION", "value")}
                    {this.getServiceTableItemDescriptionAttachment("ATTACHMENTS", "value")}
                </div>
            </div>
        );
    }

    getServiceCollapsibleContent() {
        console.log(this.props);
        return(
            <div className="collapsibleContainerContent">
                <div className="collapsibleContainerContentColumn" id="collapsibleContainerContentColumnLeft">
                    {this.getServiceTableItem("SERVICE STATUS", this.props.data.serviceStatus)}
                    {this.getServiceTableItem("DELIVERED VALUE", this.props.data.deliveredValue)}
                    {this.getServiceTableItem("TOTAL VALUE", this.props.data.totalValue)}
                    {this.getServiceTableItem("SERVICE OWNER", this.props.data.serviceOwner)}
                    {this.getServiceTableItemDescriptionAttachment("SERVICE DESCRIPTION", this.props.data.serviceDescription)}
                </div>
                <div className="collapsibleContainerContentColumn" id="collapsibleContainerContentColumnMiddle">
                    {this.getServiceTableItem("MEDIA TYPE", this.props.data.mediaType)}
                    {this.getServiceTableItem("MARKET", this.props.data.market)}
                    {this.getServiceTableItem("BRAND", this.props.data.brand)}
                    {this.getServiceTableItem("REGION", this.props.data.region)}
                    {this.getServiceTableItemDescriptionAttachment("MEASURE DESCRIPTION", this.props.data.measureDescription)}
                </div>
                <div className="collapsibleContainerContentColumn" id="collapsibleContainerContentColumnRight">
                    {this.getServiceTableItem("REVENUE RECOGNITION", this.props.data.revenueRecognition)}
                    {this.getServiceTableItem("SERVICE DELIVERY METHOD", this.props.data.serviceDeliveryMethod)}
                    {this.getServiceTableItem("YTD MEASURE", this.props.data.ytdMeasure)}
                    {this.getServiceTableItem("MEDIA OWNER CONFIRMATION", this.props.data.mediaOwnerConfirmation)}
                    {this.getServiceTableItemDescriptionAttachment("ATTACHMENTS", this.props.data.attachments[0])}
                </div>
            </div>
        );
    }

    handleClick() {
        this.setState({
            open: !this.state.open
        })
    }

    render() {
       return (
            <Collapsible className="serviceContainer" contentOuterClassName="serviceContentCollapsible" openedClassName="serviceContainer" transitionTime={150} trigger={this.getServiceContainerHeader()}>
                {this.getServiceCollapsibleContent()}
            </Collapsible>
       );
    }
}

export default Service;