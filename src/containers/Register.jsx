import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/components/Login.scss";

const Register = () => (
    <section className="login">
        <section className="login__container">
            <h2>Regístrate</h2>
            <form className="login__container--form">
                <input className="input" type="text" placeholder="Nombre" />
                <input className="input" type="email" placeholder="Correo" />
                <input
                    className="input"
                    type="password"
                    placeholder="Contraseña"
                />
                <button className="button">Regístrame</button>
            </form>
            <p className="login__container--login">
                <Link to="/login">Iniciar sesión</Link>
            </p>
        </section>
    </section>
);

export default Register;
