import React, { Component } from 'react';
import "./Formulario.css";
import axios from 'axios';
// import { isNull } from 'util';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      usuario: '',
      senha: ''
    };
  }

  handleChangeUsuario = event => {
    this.setState({ usuario: event.target.value });
  }

  handleChangeSenha = event => {
    this.setState({ senha: event.target.value });
  }

  componentWillMount() {
    
    if (localStorage.getItem('token') !== null) {
      const aut = localStorage.getItem('token');
      axios.post("http://localhost:8080/auth/refresh_token",'',{
        headers: { 'Authorization': aut }
      }).then(resposta => {  
      if (resposta.status === 204) {
          const autorizacao = resposta.headers.authorization;
          localStorage.setItem('token',autorizacao);
          window.location.replace("/dashboard");
        } else {
          alert("Algo deu errado!");
        }
      })

      .catch(erro => {
        console.log(erro);
      });
    }
  }

  handleSubmit = event => {
    event.preventDefault();
    const login = {
      email: this.state.usuario,
      senha: this.state.senha
    };

    if (login.email !== '' && login.senha !== '') {
      axios.post("http://localhost:8080/login", login).then(resposta => {
        console.log(resposta.status);
        if (resposta.status === 200) {
          console.log(resposta.headers.authorization);
          const autorizacao = resposta.headers.authorization;
          localStorage.setItem('token',autorizacao);
          window.location.replace("/dashboard");
          alert("Bem vindo!!");
        } else {
          alert("Algo deu errado!");
        }
      })

      .catch(erro => {
        console.log(erro);
        alert("Usuário ou senha incorretos!");
      });

    } else {
      alert("Preencha os campos necessários!");
    }
  }

  render() {
    return (
      <form className="formulario" onSubmit={this.handleSubmit}>
        <h1>Login</h1>
        <div className="form-group">
          <label htmlFor="labelUsuario">Usuário:</label>
          <input className="form-control" id="inputUsuario"
                 onChange={this.handleChangeUsuario}/>
        </div>
        <div className="form-group">
          <label htmlFor="labelSenha">Senha:</label>
          <input type="password" className="form-control" id="inputSenha"
                 onChange={this.handleChangeSenha}/>
        </div>
        <button type="submit" className="btn btn-primary">Entrar</button>
      </form>
    );
  }
}

export default Login;
