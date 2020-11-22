import React from 'react';
import home from '../images/home-alt-regular.svg';
import receipt from '../images/receipt-regular.svg';
import gift from '../images/gift-regular.svg';
import user from '../images/user-regular.svg';

const Footer = () => {
    return (
        <>
        <footer>
            <img src={home} alt="casa"/>
            <img src={receipt} alt="pagamento"/>
            <img src={gift} alt="entrega"/>
            <img src={user} alt="usuário"/>
    </footer> 
    </>
    )
}

export default Footer;

