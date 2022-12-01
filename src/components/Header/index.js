import React from 'react';
import { HeaderContainer } from './styles';
import { Link } from "react-router-dom";

function Header () {
  return(
    <HeaderContainer>
      <div>
        logo
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
    </HeaderContainer>
   
    
  )
}

export default Header;