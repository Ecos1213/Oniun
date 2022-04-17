import React from 'react';
import ReactDOM from 'react-dom';

import closeImage from '../images/close.png';
import './styles/Modal.css';

const Modal = props => {

    if(!props.isOpenModal){
        return null;
    }

    return ReactDOM.createPortal(
        <div className="Modal" >
            <div className="Modal__container" style={{maxWidth : props.width, height : props.height}}>
                <div className='Modal-title-container'>
                    <h1 className='description-detail-text roboto-style'>
                        {props.title}
                    </h1>
                    <button onClick={props.onClose} className="Modal__close-button">
                        <img src={closeImage} alt="Cerrar Modal" />
                    </button>
                </div>
                {props.children}
            </div>            
        </div>, 
        document.getElementById('modal')
    );   
}

export default Modal;