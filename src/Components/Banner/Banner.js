import React from "react";
import {MDBRow, MDBCol } from "mdbreact";
import Winners from '../Winners/Winners';
import Jackpot from '../Jackpot/Jack';
import Zoom from 'react-reveal/Zoom';
import LazyLoad from 'react-lazyload';
const Banner = () => {
  return (
    <LazyLoad  offset={0}>
    <Zoom delay={2000}>
      <MDBRow className="winner-jackpot-section" >
        <MDBCol className="winner-section" xs="12" sm="12" md="12" lg="12" xl="5"><Winners/></MDBCol>
        <MDBCol className="jackpot-section" xs="12" sm="12" md="12" lg="12" xl="7"><Jackpot/></MDBCol>
      </MDBRow>
      </Zoom>
      </LazyLoad>
  );
}

export default Banner;