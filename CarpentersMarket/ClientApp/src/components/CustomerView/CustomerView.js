import React from 'react';
import { Link } from 'react-router-dom';

import prodType from '../../ApiCalls/ProductTypesRequests';
import productsRequests from '../../ApiCalls/ProductsRequests';

import './CustomerView.css';


class CustomerView extends React.Component {
    state = {
        products: [],
        productTypes: [],
        selectedTypeId: '',

    }

    componentDidMount = (e) => {
        this.getProducts();
        this.getTheProductTypes();
    }

    //-------------------------- Api calls 

    getProducts = () => {
        productsRequests
            .getAllProducts()
            .then((products) => {
                this.setState({ products });
            })
            .catch((err) => {
                console.error('in the customerview component', err);
            })
    }

    getTheProductTypes = () => {
        prodType
            .getAllProductTypes()
            .then((types) => {
                this.setState({ productTypes: types })
            })
            .catch((err) => {
                console.error('error in the product types component inside customerview', err)
            })
    }

    //------------------- click events

    clickedType = (e) => {
        this.setState({ selectedTypeId: e.target.id }, () => { console.log(this.state.selectedTypeId) })
        this.setState({ isClicked: true })
    }

    orderProductEvent = (e) => {

    }

    //----------------render products
    renderProducts = (products) => {
        return products.map(prod => {

            return (
                <div key={prod.id} className="panel panel-default" >
                    <div className="panel-heading">
                        <h2 className="panel-title"><b>{prod.title}</b></h2>
                    </div>
                    <div className="panel-body">
                        <div>
                            <img src={prod.imageUrl} />
                        </div>

                        <p><b>Description:</b> {prod.description}</p>
                        <p>Quantity: {prod.quantity}</p>

                        <button type="button" className="btn btn-info"> Order this product </button>

                    </div>
                </div >
            )

        })
    }


    render() {

        const products = this.state.products.map(prod => {

            return (
                <div key={prod.id} className="panel panel-default" >
                    <div className="panel-heading">
                        <h2 className="panel-title"><b>{prod.title}</b></h2>
                    </div>
                    <div className="panel-body">
                        <div>
                            <img src={prod.imageUrl} />
                        </div>

                        <p><b>Description:</b> {prod.description}</p>
                        <p>Quantity: {prod.quantity}</p>

                        <button type="button" className="btn btn-info"> Order this product </button>

                    </div>
                </div >
            )

        })

        const pt = this.state.productTypes.map(pType => {

            return (
                <div key={pType.id}  >
                    <div className="btn-group-vertical" role="group" aria-label="...">
                        <button type="button" className="btn btn-primary" id={pType.id} onClick={this.clickedType}>{pType.title}</button>

                    </div>


                </div>
            )
        })

        return (
            <div className="customersData row">
                <div>
                    <p><Link to='/' className='btn btn-lg btn-success'>Back to Home</Link></p>
                </div>
                <div className="col-xs-3">
                    {pt}
                </div>
                <div className="col-xs-7">

                    {
                        // taking the selectedTypeId current state and checking to see if its not empty then running the renderproducts func that maps over what is passed in it and filter the ones out where the productTypeId is equal to the id of the selected product type otherwise just display all the products
                        this.state.selectedTypeId != '' ? this.renderProducts(this.state.products.filter(product => product.productTypeId == this.state.selectedTypeId)) : this.renderProducts(this.state.products)

                    }

                </div>
            </div>
        )
    }


}

export default CustomerView;