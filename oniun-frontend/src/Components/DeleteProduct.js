import React from 'react';

import Modal from './Modal';
// todo estos componentes que contienen componentes es por que asi podemos modificar
// o colocar mas contenido o funciones a este modal y asi poder hacer una mejor composicion
const DeleteProduct = (props) => {
    console.log(props)
    return (
        <Modal isOpenModal={props.isOpen} onClose={props.onClose} > 
        
            <div className="DeleteBadgeModal">
                <h1>
                    Are you sure?
                </h1>
                <p>You are about delete this badge.</p>

                <div>

                </div>
            </div>
        </Modal>
    );
}

export default DeleteProduct;