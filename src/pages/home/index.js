import React from 'react';
import { Container } from './styles';
import  Perfil  from "../../assets/img/perfil.png";


function Home () {
  return(

    <Container>
      <p> 
        <h1>Me chamo</h1>
        <h2>Jonathan Rezende</h2>
        <h3>Front-end Developer</h3>
      </p>
        <div>
        <img src={Perfil} alt="Perfil" />
      </div>
          
    </Container> 
  )
}

export default Home;