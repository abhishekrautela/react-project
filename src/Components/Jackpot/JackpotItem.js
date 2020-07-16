import React from 'react';
import {  MDBCard, MDBCardBody, MDBCardImage, MDBCardText} from 'mdbreact';
const JackpotItem = (props) => {
    return (
      <MDBCard >
        <MDBCardImage className="img-fluid" src={require('../../assets/images/slots/' + props.image)} waves />
        <MDBCardBody>
          {/* <MDBCardTitle>{props.game}</MDBCardTitle> */}
          <MDBCardText>
          <span className="jackpot-text"> JACKPOT : </span>
          <span className="jackpot-currency">$</span> {props.amount}
          </MDBCardText>
          {/* <MDBBtn href="#" className="btn btn-play">Play</MDBBtn> */}
        </MDBCardBody>
      </MDBCard>
    )
}
export default JackpotItem;