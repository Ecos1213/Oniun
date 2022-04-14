import React, {Component} from 'react';
import Login from '../Components/Login'
import PageLoading from './PageLoading';
import './styles/Home.css';
import oniunLogin from '../images/oniun-login.png';
import { useNavigate } from "react-router-dom";

/**
 * Por el momento dicho inicio
    de sesión deberá validar el
    ingreso para el usuario:
    anaforero@oniun.com y la
    contraseña: U123456*
 * 
 */
class Home extends Component {

    state = {
        loading: false,
        error: null,
        errorMessage: "",
        form: {
            email: '',
            password: '',
        }
    };

    handleSubmit = async e => {
        e.preventDefault();
        this.setState({
            loading: true
        });

        if(this.state.form.email === '' && this.state.form.password === '') {
            this.setState({
                loading: false,
                errorMessage: "Usuario no autorizado"
            });
        }else {
            const dataForm = JSON.stringify(this.state.form);
            const requestOptions = {
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body: dataForm
            };
    
            await fetch('http://localhost/proyecto%20entrevista/Oniun/Oniun/PHP/index.php', requestOptions)
            .then(response => response.json())
            .then((rest)=> {
                if(rest.isRegistred){
                    this.setState({
                        loading: false,
                        errorMessage: ""
                    });
                    window.sessionStorage.setItem("key", true);
                }else {
                    this.setState({
                        loading: false,
                        errorMessage: rest.message
                    });
                    window.sessionStorage.removeItem("key");
                }
            }).catch((e)=>{
                console.log("[ERROR LOGIN]", e.message)
            })
        }
        
    }

    handleChange = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
    }

    componentDidMount() {
        if(window.sessionStorage.getItem("key")) {
            this.props.navigation('/store')
        }
    }

    render() {
        if(this.state.loading){
            return <PageLoading />
        }

        return(
            <div className='container-fluid center-block-column'>
                <img src={oniunLogin} alt='Oniun sistemas' className='oniun-img'/>
                <Login 
                    handleSubmit={this.handleSubmit}
                    handleChange={this.handleChange}
                    formValues={this.state.form}
                    errorMessage={this.state.errorMessage}
                />
            </div>
        )
    }
}
// Wrap and export
export default function(props) {
    const navigation = useNavigate();
    return <Home {...props} navigation={navigation} />;
}