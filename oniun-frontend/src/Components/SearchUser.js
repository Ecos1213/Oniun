import React from "react";
import {Link} from "react-router-dom";
import "./styles/SearchUser.css";

function SearchUser({
    handleSubmit,
    formValues,
    handleChange
}) {
    return(
        <div className="search-container">
            <form onSubmit={handleSubmit} className="text-center form-search-container">
                <p className="text-searchcontent roboto-style">Ingresa tu correo electrónico o número de teléfono para buscar tu cuenta.</p>

                <input 
                    type="email" 
                    name="resetEmail" 
                    value={formValues.resetemail} 
                    onChange={handleChange} 
                    placeholder="Correo electrónico" 
                    className='roboto-style input-search'
                />

                <div className="content-buttons">
                    <button type="submit" className="button-search roboto-style"> Buscar </button>
                    <Link to={'/'} className="button-back-login roboto-style">Cancelar</Link>
                </div>
            </form>
        </div>
    )
}

export default SearchUser;