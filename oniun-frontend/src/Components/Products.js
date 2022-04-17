import React from "react";
import './styles/Product.css'

function Products({
    product,
    deleteProduct,
    updateProduct,
    showProduct
}) {
    return(
            <tr className="text-gray">

                <td className="padding-td border-td">{product.nombreproducto}</td>

                <td className="padding-td border-td">{product.disponible}</td>

                <td className="padding-td border-td"><span>{product.descripcionrapida}</span></td>

                <td className="padding-td border-td ">
                    <div className="content-buttons-options">
                        <button onClick={showProduct} className="button-detalle">Detalle</button>
                        <a href={product.url} className="button-link">Enlace</a> 
                    </div>
                </td>

                <td className="padding-td border-td"><button onClick={updateProduct} className="button-editar">Editar</button></td>

                <td className="padding-td border-td-last"><button onClick={deleteProduct} className="button-eliminar"> Eliminar </button></td>

            </tr>
    );
}

export default Products;