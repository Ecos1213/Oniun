import React from "react";

function Products({
    product,
    deleteProduct,
    updateProduct,
    showProduct
}) {
    return(
            <tr>

                <td>{product.nombreproducto}</td>

                <td>{product.disponible}</td>

                <td>{product.descripcionrapida}</td>

                <td>
                    <button onClick={showProduct}>Detalle</button>
                    <a href={product.url}>Enlace</a> 
                </td>

                <td><button onClick={updateProduct}>Editar</button></td>

                <td><button onClick={deleteProduct}> Eliminar </button></td>

            </tr>
    );
}

export default Products;