import React from "react";
import ReactDOM from "react-dom";

import Login from "layouts/Login/Login.jsx";
import Dashboard from "layouts/Dashboard/Dashboard.jsx";
import Noticias from "views/Noticias/Noticias";
import Salas from "views/Salas/Salas";
import AchadosPerdidos from "views/AchadosPerdidos/AchadosPerdidos";

import { BrowserRouter, Route, Switch } from "react-router-dom";


import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/sass/light-bootstrap-dashboard.css?v=1.2.0";
import "./assets/css/demo.css";
import "./assets/css/pe-icon-7-stroke.css";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={Login} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path='/noticias' component={Noticias} />
      <Route path='/salas' component={Salas} />
      <Route path='/achados' component={AchadosPerdidos} />
      <Route path='*' component={Login} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
