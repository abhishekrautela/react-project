import React from "react";
import './Signup.css';
import Input from './Input';
import { MDBRow, MDBCol } from "mdbreact";
const Signup = () => {
  return (
    <React.Fragment>
      <a aria-current="page" className="nav-link Ripple-parent active" data-test="nav-link" id="nav-links" data-target="#signup" data-toggle="modal" data-backdrop="false">Signup</a>
      <div className="modal fade" id="signup">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="signup-header">Signup</h3>
              <button type="button" className="close" data-dismiss="modal"> &times; </button>
            </div>
            <div className="modal-body">
              <form className="form-inline">
                <Input field="First Name" type="text" name="fname" icon="fas fa-user" />
                <Input field="Last Name" type="text" name="lname" icon="fas fa-user" footer="All withdrawals will be made to the same name." />
                <div className="form-group">
                  <MDBRow className="form-rows">
                    <MDBCol className="label-col-radio" xs="6" sm="6">
                      <label className="signup-label"><i className="fas fa-venus-mars"></i>&nbsp;&nbsp;Gender: </label>
                    </MDBCol>
                    <MDBCol className="label-col-radio" xs="3" sm="3" >
                      <label >Male: </label>
                      <input type="radio" name="gender" className="form-check-input" required></input>
                    </MDBCol>
                    <MDBCol className="label-col-radio" xs="3" sm="3">
                      <label >Female: </label>
                      <input type="radio" name="gender" className="form-check-input" required></input>
                    </MDBCol>
                  </MDBRow>
                </div>
                <Input field="Date of Birth" type="date" name="dob" icon="fas fa-calendar-alt" id="dob" />
                <Input field="Username" type="text" name="uname" icon="fas fa-user" footer="Between 6 to 10 alphanumeric (A-Z, a-z, 0-9) character only." />
                <Input field="Email" type="email" name="email" icon="fas fa-envelope" footer="Please provide an active email address to facilitate future payment related correspondences, eg withdrawals, bonuses." />
                <Input field="Password" type="password" icon="fas fa-user-lock" name="password" footer="Between 6 to 10 alphanumeric (A-Z, a-z, 0-9) character only." />
                <Input field="Confirm Password" type="password" name="cpassword" icon="fas fa-user-lock" />
                <div className="form-group">
                  <MDBRow className="form-rows">
                    <MDBCol className="label-col" xs="6" sm="6">
                      <label className="signup-label"><i className="fas fa-globe"></i>&nbsp;&nbsp;Country: </label>
                    </MDBCol>
                    <MDBCol className="input-col" xs="6" sm="6">
                      <select name="country" className="custom-select">
                        <option selected>Select Your Country</option>
                        <option value="US">United States</option>
                        <option value="Germany">Germany</option>
                        <option value="France">France</option>
                      </select>
                    </MDBCol>
                  </MDBRow>
                </div>
                <Input field="Contact Number" type="text" name="contact" icon="fas fa-phone phone" footer="Country Code + Mobile number, e.g. 91999999 Please provide a valid contact number for future promotion and payment correspondences." />
                <div className="form-group">
                  <MDBRow className="row form-rows">
                    <MDBCol className="label-col" xs="6" sm="6">
                      <label className="signup-label"><i className="fab fa-bitcoin"></i>&nbsp;&nbsp;Preffered Currency: </label>
                    </MDBCol>
                    <MDBCol className="input-col" xs="6" sm="6">
                      <select name="currency" className="custom-select">
                        <option selected>Select preffered currency</option>
                        <option value="bitcoin">Bitcoin</option>
                        <option value="ethereum">Ethereum</option>
                        <option value="ripple">Ripple</option>
                      </select>
                    </MDBCol>
                  </MDBRow>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button className="btn-block btn-signup" data-dismiss="modal" type="submit">SignUp</button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Signup;