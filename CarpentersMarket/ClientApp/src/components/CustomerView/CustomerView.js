import React from 'react';
import { Link } from 'react-router-dom';

import usersRequests from '../../ApiCalls/UserRequests';


class CustomerView extends React.Component {
    state = {
        users: [],
    }

    componentDidMount = (e) => {
        this.getAllUsers();
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

        return (
            <div className="carpentersData">
                <div>
                    <p><Link to='/' className='btn btn-lg btn-success'>Back to Home</Link></p>
                </div>
                <div>
                    {carpenters}
                </div>
            </div>
        )
    }


}

export default CustomerView;