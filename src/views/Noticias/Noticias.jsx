import React, { Component } from "react";
import {
  Grid,
  Row,
  Col,
  FormGroup,
  ControlLabel,
  FormControl
} from "react-bootstrap";

import { Card } from "components/Card/Card.jsx";
import Button from "components/CustomButton/CustomButton.jsx";
import axios from 'axios';

class Noticias extends Component {
  constructor() {
    super();

    this.state = {
      titulo: '',
      descricao: ''
    };
  }

  handleChangeTitulo = event => {
    this.setState({ titulo: event.target.value });
  }

  handleChangeDescricao = event => {
    this.setState({ descricao: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();
    
    const noticia = {
      titulo: this.state.titulo,
      descricao: this.state.descricao
    }

    if (noticia.titulo !== '' && noticia.descricao !== '') {
      axios.post("http://localhost:8080/noticias/", noticia).then(resposta => {
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
                title="Cadastro de Noticias"
                content={
                  <form>
                    <Row>
                      <Col md={12}>
                        <FormGroup controlId="formControlsTitulo">
                          <ControlLabel>Título</ControlLabel>
                          <FormControl
                            rows="5"
                            componentClass="input"
                            bsClass="form-control"
                            placeholder="Título"
                            onChange={this.handleChangeTitulo}
                          />
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

export default Noticias;
