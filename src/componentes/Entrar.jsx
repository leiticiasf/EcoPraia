import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import "../App.css";

function Entrar() {
  const irPara= useNavigate();
  const handleClick = () => {
        irPara("/");
  };
  return (
    <>
                <div className="containerEntrar">
            <div className="login">
                <h2>Login</h2><br/>     
                <input type="text" placeholder="  Email" /><br/>    
                <input type="password" placeholder="  Senha" /><br/><br/>
                <Button type="button" variant="primary"> Entrar </Button><br/><br/>
                <a>Não possui conta? Cadastre-se!</a>
            </div>
            <div className="cadastro">
                <h2>Cadastro</h2><br/>
                <input type="text" placeholder="  Nome" /><br/>
                <input type="text" placeholder="  Email" /><br/>
                <input type="password" placeholder="  Senha" /><br/><br/>
                <Button type="button" variant="primary" > Criar conta</Button>
            </div>
            </div>
                    <br/><br/>

            <Button type="button" variant="primary" onClick={handleClick}> Voltar </Button>
    </>
  );
}
export default Entrar;
