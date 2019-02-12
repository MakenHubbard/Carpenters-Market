import React from 'react';
import { Link } from 'react-router-dom';


class Home extends React.Component {

    render() {
        return (
            <div className='Home'>
                
                <div>
                    <Link to='/customerview' className='btn btn-lg btn-block'>Are you a customer?</Link>
                </div>
                <div>
                    <Link to='/carpenterview' className="btn btn-primary">Are you a Carpenter?</Link>
                </div>
            
            </div>
        );
    };
}

export default Home;
