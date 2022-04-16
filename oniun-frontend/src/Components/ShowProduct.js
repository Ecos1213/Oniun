import React from 'react';
import Modal from './Modal';
import './styles/ShowProduct.css';
// todo estos componentes que contienen componentes es por que asi podemos modificar
// o colocar mas contenido o funciones a este modal y asi poder hacer una mejor composicion
const ShowProduct = (props) => {
    console.log(props.selectedProducts)
    let id, descripciondetallada, descripcionrapida, disponible, nombreproducto, proveedor, referencia, url;

    if(typeof props.selectedProducts[0] !== 'undefined') {
        // id = props.selectedProducts[0].id;
        descripciondetallada = props.selectedProducts[0].descripciondetallada;
        // descripcionrapida = props.selectedProducts[0].descripcionrapida;
        disponible = props.selectedProducts[0].disponible;
        nombreproducto = props.selectedProducts[0].nombreproducto;
        proveedor = props.selectedProducts[0].proveedor;
        referencia = props.selectedProducts[0].referencia;
    }

    return (
        <Modal isOpenModal={props.isOpen} onClose={props.onClose} width={"469px"} height={"450px"}> 
        
            <div className="">
                <h1 className='description-detail-text roboto-style'>
                    Descripción detallada
                </h1>
                <hr />

                <div>
                    <div className='input-group custom-max-width custom-gap-showproducts'>
                        <div className='width-50'>
                            <label htmlFor="nameProduct" className='roboto-style'>Producto</label>
                            <input 
                                type="text" 
                                name="nameProduct" 
                                placeholder={nombreproducto} 
                                className='roboto-style input-nameProduct'
                                readOnly
                            />
                        </div>
                        <div className='width-50'>
                            <label htmlFor="stock" className='roboto-style'>Disponible</label>
                            <input 
                                type="text" 
                                name="stock" 
                                placeholder={disponible} 
                                className='roboto-style input-stock'
                                readOnly
                            />
                        </div>
                    </div>

                    <div className='input-group custom-max-width custom-gap-showproducts'>
                        <div>
                            <label className='roboto-style' htmlFor="proveedor">Proveedor</label>
                            <input 
                                type="text" 
                                name="proveedor" 
                                placeholder={proveedor} 
                                className='roboto-style input-proveedor'
                                readOnly
                            />
                        </div>
                        <div>
                            <label className='roboto-style' htmlFor="referencia">Referencia</label>
                            <input 
                                type="text" 
                                name="referencia" 
                                placeholder={referencia} 
                                className='roboto-style input-referencia'
                                readOnly
                            />
                        </div>
                    </div>
                    <div className='input-group'>
                        <div className='container-descripciondetallada'>
                            <label className='roboto-style' htmlFor="descripciondetallada">Descripción detallada</label>
                            <textarea  
                                name="descripciondetallada" 
                                className='input-descripciondetallada roboto-style'
                                value={descripciondetallada}
                                readOnly 
                            >
                                {descripciondetallada} 
                            </textarea>
                        </div>
                    </div>
                </div>
                <hr />
            </div>
        </Modal>
    );
}

export default ShowProduct;