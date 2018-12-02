import React, { Component } from "react";
import {
  Grid,
  Row,
  Col,
  FormGroup,
  ControlLabel,
  FormControl
} from "react-bootstrap";
import { Link } from "react-router-dom";

import { Card } from "components/Card/Card.jsx";
import { FormInputs } from "components/FormInputs/FormInputs.jsx";
import { UserCard } from "components/UserCard/UserCard.jsx";
import Button from "components/CustomButton/CustomButton.jsx";

import salas from 'assets/img/salas.svg';
import projetores from 'assets/img/projetores.svg';
import achados from 'assets/img/achados_perdidos.svg';
import notificias from 'assets/img/jornal.png';
import noticias from 'assets/img/noticias.svg';
import 'assets/css/Menu.css';
import Cabecalho from 'components/Cabecalho/Cabecalho';

import avatar from "assets/img/faces/face-3.jpg";

class UserProfile extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    console.log('ij');
  }

  render() {

    return (
      <div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <button type="button" style={{visibility: 'hidden'}} className="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Open Modal</button>
        <div className="row">
          <div className="col-md-2" ></div>
          <div className="col-md-1" style={{visibility: 'hidden'}}>
            <h4>Projetores</h4>
            {/* <Link to="/projetores"> */}
              <img src={ projetores } style={{marginTop: '-10%'}} onClick={this.handleClick} className="rounded float-left" alt="projetores"/>
            {/* </Link> */}
          </div>
          <div className="col-md-3">
            <h4>Achados e Perdidos</h4>
            <Link to="/achados">
              <img src={ achados } style={{width: '65', marginLeft: '28%'}} className="rounded float-right " alt="achados"/>
            </Link>
          </div>
          <div className="col-md-3">
            <h4>Notícias</h4>
            <Link to="/projetores">
              <img src={ notificias } style={{width: '70'}} className="rounded float-left" alt="projetores"/>
            </Link>
          </div>
          
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        
      </div>
    );
  }
}

export default UserProfile;
