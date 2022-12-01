import React from 'react';
import { HeaderContainer } from './styles';
import { Link } from "react-router-dom";
import  LogoJonathan  from "../../assets/img/logo.png"
import {Content} from "../Header/styles"

function Header () {
  return(

    <HeaderContainer>
      <div>
        <img src={LogoJonathan} alt="LogoJonathan" />
      </div>
      <div>
        <ul className='header-ul'>
            <Link to="/Inicio">Início</Link>
            <Link to="/Sobre">Sobre Mim</Link>
            <Link to="/Portfolio">Portfolio</Link>
            <Link to="/Contato">Contato</Link>
        </ul>
      </div>
      <div>
        botaocurri
      </div>
      <Content>
        
      </Content>
    </HeaderContainer>

   
    
  )
}

export default Header;