import React from "react";
import {Link} from "react-router-dom";

function SearchUser({
    handleSubmit,
    formValues,
    handleChange
}) {
    return(
        <div className="login-container dinamic-error-with-min-height">
            <form onSubmit={handleSubmit} className="text-center form-container">
                <input 
                    type="email" 
                    name="resetEmail" 
                    value={formValues.resetemail} 
                    onChange={handleChange} 
                    placeholder="Correo electrónico" 
                    className='roboto-style input-login'
                />

                <button type="submit" className="button-login roboto-style"> Buscar </button>
                <Link to={'/create-account'} className="button-create-account roboto-style">Crear cuenta nueva</Link>
            </form>
        </div>
    )
}

export default SearchUser;