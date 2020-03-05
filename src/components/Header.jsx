import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/components/Header.scss";
import logo from "../assets/static/logo-platzi-video.png";
import userIcon from "../assets/static/usuario-64.png";

const Header = () => (
    <header className="header">
        <Link to="/">
            <img className="header__img" src={logo} alt="PlatziVideo"/>
        </Link>

        <div className="header__menu">
            <div className="header__menu--profile">
                <img src={userIcon} alt="Profile Image"/>
                <p>Perfil</p>
            </div>
            <ul>
                <li><Link to="/">Cuenta</Link></li>
                <li><Link to="/login">Iniciar Sesión</Link></li>
            </ul>
        </div>
    </header>
);

export default Header;