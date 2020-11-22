import React from 'react';
import clock from '../images/clock-regular.svg';
import star from '../images/star-solid.svg';
import logo from '../images/logo.png';

const Info = () => {
    return (
        <section className="info">
        <div className="container">
               <div className="logo"><img src={logo} alt="Vitto Burritos"/></div>
               <div className="product-info">
                    <div className="address">
                        <h2>Vitto Burritos</h2>                                
                        <p>Rua Roberto de Souza, 12 - Curitiba, PR.</p>
                    </div>
                    <div className="delivery-info">
                        <nav>                             
                            <a href="#!"><img src={clock} alt="relógio"/> 30-40 min</a>
                            <a href="#!"><img src={star} alt="estrela"/> 4.5</a>
                            <a href="#!">Cashback: 15%</a>
                            <a href="#!">Entrega: R$ 8,00</a>
                            <a href="#!">Pedido mínimo: R$ 20,00</a>                               
                        </nav>
                    </div>
               </div>
               <div className="status">
                   <span>Aberto agora</span>
               </div>
        </div>
    </section> 
    )
}

export default Info
