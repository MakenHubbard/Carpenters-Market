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

const addProduct = (newProduct) => {
    return new Promise((resolve, reject) => {
        axios   
            .post(`api/products`, newProduct)
            .then((res) => {
                resolve(res.data);
            })
            .catch((err) => {
                reject(console.error('error in the add products requests in products request', err))
            })
    })
}



export default { getAllProducts, addProduct };