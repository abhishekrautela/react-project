import React from 'react';
import {MDBRow, MDBCol } from "mdbreact";
const Input = (props)=>{
    return(
                  <div className="form-group">
                  <MDBRow className="form-rows">
                    <MDBCol className="label-col" xs="6" sm="6">
                  <label className="signup-label"><i className={props.icon}></i>&nbsp;&nbsp;{props.field}: </label>
                  </MDBCol>
                  <MDBCol className="input-col" xs="6" sm="6">
                  <input type={props.type} name={props.name} className="form-control signup-input" id={props.id} required></input>
                  </MDBCol>
                  {(props.footer)?
                  <MDBRow className="form-rows">
                    <MDBCol xs="0" sm="6"></MDBCol>
                    <MDBCol xs="12" sm="6" className="signup-help">
                    <small className="form-text text-muted">{props.footer}</small>
                    </MDBCol>
                  </MDBRow>:null
                }
                  </MDBRow>
                  </div>
    )
}
export default Input;
