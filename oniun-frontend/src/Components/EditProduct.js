import React from 'react';
import Modal from './Modal';
import './styles/EditProduct.css';
import SaveIcon from '../images/save-icon.png';


const EditProduct = (props) => {

    let descripcionrapida, descripciondetallada, disponible, nombreproducto, proveedor, referencia, url;

    if(typeof props.selectedProducts[0] !== 'undefined') {      
        descripciondetallada = props.selectedProducts[0].descripciondetallada;
        descripcionrapida = props.selectedProducts[0].descripcionrapida;
        disponible = props.selectedProducts[0].disponible;
        nombreproducto = props.selectedProducts[0].nombreproducto;
        proveedor = props.selectedProducts[0].proveedor;
        referencia = props.selectedProducts[0].referencia;
        url = props.selectedProducts[0].url;
    }

    return (
        <Modal 
            isOpenModal={props.isOpen} 
            onClose={props.onClose} 
            width={"469px"} 
            height={"535px"}
            title={"Editar producto"}
        > 
        
            <div className="">
                
                <hr className='save-hrborder' />
                <form onSubmit={props.handleRegisterSubmit}>
                    <div>
                        <div className='input-group custom-max-width custom-gap-addnewproducts border-bottom-21'>
                            <div className='width-50'>
                                <label htmlFor="editNameProduct" className='roboto-style'>Producto<span className='symbol-require'>*</span></label>
                                <input 
                                    type="text" 
                                    name="editNameProduct" 
                                    className='roboto-style input-editNameProduct'
                                    placeholder={nombreproducto}
                                    value={props.formValues.editNameProduct}
                                    onChange={props.handleChange}
                                    required
                                />
                            </div>
                            <div className='width-50'>
                                <label htmlFor="editStock" className='roboto-style'>Disponible<span className='symbol-require'>*</span></label>
                                <input 
                                    type="text" 
                                    name="editStock" 
                                    pattern="[0-9]*"
                                    placeholder={disponible}
                                    value={props.formValues.editStock}
                                    onChange={props.handleChange}
                                    className='roboto-style input-editStock'
                                    required
                                />
                            </div>
                        </div>

                        <div className='input-group custom-max-width custom-gap-addnewproducts border-bottom-12'>
                            <div className='width-50'>
                                <label className='roboto-style' htmlFor="editProveedor">Proveedor<span className='symbol-require'>*</span></label>
                                <input 
                                    type="text" 
                                    name="editProveedor" 
                                    placeholder={proveedor}
                                    value={props.formValues.editProveedor}
                                    onChange={props.handleChange}
                                    className='roboto-style input-editProveedor'
                                    required
                                />
                            </div>
                            <div className='width-50'>
                                <label className='roboto-style' htmlFor="editReferencia">Referencia <span className='symbol-require'>*</span></label>
                                <input 
                                    type="text" 
                                    name="editReferencia" 
                                    placeholder={referencia}
                                    value={props.formValues.editReferencia}
                                    onChange={props.handleChange}
                                    className='roboto-style input-editReferencia'
                                    required
                                />
                            </div>
                        </div>

                        <div className='input-group custom-max-width custom-gap-addnewproducts border-bottom-12'>
                            <div className='width-50'>
                                <label className='roboto-style' htmlFor="descripcionrapida">Descripción rapida<span className='symbol-require'>*</span></label>
                                <input 
                                    type="text" 
                                    name="editDescripcionrapida" 
                                    placeholder={descripcionrapida}
                                    value={props.formValues.editDescripcionrapida}
                                    onChange={props.handleChange}
                                    className='roboto-style input-editDescripcionrapida'
                                    required
                                />
                            </div>
                            <div className='width-50'>
                                <label className='roboto-style' htmlFor="editUrlfabricante">Url del fabricante <span className='symbol-require'>*</span></label>
                                <input 
                                    type="text" 
                                    name="editUrlfabricante" 
                                    placeholder={url}
                                    value={props.formValues.editUrlfabricante}
                                    onChange={props.handleChange}
                                    className='roboto-style input-editUrlfabricante'
                                    required
                                />
                            </div>
                        </div>

                        <div className='input-group'>
                            <div className='container-editDescripciondetallada'>
                                <label className='roboto-style' htmlFor="editDescripciondetallada">Descripción detallada</label>
                                <textarea  
                                    name="editDescripciondetallada" 
                                    value={props.formValues.editDescripciondetallada}
                                    onChange={props.handleChange}
                                    placeholder={descripciondetallada}
                                    className='input-editDescripciondetallada roboto-style'
                                    required 
                                >
                                    {descripciondetallada}
                                </textarea>
                            </div>
                        </div>

                        
                    </div>
                    <hr className='save-hrborder hr-borderedit' />
                    <button type="submit" className='roboto-style save-green'>
                        <img src={SaveIcon} alt="Guardar" />
                        Guardar
                    </button>
                </form>
                
            </div>
        </Modal>
    );
}

export default EditProduct;