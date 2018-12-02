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

class Salas extends Component {
  constructor() {
    super();

    this.state = {
      cursos: [],
      disciplinas: [],
      disciplina_sala: [],
      sala: '',
      idCursoSelecionado: '',
      idDisciplinaSelecionada: ''
    };
  }

  handleChangeCurso = event => {
    this.setState({ idCursoSelecionado: event.target.value });
  }

  handleChangeDisciplina = event => {
    this.setState({ idDisciplinaSelecionada: event.target.value });
  }

  componentWillMount() {
    axios.get("http://localhost:8080/cursos/").then(resposta => {
      const cursos = resposta.data;
      
      this.setState({
        cursos: cursos
      })
    })

    .catch(erro => {
      console.log("Erro consulta cursos.");
    });
  }

  buscarSala = event => {
    const idCurso = this.state.idCursoSelecionado;
    const idDisciplina = this.state.idDisciplinaSelecionada;

    axios.get("http://localhost:8080/disciplina_sala?curso=" + idCurso + "&disciplina=" + idDisciplina).then(resposta => {
      const disciplina_sala = resposta.data;

      this.setState({
        disciplina_sala: disciplina_sala
      })
    })

    .catch(erro => {
      console.log("Erro consulta disciplina_sala.");
      this.setState({
        disciplina_sala: ''
      })
    });

  }

  buscarDisciplina = event => {
    event.preventDefault();
    const idCurso = this.state.idCursoSelecionado;

    axios.get("http://localhost:8080/disciplinas?curso=" + idCurso).then(resposta => {
      const disciplinas = resposta.data;
      
      this.setState({
        disciplinas: disciplinas
      })
    })

    .catch(erro => {
      console.log("Erro consulta disciplinas.");
    });
  }

  render() {

    let cursos = this.state.cursos;
    let optionItems = cursos.map((curso) =>
        <option key={curso.nome} value={curso.id}>{curso.nome} - {curso.periodo}</option>
    );

    let disciplinas = this.state.disciplinas;
    let optionItemsDisciplinas = disciplinas.map((disciplina) =>
        <option key={disciplina.nome} value={disciplina.id}>{disciplina.nome}</option>
    );

    let disciplina_sala = this.state.disciplina_sala;

    return(
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                title="Mapa de Salas"
                content={
                  <form>
                    <Row>
                      <Col md={12}>
                        <FormGroup controlId="formControlsCurso">
                          <ControlLabel>Curso</ControlLabel>
                          <FormControl
                            rows="5"
                            componentClass="select"
                            bsClass="form-control"
                            placeholder="Curso"
                            onChange={this.handleChangeCurso}
                            onClick={this.buscarDisciplina}
                          >
                            <option></option>
                            {optionItems}
                          </FormControl>
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row>
                      <Col md={12}>
                        <FormGroup controlId="formControlsDisciplina">
                          <ControlLabel>Disciplina</ControlLabel>
                          <FormControl
                            rows="5"
                            componentClass="select"
                            bsClass="form-control"
                            placeholder="Disciplina"
                            onChange={this.handleChangeDisciplina}
                            onClick={this.buscarSala}
                          >
                            <option></option>
                            {optionItemsDisciplinas}
                          </FormControl>
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row>
                      <Col md={12} >
                        <Col md={3}>
                          <ControlLabel>Dia da Semana</ControlLabel>
                          <p>{disciplina_sala.diaSemana}</p>
                        </Col>
                        <Col md={3}>
                          <ControlLabel>Bloco</ControlLabel>
                          <p>{disciplina_sala.bloco}</p>
                        </Col>
                        <Col md={3}>
                          <ControlLabel>Sala</ControlLabel>
                          <p>{disciplina_sala.sala}</p>
                        </Col>
                        <Col md={3}>
                          <ControlLabel>Aula</ControlLabel>
                          <p>{disciplina_sala.aula}</p>
                        </Col>
                      </Col>
                    </Row>
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

export default Salas;