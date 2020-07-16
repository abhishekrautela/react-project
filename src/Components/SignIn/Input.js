import React from 'react';
import {MDBRow, MDBCol } from "mdbreact";
const Input = (props)=>{
    return(
                  <div className="form-group">
                  <MDBRow className="form-rows">
                    <MDBCol className="label-col-sign" xs="6" sm="6">
                  <label className="signin-label"><i className={props.icon}></i>&nbsp;&nbsp;{props.field}: </label>
                  </MDBCol>
                  <MDBCol className="input-col-sign" xs="6" sm="6">
                  <input type={props.type} name={props.name} className="form-control signin-input" id={props.id} required></input>
                  </MDBCol>
                  </MDBRow>
                  </div>
    )
}
export default Input;
