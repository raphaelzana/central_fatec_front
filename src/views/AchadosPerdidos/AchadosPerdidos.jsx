import React, { Component } from "react";
import {
  Grid,
  Row,
  Col,
  FormGroup,
  ControlLabel,
  FormControl
} from "react-bootstrap";
import axios from 'axios';

import { Card } from "components/Card/Card.jsx";
import Button from "components/CustomButton/CustomButton.jsx";

class AchadosPerdidos extends Component {
  constructor() {
    super();

    this.state = {
      objeto: '',
      descricao: '',
      local: '',
      tipo: '',
      tipos: []
    };
  }

  handleChangeObjeto = event => {
    this.setState({ objeto: event.target.value });
  }

  handleChangeLocal = event => {
    this.setState({ local: event.target.value });
  }

  handleChangeDescricao = event => {
    this.setState({ descricao: event.target.value });
  }

  handleChangeTipo = event => {
    this.setState({ tipo: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();
    
    const objeto = {
      objeto: this.state.objeto,
      descricao: this.state.descricao,
      local: this.state.local,
      tipo: this.state.tipo
    };

    if (objeto.objeto !== '' && objeto.descricao !== '' &&
        objeto.local !== '' && objeto.tipo !== '') {
      axios.post("http://localhost:8080/objetos/", objeto).then(resposta => {
        console.log(resposta.status);
        if (resposta.status === 201) {
          alert("Cadastrou!");
        } else {
          alert("Erro!");
        }
      });
    } else {
      alert("Campo em branco!");
    }
  }

  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                title="Cadastro de Achados e Perdidos"
                content={
                  <form>
                    <Row>
                      <Col md={12}>
                        <FormGroup controlId="formControlsObjeto">
                          <ControlLabel>Objeto</ControlLabel>
                          <FormControl
                            rows="5"
                            componentClass="input"
                            bsClass="form-control"
                            placeholder="Objeto"
                            onChange={this.handleChangeObjeto}
                          />
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row>
                      <Col md={6}>
                        <FormGroup controlId="formControlsLocal">
                          <ControlLabel>Local</ControlLabel>
                          <FormControl
                            rows="5"
                            componentClass="input"
                            bsClass="form-control"
                            placeholder="Local"
                            onChange={this.handleChangeLocal}
                          />
                        </FormGroup>
                      </Col>

                      <Col md={6}>
                        <FormGroup controlId="formControlsTipo">
                          <ControlLabel>Tipo</ControlLabel>
                          <FormControl
                            rows="5"
                            componentClass="select"
                            bsClass="form-control"
                            placeholder="Tipo"
                            onChange={this.handleChangeTipo}
                          >
                            <option></option>
                            <option value="ACHADO">ACHADO</option>
                            <option value="PERDIDO">PERDIDO</option>
                          </FormControl>
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row>
                      <Col md={12}>
                        <FormGroup controlId="formControlsDescricao">
                          <ControlLabel>Descrição</ControlLabel>
                          <FormControl
                            rows="5"
                            componentClass="textarea"
                            bsClass="form-control"
                            placeholder="Descrição"
                            onChange={this.handleChangeDescricao}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Button bsStyle="info" pullRight fill type="submit" onClick={this.handleSubmit}>
                      Cadastrar
                    </Button>
                    <div className="clearfix" />
                  </form>
                }
              />
            </Col>
          </Row>
        </Grid>>
      </div>
    );
  }
}

export default AchadosPerdidos;
