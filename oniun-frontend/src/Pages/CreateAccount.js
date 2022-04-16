import React, {Component} from 'react';
import RegisterUser from '../Components/RegisterUser';
import OniRegimg from '../Components/OniRegimg';
import './styles/CreateAccount.css';

class CreateAccount extends Component {

    state = {
        loading: false,
        error: null,
        errorMessage: "",
        form: {
            registerEmail: '',
            registerPassword: '',
            fullname: '',
            lastname: '',
            day: '',
            month: '',
            year: ''
        }
    };

    handleSubmit = async e => {
        e.preventDefault();
    }

    handleChange = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
    }

    render() {
        return(
            <div className='container-fluid center-block-column container-horizontal'>
                <OniRegimg />
                <RegisterUser
                    handleSubmit={this.handleSubmit} 
                    formValues={this.state.form}
                    handleChange={this.handleChange}
                />
                
            </div>
        )
    }
}


export default CreateAccount;