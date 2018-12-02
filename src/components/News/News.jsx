import React, { Component } from "react";
import axios from 'axios';

export class News extends Component {
  constructor(props) {
    super(props)

    this.state = {
      news: []
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
    axios.get("http://localhost:8080/noticias").then(resposta => {
      (async () => console.log(await axios.get("http://localhost:8080/noticias/page?page=1")))()
      const news = resposta.data;
      
      this.setState({
        news: news
      })

    })

    .catch(erro => {
      console.log("Erro consulta noticias.");
    });
  }

  renderBody() {
    const news = this.state.news;

    return news.map((n, i) => {
      return(
        <tr key={i}>
          <td>
            {n.titulo}
          </td>
          <td>{n.descricao}</td>
        </tr>
      )
    })
  }

  render() {
    return <tbody>{this.renderBody()}</tbody>;
  }
}

export default News;
