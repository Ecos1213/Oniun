import React, {Component} from 'react';
import './styles/Home.css';

class ResetPassword extends Component {

    state = {
        loading: false,
        error: null,
        form: {
            email: ''
        }
    };

    handleSubmit = async e => {
        e.preventDefault();
        console.log("Hola mundo", this.state.form.email);
        console.log("Hola mundo", this.state.form.password);
    }

    render() {
        return(
            <div className='container-fluid center-block-column'>
                hay que resetearse
            </div>
        )
    }
}


export default ResetPassword;