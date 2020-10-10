import React, { Component } from "react";
import Signup from "./Signup/Signup";
import Login from "./Login/Login";
class Signup_Login extends Component {
  state = {
    pageinfo: false,
  };
  handelToddle = () => {
    this.setState({
      pageinfo: !this.state.pageinfo,
    });
  };
  render() {
    return (
      <div className="Register">
        {this.state.pageinfo ? (
          <>
            <Signup></Signup>
            <small class="font-weight-light h-4">
              Already Have an Accout?
              <span onClick={this.handelToddle}> Click here </span>
            </small>
          </>
        ) : (
          <>
            <Login></Login>
            <small class="font-weight-light">
              Dont Have an Accout?
              <span onClick={this.handelToddle}> Click here </span>
            </small>
          </>
        )}
      </div>
    );
  }
}
export default Signup_Login;
