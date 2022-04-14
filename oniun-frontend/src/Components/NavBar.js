import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
// import logo from '../images/logo.svg';
import './styles/NavBar.css'
//style="width:25%"
class NavBar extends Component {
    render(){
        return(
            <div className="dashboard-sidebar" >
                <h3>Menu</h3>
                <nav className='links-content'>
                    <NavLink 
                        to="/store"
                        className={({ isActive }) => (isActive ? 'active link-navbar' : 'inactive link-navbar')}
                    >
                        Bodega
                    </NavLink>

                    <NavLink 
                        to="/sold-products" 
                        className={({ isActive }) => (isActive ? 'active link-navbar' : 'inactive link-navbar')}
                    >
                        Productos vendidos
                    </NavLink>
                    <NavLink 
                        to="/account-settings" 
                        className={({ isActive }) => (isActive ? 'active link-navbar' : 'inactive link-navbar')}
                    >
                        Configuración de cuenta
                    </NavLink>
                </nav>
            </div>
        )
    }
}

export default NavBar;