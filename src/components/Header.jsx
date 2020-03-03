import React from "react";
import "../assets/styles/components/Header.scss";
import logo from "../assets/static/logo-platzi-video.png";
import userIcon from "../assets/static/usuario-64.png";

const Header = () => (
    <header className="header">
        <img className="header__img" src={logo} alt="PlatziVideo"/>
        <div className="header__menu">
            <div className="header__menu--profile">
                <img src={userIcon} alt="Profile Image"/>
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