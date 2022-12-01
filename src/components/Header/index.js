import React from 'react';

import { HeaderContainer } from './styles';
import { Link } from "react-router-dom";

function Header () {
  return(
    <div>
        <ul className='header-ul'>
            <li><Link to="/Inicio">Início</Link></li>
            <li><Link to="/Sobre">Sobre Mim</Link></li>
            <li><Link to="/Portfolio">Portfolio</Link></li>
            <li><Link to="/Contato">Contato</Link></li>
        </ul>
    </div>
   
    
  )
}

export default Header;