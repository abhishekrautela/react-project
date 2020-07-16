import React, { Component } from 'react';
import './Sidebar.css';
import {MDBRow} from "mdbreact";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link } from 'react-router-dom';
import { faHome,faAddressCard, faHandHoldingUsd,faGamepad,faSmile,faDesktop,faShoppingCart} from '@fortawesome/free-solid-svg-icons';
class Sidebar extends Component {
    openNav = () => {
        document.getElementsByClassName("sidenav")[0].style.width = "250px";
        document.getElementsByClassName("sidemain")[0].style.marginLeft = "250px";
        document.getElementById("main").style.visibility = "hidden";
        document.getElementById('content-container').style.marginLeft="250px";
    }
    closeNav = () => {
        document.getElementsByClassName("sidenav")[0].style.width = "0";
        document.getElementsByClassName("sidemain")[0].style.marginLeft = "0";
        document.getElementById("main").style.visibility = "visible";
        document.getElementById('content-container').style.marginLeft="0"; 
    }
    render() {
        return (
            <React.Fragment >
                <div id="mySidenav" className="sidenav">
                    <span className="closebtn" onClick={this.closeNav}>&#8592;</span>
                    <div className="sidebar-content">
                        <div className="sidebar-data" >
                            <MDBRow>
                                <div className="sidebar-icon">
                                <FontAwesomeIcon icon={faHome} />
                                </div>
                                <div className="sidebar-links">
                                    <Link to='/' className="sidelink">Home</Link>
                                </div>
                            </MDBRow>
                        </div>
                    </div>
                    <div className="sidebar-content">
                        <div className="sidebar-data">
                            <MDBRow>
                                <div className="sidebar-icon">
                                <FontAwesomeIcon icon={faAddressCard} />
                                </div>
                                <div className="sidebar-links">
                                <Link to='/about' className="sidelink">About Us</Link>
                                </div>
                            </MDBRow>
                        </div>
                    </div>
                    <div className="sidebar-content">
                        <div className="sidebar-data">
                            <MDBRow>
                                <div className="sidebar-icon">
                                <FontAwesomeIcon icon={faHandHoldingUsd} />
                                </div>
                                <div className="sidebar-links">
                                <Link to='/pricing' className="sidelink">Pricing</Link>
                                </div>
                            </MDBRow>
                        </div>
                    </div>
                    <div className="sidebar-content">
                        <div className="sidebar-data">
                            <MDBRow>
                                <div className="sidebar-icon">
                                <FontAwesomeIcon icon={faGamepad} />
                                </div>
                                <div className="sidebar-links">
                                <Link to='/games' className="sidelink">Games</Link>
                                </div>
                            </MDBRow>
                        </div>
                    </div>
                    <div className="sidebar-content">
                        <div className="sidebar-data">
                            <MDBRow>
                                <div className="sidebar-icon">
                                <FontAwesomeIcon icon={faSmile} />
                                </div>
                                <div className="sidebar-links">
                                <Link to='/offers' className="sidelink">Offers</Link>
                                </div>
                            </MDBRow>
                        </div>
                    </div>
                    {/* <div className="sidebar-content">
                        <div className="sidebar-data">
                            <MDBRow>
                                <div className="sidebar-icon">
                                <FontAwesomeIcon icon={faDesktop} />
                                </div>
                                <div className="sidebar-links">
                                    <a href="#" className="sidelink">Live Casino</a>
                                </div>
                            </MDBRow>
                        </div>
                    </div> */}
                    <div className="sidebar-content">
                        <div className="sidebar-data">
                            <MDBRow>
                                <div className="sidebar-icon">
                                <FontAwesomeIcon icon={faShoppingCart} />
                                </div>
                                <div className="sidebar-links">
                                <Link to="/payment-methods" className="sidelink">Payment Methods</Link>
                                </div>
                            </MDBRow>
                        </div>
                    </div>
                </div>
                <div id="main" className="sidemain" >
                    <span className="toggler" onClick={this.openNav}>&#9776;</span>
                </div>
            </React.Fragment>
        )
    }
}
export default Sidebar;
