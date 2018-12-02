import React, { Component } from "react";
import { Tooltip, OverlayTrigger } from "react-bootstrap";
import Checkbox from "components/CustomCheckbox/CustomCheckbox.jsx";
import Button from "components/CustomButton/CustomButton.jsx";
import axios from 'axios';

export class Tasks extends Component {
  constructor(props) {
    super(props)

    this.state = {
      object: []
    }
  }

  handleCheckbox = event => {
    const target = event.target;
    console.log(event.target);
    this.setState({
      [target.name]: target.checked
    });
  };

  componentWillMount() {
    axios.get("http://localhost:8080/objetos/").then(resposta => {
      const object = resposta.data;     
      this.setState({
        object: object
      })
    })

    .catch(erro => {
      console.log("Erro consulta objetos.");
    });
  }

  renderRows() {
    const edit = <Tooltip id="edit_tooltip">Edit Task</Tooltip>;
    const remove = <Tooltip id="remove_tooltip">Remove</Tooltip>;
    const object = this.state.object;

    var number;

    return object.map((n, i) => {
      number = "checkbox" + i;
      return(
      <tr key={i}>
        <td>
          <Checkbox
            number={number}
            // isChecked={i === 1 || i === 2 ? true : false}
          />
        </td>
        <td>
          {n.objeto}
        </td>
        <td>
          {n.descricao}
        </td>
        <td>{n.justificativa}</td>
        <td className="td-actions text-right">
          <OverlayTrigger placement="top" overlay={edit}>
            <Button bsStyle="info" simple type="button" bsSize="xs">
              <i className="fa fa-edit" />
            </Button>
          </OverlayTrigger>

          <OverlayTrigger placement="top" overlay={remove}>
            <Button bsStyle="danger" simple type="button" bsSize="xs">
              <i className="fa fa-times" />
            </Button>
          </OverlayTrigger>
        </td>
      </tr>
      )
    })
  }

  render() {
    return <tbody>{this.renderRows()}</tbody>;
  }
}

export default Tasks;
