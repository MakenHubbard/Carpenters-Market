import React from 'react';
import { Link } from 'react-router-dom';

import productsRequests from '../../ApiCalls/ProductsRequests'

class ProductsPage extends React.Component {
    state = {
        products: [],
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
                console.error('in the productspage component', err);
            })
    }

    render() {

        const prods = this.state.products.map(prod => {
            return (
                <div key={prod.id} className="panel panel-default" >
                    <div className="panel-heading">
                        <h3 className="panel-title">Product Id: {prod.id}</h3>
                        <img src={prod.imageUrl} alt={prod.id}/>
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
            </div>
            
            )
    }


}

export default ProductsPage;