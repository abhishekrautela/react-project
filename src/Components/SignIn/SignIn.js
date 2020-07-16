import React from "react";
import './SignIn.css';
import Input from './Input';
const SignIn = () => {
  return (
      <React.Fragment>
      <a aria-current="page" className="nav-link Ripple-parent active" data-test="nav-link" id="nav-links"  data-target="#signin" data-toggle="modal" data-backdrop="false">SignIn</a>
      <div className="modal fade" id="signin">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content modal-signin">
          <div className="modal-header">
            <h3 className="signin-header">SignIn</h3>
            <button type="button" className="close" data-dismiss="modal"> &times; </button>
          </div>
          <div className="modal-body">
            <form>
            <Input field="Email" type="email" name="email" icon="fas fa-envelope" />
            <Input field="Password" type="password" name="password" icon="fas fa-user-lock" />
            </form>
          </div>
          <div className="modal-footer">
            <button className="btn-block btn-signin" data-dismiss="modal">SignIn</button>
          </div>
        </div>
      </div>
      </div>
      </React.Fragment>
  );
}

export default SignIn;