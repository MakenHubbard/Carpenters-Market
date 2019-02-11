import axios from 'axios';

const addOrder = (newOrder) => {
    return new Promise((resolve, reject) => {
        axios 
            .put('api/addorder', newOrder)
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                reject(err);
            })
    })
}

export default { addOrder };