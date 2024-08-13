import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { auth, provider } from "../firebase/config";
import { signInWithPopup } from "firebase/auth";
import './login.css'

import { faCoffee } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Entrar() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/');
    };

  
    const [isSignUp, setIsSignUp] = useState(false);

    const handleToggle = () => {
        setIsSignUp(!isSignUp);
        const containerEntrar = document.getElementById('containerEntrar');
        containerEntrar.classList.toggle("active");
    };

    const handleRegisterClick = () => {
        setIsSignUp(true);
        const containerEntrar = document.getElementById('containerEntrar');
        containerEntrar.classList.add("active");
    };

    const handleLoginClick = () => {
        setIsSignUp(false);
        const containerEntrar = document.getElementById('containerEntrar');
        containerEntrar.classList.remove("active");
    };

    return (
        <div className='bodyEntrar'>
        <div className="containerEntrar" id="containerEntrar">
            <div className={`form-containerEntrar ${isSignUp ? 'sign-up' : 'sign-in'}`}>
                {/* Conteúdo do formulário */}
                {isSignUp ? (
                    <form>
                        {/* Formulário de cadastro */}
                        <h1>Cadastre-se</h1>
                        
                        <div className="social-icons">
                            <a href="#" className="icon"><i className="fa-brands fa-google-plus-g"></i></a>
                        </div>
                        <input type="text" placeholder="Digite seu nome de usuário" />
                        <input type="email" placeholder="Digite seu E-mail" />
                        <input type="password" placeholder="Digite sua senha" />
                        <button>Faça cadastro</button>
                    </form>
                ) : (
                    <form>

                      
                        {/* Formulário de login */}
                        <h1>Faça Login</h1>

                        <div className="social-icons">
                            <a href="#" className="icon"><i className="fa-brands fa-google-plus-g"></i></a>
                        </div>
                        <input type="email" placeholder="Usuário" />
                        <input type="password" placeholder="Senha" />
                        <button>Entrar</button>
                    </form>
                )}
            </div>
            <div className="toggle-containerEntrar">
                <div className="toggle">
                    <div className="toggle-panel toggle-left">
                        <h1>Bem-vindo!</h1>
                        <p>Já tem um cadastro?</p>
                        <button className={isSignUp ? '' : 'hidden'} onClick={handleLoginClick}>Faça Login</button>
                    </div>
                    <div className="toggle-panel toggle-right">
                        <h1>Olá!</h1>
                        <p>Não tem um login?</p>
                        <button className={!isSignUp ? '' : 'hidden'} onClick={handleRegisterClick}>Cadastre-se</button>
                    </div>
                </div>
            </div>
        </div>
        <button id='voltar' onClick={handleClick}>Voltar</button>

        </div>
    );
}

export default Entrar;
