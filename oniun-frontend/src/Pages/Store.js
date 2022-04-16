import React, {Component} from "react";
import Layout from "../Components/Layout";
import OnionImage from "../Components/OnionImage";
import AddNewProduct from "../Components/AddNewProduct";
import Products from "../Components/Products";
import ShowProduct from "../Components/ShowProduct";
import "./styles/Store.css";

//style="margin-left:25%"
//style="width:100%"
class Store extends Component {
    
    constructor(props) {
        super(props);
        this.handleSearchKeyUp = this.handleSearchKeyUp.bind(this);
    }

    state= {
        modalIsOpen: false,
        modalDeleteIsOpen: false,
        modalEditIsOpen: false,
        modalShowIsOpen: false,
        products: [],
        selectedProducts: [],
        getData: {
            dataProducts: true
        },
        form: {
            searchProduct: ''
        }
    }
    

    handleChange = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        //this.state.form.searchProduct;
    }

    handleSearchKeyUp = e => {

    }

    onHandleOpen = e => {
        this.setState({
            modalIsOpen: true,
        })
    }

    onHandleOpenShow = e => {
        this.setState({
            modalShowIsOpen: true,
        })
    }

    onHandleClose= e => {
        this.setState({
            modalIsOpen: false,
            modalDeleteIsOpen: false,
            modalEditIsOpen: false,
            modalShowIsOpen: false
        })
    }

    deleteProduct = (id) => {
        const productdel = this.state.products.filter((product) => product.id === id);
    }

    updateProduct = (id) => {
        console.log(id);
    }

    showProduct = (id) => {
        const productshow = this.state.products.filter((product) => product.id === id);

        this.setState({
            selectedProducts: productshow
        });
        this.onHandleOpenShow();
    }

    fetcProducts = async () => {
        const dataForm = JSON.stringify(this.state.getData);

        const requestOptions = {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: dataForm
        };

        await fetch('http://localhost/proyecto%20entrevista/Oniun/Oniun/PHP/index.php', requestOptions)
            .then(response => response.json())
            .then(async (rest)=> {

                this.setState({
                    products: rest.productos
                });
                
            }).catch((e)=>{
                console.log("[ERROR BODEGA]", e.message)
            })
    }

    componentDidMount() {
        this.fetcProducts();
    }

    render() {
        return(
            <Layout>
                <div className="content-leftbar-store">
                    <OnionImage />

                    <div className="container-dashboard">
                        <div className="padding-dashboard">
                            <div className="input-group custom-store-gap">

                                <input 
                                    type="text"
                                    name="searchProduct"
                                    className='roboto-regular input-search-store'
                                    value={this.state.form.searchProduct} 
                                    onChange={this.handleChange} 
                                    onKeyUp={this.handleSearchKeyUp}
                                    placeholder="Buscar producto"
                                />


                                <button type="button" className="button-new-product roboto-style" onClick={this.onHandleOpen}>Nuevo producto</button>
                            </div>
                            <table className="default">
                                <tbody>
                                    <tr>

                                        <th>Nombre del Producto</th>

                                        <th>Disponible</th>

                                        <th>Descripción</th>

                                        <th>Opciones</th>

                                        <th>Editar</th>

                                        <th>Eliminar</th>

                                    </tr>
                                    {
                                        this.state.products.map((product, i) => {
                                            return(
                                                <Products 
                                                    key={i} 
                                                    product={product}
                                                    deleteProduct={() => this.deleteProduct(product.id)}
                                                    updateProduct={() => this.updateProduct(product.id)}
                                                    showProduct={() => this.showProduct(product.id)}

                                                />
                                            )
                                            
                                        })
                                    }
                                    
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <AddNewProduct 
                    isOpen={this.state.modalIsOpen} 
                    onClose={this.onHandleClose} 
                />

                <ShowProduct 
                    isOpen={this.state.modalShowIsOpen} 
                    onClose={this.onHandleClose}
                    selectedProducts={this.state.selectedProducts}
                />
            </Layout>
        );
    }
}

export default Store;