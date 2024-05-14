import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { auth, provider } from "../firebase/config";
import { signInWithPopup } from "firebase/auth";
import axios from 'axios';
import Formulario  from '../Formulario/Formulario';
import "../App.css";

function Entrar() {
  let username = '';
  let password = '';

  function handleCadastro() {
    axios.post('http://localhost:8090/api/cadastro', { username, password })
      .then(() => {
        irPara('/');
      });
  }



  function handleLogin() {
    // Lógica de autenticação aqui, usando Axios
    axios.post('http://localhost:8090/api/login', { username, password })
      .then(response => {
        if (response.data === true) {
          irPara('/');
        } else {
          alert('Falha ao se logar');
        }
      });
  }

  const inputs = [
    { type: 'text', placeholder: 'Username', onChange: (e) => username = e.target.value },
    { type: 'password', placeholder: 'Password', onChange: (e) => password = e.target.value }
  ];

    
  const irPara = useNavigate();
  const handleClick = () => {
    irPara("/");
  };

  const [value, setValue] = useState('')
  const handleGoogle = () => {
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user.email) 
      localStorage.setItem("email", data.user.email)
    })
  }
  useEffect(() => {
    setValue(localStorage.getItem('email'))
  })


  return (
    <>    <div className='container'>
          <h1>Conecte-se</h1><br />

          <h3>Crie uma conta</h3>
        
        <br/> <br/>
        <Formulario inputs={inputs} onSubmit={handleCadastro}><br/><br/>
      <button type="submit">Cadastrar</button>  
      </Formulario>
              <br/> <br/>

          <h3>Login</h3>
         
          <Formulario inputs={inputs} onSubmit={handleLogin}><br/><br/>
      <button type="submit">Logar</button> 
      </Formulario>

      <button onClick={handleGoogle}>Entre com o Google!</button><br/>
      <Button type="button" variant="primary" onClick={handleClick}> Voltar </Button>

      </div>
    </>
  );
}
export default Entrar;
