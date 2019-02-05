import axios from 'axios';

const getAllProductTypes = () => {
    return new Promise((resolve, reject) => {
        axios
            .get('api/producttypes')
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                reject(err);
            })
    })
}

export default { getAllProductTypes };