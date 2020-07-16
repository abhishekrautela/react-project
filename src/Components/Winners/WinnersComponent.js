import React from 'react';
import {MDBRow, MDBCol } from "mdbreact";
const WinnersComponent = (props) => {
    return (
        <MDBRow className="win-new">
            <MDBCol xs="1" sm="1" md="3" lg="3" xl="1"></MDBCol>
            <MDBCol className="win-comp-a" xs="4" sm="7" md="5" lg="5" xl="8">
                <img src={require('./thumbs/' + props.image)} className="img-fluid" />
                <div className="win-item">Just won: {props.name} <span className="winner-amount">{props.amount}</span>
                </div>
            </MDBCol>
            <MDBCol className="win-comp-b" xs="2" sm="2" md="2" lg="2" xl="2">
                <a href="#" className="btn btn-win-play"><span>Play</span></a>
            </MDBCol>
            <MDBCol xs="1" sm="2" md="2" lg="2" xl="1"></MDBCol>
        </MDBRow>
    )
}

export default WinnersComponent;