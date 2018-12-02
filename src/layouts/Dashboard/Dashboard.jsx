import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import NotificationSystem from "react-notification-system";
import axios from 'axios';

import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import Sidebar from "components/Sidebar/Sidebar";

import { style } from "variables/Variables.jsx";

import dashboardRoutes from "routes/dashboard.jsx";
// import { isNull } from "util";

class Dashboard extends Component {
  // constructor(props) {
    // super(props);
    // this.componentDidMount = this.componentDidMount.bind(this);
    // this.state = {
    //   _notificationSystem: null,
    //   exibirMsgErro: false
    // };
  // }

  // exibeMsg() {
  //   this.setState({
  //     exibirMsgErro: true
  //   })
  // }

  // componentWillMount() {
  //   if (localStorage.getItem('token') === null) {
  //     window.location.replace("/");
  //   };
  // }

  // componentDidMount() {
    // if (this.state.exibirMsgErro) {
    //   this.setState({ _notificationSystem: this.refs.notificationSystem });
    //   var _notificationSystem = this.refs.notificationSystem;
    //   _notificationSystem.addNotification({
    //     title: <span data-notify="icon" className="fa fa-info" />,
    //     message: (
    //       <div>
    //         Atenção! <br />
    //         Erro ao consultar do banco de dados.
    //       </div>
    //     ),
    //     level: "warning",
    //     position: "tr",
    //     autoDismiss: 15
    //   });
    // }
  // }

  // componentDidUpdate(e) {
  //   if (
  //     window.innerWidth < 993 &&
  //     e.history.location.pathname !== e.location.pathname &&
  //     document.documentElement.className.indexOf("nav-open") !== -1
  //   ) {
  //     document.documentElement.classList.toggle("nav-open");
  //   }
  //   if (e.history.action === "PUSH") {
  //     document.documentElement.scrollTop = 0;
  //     document.scrollingElement.scrollTop = 0;
  //     this.refs.mainPanel.scrollTop = 0;
  //   }
  // }
  componentWillMount() {
    const aut = localStorage.getItem('token');
    if(aut == null){
      window.location.replace("/login");
    }
    if (localStorage.getItem('token') !== null) {
      const aut = localStorage.getItem('token');
      axios.post("http://localhost:8080/auth/refresh_token",'',{
        headers: { 'Authorization': aut }
      }).then(resposta => {  
      if (resposta.status === 204) {
          const autorizacao = resposta.headers.authorization;
          localStorage.setItem('token',autorizacao);
        } else {
          alert("Nao autenticado!");
          window.location.replace("/login");
        }
      })

      .catch(erro => {
        console.log(erro);
        window.location.replace("/login");
      });
    }
  }

  render() {
    return (
      <div className="wrapper">
        <NotificationSystem ref="notificationSystem" style={style} />
        <Sidebar {...this.props} />
        <div id="main-panel" className="main-panel" ref="mainPanel">
          <Header {...this.props} />
          <Switch>
            {dashboardRoutes.map((prop, key) => {
              if (prop.name === "Notifications")
                return (
                  <Route
                    path={prop.path}
                    key={key}
                    render={routeProps => (
                      <prop.component
                        {...routeProps}
                        handleClick={this.handleNotificationClick}
                      />
                    )}
                  />
                );
              if (prop.redirect)
                return <Redirect from={prop.path} to={prop.to} key={key} />;
              return (
                <Route path={prop.path} component={prop.component} key={key} />
              );
            })}
          </Switch>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Dashboard;
