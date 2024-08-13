import React from "react";
import './equipe.css';
import exemplo from "../assets/cowboy.jpg";
import exemplo2 from "../assets/frango.jpg"
import exemplo3 from "../assets/liv.jpg"
import exemplo4 from "../assets/fra.jpg"
import exemplo5 from "../assets/lara.jpg"

import { Container } from "react-bootstrap";
function Equipe() {
    return(
        <>
        
        <h1>Conheça a Nossa Equipe!</h1>
        <br/><br/><br/>
                <Container className="leticao">
                <img id="exp" src={exemplo}/>
                <div className="textoLeticia">
                <h1>Letícia Ferreira</h1> 
                <h3> Backend, Frontend e Design</h3>   
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo, eius? Dolorem sapiente cumque accusamus fugit suscipit aut quaerat! Dolore veniam cumque quo et laboriosam velit, rerum vero quas tempore voluptatem.</p>  
                </div>
                </Container>
                <br/><br/><br/><br/><br/><br/><br/>

                <Container className="sofia">
                <img id="exp2" src={exemplo2}/>
                <div className="textoSofia">
                <h1>Sofia Nimet</h1> 
                <h3>Design e Frontend</h3>   
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo, eius? Dolorem sapiente cumque accusamus fugit suscipit aut quaerat! Dolore veniam cumque quo et laboriosam velit, rerum vero quas tempore voluptatem.</p>  
                </div>
                </Container>

                 <br/><br/><br/><br/><br/><br/><br/>

                <Container className="livia">
                <img id="exp" src={exemplo3}/>
                <div className="textoLivia">
                <h1>Lívia Derks</h1> 
                <h3>Design e Frontend</h3>   
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo, eius? Dolorem sapiente cumque accusamus fugit suscipit aut quaerat! Dolore veniam cumque quo et laboriosam velit, rerum vero quas tempore voluptatem.</p>  
                </div>
                </Container>

                 <br/><br/><br/><br/><br/><br/><br/>

                <Container className="lara">
                <img id="exp2" src={exemplo4}/>
                <div className="textoLara">
                <h1>Lara Drews</h1> 
                <h3>Design e Frontend</h3>   
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo, eius? Dolorem sapiente cumque accusamus fugit suscipit aut quaerat! Dolore veniam cumque quo et laboriosam velit, rerum vero quas tempore voluptatem.</p>  
                </div>
                </Container>

                 <br/><br/><br/><br/><br/><br/><br/>

                <Container className="francisco">
                <img id="exp2" src={exemplo5}/>
                <div className="textoFrancisco">
                <h1>Francisco Gasperini</h1> 
                <h3>Design e Frontend</h3>   
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo, eius? Dolorem sapiente cumque accusamus fugit suscipit aut quaerat! Dolore veniam cumque quo et laboriosam velit, rerum vero quas tempore voluptatem.</p>  
                </div>
                </Container>

                
        </>
    )
}   

export default Equipe;