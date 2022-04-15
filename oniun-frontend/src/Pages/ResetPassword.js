import React, {Component} from 'react';
import SearchUser from '../Components/SearchUser';
import OniLogimg from '../Components/OniLogimg';
import './styles/Home.css';

class ResetPassword extends Component {

    state = {
        loading: false,
        error: null,
        errorMessage: "",
        form: {
            email: ''
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
            <div className='container-fluid center-block-column'>
                <OniLogimg />
                <SearchUser
                    handleSubmit={this.handleSubmit} 
                    formValues={this.state.form}
                    handleChange={this.handleChange}
                />
            </div>
        )
    }
}


export default ResetPassword;