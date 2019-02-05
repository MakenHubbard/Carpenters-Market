import React from 'react';
import { Link } from 'react-router-dom';


class Home extends React.Component {

    render() {
        return (
            <div className='Home'>
                
                <div>
                    <Link to='/productspage' className='btn btn-lg btn-block'>Are you a customer?</Link>
                </div>
                <div>
                    <button type="button" class="btn btn-primary">Are you a Carpenter?</button>
                </div>
            
            </div>
        );
    };
}

export default Home;
