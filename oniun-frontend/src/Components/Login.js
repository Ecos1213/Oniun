import React from 'react'
import { Link } from 'react-router-dom';
import './styles/Login.css'

function Login({
    handleSubmit,
    formValues,
    handleChange,
    errorMessage
}) {
    return (
        <div className={errorMessage ? "login-container dinamic-error-with-min-height" : "login-container dinamic-error-without-min-height"}>
            <form onSubmit={handleSubmit} className="text-center form-container">
                <input 
                    type="email" 
                    name="email" 
                    value={formValues.email} 
                    onChange={handleChange} 
                    placeholder="Correo electrónico" 
                    className='roboto-style input-login'
                />

                <input 
                    type="password" 
                    name="password" 
                    value={formValues.password} 
                    onChange={handleChange}  
                    placeholder="Contraseña"
                    className="roboto-style input-login"
                />
                {errorMessage && (
                    <p className='errorMessage roboto-style'>{errorMessage}</p>
                )}
                <button type="submit" className="button-login roboto-style"> Iniciar sesión </button>

                <Link to={'/reset-password'} className="text-forget-password roboto-style">¿Olvidaste tu contraseña?</Link>
                <hr className='division-login'/>
                <Link to={'/create-account'} className="button-create-account roboto-style">Crear cuenta nueva</Link>
            </form>
        </div>
    )
}

export default Login;