import React from "react";
import "../assets/styles/components/Header.scss"

const Header = () => (
    <header className="header">
        <img className="header__img" alt="PlatziVideo"/>
        <div className="header__menu">
            <div className="header__menu--profile">
                <img alt="Profile Image"/>
                <p>Perfil</p>
            </div>
            <ul>
                <li><a>Cuenta</a></li>
                <li><a>Cerrar Sesión</a></li>
            </ul>
        </div>
    </header>
);

export default Header;