import React from 'react';
import { Link } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';

import productsRequests from '../../ApiCalls/ProductsRequests';


const defaultProduct = {
    title: '',
    description: '',
    userId: '',
    productTypeId: '',
    quantity: '',
    imageUrl: ''
}

class CarpenterView extends React.Component {
    state = {
        products: [],
        newProduct: defaultProduct,
        isClicked: false,
    }

    componentDidMount = (e) => {
        this.getAllProducts();
    }

    getAllProducts = () => {
        productsRequests
            .getAllProducts()
            .then((products) => {
                this.setState({ products: products });
            })
            .catch((err) => {
                console.error('in the CarpentersViewPage component', err);
            })
    }

    addProduct = (e) => {
        e.preventDefault();
        const { newProduct } = this.state;
        productsRequests
            .addProduct(newProduct)
            .then(() => {
                this.props.history.push('/carpenterview');
                this.setState({ isClicked: false });
                this.getAllProducts();
            })
            .catch((err) => {
                console.error('error in the add fucntion in carpentersview component', err);
            })
    }

    //------------Modal Handlers----------------------//

  
    addProductModal = (e) => {
        this.setState({ isClicked: true });
    }

    closeModal = (e) => {
        this.setState({ isClicked: false })
    }

    //---------------event handlers--------------------//

    addProductEvent = (info, e) => {
        const tempProd = { ...this.state.newProduct };
        tempProd[info] = e.target.value;
        this.setState({ newProduct: tempProd });
    }

    titleChange = (e) => {
        this.addProductEvent('title', e);
    }

    descriptionChange = (e) => {
        this.addProductEvent('description', e);
    }

    usersIdChange = (e) => {
        this.addProductEvent('usersId', e);
    }

    productTypeIdChange = (e) => {
        this.addProductEvent('productTypeId', e);
    }

    quantityChange = (e) => {
        this.addProductEvent('quantity', e);
    }

    imageUrlChange = (e) => {
        this.addProductEvent('imageUrl', e);
    }






    render() {
        const { newProduct } = this.state;

        const prods = this.state.products.map(prod => {
            return (
                <div key={prod.id} className="panel panel-default" >
                    <div className="panel-heading">
                        <h3 className="panel-title">Product Id: {prod.id}</h3>
                        <img src={prod.imageUrl} alt={prod.id} />
                    </div>
                    <div className="panel-body">
                        <ul>
                            <li>Product: {prod.title}</li>
                            <li>Product: {prod.description}</li>
                            <li>Product: {prod.title}</li>

                        </ul>

                    </div>
                </div >
            )
        })


        return (
            <div className="productsData">
                <div>
                    <p><Link to='/' className='btn btn-lg btn-success'>Back to Home</Link></p>
                </div>
                <div>
                    {prods}
                </div>

                <Modal show={this.state.isClicked} onHide={this.closeModal}>
                    <Modal.Header>
                        <Modal.Title>Add a New Product</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <form className="form-inline-block">
                            <div className="form-group">
                                <label htmlFor="exampleInputName2">Title </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="addTitle"
                                    placeholder="ex. 1"
                                    value={newProduct.title}
                                    onChange={this.titleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputName2">Description </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="addDescription"
                                    placeholder="ex. Dishwasher Necklace"
                                    value={newProduct.description}
                                    onChange={this.descriptionChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputName2">UsersId </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="addUsersId"
                                    placeholder="ex. Wash dishes on the go, WEARever you go"
                                    value={newProduct.usersId}
                                    onChange={this.usersIdChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputName2">Product Type Id </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="addProductTypeId"
                                    placeholder="ex. 5"
                                    value={newProduct.productTypeId}
                                    onChange={this.productTypeIdChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputName2">Quantity</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="addQuantity"
                                    placeholder="ex. 5"
                                    value={newProduct.quantity}
                                    onChange={this.quantityChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputName2">ImageUrl </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="addImageUrl"
                                    placeholder="ex. fo' fiddy"
                                    value={newProduct.imageUrl}
                                    onChange={this.imageUrlChange}
                                />
                            </div>
                        </form>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button onClick={this.closeModal}>Close</Button>

                        <Button bsStyle="primary" onClick={this.addProduct}>Save changes</Button>

                    </Modal.Footer>
                </Modal>
                <div>
                    <button type="button" className="btn btn-primary" onClick={this.addProductModal} aria-label="Left Align">
                        <span className="glyphicon glyphicon-plus" aria-hidden="true"></span>
                    </button>
                </div>
            </div>
        )
    }
}

export default CarpenterView;