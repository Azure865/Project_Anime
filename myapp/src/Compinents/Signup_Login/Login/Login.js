import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
class Login extends Component {
  state = {
    LoginUserName: null,
    LoginPass: null,
    errorForm: {
      errorName: null,
      errorPass: null,
    },
    message: null,
  };

  handelSubmit = e => {
    e.preventDefault();

    let { errorName, errorPass } = this.state.errorForm;
    let { LoginUserName, LoginPass } = this.state;
    if (errorName === null && errorPass === null) {
      this.setState({
        message: null,
      });
      if (LoginUserName === null && LoginPass === null) {
        this.setState({
          message: "Not A vlaid user Please try again",
        });
      } else {
        axios
          .post("http://localhost:3100/login", this.state)
          .then(res => {
            if (res.data == "Invalid user name of password") {
              this.setState({
                message: "The use in not found",
              });
            } else if (res.data == "The user name and password matches") {
              this.props.history.push("/");
            }
          })
          .catch(err => {
            console.error(err);
          });
      }
    } else {
      this.setState({
        message: "Not A vlaid user Please try again",
      });
    }
  };
  handelChange = e => {
    let errorForm = this.state.errorForm;
    let { name, value } = e.target;
    console.log(name, value);
    switch (name) {
      case "LoginUserName":
        errorForm.errorName = value.match(
          /(?!^[0-9]*$)(?!^[a-zA-Z]*$)^([a-zA-Z0-9]{6,16})$/,
        )
          ? null
          : "The UserName should have six alphanumeric characters";

        break;
      case "LoginPass":
        errorForm.errorPass = value.match(
          /(?!^[0-9]*$)(?!^[a-zA-Z]*$)^([a-zA-Z0-9]{6,16})$/,
        )
          ? null
          : "The Password should have six alphanumeric characters";

        break;
      default:
        break;
    }
    this.setState(
      {
        errorForm,
        [name]: value,
      },
      () => console.log(this.state),
    );
  };
  render() {
    return (
      <div className="login">
        <p class="display-3 text-center ">Login</p>
        {/* <span style={{ color: "red" }}>{this.state.message}</span> */}
        <form onSubmit={this.handelSubmit}>
          <span class="text-danger " role="alert">
            {this.state.message}
          </span>
          <div class="form-group">
            <label>UserName:</label>
            <input
              class="form-control"
              type="text"
              name="LoginUserName"
              placeholder="Enter a valid UserName"
              onBlur={e => this.handelChange(e)}
            />
            <span class="text-danger " role="alert">
              {this.state.errorForm.errorName}
            </span>
          </div>
          <div class="form-group">
            <label>Password:</label>
            <input
              class="form-control"
              type="Password"
              name="LoginPass"
              placeholder="Enter a valid Password"
              onBlur={this.handelChange}
            />
            <span class="text-danger " role="alert">
              {this.state.errorForm.errorPass}
            </span>
          </div>
          <button class="btn btn-primary btn-lg btn-block">Submit</button>
        </form>
      </div>
    );
  }
}
export default withRouter(Login);
