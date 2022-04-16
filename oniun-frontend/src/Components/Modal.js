import React from 'react';
import ReactDOM from 'react-dom';

import './styles/Modal.css';

const Modal = props => {

    if(!props.isOpenModal){
        return null;
    }

    return ReactDOM.createPortal(
        <div className="Modal" >
            <div className="Modal__container" style={{maxWidth : props.width, height : props.height}}>
                <button onClick={props.onClose} className="Modal__close-button">
                    X
                </button>
                {props.children}
            </div>            
        </div>, 
        document.getElementById('modal')
    );   
}

export default Modal;