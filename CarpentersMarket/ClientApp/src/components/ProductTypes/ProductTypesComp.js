﻿import React from 'react';
import { Link } from 'react-router-dom';

import prodType from '../../ApiCalls/ProductTypesRequests';

class ProductTypes extends React.Component {
    state = {
        productTypes: [],
    }

    componentDidMount = (e) => {
        this.getTheProductTypes();
    }

    getTheProductTypes = () => {
        prodType
            .getAllProductTypes()
            .then((types) => {
                this.setState({ productTypes: types })
            })
            .catch((err) => {
                console.error('error in the product types component', err)
            })
    }

    render() {
        const pt = this.state.productTypes.map(pType => {
            return (
                <div key={pType.id}>
                    <ul>
                        <li><h1>{pType.title}</h1></li>
                    </ul>
                </div>
            )
        })


        return (
            <div className="productTypes">
                <div>
                    <p><Link to='/' className='btn btn-lg btn-success'>Back to Home</Link></p>
                </div>
                <div>
                    {pt}
                </div>
            </div>

        )
    }

}

export default ProductTypes