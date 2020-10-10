import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import axios from "axios";
import routers from "../AppRouters";
import Search from "../Search/Search";
import OK from '../../assets/image/ok.png'
class NavLink extends Component {
  state = {
    Links: [
      { id: "1", to: "/", link: "Home" },
      // { id: "2", to: "/about", link: "About" },
      { id: "3", to: "/contact", link: "Feed Back" },
      { id: "4", to: "/signup_login", link: "Register" },
      { id: "5", to: "/search", link: "Search" },
    ],
    login: false,
  };
  componentDidMount() {
    axios.get("http://localhost:3100/login").then(res => {
      this.setState({
        login: true,
      });
    });
  }
  render() {
    const navLinks = this.state.Links.map(li => {
      return (
        <div key={this.state.Links.id}>
          <Link
            to={li.to}
            className="nav-link collapse navbar-collapse text-light"
            id="navbarTogglerDemo03"
          >
            {li.link}
          </Link>
        </div>
      );
    });
    const callOfrouters = routers.map(rout => {
      return (
        <Route path={rout.path} component={rout.component} exact={rout.exact} />
      );
    });
    return (
      <BrowserRouter>
        <section>
          <nav className=" navbar fixed-top navbar-expand-xl navbar-dark bg-dark">
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarTogglerDemo03"
              aria-controls="navbarTogglerDemo03"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <img src={OK} alt="icon" />
            <Link className="navbar-brand text-light" to={"/"}>Anime Sekai</Link>
            {navLinks}
            {/* <form className="search">
              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" name="search"
              onChange={this.userSearch}
              />
              <button className="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
            </form> */}
          </nav>
          <main>
            <div className="content-area">
              <Switch>{callOfrouters}</Switch>
            </div>
          </main>
        </section>
      </BrowserRouter>
    );
  }
}

export default NavLink;
