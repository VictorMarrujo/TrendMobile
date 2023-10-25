// src/LoginForm.js
import React from 'react';
import './LoginForm.css'; // Importa tu archivo CSS de estilos

class LoginForm extends React.Component {
    render() {
        return (
            <div className="container">
                <h2>Iniciar Sesión</h2>

                <form>
                    <label htmlFor="username">Nombre de Usuario:</label>
                    <input type="text" id="username" name="username" required className="input-field" />

                    <label htmlFor="password">Contraseña:</label>
                    <input type="password" id="password" name="password" required className="input-field" />

                    <button type="submit">Iniciar Sesión</button>
                </form>
            </div>
        );
    }
}

export default LoginForm;
