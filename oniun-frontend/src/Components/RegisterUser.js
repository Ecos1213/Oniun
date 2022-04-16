import React from "react";
import {Link} from "react-router-dom";
import "./styles/RegisterUser.css";

function RegisterUser({
    handleSubmit,
    formValues,
    handleChange
}) {
    return(
        <div className="register-container">
            <form onSubmit={handleSubmit} className="form-register-container">
                <h1 className="text-registeraccount roboto-style">Crea una cuenta</h1>
                <p className="subtext-registeraccount roboto-style">Es rápido y fácil.</p>
                <div className="input-group">
                    <input 
                        type="text" 
                        name="fullname" 
                        value={formValues.fullname} 
                        onChange={handleChange} 
                        placeholder="Nombre" 
                        className='roboto-style input-search input-fullname'
                    />

                    <input 
                        type="text" 
                        name="lastname" 
                        value={formValues.lastname} 
                        onChange={handleChange} 
                        placeholder="Apellido" 
                        className='roboto-style input-search input-lastname'
                    />
                </div>

                <input 
                    type="email" 
                    name="registerEmail" 
                    value={formValues.registerEmail} 
                    onChange={handleChange} 
                    placeholder="Correo electrónico" 
                    className='roboto-style input-search input-registerEmail'
                />

                <input 
                    type="password" 
                    name="registerPassword" 
                    value={formValues.registerPassword} 
                    onChange={handleChange} 
                    placeholder="Contraseña" 
                    className='roboto-style input-search input-registerPassword'
                />

                <p className="subtext-register-birthdate roboto-style">Fecha de nacimiento</p>

                <div className="input-group custom-gap-selectbox">
                    <select className="box-day roboto-style" name="dayRegister" value={formValues.day} onChange={handleChange}>
                        <option value="Dia">Dia</option>
                    </select>
                    <select className="box-month roboto-style" name="monthRegister" value={formValues.month} onChange={handleChange}>
                        <option value="Mes">Mes</option>
                    </select>
                    <select className="box-year roboto-style" name="yearRegister" value={formValues.year} onChange={handleChange}>
                        <option value="Año">Año</option>
                    </select>
                </div>
                <hr className="register-hr" />
                <div className="content-buttons">
                    <button type="submit" className="button-register roboto-style"> Registrarte </button>
                    <Link to={'/'} className="button-back-login roboto-style">Cancelar</Link>
                </div>
            </form>
        </div>
    );
}

export default RegisterUser;