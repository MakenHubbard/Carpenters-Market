import axios from 'axios';

const getAllProducts = () => {
    return new Promise((resolve, reject) => {
        axios
            .get('api/products')
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                reject(err);
            });
    });
};



export default { getAllProducts };