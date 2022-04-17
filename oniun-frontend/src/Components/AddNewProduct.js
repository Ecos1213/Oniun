import React from 'react';
import Modal from './Modal';
import SaveIcon from '../images/save-icon.png';
import './styles/AddNewProduct.css';

const AddNewProduct = (props) => {

    return (
        <Modal 
            isOpenModal={props.isOpen} 
            onClose={props.onClose} 
            width={"469px"} 
            height={"535px"}
            title={"Nuevo producto"}
        > 
        
            <div className="">
                
                <hr className='save-hrborder' />
                <form onSubmit={props.handleRegisterSubmit}>
                    <div>
                        <div className='input-group custom-max-width custom-gap-addnewproducts'>
                            <div className='width-50'>
                                <label htmlFor="nameProduct" className='roboto-style'>Producto<span className='symbol-require'>*</span></label>
                                <input 
                                    type="text" 
                                    name="nameProduct" 
                                    className='roboto-style input-registernameProduct'
                                    value={props.formValues.nameProduct}
                                    onChange={props.handleChange}
                                    required
                                />
                            </div>
                            <div className='width-50'>
                                <label htmlFor="stock" className='roboto-style'>Disponible<span className='symbol-require'>*</span></label>
                                <input 
                                    type="text" 
                                    name="stock" 
                                    pattern="[0-9]*"
                                    value={props.formValues.stock}
                                    onChange={props.handleChange}
                                    className='roboto-style input-registerStock'
                                    required
                                />
                            </div>
                        </div>

                        <div className='input-group custom-max-width custom-gap-addnewproducts'>
                            <div className='width-50'>
                                <label className='roboto-style' htmlFor="proveedor">Proveedor<span className='symbol-require'>*</span></label>
                                <input 
                                    type="text" 
                                    name="proveedor" 
                                    value={props.formValues.proveedor}
                                    onChange={props.handleChange}
                                    className='roboto-style input-registerProveedor'
                                    required
                                />
                            </div>
                            <div className='width-50'>
                                <label className='roboto-style' htmlFor="referencia">Referencia <span className='symbol-require'>*</span></label>
                                <input 
                                    type="text" 
                                    name="referencia" 
                                    value={props.formValues.referencia}
                                    onChange={props.handleChange}
                                    className='roboto-style input-registerReferencia'
                                    required
                                />
                            </div>
                        </div>

                        <div className='input-group custom-max-width custom-gap-addnewproducts'>
                            <div className='width-50'>
                                <label className='roboto-style' htmlFor="descripcionrapida">Descripción rapida<span className='symbol-require'>*</span></label>
                                <input 
                                    type="text" 
                                    name="descripcionrapida" 
                                    value={props.formValues.descripcionrapida}
                                    onChange={props.handleChange}
                                    className='roboto-style input-regdescripcionrapida'
                                    required
                                />
                            </div>
                            <div className='width-50'>
                                <label className='roboto-style' htmlFor="urlfabricante">Url del fabricante <span className='symbol-require'>*</span></label>
                                <input 
                                    type="text" 
                                    name="urlfabricante" 
                                    value={props.formValues.urlfabricante}
                                    onChange={props.handleChange}
                                    className='roboto-style input-regurlfabricante'
                                    required
                                />
                            </div>
                        </div>

                        <div className='input-group'>
                            <div className='container-descripciondetalladaSave'>
                                <label className='roboto-style' htmlFor="descripciondetallada">Descripción detallada</label>
                                <textarea  
                                    name="descripciondetallada" 
                                    value={props.formValues.descripciondetallada}
                                    onChange={props.handleChange}
                                    className='input-descripciondetalladaSave roboto-style'
                                    required 
                                >
                                </textarea>
                            </div>
                        </div>

                        {props.errorMessage ? <p className='error-reg-message roboto-style'>Porfavor digite todos los campos requeridos</p> : ""}
                    </div>

                    <hr className='save-hrborder save-hr' />

                    <button type="submit" className='save-green roboto-style'>
                        <img src={SaveIcon} alt="Guardar" />
                        Guardar
                    </button>
                </form>
                
            </div>
        </Modal>
    );
}

export default AddNewProduct;