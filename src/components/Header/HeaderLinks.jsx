import React, { Component } from "react";
import { NavItem, Nav } from "react-bootstrap";
// import dashboardRoutes from "../../routes/dashboard";

class HeaderLinks extends Component {

  cleanToken = event => {
    localStorage.removeItem('token');

    // let link = window.location.href;
    // link.replace("dashboard", "login");
    // window.location.href = link;

    window.location.replace("/login");

    // console.log( link );
  }

  render() {
    return (
      <div>
        <Nav pullRight>
          <NavItem onClick={this.cleanToken}>
            Sair da Central
          </NavItem>
        </Nav>
      </div>
    );
  }
}

export default HeaderLinks;
