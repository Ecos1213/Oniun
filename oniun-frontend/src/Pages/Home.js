import React, {Component} from 'react';
import Login from '../Components/Login'
import PageLoading from './PageLoading';
import OniLogimg from '../Components/OniLogimg';
import './styles/Home.css';
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

    constructor(props) {
        super(props);
        this.idTimeOut = "";
    }

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
    
            await fetch('http://localhost/Oniun/PHP/index.php', requestOptions)
            .then(response => response.json())
            .then(async (rest)=> {
                if(rest.isRegistred){
                    this.setState({
                        loading: false,
                        errorMessage: ""
                    });
                    await window.localStorage.setItem("key", true);
                    this.props.navigation('/store');
                }else {
                    this.setState({
                        loading: false,
                        errorMessage: rest.message
                    });
                    await window.localStorage.removeItem("key");
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
        //console.log(window.localStorage.removeItem("key"));
        if(window.localStorage.getItem("key")) {
            this.setState({
                loading: false,
                errorMessage: ""
            });
            this.idTimeOut = setTimeout(() => {
                this.props.navigation('/store')
             }, 1);
        }
    }
    
    componentWillUnmount() {
        clearInterval(this.idTimeOut);
    }

    render() {
        if(this.state.loading){
            return <PageLoading />
        }

        return(
            <div className='container-fluid center-block-column'>
                <OniLogimg />
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

export default function(props) {
    const navigation = useNavigate();
    return <Home {...props} navigation={navigation} />;
}