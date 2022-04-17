import React from 'react';
import Modal from './Modal';
import './styles/DeleteProduct.css';

const DeleteProduct = (props) => {

    return (
        <Modal 
            isOpenModal={props.isOpen} 
            onClose={props.onClose} 
            width={"469px"} 
            height={"221px"}
            title={"Atencion"}
        > 
            <hr className='save-hrborder' />
            <div className="DeleteBadgeModal">
               
                <p className='roboto-style message-delete-text'>¿está seguro de eliminar?</p>

                <hr className='save-hrborder' />

                <div className='delete-buttons-container'>
                    <button onClick={props.Delete} className='delete-button roboto-style'>Eliminar</button>
                    <button onClick={props.Cancel} className='no-delete-button roboto-style'>Cancelar</button>
                </div>
            </div>
        </Modal>
    );
}

export default DeleteProduct;