import React, { Component } from "react";
import axios from 'axios';

export class AchadosPerdidosForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      achadosPerdidos: []
    }
  }

  renderBody() {
    return(
      <p>Achados Perdidos</p>
    )
  }

  render() {
    return <tbody>{this.renderBody()}</tbody>;
  }
}

export default AchadosPerdidosForm;