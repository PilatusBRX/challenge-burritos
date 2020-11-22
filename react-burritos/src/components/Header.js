import React from 'react';
import map from '../images/map-marker-alt-regular.svg';

const Header = () => {
    return (
        <>
        <header>
        <div className="container">
            <nav>
                <ul>
                    <li><a href="#!">Cardápio</a></li>
                    <li><a href="#!">Meus pedidos</a></li>
                    <li><a href="#!">Benefícios</a></li>
                    <li><a href="#!">Minha conta</a></li>  
                </ul>
            </nav>
            <div className="address">                  
               <div className="icon">
                     <img src={map} alt="Rua Roberto de Souza 12"/>
               </div>                   
                <span>Rua Roberto de Souza, 12</span>
            </div>
        </div>
        <div className="overlay"></div>            
    </header> 
    </>
    )
}

export default Header;
