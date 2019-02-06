import React from 'react';
import { Link } from 'react-router-dom';

import usersRequests from '../../ApiCalls/UserRequests';
import prodType from '../../ApiCalls/ProductTypesRequests';


class CustomerView extends React.Component {
    state = {
        users: [],
        productTypes: [],
    }

    componentDidMount = (e) => {
        this.getAllUsers();
        this.getTheProductTypes();
    }

    getAllUsers = () => {
        usersRequests
            .getAllUsers()
            .then((users) => {
                this.setState({ users: users });
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
                console.error('error in the product types component', err)
            })
    }

    render() {

        const carpenters = this.state.users.map(user => {
            if (user.isCarpenter == true) {
                return (
                    <div key={user.id} className="panel panel-default" >
                        <div className="panel-heading">
                            <h3 className="panel-title">Carpenter Id: {user.id}</h3>
                        </div>
                        <div className="panel-body">
                            <p>Carpenter: {`${user.firstName}` + " " + `${user.lastName}`}</p>

                        </div>
                    </div >
                )
            }
        })

        const pt = this.state.productTypes.map(pType => {
            return (
                <div key={pType.id}>
                    <div class="btn-group-vertical" role="group" aria-label="...">
                        <button type="button" className="btn btn-primary">{pType.title}</button>
                        
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
                    {carpenters}
                </div>
            </div>
        )
    }


}

export default CustomerView;