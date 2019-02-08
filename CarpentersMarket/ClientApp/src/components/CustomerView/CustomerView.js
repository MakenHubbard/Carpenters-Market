import React from 'react';
import { Link } from 'react-router-dom';

import usersRequests from '../../ApiCalls/UserRequests';
import prodType from '../../ApiCalls/ProductTypesRequests';
import productsRequests from '../../ApiCalls/ProductsRequests';


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


        console.log(this.state.products);
        console.log(products);
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
                        this.state.selectedTypeId != '' ? this.renderProducts(this.state.products.filter(product => product.productTypeId == this.state.selectedTypeId)) : this.renderProducts(this.state.products)

                    }

                </div>
            </div>
        )
    }


}

export default CustomerView;