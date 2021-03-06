import React, {Component} from "react";
import Layout from "../Components/Layout";
import OnionImage from "../Components/OnionImage";
import AddNewProduct from "../Components/AddNewProduct";
import Products from "../Components/Products";
import ShowProduct from "../Components/ShowProduct";
import EditProduct from "../Components/EditProduct";
import DeleteProduct from "../Components/DeleteProduct";
import TopStore from "../Components/TopStore";
import "./styles/Store.css";
import nextImage from '../images/next.svg';
import skipNext from '../images/skip-next.png';
import backImage from '../images/back.png';
import skipBack from '../images/skip-back.png';


//style="margin-left:25%"
//style="width:100%"
class Store extends Component {
    
    constructor(props) {
        super(props);
        this.handleSearchKeyUp = this.handleSearchKeyUp.bind(this);
    }

    state= {
        isCopyArray: false,
        modalIsOpen: false,
        modalDeleteIsOpen: false,
        modalEditIsOpen: false,
        modalShowIsOpen: false,
        isDelete: true,
        currentPage: 1,
        todosPerPage: 10,
        products: [],
        tempsearch: [],
        selectedProducts: [],
        getData: {
            dataProducts: true
        },
        form: {
            searchProduct: '',
            nameProduct: '',
            stock: '',
            proveedor: '',
            referencia: '', 
            descripcionrapida: '',
            urlfabricante: '',
            descripciondetallada: '',
            id: '',
            editNameProduct: '',
            editStock: '',
            editProveedor: '',
            editReferencia: '', 
            editDescripcionrapida: '',
            editUrlfabricante: '',
            editDescripciondetallada: '',
           
        },
        requiredMessage: false
    }

    handleCancel = e => {
        e.preventDefault();
        this.onHandleClose();
    }
    
    handleClick= (event) => {
        document.getElementById(event.target.id).classList.add("activePagination");
        this.setState({
          currentPage: Number(event.target.id)
        });
    }

    handleChange = e => {
        if(e.target.name === "stock" || e.target.name === "editStock"){
           
            if(e.target.value === ""){
                
            }else if(!e.target.validity.valid) {
               return null;
            }
        }

        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
    }

    handleChangePages = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }    

    next = (e) => {
        let nextId = Number(this.state.currentPage) + 1;
        if(document.getElementById(nextId)) {
            document.getElementById(nextId).classList.add("activePagination");
            this.setState({
                currentPage: nextId
            });
        }
    }

    back = (e) => {
        let backId = Number(this.state.currentPage) - 1;
        if(document.getElementById(backId)) {
            document.getElementById(backId).classList.add("activePagination");
            this.setState({
                currentPage: backId
            });
        }
    }

    last = (number) => {
        let lastId = Number(number[0]);
        if(document.getElementById(lastId)) {
            document.getElementById(lastId).classList.add("activePagination");
            this.setState({
                currentPage: lastId
            });
        }
    }

    first = (number) => {
        let firstId = Number(number);
        console.log(number);
        if(document.getElementById(firstId)) {
            document.getElementById(firstId).classList.add("activePagination");
            this.setState({
                currentPage: firstId
            });
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        //this.state.form.searchProduct;
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.currentPage !== this.state.currentPage ){
            document.getElementById(prevState.currentPage).classList.remove("activePagination");
        }   
    }

    handleRegisterSubmit = async e => {
        e.preventDefault();
        if(
            this.state.form.nameProduct.length > 0 
            && this.state.form.stock.length > 0
            && this.state.form.proveedor.length > 0
            && this.state.form.referencia.length > 0
            && this.state.form.descripcionrapida.length > 0
            && this.state.form.urlfabricante.length > 0
            && this.state.form.descripciondetallada.length > 0
        ) {
            const form = {
                id: this.state.form.id,
                nameProduct: this.state.form.nameProduct,
                stock: this.state.form.stock,
                proveedor: this.state.form.proveedor,
                referencia: this.state.form.referencia,
                descripcionrapida: this.state.form.descripcionrapida,
                urlfabricante: this.state.form.urlfabricante,
                descripciondetallada: this.state.form.descripciondetallada
            }
    
            const dataForm = JSON.stringify(form);
    
            const requestOptions = {
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body: dataForm
            };
    
            await fetch('http://localhost/Oniun/PHP/index.php', requestOptions)
                .then(response => response.json())
                .then(async (rest)=> {
    
                    this.setState({
                        form: {
                            ...this.state.form,
                            nameProduct: '',
                            stock: '',
                            proveedor: '',
                            referencia: '', 
                            descripcionrapida: '',
                            urlfabricante: '',
                            descripciondetallada: '',
                            requiredMessage: false
                        },
                        products: rest.productos,
                        totalRegisters: rest.productos.length
                    });
                    
                    
                }).catch((e)=>{
                    console.log("[ERROR BODEGA]", e.message)
                });

            this.onHandleClose();
        }else{
            console.log("entre");
            this.setState({
                requiredMessage: true
            });
        }
        

        
    }

    handleEditSubmit = async e => {
        e.preventDefault();
        if(
            this.state.form.editNameProduct.length > 0 
            && this.state.form.editStock.length > 0
            && this.state.form.editProveedor.length > 0
            && this.state.form.editReferencia.length > 0
            && this.state.form.editDescripcionrapida.length > 0
            && this.state.form.editUrlfabricante.length > 0
            && this.state.form.editDescripciondetallada.length > 0
        ) {
            const form = {
                id: this.state.form.id,
                editNameProduct: this.state.form.editNameProduct,
                editStock: this.state.form.editStock,
                editProveedor: this.state.form.editProveedor,
                editReferencia: this.state.form.editReferencia,
                editDescripcionrapida: this.state.form.editDescripcionrapida,
                editUrlfabricante: this.state.form.editUrlfabricante,
                editDescripciondetallada: this.state.form.editDescripciondetallada
            }
            const dataForm = JSON.stringify(form);
    
            const requestOptions = {
                method: 'PUT',
                headers:{
                    'Content-Type': 'application/json'
                },
                body: dataForm
            };
    
            await fetch('http://localhost/Oniun/PHP/index.php', requestOptions)
                .then(response => response.json())
                .then(async (rest)=> {
                    this.setState({
                        selectedProducts: [],
                        products: rest.productos,
                        totalRegisters: rest.productos.length
                    });
                    
                }).catch((e)=>{
                    console.log("[ERROR EDIT]", e.message)
                });
            this.onHandleClose();
        }else{
            console.log("entre");
            this.setState({
                requiredMessage: true
            });
        }
        
        
    }

    handleDeleteSubmit = async e => {
        e.preventDefault();
        const form = {
            id: this.state.form.id,
            isDelete: this.state.isDelete
        }
        const dataForm = JSON.stringify(form);

        const requestOptions = {
            method: 'DELETE',
            headers:{
                'Content-Type': 'application/json'
            },
            body: dataForm
        };

        await fetch('http://localhost/Oniun/PHP/index.php', requestOptions)
            .then(response => response.json())
            .then(async (rest)=> {
                this.setState({
                    form: {
                        ...this.state.form,
                        id: ''
                    },
                    selectedProducts: [],
                    isDelete: false,
                    products: rest.productos,
                    totalRegisters: rest.productos.length
                });
                
            }).catch((e)=>{
                console.log("[ERROR DELETE]", e.message)
            });
        this.onHandleClose();
    }

    handleSearchKeyUp = e => {
        if(!this.state.isCopyArray){
            this.setState({
                isCopyArray: true,
                tempsearch: this.state.products
            });
        }

        let arraySearch=  this.state.products.filter(
            (element)=> element.nombreproducto.toLowerCase().includes(e.target.value.toLowerCase()) || element.descripciondetallada.toLowerCase().includes(e.target.value.toLowerCase())
        );

        if(e.target.value.length > 0) {
            this.setState({
                products: arraySearch
            });
            
        }else if(e.target.value.length === 0 && this.state.isCopyArray){
            console.log(this.state.tempsearch);
            this.setState({
                isCopyArray: false,
                products: this.state.tempsearch,
                tempsearch: []
            });
        }
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

    onHandleOpenEdit = e => {
        this.setState({
            modalEditIsOpen: true,
        })
    }

    onHandleOpenDelete = e => {
        this.setState({
            modalDeleteIsOpen: true,
        })
    }

    onHandleClose= e => {
        this.setState({
            selectedProducts: [],
            modalIsOpen: false,
            modalDeleteIsOpen: false,
            modalEditIsOpen: false,
            modalShowIsOpen: false,
            form: {
                nameProduct: '',
                stock: '',
                proveedor: '',
                referencia: '', 
                descripcionrapida: '',
                urlfabricante: '',
                descripciondetallada: '',
                id: '',
                editNameProduct: '',
                editStock: '',
                editProveedor: '',
                editReferencia: '', 
                editDescripcionrapida: '',
                editUrlfabricante: '',
                editDescripciondetallada: ''
            },
            requiredMessage: false
        })
    }

    deleteProduct = (id) => {
        const productdel = this.state.products.filter((product) => product.id === id);
        this.setState({
            form: {
                ...this.state.form,
                id: productdel[0].id,
            }
        });
        this.onHandleOpenDelete();
    }

    updateProduct = async (id) => {
        const productshow = this.state.products.filter((product) => product.id === id);

        this.setState({
            form: {
                ...this.state.form,
                id: productshow[0].id,
                editNameProduct: productshow[0].nombreproducto,
                editStock: productshow[0].disponible,
                editProveedor: productshow[0].proveedor,
                editReferencia: productshow[0].referencia,
                editDescripcionrapida: productshow[0].descripcionrapida,
                editUrlfabricante: productshow[0].url,
                editDescripciondetallada: productshow[0].descripciondetallada,            
                selectedProducts: productshow
            }
            
        });
        this.onHandleOpenEdit();
    }

    showProduct = (id) => {
        const productshow = this.state.products.filter((product) => product.id === id);

        this.setState({
            selectedProducts: productshow
        });
        this.onHandleOpenShow();
    }

    fetchProducts = async () => {
        const dataForm = JSON.stringify(this.state.getData);

        const requestOptions = {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: dataForm
        };

        await fetch('http://localhost/Oniun/PHP/index.php', requestOptions)
            .then(response => response.json())
            .then(async (rest)=> {

                this.setState({
                    products: rest.productos,
                    totalRegisters: rest.productos.length
                });
                
            }).catch((e)=>{
                console.log("[ERROR ALL BODEGA]", e.message)
            })
    }

    componentDidMount() {
        this.fetchProducts();
    }

    render() {
        const { currentPage, todosPerPage } = this.state;

        // Logic for displaying current todos
        //2 * 10 = 20
        const indexOfLastTodo = currentPage * todosPerPage;
        //20 - 10 = 10
        const indexOfFirstTodo = indexOfLastTodo - todosPerPage;

        // Logic for displaying page numbers
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(this.state.products.length / todosPerPage); i++) {
          pageNumbers.push(i);
        }

        const renderPageNumbers = pageNumbers.map(number => {
          return (
            <li
                className={number === 1 ? "activePagination pagination" : "pagination" }
                key={number}
                id={number}
                onClick={this.handleClick}
            >
                {number}
            </li>
          );
        });
                
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
                            <TopStore 
                                todosPerPage={this.state.todosPerPage}
                                handleChange={this.handleChangePages}
                                totalRegisters={this.state.totalRegisters}
                            />
                            <table className="default-products roboto-style">
                                <tbody>
                                    <tr className="text-white header-table">

                                        <th className="padding-th border-th">Nombre del Producto</th>

                                        <th className="padding-th width-stock border-th">Disponible</th>

                                        <th className="padding-th border-th">Descripci??n</th>

                                        <th className="padding-th width-option border-th">Opciones</th>

                                        <th className="padding-th width-stock border-th">Editar</th>

                                        <th className="padding-th width-stock">Eliminar</th>

                                    </tr>
                                    {
                                        this.state.products.slice(indexOfFirstTodo, indexOfLastTodo).map((product, i) => {
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
                            <ul id="page-numbers">
                                <li className="firstPagination" onClick={() => this.first(pageNumbers[0])} > <img src={skipBack} alt="Primero" /> </li>
                                <li className="backPagination" onClick={this.back}> <img src={backImage} alt="Atras" /> </li>
                                {renderPageNumbers}
                                <li className="nextPagination" onClick={this.next}> <img src={nextImage} alt="Siguiente" /> </li>
                                <li className="lastPagination" onClick={() => this.last(pageNumbers.slice(-1))} > <img src={skipNext} alt="Ultimo" /> </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <AddNewProduct 
                    isOpen={this.state.modalIsOpen} 
                    onClose={this.onHandleClose} 
                    formValues={this.state.form}
                    handleRegisterSubmit={this.handleRegisterSubmit}
                    handleChange={this.handleChange}
                    errorMessage={this.state.requiredMessage}
                />

                <ShowProduct 
                    isOpen={this.state.modalShowIsOpen} 
                    onClose={this.onHandleClose}
                    selectedProducts={this.state.selectedProducts}
                />

                <EditProduct 
                    isOpen={this.state.modalEditIsOpen} 
                    onClose={this.onHandleClose} 
                    formValues={this.state.form}
                    selectedProducts={this.state.selectedProducts}
                    handleRegisterSubmit={this.handleEditSubmit}
                    handleChange={this.handleChange}
                    errorMessage={this.state.requiredMessage}
                />

                <DeleteProduct 
                    isOpen={this.state.modalDeleteIsOpen} 
                    onClose={this.onHandleClose} 
                    formValues={this.state.form}
                    selectedProducts={this.state.selectedProducts}
                    Delete={this.handleDeleteSubmit}
                    Cancel={this.handleCancel}
                    handleChange={this.handleChange}
                />
            </Layout>
        );
    }
}

export default Store;