import React, {Component} from 'react';
import './styles/PageLoader.css';
class PageLoading extends Component {
    
    render() {
        return(
            <div className="lds-ripple">
                <div></div>
                <div></div>
            </div>
        );
    }

}

export default PageLoading;