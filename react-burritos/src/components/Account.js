import React from 'react';
import user from '../images/user-circle-light.svg';
import location from '../images/map-marker-alt-blue.svg';
import wallet from '../images/wallet-regular.svg';
import help from '../images/life-ring-light.svg';
import config from '../images/cog-light.svg';

const Account = () => {
    return (
        <>
        <section className="account">
        <div className="container">
            <h2>Minha conta</h2>
            <div className="user-info">
                <div className="user">
                    <img src={user} alt="usuário"/>
                    <h3>João Silva</h3>
                    <p>joaodasilva@gmail.com</p>
                    <span>(41) 99999-9999</span>
                    <button>EDITAR DADOS</button>
                </div>               
               
                <nav className="user-menu">
                    <li className="item">
                        <img src={location} alt="Meus endereços"/>
                        <a href="">Meus endereços</a>
                    </li>
                    <li className="item">
                        <img src={wallet} alt="Pagamento"/>
                        <a href="">Pagamento</a>
                    </li>
                    <li className="item">
                        <img src={help} alt="Ajuda"/>
                        <a href="">Ajuda</a>
                   </li>
                    <li className="item">
                        <img src={config} alt="Sair"/>
                        <a href="">Sair</a>
                    </li>
              </nav>              
        </div>    
        </div>       
    </section> 
    </>
    )
}

export default Account
