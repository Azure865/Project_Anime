import React, { Component } from "react";
import axios from "axios";
class Signup extends Component {
  state = {
    SignupName: "",
    SignupEmail: "",
    SignupUserName: "",
    SignupPassword: "",
    SignupComPass: "",
    errorForm: {
      errorSignupName: "",
      errorSignupEmail: "",
      errorSignupUserName: "",
      errorSignupPassword: "",
      errorSignupComPass: "",
    },
    message: "",
  };
  handelSubmit = e => {
    let err = false;
    e.preventDefault();
    let errorForm = this.state.errorForm;
    let {
      SignupName,
      SignupEmail,
      SignupUserName,
      SignupPassword,
      SignupComPass,
    } = this.state;

    if (
      !SignupName.length &&
      !SignupEmail.length &&
      !SignupUserName.length &&
      !SignupPassword.length &&
      !SignupComPass.length
    ) {
      err = true;
    }
    Object.values(errorForm).forEach(error => {
      error.length > 0 && (err = true);
    });
    if (err) {
      this.setState({
        message: "The provided information was not Valid Please Try again",
      });
    } else {
      axios
        .post("http://localhost:3100/users", this.state)
        .then(res => {
          if (res.data === "Inserted") {
            console.log("Inserted");
          } else {
            console.log("Not Inserted");
          }
        })
        .catch(err => {
          console.error(err);
        });
    }
  };
  handelChange = e => {
    let { name, value } = e.target;
    let errorForm = this.state.errorForm;
    switch (name) {
      case "SignupName":
        errorForm.errorSignupName = value.match(/^[a-z A-Z]{3,20}$/)
          ? ""
          : "The Name should have at least six alphabets";
        break;
      case "SignupEmail":
        errorForm.errorSignupEmail = value.match(
          /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        )
          ? ""
          : "The Email in not valid";
        break;
      case "SignupUserName":
        errorForm.errorSignupUserName = value.match(
          /(?!^[0-9]*$)(?!^[a-zA-Z]*$)^([a-zA-Z0-9]{6,16})$/,
        )
          ? ""
          : "The username should have six alphanumeric charactors";
        break;
      case "SignupPassword":
        errorForm.errorSignupPassword = value.match(
          /(?!^[0-9]*$)(?!^[a-zA-Z]*$)^([a-zA-Z0-9]{6,16})$/,
        )
          ? ""
          : "The Password should have six alphanumeric charactors";
        break;
      case "SignupComPass":
        errorForm.errorSignupComPass = this.state.SignupPassword.match(value)
          ? ""
          : "The Password and Conformation password should be same";
        break;
    }
    this.setState({
      [name]: value,
    });
  };
  render() {
    return (
      <div className="signup">
        <p className="display-3 text-center ">Signup</p>
        {/* <span style={{ color: "red" }} >{this.state.message}</span> */}

        <form onSubmit={this.handelSubmit}>
          <div class="form-group">
            <label>Name:</label>
            <input
              className="form-control"
              type="text"
              name="SignupName"
              placeholder="Enter a valid name"
              onBlur={e => this.handelChange(e)}
            />
            <span class="text-danger " role="alert">
              {this.state.errorForm.errorSignupName}
            </span>
          </div>
          <div class="form-group">
            <label>Email:</label>
            <input
              className="form-control"
              type="email"
              name="SignupEmail"
              placeholder="Enter a valid Email"
              onBlur={e => this.handelChange(e)}
            />
            <span className="text-danger " role="alert">
              {this.state.errorForm.errorSignupEmail}
            </span>
          </div>
          <div class="form-group">
            <label>UserName:</label>
            <input
              className="form-control"
              type="text"
              name="SignupUserName"
              placeholder="Enter a valid UserName"
              onBlur={e => this.handelChange(e)}
            />
            <span className="text-danger " role="alert">
              {this.state.errorForm.errorSignupUserName}
            </span>
          </div>
          <div class="form-group">
            <label>Password:</label>
            <input
              className="form-control"
              type="password"
              name="SignupPassword"
              placeholder="Enter Alphanumeric Password"
              onBlur={e => this.handelChange(e)}
            />
            <span class="text-danger " role="alert">
              {this.state.errorForm.errorSignupPassword}
            </span>
          </div>
          <div class="form-group">
            <label>Conformation Password:</label>
            <input
              className="form-control"
              type="password"
              name="SignupComPass"
              placeholder="ReEnter the Password Again "
              onBlur={e => this.handelChange(e)}
            />
            <span className="text-danger " role="alert">
              {this.state.errorForm.errorSignupComPass}
            </span>
          </div>
          <button className="btn btn-primary btn-lg btn-block">Submit</button>
        </form>
      </div>
    );
  }
}
export default Signup;
