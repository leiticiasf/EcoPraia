import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { auth, provider } from "../firebase/config";
import { signInWithPopup } from "firebase/auth";
import "../App.css";

function Entrar() {
 

     const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const handleLogin = async () => {
        if(username == "" && password == "") {
            alert("Campos vazios!")
        }
        
        try {
            const response = await logar(username, password);
            
            if(response == true){
                 alert("Logado com sucesso!")
            }
            else if(response == false){
                alert("Usuário não encontrado.")
            }
        } catch (error) {
            console.error('Erro ao se logar:', error);
        }
    };

    
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
          <input 
          type='text'
          name='nome'
          placeholder='nome'
          /> <br/>
          <input
          type="text"
          name='username'
          placeholder="Email"
        /> <br/>

          <input
          type="password" 
          name="password"
          placeholder="password"
        />  
        <br/> <br/>
          <Button type="button" variant="primary"> Criar conta </Button><br /><br />
          <br/> <br/>


          <h3>Login</h3>
          <input 
          type="text" 
          placeholder="  Email"
         /><br />

          <input 
          type="password" 
          placeholder="Senha"         
           />
           <br /><br />
           
          <Button  type="button" variant="primary" onClick={handleClick} > Logar</Button>
      <br /><br /><br/><br/>
      <button onClick={handleGoogle}>Entre com o Google!</button><br/>
      <Button type="button" variant="primary" onClick={handleClick}> Voltar </Button>

      </div>
    </>
  );
}
export default Entrar;
